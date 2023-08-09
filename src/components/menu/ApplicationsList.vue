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
import ezcounterLogo from '@/images/applications/ezcounter/ezcounter-logo.png';
import bibliomapLogo from '@/images/applications/bibliomap/bibliomap-logo.svg';
import ezpaarseLogo from '@/images/applications/ezpaarse/ezpaarse-logo.png';
import analogistLogo from '@/images/applications/analogist/analogist-logo.png';
import unpaywallLogo from '@/images/applications/ezunpaywall/unpaywall-logo.svg';

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const applications = computed(() => {
  return [
    {
      name: 'ezMESURE',
      pathImage: ezmesureLogo,
      text: i18n.t('ezmesureSubtitle'),
      link: 'https://ezmesure.couperin.org/',
    },
    {
      name: 'ezCOUNTER',
      pathImage: ezcounterLogo,
      text: i18n.t('ezcounterSubtitle'),
      link: '',
    },
    {
      name: 'ezREEPORT',
      pathImage: ezmesureLogo,
      text: i18n.t('ezreeportSubtitle'),
      link: '',
    },
    {
      name: 'bibliomap',
      pathImage: bibliomapLogo,
      text: i18n.t('bibliomapSubtitle'),
      link: 'https://bibliomap.inist.fr/',
    },
    {
      name: 'ezPAARSE',
      pathImage: ezpaarseLogo,
      text: i18n.t('ezpaarseSubtitle'),
      link: 'http://demo.ezpaarse.org/',
    },
    {
      name: 'analogist',
      pathImage: analogistLogo,
      text: i18n.t('analogistSubtitle'),
      link: 'http://analyses.ezpaarse.org/',
    },
    {
      name: 'ezUNPAYWALL',
      pathImage: unpaywallLogo,
      text: i18n.t('ezunpaywallSubtitle'),
      link: 'https://unpaywall.inist.fr/',
    },
  ];
});

</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
