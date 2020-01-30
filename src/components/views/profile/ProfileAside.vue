<template>
  <div class="profile-aside">
    <div class="item">
      <span class="icon fa fa-envelope"></span>
      <div class="text">我的信息</div>
    </div>
    <div class="item">
      <span class="icon fa fa-database"></span>
      <div class="text">积分商城</div>
    </div>
    <div class="item">
      <span class="icon fa fa-align-center"></span>
      <div class="text">会员卡</div>
    </div>

    <div class="item" @click="changeToCart">
      <span class="icon fa fa-shopping-cart"></span>
      <div class="text">我的购物车</div>
    </div>
    <div class="item">
      <span class="icon fa fa-shopping-bag"></span>
      <div class="text">下载购物app</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    changeToCart() {
      this.$router.push('/shop')
    }
  },
}
</script>

<style lang="less" scoped>

  .item {
    height: 30px;



    .icon {
      color: var(--high-text-color);
      width: 30px;
      text-align: center;
      line-height: 30px;

    }

    .text {
      width: calc(100% - 30px - 5px);
      display: inline-block;
      padding-bottom: 5px;
      margin-left: 5px;
      font-size: 14px;

      border-bottom: 1px solid #eee;
    }
  }
  .item:nth-child(3) {
    border-bottom: 12px solid #eee;
  }
</style>