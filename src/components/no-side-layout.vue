<template>
    <div class="">
      <div>这里没有侧边栏</div>
      <div class="com-main">
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
    name: 'no-side-layout',
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>

</style>
