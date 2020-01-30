<template>
  <div class="profile-login">
    <div class="avator">
      <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" :size="60"></el-avatar>
    </div>
    <div class="center">
      <div class="title">登陆/注册</div>
      <div class="desc"><i class="fa fa-phone"></i> 暂无绑定手机号</div>
    </div>
    <div class="right">
      <i class="fa fa-reply"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
  .el-avatar {
    margin: 0 5px;
    margin-right: 10px;

    background-color: rgb(236, 227, 227);
  }

  .profile-login {
    height: 70px;
    padding: 15px;

    background-color: var(--high-text-color);

    display: flex;

    .avator {
      margin-top: 5px;
    }
    
    .center {
      flex: 1;

      padding: 5px 2px;
      color: rgb(255, 251, 251);
      line-height: 30px;
      
      .title {
        font-size: 17px;
      }

      .desc {
        color: #f2f7f2;

        font-size: 13px;
      }
    }

    .right {
      flex: 1;
      color: #fff;
      font-size: 30px;
      text-align: right;

      line-height: 68px;
    }
  }
</style>