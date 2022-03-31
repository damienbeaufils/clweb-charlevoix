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
                Réalisation & hébergement
              </base-heading>
              <base-subheading tag="h2">
                Pour la conception et création d’un logiciel ou site web
                sur-mesure, de qualité, adapté à vos besoins et contraintes
              </base-subheading>
              <base-text class="mt-5">
                Vous avez un processus qui vous prend plusieurs heures par
                semaine ou par mois ? Traité sur papier ? Avec un risque
                d’erreur ou d’oubli ?
                <br />
                Votre site web ou votre intranet conçu avec des outils comme Wix
                ou Wordpress n’est plus adapté à vos besoins ? Vous devez vous
                adapter à votre logiciel alors qu’il devrait s’adapter à votre
                processus ?
              </base-text>

              <base-text class="mt-5">
                Nous réalisons le développement d’un logiciel ou site web
                sur-mesure, de qualité, adapté à vos besoins et contraintes, que
                vous pourrez utiliser aussi bien sur votre cellulaire, tablette
                ou ordinateur.
              </base-text>

              <base-text class="mt-5">
                Nous fonctionnons avec une approche itérative (méthodologie
                agile) pour concevoir votre produit en intégrant votre
                <i>feedback</i> régulièrement.
              </base-text>

              <base-text class="mt-5">
                La qualité du logiciel est notre priorité. Nous utilisons pour
                cela des outils et pratiques de code à l’état de l’art, afin de
                produire un code robuste, fiable et évolutif sur le long terme.
              </base-text>

              <base-text class="mt-5">
                Nous pouvons déployer le logiciel ou héberger le site web sur
                des infrastructures infonuagiques, ici, au Québec, afin d’être
                au plus proche géographiquement de nos clients et de faire
                fonctionner l’industrie locale.
              </base-text>

              <base-text class="mt-5">
                En bref, notre mission : concevoir des logiciels de qualité qui
                répondent à vos besoins, et qui soient évolutifs sur plusieurs
                années.
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
              require('@/static/img/services/kevin-canlas-QYHehJ9Iovs-unsplash.jpg')
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
      title: 'Réalisation & hébergement | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous pouvons concevoir un logiciel ou créer un site web sur-mesure, de qualité, adapté à vos besoins et contraintes',
        },
      ],
    }
  },
}
</script>
