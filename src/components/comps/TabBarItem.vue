<template>
  <div class="tab-bar-item" @click="tick">
    <div :class="{ 'active': isActive }"><slot name="tab-icon"></slot></div>
    <div :class="{ 'active': isActive }"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    path: String
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    }
  },
  methods: {
    tick() {
      this.$router.push(this.path).catch(err => err)
    }
  },
}
</script>

<style lang="less" scoped>
  .tab-bar-item {
      flex: 1;
      height: 49px;
      text-align: center;
      box-sizing: border-box;

      text-shadow: 0 -2px 1px rgba(100,100,100,0.1)
  }
  .tab-bar-item:nth-child(n+2) {
      border-left: 1px solid #e3e3e3;
  }
  .active {
    color: rgb(226, 60, 137);
  }
    
</style>