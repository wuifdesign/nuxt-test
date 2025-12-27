import VueI18NExtract from 'vue-i18n-extract';

const report = VueI18NExtract.createI18NReport({
  vueFiles: './app/**/*.?(js|vue)',
  languageFiles: './i18n/locales/*.?(json|yml|yaml|js)',
  add: true,
});
