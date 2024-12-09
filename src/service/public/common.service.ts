import { ICategoryResponse, IMostPopularAdsResponse } from '@/types/common';
import apiService from '../api.service';
import { api } from '@/constants/route';

export const CommonService = {
  async category(): Promise<ICategoryResponse[]> {
    const res = await apiService.fetchData<unknown, ICategoryResponse[]>({
      url: api.category,
      method: 'GET',
    });
    return res.data;
  },
  async mostPopularAds(): Promise<IMostPopularAdsResponse[]> {
    const res = await apiService.fetchData<unknown, IMostPopularAdsResponse[]>({
      url: api.most_popular_ads,
      method: 'GET',
    });
    return res.data;
  },
};
