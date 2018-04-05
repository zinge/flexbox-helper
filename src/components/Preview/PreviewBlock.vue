<script>

export default {
  name: 'PreviewBlock',

  props: {
    structure: {
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
        : childs.map(child =>
          this.$createElement(
            child.type,
            {
              style: child.styles,
              class: child.classes
            },
            [this.renderName(child.name), this.renderChilds(child.childs)]
          )
        )
    }
  },

  render (createElement) {
    const { type, classes, styles, childs } = this.structure

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
