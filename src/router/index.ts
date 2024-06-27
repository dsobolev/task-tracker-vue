import { createRouter, createWebHistory } from 'vue-router'
import AllTasksView from '../views/AllTasksView.vue'
import TaskEditView from '../views/TaskEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasksGrid',
      component: AllTasksView,
    },
    {
      path: '/task/:taskId',
      name: 'taskEdit',
      component: TaskEditView,
    },
  ]
})

export default router
