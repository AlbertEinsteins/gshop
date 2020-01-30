<template>
  <div class="box">
    <table style="width: 95%; border-collapse: collapse; margin: 0 auto;">
      <tbody class="tbody">
        <tr>
          <td>尺码</td>
          <td>{{ goodParamInfo.chima }}</td>
        </tr>
        <tr>
          <td class="wid30">衣长</td>
          <td>{{ goodParamInfo.yichang }}</td>
        </tr>

        <tr>
          <td class="wid30">季节</td>
          <td>{{ goodParamInfo.jijie }}</td>
        </tr>
        <tr>
          <td  class="wid30">厂址</td>
          <td>{{ goodParamInfo.changzhi }}</td>
        </tr>
        <tr>
          <td  class="wid30">材质</td>
          <td>{{ goodParamInfo.caizhi }}</td>
        </tr>
        <tr>
          <td  class="wid30">领型</td>
          <td>{{ goodParamInfo.lingxing }}</td>
        </tr>
        <tr>
          <td  class="wid30">袖长</td>
          <td>{{ goodParamInfo.xiuchang }}</td>
        </tr>
        <tr>
          <td class="wid30">款式</td>
          <td>{{ goodParamInfo.kuanshi }}</td>
        </tr>

        <tr>
          <td class="wid30">风格</td>
          <td>{{ goodParamInfo.fengge }}</td>
        </tr>
        <tr>
          <td class="wid30">潮流</td>
          <td>{{ goodParamInfo.chaoliu }}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    goodParamInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
  .box {
    border-bottom: 2px solid #eee;
    height:380px;
  }
  .wid30 {
    width: 40%;
  }

  .pdb10px {
    padding-bottom: 10px;
  }
  .bb2px {
    border-bottom: 2px solid #eee;
  }

  .tbody {
    font-size: 13px;

    tr {
      line-height: 25px;
      height: 25px;
      border-bottom: 2px solid #eee;


      td:nth-child(2) {
        color: var(--high-text-color);
      }
      td {
        padding: 5px 10px;
        // border-bottom: 1px solid #000;
      }
      
    }

    tr:nth-child(10) {
      border-bottom: 0;
    }
  }
</style>