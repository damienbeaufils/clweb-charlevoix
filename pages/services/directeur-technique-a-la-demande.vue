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
                Directeur Techique à la demande (<i>CTO-as-a-Service</i>)
              </base-heading>
              <base-subheading tag="h2">
                Pour occuper le rôle de Directeur Technique dans votre
                compagnie, à raison de quelques heures par semaine ou par mois
              </base-subheading>
              <base-text class="mt-5">
                Vous dirigez une compagnie, vous avez besoin d’une personne sur
                le long terme pour vous aider à
                <b>prendre des décisions relatives aux TI</b> mais vous n’avez
                pas le budget pour embaucher une personne qui aurait le rôle de
                directeur technique permanent à temps plein ?
              </base-text>

              <base-text class="mt-5">
                Qu’il s’agisse de quelques heures par semaine ou simplement de 1
                journée par mois, nous pouvons vous accompagner en occupant le
                rôle de directeur technique à temps partiel afin de
                <b>vous aider à piloter les ressources TI de votre compagnie</b
                >.
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
      title:
        'Directeur Techique à la demande (CTO-as-a-Service) | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Pour occuper le rôle de Directeur Technique dans votre compagnie, à raison de quelques heures par semaine ou par mois',
        },
      ],
    }
  },
}
</script>
