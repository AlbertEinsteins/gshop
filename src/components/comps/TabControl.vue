//选项卡

<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles" :key="title" class="tab-control-item" @click="tabChange(index)">
      <span :class="{ 'active': index == curIndex }">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      curIndex: 0
    }
  },
  methods: {
    tabChange(index) {
      this.curIndex = index; 

      this.$emit('tabClick', index)
    }
  },
}
</script>

<style lang="less" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    

    .tab-control-item {
      flex: 1;
      height: 40px;
      line-height: 40px;  
    }
  }
  .active {
    color: var(--high-text-color);
    padding: 5px;
    border-bottom: 2px solid var(--high-text-color);
  }

</style>