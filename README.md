# gshop
## 概要
- 项目所有的数据采用 mockjs + json-server 模拟，需要全局安装json-server.
- 项目使用axios请求数据
- 项目使用了部分elementui组件

1. 首先需要进入src/mock/home/下 启动
> json-server detail.js -H :ip

2. 项目须得修改src/netword/request.js下的baseUrl,修改为自己ip。
 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
