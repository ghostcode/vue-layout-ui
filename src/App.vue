<template>
  <div id="app">
    <div class="center">
        <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <router-link :to="{path:'login'}" class="nav">login</router-link>
    <router-link :to="{path:'bar'}" class="nav">layout</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      currentTab:'hello'
    }
  },
  components: {
  },
  methods: {
    changeComponent(){
      this.currentTab = this.currentTab == 'hello' ? 'world' : 'hello'
    }
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
