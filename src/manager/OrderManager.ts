import { BörsenAPI } from '../BörsenAPI';
import { PlaceOrderDto } from '../dtos/PlaceOrder.dto';
import { Job } from '../models/Job.model';
import { Order } from '../models/Order.model';
import { RequestManager } from './RequestManager';

export class OrderManager {
  constructor(
    private readonly api: BörsenAPI,
    private readonly onPlace: string,
    private readonly onMatch: string,
    private readonly onComplete: string,
    private readonly onDelete: string
  ) {}

  public async getOrder(orderId: string): Promise<Order> {
    return RequestManager.get('order/' + orderId, this.api.token);
  }

  public async deleteOrder(orderId: string): Promise<boolean> {
    return RequestManager.delete('order', this.api.token, { orderId });
  }

  public async deleteJob(jobId: string): Promise<boolean> {
    return RequestManager.delete('order', this.api.token, { jobId });
  }

  public async placeBuyMarketOrder(
    shareId: string,
    amount: number
  ): Promise<Job> {
    return this.placeOrder('buy', shareId, amount);
  }

  public async placeBuyLimitOrder(
    shareId: string,
    amount: number,
    limit: number
  ): Promise<Job> {
    return this.placeOrder('buy', shareId, amount, limit);
  }

  public async placeBuyStopMarketOrder(
    shareId: string,
    amount: number,
    stop: number
  ): Promise<Job> {
    return this.placeOrder('buy', shareId, amount, 0, stop);
  }

  public async placeBuyStopLimitOrder(
    shareId: string,
    amount: number,
    limit: number,
    stop: number
  ): Promise<Job> {
    return this.placeOrder('buy', shareId, amount, limit, stop);
  }

  public async placeSellMarketOrder(
    shareId: string,
    amount: number
  ): Promise<Job> {
    return this.placeOrder('sell', shareId, amount);
  }

  public async placeSellLimitOrder(
    shareId: string,
    amount: number,
    limit: number
  ): Promise<Job> {
    return this.placeOrder('sell', shareId, amount, limit);
  }

  public async placeSellStopMarketOrder(
    shareId: string,
    amount: number,
    stop: number
  ): Promise<Job> {
    return this.placeOrder('sell', shareId, amount, 0, stop);
  }

  public async placeSellStopLimitOrder(
    shareId: string,
    amount: number,
    limit: number,
    stop: number
  ): Promise<Job> {
    return this.placeOrder('sell', shareId, amount, limit, stop);
  }

  public async placeOrder(
    type: 'buy' | 'sell',
    shareId: string,
    amount: number,
    limit?: number,
    stop?: number
  ): Promise<Job> {
    return RequestManager.post('order', this.api.token, {
      amount: amount,
      onPlace: this.onPlace,
      onMatch: this.onMatch,
      onComplete: this.onComplete,
      onDelete: this.onDelete,
      shareId: shareId,
      type: type,
      limit: limit,
      stop: stop,
    } as PlaceOrderDto);
  }
}
