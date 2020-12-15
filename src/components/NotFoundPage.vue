<template>
  <Section class="page-not-found" title="Гайз энд нот гайз...">
    <span class="page-not-found__accent">404</span>
    <p class="section__subtitle">Cтраница не найдена, ищите другую</p>
  </Section>
</template>

<script>
import Section from './Section';

export default {
  name: 'NotFoundPage',
  components: {
    Section
  }
}
</script>

<style>
.page-not-found {
  background: white url('../assets/samurai.png') no-repeat bottom / 25%;
}

.page-not-found__accent {
  font-size: 64px;
  line-height: 1.2;
  font-weight: 900;
  text-shadow: black 0 0 5px;
  margin: 0 0 30px 0;
}
</style>
