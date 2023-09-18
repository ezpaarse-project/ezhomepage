<template>
  <v-navigation-drawer :value="visible" app class="hidden-lg-and-up" width="300"
    @input="updateVisible($event)">
    <v-list nav dense>
      <p class="my-4">{{ i18n.t('softwares') }}</p>

      <ApplicationsList />

      <v-divider class="my-4" />

      <v-list-item href="https://blog.ezpaarse.org/" link title="Blog">
        <template v-slot:prepend>
          <v-icon icon="mdi-message-text"></v-icon>
        </template>
      </v-list-item>

      <v-divider class="my-4" />

      <p class="my-4">{{ i18n.t('contact') }}</p>

      <MailList />

      <v-divider class="my-4" />

      <p class="my-4">{{ i18n.t('socialNetworks') }}</p>

      <v-list-item v-for="socialNetwork in socialNetworks" :key="socialNetwork.name" :href="socialNetwork.link"
        :title="socialNetwork.name" link>
        <template v-slot:prepend>
          <v-icon :icon="socialNetwork.icon"></v-icon>
        </template>
      </v-list-item>
    </v-list>

    <v-divider class="ma-2" />
    <LangList />
  </v-navigation-drawer>
</template>


<script setup>

import { useI18n } from 'vue-i18n';

import MailList from '@/components/menu/MailList.vue';
import ApplicationsList from '@/components/menu/ApplicationsList.vue';
import LangList from '@/components/menu/LangList.vue';

const i18n = useI18n()

const visible = defineProps({
  value: { type: Boolean, default: false }
});

const emit = defineEmits({
  updated: () => true
})

async function updateVisible() {
  emit('updated');
};

const socialNetworks = [
  {
    name: 'Github',
    icon: 'mdi-github',
    link: 'https://github.com/ezpaarse-project',
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    link: 'https://twitter.com/ezpaarse',
  },
  {
    name: 'Youtube',
    icon: 'mdi-youtube',
    link: 'https://www.youtube.com/channel/UCcR-0UE9WjYiwS4fMG2T4tQ',
  },
];

</script>