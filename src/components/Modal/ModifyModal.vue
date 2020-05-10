<template>
  <div class="modify__modal">
    <ModalTemplate>
      <h3 slot="header">Modify item params</h3>
      <form
        slot="body"
        class="modify__form"
        id="modify-form"
        @submit="onSubmitHandler"
        @reset="onResetHandler"
      >
        <p class="form__item">
          <label for="item-name">Name:&nbsp;</label>
          <input type="text" id="item-name" ref="itemName" v-model="itemName" />
        </p>
      </form>
      <template slot="footer">
        <button type="reset" form="modify-form">Cancel</button>
        <button type="submit" form="modify-form">Save</button>
      </template>
    </ModalTemplate>
  </div>
</template>

<script>
import ModalTemplate from "./ModalTemplate";
import { ERROR_COLOR } from "@/constants";
import { getChild } from "@/store/utils";

export default {
  name: "ModifyModal",

  components: {
    ModalTemplate
  },

  data() {
    return {
      itemName: this.getCurentName()
    };
  },

  methods: {
    onSubmitHandler(e) {
      e.preventDefault();

      if (this.validateRequired()) {
        this.$store.commit("changeName", this.itemName);

        this.$emit("closeModal");
      }
    },

    onResetHandler(e) {
      e.preventDefault();

      this.$emit("closeModal");
    },

    validateRequired() {
      const fields = ["itemName"];

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

    getCurentName() {
      const currentItem = getChild(
        this.$store.state.childs,
        this.$store.state.modalPath
      );

      return currentItem.name;
    }
  }
};
</script>

<style>
.modify__form {
  display: flex;
  flex-direction: column;
}

.modify__form .form__item {
  margin: 0;
}

.modify__form > .form__item + .form__item {
  margin-top: 0.5em;
}

.modify__form .form__item > label {
  display: inline-block;
  width: 100px;
}

.modify__form .form__item > input {
  display: inline-block;
  width: calc(100% - 100px);
  box-sizing: border-box;
}
</style>
