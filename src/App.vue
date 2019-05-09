<template>
  <div id="app">
    <div class="center">
      slot 来实现布局<br>

      <pre>
        优点：简单、清晰，适合多种复杂布局
        缺点：外层布局每次都会重新渲染，对性能会有影响。（切换bar/foo，查看时间戳每次都会变）
        由于每次都重新渲染，若有网络请求，比如用户信息等公共信息，
        每次都会调用接口（当然本地存储可以解决,查看源码内的layout.vue里time换为getTime()获取）
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
