<template>
  <v-modal
    :is-open="modelValue"
    @close="handleCloseModal"
  >
    <p class="request-modal__title">
      {{ requestModalTitle }}
    </p>
    <form @submit.prevent="handleSubmit">
      <v-input
        v-model="form.name"
        placeholder="Ваше Имя"
      />
      <v-phone-input
        v-model="form.phone"
        placeholder="Введите ваш номер"
      />
      <v-button
        native-type="submit"
      >
        Оставить заявку
      </v-button>
    </form>
    <p class="request-modal__description">
      {{ requestModalDescription }}
    </p>
  </v-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VModal from '@/components/common/VModal.vue';
import VInput from '@/components/common/inputs/VInput.vue';
import VPhoneInput from '@/components/common/inputs/VPhoneInput.vue';
import VButton from '@/components/common/VButton.vue';

const requestModalTitle = 'Наш специалист ответит на все ваши вопросы'.toUpperCase();
const requestModalDescription = 'Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности';

const modelValue = defineModel<boolean>();

const initialForm: Record<string, string> = {
  name: '',
  phone: '',
};

const form = ref<Record<string, string>>({
  name: '',
  phone: '',
});

const handleCloseModal = () => {
  modelValue.value = false;

  form.value = {
    ...form.value,
    ...initialForm,
  };
};

const handleSubmit = () => {
  console.log('Отправка заявки');
  handleCloseModal();
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.request-modal__title {
  @include title-xl;

  text-align: center;
  padding-bottom: 48px;

  @media only screen and (max-width: 1439px) {
    @include title-l;
    padding-bottom: 42px;
  }

  @media only screen and (max-width: 767px) {
    @include title-m;
    padding-bottom: 36px;
  }

}

.request-modal__description {
  @include overline-m;

  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.8px;
  padding-top: 16px;

  @media only screen and (max-width: 767px) {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>