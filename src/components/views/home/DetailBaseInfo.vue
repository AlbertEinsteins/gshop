<template>
  <div class="product-base" v-cloak>
    <div class="product-title">{{ goodBaseInfo.title }}</div>
    <div class="product-price">
      <span class="product-price-now">{{ goodBaseInfo.nowPrice |priceFilter }}</span>
      <span class="product-price-before">{{ goodBaseInfo.price |priceFilter }} </span>
      <span class="product-price-badge">7折</span>
    </div>
    <div class="info-count">
      <span class="sell">销量 {{ goodBaseInfo.sellCount }}</span>
      <span class="collect">收藏{{ goodBaseInfo.collectCount }}人</span>
      <span class="desc">{{ goodBaseInfo.diliverTime }}小时发货</span>
    </div>

    <div class="info-aside">
      <span v-for="(txt, index) in ensureText" :key="txt">
        {{ txt }}
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodBaseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  },
  mounted() {
  },
  data() {
    return {
      ensureText: ['延误必赔','退货补运费','全国包邮','7天无理由退货'],
    }
  },
  filters: {
    priceFilter(oldV) {
      return '￥' + oldV + '.00'
    }
  }
}
</script>

<style lang="less" scoped>
  .bd {
    border-bottom: 2px solid #eee;
  }
  .mg {
    margin: 5px 0;
  }
  .product-base {
    margin: 10px 5px;
    padding: 0 3px;
    letter-spacing: 1px;
    
    
    .product-title {
      font-weight: 600;
      font-size: 18px;
    }

    .product-price {
      margin: 10px 0 15px 0;

      .product-price-now {
        word-spacing: -3px;
        letter-spacing: -1px;
        font-size: 22px;
        color: var(--high-text-color);

        position: relative;
        left: -3px;
      }
      .product-price-before {
        font-size: 12px;
        letter-spacing: -1px;
        text-decoration: line-through;
        color: rgb(158, 154, 154);
      }
      .product-price-badge {
        font-size: 13px;
        background-color: var(--high-text-color);
        color: #fff;
        padding: 0 6px;
        border-radius: 40%;

        position: relative;
        top: -5px;
      }
    }


    .info-count {
      display: flex;
      justify-content: space-between;
      

      font-size: 12px;
      color: rgb(158, 154, 154);
      padding-bottom: 4px;
      border-bottom: 2px solid #eee;

      letter-spacing: 0px;
      
      span {
        flex: 1;
      }
      span:nth-child(2) {
        text-align: center;
      }
      span:nth-child(3) {
        text-align: right; 
      }
    }
    .info-aside {
      letter-spacing: 0;
      font-size: 12px;
      padding: 15px 0;
      border-bottom: 2px solid #eee;

      display: flex;
      flex-wrap: wrap;

      span {
        width: 25%;
      }
      span:nth-last-child(1) {
        text-align: right;
      }
    }
  }
  
</style>