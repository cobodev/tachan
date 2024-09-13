import {
  type ComputedRef,
  type Ref,
  computed,
  ref,
} from 'vue';
import { defineStore } from 'pinia';
import { i18n } from '@plugins/i18n';
import { vuetify } from '@plugins/vuetify';
import type { IMenuItem } from '@shared/interfaces/menuItem.interface';

/**
 * SETUP STORE
 *
 * In Setup Stores:
 *    - ref()s become state properties
 *    - computed()s become getters
 *    - function()s become actions
 *
 * Note that you must return all state properties in setup stores for Pinia to pick them up as state.
 * In other words, you cannot have private state properties in stores.
 * Not returning all state properties can break SSR, devtools, and other plugins.
 */
export const useCommonStore = defineStore('commonStore', () => {
  // Translations
  /** Devuelve el idioma actual del sistema */
  const getCurrentLanguage: ComputedRef<string> = computed(() => i18n.global.locale.value);
  /** Devuelve el listado de idiomas disponibles */
  const getLanguages: ComputedRef<string[]> = computed(() => i18n.global.availableLocales);
  /** Cambia el idioma actual del sistema por uno de los disponibles en 'getLanguages' */
  const setLanguage = (language: string) => {
    if (language) i18n.global.locale.value = language;
  };

  // Themes
  /** Tema actual del sistema */
  const currentTheme: Ref<string> = ref(vuetify.theme.name.value);
  /** Devuelve el tema actual del sistema */
  const getCurrentTheme: ComputedRef<string> = computed(() => vuetify.theme.name.value);
  /** Devuelve el listado de temas disponibles */
  const getThemes: ComputedRef<string[]> = computed(() => Object.keys(vuetify.theme.themes.value));
  /** Cambia el tema actual del sistema por uno de los disponibles en 'getThemes' */
  const setTheme = (theme: string) => {
    if (theme) vuetify.theme.global.name.value = theme;
  };

  // Main Layout
  /** Flag para controlar si el sidebar de la aplicación se expande o se colapsa */
  const sidebarExpanded: Ref<boolean> = ref(false);
  /** Modifica la configuración del sidebar */
  const setSidebarExpanded = (expanded: boolean) => {
    sidebarExpanded.value = expanded;
  };

  // Sidebar
  /** Lista de items del menu lateral */
  const menuItems: Ref<IMenuItem[]> = ref([]);
  /** Modifica la lista de items del menu lateral */
  const setMenuItems = (items: IMenuItem[]) => {
    menuItems.value = items;
  };

  return {
    getCurrentLanguage,
    getLanguages,
    setLanguage,
    currentTheme,
    getCurrentTheme,
    getThemes,
    setTheme,
    sidebarExpanded,
    setSidebarExpanded,
    menuItems,
    setMenuItems,
  };
});
