<template>
  <div class="box">
    <div class="title">
      <span>用户评价</span>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <div class="avator">
        <span><i class="fa fa-comment"></i></span>
        <span>喜爱喜rose</span>
      </div>
      <div class="comment">
        衣服很合适，也没有多余的调试的按鼠标垫阿U币速度表爱是不对吧爱苏打饼UI爱是不对把斯大林看收到了你最想你看了下只能看来你写字楼开心呢 
      </div>
      <div class="comment-aside">
        <span>2020-01-02</span>
        <span>颜色：白</span>
        <span>尺码: M</span>
      </div>
      <div class="comment-img">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556003245,1955446648&fm=26&gp=0.jpg" alt="图片1">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556003245,1955446648&fm=26&gp=0.jpg" alt="图片2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
  .box {
    padding: 15px 15px 0;
    border-bottom: 2px solid #eee;

    .title {
      display: flex;

      font-size: 14px;
      border-bottom: 2px solid #eee;
      padding: 5px 0;

      span {
        flex: 1;
      }
      a {
        text-decoration: none;
        color: #000;
      }
    }

    .content {

      .avator {
        margin: 3px 0;
        * {
          line-height: 35px;
          margin: 0 3px;
        }
      }
      
      .comment {
        font-size: 13px;
        color: rgb(68, 63, 63);
        margin: 5px 0;
      }

      .comment-aside {
        font-size: 13px;
        color:rgb(136, 128, 128);
        span:nth-child(n+2) {
          margin: 0 5px;
        }
      }

      .comment-img {
        margin: 5px 0;

        img {
          width: 70px;
          height: 70px;
        }
        img:nth-child(n+2) {
          margin: 0 5px;
        }
      }
    }
  }
</style>