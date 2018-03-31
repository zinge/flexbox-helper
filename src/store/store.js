import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    container: {
      type: 'div',
      name: 'main',
      styles: [
        {display: 'flex'}
      ],
      childs: []
    }
  }
})
