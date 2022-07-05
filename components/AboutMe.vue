<template>
  <section id="a-propos" class="overflow-hidden">
    <v-row class="white" no-gutters>
      <v-col class="pa-5" cols="12" lg="6">
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text mb-10 mb-lg-15" tag="h2">
          <span v-html="$t('about.heading')"></span>
        </base-heading>

        <base-text class="mb-5">
          <span v-html="$t('about.description[0]')"></span>
        </base-text>
        <base-text class="mb-5">
          <span v-html="$t('about.description[1]')"></span>
        </base-text>
        <base-text class="mb-5">
          <span v-html="$t('about.description[2]')"></span>
        </base-text>

        <div class="text-center">
          <base-btn
            class="mt-5 mb-10 text-h6 px-10 py-5"
            nuxt
            :to="localePath('/equipe/')"
          >
            <span v-html="$t('about.team')"></span>
          </base-btn>
        </div>
      </v-col>

      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="require('@/static/img/home/aboutme.jpg')"
          class="fill-height"
          height="95vh"
        />
      </v-col>
    </v-row>
  </section>
</template>
