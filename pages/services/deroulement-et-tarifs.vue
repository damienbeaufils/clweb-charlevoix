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
                Déroulement d'une prestation et tarifs
              </base-heading>
              <base-text>
                Chaque client a ses propres besoins et problématiques dépendant
                de son contexte, c'est pourquoi chaque prestation est différente
                d'un client à l'autre.
              </base-text>
              <base-text>
                Néanmoins, dans les grandes lignes, le déroulement d'une
                prestation peut se présenter comme ceci :
                <ul>
                  <li>
                    Une <b>première rencontre</b> pour que vous nous présentiez
                    votre contexte et votre besoin ;
                  </li>
                  <li>
                    Suite à cette rencontre, nous ferons une
                    <b
                      >proposition commerciale adaptée à votre problématique et
                      à votre budget</b
                    >
                    ;
                  </li>
                  <li>
                    Une fois la proposition acceptée, nous pourrons commencer le
                    travail ;
                  </li>
                  <li>
                    La facturation se fait usuellement en
                    <b>temps et matériel</b> (taux horaire) ;
                  </li>
                  <li>
                    Tout le long du mandat, des
                    <b>rencontres régulières</b> sont planifiées (par exemple
                    aux deux semaines) afin de présenter l'avancement du
                    travail, le restant à faire et les potentielles difficultés
                    rencontrées ;
                  </li>
                  <li>
                    Dépendant des résultats et de votre contexte, la
                    <b>portée du mandat peut être ajustée</b> afin qu'il soit
                    <b>toujours adapté à votre réalité</b>.
                  </li>
                </ul>
              </base-text>

              <base-text>
                Chaque mandat étant unique, les tarifs peuvent varier d'un
                mandat à l'autre. Néanmoins, les principaux paramètres qui vont
                avoir un impact sur les tarifs sont :
                <ul>
                  <li>
                    <nuxt-link to="/#services">Le type de prestation</nuxt-link>
                    ;
                  </li>
                  <li>La durée du mandat ;</li>
                  <li>Les déplacements.</li>
                </ul>
              </base-text>

              <base-text>
                Nous proposons également des <b>tarifs préférentiels</b> si vous
                êtes une <b>compagnie de la région de Charlevoix</b>, ou si vous
                êtes enregistrés en tant qu'<b>organisme de bienfaisance</b>. En
                effet, nous croyons fermement à l'approche locale pour
                développer l'activité commerciale dans nos régions.
              </base-text>

              <base-text>
                <b>Vous avez un besoin ou une idée de projet</b> et vous ne
                savez pas combien cela peut vous coûter ? Vous pouvez nous
                contacter et nous ferons une première rencontre afin de
                <b>répondre à vos questions</b> et
                <b
                  >vous donner une meilleure idée de la faisabilité de votre
                  projet</b
                >
                selon votre budget. <br />Vous pouvez aussi nous contacter pour
                simplement
                <b
                  >savoir ce qu'il est possible de faire avec votre budget
                  actuel</b
                >. <br />Dans tous les cas,
                <b
                  >nous nous rendrons disponibles pour répondre à vos questions
                  et vous guider dans vos choix</b
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
          href: 'https://clweb-charlevoix.ca/services/deroulement-et-tarifs',
        },
      ],
    }
  },
}
</script>
