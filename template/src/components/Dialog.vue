<template>
  <el-dialog @update:visible="changeAndEmitVisible"
    :visible="visible"
    class="v-dialog"
    :title="title">
      <!-- enforce to trigger dialog slot lifecycle hooks -->
      <slot v-if="visible"></slot>
      <span v-if="footer" slot="footer">
        <el-button @click="changeAndEmitVisible(false)">取 消</el-button>
        <el-button @click="confirmDialog" type="primary">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script>
import noop from 'lodash/noop'

export default {
  name: 'dialog',

  props: {
    title: String,
    visible: Boolean,
    beforeConfirm: { type: Function, default: noop },
    footer: { type: Boolean, default: true }
  },

  methods: {
    changeAndEmitVisible (visible) {
      this.$emit('update:visible', visible)
    },

    confirmDialog () {
      this.beforeConfirm(this.changeAndEmitVisible)
    }
  }
}
</script>

<style>
.v-dialog .el-dialog {
  width: 60%;
}
</style>
