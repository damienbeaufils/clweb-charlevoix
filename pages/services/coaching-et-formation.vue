<template>
  <v-container fluid class="pa-0">
    <section class="overflow-hidden">
      <v-row no-gutters>
        <v-col
          class="align-content-space-between layout wrap"
          cols="12"
          md="8"
          :pa-5="$vuetify.breakpoint.smAndDown"
        >
          <v-row align="center" justify="center">
            <v-col cols="10">
              <base-heading class="mt-10 mb-5">
                <span
                  v-html="$t('services.coaching-and-training.heading')"
                ></span>
              </base-heading>
              <base-subheading>
                <span
                  v-html="$t('services.coaching-and-training.subheading')"
                ></span>
              </base-subheading>
              <base-text>
                <span
                  v-html="$t('services.coaching-and-training.paragraph[0]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.coaching-and-training.paragraph[1]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.coaching-and-training.paragraph[2]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.coaching-and-training.paragraph[3]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.coaching-and-training.paragraph[4]')"
                ></span>
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  :to="localePath('/#contact')"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  <span
                    v-html="$t('services.coaching-and-training.more')"
                  ></span>
                </base-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down" md="4">
          <v-img
            :src="
              require('@/static/img/services/artem-maltsev-0CvHQ62gwY8-unsplash.jpg')
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
      title: this.$t('services.coaching-and-training.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('services.coaching-and-training.meta.description'),
        },
      ],
    }
  },
}
</script>
