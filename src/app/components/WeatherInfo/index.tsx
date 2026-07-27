import Card from "../Card";
import type { WeatherDailyItem, WeatherNow } from "@/api/weather/types";
import { Icon } from "@iconify/react";
import GradientBar from "../GradientBar";
import Image from "next/image";
import sun from './sun.svg'
import cloud from './cloud.png'

interface Props {
  info: WeatherNow | null | undefined;
  daily: WeatherDailyItem[] | undefined;
}

const Weather = (props: Props) => {
  const { daily, info } = props;
  const today = daily?.[0];

  return (
    <Card>
      <div className="w-full h-full p-4 flex flex-col justify-between">
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <Image src={cloud} width={64} height={64} alt="weather-icon"/>
            <div className="text-sm">{info?.text}</div>
          </div>
          <div className="text-5xl">{info?.temp}°</div>
        </div>
        <div className="font-weight flex text-sm text-slate-500">
          <div className="flex-1">白天 {today?.tempMax ?? "-"}°</div>
          <div className="flex-1">夜晚 {today?.tempMin ?? "-"}°</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center text-sm mb-1 text-slate-500">
            <Icon icon={"mynaui:sunrise"} width={24} className="mr-2" />
            日出<span className="ml-2">{today?.sunrise}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <Icon icon="mynaui:sunset" width={24} className="mr-2" />
            日落<span className="ml-2">{today?.sunset}</span>
          </div>
        </div>
        <div className="flex flex-col text-sm text-slate-500">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Icon icon={"mynaui:smile"} className="mr-2" />
              紫外线指数
            </div>
            <div>{today?.uvIndex}</div>
          </div>
          <div>
            <GradientBar level={today?.uvIndex} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Weather;
