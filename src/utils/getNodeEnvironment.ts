import { NodeEnvironment } from '@/src/types/IClient';

export const getNodeEnvironment = (): NodeEnvironment => {
  return process.env.NODE_ENV === 'production' ? 'prod' : 'test';
};
