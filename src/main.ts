import { createApp } from 'vue'
import App from './App.vue'
import './ui/index.sass'
import Router from './app/router/_router'

import * as Icons from '@ant-design/icons-vue'

// 完整导入 表格库
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)
app.use(Router)
Object.keys(Icons).forEach((k: ONE|any) => app.component(k, Icons[k]))

app.mount('#app')
