<template>
  <v-container fluid class="pa-0">
    <section id="team" class="overflow-hidden">
      <v-row no-gutters>
        <v-col
          class="align-content-space-between layout wrap"
          cols="12"
          md="8"
          :pa-5="$vuetify.breakpoint.smAndDown"
        >
          <v-row align="center" justify="center">
            <v-col cols="10">
              <base-subheading class="mt-15 mb-10"
                ><span v-html="$t('thank-you.subheading')"></span
              ></base-subheading>
              <base-text class="mb-10"
                ><span v-html="$t('thank-you.paragraph')"></span
              ></base-text>

              <div class="text-center">
                <base-btn nuxt to="/" class="mt-5 mb-10 text-h6 px-7 py-7">
                  <span v-html="$t('thank-you.back')"></span>
                </base-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down" md="4">
          <v-img
            :src="
              require('static/img/home/wilhelm-gunkel-Vgo3XNLZreM-unsplash.jpg')
            "
            class="fill-height"
            max-height="100%"
          />
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('thank-you.meta.title'),
    }
  },
}
</script>
