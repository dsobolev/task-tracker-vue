import { createRouter, createWebHistory } from 'vue-router'
import AllTasksView from '../views/AllTasksView.vue'
import TaskNewView from '../views/TaskNewView.vue'
import TaskDetailsView from '../views/TaskDetailsView.vue'
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
            name: 'taskView',
            component: TaskDetailsView,
        },
        {
            path: '/task/new',
            name: 'taskNew',
            component: TaskNewView,
        },
        {
            path: '/task/:taskId/edit',
            name: 'taskEdit',
            component: TaskEditView,
        },


    ]
})

export default router
