import { Dispute as DisputeInterface, DisputeList, DisputeListResponse } from '@/src/types/IDispute';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class DisputeService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  /**
   * Get a dispute
   * @param id string The ID of the payment to retrieve (dispute_id) (prefixed by "dspt_") (e.g dspt_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Dispute>
   * @throws Error
   */
  public async get(id: string): Promise<DisputeInterface> {
    try {
      const { data, error } = await this.httpClient.get<DisputeInterface>(`/v1/disputes/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get a list of disputes
   * @param data DisputeList
   * @returns Promise<DisputeListResponse>
   * @throws Error
   */
  public async list(incomingData: DisputeList): Promise<DisputeListResponse> {
    try {
      const { data, error } = await this.httpClient.get<DisputeListResponse>('/v1/disputes', {
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
