<template>
  <v-container class="my-10">
    <v-row class="text-center" justify="center" align="center">
      <v-img
        max-width="400"
        :src="require('../../../public/images/readmetrics-logo.png')"
        class="ma-2"
      />
    </v-row>
    <v-row>
      <v-col>
        <p class="text-center">{{ $t("readmetrics") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>