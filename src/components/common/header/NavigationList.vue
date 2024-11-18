<template>
  <div class="navigation">
    <v-link
      v-for="(item, index) in links"
      :key="index"
      v-bind="item"
      class="navigation__item"
      :class="{'navigation__item--phone': item.isPhone}"
    />
  </div>
</template>

<script lang="ts" setup>
import VLink from '@/components/common/VLink.vue';

const links = [
  {
    link: 'https://cheviplus.ru/o_kompanii/partnery/',
    text: 'Наши проекты',
  },
  {
    link: 'https://cheviplus.ru/o_kompanii/',
    text: 'О компании',
  },
  {
    link: 'https://cheviplus.ru/contacts/',
    text: 'Контакты',
  },
  {
    link: '+78128002030',
    isPhone: true,
  },
];
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.navigation__item {  
  @include subtitle-l;
}

.navigation__item--phone {
  @include title-m;

  font-weight: 600;
}
</style>