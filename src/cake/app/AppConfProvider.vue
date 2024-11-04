<template>
  <a-config-provider :locale="locale">
    <slot></slot>
  </a-config-provider>
</template>

<script setup lang="ts">
import zh_CN from 'ant-design-vue/es/locale/zh_CN';
const locale = ref(zh_CN)
</script>