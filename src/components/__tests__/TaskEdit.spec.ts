import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TaskEdit from '@components/TaskEdit.vue'
import { TaskStatus } from '@common/interfaces'

describe('TaskEdit', () => {
    describe('when no task provided:', () => {
        const wrapper = mount(TaskEdit, {
            attachTo: document.body
        })

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

        it('shows warning if title is empty', async () => {
            await wrapper.find('button').trigger('click')
            expect(wrapper.find('.warning').isVisible()).toBe(true)
        })

        it('emits "save" event, shows no warnings', async () => {
            await wrapper.find('[name="title"]').setValue('test')
            await wrapper.find('button').trigger('click')

            expect(wrapper.find('.warning').isVisible()).toBe(false)
            expect(wrapper.emitted()).toHaveProperty('save')
        })
    })

    describe('when task provided:', () => {
        const task = {
            "id": 42,
            "title": "Title 1",
            "status": 1,
            "description": "Lorem ipsum"
        }

        const wrapper = mount(TaskEdit, {
            props: { task }
        })

        it('shows task title/description right', async () => {
            const titleInput = wrapper.get('[name="title"]')
            expect(titleInput.element.value).toBe(task.title)

            const descInput = wrapper.get('[name="description"]')
            expect(descInput.element.value).toBe(task.description)
        })

        it.todo('shows task status right')
        it.todo('status available to change')
    })
})
