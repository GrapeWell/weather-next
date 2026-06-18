import { request } from '@/lib/request';
import type { GeoCityLookupResponse } from './types';

/**
 * @description 根据经纬度获取城市信息
 * @param latitude 纬度
 * @param longitude 经度
 * @see https://dev.qweather.com/docs/api/geo/city-lookup/
 */
export function getCityInfo(latitude: number, longitude: number) {
  return request<GeoCityLookupResponse>(
    `/api/geo/v2/city/lookup?location=${longitude.toFixed(2)},${latitude.toFixed(2)}`,
  );
}

/**
 * @description 根据城市名称获取城市信息
 * @param cityName 城市名
 * @see https://dev.qweather.com/docs/api/geo/city-lookup/
 */
export function getCityInfoByCityName(cityName: string) {
  console.log('getCityInfoByCityName', cityName);
  return request<GeoCityLookupResponse>(
    '/api/geo/v2/city/lookup',
    {
      params: {
        location: cityName,
      },
    },
  );
}
