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
                <span v-html="$t('services.process-and-rates.heading')"></span>
              </base-heading>
              <base-text>
                <span
                  v-html="$t('services.process-and-rates.paragraph[0]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.process-and-rates.steps.heading')"
                ></span>
                <ul>
                  <li>
                    <span
                      v-html="$t('services.process-and-rates.steps.items[0]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.process-and-rates.steps.items[1]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.process-and-rates.steps.items[2]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.process-and-rates.steps.items[3]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.process-and-rates.steps.items[4]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.process-and-rates.steps.items[5]')"
                    ></span>
                  </li>
                </ul>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.process-and-rates.variables.heading')"
                ></span>
                <ul>
                  <li>
                    <nuxt-link to="/#services"
                      ><span
                        v-html="
                          $t('services.process-and-rates.variables.items[0]')
                        "
                      ></span
                    ></nuxt-link>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.process-and-rates.variables.items[1]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.process-and-rates.variables.items[2]')
                      "
                    ></span>
                  </li>
                </ul>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.process-and-rates.paragraph[1]')"
                ></span>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.process-and-rates.paragraph[2]')"
                ></span>
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  to="/#contact"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  <span v-html="$t('services.process-and-rates.more')"></span>
                </base-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down" md="4">
          <v-img
            :src="
              require('@/static/img/services/sincerely-media-EtyBBUByPSQ-unsplash.jpg')
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
      title: 'Fonctionnement et tarifs | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Comment nos mandats se déroulent-ils ? Comment fonctionne une prestation de service ? À quels tarifs ?',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://clweb-charlevoix.ca/services/deroulement-et-tarifs/',
        },
      ],
    }
  },
}
</script>
