<template>
  <div id="app">
    <div class="center">
      router-view 来实现布局<br>
      <pre>
        优点：简单、清晰，适合多种复杂布局
        缺点：最优解
      </pre>
        <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <router-link :to="{path:'login'}" class="nav">login</router-link>
    <router-link :to="{path:'bar'}" class="nav">bar</router-link>
    <router-link :to="{path:'foo'}" class="nav">foo</router-link>
    <router-link :to="{path:'fnn'}" class="nav">fnn</router-link>
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
  computed: {
  },
  components: {
  },
  mounted() {
  },  
  methods: {
  },
}
</script>

<style>
html{
 
}
body{

}
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
