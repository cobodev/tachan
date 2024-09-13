<template>
  <!-- Header -->
  <v-app-bar
    :title="appName"
    density="comfortable"
    flat
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="commonStore.setSidebarExpanded(!commonStore.sidebarExpanded)"
      />
    </template>

    <template v-slot:append>
      <ConfirmationDialog
        :msg="$t('common.msg.logout')"
        @accept="logout"
      >
        <template #activator>
          <v-btn icon="mdi-logout" />
        </template>
      </ConfirmationDialog>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useCommonStore } from '@stores/commonStore';
import { VAppBar, VAppBarNavIcon } from 'vuetify/components/VAppBar';
import { VBtn } from 'vuetify/components/VBtn';
import ConfirmationDialog from './ConfirmationDialog.vue';

const commonStore = useCommonStore();

const appName = import.meta.env.VITE_APP_NAME;

const logout = () => console.log('logged out');

</script>
