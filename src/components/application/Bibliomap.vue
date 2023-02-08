<template>
  <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" order="2" order-md="1">
        <v-row>
          <v-card width="100%" justify="center" align="center">
            <iframe
              src="https://bibliomap.inist.fr/?d=false&m=false&z=5"
              width="100%"
              height="444"
              title="Bibliomap"
              style="border: 0;"
            />
            <p class="ma-2">{{ $t("bibliomapTitle") }}</p>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" order="1" order-md="2">
        <v-row class="ma-2" justify="center" align="center">
          <v-icon size="60">mdi-web</v-icon>
          <h2>Bibliomap</h2>
        </v-row>
        <p class="ma-2 text text-center text-justify">{{ $t("bibliomap") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
