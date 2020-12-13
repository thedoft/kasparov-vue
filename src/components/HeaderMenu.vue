<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__list-item">
        <RouterLink to="/about" class="menu__link">Это кто такой?</RouterLink>
      </li>
      <li class="menu__list-item">
        <RouterLink to="/services" class="menu__link">Услуги</RouterLink>
      </li>
      <li class="menu__list-item">
        <RouterLink to="/webinars" class="menu__link">Вебинары</RouterLink>
      </li>
      <li class="menu__list-item">
        <RouterLink to="/articles" class="menu__link">Статьи</RouterLink>
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
  min-width: 500px;
  max-width: 700px;
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
  font-weight: 400;
  text-decoration: none;
}
</style>
