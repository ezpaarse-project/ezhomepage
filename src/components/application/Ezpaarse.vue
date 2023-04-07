<template>
  <v-container>
    <v-row class="my-8" justify="center" align="center">
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" class="justify-center justify-lg-start d-flex">
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
            <v-row>
              <v-btn
                class="blue--text text--darken-1 hidden-md-and-down"
                :href="ezpaarseDocURL"
                text
              >
                <v-icon class="mr-1">mdi-file-document-multiple</v-icon>
                {{ $t("documentation") }}
              </v-btn>
              <v-spacer />
              <a
                class="mx-2 text text-center text-justify"
                :href="ezpaarseLink"
              >
                {{ $t("learnMore") }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <v-img
            :src="require('../../../public/images/ezpaarse-screenshot.png')"
            class="ma-2 mx-auto"
            alt="ezpaarse-screenshot"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ezpaarseLink: 'http://demo.ezpaarse.org/',
    ezpaarseDocURL: 'https://ezpaarse-project.github.io/ezpaarse/',
  }),
};
</script>

<style scoped>
video {
  border: none;
}
</style>
