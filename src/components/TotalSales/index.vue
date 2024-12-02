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
}
</script>

<template>
  <!--  使用组件-->
  <!--  传值给到common-card组件-->
  <common-card
      title="累计销售额"
      value="￥ 32,039,165"
  >
<!--    使用匿名插槽-->
    <template v-slot:header>
      <div class="compare-wapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.58%</span>
<!--          向上箭头-->
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">6.33%</span>
          <!--          向下箭头-->
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <!--  使用命名插槽向子组件传递数据-->
    <template v-slot:footer>
      <div>
            <span>
      昨日销售额
    </span>
        <span class="emphasis">
      ￥ 30,000,000
    </span>
      </div>
    </template>
  </common-card>
</template>

<style scoped>
.compare-wapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.compare{
  font-size: 12px;
  margin-top: 3px;
  color: #666;
  display: flex;
  align-items: center;
}
.compare .increase{
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.compare .decrease{
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}

</style>