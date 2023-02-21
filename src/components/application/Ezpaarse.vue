<template>
  <v-container>
    <v-row class="my-8" justify="center" align="center">
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card>
          <video
            :src="require('../../../public/videos/ezpaarse-demo.webm')"
            type="video/webm"
            class="ma-2 mx-auto"
            style="max-width: 100%"
            muted
            loop
            autoplay
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order="1" order-md="2">
        <v-row >
          <v-col cols="12" :align="alignCentered">
            <v-img
              style="max-width: 350px"
              :src="require('../../../public/images/ezpaarse-text.png')"
              alt="ezpaarse-img"
            />
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("ezpaarse.text1") }}
            </p>
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify">
              {{ $t("ezpaarse.text2") }}
            </p>
          </v-col>
          <v-col>
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
    link: 'http://demo.ezpaarse.org/',
  }),
  computed: {
    alignCentered() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'center';
        case 'sm':
          return 'center';
        case 'md':
          return '';
        case 'lg':
          return '';
        case 'xl':
          return '';
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped>

video {
  border: none;
}

</style>
