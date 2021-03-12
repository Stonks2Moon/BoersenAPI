import { RequestManager } from './RequestManager';

export class MarketManager {
  public static async isOpen(): Promise<boolean> {
    const bool = await RequestManager._get('market/isOpen');
    return bool === 'true' ? true : false;
  }

  public static async isClosed(): Promise<boolean> {
    const bool = await RequestManager._get('market/isClosed');
    return bool === 'true' ? true : false;
  }

  public static async getStatus(): Promise<string> {
    return RequestManager._get('market/status');
  }
}
