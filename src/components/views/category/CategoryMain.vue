<template>
  <div class="">
    <scroll class="wrapper" ref="scroll" @pullUp="loadMore" :isPullUp="true">
      <category-fashion-list>
        <category-fashion-list-item 
          v-for="(item, index) in list.data" :key="item.id"
          :item="item">
          </category-fashion-list-item>
      </category-fashion-list>
    </scroll>
  </div>
</template>

<script>
  import CategoryFashionList from './CategoryFashionList'
  import CategoryFashionListItem from './CategoryFashionListItem'


  import Scroll from '../../comps/Scroll'

  //导入network相关的函数
  import {
    getSortItemBySortId
  } from '../../../network/category'

  export default {
    name: '',
    props: {
      id: {
        type: Number,
        default() {
          return 7
        }
      }
    },
    components: {
      CategoryFashionList,
      CategoryFashionListItem,
      Scroll,
    },
    data() {
      return {
        list: { page: 0, data: [] }
      }
    },
    created() {
      //获取
      this.getData()
    },
    methods: {
      getData() {
        let page = -1
        const pagenum = 12

        page = this.list.page + 1

        getSortItemBySortId(this.id, page, pagenum).then(res => {
          this.list.page = page
          this.list.data.push.apply(this.list.data, res)

          //重新加载后刷新
          
          this.$refs.scroll.refresh()
          this.$refs.scroll.finishPullUp()
        })
      },
      //上拉加载
      loadMore() {
        console.log('上拉')
        this.getData()
      }
    },
  }
</script>

<style lang="less" scoped>
  .wrapper {
    height: calc(100vh - 44px - 49px);
  }
</style>