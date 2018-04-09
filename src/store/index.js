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
      childs: [
        {
          name: 'Example 1',
          type: 'div',
          classes: [
            'main__example1'
          ],
          styles: [
            {'background-color': hexGen()}
          ]
        },
        {
          name: 'Example 2',
          type: 'div',
          classes: [
            'main__example2'
          ],
          styles: [
            {'background-color': hexGen()}
          ]
        }
      ]
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
          styles: [{'background-color': hexGen()}]
        }
      ]
    },

    delItem (state, payload) {
      const itemParent = getChild(state.childs, payload.path.slice(0, -1))
      itemParent.childs = [
        ...itemParent.childs.filter(child => child.name !== payload.path[payload.path.length - 1])
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
