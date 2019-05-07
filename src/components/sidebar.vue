<template>
    <div class="com-sidebar">
        <router-link :to="{path:'foo'}">foo</router-link>
        <router-link :to="{path:'bar'}">bar</router-link>
    </div>
</template>
<script>
export default {
    name: 'sidebar',
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>
    .com-sidebar{
        height:500px;
        display: flex;
        flex-direction: column;
        flex:0 0 300px;
        border:1px solid #ddd;
        box-sizing: border-box;
        a{
          height:30px;
          line-height:30px;
          text-align:center;
          border-bottom:1px solid #ddd;
          text-decoration:none;
        }
        .active-nav{
          background-color:#999;
        }
    }
</style>
