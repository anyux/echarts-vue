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
<common-card/>
</template>

<style scoped>

</style>