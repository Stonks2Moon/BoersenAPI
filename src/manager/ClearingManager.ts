import { BörsenAPI } from '../BörsenAPI';
import { backendUrl } from '../constants';
import { RequestManager } from './RequestManager';
const fetch = require('node-fetch');

export class ClearingManager {
  constructor(private readonly api: BörsenAPI) {}

  public async getClearing(month: number, year: number): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      fetch(backendUrl + 'clearing/' + month + '/' + year, {
        headers: {
          Authorization: `Bearer ${this.api.token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res: any) => resolve(res.buffer()))
        .catch(reject);
    });
  }

  public async getReport(timestamp: number): Promise<number> {
    return +RequestManager._get('clearing/report/' + timestamp, this.api.token);
  }
}
