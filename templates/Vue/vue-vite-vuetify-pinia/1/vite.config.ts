import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import vuetify from 'vite-plugin-vuetify';
import CONFIG from './tsconfig.app.json';
import PACKAGE from './package.json';

const aliasReplace = (route: string) => route.replace('/*', '');

const alias: any = {};

const tsconfigPaths: any = CONFIG.compilerOptions.paths;

Object.keys(tsconfigPaths).forEach((key) => {
  alias[aliasReplace(key)] = resolve(
    __dirname,
    aliasReplace(tsconfigPaths[key][0]),
  );
});

process.env.VITE_APP_VERSION = process.env.npm_package_version;
process.env.VITE_APP_NAME = process.env.npm_package_name;

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
    vuetify({ autoImport: false }),
  ],
  resolve: {
    alias,
  },
  define: {
    __APP_VERSION__: JSON.stringify(PACKAGE.version),
  },
});
