<template>
  <Section title="Вебинары">
    <SectionList :items="webinarsList"
      @open-popup="openPopup"
    />
  </Section>
</template>

<script>
import Section from './Section';
import SectionList from './SectionList';
import { webinarsList } from '../data/data';

export default {
  name: 'WebinarsPage',
  components: {
    Section,
    SectionList
  },
  data() {
    return {
      webinarsList
    }
  },
  methods: {
    openPopup(item) {
      this.$emit('open-popup', item);
    }
  }
}
</script>

<style>

</style>
