<template>
  <div class="container custom-section">
    <div class="custom-section__first-block first-block">
      <div class="first-block__content">
        <p class="first-block__title">
          {{ firstBlockTitle }}
        </p>
        <p class="first-block__description">
          {{ firstBlockDescription }}
        </p>
        <v-button
          class="first-block__button"
          @click="handleOpenModal"
        >
          Оставить заявку
        </v-button>
      </div>
      <img
        :src="banner"
        alt="main banner"
        class="custom-section__image"
      />
    </div>
    <div class="custom-section__second-block second-block">
      <p class="second-block__description">
        {{ secondBlockDescription }}
      </p>
      <div class="second-block__counters">
        <AnimatedCounter
          v-for="(counter, index) in counters"
          :key="index"
          v-bind="counter"
          class="second-block__counter"
        />
      </div>
    </div>
    <request-modal v-model="isModalOpen"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AnimatedCounter from '@/components/page-content/AnimatedCounter.vue';
import RequestModal from '@/components/page-content/RequestModal.vue';
import VButton from '@/components/common/VButton.vue';
import { IAnimatedCountProps } from '@/types';

import banner from '@/assets/images/banner.png';

const firstBlockTitle = 'Lorem Ipsum используют один и тот же текст'.toUpperCase();
const firstBlockDescription = 'Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений';
const secondBlockDescription = 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. ';
const counters: IAnimatedCountProps[] =
[
  {
    targetValue: 2012,
    description: 'Lorem Ipsum',
  },
  {
    targetValue: 93,
    description: 'Приемлемые модификации',
  },
  {
    targetValue: 150,
    counterText: '+',
    description: 'Набор моделей предложений',
  },
];

const isModalOpen = ref<boolean>(false);

const handleOpenModal = () => {
  isModalOpen.value = true;
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.custom-section {
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media only screen and (max-width: 1439px) {
    gap: 48px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding-right: 0;
  }
}

.custom-section__image {
  width: 100%;
  height: 248px;
  object-fit: cover;
}

.first-block {
  display: flex;
  gap: 52px;

  @media only screen and (max-width: 1439px) {
    gap: 24px;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
}

.first-block__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.first-block__title {
  @include h1;

  @media only screen and (max-width: 1439px) {
    font-size: 28px;
    line-height: 39.2px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 33.6px;
  }
}

.first-block__description {
  @include body-xl;

  @media only screen and (max-width: 1439px) {
    @include body-m;
  }
}

.first-block__button {
  margin-top: 12px;
  max-width: 297px;

  @media only screen and (max-width: 1439px) {
    max-width: 214px;
  }

  @media only screen and (max-width: 767px) {
    max-width: unset;
  }
}

.second-block {
  display: flex;
  gap: 52px;

  @media only screen and (max-width: 1439px) {
    gap: 24px;
  }

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
}

.second-block__counters {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;

  @media only screen and (max-width: 1439px) {
    gap: 24px;
  }

  @media only screen and (max-width: 767px) {
    gap: 16px;
  }
}
.second-block__counter {
  flex: 1;

  @media only screen and (max-width: 767px) {
    min-width: 156px;
  }
}

.second-block__description {
  @include body-l;
  flex: 1;

  @media only screen and (max-width: 1439px) {
    @include body-s;
  }
}
</style>