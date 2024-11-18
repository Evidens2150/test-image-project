<template>
  <div
    class="v-input"
  >
    <label
      v-if="label"
      :for="computedId"
      class="v-input__label"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :id="computedId"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="v-input__control"
      @input="handleInput"
    >
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed, getCurrentInstance } from 'vue';
import { IInputProps } from '@/types';

const props = withDefaults(
  defineProps<IInputProps>(),
  {
    label: '',
    type: 'text',
    placeholder: '',
    autocomplete: 'off',
  }
);
const {
  label,
  type,
  placeholder,
  autocomplete
} = toRefs(props);

const modelValue = defineModel<string>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string ): void;
}>();

const computedId = computed((): string => {
  const componentInstance = getCurrentInstance();
  const uid = componentInstance?.uid || 0;
  return `input-${uid}`
});

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emits('update:modelValue', value);
};
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.v-input {
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid $main;
  margin-bottom: 36px;
}

.v-input__control {
  @include body-m;

  width: 100%;
  padding: 0;
  border: none;

  @media only screen and (max-width: 767px) {
    @include body-s;
  }

  &::placeholder {
    color: $dark-3;
  }
}
</style>