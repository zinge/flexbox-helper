<template>
  <div class="expand__modal">
    <ModalTemplate @close="closeModal">
      <h3 slot="header">Expand modal</h3>
      <form slot="body" id="expand-form" @submit="onSubmitHandler" class="expand__form">
        <p class="form__item">
          <label for="name">Name:&nbsp;</label>
          <input type="text" v-model="name" placeholder="input child name here" id="name" />
        </p>
        <p class="form__item">
          <label for="classes">Classes:&nbsp;</label>
          <input
            type="text"
            v-model="computedClasses"
            placeholder="input child classes here"
            id="classes"
          />
        </p>
        <p class="form__item">
          <label for="styles">Styles:&nbsp;</label>
          <textarea type="text" v-model="computedStyles" placeholder="input child styles here" id="styles" />
        </p>
      </form>
      <button slot="footer" type="submit" form="expand-form">Ok</button>
    </ModalTemplate>
  </div>
</template>

<script>
import ModalTemplate from "./ModalTemplate";

export default {
  name: "ExpandModal",

  data() {
    return {
      name: "",
      class: [],
      styles: {}
    };
  },

  components: {
    ModalTemplate
  },

  props: {
    closeModal: {
      type: Function,
      required: true
    }
  },

  methods: {
    onSubmitHandler(e) {
      e.preventDefault();

      console.log("data: ", {
        name: this.name,
        class: this.class,
        styles: this.styles
      });
      this.closeModal();
    }
  },

  computed: {
    computedClasses: {
      get() {
        return this.class.join(", ");
      },

      set(value) {
        this.class = value.split(/ ?, ?/).map(i => i.trim());
      }
    },

    computedStyles: {
      get() {
        return JSON.stringify(this.styles)
      },

      set(value) {
        this.styles = JSON.parse(value)
      }
    }
  }
};
</script>

<style>
.expand__form {
  display: flex;
  flex-direction: column;
}

.form__item {
  margin: 0;
}

.form__item > textarea {
  vertical-align: top;
}

.expand__form > .form__item + .form__item {
  margin-top: 0.5em;
}
</style>
