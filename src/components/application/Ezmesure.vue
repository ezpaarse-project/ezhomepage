<template>
  <v-container >
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-card>
          <v-img
            style="max-width: 100%"
            :src="require('../../../public/images/ezmesure-screenshot.png')"
            class="ma-2 mx-auto"
            alt="ezpaarse-screenshot"
          />
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <v-img
              style="max-width: 350px"
              :src="require('../../../public/images/ezmesure-text.png')"
              alt="ezmesure-img"
            />
          </v-col>
          <v-col cols="12" >
            <p class="mx-2 text text-center text-justify">
              {{ $t("ezmesure") }}
            </p>
          </v-col>
          <v-col cols="12">
            <a class="mx-2 text text-center text-justify" :href="link" v-text="$t('learnMore')" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'https://ezmesure.couperin.org/',
  }),
};
</script>
