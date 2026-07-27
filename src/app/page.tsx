'use client';
import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";
import { useEffect, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";

export default function Home() {
  const [coordinates, setCoordinates] = useState<
    { latitude: number, longitude: number } | undefined
  >(undefined)

  const {
    cityInfo,
    weatherInfo,
    tenDayData,
    hourlyData,
    lifeIndex,
    airQuality,
    weatherProcessByGeo,
    weatherProcessByCity,
    setCityInfo,
  } = useWeather()

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      console.log('Got position', position)
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }

    const error = () => {
      console.warn('Unable to retrieve your location')
      weatherProcessByCity('beijing')
    }

    if (!navigator.geolocation) {
      weatherProcessByCity('beijing')
    }
    else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }, [weatherProcessByCity])

  useEffect(() => {
    if (!coordinates)
      return
    weatherProcessByGeo(coordinates.latitude, coordinates.longitude)
  }, [coordinates, weatherProcessByGeo])
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-blac p-4">
      {/* 上部 */}
      <div className="flex h-[60%] min-h-0 mb-4">
        <div className="flex flex-col w-60 mr-4">
          <div className="flex-6 mb-4">
            <WeatherInfo daily={tenDayData} info={weatherInfo}/>
          </div>
          <div className="flex-4 bg-green-100">map</div>
        </div>
        <div className="flex-1 bg-amber-300">
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* 下部 */}
      <div className="h-[40%] bg-amber-600">123</div>
    </div>
  );
}
