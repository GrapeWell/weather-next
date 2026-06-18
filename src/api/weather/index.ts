import { request } from '@/lib/request';
import type {
  WeatherDailyResponse,
  WeatherHourlyResponse,
  WeatherLifeIndexResponse,
  WeatherNowResponse,
} from './types';

/**
 * @description 获取实时天气
 * @param location 城市 / 城市ID
 * @see https://dev.qweather.com/docs/api/weather/weather-now/
 */
export function getWeatherInfo(location: string) {
  return request<WeatherNowResponse>(
    '/api/v7/weather/now',
    {
      params: {
        location,
      },
    },
  );
}

/**
 * @description 获取未来10天天气预报
 * @param location 城市 / 城市ID
 * @see https://dev.qweather.com/docs/api/weather/weather-daily-forecast/
 */
export function get10DayForecast(location: string) {
  return request<WeatherDailyResponse>(
    '/api/v7/weather/10d',
    {
      params: {
        location,
      },
    },
  );
}

/**
 * @description 获取未来24小时逐小时天气预报
 * @param location 城市 / 城市ID
 * @see https://dev.qweather.com/docs/api/weather/weather-hourly-forecast/
 */
export function get24HoursForecast(location: string) {
  return request<WeatherHourlyResponse>(
    '/api/v7/weather/24h',
    {
      params: {
        location,
      },
    },
  );
}

/**
 * @description 获取天气生活指数
 * @param location 城市 / 城市ID
 * @see https://dev.qweather.com/docs/api/indices/indices-forecast/
 */
export function getLifeIndex(location: string) {
  return request<WeatherLifeIndexResponse>(
    '/api/v7/indices/1d',
    {
      params: {
        location,
      },
    },
  );
}
