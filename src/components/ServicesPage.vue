<template>
  <Section title="Услуги">
    <SectionList :items="servicesList"
      @open-popup="openPopup"
    />
  </Section>
</template>

<script>
import Section from './Section';
import SectionList from './SectionList';
import { servicesList } from '../data/data';

export default {
  name: 'ServicesPage',
  components: {
    Section,
    SectionList
  },
  data() {
    return {
      servicesList
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
