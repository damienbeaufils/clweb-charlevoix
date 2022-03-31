<template>
  <v-app-bar color="primary" fixed app>
    <v-app-bar-nav-icon class="ml-5" nuxt to="/#accueil">
      <v-img
        :src="require('@/static/img/clweb_charlevoix_logo.png')"
        contain
        height="45"
      />
    </v-app-bar-nav-icon>
    <v-app-bar-title
      class="company-title info--text text-subtitle-1 text-md-h6"
    >
      <nuxt-link to="/#accueil" class="info--text">
        Conseil Logiciel & Web<br />Charlevoix
      </nuxt-link>
    </v-app-bar-title>

    <v-spacer />

    <div class="d-none d-sm-none d-md-flex">
      <base-btn nuxt to="/#services" class="mx-3"> Services </base-btn>
      <base-btn nuxt to="/#temoignages" class="mx-3"> Témoignages </base-btn>
      <base-btn nuxt to="/#a-propos" class="mx-3"> Notre équipe </base-btn>
      <base-btn nuxt to="/#contact" class="mx-3"> Contact </base-btn>
    </div>

    <v-menu>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" class="d-flex d-md-none" v-on="on">
          <v-icon class="secondary--text"> mdi-menu </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn text nuxt to="/#services"> Services </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text nuxt to="/#temoignages"> Témoignages </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text nuxt to="/#a-propos"> Notre équipe </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text nuxt to="/#contact"> Contact </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'CoreAppBar',

  data: () => ({
    showLogo: false,
    isScrolling: false,
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset
      this.isScrolling = offset > 50
      this.showLogo = offset > 200
    },
  },
}
</script>

<style scoped>
.company-title /deep/ div {
  text-overflow: unset !important;
}
.company-title /deep/ a {
  text-decoration: none;
}
</style>
