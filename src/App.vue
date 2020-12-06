<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
  import Header from './components/Header';
  import Main from './components/Main';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style>
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(./fonts/Inter-Regular.woff2) format("woff2"),
      url(./fonts/Inter-Regular.woff) format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 500;
  font-display: swap;
  src: url(./fonts/Inter-Medium.woff2) format("woff2"),
      url(./fonts/Inter-Medium.woff) format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 900;
  font-display: swap;
  src: url(./fonts/Inter-Black.woff2) format("woff2"),
      url(./fonts/Inter-Black.woff) format("woff");
}

#app {
  font-family: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  min-height: 100vh;
}
</style>
