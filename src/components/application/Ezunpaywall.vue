<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-card>
          <v-img
            :src="require('../../../public/images/ezunpaywall-screenshot.png')"
            class="ma-2 mx-auto"
            alt="ezunpaywall-screenshot"
          />
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <v-list-item>
              <v-list-item-avatar tile="false">
                <v-img
                  style="max-width: 35px"
                  :src="require('../../../public/images/unpaywall-logo.svg')"
                  class="ma-2 mx-auto"
                  alt="ezunpaywall-screenshot"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <h1> ezUNPAYWALL </h1>
              </v-list-item-content>
            </v-list-item>
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
