// 导入request
import request from './request'

export const getCityBuildings = () => {
  return request({
    url: '/json/Hangzhou_Buildings.json',
    method: 'GET',
  })
}

export const getRoads = () => {
  return request({
      url: '/json/Jinan_road.geojson',
    method: 'GET',
  })
}

export const getEvents = () => {
  return request({
      url: '/json/data.geojson',
      method: 'GET',
  })
}
export const getPoints = () => {
    return request({
        url: '/json/data.geojson',
    method: 'GET',
  })
}
export const getCsv = () => {
  return request({
      url: '/csv/news.csv',
    method: 'GET',
  })
}
