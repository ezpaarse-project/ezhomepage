<template>
  <v-container>
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
export default {
  computed: {
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

<style>

.title-page {
  font-size: 3em;
}

.subtitle-page {
  font-size: 1.5em;
  font-weight: normal;
}
</style>
