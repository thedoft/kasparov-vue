<template>
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__list-item"
        v-for="item in items"
        :key="item.id"
      >
        <SocialIcon
          :link="item.link"
          :image="item.image"
          :text="item.text"
        />
      </li>
    </ul>
    <p class="footer__text">Когда взойдет солнце, будь готов переставить будильник (c)</p>
    <p class="footer__text">thedoft &copy; {{new Date().getFullYear()}}</p>
  </footer>
</template>

<script>
import { socialList } from '../data/data';
import SocialIcon from './SocialIcon';

export default {
  name: 'Footer',
  components: {
    SocialIcon
  },
  data() {
    return {
      items: socialList
    }
  }
}
</script>

<style>
.footer {
  padding: 20px 40px;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 162px;
}

.footer__list-item {
  width: 30px;
  height: 30px;
}

.footer__text {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  text-align: left;
}
</style>
