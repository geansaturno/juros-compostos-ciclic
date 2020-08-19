import { shallowMount, Wrapper } from "@vue/test-utils";
import Button from './Button.vue'

function getDefaultButton(): Wrapper<Vue> {
    return shallowMount(Button, {
        propsData: {
            text: "Enviar"
        }
    })
}

describe('Button', () => {
    it('Deve ter um texto', () => {
        const expectedText = "Enviar"
        const button = shallowMount(Button, {
            propsData: {
                text: expectedText
            }
        })

        expect(button.text()).toBe(expectedText)
    })

    it('Deve ser um button', () => {
        const button = getDefaultButton()
        expect(button.element.tagName).toBe('BUTTON')
    })

    it('Deve emitir um evento de click ao click', () => {
        const button = getDefaultButton()

        button.trigger('click')
        expect(button.emitted('click')).toBeTruthy()
    })
})
