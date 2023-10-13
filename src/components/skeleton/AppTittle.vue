<template>
  <v-container fluid class="px-0 py-4" :style="style">
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-img style="min-width: 300px; max-width: 350px" :src="readmetricsImg"
          class="ma-2 mx-auto" alt="readmetric-logo" />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <a :href="ezmesureLink" target="_blank">
          <v-img style="max-width: 345px;" :src="ezmesureImg"
            alt="ezpaarse-logo" class="mx-auto" />
        </a>
      </v-col>
      <v-col cols="12" md="4">
        <a :href="ezpaarseLink" target="_blank">
          <v-img style="max-width: 300px;" :src="ezpaarseImg"
            alt="ezmesure-logo" class="mx-auto" />
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" :offset="mobileCentered">
        <h1 class="my-16 text-center title-page">
          {{ i18n.t("title") }}
        </h1>
      </v-col>
      <v-col cols="12" md="8" :offset="mobileCentered">
        <h2 class="my-16 grey--text text--darken-2 text-center subtitle-page">
          {{ i18n.t("subtitle") }}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import readmetricsImg from '@/images/applications/readmetrics/readmetrics-text.png';
import ezmesureImg from '@/images/applications/ezmesure/ezmesure-logo-text.png';
import ezpaarseImg from '@/images/applications/ezpaarse/ezpaarse-logo-text.svg';
import dashboardImg from '@/images/dashboard.jpg';

const i18n = useI18n()

const ezpaarseLink = 'http://demo.ezpaarse.org/'
const ezmesureLink = 'https://ezmesure.couperin.org/'

const style = computed(() => {
  return `background-image: url('${dashboardImg}'; background-size: initial; background-position-x: center; background-position-y: top; background-repeat: repeat;`;
})

const display = useDisplay()

const mobileCentered = computed(() => {

  switch (display.name.value) {
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
})

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
  font-weight: normal;
  font-size: 1em;

  @media only screen and (min-width: 600px) {
    font-size: 1.2em;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2em;
  }
}
</style>
