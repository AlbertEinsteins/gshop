<template>
  <div class="category-aside">
    <ul class="box">
      <li v-for="(item, index) in titles" :key="item"
        :class="{ active: index == curIndex }" @click="asideClick(index)">
        {{ item }}
      </li>
    </ul>
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
    asideClick(idx) {
      this.curIndex = idx
    }
  },
}
</script>

<style lang="less" scoped>
  .active {
    border-left: 3px solid var(--high-text-color) ;
    color: var(--high-text-color);
    font-weight: 600;
    background-color: #fff;

  }

  .box {
    text-align: center;

    li {
      padding: 5px;
      font-size: 14px;
      height: 30px;
      line-height: 30px;
    }
    li:nth-child(n+2) {
      border-top: 1px solid rgb(219, 217, 217);
    }
  }
</style>