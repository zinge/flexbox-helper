<template>
  <div class="delete-wrapper" :class="{'is-active': showDelete}">
    <button class="action__button" @click="handleDelete">yes</button>
    <button class="action__button" @click="handleCancel">cancel</button>
  </div>
</template>

<script>
export default {
  name: "DeleteHelper",

  props: {
    showDelete: {
      type: Boolean,
      default: false
    },

    path: {
      type: Array,
      required: true
    }
  },

  methods: {
    handleDelete() {
      this.$store.commit('delItem', this.path)
      this.$emit('itemDeleted')
    },

    handleCancel() {
      this.$emit('setShowDelete')
    }
  }
};
</script>

<style>
.delete-wrapper {
  position: absolute;
  background-color: rgba(255, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.7;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.delete-wrapper.is-active {
  visibility: visible;
}

.delete-wrapper > .action__button + .action__button {
  margin-left: 1em;
}

</style>
