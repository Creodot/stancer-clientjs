import { CreditCardService } from '@/services/CreditCardService';
import { CustomerService } from '@/services/CustomerService';
import { DisputeService } from '@/services/DisputeService';
import { PaymentService } from '@/services/PaymentService';
import { PayoutService } from '@/services/PayoutService';
import { RefundService } from '@/services/RefundService';
import { SepaService } from '@/services/SepaService';
import { NodeEnvironment } from '@/src/types/IClient';
import { getNodeEnvironment } from '@/utils/getNodeEnvironment';
import { IConfig } from './types';

export class StancerClient {
  private config: IConfig;
  public environment: NodeEnvironment = getNodeEnvironment();

  public creditCardService: CreditCardService;
  public customerService: CustomerService;
  public disputeService: DisputeService;
  public paymentService: PaymentService;
  public payoutService: PayoutService;
  public refundService: RefundService;
  public sepaService: SepaService;

  constructor(config: IConfig) {
    this.config = config;

    this.creditCardService = new CreditCardService(this.config);
    this.customerService = new CustomerService(this.config);
    this.disputeService = new DisputeService(this.config);
    this.paymentService = new PaymentService(this.config);
    this.payoutService = new PayoutService(this.config);
    this.refundService = new RefundService(this.config);
    this.sepaService = new SepaService(this.config);
  }

  public getConfig(): IConfig {
    return this.config;
  }

  public setConfig(config: IConfig): IConfig {
    this.config = config;
    return this.config;
  }
}
