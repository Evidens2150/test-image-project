<template>
  <div class="page">
    <first-section/>
    <div class="container">
      <p class="section-heading">
        Юмористические вставки или слова
      </p>
      <component
        :is="secondSectionComponent"
        class="cards"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img
            :src="slide.imageSrc"
            :alt="slide.imageAlt"
            class="v-slider-slide__image"
          />
          <v-link
            type="tag"
            link="/#tag"
            text="#tag"
            class="v-slider-slide__link"
          />
          <div class="v-slider-slide__text">
            <p class="v-slider-slide__title">
              {{ slide.title.toUpperCase() }}
            </p>
            <p class="v-slider-slide__description">
              {{ slide.description }}
            </p>
          </div>
        </swiper-slide>
      </component>
    </div>
    <div class="container">
      <p class="section-heading">
        Вопросы и ответы
      </p>
      <VAccordeon
        :items="questions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import FirstSection from '@/components/page-content/FirstSection.vue';
import VAccordeon from '@/components/common/VAccordeon.vue';
import VLink from '@/components/common/VLink.vue';
import VSlider from '@/components/common/VSlider.vue';
import { SwiperSlide } from 'swiper/vue';
import { ISlide, IAccordeonItem } from '@/types';

import slide1 from '@/assets/images/slide1.png';
import slide2 from '@/assets/images/slide2.png';
import slide3 from '@/assets/images/slide3.png';
import slide4 from '@/assets/images/slide4.png';

import { useWindowWidth } from '@/composables/windowWidth';

const { isDesktop } = useWindowWidth();

const slides: ISlide[] = [
  {
    imageSrc: slide1,
    imageAlt: 'slide 1',
    title: 'оценка дизайна',
    description: 'За прошедшие годы текст Lorem Ipsum получил много версий',
  },
  {
    imageSrc: slide2,
    imageAlt: 'slide 2',
    title: 'Lorem Ipsum в качестве текста по умолчанию',
    description: 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию',
  },
  {
    imageSrc: slide3,
    imageAlt: 'slide 3',
    title: 'Почему он используется?',
    description: 'Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. ',
  },
  {
    imageSrc: slide4,
    imageAlt: 'slide 4',
    title: 'Также все другие известные генераторы ',
    description: 'Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца',
  },
];

const description = 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.';

const questions = computed((): IAccordeonItem[] => [
  {
    title: 'Где его взять?',
    description,
  },
  {
    title: 'Абзац 1.10.33 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.',
    description,
  },
  {
    title: 'Почему он используется?',
    description,
  },
  {
    title: 'Английский перевод 1914 года, H. Rackham',
    description,
  },
  {
    title: 'Классический текст Lorem Ipsum, используемый с XVI века',
    description,
  },
]);

const secondSectionComponent = computed(() => isDesktop.value ? VSlider : 'div');
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.page {
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-bottom: 120px;

  @media only screen and (max-width: 1439px) {
    gap: 80px;
    padding-bottom: 80px;
  }

  @media only screen and (max-width: 767px) {
    gap: 60px;
    padding-bottom: 60px;
  }
}

.section-heading {
  @include h2;
  position: relative;
  padding-left: 120px;
  margin-bottom: 60px;

  &:before {
    content: '';
    width: 80px;
    height: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: $main;
  }

  @media only screen and (max-width: 1439px) {
    @include h3;
    padding-left: 72px;
    margin-bottom: 48px;

    &:before {
      width: 48px;
    }
  }

  @media only screen and (max-width: 767px) {
    @include h4;
    padding-left: 50px;
    margin-bottom: 32px;

    &:before {
      width: 30px;
    }
  }
}

.v-slider-slide {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.v-slider-slide__image {
  @include transition(('all'));

  width: 100%;
  height: 248px;
  object-fit: cover;

  &:hover {
    scale: 1.1;
  }

  @media only screen and (max-width: 1023px) {
    height: 320px;

    &:hover {
      scale: 1;
    }
  }

  @media only screen and (max-width: 767px) {
    height: 240px;
  }
}

.v-slider-slide__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.v-slider-slide__title {
  @include title-m;

  @media only screen and (max-width: 767px) {
    @include title-s;
  }
}

.v-slider-slide__description {
  @include body-m;

  @media only screen and (max-width: 767px) {
    @include body-s;
  }
}

.v-slider-slide__link {
  position: absolute;
  top: 12px;
  left: 12px;
}

.cards {
  @media only screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  @media only screen and (max-width: 767px) {
    gap: 36px;
  }
}
</style>
