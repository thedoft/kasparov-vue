<template>
  <section class="section">
    <h2 class="section__title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: ['title']
}
</script>

<style>
.section {
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section__title {
  margin: 0 0 50px 0;
  font-size: 35px;
  line-height: 1.2;
  max-width: 800px;
}
</style>
