import Vue from 'vue'
import Router from 'vue-router'
import commod from '@/view/goods/commod.vue'
import assess from '@/view/goods/assess.vue'
import store from '@/view/goods/store.vue'
import good from '@/view/goods/good.vue'
import zuhe from '@/view/goods/zuhe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect: "/zuhe"
    },
    {
      path: '/good',
      name: 'good',
      components: {
        default: '',
        good: good
      }
    },
    {
      path: '/zuhe',
      name: 'zuhe',
      components: {
        default: '',
        zuhe: zuhe
      },
      children:[
        {
          path:"",
          redirect: "/commod"
        },
        {
          path: '/commod',
          name: 'commod',
          component: commod
        },
        {
          path: '/assess',
          name: 'assess',
          component: assess
        },
        {
          path: '/store',
          name: 'store',
          component: store
        }
      ]
    }
  ]
})
