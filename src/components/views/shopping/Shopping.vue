<template>
  <div class="shopping">
    <nav-bar class="nav-bar">
      <div class="center" slot="center">
        购物车({{ cartListLength }})
      </div>
    </nav-bar>


    <shopping-list></shopping-list>

    <shopping-bottom-bar></shopping-bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../comps/NavBar'
import ShoppingList from './ShoppingList'
import ShoppingBottomBar from './ShoppingBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: '',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    NavBar,
    ShoppingList,
    ShoppingBottomBar
  },
  computed: {
    ...mapGetters([
      'cartListLength'
    ]), 
  }
}
</script>

<style lang="less" scoped>
  .shopping {
    height: 100%;
  }

  .nav-bar {
    background-color: var(--high-text-color);
    position: relative;
    z-index: 5;
  }
  .center {
    text-align: center;
    color: #fff;
  }
</style>