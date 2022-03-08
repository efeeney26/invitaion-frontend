import axios from 'axios';

import { IApiClient } from './types';
import { IGuest } from '../types';

const LOCAL_BACKEND_URL = '/api/guests';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `${process.env.BACKEND_URL}/api/guests` : LOCAL_BACKEND_URL,
});

class ApiClient implements IApiClient {
  private client = axiosInstance;

  public getGuest = (id: string) => this.client
    .get(`/guest?id=${id}`);

  public updateGuest = (guest: IGuest) => this.client
    .patch('/updateGuest', guest);
}

const apiClient: IApiClient = new ApiClient();

export default apiClient;
