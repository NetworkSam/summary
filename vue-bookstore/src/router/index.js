import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add.vue'
import Detail from '@/components/Detail.vue'
import List from '@/components/List.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/List',
      component: List
    },
    {
      path: '/Add',
      component: Add
    },
    {
      path: '/detail/:id', //this.$route.params.id
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      component: List
    }
  ]
})
