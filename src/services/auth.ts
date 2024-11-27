import { HttpClientServiceImpl } from './http';

interface LoginCredentials {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export class AuthService {
  private apiKey: string;
  private httpClient: HttpClientServiceImpl;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.httpClient = new HttpClientServiceImpl({
      apiBaseUrl: 'https://api.stancer.com/v1',
      token: apiKey,
    });
  }

  /**
   * Performs a login and returns an access token.
   * @param credentials User credentials.
   * @returns User information and access token.
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const { data, error } = await this.httpClient.post<AuthResponse>('/auth/login', { ...credentials });

      if (error || !data) {
        throw new Error('Unable to login');
      }

      return data;
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  /**
   * Retrieves the information of the connected user.
   * @param token Access token.
   * @returns User information.
   */
  async getUserInfo(token: string): Promise<UserInfo> {
    try {
      const { data, error } = await this.httpClient.get<UserInfo>('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (error || !data) {
        throw new Error('Unable to fetch user info');
      }

      return data;
    } catch (error) {
      throw new Error('Unable to fetch user info');
    }
  }
}
