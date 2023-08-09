<template>
  <v-row class="pa-3 text-center" justify="center" align="center">
    <v-col cols="12" md="8">
      <p class="my-4">
        {{ i18n.t('organization') }}
      </p>
      <v-row justify="center" align="center">
        <v-col class="text-center" cols="12" sm="4">
          <a :href="inistLink" target="_blank">
            <v-img style="max-width: 250px" :src="inistImg"
              class="ma-2 mx-auto" alt="inist-cnrs-logo" />
          </a>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <a :href="couperinLink" target="_blank">
            <v-img style="max-width: 300px" :src="couperinImg"
              class="ma-2 mx-auto" alt="couperin-logo" />
          </a>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <a :href="ministryLink" target="_blank">
            <v-img style="max-width: 250px" :src="ministryImg"
              class="ma-2 mx-auto" alt="ministry-logo" />
          </a>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <v-card height="500px" class="ma-2">
        <LeafletMap />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>

import { ref } from 'vue'

import { useI18n } from 'vue-i18n';

import inistImg from '@/images/organization/inist-cnrs-logo.png';
import couperinImg from '@/images/organization/couperin-text.png';
import ministryImg from '@/images/organization/ministry-text.png';

const i18n = useI18n();

import LeafletMap from '@/components/team/LeafletMap.vue';

const inistLink = ref('https://www.inist.fr/')
const couperinLink = ref('https://www.couperin.org/')
const ministryLink = ref('https://www.enseignementsup-recherche.gouv.fr/fr')

</script>
