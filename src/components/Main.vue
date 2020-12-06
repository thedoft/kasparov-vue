<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style>
.main {
  height: calc(100vh - 190px);
  width: 100%;
  box-sizing: border-box;
}
</style>
