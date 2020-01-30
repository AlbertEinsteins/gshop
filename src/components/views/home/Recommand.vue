<template>
  <div class="box">
    <div v-for="(recmd) in recommands" :key="recmd.id" class="box-son">
      <a :href="recmd.url">
        <img :src="recmd.image" alt="" class="avator">
      </a>
      <div class="box-text">
        {{ recmd.desc }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      recommands: {
        type: Array,
        default () {
          return []
        }
      }
    },
    created() {},
    methods: {
    },
  }
</script>

<style lang="less" scoped>
  .box {
    padding: 5px 1px 15px 1px;
    border-bottom: 5px solid #eee;
    margin-top: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .box-son {
      width: 25%;
      text-align: center;
      // border: 1px solid #000;
      box-sizing: border-box;
    }
    .box-text {
      text-align: center;
    }
  }

  .avator {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>