<template>
  <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        md="4"
      >
        <img
          style="max-width: 350px"
          :src="require('../../../public/images/ezmesure-text.png')"
          class="ma-2 mx-auto"
          alt="ezmesure-img"
        />
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <p class="ma-2 text text-center">
          {{ $t("ezmesure") }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
