import { request } from './request'

export function getSortItemBySortId(sortId, pagenum, pagesize) {
  return request({
    url: `category?sortId=${sortId}&_page=${pagenum}&_limit=${pagesize}`,
    method: 'get'
  })
}