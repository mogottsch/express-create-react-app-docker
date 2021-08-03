import { IClientData } from '@shared/JwtService';

declare global {
  namespace Express {
    export interface Response {
      sessionUser: IClientData;
    }
  }
}
