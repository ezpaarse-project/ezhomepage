<template>
  <v-container >
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-md-start d-flex">
            <v-img
              style="max-width: 450px"
              :src="require('../../../public/images/readmetrics-text2.png')"
              class="ma-2"
              alt="readmetrics-img"
            />
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("readmetrics") }}
            </p>
          </v-col>
          <v-col cols="12">
            <a class="mx-2 text text-center text-justify" :href="link" v-text="$t('learnMore')" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row justify="center" align="center">
          <v-col class="text-center" cols="6">
            <v-img
              style="max-width: 150px"
              :src="require('../../../public/images/ezpaarse-logo.png')"
              class="ma-2 mx-auto"
              alt="counter-img"
            />
          </v-col>
          <v-col class="text-center" cols="6">
            <v-img
              style="max-width: 150px"
              :src="require('../../../public/images/ezmesure-logo.svg')"
              class="ma-2 mx-auto"
              alt="counter-img"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'https://ezpaarse-project.github.io/readmetrics/'
  }),
};
</script>
