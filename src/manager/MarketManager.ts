import { backendUrl } from '../constants';

const fetch = require('node-fetch');

export class MarketManager {
  private static get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(backendUrl + url)
        .then((res: Response) => resolve(res.text()))
        .catch(reject);
    });
  }

  public static async isOpen(): Promise<boolean> {
    const bool = await this.get('market/isOpen');
    return bool === 'true' ? true : false;
  }

  public static async isClosed(): Promise<boolean> {
    const bool = await this.get('market/isClosed');
    return bool === 'true' ? true : false;
  }

  public static async getStatus(): Promise<string> {
    return this.get('market/status');
  }
}
