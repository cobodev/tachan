import { createVuetify } from 'vuetify'; // vuetify
import '@mdi/font/css/materialdesignicons.css'; // icons - ensure you are using css-loader
import { myDarkTheme } from '@assets/scss/themes/myDarkTheme';
import { myLightTheme } from '@assets/scss/themes/myLightTheme';

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: 'myDarkTheme', // Default options: light | dark
    themes: {
      myLightTheme,
      myDarkTheme,
    },
  },
  defaults: {
    global: {
      ripple: true,
      rounded: 'xl',
    },
    VBtn: {
      color: 'primary',
    },
    VSwitch: {
      inset: true,
    },
    VTextField: {
      variant: 'outlined',
      color: 'primary',
      density: 'comfortable',
    },
    VNavigationDrawer: {
      rounded: false,
    },
    VAppBar: {
      rounded: false,
    },
  },
});
