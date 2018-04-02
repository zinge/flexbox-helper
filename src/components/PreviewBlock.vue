<script>
import { hexGen } from '@/utils'

export default {
  name: 'PreviewBlock',

  props: {
    structure: {
      type: Object,
      required: true
    }
  },

  methods: {
    mixStyleColor: styles =>
      styles
        ? [...styles, { 'background-color': hexGen() }]
        : { 'background-color': hexGen() },

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
              style: this.mixStyleColor(child.styles),
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
        style: this.mixStyleColor(styles),
        class: classes
      },
      [this.renderChilds(childs)]
    )
  }
}
</script>
