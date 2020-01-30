<template>
  <div class="fashion-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>  
  .fashion-list {
    padding: 15px;
    padding-left: 20px;

    display: flex;
    flex-wrap: wrap;
  }
</style>