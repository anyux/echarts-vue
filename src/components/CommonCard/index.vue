<script >
export default {
  name: "CommonCard",
  props: {
    title: {
      type: String,

    },
    value: {
      type: String,
    },
    total: {
      type: Number,
    }
  }
}
</script>

<template>
<div class="common-card">
  <div class="title">
    {{ title }}
  </div>
  <div class="value">
    {{ value }}
  </div>
  <div class="chart">
<!--    设置为默认插槽-->
    <slot name="header">

    </slot>
  </div>
  <div class="line">
  </div>
  <div class="total">
<!--    定义命名插槽，这样可以在父组件中定义两个值-->
    <slot name="footer">

    </slot>
  </div>
</div>
</template>

<style scoped>
.title{
  font-size: 12px;
  color: #999;
}
.value{
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart{
  height: 50px;
}
.line{
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total{
  font-size: 12px;
  color: #666;
}
</style>