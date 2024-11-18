<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__media">      
        <logo-icon/>
        <span>
          Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений
        </span>
        <div class="footer__socials">
          <v-link
            v-for="(item, index) in socialList"
            :key="index"
            :type="item.type"
            :link="item.link"
            class="footer__link"
          >
          <component :is="item.icon"/>
          </v-link>
        </div>
      </div>
      <div class="footer__contacts">
        <span class="footer__contacts-heading">
          КОНТАКТЫ
        </span>
        <span>
          Санкт-Петербург, ул. Ленина, д. 160
        </span>
        <v-link
          type='secondary'
          link="+78128002030"
          is-phone
          class="footer__link footer__link--phone"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import LogoIcon from '@/components/common/icons/LogoIcon.vue';
import FacebookIcon from '@/components/common/icons/FacebookIcon.vue';
import TwitterIcon from '@/components/common/icons/TwitterIcon.vue';
import InstagramIcon from '@/components/common/icons/InstagramIcon.vue';
import GithubIcon from '@/components/common/icons/GithubIcon.vue';
import VLink from '@/components/common/VLink.vue';

const socialList = [
  {
    link: 'https://www.facebook.com/',
    type: 'icon',
    icon: FacebookIcon,
  },
  {
    link: 'https://twitter.com/',
    type: 'icon',
    icon: TwitterIcon,
  },
  {
    link: 'https://www.instagram.com/',
    type: 'icon',
    icon: InstagramIcon,
  },
  {
    link: 'https://github.com/',
    type: 'icon',
    icon: GithubIcon,
  },
]

</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.footer {
  width: 100%;
  color: $background-main;
  background-color: $main;
}

.footer__content {
  @include body-m;

  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.footer__media {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 610px;
  width: 100%;
}

.footer__socials {
  display: flex;
  gap: 32px;
}

.footer__link {
  color: $background-main;

  &--phone {
    font-weight: 600;
  }
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__contacts-heading {
  font-weight: 700;
}
</style>