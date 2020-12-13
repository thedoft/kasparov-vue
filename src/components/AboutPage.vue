<template>
  <Section title="Что это за лысая голова и что интересного она может мне рассказать?">
    <div class="two-columns">
      <div class="two-columns__description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore cupiditate magni molestias eius. Minus neque sunt, iusto nemo ratione, iure blanditiis ipsa itaque consectetur veniam sequi. Dolores, unde eos!</p>
      </div>
      <div class="two-columns__image"></div>
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
  padding: 0 100px;
  min-height: calc(100vh - 384px);
  box-sizing: border-box;
}

.two-columns__description {
  width: 60%;
}

.two-columns__image {
  width: 30%;
  box-shadow: black 0 0 10px;
  background: url(../assets/vadim-2.jpg) no-repeat center top / cover;
}
</style>
