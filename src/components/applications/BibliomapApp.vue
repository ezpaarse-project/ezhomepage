<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-row width="100%" justify="center">
          <video :src="bibliomapVideo" type="video/webm" class="ma-2 mx-auto"
            style="max-width: 100%" muted loop autoplay />
          <p class="ma-2">{{ i18n.t("bibliomapTitle") }}</p>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12">
            <a class="d-flex justify-center justify-lg-start logo mx-2" :href="bibliomapLink" target="_blank">
              <v-img
                style="max-width: 350px"
                v-once
                :src="bibliomapTextImg"
                alt="bibliomap-img"
                class="mx-4"
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("bibliomap") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn 
              color="blue" 
              :href="bibliomapLink" 
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

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import bibliomapVideo from '@/videos/applications/bibliomap/bibliomap-demo.webm';
import bibliomapTextImg from '@/images/applications/bibliomap/bibliomap-text.png';

const i18n = useI18n()

const bibliomapLink = computed(() => {
  if (i18n.locale === 'fr') {
    return 'https://bibliomap.inist.fr/';
  }
  return 'https://bibliomap.inist.fr?lang=en';
});

</script>
