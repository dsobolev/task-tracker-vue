import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TasksColumn from '../TasksColumn.vue'
import Task from '../Task.vue'
import { tasksList } from '../__mocks__/tasks.js'

describe('TasksColumn', () => {
    it('renders title', () => {
        const wrapper = mount(TasksColumn, { props: { title: 'To Do', tasks: [] } })
        expect(wrapper.text()).toContain('To Do')
    })

    it('renders all 3 items', () => {
        const wrapper = mount(TasksColumn, { props: {
            title: 'Done',
            tasks: tasksList
        } })

        const tasksCmps = wrapper.findAllComponents(Task)
        expect(tasksList.length).toBeGreaterThan(0)
        expect(tasksCmps).toHaveLength(tasksList.length)
    })
})