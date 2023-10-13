<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12">
            <a  class="d-flex justify-center justify-lg-start" :href="analogistLink" target="_blank">
              <v-img
                style="max-width: 350px; height:100px"
                :src="analogistImg"
                alt="ezmesure-img"
                class="mx-4"
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("analogist") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn
              color="blue"
              :href="analogistLink"
              variant="text"
              target="_blank"
              append-icon="mdi-arrow-right-thin"
            >
              {{ i18n.t("learnMore") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <v-img
            :src="analogistScreenshotImg"
            class="ma-2 mx-auto"
            alt="analogist-img"
           />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import analogistScreenshotImg from '@/images/applications/analogist/analogist-screenshot.png';
import analogistImg from '@/images/applications/analogist/analogist-text.png';

const i18n = useI18n()

const analogistLink = computed(() => {
  if (i18n.locale === 'fr') {
    return 'http://analyses.ezpaarse.org';
  }
  return 'http://analyses.ezpaarse.org?lang=en';
});

</script>
