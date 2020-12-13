<template>
  <RouterView :articlesList="articlesList" />
</template>

<script>
import { articlesList } from '../data/data';

export default {
  name: 'ArticlesPage',
  data() {
    return {
      articlesList
    }
  }
}
</script>

<style>

</style>
