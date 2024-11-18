<template>
  <div class="swiper-container v-slider">
    <swiper
      loop
      :pagination="{
        clickable: true,
        renderBullet: paginationItemRender,
      }"
      :slides-per-view="3"
      :space-between="24"
    >
      <slot>
      </slot>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';

const paginationItemRender = (index: number, className: string) => {
  const _className = `${className} swiper-pagination-bullet-custom`
  return `<span class="${_className}"></span>`
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.v-slider {
  width: 100%;
}

.v-slider .swiper {
  padding-bottom: 75px;

  .swiper-pagination {
    height: 27px;
    bottom: 0;
  }

  .swiper-pagination-bullet-custom {
    width: 48px;
    height: 3px;
    background: none;
    border-radius: 0;
    background-color: $light-1;

    &:hover {
      background-color: $main;
    }

    &.swiper-pagination-bullet-active {
      background-color: $secondary;
    }
  }
}

</style>