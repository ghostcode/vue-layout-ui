import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './views/foo.vue'
import Bar from './views/bar.vue'
import Fnn from './views/fnn.vue'
import Login from './views/login.vue'

import Layout from './components/layout.vue'
import NoSideLayout from './components/no-side-layout.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'/foo',
          component:Foo,
        },
        {
          path:'/fnn',
          component:Fnn,
        }
      ]
    },
    {
      path:'/',
      component:NoSideLayout,
      children:[
        {
          path:'/bar',
          component:Bar,
        },
      ]
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
