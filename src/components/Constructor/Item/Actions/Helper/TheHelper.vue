<template>
  <div class="actions__helper" :class="classModifier">
    <div class="actions__helper__wrapper">
      <div class="action__add" v-if="helper === 'add'">
        create child, name:
        <input class="helper__input" type="text"
          v-model="childName"
          ref="childName" size="10">
          class: <input class="helper__input" type="text"
            v-model="childClass"
            ref="childClass" size="10">
          type: <input class="helper__input" type="text"
            v-model="childType"
            ref="childType" size="10">
      </div>
      <div class="action__del" v-if="helper === 'del'">
        are you sure? force delete all childs?
      </div>
      <div class="action__edit" v-if="helper === 'edit'">
        new name: <input class="helper__input" type="text"
          v-model="newName"
          ref="newName" size="10">
      </div>
    </div>
    <div class="actions__helper__buttons">
      <div class="helper__yes" @click="helperYes">yes</div>
      <div class="helper__cancel" @click="helperNo">cancel</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActionsHelper',

  props: {
    helper: {
      type: String,
      required: true
    }
  },

  data: () => ({
    childName: undefined,
    childClass: undefined,
    childType: 'div',
    newName: undefined
  }),

  methods: {
    helperNo () {
      this.$emit('helperSelected', { type: 'cancel' })
    },
    helperYes () {
      switch (this.helper) {
        case 'del':
          this.$emit('helperSelected', { type: 'yes', action: 'del' })
          break

        case 'edit':
          if (!this.focusInput('newName')) {
            this.$emit('helperSelected',
              { type: 'yes', action: 'edit', name: this.newName }
            )
          }
          break

        default:
          if (!this.focusInput('childName') && !this.focusInput('childClass')) {
            this.$emit('helperSelected', {
              type: 'yes',
              action: 'add',
              childName: this.childName,
              childClass: this.childClass,
              childType: this.childType
            })
          }
          break
      }
    },
    focusInput (name) {
      if (!this[name]) {
        const target = this.$refs[name]
        target.focus()
        target.style.backgroundColor = 'deeppink'
        target.placeholder = 'required'
        return true
      }

      return false
    }
  },

  computed: {
    classModifier () {
      return `action__helper--${this.helper}`
    }
  }
}
</script>
<style>
  .actions__helper {
    border: 1px solid;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .action__helper--add {
    background: lightseagreen;
  }

  .action__helper--edit {
    background: steelblue;
  }

  .action__helper--del {
    background: crimson;
  }

  .actions__helper__buttons {
    display: flex;
    flex-basis: 10%;
  }

  .actions__helper__wrapper {
    display: flex;
    flex-basis: 85%;
  }

  .helper__yes, .helper__cancel {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
  }

  .helper__yes:hover, .helper__cancel:hover {
    background: lightgray;
  }

  .helper__input {
    border: 0;
  }

</style>
