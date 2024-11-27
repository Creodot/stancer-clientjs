import { CreditCardCreate, CreditCard as CreditCardInterface, CreditCardUpdate } from '@/src/types/ICreditCard';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class PaymentIntentService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  /**
   * Create a credit card
   * @param incomingData CreditCardCreate
   * @returns Promise<CreditCard>
   */
  public async create(incomingData: CreditCardCreate): Promise<CreditCardInterface> {
    try {
      const { data, error } = await this.httpClient.post<CreditCardInterface>('/v1/cards', {
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
   * Get a credit card
   * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<CreditCard>
   * @throws Error
   */
  public async get(id: string): Promise<CreditCardInterface> {
    try {
      const { data, error } = await this.httpClient.get<CreditCardInterface>(`/v1/cards/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Update a credit card
   * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
   * @param data CreditCardUpdate
   * @returns Promise<CreditCard>
   * @throws Error
   */
  public async update(id: string, incomingData: CreditCardUpdate): Promise<CreditCardInterface> {
    try {
      const { data, error } = await this.httpClient.patch<CreditCardInterface>(`/v1/cards/${id}`, {
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
   * Delete a credit card
   * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<CreditCard>
   * @throws Error
   */
  public async delete(id: string): Promise<CreditCardInterface> {
    try {
      const { data, error } = await this.httpClient.delete<CreditCardInterface>(`/v1/cards/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
