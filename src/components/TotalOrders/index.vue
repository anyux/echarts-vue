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
    chart.setOption({
      xAxis: {

      },
      yAxis: {

      },
      series: [
        {
          data: [
              620,432,220,534,790,430,220,320,532,320,834,690,530,220,620
          ],
          type: 'line',
        }
      ]
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