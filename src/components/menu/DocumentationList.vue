<template>
  <v-list>
    <v-list-item v-for="application in applications" :key="application.name" :href="application.link" link target="_blank"
      :title="application.name" :subtitle="application.text">
      <template v-slot:prepend>
        <img class="mr-6" style="max-width: 30px" :src="application.pathImage" :alt="`${application.name}-logo`" />
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import ezmesureLogo from '@/images/applications/ezmesure/ezmesure-logo.svg';

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

// TODO, update URL from locale
const applications = computed(() => {
  return [
    {
      name: 'ezMESURE',
      pathImage: ezmesureLogo,
      text: i18n.t('user'),
      link: 'https://docs.readmetrics.org/s/fr-ezmesure-user',
    },
  ];
});

</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
