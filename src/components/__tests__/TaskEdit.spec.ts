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

        const statusElem = wrapper.get('[name="status"]')

        it('shows default ToDo status', () => {
            expect(statusElem.element.value).toBe('' + TaskStatus.ToDo)
        })

        it('does not allow status change', () => {
            expect(statusElem.element.disabled).toBeTruthy()
        })

        it('emits "save" event', async () => {
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted()).toHaveProperty('save')
        })
    })

    describe('when task provided:', () => {
        it.todo('shows task data right')
        it.todo('shows task status right')
        it.todo('status available to change')
    })
})