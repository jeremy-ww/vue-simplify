<script>
export default {
  name: 'noop',

  functional: true,

  render (createElement, context) {
    return createElement('div', '')
  }
}
</script>
