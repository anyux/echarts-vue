import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//添加下面两行
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入echarts,
import * as Echarts from 'echarts'

const app=createApp(App)
// 以后可以直接使用this.$echarts引用echarts
app.config.globalProperties.$echarts = Echarts

    app.use(router)
    .use(ElementPlus) // 添加
    .mount('#app')
