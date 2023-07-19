<template>
  <v-container fluid class="px-0 py-4" :style="style">
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-img
          style="min-width: 300px; max-width: 350px"
          :src="require('../../../public/images/readmetrics-text.png')"
          class="ma-2 mx-auto"
          alt="readmetric-logo"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <a :href="ezpaarseLink" target="_blank">
          <v-img
            style="max-width: 300px;"
            :src="require('../../../public/images/ezpaarse-logo-text.svg')"
            alt="ezpaarse-logo"
            class="mx-auto"
          />
        </a>
      </v-col>
      <v-col cols="12" md="4">
        <a :href="ezmesureLink" target="_blank">
          <v-img
            style="max-width: 350px;"
            :src="require('../../../public/images/ezmesure-logo-text.png')"
            alt="ezmesure-logo"
            class="mx-auto"
          />
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" :offset="mobileCentered">
        <h1 class="my-16 text-center title-page">
          {{ $t("title") }}
        </h1>
      </v-col>
      <v-col cols="12" md="8" :offset="mobileCentered">
        <h2 class="my-16 grey--text text--darken-2 text-center subtitle-page">
          {{ $t("subtitle") }}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import dashboard from '../../../public/images/dashboard.jpg';

export default {
  data: () => ({
    ezpaarseLink: 'http://demo.ezpaarse.org/',
    ezmesureLink: 'https://ezmesure.couperin.org/',
  }),
  computed: {
    style() {
      return `background-image: url('${dashboard}'; background-size: initial; background-position-x: center; background-position-y: top; background-repeat: repeat;`;
    },
    mobileCentered() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return '0';
        case 'md':
        case 'lg':
        case 'xl':
          return '2';
        default:
          return '2';
      }
    },
  },
};
</script>

<style scoped>

h1 {
  font-family: oxygen;
}

.title-page {
  font-size: 2em;
    @media only screen and (min-width: 600px) {
        font-size: 2em;
    }
    @media only screen and (min-width: 1000px) {
        font-size: 2.5em;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 3em;
    }
}

.subtitle-page {
  font-size: 1.5em;
  font-weight: normal;
}
</style>
