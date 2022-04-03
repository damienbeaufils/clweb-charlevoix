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
                Directeur Technique à la demande (<i>CTO-as-a-Service</i>)
              </base-heading>
              <base-subheading tag="h2">
                Pour occuper le rôle de Directeur Technique dans votre
                compagnie, à raison de quelques heures par semaine ou par mois
              </base-subheading>
              <base-text>
                Vous dirigez une compagnie et vous avez besoin d’une personne
                pour vous aider à
                <b
                  >prendre des décisions relatives aux Technologies de
                  l'Information (TI)</b
                >
                ? Vous n’avez pas le budget pour embaucher une personne qui
                aurait le rôle de directeur technique permanent à temps plein ?
              </base-text>

              <base-text>
                Qu’il s’agisse de quelques heures par semaine ou simplement
                d'une journée par mois, nous pouvons vous accompagner en
                occupant le rôle de directeur technique à temps partiel afin de
                <b>vous aider à piloter les ressources TI de votre compagnie</b
                >.
              </base-text>

              <base-text>
                Nous pouvons par exemple vous accompagner dans :
                <ul>
                  <li>le <b>pilotage de votre budget</b> TI annuel,</li>
                  <li>la <b>gestion du risque</b> et de vos contraintes,</li>
                  <li>
                    la <b>prise de décisions</b> structurelles pour votre
                    compagnie,
                  </li>
                  <li>l'implantation de nouveaux <b>processus TI</b>,</li>
                  <li>
                    la construction d'un parcours de
                    <b>formation TI</b> interne,
                  </li>
                  <li>
                    la construction d'une <b>politique de sécurité</b> de votre
                    système d'information,
                  </li>
                  <li>
                    le stockage et la
                    <b>gestion de vos données</b> d'entreprise,
                  </li>
                  <li>le choix d'une <b>infrastructure infonuagique</b>,</li>
                  <li>
                    le <b>choix d'outils ou de logiciels</b> utilisés par vos
                    collaborateurs,
                  </li>
                  <li>
                    le <b>recrutement</b> d'un Directeur Technique, de
                    développeurs ou de toute autre personne rattachée aux TI,
                  </li>
                  <li>
                    la <b>réalisation d'appels d'offres</b> pour soumettre des
                    demandes sur des plateformes telles que SEAO,
                  </li>
                  <li>
                    le <b>choix de prestataires externes</b> qui répondraient à
                    vos appels d'offres,
                  </li>
                  <li>la gestion de la <b>dette technique</b>.</li>
                </ul>
              </base-text>

              <base-text>
                Pour identifier correctement votre besoin, nous aurons besoin
                d'une première rencontre afin que vous nous exposiez vos
                problématiques et vos contraintes. Suite à cette rencontre, nous
                pourrons vous faire une
                <b
                  >proposition d'accompagnement correspondant à votre budget et
                  votre réalité</b
                >.
              </base-text>
              <base-text>
                Une fois la proposition acceptée, l'accompagnement peut aussi
                bien se faire à distance avec des outils collaboratifs virtuels,
                que sur place dans les locaux de votre compagnie.
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
      title: 'Direction Technique | Services | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous pouvons occuper le rôle de Directeur Technique dans votre compagnie, à raison de quelques heures par semaine ou par mois (CTO-as-a-Service)',
        },
      ],
    }
  },
}
</script>
