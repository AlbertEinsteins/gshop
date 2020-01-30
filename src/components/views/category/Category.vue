<template>
  <div class="wrapper">
    <nav-bar class="nav-bar">
      <div class="center" slot="center">商品分类</div>
    </nav-bar>

    <div class="box">
      <div class="left">
        <scroll class="wrapper">

          <category-aside :titles="titles"></category-aside>
        </scroll>
      </div>
      <div class="right">
        <category-main :id="7"></category-main>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '../../comps/NavBar'
  import CategoryAside from './CategoryAside'
  import CategoryMain from './CategoryMain'

  import Scroll from '../../comps/Scroll'

  export default {
    name: '',
    data() {
      return {
        titles: ['正在流行', '上衣', '裤子', '裙子', '内衣',
          '女鞋', '男衣', '包包', '运动', '配饰', '美妆', '个护', '家具', '生活'
        ],
      }
    },
    components: {
      NavBar,
      CategoryAside,
      Scroll,
      CategoryMain,
    },
    mounted() {

    },
  }
</script>

<style lang="less" scoped>
  .nav-bar {
    color: #fff;
    background-color: var(--high-text-color);

    position: relative;
    z-index: 3;
  }

  .box {
    display: flex;

    .left {
      width: 100px;
      background-color: rgba(238, 238, 238, 0.8);

    }

    .right {
      flex: 1;
      background-color: #fff;
    }
  }

  .wrapper {
    height: calc(100vh - 44px - 49px);

    // background-color: #fff;
    // position: relative;
    // z-index: 5;
  }
</style>