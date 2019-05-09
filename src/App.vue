<template>
  <div id="app">
    <div class="center">
      显隐控制布局<br>
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
