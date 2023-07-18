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
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-2 text text-center text-justify">
              {{ $t("analogist") }}
            </p>
          </v-col>
          <v-col cols="12">
            <a
              :href="link"
              class="mx-2 text text-center text-justify"
              target="_blank"
            >
             {{ $t('learnMore') }}
            </a>
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
