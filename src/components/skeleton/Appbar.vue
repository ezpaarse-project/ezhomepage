<template>
  <v-app-bar class="cyan darken-4" dark>
    <v-app-bar-nav-icon dark @click.stop="setDrawer()" class="hidden-lg-and-up" />
    <v-img
      max-width="150"
      :src="require('../../../public/images/ezpaarse.png')"
      class="ma-4 logo-white"
    ></v-img>

    <v-btn class="hidden-md-and-down" :href="blogURL" text>
      <v-icon class="mr-1">mdi-message-text</v-icon>
      Blog
    </v-btn>
    <v-btn class="hidden-md-and-down" :href="analogistURL" text>
      <v-img
        max-width="30"
        :src="require('../../../public/images/analogist-logo.png')"
        class="mr-1 logo-white"
      />
      Analogist
    </v-btn>
    <v-btn class="hidden-md-and-down" :href="ezpaarseDemoURL" text>
      <v-icon class="mr-1">mdi-chevron-double-right</v-icon>
      Démonstration
    </v-btn>
    <v-btn class="hidden-md-and-down" :href="ezmesureURL" text>
      <v-img
        max-width="40"
        :src="require('../../../public/images/ezmesure-logo.svg')"
        class="mr-1 logo-white"
      ></v-img>
      ezmesure
    </v-btn>
    <v-btn class="hidden-md-and-down" :href="bibliomapURL" text>
      <v-icon class="mr-1">mdi-web</v-icon>
      bibliomap
    </v-btn>
    <v-btn class="hidden-md-and-down" :href="ezpaarseDocURL" text>
      <v-icon class="mr-1">mdi-file-document-multiple</v-icon>
      documentation
    </v-btn>

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

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="hidden-md-and-down"  icon v-bind="attrs" v-on="on">
          <v-img
            max-width="25"
            :src="require(`../../../public/images/${local}.png`)"
            class="mr-2"
          ></v-img>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="$i18n.locale = 'fr'">
          <v-img
            max-width="25"
            :src="require('../../../public/images/fr.png')"
            class="mr-2"
          ></v-img>
          fr
        </v-list-item>
        <v-list-item @click="$i18n.locale = 'en'">
          <v-img
            max-width="25"
            :src="require('../../../public/images/en.png')"
            class="mr-2"
          ></v-img>
          en
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>

export default {
  data: () => ({
    blogURL: 'https://blog.ezpaarse.org/',
    analogistURL: 'http://analyses.ezpaarse.org/',
    ezpaarseDemoURL: 'http://demo.ezpaarse.org/',
    ezmesureURL: 'https://ezmesure.couperin.org/',
    bibliomapURL: 'https://bibliomap.inist.fr/',
    ezpaarseDocURL: 'https://ezpaarse-project.github.io/ezpaarse/',

    mailURL: 'mailto:ezpaarse@couperin.org',
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
    local() {
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

<style scoped>
.logo-white {
  filter: brightness(0) invert(1);
}
</style>
