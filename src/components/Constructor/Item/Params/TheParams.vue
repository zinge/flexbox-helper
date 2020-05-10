<template>
  <div class="item__params">
    <div class="item__params__list">
      {{name}}: [
        <span class="item__param" v-for="(item, index) in params" :key="index">
          {{item}}{{params.length !== index + 1 ? ', ' : ''}}
        </span>
        ]
    </div>
    <div class="item__params__add">
      <input v-if="showInput" class="param__add__input" type="text" v-model="newParam" ref="newParam">
      <div v-if="showInput" class="actions__helper__buttons">
        <div class="helper__yes" @click="addParam">yes</div>
        <div class="helper__cancel" @click="toggleInput">cancel</div>
      </div>
    </div>
    <div v-if="!showInput" class="param__add__plus" @click="toggleInput"> + </div>
  </div>
</template>
<script>
export default {
  name: 'ItemParams',

  data: () => ({
    newParam: '',
    showInput: false
  }),

  props: {
    params: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    path: {
      type: Array,
      required: true
    }
  },

  methods: {
    addParam () {
      if (!this.focusInput('newParam')) {
        this.$store.commit('addParam', {
          path: this.path,
          name: this.name,
          newParam: this.newParam
        })
        this.toggleInput()
        this.newParam = ''
      }
    },

    toggleInput () {
      this.showInput = !this.showInput
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
  }
}
</script>

<style>
  .item__params {
    border: 1px solid;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .item__params__list {
    display: flex;
    flex-basis: 70%;
  }

  .item__params__add {
    display: flex;
  }

  .param__add__input {
    border: 0;
  }

  .param__add__plus {
    border: 1px solid;
    margin: 0 5px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background: lightseagreen;
  }

  .actions__helper__buttons {
    display: flex;
    flex-basis: 10%;
    border: 1px solid transparent;
    margin: 0 5px;
    padding: 0 5px;
  }

  .helper__yes, .helper__cancel {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
  }

  .helper__yes:hover, .helper__cancel:hover {
    background: lightgray;
  }
</style>
