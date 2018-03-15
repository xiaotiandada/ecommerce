import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
// import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import detail from '@/pages/detail'

import count from '@/pages/detail/count'
import forecast from '@/pages/detail/forecast'
import analysis from '@/pages/detail/analysis'
import publish from '@/pages/detail/publish'
import orderList from '@/pages/orderList'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail,
      redirect: '/detail/count',
      children : [
        {
          path: 'count',
          name: 'Cont',
          component: count
        },
        {
          path: 'forecast',
          name: 'Forecast',
          component: forecast
        },
        {
          path: 'analysis',
          name: 'Analysis',
          component: analysis
        },
        {
          path: 'publish',
          name: 'Publish',
          component: publish
        }
      ]
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: orderList
    }
  ]
})
