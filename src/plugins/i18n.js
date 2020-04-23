import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: 'Welcome to Your Vue.js App Dude',
    languageDisplay: navigator.language,
    guide: 'For a guide and recipes on how to configure / customize this project,',
    checkout: 'check out the',
    plugins: 'Installed CLI Plugins',
    links: 'Essential Links',
    ecosystem: 'Ecosystem',
  },
  es: {
    welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
    languageDisplay: navigator.language,
    guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
    checkout: 'revisar la',
    plugins: 'Plugins de CLI instalados',
    links: 'Enlaces esenciales',
    ecosystem: 'Ecosistema',
  },
  fr: {
    welcomeMsg: 'Bienvenue dans votre application Vue.js',
    languageDisplay: navigator.language,
    guide: 'Pour un guide et des recettes sur la façon de configurer / personnaliser ce projet,',
    checkout: 'vérifiez',
    plugins: 'Plugins CLI installés',
    links: 'Liens essentiels',
    ecosystem: 'Écosystème',
  },
};

const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'fr',
  messages,
});

export default i18n;
