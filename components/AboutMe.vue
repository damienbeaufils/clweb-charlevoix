<template>
  <section id="a-propos" class="overflow-hidden">
    <v-row class="white" no-gutters>
      <v-col class="pa-5" cols="12" lg="6">
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text mb-10 mb-lg-15" tag="h2">
          Pourquoi collaborer avec nous ?
        </base-heading>

        <base-text class="mb-5">
          Nous sommes des
          <b>experts en développement logiciel depuis plus de 15 ans</b>, et
          nous avons à cœur de concevoir des produits sur-mesure, qui s’adaptent
          à vos besoins, et où la qualité est un critère non négociable.
        </base-text>
        <base-text class="mb-5">
          De plus, nous privilégions les
          <b>outils et infrastructures locales</b> pour l’hébergement de vos
          produits, afin de <b>contribuer à l’économie québecoise</b>.
        </base-text>
        <base-text class="mb-5">
          Collaborer avec nous, c’est aussi établir une
          <b>relation de confiance et de co-construction</b> qui va au-delà de
          l’aspect contractuel.
        </base-text>

        <div class="text-center">
          <base-btn class="mt-5 mb-10 text-h6 px-10 py-5" nuxt to="/equipe">
            Découvrez notre équipe
          </base-btn>
        </div>
      </v-col>

      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="require('@/static/img/home/aboutme.jpg')"
          class="fill-height"
          height="95vh"
        />
      </v-col>
    </v-row>
  </section>
</template>
