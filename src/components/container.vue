<template>
    <div class="com-main">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'container',
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>
    .com-main{
        flex-grow: 1;
        border:1px solid #ddd;
        box-sizing: border-box;
    }
</style>
