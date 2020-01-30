import { request } from './request'

export function getInfoById(id) {
  return request({
    url: `product/${id}`,
    method: 'get'
  })
}


export class GoodBaseInfo {
  constructor(goodInfo) {
    this.price = goodInfo.price 
    this.nowPrice = goodInfo.nowPrice
    this.title = goodInfo.title
    this.sellCount = goodInfo.sellCount
    this.collectCount = goodInfo.collect
    this.diliverTime = goodInfo.diliverTime
    this.disCount = goodInfo.disCount
  }
}

export class GoodParamInfo {
  constructor(goodInfo) {
    this.chima = goodInfo.chima
    this.yichang = goodInfo.yichang
    this.jijie = goodInfo.jijie
    this.changzhi = goodInfo.changzhi
    this.caizhi = goodInfo.caizhi 
    this.lingxing = goodInfo.lingxing 
    this.xiuchang = goodInfo.xiuchang 
    this.kuanshi = goodInfo.kuanshi 
    this.fengge = goodInfo.fengge
    this.chaoliu = goodInfo.chaoliu
  }
}


