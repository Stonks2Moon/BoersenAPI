import { DeleteOrderDto } from '../dtos/DeleteOrder.dto';
import { PlaceOrderDto } from '../dtos/PlaceOrder.dto';
import { Broker } from './Broker.model';

export class Job {
  id!: string;
  data!: {
    dto: PlaceOrderDto | DeleteOrderDto;
    broker: Broker;
  };
}
