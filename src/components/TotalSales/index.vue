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
      title="Total Sales"
      value="￥ 32,039,165"
  >
<!--    使用匿名插槽-->
    <template v-slot:header>
      <div class="compare">
      </div>
    </template>
    <!--  使用命名插槽向子组件传递数据-->
    <template v-slot:footer>
      <div>
            <span>
      昨日销售额
    </span>
        <span class="money">
      ￥ 30,000,000
    </span>
      </div>
    </template>
  </common-card>
</template>

<style scoped>
.compare{
  height: 100%;
  background-color: yellow;
}
span {
  font-size: 12px;
}

.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>