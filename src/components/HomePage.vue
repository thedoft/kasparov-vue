<template>
  <section class="home-page">
    <div class="home-page__overlay"></div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.home-page {
  background: url('../assets/vadim-kasparov.jpg') no-repeat center / contain;
  position: relative;
  min-height: calc(100vh - 190px);
}

.home-page__overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(transparent, 70%, #000);
}
</style>
