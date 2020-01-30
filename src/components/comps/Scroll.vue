<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: '',
    props: {
      probeType: {
        type: Number,
        default() {
          return 0 
        }
      },
      isPullUp: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    data() {
      return {
        scroll: {},
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.isPullUp
      })


      //监听滚动事件,只有在probeType = 2,3时，有效
      this.scroll.on('scroll', (pos) => {
        this.$emit('showScrollBtn', pos)
      })

      //监听上拉事件
      this.scroll.on('pullingUp', () => {
        console.log('上拉')
        this.$emit('pullUp')
      })
    },
    methods: {
      scrollTo(x, y, duration=500) {
        this.scroll && this.scroll.scrollTo(x,y,duration)
      },
      //完成上拉加载
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
        // console.log(this.scroll)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      addHeight(aHeight=1) {
        this.scroll.scrollerHeight += aHeight
        console.log(this.scroll.scrollerHeight)

      }
    },
  }
</script>

<style lang="less" scoped>
  // .wrapper {
  //   height: 150px;
  //   overflow: hidden;
  // }
</style>