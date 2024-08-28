import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Task from '@components/TaskItem.vue'
import { TaskStatus, type TaskEntity } from '@common/interfaces'

describe('Task', () => {
    it('shows title', () => {
        const task: TaskEntity = {
            id: 42,
            title: 'Test Title',
            status: TaskStatus.InProgress
        }
        const wrapper = mount(Task, { props: { data: task } })
        expect(wrapper.text()).toContain('Test Title')
    })
})
