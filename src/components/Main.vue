<template>
  <main class="main">
    <RouterView @open-popup="openPopup" />
  </main>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    openPopup(item) {
      this.$emit('open-popup', item);
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  box-sizing: border-box;
}
</style>
