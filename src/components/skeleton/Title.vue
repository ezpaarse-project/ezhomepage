<template>
  <v-container fluid class="px-0 py-4" :style="style">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-img
          style="max-width: 550px"
          :src="require('../../../public/images/readmetrics-text.png')"
          class="ma-2 mx-auto"
          alt="ezpaarse-screenshot"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" :offset="mobileCentered">
        <h1 class="my-16 text-center title-page">
          {{ $t("title") }}
        </h1>
      </v-col>
      <v-col cols="12" md="8" :offset="mobileCentered">
        <h2 class="my-16 grey--text text--darken-2 text-center subtitle-page">
          {{ $t("subtitle") }}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import dashboard from '../../../public/images/dashboard.jpg';

export default {
  computed: {
    style() {
      return `background-image: url('${dashboard}'; background-size: initial; background-position-x: center; background-position-y: top; background-repeat: repeat;`;
    },
    mobileCentered() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return '0';
        case 'md':
        case 'lg':
        case 'xl':
          return '2';
        default:
          return '2';
      }
    },
  },
};
</script>

<style scoped>

h1 {
  font-family: oxygen;
}
.title-page {
  font-size: 3em;
}

.subtitle-page {
  font-size: 1.5em;
  font-weight: normal;
}
</style>
