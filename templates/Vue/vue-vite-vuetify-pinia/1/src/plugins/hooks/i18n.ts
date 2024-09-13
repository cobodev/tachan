import { useI18n } from 'vue-i18n';
import { i18n } from '../i18n';

/**
 * Hook para utilizar el i18n en ámbito local (componente)
 * @returns i18n local scope
 */
export const useI18nLocal = () => useI18n({
  locale: i18n.global.locale.value,
  inheritLocale: true,
  useScope: 'local',
});
