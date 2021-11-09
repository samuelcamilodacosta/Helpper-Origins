System.register("class", [], function (exports_1, context_1) {
    "use strict";
    var Words;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Words = class Words {
                constructor(word) {
                    this._word = word,
                        this._vowels = ['a', 'e', 'i', 'o', 'u'];
                }
                amountVowels() {
                    this._word = this._word.toLowerCase().normalize('NFD');
                    let result = this._word.toLowerCase().normalize('NFD').split('').filter((letter) => this._vowels.includes(letter));
                    return result.length;
                }
            };
            exports_1("default", Words);
        }
    };
});
System.register("script", ["class"], function (exports_2, context_2) {
    "use strict";
    var class_js_1, example, classOfExample, button;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (class_js_1_1) {
                class_js_1 = class_js_1_1;
            }
        ],
        execute: function () {
            example = "bootcamp origin helpper";
            classOfExample = new class_js_1.default(example);
            console.log(classOfExample.amountVowels());
            button = document.querySelector('#send');
            button.addEventListener('click', function (event) {
                event.preventDefault();
                let word = document.querySelector('#word');
                if (word.value == '') {
                    alert("Por favor, informe a palavra para ser analisada.");
                    return;
                }
                let classOfWord = new class_js_1.default(word.value);
                let answer = document.getElementById('answer');
                answer.innerHTML = `Quantidade de vogais: ${classOfWord.amountVowels()}`;
            });
        }
    };
});
