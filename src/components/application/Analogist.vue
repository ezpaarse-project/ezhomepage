<template>
  <v-container class="my-10">
    <v-row justify="center">
      <v-img
        max-width="250"
        :src="require('../../../public/images/analogist.png')"
        class="ma-2"
      />
    </v-row>
    <v-row>
      <v-col class="ma-2">
        <p class="text-center">{{ $t("analogist") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>