<template>
  <div class="bottom-bar">
    <div class="box">
      <div class="item">
        <i class="fa fa-commenting-o" style="color: var(--high-text-color);"></i>
        <div class="txt">客服</div>
      </div>
      <div class="item">
        <i class="fa fa-shopping-bag"></i>
        <div class="txt">店铺</div>
      </div>
      <div class="item">
        <i class="fa fa-star"></i>
        <div class="txt">收藏</div>        
      </div>
      <div class="item" @click="addCart">
        加入购物车
      </div>
      <div class="item">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    //向父组件发送一个事件
    addCart() {
      this.$emit('addCart')
    }
  },
}
</script>

<style lang="less" scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);

    position: relative;
    z-index: 4;
    // bottom: 49px;


    .box {
      display: flex;
    
      .item {
        width: 18%;
        text-align: center;

      }
      .item:nth-last-child(1) {
        flex: 1;
      }
      .item:nth-last-child(2) {
        width: 100px;
      }
      .item:nth-child(n+4) {
        line-height: 49px;
      }
      .item:nth-last-child(n+3) {
        padding-top: 6px;
      }
      .item:nth-child(4) {
        background-color: yellow;
      }
      .item:nth-child(5) {
        background-color: var(--high-text-color);
      }
    }

  }

  .txt {
    font-size: 13px;
    color: rgb(117, 116, 116);
  }
</style>