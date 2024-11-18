<template>
  <div>
    <v-input
      v-model="formattedModelValue"
      type="tel"
      :label="label"
      :placeholder="currentPlaceholder"
      :autocomplete="autocomplete"
      @mouseenter="toggleHovered(true)"
      @mouseleave="toggleHovered(false)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import VInput from '@/components/common/inputs/VInput.vue';
import { IInputProps } from '@/types';

const props = withDefaults(
  defineProps<IInputProps>(),
  {
    label: '',
    placeholder: '',
    autocomplete: 'on',
  }
);
const {
  label,
  placeholder,
  autocomplete
} = toRefs(props);

const isInputHovered = ref<boolean>(false);

const modelValue = defineModel<string>();

const currentPlaceholder = computed((): string =>
  isInputHovered.value ? '+7 (999) 999-99-99' : placeholder.value
);

const formattedModelValue = computed({
  get: () => formatPhoneNumber(modelValue.value),
  set: (value: string) => {
    modelValue.value = value.replace(/\D/g, '');
  }
});

const toggleHovered = (state: boolean) => {
  isInputHovered.value = state;
}

const formatPhoneNumber = (value?: string): string => {
  if (!value) return '';

  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

  let formattedValue = '';

  if (match) {
    formattedValue = `+7 ${match[2] ? '(' + match[2] + ')' : ''} ${match[3] || ''}${match[4] ? '-' + match[4] : ''}${match[5] ? '-' + match[5] : ''}`;
  }

  return formattedValue.trim();
};
</script>