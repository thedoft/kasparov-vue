<template>
  <div class="popup"
    :class="isPopupOpened ? 'popup_opened' : ''"
    @click.self="closePopup"
  >
    <div class="popup__container">
      <div class="popup__head-container">
        <img :src="item.image || '#'" :alt="item.title || 'Картинка'" class="popup__image">
        <div class="popup__title-container">
          <h2 class="popup__title">{{ item.title || 'Тут должен быть заголовок, но его нет' }}</h2>
          <p class="popup__price">{{ item.price || 'Здесь должна быть цена'}}</p>
        </div>
      </div>
      <p class="popup__info">{{ item.text || 'Описание...' }}</p>
      <button type="reset"
        class="popup__close-button"
        @click="closePopup"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: ['onEscape'],
  data() {
    return {
      item: {},
      isPopupOpened: false
    }
  },
  methods: {
    closePopup() {
      this.isPopupOpened = false;
    }
  },
  mounted() {
    window.addEventListener('keyup', this.onEscape);
  },
  unmounted() {
    window.removeEventListener('keyup', this.onEscape);
  },
}
</script>

<style>
.popup {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  visibility: hidden;
  opacity: 0;
  transition: opacity .75s ease-in-out, visibility .75s ease-in-out;
}

.popup_opened {
  visibility: visible;
  opacity: 1;
  transition: opacity .75s ease-in-out, visibility .75s ease-in-out;
}

.popup__container {
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 760px;
  background-color: white;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 36px;
  position: relative;
}

.popup__head-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 36px 0 0;
}

.popup__image {
  max-width: 240px;
  max-height: 240px;
  box-shadow: 0 0 5px black;
  margin: 0 0 36px 0;
}

.popup__title-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, .25);
  box-sizing: border-box;
}

.popup__title {
  width: 80%;
  margin: 0;
  padding: 0 0 18px;
  border-bottom: 1px solid rgba(0, 0, 0, .25);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
}

.popup__price {
  font-weight: 900;
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  padding: 20px 0;
}

.popup__info {
  padding: 0;
  margin: 0;
}

.popup__close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(../assets/close-button.svg);
  background-position: center;
  transform: rotate(45deg);
  opacity: 1;
  transition: opacity 1s ease;
}

.popup__close-button:hover {
  opacity: .6;
  transition: opacity 1s ease;
  cursor: pointer;
}
</style>
