import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import About from '@/components/about/About'
import ShowNote from '@/components/note/Show'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/note/:id.html',
      name: 'ShowNote',
      component: ShowNote,
    }
  ]
})
 