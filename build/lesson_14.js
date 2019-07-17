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
/******/ 	return __webpack_require__(__webpack_require__.s = 380);
/******/ })
/************************************************************************/
/******/ ({

/***/ 110:
/***/ (function(module, exports) {

module.exports = "./assets/images/27935-3-hot-wheels-transparent-thumb.png";

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(382);

__webpack_require__(383);

var _dropdown = __webpack_require__(384);

var _game = __webpack_require__(385);

var _driver = __webpack_require__(389);

(0, _dropdown.dropDown)(document.querySelector('#dropDownCountries'), ['Canad', 'Usa', 'kongo']);
// import { Car } from './styles/car';

(0, _dropdown.dropDown)(document.querySelector('#otherDropDown'), ['Usd', 'Can', 'Eur', 'UHR']);

// const tesla = new Car(document.querySelector('#game'),2);
var game = new _game.Game();

// taxiDriver.drive(100);

// function iphone(color, memoryCapacity) {
//     this.color = color;
//     this.memoryCapacity = memoryCapacity;
//     this.call = (number) => {
//         console.log('call from' + this.model + number);
//     }
// }
// const user1 = new Iphone('black', 256);
// const user2Iphone = new Iphone('white', 128); //ecmascript 6

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// function dropDown(parentNode, ) {
//     const btnTitle;
//     let isExpand = false;
//     function open() { // на онклик нельзя несколько обработичков вешать  // 
//         parentNode.classList.add('drop-down-menu_expand');
//         isExpand = true;
//     }
//     function close() {
//         parentNode.classList.remove('drop-down-menu_expand');
//         isExpand = false;
//     }
//     function toggle() {
//         if (isExpand) {
//             close();
//         } else {
//             open();
//         }
//     }

//     btnTitle.addEventListener('click', toggle);
//     function render() {
//         renderBtn();
//         renderList();
//     }


//     function renderBtn() {
//         btnTitle = document.createElement('button');
//         btnTitle.classList.add('drop-down-menu__btn');
//         btnTitle.textContent = 'Toggle';
//         btnTitle.addEventListener('click', toggle);
//         parentNode.appendChild(btnTitle); // dom

//     }

//     function renderList() {
//         let ul = document.createElement('ul');
//         ul.classList.add('drop-down-menu__list');
//         for(const option of options){
//             const li = document.createElement('li');
//             const btn = document.createElement('button');
//             li.classList.add('drop-down-menu__item');
//             btn.classList.add('drop-down-menu__option');
//             li.appendChild(btn);
//             ul.appendChild(li);
//             btn.textContent = option;
//         }
//         parentNode.appendChild(ul);
//     }

//     function handleEventsOnOptions() {
//         // for ( const option of options) {
//         //     options.addEventListener('click', () =>{
//         //         btnTitle.textContent = option.textContent;
//         //     })
//         // }
//         options.forEach((option) => {
//             option.addEventListener('click', () => {
//                 btnTitle.textContent = option.textContent;
//                 close();
//             });
//         });
//     }

//     // span.addEventListener('click', (event) => {
//     //     console.log(event.target);
//     //     event.stopPropagation();       // обработка того или иного события типа всплытия
//     //     console.log('click on span');  // погружение это костыль 
//     // });
//     // parentNode.addEventListener('click', (event) => {
//     //     console.log(event.target);
//     //     console.log('click on span');
//     // });
//     // document.addEventListener('click', (event) => {
//     //     console.log(event.target);
//     // });
// }

// // ga();
// // function ga() {
// //     const btns = document.querySelectorAll('button');
// //     let counter = 0;
// //     for (let i = 0; i < btns.length; i++) {
// //         btns[i].addEventListener('click', function () {
// //             counter++;
// //             console.log(counter);
// //         });
// //     }
// // }


// export { dropDown };
function dropDown(parentNode, options) {
    var btnTitle = void 0;
    var isExpand = false; //OOP

    function open() {
        parentNode.classList.add('drop-down-menu_expand');
        isExpand = true;
    }

    function close() {
        parentNode.classList.remove('drop-down-menu_expand');
        isExpand = false;
    }

    function toggle() {
        if (isExpand) {
            close();
        } else {
            open();
        }
    }

    function render() {
        parentNode.classList.add('drop-down');
        renderBtn();
        renderList();
    }

    function renderBtn() {
        btnTitle = document.createElement('button');
        btnTitle.classList.add('drop-down-menu__btn');
        btnTitle.textContent = 'TOGGLE';
        btnTitle.addEventListener('click', toggle);
        parentNode.appendChild(btnTitle);
    }

    function renderList() {
        var ul = document.createElement('ul');
        ul.classList.add('drop-down-menu__list');

        var _loop = function _loop(option) {
            var li = document.createElement('li');
            var btn = document.createElement('button');

            li.classList.add('drop-down-menu__item');
            btn.classList.add('drop-down-menu__option');
            btn.textContent = option;
            btn.addEventListener('click', function () {
                btnTitle.textContent = option;
                close();
            });
            li.appendChild(btn);
            ul.appendChild(li);
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var option = _step.value;

                _loop(option);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        parentNode.appendChild(ul);
    }

    function handleEventsOnOptions() {
        var _loop2 = function _loop2(option) {
            option.addEventListener('click', function () {
                btnTitle.textContent = option.textContent;
                close();
            });
        };

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var option = _step2.value;

                _loop2(option);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }

    render();
}

exports.dropDown = dropDown;
// свойство которое хранит метод называется 
// обьект и структура данных и ооп
// тип данных и структура данных и методы которые являються функциямы
//

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(386);

var _car = __webpack_require__(387);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game() {
        var _this = this;

        var carCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('body');

        _classCallCheck(this, Game);

        this.parent = parentNode;
        this.carCount = carCount;
        this.finishCordinates = 0;
        this.inizialization();
        window.startGame = function () {
            return _this.startGame();
        };
    }

    _createClass(Game, [{
        key: 'inizialization',
        value: function inizialization() {
            this.render();
            this.renderCars();
        }
    }, {
        key: 'render',
        value: function render() {
            this.gameField = document.createElement('div');
            this.gameField.classList.add('game');
            this.parent.appendChild(this.gameField);
            console.log(this.gameField.getBoundingClientRect);
            var clientReact = this.gameField.getBoundingClientRect();
            var carWidth = 40;
            this.finishCordinates = Math.ceil(clientReact.right - carWidth);
            console.log(this.finishCordinates);
        }
    }, {
        key: 'renderCars',
        value: function renderCars() {
            this.cars = [];
            for (var i = 0; i < this.carCount; i++) {
                var car = new _car.Car(this.gameField, 1);
                this.cars.push(car);
            }
            console.log(this.cars);
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            var _this2 = this;

            this.intervalIds = [];
            this.cars.forEach(function (car, i) {
                var interval = Math.ceil(Math.random() * 150);
                var id = _this2.moveCar(car, i, interval);
                console.log(id);
            });
        }
    }, {
        key: 'moveCar',
        value: function moveCar(car, indexOfCar) {
            var _this3 = this;

            var timeInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;

            return setInterval(function () {
                if (car.coordinates.left <= _this3.finishCordinates) {
                    car.moveForward();
                    console.log(car.coordinates.left);
                } else {
                    console.log('finished', car);
                    _this3.intervalIds.forEach(function (id) {
                        clearInterval(id);
                    });
                    confirm('finished: ' + indexOfCar);
                }
            }, timeInterval);
        }
    }]);

    return Game;
}();

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Car = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // export class Car {
//     constructor(fuel, consumtion){
//         this.fuel = fuel;
//         this.consumtion = consumtion;

//     }   
//     moveForward(){
//         this.fuel-=this.consumtion;
//         console.log('Mover forward', this.fuel);
//     }
//     moveBackward() { 
//         this.fuel-=this.consumtion;
//         this.fuel-=this.consumtion;
//         console.log('Mover back', this.fuel);
//         // let b = 0;
//         // let v = 0;
//         // v = this.consumtion / this.fuel;
//         // b = this.speed / this.consumtion;
//         // console.log(b);
//         // console.log(v);

//     }

// }


__webpack_require__(388);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imgUrl = __webpack_require__(110);

var Car = exports.Car = function () {
    function Car(Parent, speed) {
        _classCallCheck(this, Car);

        this.Parent = Parent;
        this.speed = speed;
        this.coordinates = {
            left: 0
        };
        this.render();
        // window.moveForward = () =>{
        //     this.moveForward; //window хранит все переменные он сделал глобальным
        // }
    }

    _createClass(Car, [{
        key: 'render',
        value: function render() {
            this.domElement = document.createElement('img');
            this.domElement.classList.add('car');
            this.domElement.style.left = 0;
            this.domElement.src = imgUrl;
            this.Parent.appendChild(this.domElement);
        }
    }, {
        key: 'moveForward',
        value: function moveForward() {
            var leftCoord = parseInt(this.domElement.style.left) + 1;
            this.domElement.style.left = leftCoord + 'px';
            this.coordinates.left = leftCoord;
        }
    }]);

    return Car;
}();

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Driver = exports.Driver = function () {
    function Driver(someCar) {
        _classCallCheck(this, Driver);

        this.car = someCar;
    }

    _createClass(Driver, [{
        key: "drive",
        value: function drive(distance) {
            for (var i = 0; i <= distance; i++) {
                try {
                    //обработать ошибку
                    this.car.moveForward();
                } catch (error) {
                    console.log(error.message);
                    break;
                }
            }
        }
    }]);

    return Driver;
}();

/***/ })

/******/ });