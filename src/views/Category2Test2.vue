<template>
    <div class="echarts-wrap absolute-md" id="demo1"></div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default {
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('demo1'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
        textStyle: {
          align: 'center'
        }
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
}

</script>

<style lang="less" scoped>
// @import '../App.less';
</style>