<script>
export default {
  name: 'noop',

  functional: true,

  props: {
    notice: { type: String, default: '开发中，敬请期待' }
  },

  render (h, { props: { notice } }) {
    return h('div', {
      class: { 'developing': true }
    }, notice)
  }
}
</script>

<style lang="less">
.developing {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
}
</style>
