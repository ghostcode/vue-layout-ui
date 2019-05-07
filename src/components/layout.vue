<template>
    <div class="layout">
        <sidebar></sidebar>
        <container></container>
    </div>
</template>
<script>
import sidebar from './sidebar.vue'
import container from './container.vue'

export default {
    name: 'layout',
    components:{
        sidebar,
        container
    },
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>
.layout{
    display: flex;
}
</style>
