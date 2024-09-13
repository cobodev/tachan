<template>
  <!-- Sidebar -->
  <v-navigation-drawer
    :rail="!commonStore.sidebarExpanded"
    :width="256"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/10.jpg"
        :title="authStore.loggedUser?.id"
        :subtitle="authStore.loggedUser?.name"
      />
      <v-divider />
    </v-list>

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        v-for="item in commonStore.menuItems"
        :key="item.code"
        :title="$t(`menu.items.${item.label}`)"
        :prepend-icon="item.icon"
        @click="handleClickMenuItem(item.path)"
      >
        <v-tooltip
          v-if="!commonStore.sidebarExpanded"
          activator="parent"
          location="end"
        >{{ $t(`menu.descriptions.${item.description}`) }}</v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components/VNavigationDrawer';
import { VList, VListItem } from 'vuetify/components/VList';
import { VDivider } from 'vuetify/components/VDivider';
import { VTooltip } from 'vuetify/components/VTooltip';
import { useCommonStore } from '@stores/commonStore';
import router from '../router';
import { useAuthStore } from '@/stores/authStore';

const commonStore = useCommonStore();
const authStore = useAuthStore();

// Ejemplo de usuario
authStore.setLoggedUser({
  id: '7264293',
  name: 'Peter Blank',
  mail: 'peter_blank@gmailcom',
});

// Ejemplo de menu
commonStore.setMenuItems([
  {
    code: 'home_view',
    label: 'home',
    description: 'home',
    icon: 'mdi-home',
    path: '/home',
    index: 1,
  },
  {
    code: 'about_view',
    label: 'about',
    description: 'about',
    icon: 'mdi-star',
    path: '/about',
    index: 2,
  },
  {
    code: 'components_view',
    label: 'components',
    description: 'components',
    icon: 'mdi-folder',
    path: '/components',
    index: 3,
  },
]);

const handleClickMenuItem = (path: string) => {
  router.push({ path });
};

</script>
