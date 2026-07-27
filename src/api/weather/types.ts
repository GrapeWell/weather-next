/**
 * 实时天气（now）数据
 * 文档：https://dev.qweather.com/docs/api/weather/weather-now/
 */
export interface WeatherNow {
  /** 数据观测时间 */
  obsTime: string
  /** 温度，默认单位：摄氏度 */
  temp: string
  /** 体感温度，默认单位：摄氏度 */
  feelsLike: string
  /** 天气状况和图标的代码 */
  icon: string
  /** 天气状况的文字描述 */
  text: string
  /** 风向360角度 */
  wind360: string
  /** 风向 */
  windDir: string
  /** 风力等级 */
  windScale: string
  /** 风速，公里/小时 */
  windSpeed: string
  /** 相对湿度，百分比数值 */
  humidity: string
  /** 当前小时累计降水量，默认单位：毫米 */
  precip: string
  /** 大气压强，默认单位：百帕 */
  pressure: string
  /** 能见度，默认单位：公里 */
  vis: string
  /** 云量，百分比数值 */
  cloud: string
  /** 露点温度 */
  dew: string
}

/** 数据来源信息 */
export interface WeatherRefer {
  sources: string[]
  license: string[]
}

/**
 * 实时天气接口原始响应（和风天气 v7/weather/now）
 */
export interface WeatherNowResponse {
  /** 状态码，200 表示成功 */
  code: string
  /** 当前API的最近更新时间 */
  updateTime: string
  /** 当前数据的响应式页面 */
  fxLink: string
  /** 实时天气信息 */
  now: WeatherNow
  /** 数据来源 */
  refer: WeatherRefer
}

/**
 * 每日天气预报条目（daily）
 * 文档：https://dev.qweather.com/docs/api/weather/weather-daily-forecast/
 */
export interface WeatherDailyItem {
  /** 预报日期 */
  fxDate: string
  /** 日出时间 */
  sunrise: string
  /** 日落时间 */
  sunset: string
  /** 月升时间 */
  moonrise: string
  /** 月落时间 */
  moonset: string
  /** 月相名称 */
  moonPhase: string
  /** 月相图标代码 */
  moonPhaseIcon: string
  /** 预报当天最高温度 */
  tempMax: string
  /** 预报当天最低温度 */
  tempMin: string
  /** 白天天气图标代码 */
  iconDay: string
  /** 白天天气文字描述 */
  textDay: string
  /** 夜间天气图标代码 */
  iconNight: string
  /** 夜间天气文字描述 */
  textNight: string
  /** 白天风向360角度 */
  wind360Day: string
  /** 白天风向 */
  windDirDay: string
  /** 白天风力等级 */
  windScaleDay: string
  /** 白天风速，公里/小时 */
  windSpeedDay: string
  /** 夜间风向360角度 */
  wind360Night: string
  /** 夜间风向 */
  windDirNight: string
  /** 夜间风力等级 */
  windScaleNight: string
  /** 夜间风速，公里/小时 */
  windSpeedNight: string
  /** 相对湿度，百分比数值 */
  humidity: string
  /** 预报当天总降水量，默认单位：毫米 */
  precip: string
  /** 大气压强，默认单位：百帕 */
  pressure: string
  /** 能见度，默认单位：公里 */
  vis: string
  /** 云量，百分比数值 */
  cloud: string
  /** 紫外线强度指数 */
  uvIndex: string
}

/**
 * 每日天气预报接口原始响应（和风天气 v7/weather/10d / 3d / 7d）
 */
export interface WeatherDailyResponse {
  /** 状态码 */
  code: string
  /** 当前API的最近更新时间 */
  updateTime: string
  /** 当前数据的响应式页面 */
  fxLink: string
  /** 每日预报数组 */
  daily: WeatherDailyItem[]
  /** 数据来源 */
  refer: WeatherRefer
}

/**
 * 逐小时天气预报条目（hourly）
 * 文档：https://dev.qweather.com/docs/api/weather/weather-hourly-forecast/
 */
export interface WeatherHourlyItem {
  /** 预报时间 */
  fxTime: string
  /** 温度，默认单位：摄氏度 */
  temp: string
  /** 天气状况和图标的代码 */
  icon: string
  /** 天气状况的文字描述 */
  text: string
  /** 风向360角度 */
  wind360: string
  /** 风向 */
  windDir: string
  /** 风力等级 */
  windScale: string
  /** 风速，公里/小时 */
  windSpeed: string
  /** 相对湿度，百分比数值 */
  humidity: string
  /** 降水概率，百分比数值（0-100） */
  pop: string
  /** 当前小时累计降水量，默认单位：毫米 */
  precip: string
  /** 大气压强，默认单位：百帕 */
  pressure: string
  /** 云量，百分比数值 */
  cloud: string
  /** 露点温度 */
  dew: string
}

/**
 * 逐小时天气预报接口原始响应（和风天气 v7/weather/24h）
 */
export interface WeatherHourlyResponse {
  /** 状态码 */
  code: string
  /** 当前API的最近更新时间 */
  updateTime: string
  /** 当前数据的响应式页面 */
  fxLink: string
  /** 逐小时预报数组 */
  hourly: WeatherHourlyItem[]
  /** 数据来源 */
  refer: WeatherRefer
}

/**
 * 天气生活指数条目（daily）
 * 文档：https://dev.qweather.com/docs/api/indices/indices-forecast/
 */
export interface WeatherLifeIndexItem {
  /** 预报日期 */
  date: string
  /** 生活指数类型ID */
  type: string
  /** 生活指数名称 */
  name: string
  /** 生活指数等级 */
  level: string
  /** 生活指数等级名称 */
  category: string
  /** 生活指数描述 */
  text: string
}

/**
 * 天气生活指数接口原始响应（和风天气 v7/indices/1d）
 */
export interface WeatherLifeIndexResponse {
  /** 状态码 */
  code: string
  /** 当前API的最近更新时间 */
  updateTime: string
  /** 当前数据的响应式页面 */
  fxLink: string
  /** 生活指数数组 */
  daily: WeatherLifeIndexItem[]
  /** 数据来源 */
  refer: WeatherRefer
}
