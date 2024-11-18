<template>
  <div class="accordeon">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordeon-item"
    >
      <div class="accordeon-item__content">
        <div class="accordeon-item__heading">
          {{ item.title.toUpperCase() }}
        </div>
        <div :class="getDescriptionClassList(index)">
          <p class="accordeon-item__description-text">
            {{ item.description }}
          </p>      
        </div>
      </div>
      <v-button
        type="secondary"
        class="accordeon-item__button"
        @click="handleOpen(index)"
      >
        <plus-icon/>
      </v-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { IAccordeonProps } from '@/types';
import VButton from '@/components/common/VButton.vue';
import PlusIcon from '@/components/common/icons/PlusIcon.vue';

const props = defineProps<IAccordeonProps>();
const { items } = toRefs(props);

const activeItem = ref<number>(0);

const handleOpen = (index: number) => {
  activeItem.value = index;
};

const getDescriptionClassList = (index: number) => {
  return {
    'accordeon-item__description': true,
    'accordeon-item__description--open': index === activeItem.value
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.accordeon-item {
  border-bottom: 2px solid $light-2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
}

.accordeon-item__heading {
  @include overline-l;

  @media only screen and (max-width: 767px) {
    @include overline-m;
  }
}

.accordeon-item__description {
  @include transition(('all'));
  @include body-m;

  max-height: 0;
  overflow: hidden;

  &--open {
    max-height: 500px;
  }

  @media only screen and (max-width: 767px) {
    @include body-s;
  }
}

.accordeon-item__description-text {
  padding-top: 18px;

  @media only screen and (max-width: 767px) {
    padding-top: 12px;
  }
}

.accordeon-item__button {
  border-radius: 100%;
  border: 3px solid $main;
  padding: 9px;

  &:hover {
    opacity: 1;
    color: $background-main;
    background-color: $main;
  }
}
</style>