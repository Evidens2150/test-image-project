<template>
  <teleport to='body'>
    <div
      :class="modalWrapperClassList"
      @click.self="handleCloseModal"
    >
      <div class="modal">
        <div class="modal__heading">
          <logo-icon class="modal__logo"/>
          <v-button
            type="secondary"
            class="modal__close-button"
            @click="handleCloseModal"
          >
            <close-icon/>
          </v-button>
        </div>
        <div class="modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import VButton from '@/components/common/VButton.vue';
import LogoIcon from '@/components/common/icons/LogoIcon.vue';
import CloseIcon from '@/components/common/icons/CloseIcon.vue';
import { Class, IModalProps } from '@/types';

const props = withDefaults(
  defineProps<IModalProps>(),
  {
    isOpen: false,
  }
);
const {
  isOpen,
} = toRefs(props);

const emits = defineEmits<{
  (e: 'close' ): void;
}>();

const modalWrapperClassList = computed((): Class => {
  return {
    'modal__wrapper': true,
    'modal__wrapper--open': isOpen.value,
  }
});

const handleCloseModal = () => {
  emits('close');
};
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.modal__wrapper {
  @include transition(('all'));

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-height: 0;
  background-color: rgba($main, .8);
  z-index: 1000;

  &--open {
    max-height: 100vh;
  }
}

.modal {
  width: 100%;
  height: fit-content;
  max-width: 693px;

  @media only screen and (max-width: 1439px) {
    max-width: 520px;
  }

  @media only screen and (max-width: 767px) {
    max-width: 328px;
  }
}

.modal__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: $background-main;
  background-color: $main;
  padding: 24px 60px;

  @media only screen and (max-width: 1439px) {
    padding: 24px 36px;
  }

  @media only screen and (max-width: 767px) {
    padding: 12px 16px;
  }
}

.modal__logo {
  @media only screen and (max-width: 767px) {
    width: 94px;
  }
}

.modal__close-button {
  color: $background-main;
}

.modal__content {
  background-color: $background-main;
  padding: 48px 60px;

  @media only screen and (max-width: 1439px) {
    padding: 48px 36px;
  }

  @media only screen and (max-width: 767px) {
    padding: 25px 16px;
  }
}
</style>