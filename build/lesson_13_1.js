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
/******/ 	return __webpack_require__(__webpack_require__.s = 419);
/******/ })
/************************************************************************/
/******/ ({

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(420);


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(421);

var _button = __webpack_require__(422);

var _modalwindow = __webpack_require__(424);

var modalwindow = new _modalwindow.Modal();
window.modalwindow = modalwindow;

var _loop = function _loop(i) {
    var batn = new _button.Button(undefined, 'Button' + i, function () {
        modalwindow.show('<h2>\'Hello from button\'' + i + '</h2>');
    });
    console.log('button ' + i);
};

for (var i = 0; i < 5; i++) {
    _loop(i);
}

new _button.Button(undefined, 'show alert', function () {
    alert('do you like this?');
});

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(423);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = exports.Button = function () {
    function Button() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
        var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
        var onclick = arguments[2];

        _classCallCheck(this, Button);

        this._target = target;
        this._title = title;
        this._onclick = onclick;
        this.render();
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this._button = document.createElement('button');
            this._button.classList.add('btn');
            this._button.innerHTML = '<span> ' + this._title + ' </span>';

            if (this._onclick) {
                this._button.addEventListener('click', function (e) {
                    _this._onclick(e);
                });
            }

            this._target.appendChild(this._button);
        }
    }]);

    return Button;
}();

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(425);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = exports.Modal = function () {
    function Modal() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

        _classCallCheck(this, Modal);

        this._target = target;
        this._render();
    }

    _createClass(Modal, [{
        key: '_render',
        value: function _render() {
            var _this = this;

            this._modalOutlet = document.createElement('div');
            this._content = document.createElement('div');

            this._closeButton = document.createElement('button');

            this._modalOutlet.classList.add('modal__outlet');
            this._content.classList.add('modal__content');
            this._closeButton.textContent = 'close';
            this._closeButton.addEventListener('click', function () {
                _this.hidden();
            });

            this._modalOutlet.appendChild(this._content);
            this._modalOutlet.appendChild(this._closeButton);
            this._target.appendChild(this._modalOutlet);
        }
    }, {
        key: 'show',
        value: function show(content) {
            this._modalOutlet.classList.add('modal__outlet_active');
            this._content.innerHTML = content;
        }
    }, {
        key: 'hidden',
        value: function hidden() {
            this._modalOutlet.classList.remove('modal__outlet_active');
            this._content.innerHTML = '';
        }
    }]);

    return Modal;
}();

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });