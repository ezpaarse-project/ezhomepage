<template>
  <v-app-bar class="cyan darken-4" dark>
    <v-app-bar-nav-icon dark @click.stop="setDrawer()" class="hidden-lg-and-up" />
    <img
      style="max-width: 150px"
      :src="require('../../../public/images/ezpaarse-text.png')"
      class="ma-4"
      alt="ezpaarse-img"
    />

    <v-btn class="hidden-md-and-down" :href="blogURL" text>
      <v-icon class="mr-1">mdi-message-text</v-icon>
      {{ $t('blog') }}
    </v-btn>
    <v-btn class="hidden-md-and-down" :href="ezpaarseDocURL" text>
      <v-icon class="mr-1">mdi-file-document-multiple</v-icon>
      {{ $t('documentation') }}
    </v-btn>

    <ApplicationsMenu class="hidden-md-and-down" />

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="hidden-md-and-down" :href="mailURL" v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </template>
      <span>Mail ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="hidden-md-and-down" :href="githubURL" v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>Github ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="hidden-md-and-down" :href="twitterURL" v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </template>
      <span>Twitter ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="hidden-md-and-down" :href="youtubeURL" v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </template>
      <span>Youtube ezPAARSE</span>
    </v-tooltip>

    <Lang />

  </v-app-bar>
</template>

<script>

import ApplicationsMenu from '@/components/skeleton/ApplicationsMenu.vue';
import Lang from '@/components/skeleton/Lang.vue';
import frFlag from '../../../public/images/lang/fr.png';
import enFlag from '../../../public/images/lang/en.png';

export default {
  components: {
    ApplicationsMenu,
    Lang,
  },
  data: () => ({
    frFlag,
    enFlag,
    blogURL: 'https://blog.ezpaarse.org/',
    analogistURL: 'http://analyses.ezpaarse.org/',
    ezpaarseDemoURL: 'http://demo.ezpaarse.org/',
    ezmesureURL: 'https://ezmesure.couperin.org/',
    bibliomapURL: 'https://bibliomap.inist.fr/',
    ezpaarseDocURL: 'https://ezpaarse-project.github.io/ezpaarse/',

    mailURL: 'mailto:ezteam@couperin.org',
    githubURL: 'https://github.com/ezpaarse-project',
    twitterURL: 'https://twitter.com/ezpaarse',
    youtubeURL: 'https://www.youtube.com/channel/UCcR-0UE9WjYiwS4fMG2T4tQ',
  }),
  methods: {
    setDrawer() {
      this.$store.dispatch('setDrawer', !this.drawer);
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    drawer() {
      return this.$store.state.drawer;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
