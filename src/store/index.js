import Vue from 'vue'
import Vuex from 'vuex'
import { hexGen } from '@/utils'

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
    }
  }
})
