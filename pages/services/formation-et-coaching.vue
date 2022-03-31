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
                Coaching et formation d'équipes de développement
              </base-heading>
              <base-subheading tag="h2">
                Pour accompagner et former une ou plusieurs équipes de
                développement de votre compagnie
              </base-subheading>
              <base-text class="mt-5">
                Vous avez dans votre compagnie une équipe de développement et
                vous souhaitez les former aux pratiques de qualité ? Vous êtes
                vous-mêmes développeur ou développeuse et vous souhaitez
                progresser dans vos pratiques pour produire du code maintenable
                et évolutif sur le long terme ?
              </base-text>
              <base-text class="mt-5">
                Nous pouvons former et accompagner aussi bien sur les pratiques
                de qualité des développements que sur des technologies
                spécifiques sur lesquelles nous sommes experts. La formation
                peut se dérouler sur un ou plusieurs jours, en ligne ou bien sur
                place. L'accompagnement se fait usuellement de manière dégressif
                : quelques jours par semaine au démarrage, puis une réduction
                progressive pour finir à quelques heures de coaching par
                semaine.
              </base-text>
              <base-text class="mt-5">
                L'objectif est bien que la ou les personnes formées soient
                autonomes et qu'il n'y ait plus besoin d'aucun accompagnement ni
                coaching.
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  to="/#contact"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  Pour en savoir plus, <br />contactez-nous !
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
      title:
        "Coaching et formation d'équipes de développement | Services | CLWeb Charlevoix",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Pour accompagner et former une ou plusieurs équipes de développement de votre compagnie',
        },
      ],
    }
  },
}
</script>
