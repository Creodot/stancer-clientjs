import { CustomerCreate, Customer as CustomerInterface, CustomerUpdate } from '@/src/types/ICustomer';
import { IConfig } from '../types';
import { HttpClientService } from './HttpService';

export class CustomerService {
  private config: IConfig;
  private httpClient: HttpClientService;

  constructor(config: IConfig) {
    this.config = config;
    this.httpClient = new HttpClientService(config);
  }

  public async create(incomingData: CustomerCreate): Promise<CustomerInterface> {
    try {
      const { data, error } = await this.httpClient.post<CustomerInterface>('/v1/customers', {
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
   * Get a customer
   * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<Customer>
   */
  public async get(id: string): Promise<CustomerInterface> {
    try {
      const { data, error } = await this.httpClient.get<CustomerInterface>(`/v1/customers/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Update a customer
   * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
   * @param incomingData CustomerUpdate
   * @returns Promise<Customer>
   */
  public async update(id: string, incomingData: CustomerUpdate): Promise<CustomerInterface> {
    try {
      const { data, error } = await this.httpClient.patch<CustomerInterface>(`/v1/customers/${id}`, {
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
   * Delete a customer
   * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<Customer>
   */
  public async delete(id: string): Promise<CustomerInterface> {
    try {
      const { data, error } = await this.httpClient.delete<CustomerInterface>(`/v1/customers/${id}`);

      if (error || !data) throw error;

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
