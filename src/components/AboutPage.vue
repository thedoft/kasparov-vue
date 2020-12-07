<template>
  <Section title="Что это за лысая голова и что интересного она может мне рассказать?">
    <div class="two-columns">
      <div class="two-columns__description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!</p>
      </div>
      <img src="../assets/vadim-2.jpg" alt="#" class="two-columns__image">
    </div>
  </Section>
</template>

<script>
import Section from './Section';

export default {
  name: 'AboutPage',
  components: {
    Section
  }
}
</script>

<style>
.two-columns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  padding: 0 140px;
  height: calc(100% - 130px);
  box-sizing: border-box;
}

.two-columns__description {
  min-width: 400px;
  max-width: 700px;
  margin: 0 100px 0 0;
}

.two-columns__image {
  height: 100%;
  object-fit: contain;
  object-position: center;
  box-shadow: black 0 0 10px;
}
</style>
