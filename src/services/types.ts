import { AxiosResponse } from 'axios';

import { IGuest } from '../types';

type ApiResponse<T> = Promise<AxiosResponse<T>>;

export interface IApiClient {
  getGuest(id: string): ApiResponse<IGuest>
  updateGuest(guest: IGuest): ApiResponse<{ message: string }>
}
