export class PlaceOrderDto {
  shareId!: string;
  amount!: number;
  onMatch!: string;
  onComplete!: string;
  onDelete!: string;
  type!: 'buy' | 'sell';

  limit?: number;
  stop?: number;
  stopLimit?: number;
}
