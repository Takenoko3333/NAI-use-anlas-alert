// ==UserScript==
// @name         NovelAI Use Anlas Alert
// @name:ja      NovelAI Anlas使用警告
// @name:en      NovelAI Use Anlas Alert
// @namespace    https://github.com/Takenoko3333/NAI-use-anlas-alert
// @version      1.0.1
// @description  On NovelAI's image generation screen, change the color of the generate button to a warning color when there are points to be used.
// @description:ja  NovelAIの画像生成画面において、使用するポイントがある場合に生成ボタンの色を警告色に変更します。
// @description:en  On NovelAI's image generation screen, change the color of the generate button to a warning color when there are points to be used.
// @author       Takenoko3333
// @match        https://novelai.net/image
// @icon         https://www.google.com/s2/favicons?sz=64&domain=novelai.net
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    const useAnlas = '.sc-d72450af-1 div div span';
    const warningColor = 'orangered';

    setInterval(() => {
        document.querySelectorAll(useAnlas).forEach(element => {
            if (element && element.textContent.trim() !== '0') {
                element.style.color = warningColor;
                element.parentNode.parentNode.parentNode.style.backgroundColor = warningColor;
                element.parentNode.nextElementSibling.style.backgroundColor = warningColor;
            } else {
                element.style.color = '';
                element.parentNode.parentNode.parentNode.style.backgroundColor = '';
                element.parentNode.nextElementSibling.style.backgroundColor = '';
            }
        });
    }, 500);
})();
