<template>
  <v-app>
    <core-app-bar />

    <v-main>
      <nuxt />
    </v-main>

    <core-footer />
  </v-app>
</template>

<script>
export default {
  head() {
    const lang = this.$route.fullPath.indexOf('/en/') === 0 ? 'en' : 'fr'
    return {
      htmlAttrs: {
        lang,
      },
      link: [
        {
          rel: 'canonical',
          href: `https://clweb-charlevoix.ca${this.$route.path}`,
        },
      ],
    }
  },
}
</script>
