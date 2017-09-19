<template></template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'

export default {
  name: 'polygon',

  props: {
    polygon: { type: Object, default () { return {} } },
    options: { type: Object, default () { return {} } },
    vid: Number,
    event: Function,
    editable: Boolean
  },

  watch: {
    editable: 'setEditorAvailable',
    polygon: {
      deep: true,
      handler ({ path }) {
        // TODO
        if (!path && this.$amap) return this.$destory()
        if (path && !this.$amap) return this.$render()
        if (path && this.$amap) return this.$amap.setPath(cloneDeep(path))
      }
    }
  },

  created () {
    if (this.$parent.$amap) {
      this.$instance = this.$parent.$amap
      this.$render()
    } else {
      this.$on('MAP_READY', map => {
        this.$instance = map
        this.$render()
      })
    }
  },

  beforeDestroy () {
    this.$destory()
  },

  methods: {
    setEditorAvailable () {
      if (!this.$amap) return
      const editor = this.$amap.editor
      editor[this.editable ? 'open' : 'close']()
    },

    $render () {
      if (!this.polygon || !this.polygon.path) return

      const map = this.$instance
      const options = Object.assign({
        map,
        path: [],
        strokeWeight: 2,
        strokeColor: '#20a0ff',
        strokeStyle: 'dashed',
        strokeDasharray: [10, 10],
        fillColor: 'rgba(32, 160, 255, 0.3)'
      }, cloneDeep(this.options), cloneDeep(this.polygon))

      const polygon = this.$amap = new AMap.Polygon(options)
      const editor = this.$amap.editor = new AMap.PolyEditor(map, this.$amap)

      ;['addnode', 'adjust', 'removenode', 'end', 'move'].forEach(method => {
        editor.on(method, ({ target }) => {
          const path = target.getPath().map(({ lng, lat }) => [lng, lat])
          if (isEqual(path[0], path[path.length - 1])) path.pop()
          this.polygon.path = path
        })
      })

      if (this.event) polygon.on('click', e => { this.event({ e, polygon, component: this }) })
      if (this.polygon) map.setFitView()
      this.setEditorAvailable()
    },

    $destory () {
      if (!this.$amap) return
      this.$parent.$amap.remove(this.$amap)
      this.$amap.editor.close()
      delete this.$amap.editor
      delete this.$amap
    }
  }
}
</script>
