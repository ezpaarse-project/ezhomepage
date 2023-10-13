<template>
  <v-container >
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-card>
          <v-img
            :src="ezmesureScreenshotImg"
            class="ma-2 mx-auto"
            alt="ezpaarse-screenshot"
          />
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12">
             <a class="d-flex justify-center justify-lg-start" :href="ezmesureLink" target="_blank">
              <v-img
                style="max-width: 350px"
                :src="ezmesureTextImg"
                alt="ezmesure-img"
              />
            </a>
          </v-col>
          <v-col cols="12" >
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("ezmesure") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn
              color="blue"
              :href="ezmesureLink"
              variant="text"
              target="_blank"
              append-icon="mdi-arrow-right-thin"
            >
              {{ i18n.t("learnMore") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

import ezmesureScreenshotImg from '@/images/applications/ezmesure/ezmesure-screenshot.png';
import ezmesureTextImg from '@/images/applications/ezmesure/ezmesure-text.png';

const i18n = useI18n()

const ezmesureLink = ref('https://ezmesure.couperin.org/');

</script>
