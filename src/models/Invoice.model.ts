export class Invoice {
  id!: string;
  amount!: number;
  payed!: boolean;
  timestamp!: number;
  description?: string;
}
