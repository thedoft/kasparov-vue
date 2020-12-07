<template>
  <li class="card">
    <img :src="image" :alt="title" class="card__image">
    <h2 class="card__title">{{ title }}</h2>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: ['image', 'title']
}
</script>

<style>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: #000 0 0 5px;
  margin: 0;
  padding: 0 0 20px;
  box-sizing: border-box;
}

.card__image {
  width: 100%;
  margin: 0 0 20px;
  border-radius: 10px 10px 0 0;
  box-shadow: #000 0 3px 3px;
}

.card__title {
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
}
</style>
