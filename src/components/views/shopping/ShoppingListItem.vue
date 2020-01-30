<template>
  <div class="shop-item">
    <div class="checkbox">
      <el-checkbox v-model="shopItem.isChecked" label=""></el-checkbox>
      
    </div>

    <div class="left">
      <img :src="shopItem.img" alt="">
    </div>
    <div class="right">
      <div class="title">
        {{ shopItem.title }}
      </div>
      <div class="desc">
        {{ shopItem.desc }}
      </div>
      <div class="price-count">
        <span class="price">{{ shopItem.price |priceFilter }}</span>
        <span class="count">x{{ shopItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    shopItem: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  filters: {
    priceFilter(oVal) {
      return '￥' + oVal + '.00'
    }
  }
}
</script>

<style lang="less" scoped>
  .shop-item {
    display: flex;

    margin: 3px 2px;
    padding: 5px 6px 5px 3px;
    border-bottom: 2px solid #eee;

    .checkbox {
      line-height: 6em;
    }
    img {
      width: 80px;
      height: 100px;
      border-radius: 5px;

      margin: 0 7px;
    }

    .right {

      .title {
        color: rgb(56, 53, 53);
        margin: 2px 0 10px;
        font-size: 16px;
        padding: 1px;

        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

      }

      .desc {
        color: rgb(121, 113, 113);
        font-size: 13px;

        // width: auto;
        height: 40px;
        line-height: 20px;
        

        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price-count {
        display: flex;
        

        .price {
          color: #ff4444;  
          flex: 1;    
        }

        .count {
          flex: 1;
          text-align: right;
        }
      }
    }
    
  }
</style>