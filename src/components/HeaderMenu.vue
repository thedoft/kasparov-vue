<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__list-item">
        <router-link to="/about" class="menu__link">Это кто ваще такой?</router-link>
      </li>
      <li class="menu__list-item">
        <router-link to="/services" class="menu__link">Услуги</router-link>
      </li>
      <li class="menu__list-item">
        <router-link to="/webinars" class="menu__link">Вебинары</router-link>
      </li>
      <li class="menu__list-item">
        <router-link to="/articles" class="menu__link">Статьи</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style>
.menu__list {
  width: 600px;
  list-style: none;
  margin: 0 40px 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.menu__link {
  color: #fff;
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
}
</style>
