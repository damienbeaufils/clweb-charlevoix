<template>
  <section id="temoignages" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="
            require('@/static/img/home/charlesdeluvio-AT5vuPoi8vc-unsplash.jpg')
          "
          class="fill-height"
          height="95vh"
        />
      </v-col>

      <v-col class="primary text-center pa-5 white--text" cols="12" lg="6">
        <base-bubble-1
          class="hidden-lg-and-up"
          style="transform: rotate(180deg) translateX(0%)"
        />

        <base-heading tag="h2" class="mb-15 mt-lg-10 info--text">
          Ils nous ont fait confiance
        </base-heading>

        <base-subheading class="info--text" tag="div">
          Laurence Monari et Thomas Morat,<br />propriétaires de la Boulangerie
          Le Panivore Inc.
        </base-subheading>
        <div
          class="speech-bubble mt-10 mx-0 mx-md-15 mx-lg-0 pa-5 pt-0 secondary"
        >
          <div class="text-left quotation-mark">“</div>
          <div class="text-left font-italic text-body-1">
            La Boulangerie Le Panivore Inc. tient à remercier chaleureusement
            Damien Beaufils pour le site web qu’il nous a développé sur mesure.
            Les multiples fonctionnalités qu’il a intégrées suite à l’analyse de
            nos besoins nous ont permis de :
            <ul>
              <li>
                <b>Centraliser l’ensemble des commandes</b> dans une base de
                données accessible en tout temps par toute l’équipe,
              </li>
              <li>
                <b>Réduire</b> chaque jour
                <b>de 75 % le temps de planification</b> de la production,
              </li>
              <li>
                <b>Réduire de plus de 50 %</b> le temps nécessaire pour produire
                les factures mensuelles,
              </li>
              <li>
                <b>Réduire au minimum le risque d’erreurs</b> lors de la
                préparation des commandes,
              </li>
              <li>
                <b>Gagner en efficacité</b> lors de la cueillette des commandes
                en magasin.
              </li>
            </ul>
            <br />
            Nous vous recommandons grandement de faire appels aux services de
            Damien Beaufils ; sa rigueur, ses analyses pointues et ses multiples
            compétences techniques vous permettront de faire un grand pas en
            avant.
          </div>
          <div class="text-right quotation-mark">”</div>

          <v-img
            max-width="200px"
            :src="require('@/static/img/home/logo-panivore.png')"
            class="mx-auto mb-3 logo"
          />
        </div>
        <div class="info--text font-italic mt-5">
          Références détaillées disponibles sur demande
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.speech-bubble {
  position: relative;
  background: #69a1bb;
  border-radius: 0.4em;
  line-height: 1.75rem;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-bottom-color: #69a1bb;
  border-top: 0;
  border-left: 0;
  margin-left: -15px;
  margin-top: -30px;
}

.quotation-mark {
  font-size: 6rem;
  height: 4rem;
  line-height: normal;
}

.logo {
  margin-top: -2rem;
}
</style>
