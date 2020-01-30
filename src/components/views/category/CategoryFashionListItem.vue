<template>
  <div class="item">
    <div class="img">
      <img :src="item.img" alt="">
    </div>
    <div class="title">{{ item.title |titleFilter}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  },
  filters: {
    titleFilter(oldTitle) {
      return oldTitle.substr(0, 6)
    }
  }
}
</script>

<style lang="less" scoped>
  .item {
    width: 50%;
    margin: 10px 0;
    text-align: center;

    .img {
      width: 50px;
      height: 50px;
      margin: 0 auto;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
</style>