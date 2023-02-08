<template>
  <div class="text-center">
    <v-menu open-on-hover bottom offset-y >
      <template v-slot:activator="{ on, attrs }">
       <v-btn dark v-bind="attrs" text v-on="on">
          {{ $t('softwares') }}
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-card class="py-4">
        <v-list-item
          v-for="application in applications"
          :key="application.name"
          link
        >
          <v-list-item-avatar tile="false">
            <img
              style="max-width: 60px"
              :src="require(`../../../public/images/${application.pathImage}`)"
              class="logo-white"
              :alt="`${application.name}-img`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="application.name" />
            <v-list-item-subtitle v-text="application.text" />
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    applications() {
      return [
        {
          name: 'ezMESURE',
          pathImage: 'ezmesure-logo.svg',
          text: this.$t('ezmesureSubtitle'),
          link: 'https://ezmesure.couperin.org/',
        },
        {
          name: 'ezCOUNTER',
          pathImage: 'ezcounter-logo.png',
          text: this.$t('ezcounterSubtitle'),
          link: '',
        },
        {
          name: 'ezREEPORT',
          pathImage: 'ezmesure-logo.svg',
          text: this.$t('ezreeportSubtitle'),
          link: '',
        },
        {
          name: 'bibliomap',
          pathImage: 'bibliomap-logo.svg',
          text: this.$t('bibliomapSubtitle'),
          link: '',
        },
        {
          name: 'ezPAARSE',
          pathImage: 'ezpaarse-logo.png',
          text: this.$t('ezpaarseSubtitle'),
          link: 'http://demo.ezpaarse.org/',
        },
        {
          name: 'analogist',
          pathImage: 'analogist-logo.png',
          text: this.$t('analogistSubtitle'),
          link: 'http://analyses.ezpaarse.org/',
        },
        {
          name: 'ezUNPAYWALL',
          pathImage: 'circle.png',
          text: this.$t('ezunpaywallSubtitle'),
          link: 'https://unpaywall.inist.fr/',
        },
        {
          name: 'readmetrics',
          pathImage: 'readmetrics-logo.png',
          text: this.$t('readmetricsSubtitle'),
          link: '',
        },
      ];
    },
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
}

</style>
