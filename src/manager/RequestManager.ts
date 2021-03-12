import { backendUrl } from '../constants';
const fetch = require('node-fetch');

export class RequestManager {
  private static async handleReponse(
    res: Response,
    reject: (reason?: any) => void
  ): Promise<any> {
    if (!res.ok) {
      reject((await res.json()).message);
    }
    return res.json();
  }

  private static getOptions(
    method: 'POST' | 'GET' | 'DELETE',
    token?: string,
    body?: any
  ): any {
    return {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }

  private static execute(url: string, options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(backendUrl + encodeURI(url), options)
        .then((res: Response) => this.handleReponse(res, reject))
        .then(resolve)
        .catch(reject);
    });
  }

  public static _get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(backendUrl + url)
        .then((res: Response) => resolve(res.text()))
        .catch(reject);
    });
  }

  public static async post(
    url: string,
    token: string,
    data: any
  ): Promise<any> {
    return this.execute(url, this.getOptions('POST', token, data));
  }

  public static async delete(
    url: string,
    token: string,
    data: any
  ): Promise<any> {
    return this.execute(url, this.getOptions('DELETE', token, data));
  }

  public static async get(url: string, token?: string): Promise<any> {
    return this.execute(url, this.getOptions('GET', token));
  }
}
