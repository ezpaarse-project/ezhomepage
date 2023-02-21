<template>
  <v-container >
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" :align="alignCentered">
            <v-img
              style="max-width: 450px"
              :src="require('../../../public/images/ezcounter-text.png')"
              class="ma-2"
              alt="ezcounter-img"
            />
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("ezcounter") }}
            </p>
          </v-col>
          <v-col cols="12">
            <a class="mx-2 text text-center text-justify" :href="link" v-text="$t('learnMore')" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          style="max-width: 350px"
          :src="require('../../../public/images/counter-text.png')"
          class="ma-2 mx-auto"
          alt="counter-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'https://blog.ezpaarse.org/2022/02/tutoriels-ezcounter-bonnes-pratiques-pour-la-saisie-des-identifiants-sushi/',
  }),
  computed: {
    alignCentered() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'center';
        case 'sm':
          return 'center';
        case 'md':
          return '';
        case 'lg':
          return '';
        case 'xl':
          return '';
        default:
          return '';
      }
    },
  },
};
</script>
