<template>
  <v-menu :value="selectedOpen" open-on-hover offset-y right :nudge-width="50">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="hidden-md-and-down" icon v-bind="attrs" v-on="on">
        {{ $i18n.locale }}
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item @click="$i18n.locale = 'fr'">
          <v-img
            max-width="25"
            :src="require('../../../public/images/lang/fr.png')"
            class="mr-2"
          ></v-img>
          fr
        </v-list-item>
        <v-list-item @click="$i18n.locale = 'en'">
          <v-img
            max-width="25"
            :src="require('../../../public/images/lang/en.png')"
            class="mr-2"
          ></v-img>
          en
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    selectedOpen: false,
  }),
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style>
</style>
