<template>
  <Section title="Статьи">
    <p class="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui quo itaque illo vitae ut similique totam, placeat amet doloribus, ipsam laboriosam atque ea. Laudantium asperiores saepe deleniti sunt ducimus!</p>
    <ul class="button-list">
      <li class="button-list__item"
        v-for="articles in articlesList"
        :key="articles.id"
      >
        <ArticlesChoiceButton
          :title="articles.title"
          :path="articles.path"
        />
      </li>
    </ul>
  </Section>
</template>

<script>
import Section from './Section';
import ArticlesChoiceButton from './ArticlesChoiceButton';

export default {
  name: 'ArticlesChoiceButtonSection',
  components: {
    Section,
    ArticlesChoiceButton
  },
  props: ['articlesList']
}
</script>

<style>
.button-list {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 60%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
}

.button-list__item {
  width: 25%;
  min-height: 150px;
}
</style>
