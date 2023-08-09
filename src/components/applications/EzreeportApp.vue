<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-card>
          <v-img
            :src="ezreeportScreenshotImg"
            class="ma-2 mx-auto"
            alt="ezreeport-png"
          />
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12">
            <a class="d-flex justify-center justify-lg-start logo mx-2" :href="ezreeportLink" target="_blank">
              <h1 class="mx-2">ezREEPORT</h1>
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("ezreeport") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn
              color="blue"
              :href="ezreeportLink"
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

import ezreeportScreenshotImg from '@/images/applications/ezreeport/ezreeport-screenshot.png';

const i18n = useI18n()

const ezreeportLink = ref('#');

</script>

<style scoped>
.logo {
  color: black;
  text-decoration: none;
}

.logo:hover {
  text-decoration:none;
  cursor:pointer;
}
</style>
