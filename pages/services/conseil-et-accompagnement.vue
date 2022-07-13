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
                  v-html="$t('services.consulting-and-guidance.heading')"
                ></span>
              </base-heading>
              <base-subheading>
                <span
                  v-html="$t('services.consulting-and-guidance.subheading')"
                ></span>
              </base-subheading>
              <base-text>
                <span
                  v-html="$t('services.consulting-and-guidance.paragraph[0]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.consulting-and-guidance.paragraph[1]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="
                    $t('services.consulting-and-guidance.examples.heading')
                  "
                ></span>
                <ul>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[0]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[1]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[2]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[3]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[4]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[5]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.consulting-and-guidance.examples.items[6]')
                      "
                    ></span>
                  </li>
                </ul>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.consulting-and-guidance.paragraph[2]')"
                ></span>
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  to="/#contact"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  <span
                    v-html="$t('services.consulting-and-guidance.more')"
                  ></span>
                </base-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down" md="4">
          <v-img
            :src="
              require('@/static/img/services/absolutvision-uCMKx2H1Y38-unsplash.jpg')
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
      title: 'Conseil et accompagnement | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous pouvons vous conseiller dans la prise de décisions importantes et structurantes pour votre compagnie',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://clweb-charlevoix.ca/services/conseil-et-accompagnement/',
        },
      ],
    }
  },
}
</script>
