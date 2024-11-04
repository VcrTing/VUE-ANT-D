<template>
    <div>
        <a-row>
            <a-col :sapn="24">
                <div>
                    
                </div>
                <a-space wrap>
                    <a-button type="primary">Primary Button</a-button>
                    <a-button @click="funn.theme(0)">主要颜色</a-button>
                    <a-button @click="funn.theme(1)" type="dashed">换颜色</a-button>
                    <a-button type="text">Text Button</a-button>
                    <a-button type="link">Link Button</a-button>
                    <a-button type="primary">Search</a-button>
                    <a-tooltip title="search">
                        <a-button>
                            <LeftOutlined />
                            <span>返回</span>
                        </a-button>
                    </a-tooltip>
                </a-space>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang="ts">
// const prp = defineProps<{}>()

const funn = {
    theme: (v: number) => {
        console.log('换颜色 v =', v)
    }
}
</script>

<route lang="yaml">
path: /home
meta:
    layout: TabLayout
</route>