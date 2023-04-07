<template>
  <v-card class="flex py-10 grey darken-4" dark flat tile>
    <v-row class="py-5">
      <v-col cols="12">
        <v-row class="text-center" justify="center" align="center">
          <v-col cols="12" sm="8">
            <p>
              Ces logiciels ont été réalisé par à l'Inist CNRS en collaboration
              avec les consortium couperin
            </p>
            <v-row justify="center" align="center">
              <v-col class="text-center" cols="6">
                <v-img
                  style="max-width: 250px"
                  :src="require('../../../public/images/inist-cnrs-logo.png')"
                  class="ma-2 mx-auto"
                  alt="counter-img"
                />
              </v-col>
              <v-col class="text-center" cols="6">
                <v-img
                  style="max-width: 250px"
                  :src="require('../../../public/images/couperin-text.png')"
                  class="ma-2 mx-auto"
                  alt="counter-img"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical />
          <v-col cols="12" sm="4">
            <v-card height="300px" class="ma-2">
              <Map />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Map from '@/components/skeleton/Map.vue';

export default {
  name: 'Organization',
  components: {
    Map,
  },
};
</script>

<style>
</style>
