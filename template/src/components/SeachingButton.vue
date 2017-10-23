<template functional>
  <el-button v-if="props.loading"
    type="primary"
    loading>
      {{ props.loadingText }}
  </el-button>
  <el-button native-type="submit"
    type="primary"
    v-else>
      {{ props.text }}
  </el-button>
</template>

<script>
export default {
  name: 'seaching-button',

  props: {
    loadingText: { type: String, default: '查询中' }
    text: { type: String, default: '查询' },
    loading: Boolean
  }
}
</script>
