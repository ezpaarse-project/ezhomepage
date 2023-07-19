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
            <a :href="link" target="_blank">
              <v-img
                style="max-width: 35px"
                :src="require('../../../public/images/unpaywall-logo.svg')"
                class="ma-1 mx-4"
                alt="ezunpaywall-logo"
              />
            </a>
            <a class="logo" :href="link" target="_blank">
              <h1 class="logo mx-2"> ezUNPAYWALL </h1>
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ $t("ezunpaywall") }}
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
  data: () => ({
    link: 'https://unpaywall.inist.fr/',
  }),
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
