<script>
export default {
  name: 'PreviewBlock',

  data: () => ({
    text: 'Preview Block',
    class: 'previev-block',
    type: 'h3'
  }),

  render (createElement) {
    return createElement(this.type, `, render ${this.text} data`)
  }
}
</script>
