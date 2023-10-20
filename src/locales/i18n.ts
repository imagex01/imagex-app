
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import en_US from './en_US.json';
import ko_KR from './ko_KR.json';
import zh_CN from './zh_CN.json';
import ja_JP from './ja_JP.json';

import {initReactI18next} from 'react-i18next';
import {Plugins} from "@capacitor/core";

let lang = localStorage.getItem("language");
if (!lang) {
    lang = "en_US";
}
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en_US: {
                translation: en_US as any,
            },
            ko_KR: {
                translation: ko_KR as any,
            },
            ja_JP: {
                translation: ja_JP as any,
            },
            zh_CN: {
                translation: zh_CN as any,
            }
        },
        fallbackLng: lang,
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    }).catch(e=>{
    console.error(e)
});

i18n.changeLanguage(lang).then(()=>{
}).catch(e=>{
    console.error(e)
})

export const i18nxt = i18n;
