<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-card>
          <v-img :src="ezunpaywallScreenshotImg" class="ma-2 mx-auto" alt="ezunpaywall-screenshot" />
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12">
            <a class="d-flex justify-center justify-lg-start logo" :href="ezunpaywallLink" target="_blank">
              <h1 class="logo mx-2"> ezUNPAYWALL </h1>
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ i18n.t("ezunpaywall") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn color="blue" :href="ezunpaywallLink" variant="text" target="_blank" append-icon="mdi-arrow-right-thin">
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

import ezunpaywallScreenshotImg from '@/images/applications/ezunpaywall/ezunpaywall-screenshot.png';

const i18n = useI18n()

const ezunpaywallLink = computed(() => {
  if (i18n.locale === 'fr') {
    return 'https://unpaywall.inist.fr';
  }
  return 'https://unpaywall.inist.fr?lang=en';
});

</script>

<style scoped>
.logo {
  color: black;
  text-decoration: none;
}

.logo:hover {
  text-decoration: none;
  cursor: pointer;
}
</style>
