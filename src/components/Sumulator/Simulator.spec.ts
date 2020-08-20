import { Wrapper, mount } from "@vue/test-utils"
import Simulator from './Simulator.vue'
import Vue from 'vue'

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
    
    it('Deve exibir a mensagem quando tiver o resultado', async done => {
        simulator.vm.$data.result = 2000

        await Vue.nextTick()
        expect(simulator.get('.simulator-message')).toBeTruthy()

        done()
    })

    it('Deve esconder os campos do simulador quando tiver um resultado', async done => {
        simulator.vm.$data.result = 2000

        await Vue.nextTick()

        expect(() => simulator.get('#name')).toThrow()
        expect(() => simulator.get('#contribution')).toThrow()
        expect(() => simulator.get('#years')).toThrow()

        done()
    })
})