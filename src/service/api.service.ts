import http from '../utils/http';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const apiService = {
  fetchData<TReq, TRes>(
    config: AxiosRequestConfig<TReq>
  ): Promise<AxiosResponse<TRes>> {
    return new Promise((resolve, reject) => {
      http(config)
        .then((response: AxiosResponse<TRes>) => resolve(response))
        //Return error response
        .catch((error: AxiosError) => reject(error));
    });
  },
};
export default apiService;
