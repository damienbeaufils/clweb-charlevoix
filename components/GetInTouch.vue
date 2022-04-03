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

        <base-heading class="mb-5" tag="h2"> Contactez-nous </base-heading>

        <base-subheading class="mt-10 mb-10" tag="p">
          Envoyez-nous directement un courriel à notre adresse
          <base-btn href="mailto:contact@clweb-charlevoix.ca">
            contact@clweb-charlevoix.ca
          </base-btn>
        </base-subheading>

        <base-subheading class="mb-5" tag="p">
          Ou bien envoyez-nous un message par ce formulaire
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
            label="Votre nom"
            solo
            flat
            :rules="[(v) => !!v || 'Le nom est requis']"
          />

          <v-text-field
            color="info"
            label="Votre adresse électronique"
            solo
            flat
            type="email"
            name="email"
            :rules="[
              (v) => !!v || `L'adresse électronique est requise`,
              (v) =>
                emailRegex.test(v) ||
                `L'adresse électronique entrée n'est pas valide`,
            ]"
          />

          <v-textarea
            color="info"
            label="Votre message"
            name="message"
            solo
            flat
            :rules="[(v) => !!v || 'Le message est requis']"
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
