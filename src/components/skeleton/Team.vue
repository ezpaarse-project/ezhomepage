<template>
  <v-card class="flex py-12 grey darken-4" :style="style" dark flat tile>
    <div class="text-center">
      <h2 style="font-size: 2.5em;" >{{ $t("footer.title") }}</h2>
    </div>
    <v-row class="py-5">
      <v-col cols="12">
        <v-row class="text-center" justify="center" align="center">
          <v-col cols="12" sm="4">
            <v-icon class="my-4">mdi-cog-outline</v-icon>
            <h2 class="my-4">{{ $t("footer.block1.title") }}</h2>
            <p>{{ $t("footer.block1.text") }}</p>
          </v-col>
          <v-divider vertical />
          <v-col cols="12" sm="4">
            <v-icon class="my-4">mdi-account-multiple</v-icon>
            <h2 class="my-4">{{ $t("footer.block2.title") }}</h2>
            <p>{{ $t("footer.block2.text") }}</p>
          </v-col>
          <v-divider vertical />
          <v-col cols="12" sm="4">
            <v-icon class="my-4">mdi-account-group</v-icon>
            <h2 class="my-4">{{ $t("footer.block3.title") }}</h2>
            <p>{{ $t("footer.block3.text") }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import prism from '../../../public/images/prism.png';

export default {
  computed: {
    style() {
      return `background-image: url('${prism}'; background-size: initial; background-position-x: center; background-position-y: top; background-repeat: repeat;`;
    },
  },
};
</script>
