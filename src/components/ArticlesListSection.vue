<template>
  <Section :title="articles.title">
    <BackButton class="section__back-button" />
    <ul class="articles-list">
      <Article
        v-for="article in articles.list"
        :key="article.id"
        :name="article.name"
        :link="article.link"
      />
    </ul>
  </Section>
</template>

<script>
import Section from './Section';
import Article from './Article';
import BackButton from './BackButton';

export default {
  name: 'ArticlesListSection',
  props: ['articlesList'],
  components: {
    Section,
    Article,
    BackButton
  },
  computed: {
    articles() {
      return this.getCurrentArticles(this.articlesList);
    },
    currentPathEnd() {
      let arr = this.$route.path.split('/');
      return arr[arr.length - 1];
    }
  },
  methods: {
    getCurrentArticles(fullList) {
      let currentArticles;
      fullList.forEach(item => {
        if (item.path === this.currentPathEnd) {
          currentArticles = item;
        }
      });
    return currentArticles;
    }
  }
}
</script>

<style>
.articles-list {
  list-style: none;
  margin: 0;
  padding: 0;
  width: fit-content;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
