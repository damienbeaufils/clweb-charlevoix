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
              <base-text>
                Vous avez dans votre compagnie une personne en charge du
                développement et de la maintenance logicielle, ou bien une
                équipe de développement complète, et vous souhaitez les
                <b>former aux pratiques de qualité</b> ?<br />Vous êtes
                vous-mêmes développeur ou développeuse et vous souhaitez
                progresser dans vos pratiques pour
                <b
                  >produire du code maintenable et évolutif sur le long terme</b
                >
                ?
              </base-text>
              <base-text>
                Nous pouvons <b>former et accompagner</b> aussi bien sur les
                pratiques de qualité des développements que sur des technologies
                spécifiques sur lesquelles nous sommes experts.<br />La
                <b>formation</b> peut se dérouler sur un ou plusieurs jours, en
                ligne ou bien sur place.<br />L'<b>accompagnement</b> se fait
                habituellement de manière dégressive : quelques jours par
                semaine au démarrage, puis une réduction progressive pour finir
                à quelques heures de coaching par semaine.<br />
                Notre objectif est bien que la ou
                <b>les personnes formées soient autonomes</b> et qu'il n'y ait
                plus besoin d'aucun accompagnement ni coaching une fois le
                mandat terminé.
              </base-text>
              <base-text>
                Nous pouvons également intervenir une matinée ou lors d'un
                <i>Lunch & Learn</i> pour animer des
                <b>présentations de sensibilisation</b> sur des sujets
                spécifiques tels que les dernières nouveautés d'une technologie
                ou bien sur des pratiques de développement logiciel telles que
                <i>Clean Code</i> ou bien l'éco-conception de services
                numériques. Ces sensilisations sont idéales pour "donner le
                goût" à vos équipes d'aller plus loin sur le sujet, notamment
                via une formation (car il n'y a rien de pire que d'aller à une
                formation contre son gré).
              </base-text>
              <base-text>
                Nous pouvons aussi intervenir auprès de vos équipes pour les
                aider à établir des <b>communautés de pratiques</b>, ce qui
                permettrait à vos collaborateurs de partager leurs connaissances
                et leurs intérêts, qu'ils soient techniques ou non, afin de
                <b>progresser collectivement</b>.
              </base-text>
              <base-text>
                N'hésitez pas à nous contacter pour nous présenter votre
                contexte et votre besoin, et nous pourrons vous présenter une
                <b>proposition adaptée à votre problématique et votre budget</b
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
      title: "Coaching & formation d'équipes | Services | CLWeb Charlevoix",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nous pouvons accompagner et former aux pratiques de qualité une ou plusieurs équipes de développement de votre compagnie',
        },
      ],
    }
  },
}
</script>
