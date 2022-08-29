<template>
  <section id="services" class="overflow-hidden">
    <v-row class="accent" no-gutters>
      <v-col class="text-center pa-5" cols="12" lg="6">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <base-bubble-2 style="transform: translateX(55%)" />
            <base-heading class="info--text" tag="h2">
              <span v-html="$t('home.services.heading')"></span>
            </base-heading>
          </v-col>

          <v-col cols="12">
            <v-hover v-slot="{ hover }">
              <v-card
                nuxt
                :to="localePath('/services/deroulement-et-tarifs/')"
                :elevation="hover ? 12 : 0"
                class="rounded-l"
              >
                <v-card-text class="info--text text-h5 rounded-xl">
                  <span v-html="$t('home.services.promo')"></span>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12">
            <div class="info--text text-h6 font-weight-light font-italic mb-0">
              <span v-html="$t('home.services.details')"></span>
            </div>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="6"
            cols="12"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :to="service.href"
                :elevation="hover ? 12 : 0"
                class="rounded-xl"
              >
                <v-card-text>
                  <v-avatar
                    class="elevation-6 mb-2 rounded"
                    color="secondary"
                    size="64"
                    tile
                  >
                    <v-icon dark size="52" v-text="service.icon" />
                  </v-avatar>

                  <base-text class="info--text service-details">
                    <h3 class="mb-2">
                      <span v-html="service.name"></span>
                    </h3>
                    <h4 class="font-italic font-weight-light">
                      <span v-html="service.blurb"></span>
                    </h4>
                  </base-text>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12">
            <v-hover v-slot="{ hover }">
              <v-card
                nuxt
                :to="localePath('/services/deroulement-et-tarifs/')"
                :elevation="hover ? 12 : 0"
                class="rounded-l"
              >
                <v-card-text class="info--text text-h5 rounded-xl">
                  <span v-html="$t('home.services.more')"></span>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="
            require('@/static/img/home/safar-safarov-koOdUvfGr4c-unsplash.jpg')
          "
          class="fill-height"
          min-height="140vh"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Services',

  computed: {
    services() {
      return [
        {
          name: this.$t('home.services.consulting.title'),
          icon: 'mdi-lightbulb-on',
          blurb: this.$t('home.services.consulting.description'),
          href: this.localePath('/services/conseil-et-accompagnement/'),
        },
        {
          name: this.$t('home.services.delivery.title'),
          icon: 'mdi-progress-wrench',
          blurb: this.$t('home.services.delivery.description'),
          href: this.localePath('/services/realisation-et-hebergement/'),
        },
        {
          name: this.$t('home.services.cto.title'),
          icon: 'mdi-directions-fork',
          blurb: this.$t('home.services.cto.description'),
          href: this.localePath('/services/direction-technique/'),
        },
        {
          name: this.$t('home.services.coaching.title'),
          icon: 'mdi-account-multiple-check',
          blurb: this.$t('home.services.coaching.description'),
          href: this.localePath('/services/coaching-et-formation/'),
        },
      ]
    },
  },
}
</script>

<style scoped>
.service-details span {
  display: block;
}
.service-details h3 {
  font-size: 1.25rem !important;
}
</style>
