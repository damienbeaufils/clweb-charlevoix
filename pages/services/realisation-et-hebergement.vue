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
                Réalisation et hébergement
              </base-heading>
              <base-subheading>
                Pour la conception d’un logiciel ou la création d'un site web
                sur-mesure, de qualité, adapté à vos besoins et contraintes
              </base-subheading>
              <base-text>
                Vous avez un processus manuel ou semi-automatisé qui vous prend
                <b>plusieurs heures par semaine ou par mois</b> ?
                <b>Traité sur papier</b> ou partiellement informatisé ? Avec un
                <b>risque d’erreur ou d’oubli</b> ?
                <br />
                Votre site web ou votre intranet conçu avec des outils comme Wix
                ou Wordpress n’est plus adapté à vos besoins ?
                <b
                  >Vous devez vous adapter à votre logiciel alors qu’il devrait
                  s’adapter à votre vous et votre processus ?</b
                >
              </base-text>

              <base-text>
                Nous réalisons le développement d’un
                <b
                  >logiciel ou site web sur-mesure, de qualité, adapté à vos
                  besoins et contraintes</b
                >, que vous pourrez utiliser aussi bien sur votre cellulaire,
                tablette ou ordinateur.
              </base-text>

              <base-text>
                Nous fonctionnons avec une <b>approche itérative</b> (<a
                  href="https://fr.wikipedia.org/wiki/M%C3%A9thode_agile"
                  target="_blank"
                  >pratiques agiles</a
                >) pour concevoir votre produit en intégrant vos commentaires
                régulièrement.
              </base-text>
              <base-text>
                Concrètement, avant de commencer à écrire toute ligne de code,
                nous avons besoin d'au moins une première rencontre pour bien
                <b>identifier votre contexte et cadrer votre besoin</b>. Une
                fois la rencontre effectuée, nous pourrons vous faire une
                <b
                  >proposition commerciale adaptée à votre problématique et à
                  votre budget</b
                >.
                <base-text> </base-text>
                Tout le long du mandat, des <b>rencontres régulières</b> sont
                planifiées (par exemple aux deux semaines) afin de présenter
                l'avancement du travail, le restant à faire et les potentielles
                difficultés rencontrées. Dépendant des résultats et de votre
                contexte, la portée du mandat peut être ajustée afin qu'il soit
                <b>toujours adapté à votre réalité</b>.
              </base-text>

              <base-text>
                <b>La qualité du logiciel est notre priorité</b>. Nous utilisons
                pour cela des outils et pratiques de code à l’état de l’art,
                afin de produire un code robuste, fiable et évolutif sur le long
                terme. L'objectif est que le logiciel ou site web puisse vous
                accompagner sur plusieurs années,
                <b>évoluer et s'adapter en même temps que votre compagnie</b>,
                sans avoir à faire table rase au bout de quelques années.
              </base-text>

              <base-text>
                Nous pouvons déployer le logiciel ou héberger le site web sur
                des infrastructures infonuagiques, ici, <b>au Québec</b>, afin
                d’être au plus proche géographiquement de nos clients et de
                <b>faire fonctionner l’industrie locale</b>.
              </base-text>

              <base-text>
                En bref, notre mission :
                <b
                  >concevoir des logiciels de qualité qui répondent à vos
                  besoins, et qui soient évolutifs sur plusieurs années</b
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
      title: 'Réalisation et hébergement | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous pouvons concevoir un logiciel ou créer un site web sur-mesure, de qualité, adapté à vos besoins et contraintes',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://clweb-charlevoix.ca/services/realisation-et-hebergement/',
        },
      ],
    }
  },
}
</script>
