<template>
  <header class="container header">
    <logo-icon class="header__logo"/>
    <navigation-list v-if="isDesktop" class="header__navigation" />    
    <burger-menu v-else class="header__menu" />
  </header>
</template>

<script lang="ts" setup>
import LogoIcon from '@/components/common/icons/LogoIcon.vue';
import NavigationList from '@/components/common/header/NavigationList.vue';
import BurgerMenu from '@/components/common/header/BurgerMenu.vue';
import { useWindowWidth } from '@/composables/windowWidth';

const { isDesktop } = useWindowWidth();
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.header__navigation {
  display: flex;
  align-items: center;
  gap: 36px;
}

.header__menu {
  display: flex;
  color: $main;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $main;
  background-color: $background-main;
  padding: 22px 0;

  @media only screen and (max-width: 767px) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
}

.header__logo {
  @media only screen and (max-width: 767px) {
    width: 94px;
  }
}
</style>