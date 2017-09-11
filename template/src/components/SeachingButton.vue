<script>
export default {
  name: 'seaching-button',

  functional: true,

  props: {
    loadingText: { type: String, default: '查询中' }
    text: { type: String, default: '查询' },
    loading: Boolean
  },

  render (h, context) {
    return context.props.loading
      ? h('el-button',
          { props: { loading: true, type: 'primary' } }, context.props.loadingText)
      : h('el-button',
          { props: { type: 'primary', 'native-type': 'submit' } }, context.props.text)
  }
}
</script>
