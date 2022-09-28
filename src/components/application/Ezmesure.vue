<template>
  <v-container class="my-10">
    <v-row justify="center">
      <v-img
        max-width="350"
        :src="require('../../../public/images/ezmesure.png')"
        class="ma-2"
      />
    </v-row>
    <v-row>
      <v-col>
        <p class="text-center ma-2">
          {{ $t("ezmesure") }} {{ $t("ezcounter") }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
