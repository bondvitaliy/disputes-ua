// jQuery

// let counter = 1;
// function change_word() {
//     // console.log(counter);
//     $('[class*=offer]').hide();
//     $(`.offer-${counter}`).show();
//     counter = counter >= 5 ? 1 : ++counter;
// }

// setInterval(change_word, 2000);



// JavaScript


// option 1

// let counter = 1;
// function change_word() {
//     const offers = document.querySelectorAll('[class*=offer]');
//     offers.forEach((offer) => {
//         offer.style.display = 'none';
//     });
//     const currentOffer = document.querySelector(`.offer-${counter}`);
//     currentOffer.style.display = 'block';
//     counter = counter >= 5 ? 1 : ++counter;
// }

// setInterval(change_word, 2000);


// option 2

let counter = 1;
function change_word() {
    const offers = document.querySelectorAll('[class*=offer]');
    offers.forEach((offer) => {
        offer.style.display = 'none';
    });
    const currentOffer = document.querySelector(`.offer-${counter}`);
    currentOffer.style.display = 'inline-block';
    counter = counter >= 5 ? 1 : ++counter;
}

setInterval(change_word, 2000);


// option 3

// let counter = 1;
// function change_word() {
//     const offers = document.querySelectorAll('[class*=offer]');
//     offers.forEach((offer) => {
//         offer.style.opacity = '0';
//         offer.style.transform = 'scale(0.9)';
//         setTimeout(() => {
//             offer.style.display = 'none';
//         }, 800);
//     });
//     const currentOffer = document.querySelector(`.offer-${counter}`);
//     currentOffer.style.display = 'inline-block';
//     setTimeout(() => {
//         currentOffer.style.opacity = '1';
//         currentOffer.style.transform = 'scale(1)';
//     }, 50);
//     counter = counter >= 5 ? 1 : ++counter;
// }

// setInterval(change_word, 2000);


// HTML PARTIALS - W3SCHOOL

// function includeHTML() {
//     var z, i, elmnt, file, xhttp;
//     /* Loop through a collection of all HTML elements: */
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//         elmnt = z[i];
//         /*search for elements with a certain atrribute:*/
//         file = elmnt.getAttribute("w3-include-html");
//         if (file) {
//             /* Make an HTTP request using the attribute value as the file name: */
//             xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4) {
//                     if (this.status == 200) { elmnt.innerHTML = this.responseText; }
//                     if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
//                     /* Remove the attribute, and call this function once more: */
//                     elmnt.removeAttribute("w3-include-html");
//                     includeHTML();
//                 }
//             }
//             xhttp.open("GET", file, true);
//             xhttp.send();
//             /* Exit the function: */
//             return;
//         }
//     }
// }



// AJAX INCLUDE FUNCTION

// function includeHTML() {
//     var element, file;
//     /* Знаходимо всі HTML-елементи з атрибутом include */
//     var elements = document.querySelectorAll('[include]');
//     /* Проходимо по кожному з цих елементів */
//     for (var i = 0; i < elements.length; i++) {
//         element = elements[i];
//         file = element.getAttribute('include');
//         /* Завантажуємо вміст файлу за допомогою AJAX */
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 /* Вставляємо вміст файлу в елемент */
//                 element.innerHTML = this.responseText;
//                 /* Викликаємо функцію includeHTML() знову, щоб обробити всі елементи */
//                 includeHTML();
//             }
//         }
//         xhttp.open('GET', file, true);
//         xhttp.send();
//         /* Вихід з функції, щоб AJAX міг завантажити вміст файлу */
//         return;
//     }
// }

// POSTHTML INCLUDE

// const fs = require('fs');
// const path = require('path');
// const posthtml = require('posthtml');
// const { parser } = require('posthtml-parser');
// const { match } = require('posthtml/lib/api');
// const expressions = require('posthtml-expressions');

// module.exports = (options = {}) => {
//     options.root = options.root || './';
//     options.encoding = options.encoding || 'utf-8';

//     return function posthtmlInclude(tree) {
//         tree.parser = tree.parser || parser;
//         tree.match = tree.match || match;

//         tree.match({ tag: 'include' }, node => {
//             let src = node.attrs.src || false;
//             let content;
//             let subtree;
//             let source;
//             let posthtmlExpressionsOptions = options.posthtmlExpressionsOptions || { locals: false };
//             if (options.delimiters) {
//                 posthtmlExpressionsOptions.delimiters = options.delimiters;
//             }

//             if (src) {
//                 src = path.resolve(options.root, src);
//                 source = fs.readFileSync(src, options.encoding);

//                 try {
//                     const localsRaw = node.attrs.locals || (node.content ? node.content.join().replace(/\n/g, '') : false);
//                     const localsJson = JSON.parse(localsRaw);
//                     posthtmlExpressionsOptions = {
//                         ...posthtmlExpressionsOptions,
//                         locals: posthtmlExpressionsOptions.locals ? Object.assign(posthtmlExpressionsOptions.locals, localsJson) : localsJson
//                     };
//                 } catch { }

//                 if (posthtmlExpressionsOptions.locals) {
//                     const result = posthtml()
//                         .use(expressions(posthtmlExpressionsOptions))
//                         .process(source, { sync: true });
//                     source = result.html;
//                 }

//                 subtree = tree.parser(source);
//                 subtree.match = tree.match;
//                 subtree.parser = tree.parser;
//                 subtree.messages = tree.messages;
//                 content = source.includes('include') ? posthtmlInclude(subtree) : subtree;

//                 if (tree.messages) {
//                     tree.messages.push({
//                         type: 'dependency',
//                         file: src
//                     });
//                 }
//             }

//             return {
//                 tag: false,
//                 content
//             };
//         });

//         return tree;
//     };
// };


// PART 2
const { readFileSync } = require('fs')

const posthtml = require('posthtml')
const include = require('posthtml-include')

const html = readFileSync('index.html')

posthtml([include({ encoding: 'utf8' })])
    .process(html)
    .then((result) => console.log(result.html))