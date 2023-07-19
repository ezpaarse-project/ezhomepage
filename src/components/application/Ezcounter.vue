<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <a :href="link" target="_blank">
              <v-img
                style="max-width: 350px"
                :src="require('../../../public/images/ezcounter-text.png')"
                class="mx-2"
                alt="ezcounter-img"
              />
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ $t("ezcounter") }}
            </p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn
              class="blue--text text--darken-1 "
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
        <v-img
          style="max-width: 350px"
          :src="require('../../../public/images/counter-text.png')"
          class="ma-2 mx-auto"
          alt="counter-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'https://blog.ezpaarse.org/2022/02/tutoriels-ezcounter-bonnes-pratiques-pour-la-saisie-des-identifiants-sushi/',
  }),
};
</script>
