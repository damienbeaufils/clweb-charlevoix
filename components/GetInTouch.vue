<template>
  <section id="contact" class="overflow-hidden">
    <v-row class="info white--text" no-gutters>
      <v-col class="hidden-md-and-down" lg="6">
        <v-img
          :src="require('@/static/img/home/contact.jpg')"
          class="fill-height"
          height="100%"
        />
      </v-col>

      <v-col class="pa-5" cols="12" lg="6">
        <base-bubble-1 style="transform: rotate(180deg) translateX(-40%)" />

        <base-heading class="mb-5" tag="h2"
          ><span v-html="$t('home.contact.heading')"></span
        ></base-heading>

        <base-subheading class="mt-10 mb-10" tag="p">
          <span v-html="$t('home.contact.subheading')"></span>
          <base-btn href="mailto:contact@clweb-charlevoix.ca">
            contact@clweb-charlevoix.ca
          </base-btn>
        </base-subheading>

        <base-subheading class="mb-5" tag="p">
          <span v-html="$t('home.contact.subheading2')"></span>
        </base-subheading>
        <v-form
          ref="form"
          color="transparent"
          max-width="600"
          action="https://app.99inbound.com/api/e/PwofIKxa"
          method="POST"
          @submit.prevent="validateAndSubmit"
        >
          <v-text-field
            color="info"
            type="text"
            name="name"
            :label="$t('home.contact.form.name.label')"
            solo
            flat
            :rules="[
              (v) => !!v || $t('home.contact.form.name.validation.empty'),
            ]"
          />

          <v-text-field
            color="info"
            :label="$t('home.contact.form.email.label')"
            solo
            flat
            type="email"
            name="email"
            :rules="[
              (v) => !!v || $t('home.contact.form.email.validation.empty'),
              (v) =>
                emailRegex.test(v) ||
                $t('home.contact.form.email.validation.invalid'),
            ]"
          />

          <v-textarea
            color="info"
            :label="$t('home.contact.form.message.label')"
            name="message"
            solo
            flat
            :rules="[
              (v) => !!v || $t('home.contact.form.message.validation.empty'),
            ]"
          />

          <base-btn type="submit"> Envoyer </base-btn>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'GetInTouch',
  data: () => ({
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
  }),
  methods: {
    validateAndSubmit() {
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit()
      }
    },
  },
}
</script>
