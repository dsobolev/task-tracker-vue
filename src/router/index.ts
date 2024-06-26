import { createRouter, createWebHistory } from 'vue-router'
import AllTasksView from '../views/AllTasksView.vue'
import TaskDetails from '../components/TaskDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'grid',
      component: AllTasksView,
    },
  ]
})

export default router
