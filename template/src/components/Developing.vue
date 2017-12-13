<template functional>
  <div class="developing">{{ props.notice }}</div>
</template>

<script>
export default {
  name: 'noop',

  props: {
    notice: { type: String, default: '开发中，敬请期待' }
  }
}
</script>

<style>
.developing {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
}
</style>
