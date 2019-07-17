/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 372);
/******/ })
/************************************************************************/
/******/ ({

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(373);


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(374);

function lighter(parentSelector) {
    var parentElement = document.querySelector(parentSelector);
    var lights = parentElement.querySelectorAll('.lighter__light');
    var currentActive = undefined;
    console.log(lights);

    var _loop = function _loop(i) {
        var light = lights[i];
        light.onclick = function () {
            switchOff();
            swithOn(light);
        };
    };

    for (var i = 0; i < lights.length; i++) {
        _loop(i);
    } //параметры то что мы можем указать с какими елементами работать

    function switchOff() {
        if (currentActive) {
            currentActive.classList.remove('active'); // name of class string
        }
    }

    function swithOn(someLight) {
        someLight.classList.add('active');
        currentActive = someLight;
    }
}

function toogler(parent, color) {
    var tooglerElement = document.querySelector(parent);
    var btn = tooglerElement.querySelector('.toggler__btn');
    var blockLamp = tooglerElement.querySelector('.toggler__lamp');
    var isActive = Boolean(blockLamp.style.backgroundColor); //false;
    btn.textContent = isActive ? 'off' : 'on';
    btn.onclick = function () {
        console.log(btn.textContent);
        if (isActive) {
            // btn.textContent = 'Off';//при клике  меняю цвет и текст
            blockLamp.style.backgroundColor = 'transparent';
            isActive = false;
        } else {
            //btn.textContent ='On';
            isActive = true;
            blockLamp.style.backgroundColor = color;
        }
        console.log(blockLamp);
    };
}

toogler('#toggler1', 'red');
lighter('#firstLighter');
lighter('#secondLighter');
lighter('#thirdLighter');

// let arrNumbers = [4, 20, 10000, 100, 145];
//         // function total(numbers) {
//         //     let sum = 0;
//         //     for (let i = 0; i < numbers.length; i++) {
//         //         sum += numbers[i];
//         //     } console.log(sum);
//         // }
//         const total = numbers => { // function declaritons стрелочные функции
//             let maxValue = numbers[0];
//             for (let i = 1; i < numbers.length; i++) {
//                 if (numbers[i] > maxValue) {
//                     maxValue = numbers[i];
//                 }
//             } return maxValue;
//         }
//         let totalPrice = total([20, 90, 9]);
//         console.log(totalPrice);
//         let totalPrice_ = total([20, 30, 901]);
//         console.log(totalPrice_);
//         total(arrNumbers);
// function maxValues(numbers) {
//     let maxValue = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > maxValue) {
//             maxValue = numbers[i];
//         }
//     } console.log(maxValue);
// }

// maxValues(arrNumbers);


// function removeDublicates(array) {

//     for (let i = 0; i < array.length; i++) {
//         let unique = array[i];
//         if( array[i] == unique){
//             delete array[0];

//             //область видимости содержит все переменые внутри 
//  локальное окружение все что снаружи 
//             // 
//             console.log(unique); 
//             // function declaration
//             // 1.в оперативке первое создается функции function !declaration!
//             // интерпретатор сначала ищет. обьявляет задолго до того как их обьявили
//             // даже вложение создает
//             // 2. сначала нужно переменную а потом обращение к ней по сути второго єтапа нету
//             // 
//             // 3. выполнение
//             // let total = function(nubmers {
//             // function expression 
//             // })
//         } 
//     }
// }
// removeDublicates(['ab', 24, 78, 24, 'a', 'test', 78]);

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });