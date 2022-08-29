<template>
  <DetailedService :i18n-sub-key="i18nSubKey" :other-services="otherServices" />
</template>

<script>
import DetailedService from '@/components/DetailedService'

export default {
  components: { DetailedService },
  data() {
    return {
      i18nSubKey: 'delivery-and-hosting',
      otherServices: [
        {
          name: this.$t('home.services.consulting.title'),
          icon: 'mdi-lightbulb-on',
          blurb: this.$t('home.services.consulting.description'),
          href: this.localePath('/services/conseil-et-accompagnement/'),
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
