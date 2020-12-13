<template>
  <button @click="goBack" :class="$props.class" class="back-button"></button>
</template>

<script>
export default {
  name: 'BackButton',
  props: ['class'],
  methods: {
    goBack() {
      return (
        window.history.length > 1 ?
        this.$router.go(-1) :
        this.$router.push('/')
      );
    }
  }
}
</script>

<style>
.back-button {
  padding: 0;
  min-height: 42px;
  min-width: 42px;
  background: url('../assets/back-button-circle.png') no-repeat center / contain;
  border-radius: 50%;
  border: none;
  box-shadow: black 0 0 0;
  transition: box-shadow .25s ease-in-out;
}

.back-button:hover {
  box-shadow: black 0 0 10px;
  transition: box-shadow .25s ease-in-out;
}
</style>
