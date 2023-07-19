<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" order="2" order-lg="1">
        <v-card>
          <v-img
            :src="require('../../../public/images/ezreeport-screenshot.png')"
            class="ma-2 mx-auto"
            alt="ezreeport-png"
          />
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
            <a class="logo mx-2" :href="link" target="_blank">
              <h1 class="mx-2">ezREEPORT</h1>
            </a>
          </v-col>
          <v-col cols="12">
            <p class="mx-4 text text-center text-justify">
              {{ $t("ezreeport") }}
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: '#',
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
