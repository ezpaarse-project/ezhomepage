<template>
  <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        md="8"
      >
        <p class="ma-2 text text-center">
          {{ $t("analogist") }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <img
          style="max-width: 350px"
          :src="require('../../../public/images/analogist-text.png')"
          class="ma-2 mx-auto"
          alt="analogist-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
