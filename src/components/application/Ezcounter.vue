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
          {{ $t("ezcounter") }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
        order="1"
        order-md="2"
      >
      <v-flex>
      <v-img
        style="max-width: 450px"
        :src="require('../../../public/images/ezcounter-text.png')"
        class="ma-2 mx-auto"
        alt="ezcounter-img"
      />
      </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>
