<template>
  <li class="card">
    <img :src="require(`@/assets/${item.image}`)" :alt="item.title" class="card__image">
    <div class="card__title-container">
      <h3 class="card__title">{{ item.title }}</h3>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: ['item']
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

.card__title-container {
  box-sizing: border-box;
  padding: 0 12px;
  width: 100%;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__title {
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
}
</style>
