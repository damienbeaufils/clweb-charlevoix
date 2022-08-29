<template>
  <v-container fluid class="pa-5">
    <article class="overflow-hidden">
      <v-row justify="center">
        <v-col cols="12" md="10" xl="8">
          <base-heading class="text-center">
            <span v-html="$t(`${i18nKeyPrefix}.title`)"></span
          ></base-heading>

          <section>
            <v-row justify="center">
              <v-col cols="12" md="8" xl="6">
                <v-card color="secondary" class="white--text">
                  <v-card-title class="pb-2">
                    <span v-html="$t(`services.toc-header`)"></span>
                  </v-card-title>
                  <v-card-text class="white--text">
                    <ul>
                      <li
                        v-for="(n, index) in $t(`${i18nKeyPrefix}.sections`)
                          .length"
                        :key="index"
                      >
                        <a :href="`#section${n}`"
                          ><span
                            v-html="
                              $t(`${i18nKeyPrefix}.sections[${index}].title`)
                            "
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
            v-for="(sectionNumber, sectionIndex) in $t(
              `${i18nKeyPrefix}.sections`
            ).length"
            :id="`section${sectionNumber}`"
            :key="sectionIndex"
          >
            <base-subheading class="secondary--text"
              ><span
                v-html="$t(`${i18nKeyPrefix}.sections[${sectionIndex}].title`)"
              ></span
            ></base-subheading>

            <p
              v-for="(paragraphNumber, paragraphIndex) in $t(
                `${i18nKeyPrefix}.sections[${sectionIndex}].paragraphs`
              ).length"
              :key="paragraphIndex"
            >
              <span
                v-html="
                  $t(
                    `${i18nKeyPrefix}.sections[${sectionIndex}].paragraphs[${paragraphIndex}]`
                  )
                "
              ></span>
            </p>

            <ul v-if="$te(`${i18nKeyPrefix}.sections[${sectionIndex}].items`)">
              <li
                v-for="(listItemNumber, listItemIndex) in $t(
                  `${i18nKeyPrefix}.sections[${sectionIndex}].items`
                ).length"
                :key="listItemIndex"
              >
                <span
                  v-html="
                    $t(
                      `${i18nKeyPrefix}.sections[${sectionIndex}].items[${listItemIndex}]`
                    )
                  "
                ></span>
              </li>
            </ul>

            <v-row
              v-if="$te(`${i18nKeyPrefix}.sections[${sectionIndex}].emphasis`)"
              justify="center"
            >
              <v-col cols="12" md="10">
                <v-card color="secondary" class="rounded-xl">
                  <v-card-text class="text-center white--text text-h6 pa-5">
                    <span
                      v-html="
                        $t(
                          `${i18nKeyPrefix}.sections[${sectionIndex}].emphasis`
                        )
                      "
                    ></span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row
              v-if="$te(`${i18nKeyPrefix}.sections[${sectionIndex}].image`)"
              justify="center"
              ><v-col cols="12" sm="8" md="6">
                <v-img
                  :src="
                    require('@/static/img/services/' +
                      $t(`${i18nKeyPrefix}.sections[${sectionIndex}].image`))
                  "
                  max-height="500px"
                />
              </v-col>
            </v-row>

            <div
              v-if="
                $te(`${i18nKeyPrefix}.sections[${sectionIndex}].references`)
              "
              class="mt-10"
            >
              <p>
                <span
                  v-html="
                    $t(
                      `${i18nKeyPrefix}.sections[${sectionIndex}].references.intro`
                    )
                  "
                ></span>
              </p>
              <v-row justify="center" align="center">
                <v-col
                  v-for="(logoNumber, logoIndex) in $t(
                    `${i18nKeyPrefix}.sections[${sectionIndex}].references.logos`
                  ).length"
                  :key="logoIndex"
                  class="mb-5"
                  cols="6"
                  sm="3"
                >
                  <v-card flat>
                    <v-img
                      :src="
                        require('@/static/img/services/logos/' +
                          $t(
                            `${i18nKeyPrefix}.sections[${sectionIndex}].references.logos[${logoIndex}].src`
                          ))
                      "
                      :alt="
                        $t(
                          `${i18nKeyPrefix}.sections[${sectionIndex}].references.logos[${logoIndex}].alt`
                        )
                      "
                      max-height="75px"
                      contain
                    />
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </section>

          <section>
            <div class="text-center contact-button">
              <base-btn
                nuxt
                :to="localePath('/#contact')"
                class="mt-5 mb-10 pa-10 text-body-1 text-md-h6 font-weight-bold"
              >
                <span v-html="$t('services.contact-us')"></span>
              </base-btn>
            </div>

            <p class="text-h5 mt-10 text-center">
              <span v-html="$t('services.other-services')"></span>
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

                      <base-text class="info--text service-details">
                        <div class="mb-2 font-weight-bold white--text">
                          <span v-html="service.name"></span>
                        </div>
                        <div class="font-italic text-subtitle-1 white--text">
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
  name: 'DetailedService',
  props: {
    i18nSubKey: {
      type: String,
      default: 'unknown',
    },
    otherServices: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    i18nKeyPrefix() {
      return `services.${this.i18nSubKey}`
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
  }
}

.contact-button span {
  line-height: 1.75rem;
}

ul + .row {
  margin-top: 1rem;
}

::v-deep a {
  color: unset;
}
</style>
