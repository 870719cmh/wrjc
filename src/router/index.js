import Vue from 'vue'
import Router from 'vue-router'
import AIndex from '@/page/AIndex/index'
import AHome from '@/page/AIndex/home'
import AbnormalAlarm from '@/page/AIndex/bnormalAlarm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AIndex',
      component: AIndex,
      redirect: 'AHome',
      children: [
        {
          path: 'AHome',
          name: 'AHome',
          component: AHome,
        }
      ]
    },
    {
      path: '/',
      name: 'AIndex',
      component: AIndex,
      redirect: 'AbnormalAlarm',
      children: [
        {
          path: 'AbnormalAlarm',
          name: 'AbnormalAlarm',
          component: AbnormalAlarm,
        }
      ]
    },
  ]
})
