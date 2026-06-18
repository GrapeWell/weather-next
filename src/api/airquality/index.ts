import { request } from '@/lib/request';
import type { AirQualityResponse } from './types';

/**
 * @description 获取空气质量（当前位置）
 * @param latitude 纬度
 * @param longitude 经度
 * @see https://dev.qweather.com/docs/api/air-quality/air-now/
 */
export function getAirQuality(latitude: number, longitude: number) {
  return request<AirQualityResponse>(
    `/api/airquality/v1/current/${latitude.toFixed(2)}/${longitude.toFixed(2)}`,
  );
}
