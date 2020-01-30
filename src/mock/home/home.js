import Mock from 'mockjs'
import qs from 'querystring'

const Random = Mock.Random

Mock.mock('/home', 'get', {
  'size': Random.range(1, 10, 1),
  'createDate': Random.date('yyyy-MM-dd HH:mm:ss'),
  'images|4': [{
    'id|+1': 1,
    'url': '@dataimage(450x200,mockjs)'
  }],
  'commands|4': [{
    'id|+1': 1,
    'url': Random.url('http', 'www.baidu.com'),
    'image': '@dataimage(300x200,recommand)',
    'desc': Random.string(2, 5)
  }],
  'feature|8': [{
    'id|+1': 1,
    'url': 'http://www.bilibili.com',
    'image': '@dataimage(300x200,recommand)',
    'desc': Random.string(2, 5)
  }],
})



//模拟分页数据
const data = []

for (let i = 0; i < 60; i++) {
  const template = {
    'id': i,
    'image': Random.dataImage('200x200','clo'),
    'desc': Random.string(2, 15),
    'price': Random.integer(30, 200),
    'zcnt': Random.integer(1, 200)
  }

  data.push(template)
}

Mock.mock(/\/home\/list.*/, 'get', (req) => {
  let qsStr = req.url.split('?')[1]
  const params = qs.parse(qsStr)

  // console.log(params)
  //分页数
  const size = 10
  const [page, type] = [params.page, params.type]

  const len = data.length / size
  
  let pageData = []
  if(type == 1) {
    const p = 0
    //模拟假数据
    pageData = data.slice((page - 1) * size, page * size)
  } else if(type == 2) {
    const p = 20
    pageData = data.slice(p + (page - 1) * size, p + page * size)
  } else if(type == 3) {
    const p = 40
    pageData = data.slice(p + (page - 1) * size, p + page * size)
  }
  return {
    'data': {
      'page': page,
      'rows': pageData,
      'total': data.length,
    }
  }
})