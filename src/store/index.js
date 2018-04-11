import Vue from 'vue'
import Vuex from 'vuex'
import { hexGen } from '@/utils'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    childs: [{
      name: 'Main',
      type: 'div',
      classes: [
        'main'
      ],
      styles: [
        {display: 'flex'},
        {'background-color': hexGen()}
      ],
      childs: []
    }]
  },

  mutations: {
    changeName (state, payload) {
      const item = getChild(state.childs, payload.path)
      item.name = payload.name
    },

    addChild (state, payload) {
      const item = getChild(state.childs, payload.path)
      item.childs = [
        ...item.childs,
        {
          name: payload.name,
          type: payload.type,
          classes: [payload.class],
          styles: [{'background-color': hexGen()}],
          childs: []
        }
      ]
    },

    delItem (state, payload) {
      const itemParent = getChild(state.childs, payload.path.slice(0, -1))
      itemParent.childs = [
        ...itemParent.childs.filter(child => child.name !== payload.path[payload.path.length - 1])
      ]
    },

    addParam (state, payload) {
      const item = getChild(state.childs, payload.path)
      item[payload.name] = [
        ...item[payload.name],
        payload.newParam
      ]
    }
  }
})

const getChild = (childs, path) => {
  const currentItem = childs.find(child => child.name === path[0])
  if (path.length === 1) {
    return currentItem
  }
  return getChild(currentItem.childs, path.slice(1))
}
