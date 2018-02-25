import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import indexpage1 from '@/pages/indexpage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/index',
      name: 'indexpage1',
      component: indexpage1
    }
  ]
})
