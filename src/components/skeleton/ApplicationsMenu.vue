<template>
  <div class="text-center">
    <v-menu :nudge-width="200" open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" text v-on="on" v-text="$t('softwares')" />
      </template>

      <v-card class="pt-4 pb-4">
        <a
          :href="application.link"
          class="ma-2 black--text"
          :key="application.name"
          v-for="application in applications"
        >
          <v-row align="center" justify="center">
            <v-col class="ma-4" cols="12" sm="1" md="1" lg="1">
              <v-btn :href="application.link" icon>
                <v-img
                  max-width="60"
                  :src="
                    require(`../../../public/images/${application.pathImage}`)
                  "
                  class="mr-1 logo-white"
                />
              </v-btn>
            </v-col>
            <v-col cols="12" sm="10" md="10" lg="10">
              <v-row>
                <v-col class="pa-1" cols="12">
                  <b> {{ application.name }}</b>
                </v-col>
                <v-col class="pa-1" cols="12">
                  <span>{{ application.text }}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </a>
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
