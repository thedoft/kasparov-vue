<template>
  <Section title="Услуги">
    <SectionList :items="servicesList">
      <slot></slot>
    </SectionList>
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
  }
}
</script>

<style>

</style>
