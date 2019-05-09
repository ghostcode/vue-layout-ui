<template>
    <div class="layout">
      <div class="side" v-if="!$route.meta.hideSide">
      有侧边栏 {{time}}

      <pre>
        优点：快速，简单
        缺点：布局复杂、相差较大时，需要控制显示隐藏的地方会很多，维护性降低
      </pre>
      </div>
      <div class="com-main">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>

export default {
    name: 'layout',
    data(){
      return {
        time:Date.now()
      }
    },
    components:{
    },
}
</script>
<style lang="less" scoped>
.layout{
  display:flex;
  border:1px solid #ddd;
  .side{
    width:200px;
    height:300px;
    border-right:1px solid #ddd;
  }
  .com-main{
    flex:1 0 auto;
  }
}
</style>
