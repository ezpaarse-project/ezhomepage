<template>
  <v-row class="py-5 text-center" justify="center" align="center">
    <v-col cols="12" md="8">
      <p style="font-size: 1.5em; margin: 1em">
        {{ $t('organization') }}
      </p>
      <v-row justify="center" align="center">
        <v-col class="text-center" cols="12" sm="4">
          <a :href="inistLink" target="_blank">
            <v-img
              style="max-width: 250px"
              :src="require('../../../public/images/inist-cnrs-logo.png')"
              class="ma-2 mx-auto"
              alt="counter-img"
            />
          </a>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <a :href="couperinLink" target="_blank">
            <v-img
              style="max-width: 300px"
              :src="require('../../../public/images/couperin-text.png')"
              class="ma-2 mx-auto"
              alt="counter-img"
            />
          </a>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <a :href="ministryLink" target="_blank">
            <v-img
              style="max-width: 250px"
              :src="require('../../../public/images/ministry-text.png')"
              class="ma-2 mx-auto"
              alt="counter-img"
            />
          </a>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <v-card height="500px" class="ma-2">
        <Map />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Map from '@/components/skeleton/Map.vue';

export default {
  name: 'Organization',
  components: {
    Map,
  },
  data: () => ({
    inistLink: 'https://www.inist.fr/',
    couperinLink: 'https://www.couperin.org/',
    ministryLink: 'https://www.enseignementsup-recherche.gouv.fr/fr',
  }),
};
</script>
