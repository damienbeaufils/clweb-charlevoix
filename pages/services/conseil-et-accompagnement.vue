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
                Conseil & accompagnement
              </base-heading>
              <base-subheading tag="h2">
                Pour vous conseiller dans la prise de décisions importantes et
                structurantes pour votre compagnie
              </base-subheading>
              <base-text class="mt-5">
                Vous devez
                <b>prendre une décision importante et structurante</b>
                concernant vos logiciels existants ou futurs, votre site web, le
                stockage de vos données ou encore votre système d’information
                dans son ensemble ?
              </base-text>
              <base-text class="mt-5">
                Nous pouvons vous accompagner dans un temps déterminé en
                réalisant une
                <b>analyse poussée de votre besoin et de vos contraintes</b>, et
                en vous <b>conseillant dans votre prise de décision</b>.
              </base-text>
              <base-text class="mt-5">
                Exemples de mandats de conseils :
                <ul>
                  <li>
                    Vous souhaitez faire évoluer drastiquement votre site web
                    mais vous ne savez pas s’il est mieux de modifier le site
                    existant avec ses contraintes ou s’il serait plus simple de
                    concevoir un tout nouveau site adapté à vos nouveaux
                    besoins,
                  </li>
                  <li>
                    Vous stockez des outils et données dans votre compagnie et
                    vous hésitez à prendre le virage de l’infonuagique pour
                    réduire vos coûts de structure,
                  </li>
                  <li>
                    Vous souhaitez rendre accessible sur cellulaire et tablette
                    votre logiciel ou site web mais vous voudriez connaitre la
                    faisabilité,
                  </li>
                  <li>
                    Vous souhaitez analyser le niveau de qualité d’un logiciel
                    ou site web existant.
                  </li>
                </ul>
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
      title: 'Conseil & accompagnement | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous pouvons vous conseiller dans la prise de décisions importantes et structurantes pour votre compagnie',
        },
      ],
    }
  },
}
</script>
