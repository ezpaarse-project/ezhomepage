<template>
  <v-container>
    <v-row
      class="text-center my-8"
      justify="center"
      align="center"
    >
      <v-img
        max-width="350"
        :src="require('../../../public/images/ezpaarse.png')"
        class="ma-2"
      />
      <h1>Qu'est ce que c'est ?</h1>
    </v-row>
    <v-row class="my-10">
      <v-col cols="12" md="6">
        <p class="text-center ma-2"> {{ $t("ezpaarse.text1") }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-center ma-2"> {{ $t("ezpaarse.text2") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
