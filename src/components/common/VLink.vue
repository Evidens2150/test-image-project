<template>
  <a
    :href="currentLink"
    :target="currentTarget"
    :class="linkClassList"
  >
    <slot>
      <div class="link__content">
        <phone-icon v-if="isPhone"/>
        {{ currentText }}
      </div>
    </slot>
  </a>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { Class, ILinkProps } from '@/types';
import PhoneIcon from '@/components/common/icons/PhoneIcon.vue';

const props = withDefaults(
  defineProps<ILinkProps>(),
  {
    type: 'primary',
    isPhone: false,
  }
);
const {
  type,
  link,
  text,
  isPhone,
} = toRefs(props);

const currentLink = computed((): string => {
  if (isPhone.value) return `tel:${link.value}`;

  return link.value || '';
});

const currentTarget = computed((): string => {
  const protocols = ['http://', 'https://']

  const isGlobalLink = protocols.some(protocol => currentLink.value.includes(protocol));

  if (isGlobalLink) return '_blank';

  return '_self';
});

const linkClassList = computed((): Class => [
  'link',
  `link--${type.value}`
]);

const currentText = computed((): string => {
  if (!isPhone.value || link.value?.length !== 12) return text.value || '';

  const countryCode = link.value.slice(0, 2);
  const areaCode = link.value.slice(2, 5);
  const firstPart = link.value.slice(5, 8);
  const secondPart = link.value.slice(8);

  return `${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;

});

</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.link {
  @include transition(('all'));

  display: flex;
  width: fit-content;
  text-decoration: none;

  text-underline-offset: 2px;
  &:hover {
    text-decoration: underline;
  }
}

.link--primary {
  color: $main;
}

.link--secondary {
  color: $background-main;
}

.link--icon {
  color: $background-main;
  opacity: .32;

  &:hover {
    opacity: 1;
    text-decoration: none;
  }
}

.link--tag {
  @include body-m;
  font-weight: 500;

  padding: 8px 16px;
  color: $background-main;
  background-color: $main;

  &:hover {
    color: $main;
    background-color: $light-2;
    text-decoration: none;
  }

  @media only screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 16.8px;
    padding: 4px 8px;
  }
}

.link__content {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>