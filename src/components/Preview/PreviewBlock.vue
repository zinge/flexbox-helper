<script>

export default {
  name: 'PreviewBlock',

  props: {
    container: {
      type: Object,
      required: true
    }
  },

  methods: {
    renderName (name) {
      return !name ? null : this.$createElement('span', name)
    },

    renderChilds (childs) {
      return !childs
        ? null
        : childs.map(item =>
          this.$createElement(
            item.type,
            {
              style: item.styles,
              class: item.classes
            },
            [this.renderName(item.name), this.renderChilds(item.childs)]
          )
        )
    }
  },

  render (createElement) {
    const { type, classes, styles, childs } = this.container

    return createElement(
      type,
      {
        style: styles,
        class: classes
      },
      [this.renderChilds(childs)]
    )
  }
}
</script>
