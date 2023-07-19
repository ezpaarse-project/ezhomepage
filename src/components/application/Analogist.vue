<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <a :href="link" target="_blank">
              <v-img
                style="max-width: 350px"
                :src="require('../../../public/images/analogist-text.png')"
                alt="ezmesure-img"
                class="mx-4"
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ $t("analogist") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn
              class="blue--text text--darken-1"
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
        <v-card>
          <v-img
            :src="require('../../../public/images/analogist-screenshot.png')"
            class="ma-2 mx-auto"
            alt="analogist-img"
           />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'http://analyses.ezpaarse.org/',
  }),
};
</script>
