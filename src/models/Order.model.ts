export class Order {
  id!: string;
  shareId!: string;
  timestamp!: number;

  amount!: number;
  type!: 'buy' | 'sell';

  limit?: number;
  stop?: number;
  stopLimit?: number;
}
