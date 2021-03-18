import { DeleteOrderDto } from '../dtos/DeleteOrder.dto';
import { PlaceOrderDto } from '../dtos/PlaceOrder.dto';
import { Broker } from './Broker.model';

export class Job {
  id!: string;
  broker?: Broker;
  placeOrder?: PlaceOrderDto;
  deleteOrder?: DeleteOrderDto;
  triggerId?: string;
}
