// Import translations from language-shop.js
import { translations } from './language-shop.js';

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[key]");
    const btnVN = document.getElementById("btn-1");
    const btnEN = document.getElementById("btn-2");

    function changeLanguage(lang) {
        elements.forEach((el) => {
            const key = el.getAttribute("key");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    btnVN.addEventListener("click", () => changeLanguage("vi"));
    btnEN.addEventListener("click", () => changeLanguage("en"));
});
