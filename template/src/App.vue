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

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1;
  }
}
</style>