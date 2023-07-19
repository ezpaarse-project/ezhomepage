<template>
  <v-footer bottom padless>
    <v-row>
      <v-col class="pa-0" cols="12">
        <v-card dark class="pa-5 pb-1 pl-10" flat tile>
          <p>
            © ezPAARSE ezMESURE {{ new Date().getFullYear() }} —
            <strong> {{ $t("footer.signature") }} </strong>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>
