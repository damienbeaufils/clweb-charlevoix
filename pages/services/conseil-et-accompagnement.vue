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
                Conseil et accompagnement
              </base-heading>
              <base-subheading tag="h2">
                Pour vous conseiller dans la prise de décisions importantes et
                structurantes pour votre compagnie
              </base-subheading>
              <base-text>
                Vous devez
                <b>prendre une décision importante et structurante</b>
                concernant vos logiciels existants ou futurs, votre site web, le
                stockage de vos données ou encore votre système d’information
                dans son ensemble ?
              </base-text>
              <base-text>
                Nous pouvons vous accompagner dans un temps déterminé en
                réalisant une
                <b>analyse poussée de votre besoin et de vos contraintes</b>, et
                en vous <b>conseillant dans votre prise de décision</b>.
              </base-text>
              <base-text>
                Exemples de mandats de conseils :
                <ul>
                  <li>
                    Vous souhaitez
                    <b>faire évoluer drastiquement votre site web</b> et vous ne
                    savez pas s’il est mieux de modifier le site existant avec
                    ses contraintes ou s’il serait plus simple de concevoir un
                    tout nouveau site adapté à vos nouveaux besoins,
                  </li>
                  <li>
                    Vous stockez des outils et données dans votre compagnie et
                    vous hésitez à
                    <b
                      >prendre le virage de l’infonuagique pour réduire vos
                      coûts de structure</b
                    >,
                  </li>
                  <li>
                    Vous souhaitez
                    <b>rendre accessible sur cellulaire et tablette</b>
                    votre logiciel ou site web et vous voudriez connaitre la
                    faisabilité,
                  </li>
                  <li>
                    Vous souhaitez prendre le virage numérique et
                    <b
                      >avoir une clientèle virtuelle en plus de votre clientèle
                      physique</b
                    >
                    et vous ne savez pas par quel bout commencer,
                  </li>
                  <li>
                    Vous souhaitez savoir comment agréger ou consolider votre
                    présence en ligne, afin d'avoir un
                    <b>meilleur référencement sur les moteurs de recherche</b>
                    et de pouvoir
                    <b
                      >fournir une porte d'entrée unique et simple à vos
                      clients</b
                    >,
                  </li>
                  <li>
                    Vous stockez des données et vous voudriez vous assurer que
                    les
                    <b
                      >informations personnelles de vos clients sont bien
                      sécurisées</b
                    >
                    selon l'état de l'art,
                  </li>
                  <li>
                    Vous souhaitez analyser le <b>niveau de qualité</b> d’un
                    logiciel ou site web existant.
                  </li>
                </ul>
              </base-text>

              <base-text>
                Pour identifier correctement votre besoin, nous aurons besoin
                d'une première rencontre afin que vous nous exposiez vos
                problématiques et vos contraintes. Suite à cette rencontre, nous
                pourrons vous faire une
                <b
                  >proposition de mandat de conseil correspondant à votre budget
                  et votre réalité</b
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
      title: 'Conseil et accompagnement | Services | CLWeb Charlevoix',
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
