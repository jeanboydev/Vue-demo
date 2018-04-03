import Vue from 'vue'
import Router from 'vue-router'
import TestRouter from '@/components/TestRouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TestRouter',
      name: 'TestRouter',
      component: TestRouter
    }
  ]
})
