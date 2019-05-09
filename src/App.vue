<template>
  <div id="app">
    <div class="center">
      显隐控制布局<br>
      <pre>
        优点：快速，简单
        缺点：布局复杂、相差较大时，需要控制显示隐藏的地方会很多，维护性降低
      </pre>
        <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <router-link :to="{path:'login'}" class="nav">login</router-link>
    <router-link :to="{path:'bar'}" class="nav">bar</router-link>
    <router-link :to="{path:'foo'}" class="nav">foo</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
    }
  },
  components: {
  },
  methods: {

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.center{
    text-align: center;
}
.nav{
  margin-right:20px;
}
</style>
