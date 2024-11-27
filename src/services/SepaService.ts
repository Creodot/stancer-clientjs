export enum AuthStatus {
  /**
   * Customer was redirected to his bank for authentication
   */
  attempted = 'attempted',
  /**
   * Customer strong authentication is possible
   */
  available = 'available',
  /**
   * Authentication declined
   */
  declined = 'declined',
  /**
   * Authentication sessions expired after 6 hours
   */
  expired = 'expired',
  /**
   * Authentication failed
   */
  failed = 'failed',
  /**
   * A strong authentication is awaiting for more information
   */
  requested = 'requested',
  /**
   * Authentication succeeded, processing can continue
   */
  success = 'success',
  /**
   * The strong authentication is not available for this payment method
   */
  unavailable = 'unavailable',
}

export enum AuthAdditionalStatus {
  /**
   * The merchant asked for a strong authentication
   */
  request = 'request',
}

export interface Auth {
  /**
   * An HTTPS URL where you will redirect your customer to his bank for authentication String, max = 2048 Given by the API
   */
  redirect_url: string;
  /**
   * An HTTPS URL to redirect back your customer after the bank authentication String, max = 2048
   */
  return_url: string;
  /**
   * The status of the payment authentication See authenticated payment status codes
   */
  status: AuthStatus | AuthAdditionalStatus;
}

import { SEPA, SEPACreate, SEPAUpdate } from '@/src/types/ISepa';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class SepaService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  /**
   * Create a sepa
   * @param incomingData SEPACreate
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async create(incomingData: SEPACreate): Promise<SEPA> {
    try {
      const { data, error } = await this.httpClient.post<SEPA>('/v1/sepa', {
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
   * Get a sepa
   * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async get(id: string): Promise<SEPA> {
    try {
      const { data, error } = await this.httpClient.get<SEPA>(`/v1/sepa/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Update a sepa
   * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
   * @param incomingData SEPAUpdate
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async update(id: string, incomingData: SEPAUpdate): Promise<SEPA> {
    try {
      const { data, error } = await this.httpClient.patch<SEPA>(`/v1/sepa/${id}`, { ...incomingData });

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Delete a sepa
   * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async delete(id: string): Promise<SEPA> {
    try {
      const { data, error } = await this.httpClient.delete<SEPA>(`/v1/sepa/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
