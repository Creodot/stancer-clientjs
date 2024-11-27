import { PaymentCreate, Payment as PaymentInterface, PaymentList, Payments } from '@/src/types/IPayment';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class PaymentService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  /**
   * Create a payment
   * @param incomingData PaymentCreate
   * @returns Promise<Payment>
   * @throws Error
   */
  public async create(incomingData: PaymentCreate): Promise<PaymentInterface> {
    try {
      const { data, error } = await this.httpClient.post<PaymentInterface>('/v1/checkout', {
        ...incomingData,
      });

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get a payment
   * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Payment>
   * @throws Error
   */
  public async get(id: string): Promise<PaymentInterface> {
    try {
      const { data, error } = await this.httpClient.get<PaymentInterface>(`/v1/checkout/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Update a payment
   * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
   * @param incomingData PaymentCreate
   * @returns Promise<Payment>
   * @throws Error
   */
  public async update(id: string, incomingData: PaymentCreate): Promise<PaymentInterface> {
    try {
      const { data, error } = await this.httpClient.patch<PaymentInterface>(`/v1/checkout/${id}`, {
        ...incomingData,
      });

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * List all payments
   * @param incomingData PaymentList
   * @returns Promise<Payments>
   * @throws Error
   */
  public async list(incomingData: PaymentList): Promise<Payments> {
    try {
      const { data, error } = await this.httpClient.get<Payments>('/v1/checkout', {
        params: incomingData as Record<string, string>,
      });

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
