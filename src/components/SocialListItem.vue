<template>
  <li class="social-list__item">
      <a :href="link" class="social-list__link" target="_blanc">
        <img :src="image" :alt="text" class="social-list__image">
      </a>
    </li>
</template>

<script>
export default {
  name: 'SocialListItem',
  props: ['link', 'image', 'text']
}
</script>

<style>
.social-list__item {
  width: 30px;
  height: 30px;
}

.social-list__link {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.social-list__image {
  width: 100%;
  height: 100%;
}
</style>
