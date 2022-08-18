<template>
  <DetailedService :i18n-sub-key="i18nSubKey" :other-services="otherServices" />
</template>

<script>
import DetailedService from '@/components/DetailedService'

export default {
  components: [DetailedService],
  data() {
    return {
      i18nSubKey: 'consulting-and-guidance',
      otherServices: [
        {
          name: this.$t('home.services.delivery.title'),
          icon: 'mdi-progress-wrench',
          blurb: this.$t('home.services.delivery.description'),
          href: this.localePath('/services/realisation-et-hebergement/'),
        },
        {
          name: this.$t('home.services.cto.title'),
          icon: 'mdi-directions-fork',
          blurb: this.$t('home.services.cto.description'),
          href: this.localePath('/services/direction-technique/'),
        },
        {
          name: this.$t('home.services.coaching.title'),
          icon: 'mdi-account-multiple-check',
          blurb: this.$t('home.services.coaching.description'),
          href: this.localePath('/services/coaching-et-formation/'),
        },
      ],
    }
  },
  head() {
    return {
      title: this.$t(`services.${this.i18nSubKey}.meta.title`),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t(`services.${this.i18nSubKey}.meta.description`),
        },
      ],
    }
  },
}
</script>
