<template>
  <section class="section">
    <div class="section__container">
      <h2 class="section__title">{{ title }}</h2>
      <slot></slot>
    </div>
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section__container {
  min-height: calc(100vh - 190px);
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.section__title {
  margin: 0 0 30px 0;
  font-size: 35px;
  line-height: 1.2;
  font-weight: 900;
  max-width: 800px;
}

.section__subtitle {
  width: 80%;
  margin: 0 0 50px;
}

.section__back-button {
  position: fixed;
  left: 40px;
  top: 50%;
}
</style>
