<template>
<div class="home">
<!--引用4个组件-->
<!--  引用时将驼峰格式转换为小写，中间使用-分隔-->
  <top-view/>
  <sales-view/>
  <bottom-view/>
  <map-view/>
</div>
</template>

<script>
// 导入4个组件
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  // 注册组件
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  }
}
</script>

<style>
.home{
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;

}
</style>