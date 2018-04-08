<template>
  <div class="constructor__item__actions">
    <ActionHelper v-if="showHelper" @helperSelected="execHelper" :helper="helper"/>
    <div class="actions__wrapper" v-if="!showHelper">
      <ActionButton action="add" title="add child" @actionSelected="execAction"/>
      <ActionButton action="edit" title="change name" @actionSelected="execAction"/>
      <ActionButton action="del" title="del this" @actionSelected="execAction"/>
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
      if (payload.type !== 'cancel') {
        console.log('helperBack :', payload)
      }

      this.showHelper = false
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
