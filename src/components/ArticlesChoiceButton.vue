<template>
  <button class="choice-button" @click="$router.push($route.path + '/' + path)">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'ArticlesChoiceButton',
  props: ['title', 'path']
}
</script>

<style>
.choice-button {
  width: 100%;
  min-height: 100%;
}
</style>
