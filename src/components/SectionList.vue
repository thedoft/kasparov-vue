<template>
  <ul class="section__list">
    <Card
      @click="$emit('open-popup', item)"
      v-for="(item, id) in items"
      :key="id"
      :item="item"
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
.section__list {
  width: 100%;
  max-width: 1280px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-content: center;
  align-content: center;

}
</style>
