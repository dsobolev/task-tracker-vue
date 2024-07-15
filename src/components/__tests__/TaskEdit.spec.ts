import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskEdit from '@components/TaskEdit.vue'
import { TaskStatus } from '@common/interfaces'

describe('TaskEdit', () => {
    describe('when no task provided:', () => {
        const wrapper = mount(TaskEdit)

        it('shows labels for all fields', () => {
            expect(wrapper.text()).toContain('Title')
            expect(wrapper.text()).toContain('Status')
            expect(wrapper.text()).toContain('Description')
        })

        it('shows empty fields', () => {
            const titleInput = wrapper.get('[name="title"]')
            expect(titleInput.element.value).toBe('')

            const descInput = wrapper.get('[name="description"]')
            expect(descInput.element.value).toBe('')
        })

        it('shows default ToDo status, not changeable', () => {
            const statusElem = wrapper.get('[name="status"]')
            expect(statusElem.element.value).toBe('' + TaskStatus.ToDo)
            expect(statusElem.element.disabled).toBeTruthy()
        })
    })
})