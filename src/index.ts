export * from './types';

import { AuthService } from './services/auth';

export class StancerSDK {
  public auth: AuthService;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('API key is required to initialize the SDK.');
    }

    this.auth = new AuthService(apiKey);
  }
}

export const createStancerSDK = (apiKey: string): StancerSDK => {
  return new StancerSDK(apiKey);
};
