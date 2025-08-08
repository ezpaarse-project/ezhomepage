<template>
  <v-list>
    <v-tooltip text="ezteam@couperin.org" location="right">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          href="mailto:ezteam@couperin.org"
          link
          target="_blank"
          prepend-icon="mdi-account-group"
          :title="i18n.t('contact')"
        />
      </template>
    </v-tooltip>

    <v-tooltip text="ezmesure-users@groupes.renater.fr" location="right">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          href="https://groupes.renater.fr/sympa/info/ezmesure-users"
          link
          target="_blank"
          title="ezMESURE"
          :subtitle="i18n.t('subscribe')"
        >
          <template #prepend>
            <img class="mr-8" style="max-width: 30px" :src="ezmesureLogo" :alt="`ezmesure-logo`" />
          </template>
        </v-list-item>
      </template>
    </v-tooltip>

    <v-tooltip text="ezpaarse-users@groupes.renater.fr" location="right">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          href="https://groupes.renater.fr/sympa/info/ezpaarse-users"
          link
          target="_blank"
          title="ezPAARSE"
          :subtitle="i18n.t('subscribe')"
        >
          <template #prepend>
            <img class="mr-8" style="max-width: 30px" :src="ezpaarseLogo" :alt="`ezpaarse-logo`" />
          </template>
        </v-list-item>
      </template>
    </v-tooltip>

    <v-tooltip text="ezunpaywall-users@groupes.renater.fr" location="right">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          href="https://groupes.renater.fr/sympa/info/ezunpaywall-users"
          link
          target="_blank"
          title="ezunpaywall"
          :subtitle="i18n.t('subscribe')"
        >
          <template #prepend>
            <img class="mr-8" style="max-width: 30px" :src="unpaywallLogo" :alt="`ezunpaywall-logo`" />
          </template>
        </v-list-item>
      </template>
    </v-tooltip>
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
