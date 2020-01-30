<template>
  <div class="shop-list">

    <scroll class="wrapper" ref="scroll">
      <shop-list-item v-for="(item) in cartList" :key="item.id" 
        :shopItem="item"></shop-list-item>

    </scroll>


    
  </div>
</template>

<script>
  import Scroll from '../../comps/Scroll'
  import ShopListItem from './ShoppingListItem'

  import {
    mapGetters
  } from 'vuex'

  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    components: {
      Scroll,
      ShopListItem
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    height: calc(100vh - 44px - 49px - 40px);
  }
</style>