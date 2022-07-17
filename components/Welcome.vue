<template>
  <section id="accueil" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="
            require('@/static/img/home/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg')
          "
          class="fill-height"
          height="90vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        lg="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <v-row class="info--text" align="center" justify="center">
          <v-col cols="10">
            <base-heading class="mt-10 mt-lg-15">
              <span v-html="$t('home.welcome.heading')"></span>
            </base-heading>
            <base-subheading class="mt-10 mb-10">
              <span v-html="$t('home.welcome.subheading')"></span>
            </base-subheading>
            <base-text>
              <span v-html="$t('home.welcome.description[0]')"></span>
            </base-text>
            <base-text>
              <span v-html="$t('home.welcome.description[1]')"></span>
            </base-text>
            <base-text>
              <span v-html="$t('home.welcome.description[2]')"></span>
            </base-text>
            <div class="text-center">
              <base-btn
                nuxt
                :to="localePath('/#contact')"
                class="mt-5 mb-10 text-h6 px-10 py-5"
              >
                <span v-html="$t('home.welcome.contact-us')"></span>
              </base-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
