<template>
  <section class="section">
    <h2 class="section__title">V K</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'section-component'
}
</script>

<style>
.section {
  height: 100%;
  background-color: #fff;
}

.section__title {
  margin: 0;
}
</style>
