import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './views/foo.vue'
import Bar from './views/bar.vue'
import Fnn from './views/fnn.vue'
import Login from './views/login.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/foo',
      component:Foo,
      meta:{
        layout:'layout'
      }
    },
    {
      path:'/bar',
      component:Bar,
      meta:{
        layout:'nosidelayout'
      }
    },
    {
      path:'/fnn',
      component:Fnn,
      meta:{
        layout:'layout'
      }
    }
]

const router = new VueRouter({
  mode:'history',
  linkExactActiveClass:'active-nav',
  routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
