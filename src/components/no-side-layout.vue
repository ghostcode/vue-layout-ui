<template>
    <div class="no-side-layout">
      <div class="com-main">
        <router-view></router-view>
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
.no-side-layout{
  border:1px solid #ddd;
  .com-main{
    height:300px;
  }
}
</style>
