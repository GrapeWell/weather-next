/**
 * 数据来源信息
 */
export interface GeoRefer {
  sources: string[]
  license: string[]
}

/**
 * 城市信息条目（Geo API - City Lookup）
 * 文档：https://dev.qweather.com/docs/api/geo/city-lookup/
 */
export interface GeoCityItem {
  /** 城市/地区名称 */
  name: string
  /** 城市/地区ID */
  id: string
  /** 城市/地区纬度 */
  lat: string
  /** 城市/地区经度 */
  lon: string
  /** 该城市/地区的上级行政区划名称（市） */
  adm2: string
  /** 该城市/地区所属的一级行政区（省/州） */
  adm1: string
  /** 国家 */
  country: string
  /** 时区 */
  tz: string
  /** UTC 偏移 */
  utcOffset: string
  /** 是否夏令时：0=否, 1=是 */
  isDst: string
  /** 数据类型：city */
  type: string
  /** 排名，按热门程度或评分 */
  rank: string
  /** 城市天气响应式页面 */
  fxLink: string
}

/**
 * 城市信息查询接口原始响应（和风天气 geo/v2/city/lookup）
 * 支持两种 location 参数：
 * - 经纬度：location=longitude,latitude（和风定义是 "经度,纬度"，但本项目传的是 `${lat},${lon}`，请保持与上层一致）
 * - 城市名称
 */
export interface GeoCityLookupResponse {
  /** 状态码 */
  code: string
  /** 城市搜索结果数组 */
  location: GeoCityItem[]
  /** 数据来源 */
  refer: GeoRefer
}
