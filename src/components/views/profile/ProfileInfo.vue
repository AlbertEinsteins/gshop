<template>
  <div class="profile-info">
    <div class="box">
      <div class="item">
        <span>0.00</span>元
        <div>我的余额</div>
      </div>
      <div class="item">
        <span>0</span>个
        <div>我的优惠</div>
      </div>
      <div class="item">
        <span>0</span>分
        <div>我的积分</div>
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
    height: 80px;
    
    border-bottom: 12px solid #eee;

    display: flex;

    .item {
      flex: 1;

      text-align: center;
      padding: 15px;
      font-size: 15px;

      span {
        font-size: 21px;
        color: rgba(245, 45, 45, 0.8);
        font-weight: 600;
      }
    }
    .item:nth-child(n+2) {
      border-left: 1px solid #eee;
    }
  }
</style>