<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12">
            <a class="d-flex justify-center justify-lg-start" :href="ezcounterLink" target="_blank">
              <v-img
                style="max-width: 350px"
                :src="ezcounterScreenshotImg"
                class="mx-2"
                alt="ezcounter-img"
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("ezcounter") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn
              color="blue"
              :href="ezcounterLink"
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
        <v-img
          style="max-width: 350px"
          :src="ezcounterTextImg"
          class="ma-2 mx-auto"
          alt="counter-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

import ezcounterScreenshotImg from '@/images/applications/ezcounter/ezcounter-text.png';
import ezcounterTextImg from '@/images/applications/ezcounter/counter-text.png';

const i18n = useI18n()

const ezcounterLink = ref('https://blog.ezpaarse.org/2022/02/tutoriels-ezcounter-bonnes-pratiques-pour-la-saisie-des-identifiants-sushi/');

</script>