<template>
  <a :href="link" class="social-icon" target="_blanc">
    <img :src="image" :alt="text" class="social-icon__image">
  </a>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: ['link', 'image', 'text']
}
</script>

<style>
.social-icon {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.social-icon__image {
  width: 100%;
  height: 100%;
}
</style>
