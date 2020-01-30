<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center" class="center-style">首页</div>
    </nav-bar>

    <tab-control class="tab-control" ref="tab1" @tabClick="tabClick" :titles="['流行', '新款', '精选']" v-show="isFixedTabControl"></tab-control>
    
    <scroll @pullUp="pullUpLoad" :probeType="3" @showScrollBtn="showScrollBtn" ref="scroll" :class="{'wrapper-2': !isChangeHeight , 'wrapper-1': isChangeHeight }">  
      <!-- 轮播图 -->
      <div class="z-index">
        <el-carousel trigger="hover" height="138px">
          <el-carousel-item v-for="img in images" :key="img.id">
            <img style="height: 138px; width: 100%;" :src="img" alt="轮播图" @load.once="carouSelImgLoad">
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 推荐 -->
      <recommand :recommands="recommands"></recommand>
      <!-- 本周流行 -->
      <recommand :recommands="features"></recommand>

      <!-- 推送标题 -->
      <tab-control :class="{ fixed: isFixedTabControl }" ref="tab2" @tabClick="tabClick" :titles="['流行', '新款', '精选']"></tab-control>

      <!-- 推送内容 -->
      <good-list :goods="sortList[listName].rows"></good-list>


    </scroll>

    <!-- 上拉按钮 -->
    <back-top @click.native="backToTop" v-show="isToTopButtonShow"></back-top>
  </div>
</template>

<script>
  import NavBar from '../../comps/NavBar'
  import Recommand from './Recommand'

  import TabControl from '../../comps/TabControl'
  import GoodList from '../../comps/GoodList'

  import Scroll from '../../comps/Scroll'
  import BackTop from '../../comps/BackTop'

  import {
    getHomeData,
    getHomePageData,
  } from '../../../network/home'

  export default {
    name: '',
    data() {
      return {
        images: [],
        recommands: [],
        features: [],

        //分类
        sortList: {
          new: {
            page: 0,
            rows: []
          },
          choose: {
            page: 0,
            rows: []
          },
          popular: {
            page: 0,
            rows: []
          },
        },
        typeAr: ['popular', 'new', 'choose'],
        //控制分类展示的列表名
        listName: 'popular',
        isToTopButtonShow: false,
        //tabcontrol2高度
        tabHeight: 0,
        isFixedTabControl: false,
        //改变better-scroll的高度
        isChangeHeight: false
      }
    },
    components: {
      NavBar,
      Recommand,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    created() {
      //加载图片，推荐，特性
      getHomeData().then(res => {
        // console.log(res)
        this.images = res.images
        this.recommands = res.commands
        this.features = res.features

      })

      //加载底部三种分类数据
      this.getHomeDataByType(1)
      this.getHomeDataByType(2)
      this.getHomeDataByType(3)

    },
    destroyed() {
      // console.log('de')
    },
    mounted() {

      //防抖函数
      const refreshFunc = this.debounce(this.$refs.scroll.refresh)
      
      //监听图片加载事件
      this.$bus.$on('imgLoad', () => {
        this.$refs.scroll.refresh()
      })

    },
    methods: {
      //轮播图加载完成事件
      carouSelImgLoad() {
        this.tabHeight = this.$refs.tab2.$el.offsetTop
      },

      //加载数据, type == 1 或 2 ,3
      getHomeDataByType(type) {
        const typeStr = this.typeAr[type - 1]
        const newPage = this.sortList[typeStr].page + 1

        getHomePageData(newPage, type).then(res => {

          this.sortList[typeStr].page = parseInt(res.data.page)
          this.sortList[typeStr].rows = this.sortList[typeStr].rows.concat(res.data.rows)

          //再次重新加载生效
          this.$refs.scroll.finishPullUp()
        }, err => err)
      },

      //监听子组件的发送的事件
      tabClick(idx) {
        this.listName = this.typeAr[idx]

        if(this.$refs.tab1) {
          this.$refs.tab1.curIndex = idx
        }
        if(this.$refs.tab2) {
          this.$refs.tab2.curIndex = idx
        }
      },
      //监听滚动的高度事件
      showScrollBtn(pos) {
        this.isToTopButtonShow = Math.abs(pos.y) > 800 
      
        this.isFixedTabControl = (Math.abs(pos.y) + 44) > this.tabHeight

        this.isChangeHeight = this.isFixedTabControl
      },
      pullUpLoad() {
        const idx = this.typeAr.findIndex((val, idx) => {          
          if(val == this.listName) {
            return true
          }
        })

        //type = 1,2,3
        this.getHomeDataByType(idx + 1)
      },
      backToTop() {
        this.isToTopButtonShow = false
        this.$refs.scroll.scrollTo(0,0)
      },
      
      //防抖动函数
      debounce(func, delay) {
        let timer = null 

        return function() {
          if(timer) clearInterval(timer)

          setTimeout(() => {
            func.apply(this)
          }, delay)
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .z-index {
    position: relative;
    z-index: 5;
  }
  .home {
    position: relative;
    height: 100vh;
    // padding-top: 44px;
  }

  .home-bar {
    background-color: var(--high-text-color);
    color: #fff;

    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 10;
  }
  .tab-control {
    
  }
  .fixed {
    position: fixed;
    top: 44px;
  }

  .wrapper-1 {
    height: calc(100% - 44px - 49px - 40px);
    overflow-y: scroll;
  }
  .wrapper-2 {
    height: calc(100% - 44px - 49px);
    overflow-y: scroll;
  }
</style>