import { useQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import {
  get10DayForecast,
  get24HoursForecast,
  getLifeIndex,
  getWeatherInfo,
} from '@/api/weather'
import type {
  WeatherDailyItem,
  WeatherHourlyItem,
  WeatherLifeIndexItem,
  WeatherNowNow,
} from '@/api/weather/types'

import { getAirQuality } from '@/api/airquality'
import type { AirQualityResponse } from '@/api/airquality/types'

import { getCityInfo, getCityInfoByCityName } from '@/api/geo'
import type { GeoCityItem } from '@/api/geo/types'

// UI 侧使用的城市信息（从 GeoCityItem 挑选字段并改名为更直观的 key）
interface CityInfo {
  city: string
  district: string
  name: string
  id: string
  latitude?: string
  longitude?: string
}

export function useWeather() {
  const [cityInfo, setCityInfo] = useState<CityInfo>({
    city: '',
    district: '',
    name: '',
    id: '',
    latitude: undefined,
    longitude: undefined,
  })

  const { data: weatherInfo } = useQuery({
    queryKey: ['weatherInfo', cityInfo.id],
    queryFn: () => getWeatherInfo(cityInfo.id),
    enabled: !!cityInfo.id,
    select: (res): WeatherNowNow | null =>
      res.code === '200' ? res.now : null,
    staleTime: 5 * 60 * 1000,
    placeholderData: prev => prev,
  })

  const { data: tenDayData } = useQuery({
    queryKey: ['tenDayData', cityInfo.id],
    queryFn: () => get10DayForecast(cityInfo.id),
    enabled: !!cityInfo.id,
    select: (res): WeatherDailyItem[] =>
      res.code === '200' ? res.daily : [],
    staleTime: 30 * 60 * 1000,
    placeholderData: prev => prev,
  })

  const { data: hourlyData } = useQuery({
    queryKey: ['hourlyData', cityInfo.id],
    queryFn: () => get24HoursForecast(cityInfo.id),
    enabled: !!cityInfo.id,
    select: (res): WeatherHourlyItem[] =>
      res.code === '200' ? res.hourly : [],
    staleTime: 30 * 60 * 1000,
    placeholderData: prev => prev,
  })

  const { data: lifeIndex } = useQuery({
    queryKey: ['lifeIndex', cityInfo.id],
    queryFn: () => getLifeIndex(cityInfo.id),
    enabled: !!cityInfo.id,
    select: (res): WeatherLifeIndexItem[] =>
      res.code === '200' ? res.daily : [],
    staleTime: 60 * 60 * 1000,
    placeholderData: prev => prev,
  })

  const { data: airQuality } = useQuery({
    queryKey: ['airQuality', cityInfo.latitude, cityInfo.longitude],
    queryFn: () => getAirQuality(Number(cityInfo.latitude), Number(cityInfo.longitude)),
    enabled: !!cityInfo.latitude && !!cityInfo.longitude,
    select: (res): AirQualityResponse | null =>
      res && Array.isArray(res.indexes) ? res : null,
    staleTime: 60 * 60 * 1000,
    placeholderData: prev => prev,
  })

  const weatherProcessByGeo = useCallback(async (latitude: number, longitude: number) => {
    try {
      const res = await getCityInfo(latitude, longitude)
      if (res.code === '200' && res.location.length > 0) {
        const loc = res.location[0] as GeoCityItem
        setCityInfo({
          city: loc.adm1,
          district: loc.adm2,
          name: loc.name,
          id: loc.id,
          latitude: loc.lat,
          longitude: loc.lon,
        })
      }
    }
    catch (error) {
      console.error('获取城市信息失败:', error)
    }
  }, [])

  const weatherProcessByCity = useCallback(async (city: string) => {
    try {
      const res = await getCityInfoByCityName(city)
      if (res.code === '200' && res.location.length > 0) {
        const loc = res.location[0] as GeoCityItem
        setCityInfo({
          city: loc.adm1,
          district: loc.adm2,
          name: loc.name,
          id: loc.id,
          latitude: loc.lat,
          longitude: loc.lon,
        })
      }
    }
    catch (error) {
      console.error('获取城市信息失败:', error)
    }
  }, [])

  return {
    cityInfo,
    setCityInfo,
    weatherInfo,
    tenDayData,
    hourlyData,
    lifeIndex,
    airQuality,
    weatherProcessByGeo,
    weatherProcessByCity,
  }
}
