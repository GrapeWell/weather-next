/**
 * RGBA 颜色分量（0-255）
 */
export interface AirQualityColor {
  red: number
  green: number
  blue: number
  alpha: number
}

/**
 * 主要污染物信息
 */
export interface AirQualityPollutantInfo {
  code: string
  name: string
  fullName: string
}

/**
 * 健康影响与建议
 */
export interface AirQualityHealth {
  effect: string
  advice: {
    generalPopulation: string
    sensitivePopulation: string
  }
}

/**
 * 单种 AQI 指数条目（indexes 数组项）
 */
export interface AirQualityIndex {
  /** 指数类型代码，如 us-epa / qaqi */
  code: string
  /** 指数名称 */
  name: string
  /** 指数数值 */
  aqi: number
  /** 用于展示的指数字符串 */
  aqiDisplay: string
  /** 等级 */
  level: string
  /** 等级名称，如 Good / Excellent */
  category: string
  /** 等级对应颜色 */
  color: AirQualityColor
  /** 首要污染物 */
  primaryPollutant: AirQualityPollutantInfo
  /** 健康影响与建议 */
  health: AirQualityHealth
}

/**
 * 污染物浓度
 */
export interface AirQualityConcentration {
  value: number
  unit: string
}

/**
 * 污染物在某个指数下的子指数
 */
export interface AirQualitySubIndex {
  code: string
  aqi: number
  aqiDisplay: string
}

/**
 * 污染物条目（pollutants 数组项）
 */
export interface AirQualityPollutant {
  /** 污染物代码，如 pm2p5 / pm10 / no2 / o3 / co */
  code: string
  name: string
  fullName: string
  /** 浓度值 */
  concentration: AirQualityConcentration
  /** 在不同指数体系下的子指数 */
  subIndexes: AirQualitySubIndex[]
}

/**
 * 监测站点
 */
export interface AirQualityStation {
  id: string
  name: string
}

/**
 * 元数据
 */
export interface AirQualityMetadata {
  tag: string
}

/**
 * 空气质量接口原始响应（和风天气 airquality/v1/current/:lat/:lon）
 */
export interface AirQualityResponse {
  metadata: AirQualityMetadata
  /** 各类 AQI 指数列表 */
  indexes: AirQualityIndex[]
  /** 污染物浓度列表 */
  pollutants: AirQualityPollutant[]
  /** 监测站点列表 */
  stations: AirQualityStation[]
}
