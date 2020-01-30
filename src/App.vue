<template>
  <div id="app">

    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    <tab-bar>
      <tab-bar-item path="/index">
        <i slot="tab-icon" class="icon-style fa fa-home"></i>
        <div slot="tab-text" class="tab-font">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i slot="tab-icon" class="fa fa-cubes icon-style"></i>
        <div slot="tab-text" class="tab-font">分类</div>        
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <i slot="tab-icon" class="fa fa-shopping-cart icon-style"></i>
        <div slot="tab-text" class="tab-font">购物车</div>        
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i slot="tab-icon" class="fa fa-home icon-style"></i>
        <div slot="tab-text" class="tab-font">我的</div>        
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/comps/TabBar'
import TabBarItem from './components/comps/TabBarItem'

export default {
  name: 'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less">

  .icon-style {
    font-size: 20px;
    margin: 10px 0 2px 0;
  }
  .tab-font {
    font-size: 12px;
  }
</style>
