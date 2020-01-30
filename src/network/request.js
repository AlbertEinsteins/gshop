import axios from 'axios'

export function request(config) {
  //创建axios 实例

  const instance = axios.create({
    baseURL: 'http://192.168.0.115:3000/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })


  //拦截器
  instance.interceptors.request.use(config => {
    
    return config 
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(resp => {
    return resp.data 
  }, err => {
    console.log(err)
  })

  return instance(config)
}