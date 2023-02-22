<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <v-img
              style="max-width: 450px"
              :src="require('../../../public/images/ezcounter-text.png')"
              class="ma-2"
              alt="ezcounter-img"
            />
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("ezcounter") }}
            </p>
          </v-col>
          <v-col cols="12">
            <a class="mx-2 text text-center text-justify" :href="link" v-text="$t('learnMore')" />
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
