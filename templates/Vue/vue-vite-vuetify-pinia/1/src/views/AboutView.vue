<template>
  <div class="about-page w-75">
    <h1 class="ma-6">About the template</h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-vuejs" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Vue 3</span>
          </template>
          <v-card-subtitle>The progressive JavaScript framework</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Vue 3 es el core del proyecto. Con la Composition API y mejoras de rendimiento, es una poderosa herramienta para desarrollar interfaces de usuario modernas.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-lightning-bolt" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Vite</span>
          </template>
          <v-card-subtitle>Next Generation Frontend Tooling</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Vite es un builder rápido y moderno que permite un desarrollo más eficiente gracias a su hot module replacement y build ultra rápidos.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-vuetify" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Vuetify</span>
          </template>
          <v-card-subtitle>The #1 Vue UI Library</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Vuetify proporciona un conjunto completo de componentes UI basados en Material Design, facilitando la creación de aplicaciones visualmente atractivas.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-database" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Pinia</span>
          </template>
          <v-card-subtitle>The intuitive store for Vue</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Pinia es una biblioteca de gestión de estado que es más ligera y sencilla que Vuex, proporcionando una forma clara y concisa de manejar el estado de la aplicación.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-translate" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Módulo de traducciones</span>
          </template>
          <v-card-subtitle>Soporte multilingüe</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Este proyecto incluye un sistema de traducciones para soportar múltiples idiomas, permitiendo internacionalización fácil.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-theme-light-dark" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Selector de tema</span>
          </template>
          <v-card-subtitle>Modo claro/oscuro</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Incluye un selector de tema que permite alternar entre modo claro y oscuro, mejorando la experiencia del usuario.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-router" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Vue Router</span>
          </template>
          <v-card-subtitle>Navegación entre vistas</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Vue Router permite una navegación eficiente y fluida dentro de la aplicación, gestionando múltiples rutas y vistas.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-code-tags-check" width="400">
          <template v-slot:title>
            <span class="font-weight-black">ESLint</span>
          </template>
          <v-card-subtitle>Linting for code consistency</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            ESLint está configurado para asegurar un código limpio y consistente, aplicando buenas prácticas y evitando errores comunes.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" prepend-icon="mdi-test-tube" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Vitest</span>
          </template>
          <v-card-subtitle>Testing powered by Vite</v-card-subtitle>
          <v-card-text class="bg-surface-light pt-4">
            Vitest es el framework de pruebas rápido y ligero que permite realizar testing de la aplicación de forma eficaz, aprovechando Vite.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import {
  VCard,
  VCardText,
  VCardSubtitle,
  VCol,
  VRow,
} from 'vuetify/components';
</script>

<style scoped>
.about-page {
  margin-top: 20px;
}
</style>
