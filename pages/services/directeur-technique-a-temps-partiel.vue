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
                <span v-html="$t('services.cto-as-a-service.heading')"></span>
              </base-heading>
              <base-subheading>
                <span
                  v-html="$t('services.cto-as-a-service.subheading')"
                ></span>
              </base-subheading>
              <base-text>
                <span
                  v-html="$t('services.cto-as-a-service.paragraph[0]')"
                ></span>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.cto-as-a-service.paragraph[1]')"
                ></span>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.cto-as-a-service.examples.heading')"
                ></span>
                <ul>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[0]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[1]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[2]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[3]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[4]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[5]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[6]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[7]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[8]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="$t('services.cto-as-a-service.examples.items[9]')"
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.cto-as-a-service.examples.items[10]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.cto-as-a-service.examples.items[11]')
                      "
                    ></span>
                  </li>
                  <li>
                    <span
                      v-html="
                        $t('services.cto-as-a-service.examples.items[12]')
                      "
                    ></span>
                  </li>
                </ul>
              </base-text>

              <base-text>
                <span
                  v-html="$t('services.cto-as-a-service.paragraph[2]')"
                ></span>
              </base-text>
              <base-text>
                <span
                  v-html="$t('services.cto-as-a-service.paragraph[3]')"
                ></span>
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  to="/#contact"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  <span v-html="$t('services.cto-as-a-service.more')"></span>
                </base-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down" md="4">
          <v-img
            :src="
              require('@/static/img/services/vladislav-babienko-KTpSVEcU0XU-unsplash.jpg')
            "
            class="fill-height"
            min-height="90vh"
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
      title: this.$t('services.cto-as-a-service.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('services.cto-as-a-service.meta.description'),
        },
      ],
    }
  },
}
</script>
