<template>
  <v-app-bar class="bg-blue-grey" dark>
    <v-app-bar-nav-icon dark @click.stop="updateVisibleDrawer($event)" class="hidden-lg-and-up" />
    <img style="max-width: 40px" :src="readmetricsLogo" class="ma-4" alt="readmetrics logo" />
    <b> ReadMETRICS </b>

    <ApplicationsMenu class="hidden-md-and-down ml-2" />

    <DocumentationMenu class="hidden-md-and-down ml-2" />

    <v-btn prepend-icon="mdi-message-text" class="hidden-md-and-down ml-2" :href="blogURL" text>
      Blog
    </v-btn>

    <MailMenu class="hidden-md-and-down ml-2"/>

    <v-spacer></v-spacer>

    <v-tooltip text="Github ReadMetrics" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn class="hidden-md-and-down" :href="githubURL" target="_blank" v-bind="props" icon="mdi-github" />
      </template>
    </v-tooltip>

    <v-tooltip text="Youtube ReadMetrics" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn class="hidden-md-and-down" :href="youtubeURL" target="_blank" v-bind="props" icon="mdi-youtube" />
      </template>
    </v-tooltip>

    <LangSwitch />
  </v-app-bar>
</template>

<script setup>

import readmetricsLogo from '@/images/applications/readmetrics/readmetrics-logo.png';

import ApplicationsMenu from '@/components/menu/ApplicationsMenu.vue';
import MailMenu from '@/components/menu/MailMenu.vue';
import LangSwitch from '@/components/menu/LangSwitch.vue';
import DocumentationMenu from '../menu/DocumentationMenu.vue';

const blogURL = 'https://blog.ezpaarse.org/';

const githubURL = 'https://github.com/ezpaarse-project';
const youtubeURL = 'https://www.youtube.com/channel/UCcR-0UE9WjYiwS4fMG2T4tQ';

const emit = defineEmits({
  drawerUpdate: undefined
})
  
async function updateVisibleDrawer() {
  emit('drawerUpdate');
};
</script>

<style scoped>
.img-white {
  filter: brightness(0) invert(1);
}
</style>
