import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import variavel from '@/components/variavel'
import operaddoresLogicos from '@/components/operaddoresLogicos'
import exercixioUm from '@/components/exercixioUm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/AulaUm',
      name: 'variavel',
      component: variavel
    },
    {
      path: '/AulaDois',
      name: 'operaddoresLogicos',
      component: operaddoresLogicos
    },
    {
      path: '/AulaTres',
      name: 'exercixioUm',
      component: exercixioUm
    }
  ]
})
