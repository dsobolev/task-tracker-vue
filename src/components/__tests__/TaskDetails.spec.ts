import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TaskDetails from '@components/TaskDetails.vue'
import { TaskStatus } from '@common/interfaces'

const task = {
    "id": 1,
    "title": "Title 1",
    "status": 0,
    "description": "Lorem ipsum"
}

describe('TaskDetails', () => {
    it('renders all task data', () => {
        const wrapper = mount(TaskDetails, { props: { task } })
        expect(wrapper.text()).toContain(task.id)
        expect(wrapper.text()).toContain(task.title)
        expect(wrapper.text()).toContain(task.description)
    })

    it('displays ToDo status', () => {
        const wrapper = mount(TaskDetails, { props: { task } })
        expect(wrapper.text()).toContain('To Do')  
    })

    it('displays In Progress status', () => {
        task.status = TaskStatus.InProgress
        const wrapper = mount(TaskDetails, { props: { task } })
        expect(wrapper.text()).toContain('In Progress')  
    })
    
    it('displays Done status', () => {
        task.status = TaskStatus.Done
        const wrapper = mount(TaskDetails, { props: { task } })
        expect(wrapper.text()).toContain('Done')  
    })

})