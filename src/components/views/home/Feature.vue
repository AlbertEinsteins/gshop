/* 
  特别推荐
 */
<template>
  <div class="">
    <recommand v-for="(item, index) in features" :key="index"></recommand>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    features: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
 
</style>