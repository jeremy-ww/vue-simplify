<script>
export default {
  name: 'noop',

  functional: true,

  render (createElement, context) {
    return createElement('div', {
      class: { 'developing': true }
    }, '开发中，敬请期待')
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
