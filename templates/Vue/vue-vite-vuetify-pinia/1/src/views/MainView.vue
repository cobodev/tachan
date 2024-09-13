<template>
  <v-app class="rounded rounded-md">
    <SidebarComponent />

    <HeaderBarComponent />

    <v-main class="d-flex align-center justify-center">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { VApp } from 'vuetify/components/VApp';
import { VMain } from 'vuetify/components/VMain';
import SidebarComponent from '@components/SidebarComponent.vue';
import HeaderBarComponent from '@components/HeaderBarComponent.vue';
</script>

<style scoped>
.v-main {
  height: calc(100% - 80px);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
