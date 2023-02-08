<template>
  <v-container>
    <v-row
      class=" my-8"
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-img
          style="max-width: 350px"
          :src="require('../../../public/images/ezpaarse-text.png')"
          class="ma-2 mx-auto"
          alt="ezpaarse-img"
        />
      </v-col>
      <v-col>
        <v-row class="my-10">
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify"> {{ $t("ezpaarse.text1") }}</p>
          </v-col>
          <v-col cols="12">
            <p class="ma-2 text text-center text-justify"> {{ $t("ezpaarse.text2") }}</p>
          </v-col>
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
