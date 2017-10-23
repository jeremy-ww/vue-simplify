<script>
export default {
  name: 'tool-tips',

  functional: true,

  props: {
    content: { type: Array, default () { return [] } },
    spacing: { type: Boolean, default: true }
  },

  render (h, { props: { spacing, content } }) {
    return h('section',
      { class: { 'tool-tips-spacing': spacing, 'tool-tips': true } }, content.map(v => h('p', v)))
  }
}
</script>

<style lang="scss">
.tool-tips {
  max-width: 300px;

  &.tool-tips-spacing p:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
