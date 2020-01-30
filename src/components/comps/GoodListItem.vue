// List View Item
<template>
  <div class="good-item" @click="openDetail">
    <img :src="good.image" alt="" @load="imgLoad">
    <div class="good-item-info">
      <p class="desc">{{ good.desc }}</p>
      <span class="price">{{ good.price |priceFilter }}</span>
      <span class="cnt"><i class="fa fa-star-o"></i>{{ good.zcnt }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    priceFilter(val) {
      return val + '.00'
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    openDetail() {
      this.$router.push('/detail/' + this.good.id)
/*       this.$router.push({
        path: '/detail',
        query: {
          id: this.good.id
        }
      }) */
    }
  },
}
</script>

<style lang="less" scoped>
  .good-item {
    width: 46%;
    padding: 2px;

    height: 70%;
    box-sizing: border-box;
    font-size: 13px;
    text-align: center;
    img {
      width: 100%;
      height: 70%;
      border-radius: 4%;
    }
    .good-item-info {

      .cnt {
        margin-left: 5px;
      }
    }
  }
</style>