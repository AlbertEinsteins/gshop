/* Good Lisi  */
<template>
  <div class="good-list">

    <good-list-item v-for="(item) in goods" :key="item.id" :good="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
  name: '',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style lang="less" scoped>
  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>