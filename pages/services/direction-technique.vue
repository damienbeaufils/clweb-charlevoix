<template>
  <v-container fluid class="pa-5">
    <article class="overflow-hidden">
      <v-row justify="center">
        <v-col cols="12" md="10" xl="8">
          <base-heading class="text-center">
            <span v-html="$t('services.cto.title')"></span
          ></base-heading>

          <section>
            <v-row justify="center">
              <v-col cols="12" md="8" xl="6">
                <v-card color="secondary" class="white--text">
                  <v-card-title class="pb-2">
                    <span v-html="$t('services.cto.toc-header')"></span>
                  </v-card-title>
                  <v-card-text class="white--text">
                    <ul>
                      <li
                        v-for="(n, index) in $t(`services.cto.sections`).length"
                        :key="index"
                      >
                        <a :href="`#section${n}`"
                          ><span
                            v-html="$t(`services.cto.sections[${index}].title`)"
                          ></span
                        ></a>
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <section
            v-for="(sectionNumber, sectionIndex) in $t(`services.cto.sections`)
              .length"
            :id="`section${sectionNumber}`"
            :key="sectionIndex"
          >
            <base-subheading class="secondary--text"
              ><span
                v-html="$t(`services.cto.sections[${sectionIndex}].title`)"
              ></span
            ></base-subheading>

            <p
              v-for="(paragraphNumber, paragraphIndex) in $t(
                `services.cto.sections[${sectionIndex}].paragraphs`
              ).length"
              :key="paragraphIndex"
            >
              <span
                v-html="
                  $t(
                    `services.cto.sections[${sectionIndex}].paragraphs[${paragraphIndex}]`
                  )
                "
              ></span>
            </p>

            <ul v-if="$te(`services.cto.sections[${sectionIndex}].items`)">
              <li
                v-for="(listItemNumber, listItemIndex) in $t(
                  `services.cto.sections[${sectionIndex}].items`
                ).length"
                :key="listItemIndex"
              >
                <span
                  v-html="
                    $t(
                      `services.cto.sections[${sectionIndex}].items[${listItemIndex}]`
                    )
                  "
                ></span>
              </li>
            </ul>

            <v-row
              v-if="$te(`services.cto.sections[${sectionIndex}].emphasis`)"
              justify="center"
            >
              <v-col cols="12" md="10">
                <v-card color="secondary" class="rounded-xl">
                  <v-card-text class="text-center white--text text-h6 pa-5">
                    <span
                      v-html="
                        $t(`services.cto.sections[${sectionIndex}].emphasis`)
                      "
                    ></span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row
              v-if="$te(`services.cto.sections[${sectionIndex}].image`)"
              justify="center"
              ><v-col cols="12" sm="8" md="6">
                <v-img
                  :src="
                    require('@/static/img/services/' +
                      $t(`services.cto.sections[${sectionIndex}].image`))
                  "
                  max-height="500px"
                />
              </v-col>
            </v-row>
          </section>

          <section>
            <div class="text-center contact-button">
              <base-btn
                nuxt
                :to="localePath('/#contact')"
                class="mt-5 mb-10 pa-10 text-body-1 text-md-h6 font-weight-bold"
              >
                <span v-html="$t('services.cto.contact-us')"></span>
              </base-btn>
            </div>

            <p class="text-h5 mt-10 text-center">
              <span v-html="$t('services.cto.other-services')"></span>
            </p>
            <v-row>
              <v-col
                v-for="(service, i) in otherServices"
                :key="i"
                class="text-center mb-3"
                md="4"
                cols="12"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    :to="service.href"
                    :elevation="hover ? 12 : 0"
                    class="rounded-xl"
                    color="secondary"
                  >
                    <v-card-text>
                      <v-avatar
                        class="elevation-6 mb-2 rounded"
                        color="primary"
                        size="64"
                        tile
                      >
                        <v-icon size="52" v-text="service.icon" />
                      </v-avatar>

                      <base-text class="info--text service-details white--text">
                        <div class="mb-2 font-weight-bold">
                          <span v-html="service.name"></span>
                        </div>
                        <div class="font-italic text-subtitle-1">
                          <span v-html="service.blurb"></span>
                        </div>
                      </base-text>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </section>
        </v-col>
      </v-row>
    </article>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('services.cto.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('services.cto.meta.description'),
        },
      ],
    }
  },
  computed: {
    otherServices() {
      return [
        {
          name: this.$t('home.services.consulting.title'),
          icon: 'mdi-lightbulb-on',
          blurb: this.$t('home.services.consulting.description'),
          href: this.localePath('/services/conseil-et-accompagnement/'),
        },
        {
          name: this.$t('home.services.delivery.title'),
          icon: 'mdi-progress-wrench',
          blurb: this.$t('home.services.delivery.description'),
          href: this.localePath('/services/realisation-et-hebergement/'),
        },
        {
          name: this.$t('home.services.coaching.title'),
          icon: 'mdi-account-multiple-check',
          blurb: this.$t('home.services.coaching.description'),
          href: this.localePath('/services/coaching-et-formation/'),
        },
      ]
    },
  },
}
</script>

<style scoped lang="scss">
section {
  margin-top: 3rem;
}

.v-card__text {
  li {
    line-height: 1.75rem;
    font-size: 1.1rem;
    a {
      color: unset;
    }
  }
}

.contact-button span {
  line-height: 1.75rem;
}
</style>
