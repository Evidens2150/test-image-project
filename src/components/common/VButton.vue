<template>
  <button
    :type="nativeType"
    :class="buttonClassList"
    @click="handleClickButton"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { Class, IButtonProps } from '@/types';

const props = withDefaults(
  defineProps<IButtonProps>(),
  {
    nativeType: 'button',
    type: 'primary',
  }
);
const {
  nativeType,
  type,
  text,
} = toRefs(props);

const emits = defineEmits<{
  (e: 'click' ): void;
}>();

const buttonClassList = computed((): Class => [
  'button',
  `button--${type.value}`
])

const handleClickButton = () => {
  emits('click');
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.button {
  @include transition(('all'));
  @include button-l;

  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background: none;

  @media only screen and (max-width: 767px) {
    @include button-s;
  }
}

.button--primary {
  width: 100%;
  padding: 16px;
  color: $background-main;
  background-color: $main;

  &:hover {
    background-color: $secondary;
  }
}

.button--secondary {
  opacity: 1;

  &:hover {
    opacity: .32;
  }
}
</style>