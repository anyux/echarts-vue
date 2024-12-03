<script>
//导入组件
// import CommonCard from '../CommonCard'
// 导入mixin组件
import CommonCardMixin from "@/mixin/commonCardMixin";
// 注册组件
export default {
  // 注册组件
  // components: {
  //   CommonCard,
  // }
  // 使用共用代码，解决共用代码问题
  mixins: [CommonCardMixin],
  mounted() {
    // 获取dom
    const chartDom = document.getElementById("total-orders-chart");

    // 调用echarts对象初始化
    // init(dom,样式,option)
    const chart = this.$echarts.init(chartDom);
    // 设置配置项
    chart.setOption({
      xAxis: {
        // value,category,time,log
        // 适用于离散的类目数据
        // type: 'value',
        type: 'category',
        // type: 'time',
        // type: 'log',
        // 不显示x轴
        show: false,
        // 数据点与坐标轴之间不留空隙
        boundaryGap: false
      },
      yAxis: {
        // 不显示y轴
        show: false
      },
      // 数据序列
      series: [
        {
          // 折线图
          type: 'line',
          // 数据数组,表示折线的各个数据点
          data: [
              620,432,220,534,790,430,220,320,532,320,834,690,530,220,620
          ],
          // 设置折线下方的区域样式
          areaStyle: {
            // 填充区域为 purple
            color: 'purple'
          },
          // 设置折线样式
          lineStyle: {
            // 折线宽度为0,即不显示折线
            width: 0
          },
          // 设置数据点样式
          itemStyle: {
            // 数据点透明度为0,即不显示数据点
            opacity: 0
          },
          // 使折线平滑
          smooth: true
        }
      ],
      // 图表网格
      grid: {
        // 网格边距设置为0,表示图表填充整个容器
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    })
  }
}
</script>

<template>
  <!--  使用组件-->
  <!--  传值给到common-card组件-->
  <common-card
      title="累计订单量"
      value="2,157,420"
  >
    <!--    使用匿名插槽-->
    <template v-slot:header>
      <!--   表示累计销售订单趋势   -->
      <div id="total-orders-chart" :style="{width: '100%',height: '100%'}"/>
    </template>


    <!--  使用命名插槽向子组件传递数据-->
    <template v-slot:footer>
      <div>
            <span>
      昨日订单量
    </span>
        <span class="emphasis">
      20,000,000
    </span>
      </div>
    </template>
  </common-card>
</template>

<style scoped>
.compare-wapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.compare {
  font-size: 12px;
  margin-top: 3px;
  color: #666;
  display: flex;
  align-items: center;
}

.compare .increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}

.compare .decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}

</style>