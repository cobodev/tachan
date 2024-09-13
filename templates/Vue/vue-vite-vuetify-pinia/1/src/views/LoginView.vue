<template>
  <v-app>
    <v-row>
      <v-col sm="12" md="8" lg="6" class="d-flex mx-auto justify-center align-center pa-10 pa-sm-16">
        <LoginCardComponent class="ma-sm-16 w-100" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup lang="ts">
import { VApp } from 'vuetify/components/VApp';
import { VCol, VRow } from 'vuetify/components/VGrid';
import LoginCardComponent from '@components/LoginCardComponent.vue';
</script>
