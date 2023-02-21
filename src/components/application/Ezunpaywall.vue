<template>
  <v-container >
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card>
          <video
            :src="require('../../../public/videos/ezunpaywall-demo.webm')"
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
        <v-row>
          <v-col cols="12" class="justify-center justify-md-start d-flex">
            <h1 class="mx-2">ezUNPAYWALL</h1>
          </v-col>
          <v-col cols="12">
            <p class="mx-2 text text-center text-justify">
              {{ $t("ezunpaywall") }}
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
    link: 'https://unpaywall.inist.fr/',
  }),
};
</script>
