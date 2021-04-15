import { BörsenAPI } from '../BörsenAPI';
import { PayInvoiceDto } from '../dtos/PayInvoice.dto';
import { Invoice } from '../models/Invoice.model';
import { RequestManager } from './RequestManager';

export class InvoiceManager {
  constructor(private readonly api: BörsenAPI) {}

  public async getInvoices(): Promise<Invoice[]> {
    return RequestManager.get('invoice', this.api.token);
  }

  public async payInvoice(invoiceId: string): Promise<boolean> {
    return RequestManager.post('invoice/pay', this.api.token, {
      invoiceId: invoiceId,
    } as PayInvoiceDto);
  }
}
