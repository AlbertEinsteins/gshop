<template>
  <div class="backtop">
    <!-- <img src="~/" alt="">     -->
    <img src="../../assets/top.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      
    }
  },
  methods: {
  
  },
}
</script>

<style lang="less" scoped>
  .backtop {
    width: 40px;
    // height: 40px;
    background-color: #eee;
    text-align: center;
    line-height: 2em;
    border-radius: 50%;
    color: #ff8040;

    position: fixed;
    right: 2px;
    bottom: 55px;

    img {
      width: 50%;
    }
  }
</style>