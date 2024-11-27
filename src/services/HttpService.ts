import type { IConfig } from '@/src/types';

export interface ErrorApi {
  message: string;
  statusCode: number;
  error: string;
}

export type RequestConfig = {
  params?: Record<string, string>;
  headers?: Record<string, string>;
};

export type ErrorResponse = {
  message: string;
  error: string;
} | null;

export type HttpClientReturns<T> = {
  data: T | null;
  error: ErrorResponse | string;
  statusCode: number;
};

export class HttpClientService {
  readonly TOKEN_KEY = 'zion-token';
  readonly defaultRequestConfig: RequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private readonly config: IConfig) {
    this.config = config;
  }

  async get<T>(
    url: string,
    config: RequestConfig = this.defaultRequestConfig,
    authRequest = false
  ): Promise<HttpClientReturns<T>> {
    try {
      let token = '';
      if (authRequest) {
        token = await this.getToken();
      }

      const query = await fetch(this.buildUrl(url, config.params ?? {}), {
        headers: {
          ...config.headers,
          ...(authRequest ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!query.ok) {
        return await this.handleError(query);
      }

      return await this.handleResponse<T>(query);
    } catch (error) {
      return this.handleError(error as ErrorApi | Response);
    }
  }

  async post<T, U = Record<string, unknown>>(
    url: string,
    body: U,
    config: RequestConfig = this.defaultRequestConfig,
    authRequest = false
  ): Promise<HttpClientReturns<T>> {
    try {
      let token = '';
      if (authRequest) {
        token = await this.getToken();
      }

      const query = await fetch(`${this.config.apiBaseUrl}${url}`, {
        method: 'POST',
        headers: {
          ...config.headers,
          ...(authRequest ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
      });

      if (!query.ok) {
        return await this.handleError(query);
      }

      return await this.handleResponse<T>(query);
    } catch (error) {
      return this.handleError(error as ErrorApi | Response);
    }
  }

  async put<T, U = Record<string, unknown>>(
    url: string,
    body: U,
    config: RequestConfig = this.defaultRequestConfig,
    authRequest = false
  ): Promise<HttpClientReturns<T>> {
    try {
      let token = '';
      if (authRequest) {
        token = await this.getToken();
      }

      const query = await fetch(`${this.config.apiBaseUrl}${url}`, {
        method: 'PUT',
        headers: {
          ...config.headers,
          ...(authRequest ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
      });

      if (!query.ok) {
        return await this.handleError(query);
      }

      return await this.handleResponse<T>(query);
    } catch (error) {
      return await this.handleError(error as ErrorApi | Response);
    }
  }

  async patch<T, U = Record<string, unknown>>(
    url: string,
    body: U,
    config: RequestConfig = this.defaultRequestConfig,
    authRequest = false
  ): Promise<HttpClientReturns<T>> {
    try {
      let token = '';
      if (authRequest) {
        token = await this.getToken();
      }

      const query = await fetch(`${this.config.apiBaseUrl}${url}`, {
        method: 'PATCH',
        headers: {
          ...config.headers,
          ...(authRequest ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
      });

      if (!query.ok) {
        return await this.handleError(query);
      }

      return await this.handleResponse<T>(query);
    } catch (error) {
      return await this.handleError(error as ErrorApi | Response);
    }
  }

  async delete<T>(
    url: string,
    config: RequestConfig = this.defaultRequestConfig,
    authRequest = false
  ): Promise<HttpClientReturns<T>> {
    try {
      let token = '';
      if (authRequest) {
        token = await this.getToken();
      }

      const query = await fetch(`${this.config.apiBaseUrl}${url}`, {
        method: 'DELETE',
        headers: {
          ...config.headers,
          ...(authRequest ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!query.ok) {
        return this.handleError(query);
      }

      return await this.handleResponse<T>(query);
    } catch (error) {
      return await this.handleError(error as ErrorApi | Response);
    }
  }

  async getToken(): Promise<string> {
    return this.config.token;
  }

  private async handleResponse<T>(response: Response): Promise<HttpClientReturns<T>> {
    try {
      const data = await response.json();

      return { data, error: null, statusCode: response.status };
    } catch (error) {
      return {
        data: null,
        statusCode: response.status,
        error: {
          message: 'Failed to parse response',
          error: 'Failed to parse response',
        },
      };
    }
  }

  private async handleError<T>(error: ErrorApi | Response): Promise<HttpClientReturns<T>> {
    if (error instanceof Response) {
      try {
        const errorData = await error.json();
        return {
          data: null,
          statusCode: error.status,
          error: {
            message: errorData.message || error.statusText,
            error: errorData.error || error.statusText,
          },
        };
      } catch {
        return {
          data: null,
          statusCode: error.status,
          error: {
            message: error.statusText,
            error: error.statusText,
          },
        };
      }
    }

    if ('message' in error) {
      return {
        data: null,
        statusCode: error.statusCode,
        error: {
          message: error.message,
          error: error.error,
        },
      };
    }

    return {
      data: null,
      statusCode: 500,
      error: {
        message: 'Unknown',
        error: 'Internal Server Error',
      },
    };
  }

  private buildUrl(url: string, params: Record<string, string>): string {
    const queryParams = new URLSearchParams(params);
    return `${this.config.apiBaseUrl}${url}?${queryParams.toString()}`;
  }
}
