import { Wrapper, mount } from "@vue/test-utils"
import Simulator from './Simulator.vue'

describe('Simulator', () => {

    let simulator : Wrapper<Vue>

    beforeEach(() => {
        simulator = mount(Simulator)
    })

    it('Deve ter o campo nome', () => {
        expect(simulator.get('#name')).toBeTruthy()
    })

    it('Deve ter um campo mensalidade', () => {
        expect(simulator.get('#contribution')).toBeTruthy()
    })

    it('Deve ter um campo tempo', () => {
        expect(simulator.get('#years')).toBeTruthy()
    })

    it('Deve ter um botão', () => {
        expect(simulator.get('button')).toBeTruthy()
    })
})