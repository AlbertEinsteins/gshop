import { request } from './request'


export function getHomeData() {
  return request({
    url: '/home',
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function getHomePageData(page, type) {
  return request({
    url: '/home/list',
    method: 'get',
    params: {
      page, 
      type
    }
  })
}