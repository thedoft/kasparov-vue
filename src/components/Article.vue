<template>
  <li class="article">
    <a :href="link" class="article__link">{{ name }}</a>
  </li>
</template>

<script>
export default {
  name: 'Article',
  props: ['name', 'link']
}
</script>

<style>
.article {
  text-align: left;
  margin: 0 0 16px;
  padding: 0 0 0 20px;
  background: url('../assets/logo.png') no-repeat left center / 12%;
}

.article__link {
  color: #000;
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  border-bottom: transparent 1px solid;
  text-shadow: transparent 0 0 1px;
  transition: border-bottom .25s ease-in-out, text-shadow .25s ease-in-out;
}

.article__link:hover {
  text-decoration: none;
  border-bottom: black 1px solid;
  text-shadow: black 0 0 1px;
  transition: border-bottom .25s ease-in-out, text-shadow .25s ease-in-out;
}
</style>
