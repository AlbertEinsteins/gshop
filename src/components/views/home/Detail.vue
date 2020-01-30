<template>
  <div class="detail">
    <nav-bar class="nav-bar">
      <div class="left" slot="left" @click="backRoute"> &lt; </div>
      <div class="title-box" slot="center">
        <div class="title-item" v-for="(title, index) in titles" :key="title" :class="{ active: index == curIndex }"
          @click="ChangeState(index)"> {{ title }} </div>
      </div>
    </nav-bar>


    <scroll :probeType="3" @showScrollBtn="listenPos" class="wrapper" ref="scroll">
      <!-- 商品展示轮播图 -->
      <div>
        <el-carousel trigger="hover" height="250px">
          <el-carousel-item class="product-img-item" v-for="img in product.images" :key="img">
            <img :src="img" alt="展示图片">
          </el-carousel-item>
        </el-carousel>

      </div>

      <!-- 商品基本信息 -->
      <detail-base-info :goodBaseInfo="goodBaseInfo"></detail-base-info>
      
      <!-- 商品参数信息 -->
      <detail-param-info ref="param" :goodParamInfo="goodParamInfo"></detail-param-info>

      <!-- 评价 -->
      <detail-user-comment ref="comment"></detail-user-comment>

      <!-- 推荐 -->
      <detail-recommand ref="recommand"></detail-recommand>
    </scroll>


    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>

    <back-top @click.native="backToTop" v-show="isToTopButtonShow"></back-top>
  
  </div>
</template>

<script>
  import NavBar from '../../comps/NavBar'
  import DetailBaseInfo from './DetailBaseInfo'
  import DetailParamInfo from './DetailParamInfo'
  import DetailUserComment from './DetailUserComment'
  import DetailRecommand from './DetailRecommand'
  import DetailBottomBar from './DetailBottomBar'
  import BackTop from '../../../components/comps/BackTop'

  import Scroll from '../../comps/Scroll'

  import {
    BACK_TO_TOP_HEIGHT
  } from '../../../assets/js/constant'

  //导入network相关的函数及相关类
  import {
    GoodBaseInfo,
    GoodParamInfo,

    getInfoById
  } from '../../../network/detail'

  export default {
    name: 'Detail',
    data() {
      return {
        id: 0,
        titles: ['商品', '参数', '评论', '推荐'],
        curIndex: 0,
        product: {},
        goodBaseInfo: {},
        scroll: {},
        goodParamInfo: {},
        titleHeight: [],
        isToTopButtonShow: false
      }
    },
    components: {
      NavBar,
      DetailBaseInfo,
      Scroll,
      DetailParamInfo,
      DetailUserComment,
      DetailRecommand,
      DetailBottomBar,
      BackTop
    },
    created() {
      this.id = this.$route.params.id
      //根据id获取信息
      getInfoById(this.id).then(res => {
        this.product = res

        this.goodBaseInfo = new GoodBaseInfo(this.product)
        this.goodParamInfo = new GoodParamInfo(this.product)
      }, err => err)

      //获取标题对应组件的高度
      this.getTitleHeight()
    },
    methods: {
      listenPos(pos) {
        const y = Math.abs(pos.y)

        this.changeNavBarDynamic(y)
        
        //改变backtop状态
        this.isToTopButtonShow = (y >= BACK_TO_TOP_HEIGHT)
      },
      changeNavBarDynamic(y) {
        let i = 0 ;
          for(; i < this.titleHeight.length ; i++) {
            if(y <= this.titleHeight[i]) {
              break
            }
          }
        this.curIndex = (i - 1) < 0 ? 0 : i - 1 
      },
      backToTop() {
        this.$refs.scroll.scrollTo(0, 0)
        this.isToTopButtonShow = true
      },
      ChangeState(index) {
        //改变导航栏的状态
        this.curIndex = index

        //跳转到相应的位置
        this.$refs.scroll.scrollTo(0, -this.titleHeight[index])
      },
      //获取标题对应组件的高度
      getTitleHeight() {
        this.$nextTick(() => {
          // this.titleHeight = []

          this.titleHeight.push(0)
          this.titleHeight.push(this.$refs.param.$el.offsetTop)
          this.titleHeight.push(this.$refs.comment.$el.offsetTop)
          this.titleHeight.push(this.$refs.recommand.$el.offsetTop)
          console.log(this.titleHeight)
        })
      },

      //返回路由，弹出最新的路由
      backRoute() {
        this.$router.back()
      },

      //监听子组件的点击事件
      addToCart() {
        //封装cartItem
        
        const cartItem = {}

        cartItem.img = this.product.images[0]
        cartItem.title = this.goodBaseInfo.title
        cartItem.desc = this.product.desc
        cartItem.price = this.goodBaseInfo.nowPrice
        cartItem.id = this.product.id
        cartItem.count = 1

        this.$store.dispatch('addToCart', cartItem)

        //弹出成功添加的消息
        this.$message({
          message: '添加成功',
          offset: 44,
          type: 'success'
        })
      },
      
    },
  }
</script>

<style lang="less" scoped>
  .el-carousel {
    background: #fff;
  }

  .detail {
    background-color: #fff;

    position: relative;
    z-index: 1;

    .nav-bar {
      position: relative;
      z-index: 1;
      background-color: #fff;
    }
  }

  .wrapper {
    height: calc(100vh - 44px - 49px);
  }

  .title-box {
    display: flex;
    font-size: 12px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--high-text-color)
  }

  .product-img-item {
    img {
      width: 100%;
      // height: 100%;
    }
  }
</style>