import { RefundCreate, Refund as RefundInterface } from '@/src/types/IRefund';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class RefundService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  /**
   * Create a refund
   * @param incomingData RefundCreate
   * @returns Promise<Refund>
   * @throws Error
   */
  public async create(incomingData: RefundCreate): Promise<RefundInterface> {
    try {
      const { data, error } = await this.httpClient.post<RefundInterface>('/v1/refunds', { ...incomingData });

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get a refund
   * @param id string The ID of the payment to retrieve (refund_id) (prefixed by "refd_") (e.g refd_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Refund>
   * @throws Error
   */
  public async get(id: string): Promise<RefundInterface> {
    try {
      const { data, error } = await this.httpClient.get<RefundInterface>(`/v1/refunds/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
