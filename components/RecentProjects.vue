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

        <base-heading tag="h2" class="mb-10 mb-lg-15 mt-lg-10 info--text">
          <span v-html="$t('home.recent-projects.heading')"></span>
        </base-heading>

        <base-subheading class="info--text" tag="div">
          <span v-html="$t('home.recent-projects.subheading')"></span>
        </base-subheading>
        <div
          class="speech-bubble mt-10 mx-0 mx-md-15 mx-lg-0 pa-5 pt-0 secondary"
        >
          <div class="text-left quotation-mark">“</div>
          <div class="text-left font-italic text-body-1">
            <span v-html="$t('home.recent-projects.quote.intro')"></span>
            <ul>
              <li>
                <span v-html="$t('home.recent-projects.quote.items[0]')"></span>
              </li>
              <li>
                <span v-html="$t('home.recent-projects.quote.items[1]')"></span>
              </li>
              <li>
                <span v-html="$t('home.recent-projects.quote.items[2]')"></span>
              </li>
              <li>
                <span v-html="$t('home.recent-projects.quote.items[3]')"></span>
              </li>
              <li>
                <span v-html="$t('home.recent-projects.quote.items[4]')"></span>
              </li>
            </ul>
            <br />
            <span v-html="$t('home.recent-projects.quote.outro')"></span>
          </div>
          <div class="text-right quotation-mark">”</div>

          <a href="https://www.lepanivore.com/commander" target="_blank">
            <v-img
              max-width="200px"
              :src="require('@/static/img/home/logo-panivore.png')"
              class="mx-auto mb-3 logo"
            />
          </a>
        </div>
        <div class="info--text font-italic mt-5">
          <span v-html="$t('home.recent-projects.references')"></span>
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
