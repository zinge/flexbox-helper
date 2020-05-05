<template>
  <div class="expand__modal">
    <ModalTemplate>
      <h3 slot="header">New child params</h3>
      <form
        slot="body"
        id="expand-form"
        @submit="onSubmitHandler"
        class="expand__form"
        @reset="onResetHandler"
      >
        <p class="form__item">
          <label for="child-name">Name:&nbsp;</label>
          <input
            type="text"
            v-model="childName"
            placeholder="input child name here"
            id="child-name"
            ref="childName"
            @focus="e => onFocus(e, 'input child name here')"
          />
        </p>
        <p class="form__item">
          <label for="child-class">Class:&nbsp;</label>
          <input
            type="text"
            v-model="childClass"
            placeholder="input child class here"
            id="child-class"
            ref="childClass"
            @focus="e => onFocus(e, 'input child class here')"
          />
        </p>
        <p class="form__item">
          <label for="child-type">Type:&nbsp;</label>
          <input
            type="text"
            v-model="childType"
            placeholder="input child type here"
            id="child-type"
            ref="childType"
            @focus="e => onFocus(e, 'input child type here')"
          />
        </p>
      </form>
      <template slot="footer">
        <button type="reset" form="expand-form">Cancel</button>
        <button type="submit" form="expand-form">Save</button>
      </template>
    </ModalTemplate>
  </div>
</template>

<script>
import ModalTemplate from "./ModalTemplate";
import { ERROR_COLOR } from "@/constants";

export default {
  name: "ExpandModal",

  data() {
    return {
      childName: "",
      childClass: "",
      childType: "div"
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

      if (this.validate()) {
        this.$store.commit("addChild", {
          name: this.childName,
          class: this.childClass,
          type: this.childType
        });

        this.closeModal();
      }
    },

    onResetHandler(e) {
      e.preventDefault();

      this.closeModal();
    },

    validate() {
      const fields = ["childName", "childClass", "childType"];
      const empty = fields.filter(field => !this[field]);

      if (empty.length) {
        empty.forEach(i => {
          const target = this.$refs[i];

          target.style.backgroundColor = ERROR_COLOR;
          target.placeholder = "required";
        });

        return false;
      }

      return true;
    },

    onFocus(e, placeholder) {
      const { target } = e;

      if (target.style.backgroundColor === ERROR_COLOR) {
        target.style.backgroundColor = "";
        target.placeholder = placeholder;
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

.expand__form > .form__item + .form__item {
  margin-top: 0.5em;
}

.form__item > label {
  display: inline-block;
  width: 100px;
}

.form__item > input {
  display: inline-block;
  width: calc(100% - 100px);
  box-sizing: border-box;
}
</style>
