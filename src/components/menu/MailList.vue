<template>
  <v-list>
    <v-list-item href="mailto:ezteam@couperin.org" link target="_blank" :title="i18n.t('contact')">
      <template v-slot:prepend>
        <v-icon icon="mdi-account-group"></v-icon>
      </template>
    </v-list-item>
    <v-list-item href="mailto:ezteam@couperin.org" link target="_blank" title="ezPAARSE" :subtitle="i18n.t('subscribe')">
      <template v-slot:prepend>
        <img class="mr-8" style="max-width: 30px" :src="ezpaarseLogo" :alt="`ezpaarse-logo`" />
      </template>
    </v-list-item>
    <v-list-item href="https://groupes.renater.fr/sympa/info/ezmesure-users" link target="_blank" title="ezMESURE"
      :subtitle="i18n.t('subscribe')">
      <template v-slot:prepend>
        <img class="mr-8" style="max-width: 30px" :src="ezmesureLogo" :alt="`ezmesure-logo`" />
      </template>
    </v-list-item>
    <v-list-item href="mailto:ezteam@couperin.org" link target="_blank" :title="i18n.t('supportEzcounter')">
      <template v-slot:prepend>
        <v-icon icon="mdi-account-supervisor"></v-icon>
      </template>
    </v-list-item>
    <v-list-item href="mailto:ezteam@couperin.org" link target="_blank" title="ezUNPAYWALL"
      :subtitle="i18n.t('subscribe')">
      <template v-slot:prepend>
        <img class="mr-8" style="max-width: 30px" :src="unpaywallLogo" :alt="`unpaywall-logo`" />
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>

import { useI18n } from 'vue-i18n';

import ezmesureLogo from '@/images/applications/ezmesure/ezmesure-logo.png';
import ezpaarseLogo from '@/images/applications/ezpaarse/ezpaarse-logo.png';
import unpaywallLogo from '@/images/applications/ezunpaywall/unpaywall-logo.svg';

const i18n = useI18n()

</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
