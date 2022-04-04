<template>
  <section id="services" class="overflow-hidden">
    <v-row class="accent" no-gutters>
      <v-col class="text-center pa-5" cols="12" lg="6">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <base-bubble-2 style="transform: translateX(55%)" />
            <base-heading class="info--text" tag="h2">
              Des services <b>sur-mesure</b> adaptés à votre contexte unique
            </base-heading>
          </v-col>

          <v-col cols="12">
            <v-hover v-slot="{ hover }">
              <v-card
                nuxt
                to="/services/deroulement-et-tarifs/"
                :elevation="hover ? 12 : 0"
                class="rounded-l"
              >
                <v-card-text class="info--text text-h5 rounded-xl">
                  ️Vous êtes une entreprise de la région de Charlevoix ou un
                  organisme de bienfaisance ? Bénéficiez de tarifs préférentiels
                  !
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12">
            <div class="info--text text-h6 font-weight-light font-italic mb-0">
              Cliquez sur un élément pour accéder à plus de détails
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
                    <h3 class="mb-2" v-html="service.name"></h3>
                    <h4
                      class="font-italic font-weight-light"
                      v-html="service.blurb"
                    ></h4>
                  </base-text>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12">
            <v-hover v-slot="{ hover }">
              <v-card
                nuxt
                to="/services/deroulement-et-tarifs/"
                :elevation="hover ? 12 : 0"
                class="rounded-l"
              >
                <v-card-text class="info--text text-h5 rounded-xl">
                  Vous souhaitez en savoir plus sur<br
                    class="hidden-md-and-down"
                  />
                  <b>comment se déroule une prestation</b> ainsi que
                  <b>nos tarifs</b> ? Cliquez ici
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

  data: () => ({
    services: [
      {
        name: 'Conseil et accompagnement',
        icon: 'mdi-lightbulb-on',
        blurb:
          'Pour vous conseiller dans la prise de décisions importantes et structurantes pour votre compagnie',
        href: '/services/conseil-et-accompagnement/',
      },
      {
        name: 'Réalisation et hébergement',
        icon: 'mdi-progress-wrench',
        blurb:
          "Pour la conception d’un logiciel ou la création d'un site web sur-mesure, de qualité, adapté à vos besoins et contraintes",
        href: '/services/realisation-et-hebergement/',
      },
      {
        name: 'Directeur Technique à la demande<br/>(<i>CTO-as-a-Service</i>)',
        icon: 'mdi-directions-fork',
        blurb:
          'Pour occuper le rôle de Directeur Technique dans votre compagnie, à raison de quelques heures par semaine ou par mois',
        href: '/services/directeur-technique-a-la-demande/',
      },
      {
        name: 'Coaching et formation',
        icon: 'mdi-account-multiple-check',
        blurb:
          'Pour accompagner et former une ou plusieurs équipes de développement de votre compagnie',
        href: '/services/coaching-et-formation/',
      },
    ],
  }),
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
