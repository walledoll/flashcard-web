// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // Добавляем бэкенд для загрузки JSON
    .use(initReactI18next)
    .init({
        lng: "en", // Язык по умолчанию
        fallbackLng: "en", // Если перевода нет, использовать английский
        backend: {
            loadPath: '/locales/{{lng}}/translation.json' // Путь к файлам
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;