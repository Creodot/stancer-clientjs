import { CardService } from '@/services/CardService';
import { CustomerService } from '@/services/CustomerService';
import { DisputeService } from '@/services/DisputeService';
import { MandateService } from '@/services/MandateService';
import { PaymentIntentService } from '@/services/PaymentIntentService';
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

  public customerService: CustomerService;
  public cardService: CardService;
  public sepaService: SepaService;
  public mandateService: MandateService;
  public paymentService: PaymentService;
  public paymentIntentService: PaymentIntentService;
  public refundService: RefundService;
  public disputeService: DisputeService;
  public payoutService: PayoutService;

  constructor(config: IConfig) {
    this.config = config;

    this.customerService = new CustomerService(this.config);
    this.cardService = new CardService(this.config);
    this.sepaService = new SepaService(this.config);
    this.mandateService = new MandateService(this.config);
    this.paymentService = new PaymentService(this.config);
    this.paymentIntentService = new PaymentIntentService(this.config);
    this.refundService = new RefundService(this.config);
    this.disputeService = new DisputeService(this.config);
    this.payoutService = new PayoutService(this.config);
  }

  public getConfig(): IConfig {
    return this.config;
  }

  public setConfig(config: IConfig): IConfig {
    this.config = config;
    return this.config;
  }
}
