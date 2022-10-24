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
    const baseUrl = `https://clweb-charlevoix.ca`
    const currentRoute = `${baseUrl}${this.$route.path}`
    let currentLang = 'fr'
    let alternateLang = 'en'
    if (this.$route.fullPath.indexOf('/en/') === 0) {
      currentLang = 'en'
      alternateLang = 'fr'
    }

    return {
      htmlAttrs: {
        lang: currentLang,
      },
      link: [
        {
          rel: 'canonical',
          href: currentRoute,
        },
        {
          rel: 'alternate',
          hreflang: currentLang,
          href: currentRoute,
        },
        {
          rel: 'alternate',
          hreflang: alternateLang,
          href: `${baseUrl}${this.localePath(this.$route.path, alternateLang)}`,
        },
      ],
    }
  },
}
</script>
