<template>
  <div class="animated-counter">
    <div class="animated-counter__heading">
      <span>
        {{ roundedValue }}
        {{ counterText }}
      </span>
    </div>
    <p
      v-if="!!description"
      class="animated-counter__description"
    >
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onBeforeUnmount, computed } from 'vue';
import { IAnimatedCountProps } from '@/types';

const props = withDefaults(
  defineProps<IAnimatedCountProps>(),
  {
    startValue: 1,
    duration: 1500,
    counterText: '',
    description: '',
  }
);
const {
  startValue,
  duration,
  targetValue,
  counterText,
  description,
} = toRefs(props);

const roundedValue = computed((): number => (Math.round(currentValue.value)) );

const currentValue = ref<number>(1);

const interval = ref<any>(null);

const startAnimation = () => {
  currentValue.value = startValue.value;
  const totalFrames = Math.ceil(duration.value / 16);
  const increment = (targetValue.value - startValue.value) / totalFrames;
  
  let frameCount = 0;

  interval.value = setInterval(() => {
    if (frameCount < totalFrames) {
      currentValue.value += increment;
      frameCount++;
    } else {
      clearInterval(interval.value!);
    }
  }, 16);
};

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

startAnimation();
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.animated-counter {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.animated-counter__heading {
  @include h3;

  padding-bottom: 10px;
  border-bottom: 2px solid $main;

  font-size: 36px;
  font-weight: 600;
  line-height: 50.4px;

  @media only screen and (max-width: 1439px) {
    font-size: 32px;
    line-height: 44.8px;
  }
}

.animated-counter__description {
  @include body-m;

  @media only screen and (max-width: 1439px) {
    @include body-s;
  }
}
</style>