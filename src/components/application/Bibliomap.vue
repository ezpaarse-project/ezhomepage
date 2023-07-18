<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-row width="100%" justify="center">
          <video
            :src="require('../../../public/images/bibliomap-demo.webm')"
            type="video/webm"
            class="ma-2 mx-auto"
            style="max-width: 100%"
            muted
            loop
            autoplay
          />
          <p class="ma-2">{{ $t("bibliomapTitle") }}</p>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <a class="logo" :href="link" target="_blank">
              <h1 class="mx-2">Bibliomap</h1>
            </a>
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("bibliomap") }}
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    link() {
      if (this.$i18n.locale === 'fr') {
        return 'https://bibliomap.inist.fr/';
      }
      return 'https://bibliomap.inist.fr?lang=en';
    },
  },
};
</script>

<style scoped>
.logo {
  color: black;
  text-decoration: none;
}

.logo:hover {
  text-decoration:none;
  cursor:pointer;
}
</style>
