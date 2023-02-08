<template>
    <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        md="8"
        order="2"
        order-md="1"
      >
        <p class="ma-2 text text-center text-justify">
          {{ $t("readmetrics") }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
        order="1"
        order-md="2"
      >
      <v-img
        style="max-width: 200px"
        height="auto"
        :src="require('../../../public/images/readmetrics-text.png')"
        class="ma-2 mx-auto"
        alt="readmetrics-img"
      />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
