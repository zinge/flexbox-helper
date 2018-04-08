<template>
  <div class="actions__helper" :class="classModifier">
    <div class="actions__helper__wrapper">
      <div class="action__add" v-if="helper === 'add'">
        create child with name:
        <input class="helper__input" type="text"
          v-model="create.name" placeholder="required"
          ref="child-name">
         and class: <input class="helper__input" type="text"
          v-model="create.class" placeholder="required"
          ref="child-class">
      </div>
      <div class="action__del" v-if="helper === 'del'">
        are you sure? force delete all childs?
      </div>
      <div class="action__edit" v-if="helper === 'edit'">
        new name: <input class="helper__input" type="text"
          v-model="edit.name" placeholder="required"
          ref="edit-name">
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
    create: {
      name: undefined,
      class: undefined
    },

    edit: {
      name: undefined
    }
  }),

  methods: {
    helperNo () {
      this.$emit('helperSelected', {type: 'cancel'})
    },
    helperYes () {
      if (this.helper === 'del') {
        this.$emit('helperSelected', {type: 'yes', action: 'del'})
      } else if (this.helper === 'edit') {
        if (!this.edit.name) {
          this.$refs['edit-name'].focus()
        } else {
          this.$emit('helperSelected',
            {type: 'yes', action: 'edit', name: this.edit.name}
          )
        }
      } else {
        if (!this.create.name) {
          this.$refs['child-name'].focus()
        } else if (!this.create.class) {
          this.$refs['child-class'].focus()
        } else {
          this.$emit('helperSelected',
            {type: 'yes', action: 'add', name: this.create.name, class: this.create.class}
          )
        }
      }
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
