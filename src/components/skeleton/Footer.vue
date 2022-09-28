<template>
  <v-footer dark bottom padless>
    <v-row>
      <v-col class="pa-0" cols=12>
        <v-card class="flex blue darken-2 pa-5" flat tile>
          <v-row class="ma-2">
            <v-img
              max-width="150"
              max-height="50"
              class="ma-2"
              :src="require('../../../public/images/couperin-logo.png')"
            />
            <v-img
              max-width="150"
              max-height="50"
              class="ma-2"
              :src="require('../../../public/images/ul-logo.png')"
            />
            <v-img
              max-width="50"
              max-height="50"
              class="ma-2"
              :src="require('../../../public/images/cnrs-logo.svg')"
            />
            <v-img
              max-width="170"
              max-height="70"
              class="ma-2"
              :src="require('../../../public/images/oclc-logo.png')"
            />
          </v-row>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols=12>
        <v-card class="pa-5 pb-1 pl-10" flat tile>
          <p>
            © ezPAARSE {{ new Date().getFullYear() }} —
            <strong> {{ $t("footer.signature") }} </strong>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
#footer {
  padding: 0;
}
</style>
