<template>
    <div class="layout">
      <div class="side">有侧边栏 {{time}}</div>
      <div class="com-main">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>

// function getTime(){
//   let time = localStorage.getItem('time')
//   if(!time){
//     time = Date.now()
//     localStorage.setItem('time',time)
//   }
//   return time
// }

export default {
    name: 'layout',
    data(){
      return {
        time:Date.now()
        // time:getTime()
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
