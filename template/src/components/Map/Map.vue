<template>
  <section class="map-container">
    <div class="map" ref="map"></div>

    <el-map-zoom
      @zoom-change="changeMapZoom"
      :zoom="zoom">
    </el-map-zoom>

    <slot></slot>
  </section>
</template>

<script>
import MapZoom from './MapZoom'

export default {
  name: 'v-map',

  data () {
    return {
      zoom: 9
    }
  },

  components: {
    ElMapZoom: MapZoom
  },

  methods: {
    reactiveMapZoomChange () {
      const $amap = this.$amap
      const handler = () => { this.zoom = $amap.getZoom() }
      $amap.on('moveend', handler)
      $amap.on('zoomend', handler)
    },

    changeMapZoom (zoom) {
      this.zoom = zoom
      this.$amap.setZoom(zoom)
    },

    setGeolocation () {
      const geolocation = new AMap.Geolocation({
        timeout: 10000,
        zoomToAccuracy: true,
        buttonPosition: 'RB'
      })
      this.$amap.addControl(geolocation)
    }
  },

  mounted () {
    this.$amap = new AMap.Map(this.$refs.map)
    this.reactiveMapZoomChange()
    this.setGeolocation()
    this.$children.forEach(children => children.$emit('MAP_READY', this.$amap))
  }
}
</script>

<style lang="less">
.map-container {
  position: relative;
  height: 100%;
  min-height: 400px;

  .map {
    height: 100%;

    .amap-geolocation-con {
      right: 20px !important;
      bottom: 105px !important;

      .amap-geo {
        width: 30px;
        height: 30px;
        border: none;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
