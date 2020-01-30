// import { Mock, Random } from 'mockjs'
const Mock = require('mockjs')
const Random = Mock.Random



//home 数据的生成
const home = {}
home.size = Random.range(1, 10, 1)
home.createDate = Random.date('yyyy-MM-dd HH:mm:ss')
home.images = [1,2,3,4].map((val) => Random.image('500x400', Random.color() ,Random.word(2,6)))
home.commands = [1,2,3,4].map((val) => {
  const tpl = {}
  tpl.id = val,
  tpl.url = Random.url('http', 'www.baidu.com')
  tpl.image = Random.image('500x400', Random.color() ,Random.word(2,6))
  tpl.desc = Random.string(2,5)
  return tpl
})

home.features = [1,2,3,4,5,6,7,8].map((item) => {
  const tpl = {}
  tpl.id = item 
  tpl.url = 'http://www.bilibili.com'
  tpl.image = Random.image('300x200', Random.color() ,'recommadn')
  tpl.desc = Random.string(2,5)
  return tpl
})


//category数据的生成
category = []
const sortId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

for(let i = 0 ; i < 1000 ; i++) {
  const tpl = {}
  tpl.id = i + 1
  tpl.url = Random.url('http', 'www.bilibili.com'),
  tpl.img = Random.image('500x400', Random.color(), Random.cword(2,6))
  tpl.title = Random.title()
  tpl.sortId = sortId[Math.round(Math.random() * sortId.length)]

  category.push(tpl)
}

//向外暴露一个引用
module.exports = () => {
  let data = {
    product: [],
    home,
    category
  }

  const images = [1,2,3,4,5,6].map(item => Random.image('500x400', Random.color() ,Random.word(2,6)))
  // const images = "123"
  for(let i = 0 ; i < 100 ; i++) {
    const content = Random.cparagraph(0, 10)
    data.product.push({
      id: i,
      title: Random.cword(8, 20),
      desc: content.substr(0, 40),
      tag: Random.cword(2,6),
      views: Random.integer(100, 5000),
      images: images.slice(1, Random.integer(1,6)),
      price: Random.integer(30, 70),
      nowPrice: Random.integer(50, 100),
      disCount: Random.integer(1, 10),
      sellCount: Random.integer(0, 10000),
      collect: Random.integer(1, 1000),
      diliverTime: Random.integer(24, 72),    //发货时间
      chima: ['S','XL', 'L', 'M'],
      yichang: '常规款(51-65cm)',
      jijie: '秋季',
      changzhi: '广州白云京溪益合巷31号',
      caizhi: '聚酯纤维',
      lingxing: '其他领行',
      xiuchang: '长袖',
      kuanshi: '衣裤套装',
      fengge: '通勤(OL)',
      chaoliu: '韩系'
    })
  }

  // console.log(data)
  return data
}