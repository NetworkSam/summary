import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/Add.vue'
import Detail from '@/components/Detail.vue'
import List from '@/components/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Add',
      component: App
    },
    {
      path: '/List',
      component: List
    },
    {
      path: '/Detail/:id', //this.$route.params.id
      component: Detail
    }
  ]
})
