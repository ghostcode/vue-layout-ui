import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Layout from './components/layout.vue'
import Foo from './components/foo.vue'
import Bar from './components/bar.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Layout,
        children:[
            {
                path:'/foo',
                component:Foo
            },
            {
                path:'/bar',
                component:Bar
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
