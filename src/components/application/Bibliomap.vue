<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="12" sm="4">
        <v-row class="text-center ma-2" justify="center" align="center">
          <v-icon size="60">mdi-web</v-icon>
          <h1>Bibliomap</h1>
        </v-row>
        <p class="text-center ma-2">{{ $t("bibliomap") }}</p>
      </v-col>
      <v-col cols="12" sm="8">
        <v-row class="text-center" justify="center" align="center">
          <object
            data="https://bibliomap.inist.fr/?d=false&m=false&z=5"
            width="100%"
            height="444"
            title="Bibliomap"
          />
          <p class="ma-2">{{ $t("bibliomapTitle") }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>