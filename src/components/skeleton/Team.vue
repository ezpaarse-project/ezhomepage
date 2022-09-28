<template>
  <v-card class="flex py-10" dark flat tile>
    <div class="text-center">
      <h2>{{ $t("footer.title") }}</h2>
    </div>
    <v-row class="py-5">
      <v-col cols="12">
        <v-row class="text-center" justify="center" align="center">
          <v-col>
            <v-icon class="my-4">mdi-cog-outline</v-icon>
            <h2 class="my-4">{{ $t("footer.block1.title") }}</h2>
            <p>{{ $t("footer.block1.text") }}</p>
          </v-col>
          <v-divider vertical />
          <v-col>
            <v-icon class="my-4">mdi-account-multiple</v-icon>
            <h2 class="my-4">{{ $t("footer.block2.title") }}</h2>
            <p>{{ $t("footer.block2.text") }}</p>
          </v-col>
          <v-divider vertical />
          <v-col>
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
export default {};
</script>
