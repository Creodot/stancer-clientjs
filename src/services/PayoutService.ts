import { PayoutList, PayoutTypes, Payouts } from '@/src/types/IPayout';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class PayoutService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  /**
   * Get the payout list
   * @param incomingData PayoutList
   * @returns Promise<Payouts>
   * @throws Error
   */
  public async list(incomingData: PayoutList): Promise<Payouts> {
    try {
      const { data, error } = await this.httpClient.get<Payouts>('/v1/payouts', {
        params: incomingData as Record<string, string>,
      });

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get a payout detail
   * @param id string The ID of the payout to retrieve (payout_id) (prefixed by "pout_") (e.g pout_UB99idEIFcbK517ZrKBIrt4y)
   * @param type string The payout type (e.g "payments, refunds, disputes")
   * @param incomingData PayoutList
   * @returns Promise<Payouts>
   * @throws Error
   */
  public async get(id: string, type: PayoutTypes, incomingData?: PayoutList): Promise<Payouts> {
    try {
      const { data, error } = await this.httpClient.get<Payouts>(`/v1/payouts/${id}/${type}`, {
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
