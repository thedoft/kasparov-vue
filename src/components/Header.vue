<template>
  <header class="header">
    <h1 class="header__title">
      <router-link to="/" class="header__link">Вадим Каспаров</router-link>
    </h1>
    <HeaderMenu />
    <Logo />
  </header>
</template>

<script>
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

export default {
  name: 'Header',
  components: {
    Logo,
    HeaderMenu
  }
}
</script>

<style>
.header {
  padding: 20px;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__title {
  margin: 0 20px 0 0;
  font-size: 24px;
  line-height: 1.2;
}

.header__link {
  color: #fff;
  text-decoration: none;
}
</style>
