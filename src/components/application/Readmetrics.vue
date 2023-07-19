<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <v-img
              style="max-width: 450px"
              :src="require('../../../public/images/readmetrics-text2.png')"
              class="ma-2"
              alt="readmetrics-img"
            />
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ $t("readmetrics") }}
            </p>
          </v-col>
          <v-col cols="12">
            <v-btn
              class="blue--text text--darken-1 hidden-md-and-down"
              :href="link"
              text
              target="_blank"
            >
              {{ $t("learnMore") }}
              <v-icon right>mdi-arrow-right-thin</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
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
    link: 'https://ezpaarse-project.github.io/readmetrics/',
  }),
};
</script>
