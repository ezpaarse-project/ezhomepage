<template>
    <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        md="8"
      >
        <p class="ma-2 text text-center">
          {{ $t("readmetrics") }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
      <v-img
        height="auto"
        max-width="200"
        :src="require('../../../public/images/readmetrics-text.png')"
        class="ma-2 mx-auto"
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
