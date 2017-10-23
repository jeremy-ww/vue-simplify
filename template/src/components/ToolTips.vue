<template functional>
  <section :class="{ 'tool-tips-spacing': props.spacing }" class="tool-tips">
    <p v-for="(item, key) in props.content" :key="key">{{ item }}</p>
  </section>
</template>

<script>
export default {
  name: 'tool-tips',

  props: {
    content: { type: Array, default () { return [] } },
    spacing: { type: Boolean, default: true }
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
