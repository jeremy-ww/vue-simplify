<template>
  <div id="app" class="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
.app {
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    padding-top: 20px;
    flex: 1;
  }
}
</style>
