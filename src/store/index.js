import Vue from 'vue'
import Vuex from 'vuex'

import { hexGen, getHash, getChild } from './utils'
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
    ],
    modalName: '',
    modalPath: []
  },

  mutations: {
    toggleMenu(state) {
      return state.menuOpened = !state.menuOpened
    },

    setModalName(state, payload) {
      return state.modalName = payload || ""
    },

    setModalPath(state, payload) {
      return state.modalPath = payload || []
    },

    addChild(state, payload) {
      const item = getChild(state.childs, state.modalPath)

      item.childs = [
        ...item.childs,
        {
          name: payload.name,
          type: payload.type,
          classes: [payload.class],
          styles: { [BACKGROUND_COLOR]: hexGen() },
          hash: getHash(),
          childs: [],
        }
      ]
    },

    delItem (state, payload) {
      const itemParent = getChild(state.childs, payload.slice(0, -1))

      itemParent.childs = [
        ...itemParent.childs.filter(child => child.hash !== payload[payload.length - 1])
      ]
    },
  }
})
