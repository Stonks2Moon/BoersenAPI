import { backendUrl } from '../constants';
import { Price } from '../models/Price.model';
import { Share } from '../models/Share.model';
import { RequestManager } from './RequestManager';

export class ShareManager {
  private static get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(backendUrl + url)
        .then((res: Response) => resolve(res.text()))
        .catch(reject);
    });
  }

  public static async getShares(): Promise<Share[]> {
    return RequestManager.get('share');
  }

  public static async getPrice(shareId: string): Promise<number> {
    return +(await this.get('share/price/' + shareId));
  }

  public static async getPrices(shareId: string): Promise<Price[]> {
    return RequestManager.get('share/prices/' + shareId);
  }

  public static async getPricesFrom(
    shareId: string,
    from: number
  ): Promise<Price[]> {
    return RequestManager.get('share/prices/' + shareId + '?from=' + from);
  }

  public static async getPricesUntil(
    shareId: string,
    until: number
  ): Promise<Price[]> {
    return RequestManager.get('share/prices/' + shareId + '?until=' + until);
  }

  public static async getPricesFromUntil(
    shareId: string,
    from: number,
    until: number
  ): Promise<Price[]> {
    return RequestManager.get(
      'share/prices/' + shareId + '?from=' + from + '&until=' + until
    );
  }
}
