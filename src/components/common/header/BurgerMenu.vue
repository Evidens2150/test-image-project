<template>
  <div class="menu">
    <v-button
      type="secondary"
      class="menu__button"
      @click="handleToggleMenu(true)"
    >
      <menu-icon class="menu__burger-icon"/>
    </v-button>
    <teleport to='body'>
      <div
        class="menu__overlay"
        :class="{'menu__overlay--open': isOpen}"
      >
        <div class="menu__content">
          <div class="menu__content-heading">
            <logo-icon class="menu__logo"/>
            <v-button
              type="secondary"
              class="menu__close-button"
              @click="handleToggleMenu(false)"
            >
              <close-icon/>
            </v-button>
          </div>
          <navigation-list class="menu__navigation" />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VButton from '@/components/common/VButton.vue';
import MenuIcon from '@/components/common/icons/MenuIcon.vue';
import LogoIcon from '@/components/common/icons/LogoIcon.vue';
import CloseIcon from '@/components/common/icons/CloseIcon.vue';
import NavigationList from '@/components/common/header/NavigationList.vue';

const isOpen = ref<boolean>(false);

const handleToggleMenu = (state: boolean) => {
  isOpen.value = state;
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.menu__burger-icon {
  @media only screen and (max-width: 767px) {
    width: 46px;
  }
}

.menu__overlay {
  @include transition(('all'));
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 0;
  background-color: rgba($main, .8);
}

.menu__content {
  @include transition(('all'));
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  max-width: 0;
  background-color: $main;
}

.menu__overlay--open {
  max-width: 100vw;
  height: 100vh;

  .menu__content {
    max-width: 359px;
  }
}

.menu__content-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 16px;
}

.menu__logo {
  width: 94px;
  color: $background-main;
}

.menu__close-button {
  color: $background-main;
}

.menu__navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 31px 16px;
  color: $background-main;

  .navigation__item {
    color: $background-main;
  }

  .navigation__item--phone {
    margin-top: 18px;
  }
}
</style>