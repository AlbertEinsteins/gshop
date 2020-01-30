<template>
  <div class="bottom-bar">
    <div class="price">
      <span>合计:</span>
      <span>￥{{cartAllCheckedPrice}}</span>
    </div>
    <div class="btns">
      <div class="text" @click="addOrder">去结算</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: '',
  props: {
    
  },
  computed: {
    ...mapGetters([
      'cartAllCheckedPrice'
    ])
  },
  methods: {
    addOrder() {
      console.log('提交')    
    }
  },
  
  
  
}
</script>

<style lang="less" scoped>
  .bottom-bar {
    background-color: #e6eee6;
    height: 40px;
    line-height: 2.4em;
    font-size: 15px;
    padding: 0 2px;

    display: flex;

    .price {
      flex: 1;

      span {
        // letter-spacing: -1px;
      }

      span:nth-child(2) {
        color: var(--high-text-color);
        letter-spacing: -1px;
      }
    }

    .btns {


      .text {
        width: 50px;
        color: rgba(255, 255, 255, 0.8);
        text-align: right;
        padding-right: 10px;
        background-color: #19a083;
        border-radius: 4px;
      }
    }
    
  }
</style>