import Menu from './Menu.vue'
import { shallowMount, Wrapper } from "@vue/test-utils";

describe("Menu", () => {
    let menu: Wrapper<Menu>

    beforeEach(() => {
        menu = shallowMount(Menu)
    })

    it('Deve ter um link para home da Ciclic', () => {
        expect(menu.get('.navbar-brand').attributes('href')).toBe('https://www.ciclic.com.br')
    })

    it('Deve ter o logo da Ciclic', () => {
        expect(menu.get('.navbar-brand img').attributes('src')).toBeTruthy()
    })
})