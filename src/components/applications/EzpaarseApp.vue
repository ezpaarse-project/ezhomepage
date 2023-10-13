<template>
  <v-container>
    <v-row class="my-8" justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12">
            <a d-flex class="d-flex justify-center justify-lg-start" :href="ezpaarseLink" target="_blank">
              <v-img
                style="max-width: 350px"
                v-once
                :src="ezpaarseTextImg"
                alt="ezpaarse-img"
                class="mx-4"
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("ezpaarse.text1") }}
            </p>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("ezpaarse.text2") }}
            </p>
          </v-col>
          <v-col>
            <v-row>
              <v-btn
                color="blue" 
                class="mx-2"
                :href="ezpaarseDocLink"
                variant="text"
                target="_blank"
                append-icon="mdi-file-document-multiple"
              >
                {{ i18n.t("documentation") }}
              </v-btn>
              <v-spacer />
              <v-btn
                color="blue"
                :href="ezpaarseLink"
                variant="text"
                target="_blank"
                append-icon="mdi-arrow-right-thin"
            >
              {{ i18n.t("learnMore") }}
            </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <v-img
            :src="ezpaarseScreenshotImg"
            class="ma-2 mx-auto"
            alt="ezpaarse-screenshot"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

import ezpaarseScreenshotImg from '@/images/applications/ezpaarse/ezpaarse-screenshot.png';
import ezpaarseTextImg from '@/images/applications/ezpaarse/ezpaarse-text.png';

const i18n = useI18n()

const ezpaarseLink = ref('http://demo.ezpaarse.org/');
const ezpaarseDocLink = ref('https://ezpaarse-project.github.io/ezpaarse/');

</script>


<style scoped>
video {
  border: none;
}
</style>
