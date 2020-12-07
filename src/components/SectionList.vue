<template>
  <ul class="section-list">
    <Card
      v-for="item in items"
      :key="item.id"
      :image="item.image"
      :title="item.title"
    />
  </ul>
</template>

<script>
import Card from './Card';

export default {
  name: 'SectionList',
  components: {
    Card
  },
  props: ['items']
}
</script>

<style>
.section-list {
  width: 100%;
  max-width: 1280px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 30px;
  justify-content: center;
}
</style>
