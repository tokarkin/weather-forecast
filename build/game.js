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
/******/ 	return __webpack_require__(__webpack_require__.s = 392);
/******/ })
/************************************************************************/
/******/ ({

/***/ 110:
/***/ (function(module, exports) {

module.exports = "./assets/images/27935-3-hot-wheels-transparent-thumb.png";

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(394);

var _gameKeys = __webpack_require__(395);

var game = new _gameKeys.Game();

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(396);

var _car = __webpack_require__(397);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game() {
        var _this = this;

        var carCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('body');

        _classCallCheck(this, Game);

        this.parent = parentNode;
        this.carCount = carCount;
        this.finishCordinates = 0;
        this.inizialization();
        window.startGame = function () {
            return _this.startGame();
        };
        window.mouseClick = function () {
            return _this.mouseClick();
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
                var car = new _car.NewCar(this.gameField, 2);
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
            // for (let i = 0; i < this.carCount; i++) {
            //     const car = new NewCar(this.gameField, 2);
            //     this.cars.push(car);
            // this.car.onclick = function() {
            //     this.style.left = this.getBoundingClientRect().left + 'px';
            //     this.style.top = this.getBoundingClientRect().top + 'px';

            //     this.style.position = 'fixed';
            //   };
            // this.cars.onkeydown = function (e) {
            //     switch (e.keyCode) {
            //         case 37: // влево
            //             this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
            //             return false;
            //         case 38: // вверх
            //             this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
            //             return false;
            //         case 39: // вправо
            //             this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
            //             return false;
            //         case 40: // вниз
            //             this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
            //             return false;
            //     }

            // }
        }
    }, {
        key: 'moveCar',
        value: function moveCar(car, indexOfCar) {
            var _this3 = this;

            var timeInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;

            return setInterval(function () {
                if (car.coordinates.left <= _this3.finishCordinates) {
                    _this3.car.onkeydown = function (e) {
                        switch (e.keyCode) {
                            case 37:
                                // влево
                                this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
                                this.car.moveLeft();
                                return false;
                            case 38:
                                // вверх
                                this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
                                this.car.moveTop();
                                return false;
                            case 39:
                                // вправо
                                this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
                                this.car.moveRight();
                                return false;
                            case 40:
                                // вниз
                                this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
                                this.car.moveBottom();
                                console.log(car.coordinates.left);
                                return false;
                        }
                    };
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

/***/ 396:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewCar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(398);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imgUrl = __webpack_require__(110);

var NewCar = exports.NewCar = function () {
    function NewCar(parent, speed) {
        _classCallCheck(this, NewCar);

        this.parent = parent;
        this.speed = speed;
        this.coordinates = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.render();
    }

    _createClass(NewCar, [{
        key: 'render',
        value: function render() {
            this.domElement = document.createElement('img');
            this.domElement.classList.add('car');
            this.domElement.style.left = 0;
            this.domElement.src = imgUrl;
            this.parent.appendChild(this.domElement);
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft() {
            var leftCoord = parseInt(this.domElement.style.left) + 1;
            this.domElement.style.left = leftCoord + 'px';
            this.coordinates.left = leftCoord;
        }
    }, {
        key: 'moveRight',
        value: function moveRight() {
            var rightCoord = parseInt(this.domElement.style.right) + 1;
            this.domElement.style.right = rightCoord + 'px';
            this.coordinates.right = rightCoord;
        }
    }, {
        key: 'moveTop',
        value: function moveTop() {
            var topCoord = parseInt(this.domElement.style.top) + 1;
            this.domElement.style.top = topCoord + 'px';
            this.coordinates.top = topCoord;
        }
    }, {
        key: 'moveBottom',
        value: function moveBottom() {
            var bottomCoord = parseInt(this.domElement.style.bottom) + 1;
            this.domElement.style.bottom = bottomCoord + 'px';
            this.coordinates.bottom = bottomCoord;
        }
    }]);

    return NewCar;
}();

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });