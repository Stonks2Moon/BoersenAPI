import { Price } from '../models/Price.model';
import { PriceOptions } from '../models/PriceOptions.model';
import { Share } from '../models/Share.model';
import { RequestManager } from './RequestManager';

export class ShareManager {
  public static async getShares(): Promise<Share[]> {
    return RequestManager.get('share');
  }

  public static async getPrice(shareId: string): Promise<number> {
    return +(await RequestManager._get('share/price/' + shareId));
  }

  public static async getPrices(
    shareId: string,
    options?: PriceOptions
  ): Promise<Price[]> {
    let querie = Object.entries(options || {})
      .map((o) => `${o[0]}=${o[1]}`)
      .join('&');

    console.log('share/prices/' + shareId + '?' + querie);

    return RequestManager.get('share/prices/' + shareId + '?' + querie);
  }
}
