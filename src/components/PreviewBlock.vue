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
    mixStyleColor: styles => (
      styles ? [...styles, {'background-color': hexGen()}] : {'background-color': hexGen()}
    )
  },

  render (createElement) {
    const { type, name, classes, styles, childs } = this.structure

    const renderChilds = childs => (
      !childs ? null : childs.map(child => createElement(
        child.type,
        {
          style: this.mixStyleColor(child.styles),
          class: child.classes
        },
        [
          renderName(child.name),
          renderChilds(child.childs)
        ]
      ))
    )

    const renderName = name => (
      !name ? null : createElement('span', name)
    )

    return createElement(type,
      {
        style: this.mixStyleColor(styles),
        class: classes
      },
      [
        renderName(name),
        renderChilds(childs)
      ]
    )
  }
}
</script>
