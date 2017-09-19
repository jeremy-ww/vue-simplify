<template>
  <div class="map-zoom-controls">
    <div v-for="{ title, icon, step, disabeld } in MAP_ZOOM_BTN_GROUPS"
      :class="{ disabled: zoom === disabeld }"
      @click="changeMapZoom(step)"
      :title="title"
      :key="title">
        <i :class="icon"></i>
    </div>
  </div>
</template>

<script>
import { inRange } from '@/common/utils'

const MAP_ZOOM_BTN_GROUPS = [
  { title: '放大地图', icon: 'el-icon-plus', disabeld: 18, step: 1 },
  { title: '缩小地图', icon: 'el-icon-minus', disabeld: 3, step: -1 }
]

export default {
  name: 'map-zoom',

  props: {
    zoom: {
      type: Number,
      default: 9
    }
  },

  data () {
    /**
     * 高德地图在不同设备上的 zoom 限制
     * - PC     - [3-18]
     * - mobile - [3-19]
     */
    this.limit = [3, 18]
    this.MAP_ZOOM_BTN_GROUPS = MAP_ZOOM_BTN_GROUPS
    return {}
  },

  methods: {
    changeMapZoom (step) {
      const zoom = this.zoom + step
      if (!inRange(zoom, ...this.limit)) return
      this.$emit('zoom-change', zoom)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/extends.less';

.map-zoom-controls {
  .map-slot;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29px;
  height: 73px;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    color: #686868;

    &:first-of-type {
      border-bottom: 1px solid #f5f5f5;
    }

    &.disabled {
      color: #ccc;
    }
  }
}
</style>
