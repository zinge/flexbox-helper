import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    container: {
      name: 'Main',
      type: 'div',
      classes: [
        'main'
      ],
      styles: [
        {display: 'flex'}
      ],
      childs: [
        {name: 'Example 1', type: 'div'},
        {name: 'Example 2', type: 'div'}
      ]
    }
  }
})
