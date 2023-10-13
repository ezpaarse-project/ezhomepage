<template>
  <v-list>
    <v-list-item v-bind="props" v-for="lang in langs" :key="lang.locale" @click="i18n.locale.value = lang.locale"
      :title="i18n.t(lang.language)">
      <template v-slot:prepend>
        <img width="24" class="mr-2" :src="lang.pathImage" :alt="lang.locale" />
      </template>
    </v-list-item>
  </v-list>
</template>
  
<script setup>
import frFlag from '@/images/lang/fr.png';
import enFlag from '@/images/lang/en.png';

import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const langs = [
  {
    locale: 'fr',
    pathImage: frFlag,
    language: 'french',
  },
  {
    locale: 'en',
    pathImage: enFlag,
    language: 'english',
  },
];

</script>
  