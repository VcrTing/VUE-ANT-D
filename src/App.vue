<script setup lang="ts">
const mounted = () => {
  // 启动时的方法写这里面
  setTimeout(() => {
    aii.ioading = false
  }, 200);
}
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const aii = reactive({
  ioading: true,
  alive: true
})

mounted()
</script>

<template>
  <app-conf-provider>
    <a-spin :spinning="aii.ioading" tip="数据加载中">
      <router-view/>
    </a-spin>
  </app-conf-provider>
</template>
