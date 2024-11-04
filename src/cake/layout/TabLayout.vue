<template>
    <global-layout class="o-tab-layout">
        <template #menu>
            <side-menu>

            </side-menu>
        </template>
        <template #header>
            <global-header>

            </global-header>
        </template>
        <template #content>
            <router-view/>
        </template>
    </global-layout>
</template>

<script setup lang="ts">
// const prp = defineProps<{}>()

</script>