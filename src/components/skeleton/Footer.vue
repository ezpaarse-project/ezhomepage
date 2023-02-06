<template>
  <v-footer dark bottom padless>
    <v-row >
      <v-col class="pa-0" cols=12>
        <v-card class="flex cyan darken-4 pa-5" flat tile>
          <v-row align="center" class="ma-2">
            <img
              style="max-width: 160px; max-height: 50px"
              class="ma-2"
              :src="require('../../../public/images/couperin-text.png')"
              alt="couperin-img"
            />
            <img
              style="max-width: 150px; max-height: 50px"
              class="ma-2"
              :src="require('../../../public/images/counter-text.png')"
              alt="counter-img"
            />
            <img
              style="max-width: 70px; max-height: 70px"
              class="ma-2"
              :src="require('../../../public/images/cnrs-logo.svg')"
              alt="cnrs-img"
            />
            <img
              style="max-width: 170px; max-height: 170px"
              class="ma-2"
              :src="require('../../../public/images/ministry-text.png')"
              alt="ministry-img"
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
