import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Task from '../Task.vue'
import { TaskStatus, TaskEntity } from '../../common/interfaces.ts'

describe('Task', () => {
    it('shows title', () => {
        const task: TaskEntity = {
            title: 'Test Title',
            status: TaskStatus.InProgress
        }
        const wrapper = mount(Task, { props: { data: task } })
        expect(wrapper.text()).toContain('Test Title')
    })

    it('shows status', () => {
        const task: TaskEntity = {
            title: 'Test Title',
            status: TaskStatus.InProgress
        }
        const wrapper = mount(Task, { props: { data: task } })
        expect(wrapper.text()).toMatch(new RegExp('progress', 'i'))
    })
})
