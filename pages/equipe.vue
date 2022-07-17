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
              <base-heading class="mt-10 mb-5"
                ><span v-html="$t('team.heading')"></span
              ></base-heading>
              <base-subheading
                ><span v-html="$t('team.subheading')"></span
              ></base-subheading>
              <base-text>
                <span v-html="$t('team.paragraph[0]')"></span>
              </base-text>
              <base-text>
                <span v-html="$t('team.paragraph[1]')"></span>
              </base-text>
              <base-text>
                <span v-html="$t('team.paragraph[2]')"></span>
              </base-text>
              <base-text>
                <span v-html="$t('team.paragraph[3]')"></span>
              </base-text>
              <base-text>
                <span v-html="$t('team.paragraph[4]')"></span>
              </base-text>

              <div class="text-center">
                <iframe
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/-Ok_CPuKzAQ"
                  title="La couverture de code, un indicateur melon d'eau ? - Web À Québec 2022 (WAQ22)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <base-text>
                  <a
                    href="https://damienbeaufils.dev/publications/"
                    target="_blank"
                    class="text-subtitle-1"
                    ><span v-html="$t('team.publications')"></span
                  ></a>
                </base-text>
              </div>

              <base-text>
                <span v-html="$t('team.paragraph[5]')"></span>
              </base-text>
              <base-text>
                <span v-html="$t('team.paragraph[6]')"></span>
              </base-text>
              <base-text>
                <span v-html="$t('team.paragraph[7]')"></span>
              </base-text>

              <div class="text-center">
                <base-btn
                  nuxt
                  :to="localePath('/#contact')"
                  class="mt-5 mb-10 text-h6 px-10 py-10"
                >
                  <span v-html="$t('team.more')"></span>
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
      title: this.$t('team.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('team.meta.description'),
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

iframe {
  max-width: 100%;
  max-height: 50vw;
}
</style>
