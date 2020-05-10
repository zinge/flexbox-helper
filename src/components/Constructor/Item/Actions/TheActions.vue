<template>
  <div class="constructor__item__actions">
    <ActionHelper v-if="showHelper" @helperSelected="execHelper" :helper="helper"/>
    <div class="actions__wrapper" v-if="!showHelper">
      <ActionButton action="add" title="add child" @actionSelected="execAction"/>
      <ActionButton action="edit" title="change name" @actionSelected="execAction"/>
      <ActionButton v-if="!isMain" action="del" title="del this" @actionSelected="execAction"/>
    </div>
  </div>
</template>
<script>
import ActionButton from './ActionButton.vue'
import ActionHelper from './Helper/TheHelper.vue'

export default {
  name: 'ItemActions',

  components: {
    ActionButton, ActionHelper
  },

  props: {
    path: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    showHelper: false,
    helper: undefined
  }),

  methods: {
    execAction (payload) {
      this.showHelper = true
      this.helper = payload.action
    },

    execHelper (payload) {
      if (payload.type === 'yes') {
        switch (payload.action) {
          case 'del':
            this.$store.commit('delItem', {
              path: this.path
            })
            break

          case 'add':
            this.$store.commit('addChild', {
              path: this.path,
              name: payload.childName,
              class: payload.childClass,
              type: payload.childType
            })
            break

          case 'edit':
            this.$store.commit('changeName', {
              path: this.path,
              name: payload.name
            })
            break

          default:
            break
        }
      }

      this.showHelper = false
    }
  },

  computed: {
    isMain () {
      return this.path.length === 1
    }
  }
}
</script>
<style>
  .constructor__item__actions {
    display: flex;
    flex-direction: column;
  }

  .actions__wrapper {
    display: flex;
  }
</style>
