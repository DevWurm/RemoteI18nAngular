export const environment = {
  production: true,
  translateUrl: (lang: string) => `http://localhost:4200/assets/some/path/i18n/${lang}.json`
};
