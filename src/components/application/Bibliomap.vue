<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <h1 class="mx-2">Bibliomap</h1>
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("bibliomap") }}
            </p>
          </v-col>
          <v-col cols="12">
            <a
              class="mx-2 text text-center text-justify"
              :href="link"
              v-text="$t('learnMore')"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row>
          <v-card width="100%" justify="center" align="center">
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
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    link() {
      if (this.$i18n.locale === "fr") {
        return "https://bibliomap.inist.fr/";
      }
      return "https://bibliomap.inist.fr?lang=en";
    },
  },
};
</script>
