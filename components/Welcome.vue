<template>
  <section id="accueil" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="
            require('@/static/img/home/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg')
          "
          class="fill-height"
          height="90vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        lg="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <v-row class="info--text" align="center" justify="center">
          <v-col cols="10">
            <base-heading class="mt-15">
              Fournir des <b>solutions simples</b> à vos problèmes complexes
            </base-heading>
            <base-subheading tag="h2" class="mt-10 mb-10">
              Réalisation de logiciels, d'applications web et de sites internet
              <b>sur-mesure</b>, au cœur de Charlevoix
            </base-subheading>
            <base-text>
              Vous avez des contraintes ou des besoins spécifiques ?
            </base-text>
            <base-text>
              Les outils tels que Wix, Wordpress ou autres ne répondent pas à
              vos attentes ?
            </base-text>
            <base-text>
              Vous cherchez un partenaire dans votre transition vers le
              numérique afin de gagner en visibilité, en efficacité et en
              qualité de vie professionnelle ?
            </base-text>
            <div class="text-center">
              <base-btn
                nuxt
                to="/#contact"
                class="mt-5 mb-10 text-h6 px-10 py-5"
              >
                Contactez-nous !
              </base-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
