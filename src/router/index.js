import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Instance from '@/components/Instance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Instance',
      component: Instance
    },
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
