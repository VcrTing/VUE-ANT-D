<template>
    <a-layout>
        <a-layout-sider>
            <slot name="menu"></slot>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>
                <slot name="header"></slot>
            </a-layout-header>
            <a-layout-content>
                <slot name="content"></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
// const prp = defineProps<{}>()

</script>