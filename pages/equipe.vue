<template>
  <v-container fluid class="pa-0">
    <section id="team" class="overflow-hidden">
      <v-row no-gutters>
        <v-col
          class="align-content-space-between layout wrap"
          cols="12"
          md="8"
          :pa-5="$vuetify.breakpoint.smAndDown"
        >
          <v-row align="center" justify="center">
            <v-col cols="10">
              <base-heading class="mt-10 mb-5"> Qui suis-je ? </base-heading>
              <base-subheading tag="h2"> Damien Beaufils </base-subheading>
              <base-text>
                Fort de
                <b>plus de 15 années d’expérience en développement logiciel</b>,
                je me suis lancé dans l’entrepreneuriat après avoir passé plus
                de la moitié de ma carrière en tant que consultant TI dans des
                compagnies de différents secteurs d’activité (banque, assurance,
                énergie, service public, médias, sports...) et de différentes
                tailles (de la petite compagnie à la multinationale).
              </base-text>

              <base-text>
                Lors de ma dernière expérience avant mon saut entrepreneurial,
                j'ai été <b>Directeur Technique</b> d'une compagnie de conseil
                en TI pendant plus de 3 ans, en parallèle de mon rôle de
                <b>développeur logiciel</b> et <b>consultant senior</b>.
              </base-text>

              <base-text>
                <b
                  >Concevoir des logiciels de qualité est ma passion, et j'aime
                  être fier du travail réalisé</b
                >. En plus de mes mandats, je passe beaucoup de temps à me
                former constamment pour rester à l’état de l’art de la
                technologie, ceci afin d’être en capacité de fournir les
                meilleures solutions pour répondre à vos différentes
                problématiques.
              </base-text>

              <base-text>
                Je suis expert dans les pratiques de qualité des développements,
                appelées aussi pratiques du mouvement
                <b><i>Software Craftsmanship</i></b> (des pratiques telles que
                <i>Clean Code</i>, <i>Refactoring</i>,
                <i>Test Driven Development</i>...) et
                <b
                  >je suis certifié sur plusieurs technologies ainsi que sur
                  l'éco-conception de service numérique (Éco-TIC)</b
                >.
              </base-text>

              <base-text>
                J'ai eu l'opportunité d'être conférencier dans des conférences
                techniques renommées telles que Devoxx France.
                <a
                  href="https://damienbeaufils.dev/publications/"
                  target="_blank"
                  >Cliquez ici pour consulter l'ensemble de mes publications.</a
                >
              </base-text>

              <base-text>
                En 2018, j'ai pris la décision d'émigrer de la France pour
                m'installer au Québec, à Montréal. Après de nombreuses
                pérégrinations dans les différentes régions du Québec, et ayant
                un fort attrait pour la campagne et la nature,
                <b>je suis tombé en amour avec la région de Charlevoix</b>,
                bordée d'un côté par le magnifique fleuve Saint-Laurent et de
                l'autre par la majestueuse chaîne de montagne des Laurentides.
              </base-text>

              <base-text>
                J'ai décidé de faire le grand move en 2022 en quittant Montréal
                pour m'installer dans la région de Charlevoix-Est, à Clermont.
                C'est alors que j'ai décidé de me lancer dans l'aventure
                entrepreunariale, pour
                <b
                  >mettre à profit mes compétences et mes expertises au service
                  des compagnies de la région</b
                >.
              </base-text>

              <base-text>
                Mes autres passions ? La randonnée pédestre dans la nature
                québecoise et la photographie de paysage.
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  to="/#contact"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  Pour en savoir plus, <br />contactez-moi !
                </base-btn>
              </div>

              <v-row class="mb-5">
                <v-col cols="4">
                  <v-img
                    :src="
                      require('@/static/img/team/vmware_spring_certification.png')
                    "
                    max-width="200px"
                    max-height="200px"
                    class="mx-auto"
                  />
                </v-col>
                <v-col cols="4">
                  <v-img
                    :src="require('@/static/img/team/ckad_certification.png')"
                    max-width="200px"
                    max-height="200px"
                    class="mx-auto"
                  />
                </v-col>
                <v-col cols="4">
                  <v-img
                    :src="
                      require('@/static/img/team/greenit_certification.png')
                    "
                    class="greenit rounded-xl mx-auto"
                    max-width="200px"
                    max-height="200px"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down" md="4">
          <v-img
            :src="require('@/static/img/team/damien_beaufils.jpg')"
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
      title: 'Damien Beaufils | Notre équipe | CLWeb Charlevoix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Experts en développement logiciel, nous avons à cœur de concevoir des produits sur-mesure, qui s’adaptent à vos besoins, et où la qualité est un critère non négociable',
        },
      ],
    }
  },
}
</script>

<style scoped>
.greenit {
  border: 1px solid #000;
}
</style>
