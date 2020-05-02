import Vue from 'vue'
import Vuex from 'vuex'

import { hexGen, getHash } from './utils'
import { BACKGROUND_COLOR } from '@/constants'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuOpened: false,
        childs: [
            {
                name: 'Main',
                type: 'div',
                classes: ['root-element'],
                styles: {
                    display: 'flex',
                    [BACKGROUND_COLOR]: hexGen()
                },
                hash: getHash(),
                childs: []
            }
        ]
    },

    mutations: {
        toggleMenu(state) {
            return state.menuOpened = !state.menuOpened
        }
    }
})
