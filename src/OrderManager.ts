import { backendUrl } from './constants';
import { PlaceOrderDto } from './dtos/PlaceOrder.dto';
import { MoonStonksOrder } from './interfaces/IOrder.interface';
const fetch = require('node-fetch');

export class OrderManager {
  constructor(private readonly token: string) {}

  private static async handleReponse(
    res: Response,
    reject: (reason?: any) => void
  ): Promise<MoonStonksOrder> {
    if (!res.ok) {
      reject((await res.json()).message);
    }
    return res.json();
  }

  public static async placeOrder(
    token: string,
    dto: PlaceOrderDto
  ): Promise<MoonStonksOrder> {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    };

    return new Promise((resolve, reject) => {
      fetch(backendUrl + 'order', options)
        .then((res: Response) => this.handleReponse(res, reject))
        .then(resolve)
        .catch(reject);
    });
  }

  public async getStatus(orderId: string): Promise<MoonStonksOrder> {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return new Promise((resolve, reject) => {
      fetch(backendUrl + 'order/' + encodeURI(orderId), options)
        .then((res: Response) => OrderManager.handleReponse(res, reject))
        .then(resolve)
        .catch(reject);
    });
  }
}
