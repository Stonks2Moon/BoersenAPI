export class PlaceOrderDto {
  shareId!: string;
  amount!: number;

  onPlace!: string;
  onMatch!: string;
  onComplete!: string;
  onDelete!: string;

  type!: 'buy' | 'sell';

  limit?: number;
  stop?: number;
}
