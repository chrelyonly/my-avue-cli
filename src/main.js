import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
//需要先安装ElementPlus的依赖
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import Avue,{findObject} from '@smallwei/avue';
import zhLocale from '@smallwei/avue/lib/locale/lang/zh'
import '@smallwei/avue/lib/index.css';
import request from '@/axios/axiosConfig.js';
import {http} from '@/api/https';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.provide("$https",http)
app.provide("$findObject",findObject)
app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(Avue, { locale:zhLocale,axios:request })
app.mount('#app')
