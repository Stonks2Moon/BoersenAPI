import { MoonStonksOrder } from './interfaces/IOrder.interface';
import { OrderManager } from './OrderManager';

export class BörsenAPI {
  constructor(
    private readonly token: string,
    private readonly onMatch: string,
    private readonly onComplete: string,
    private readonly onDelete: string
  ) {}

  public async placeBuyMarketOrder(
    shareId: string,
    amount: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('buy', shareId, amount);
  }

  public async placeBuyLimitOrder(
    shareId: string,
    amount: number,
    limit: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('buy', shareId, amount, limit);
  }

  public async placeBuyStopMarketOrder(
    shareId: string,
    amount: number,
    limit: number,
    stop: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('buy', shareId, amount, limit, stop);
  }

  public async placeBuyStopLimitOrder(
    shareId: string,
    amount: number,
    limit: number,
    stop: number,
    stopLimit: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('buy', shareId, amount, limit, stop, stopLimit);
  }

  public async placeSellMarketOrder(
    shareId: string,
    amount: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('sell', shareId, amount);
  }

  public async placeSellLimitOrder(
    shareId: string,
    amount: number,
    limit: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('sell', shareId, amount, limit);
  }

  public async placeSellStopMarketOrder(
    shareId: string,
    amount: number,
    limit: number,
    stop: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('sell', shareId, amount, limit, stop);
  }

  public async placeSellStopLimitOrder(
    shareId: string,
    amount: number,
    limit: number,
    stop: number,
    stopLimit: number
  ): Promise<MoonStonksOrder> {
    return this.placeOrder('sell', shareId, amount, limit, stop, stopLimit);
  }

  public async placeOrder(
    type: 'buy' | 'sell',
    shareId: string,
    amount: number,
    limit?: number,
    stop?: number,
    stopLimit?: number
  ): Promise<MoonStonksOrder> {
    return await OrderManager.placeOrder(this.token, {
      type: type,
      shareId: shareId,
      amount: +amount,
      limit: limit && +limit,
      stop: stop && +stop,
      stopLimit: stopLimit && +stopLimit,
      onMatch: this.onMatch,
      onComplete: this.onComplete,
      onDelete: this.onDelete,
    });
  }
}
