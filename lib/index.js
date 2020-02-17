import _reverseInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reverse";
import _Promise2 from "@babel/runtime-corejs3/core-js-stable/promise";
import _Set from "@babel/runtime-corejs3/core-js-stable/set";
import _Map from "@babel/runtime-corejs3/core-js-stable/map";
import _Object$seal from "@babel/runtime-corejs3/core-js-stable/object/seal";
import _Object$freeze from "@babel/runtime-corejs3/core-js-stable/object/freeze";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _Symbol$for from "@babel/runtime-corejs3/core-js-stable/symbol/for";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyNames from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-names";
import _Object$assign from "@babel/runtime-corejs3/core-js-stable/object/assign";
import _Symbol$iterator from "@babel/runtime-corejs3/core-js-stable/symbol/iterator";
import _setTimeout from "@babel/runtime-corejs3/core-js-stable/set-timeout";
import _Object$setPrototypeOf from "@babel/runtime-corejs3/core-js-stable/object/set-prototype-of";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _keysInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/keys";
import _Array$isArray2 from "@babel/runtime-corejs3/core-js-stable/array/is-array";
import _entriesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/entries";
import _Object$getPrototypeOf from "@babel/runtime-corejs3/core-js-stable/object/get-prototype-of";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import _Array$from from "@babel/runtime-corejs3/core-js-stable/array/from";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/bind";
import _Object$create from "@babel/runtime-corejs3/core-js-stable/object/create";
import _typeof from "@babel/runtime-corejs3/helpers/typeof";
import _Symbol$toStringTag from "@babel/runtime-corejs3/core-js-stable/symbol/to-string-tag";
import _Symbol from "@babel/runtime-corejs3/core-js-stable/symbol";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      _Object$defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/

    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof _Symbol !== 'undefined' && _Symbol$toStringTag) {
      /******/
      _Object$defineProperty(exports, _Symbol$toStringTag, {
        value: 'Module'
      });
      /******/

    }
    /******/


    _Object$defineProperty(exports, '__esModule', {
      value: true
    });
    /******/

  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = _Object$create(null);
    /******/


    __webpack_require__.r(ns);
    /******/


    _Object$defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/


    if (mode & 2 && typeof value != 'string') for (var key in value) {
      var _context3;

      __webpack_require__.d(ns, key, _bindInstanceProperty(_context3 = function _context3(key) {
        return value[key];
      }).call(_context3, null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/features/index.tsx");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3CoreJsStableInstanceMapJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! core-js-pure/stable/instance/map */
    "./node_modules/core-js-pure/stable/instance/map.js");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3CoreJsArrayIsArrayJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! core-js-pure/features/array/is-array */
    "./node_modules/core-js-pure/features/array/is-array.js");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3CoreJsGetIteratorJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! core-js-pure/features/get-iterator */
    "./node_modules/core-js-pure/features/get-iterator.js");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3CoreJsIsIterableJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! core-js-pure/features/is-iterable */
    "./node_modules/core-js-pure/features/is-iterable.js");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/core-js/promise.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/core-js/promise.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3CoreJsPromiseJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! core-js-pure/features/promise */
    "./node_modules/core-js-pure/features/promise/index.js");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3HelpersArrayWithHolesJs(module, exports, __webpack_require__) {
    var _Array$isArray = __webpack_require__(
    /*! ../core-js/array/is-array */
    "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js");

    function _arrayWithHoles(arr) {
      if (_Array$isArray(arr)) return arr;
    }

    module.exports = _arrayWithHoles;
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3HelpersAsyncToGeneratorJs(module, exports, __webpack_require__) {
    var _Promise = __webpack_require__(
    /*! ../core-js/promise */
    "./node_modules/@babel/runtime-corejs3/core-js/promise.js");

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        _Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new _Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }

    module.exports = _asyncToGenerator;
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3HelpersIterableToArrayLimitJs(module, exports, __webpack_require__) {
    var _getIterator = __webpack_require__(
    /*! ../core-js/get-iterator */
    "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");

    var _isIterable = __webpack_require__(
    /*! ../core-js/is-iterable */
    "./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js");

    function _iterableToArrayLimit(arr, i) {
      if (!(_isIterable(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    module.exports = _iterableToArrayLimit;
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3HelpersNonIterableRestJs(module, exports) {
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    module.exports = _nonIterableRest;
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3HelpersSlicedToArrayJs(module, exports, __webpack_require__) {
    var arrayWithHoles = __webpack_require__(
    /*! ./arrayWithHoles */
    "./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js");

    var iterableToArrayLimit = __webpack_require__(
    /*! ./iterableToArrayLimit */
    "./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js");

    var nonIterableRest = __webpack_require__(
    /*! ./nonIterableRest */
    "./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js");

    function _slicedToArray(arr, i) {
      return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
    }

    module.exports = _slicedToArray;
    /***/
  },

  /***/
  "./node_modules/@babel/runtime-corejs3/regenerator/index.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@babel/runtime-corejs3/regenerator/index.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeCorejs3RegeneratorIndexJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! regenerator-runtime */
    "./node_modules/regenerator-runtime/runtime.js");
    /***/
  },

  /***/
  "./node_modules/core-js-pure/es/array/is-array.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js-pure/es/array/is-array.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureEsArrayIsArrayJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../../modules/es.array.is-array */
    "./node_modules/core-js-pure/modules/es.array.is-array.js");

    var path = __webpack_require__(
    /*! ../../internals/path */
    "./node_modules/core-js-pure/internals/path.js");

    module.exports = path.Array.isArray;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/es/array/virtual/map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/es/array/virtual/map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureEsArrayVirtualMapJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../../../modules/es.array.map */
    "./node_modules/core-js-pure/modules/es.array.map.js");

    var entryVirtual = __webpack_require__(
    /*! ../../../internals/entry-virtual */
    "./node_modules/core-js-pure/internals/entry-virtual.js");

    module.exports = _mapInstanceProperty(entryVirtual('Array'));
    /***/
  },

  /***/
  "./node_modules/core-js-pure/es/instance/map.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js-pure/es/instance/map.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureEsInstanceMapJs(module, exports, __webpack_require__) {
    var map = __webpack_require__(
    /*! ../array/virtual/map */
    "./node_modules/core-js-pure/es/array/virtual/map.js");

    var ArrayPrototype = Array.prototype;

    module.exports = function (it) {
      var own = _mapInstanceProperty(it);

      return it === ArrayPrototype || it instanceof Array && own === _mapInstanceProperty(ArrayPrototype) ? map : own;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/es/promise/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js-pure/es/promise/index.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureEsPromiseIndexJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../../modules/es.object.to-string */
    "./node_modules/core-js-pure/modules/es.object.to-string.js");

    __webpack_require__(
    /*! ../../modules/es.string.iterator */
    "./node_modules/core-js-pure/modules/es.string.iterator.js");

    __webpack_require__(
    /*! ../../modules/web.dom-collections.iterator */
    "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js");

    __webpack_require__(
    /*! ../../modules/es.promise */
    "./node_modules/core-js-pure/modules/es.promise.js");

    __webpack_require__(
    /*! ../../modules/es.promise.all-settled */
    "./node_modules/core-js-pure/modules/es.promise.all-settled.js");

    __webpack_require__(
    /*! ../../modules/es.promise.finally */
    "./node_modules/core-js-pure/modules/es.promise.finally.js");

    var path = __webpack_require__(
    /*! ../../internals/path */
    "./node_modules/core-js-pure/internals/path.js");

    module.exports = path.Promise;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/features/array/is-array.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/features/array/is-array.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureFeaturesArrayIsArrayJs(module, exports, __webpack_require__) {
    var parent = __webpack_require__(
    /*! ../../es/array/is-array */
    "./node_modules/core-js-pure/es/array/is-array.js");

    module.exports = parent;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/features/get-iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/features/get-iterator.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureFeaturesGetIteratorJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../modules/web.dom-collections.iterator */
    "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js");

    __webpack_require__(
    /*! ../modules/es.string.iterator */
    "./node_modules/core-js-pure/modules/es.string.iterator.js");

    var getIterator = __webpack_require__(
    /*! ../internals/get-iterator */
    "./node_modules/core-js-pure/internals/get-iterator.js");

    module.exports = getIterator;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/features/is-iterable.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/features/is-iterable.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureFeaturesIsIterableJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../modules/web.dom-collections.iterator */
    "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js");

    __webpack_require__(
    /*! ../modules/es.string.iterator */
    "./node_modules/core-js-pure/modules/es.string.iterator.js");

    var isIterable = __webpack_require__(
    /*! ../internals/is-iterable */
    "./node_modules/core-js-pure/internals/is-iterable.js");

    module.exports = isIterable;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/features/promise/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js-pure/features/promise/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureFeaturesPromiseIndexJs(module, exports, __webpack_require__) {
    var parent = __webpack_require__(
    /*! ../../es/promise */
    "./node_modules/core-js-pure/es/promise/index.js");

    __webpack_require__(
    /*! ../../modules/esnext.aggregate-error */
    "./node_modules/core-js-pure/modules/esnext.aggregate-error.js"); // TODO: Remove from `core-js@4`


    __webpack_require__(
    /*! ../../modules/esnext.promise.all-settled */
    "./node_modules/core-js-pure/modules/esnext.promise.all-settled.js");

    __webpack_require__(
    /*! ../../modules/esnext.promise.try */
    "./node_modules/core-js-pure/modules/esnext.promise.try.js");

    __webpack_require__(
    /*! ../../modules/esnext.promise.any */
    "./node_modules/core-js-pure/modules/esnext.promise.any.js");

    module.exports = parent;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/a-function.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/a-function.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsAFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/a-possible-prototype.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsAPossiblePrototypeJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/add-to-unscopables.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsAddToUnscopablesJs(module, exports) {
    module.exports = function () {
      /* empty */
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/an-instance.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsAnInstanceJs(module, exports) {
    module.exports = function (it, Constructor, name) {
      if (!(it instanceof Constructor)) {
        throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/an-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/an-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsAnObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/array-includes.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsArrayIncludesJs(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js-pure/internals/to-indexed-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js-pure/internals/to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js-pure/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod = function createMethod(IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/array-iteration.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsArrayIterationJs(module, exports, __webpack_require__) {
    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js-pure/internals/function-bind-context.js");

    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js-pure/internals/indexed-object.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js-pure/internals/to-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js-pure/internals/to-length.js");

    var arraySpeciesCreate = __webpack_require__(
    /*! ../internals/array-species-create */
    "./node_modules/core-js-pure/internals/array-species-create.js");

    var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

    var createMethod = function createMethod(TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var value, result;

        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);

            if (TYPE) {
              if (IS_MAP) target[index] = result; // map
              else if (result) switch (TYPE) {
                  case 3:
                    return true;
                  // some

                  case 5:
                    return value;
                  // find

                  case 6:
                    return index;
                  // findIndex

                  case 2:
                    push.call(target, value);
                  // filter
                } else if (IS_EVERY) return false; // every
            }
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };

    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6)
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsArrayMethodHasSpeciesSupportJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var V8_VERSION = __webpack_require__(
    /*! ../internals/engine-v8-version */
    "./node_modules/core-js-pure/internals/engine-v8-version.js");

    var SPECIES = wellKnownSymbol('species');

    module.exports = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return V8_VERSION >= 51 || !fails(function () {
        var array = [];
        var constructor = array.constructor = {};

        constructor[SPECIES] = function () {
          return {
            foo: 1
          };
        };

        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/array-method-uses-to-length.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/array-method-uses-to-length.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsArrayMethodUsesToLengthJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var defineProperty = _Object$defineProperty;
    var cache = {};

    var thrower = function thrower(it) {
      throw it;
    };

    module.exports = function (METHOD_NAME, options) {
      if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
      if (!options) options = {};
      var method = [][METHOD_NAME];
      var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
      var argument0 = has(options, 0) ? options[0] : thrower;
      var argument1 = has(options, 1) ? options[1] : undefined;
      return cache[METHOD_NAME] = !!method && !fails(function () {
        if (ACCESSORS && !DESCRIPTORS) return true;
        var O = {
          length: -1
        };
        if (ACCESSORS) defineProperty(O, 1, {
          enumerable: true,
          get: thrower
        });else O[1] = 1;
        method.call(O, argument0, argument1);
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/array-species-create.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsArraySpeciesCreateJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js-pure/internals/is-array.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
    // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

    module.exports = function (originalArray, length) {
      var C;

      if (isArray(originalArray)) {
        C = originalArray.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsCallWithSafeIterationClosingJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js"); // call something on iterator step with safe closing on error


    module.exports = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
      } catch (error) {
        var returnMethod = iterator['return'];
        if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
        throw error;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsCheckCorrectnessOfIterationJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;

    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function next() {
          return {
            done: !!called++
          };
        },
        'return': function _return() {
          SAFE_CLOSING = true;
        }
      };

      iteratorWithReturn[ITERATOR] = function () {
        return this;
      }; // eslint-disable-next-line no-throw-literal


      _Array$from(iteratorWithReturn, function () {
        throw 2;
      });
    } catch (error) {
      /* empty */
    }

    module.exports = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      var ITERATION_SUPPORT = false;

      try {
        var object = {};

        object[ITERATOR] = function () {
          return {
            next: function next() {
              return {
                done: ITERATION_SUPPORT = true
              };
            }
          };
        };

        exec(object);
      } catch (error) {
        /* empty */
      }

      return ITERATION_SUPPORT;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/classof-raw.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsClassofRawJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      var _context4;

      return _sliceInstanceProperty(_context4 = toString.call(it)).call(_context4, 8, -1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/classof.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/classof.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsClassofJs(module, exports, __webpack_require__) {
    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js-pure/internals/to-string-tag-support.js");

    var classofRaw = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js-pure/internals/classof-raw.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

    var CORRECT_ARGUMENTS = classofRaw(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (error) {
        /* empty */
      }
    }; // getting tag from ES6+ `Object.prototype.toString`


    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsCorrectPrototypeGetterJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    module.exports = !fails(function () {
      function F() {
        /* empty */
      }

      F.prototype.constructor = null;
      return _Object$getPrototypeOf(new F()) !== F.prototype;
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsCreateIteratorConstructorJs(module, exports, __webpack_require__) {
    "use strict";

    var IteratorPrototype = __webpack_require__(
    /*! ../internals/iterators-core */
    "./node_modules/core-js-pure/internals/iterators-core.js").IteratorPrototype;

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js-pure/internals/object-create.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js-pure/internals/create-property-descriptor.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js-pure/internals/set-to-string-tag.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(1, next)
      });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsCreateNonEnumerablePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js-pure/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js-pure/internals/create-property-descriptor.js");

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/create-property-descriptor.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsCreatePropertyDescriptorJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/define-iterator.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsDefineIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var createIteratorConstructor = __webpack_require__(
    /*! ../internals/create-iterator-constructor */
    "./node_modules/core-js-pure/internals/create-iterator-constructor.js");

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js-pure/internals/object-get-prototype-of.js");

    var setPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js-pure/internals/object-set-prototype-of.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js-pure/internals/set-to-string-tag.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js-pure/internals/redefine.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js-pure/internals/is-pure.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var IteratorsCore = __webpack_require__(
    /*! ../internals/iterators-core */
    "./node_modules/core-js-pure/internals/iterators-core.js");

    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };

          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };

          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }

        return function () {
          return new IteratorConstructor(this);
        };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? _entriesInstanceProperty(IterablePrototype) || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY; // fix native

      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
              createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          } // Set @@toStringTag to native iterators


          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
      } // fix Array#{values, @@iterator}.name in V8 / FF


      if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return nativeIterator.call(this);
        };
      } // define iterator


      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
      }

      Iterators[NAME] = defaultIterator; // export additional methods

      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else $({
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
      }

      return methods;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/descriptors.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsDescriptorsJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !fails(function () {
      return _Object$defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/document-create-element.js":
  /*!************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    var document = global.document; // typeof document.createElement is 'object' in old IE

    var EXISTS = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/dom-iterables.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsDomIterablesJs(module, exports) {
    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/engine-is-ios.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/engine-is-ios.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsEngineIsIosJs(module, exports, __webpack_require__) {
    var userAgent = __webpack_require__(
    /*! ../internals/engine-user-agent */
    "./node_modules/core-js-pure/internals/engine-user-agent.js");

    module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/engine-user-agent.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsEngineUserAgentJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js-pure/internals/get-built-in.js");

    module.exports = getBuiltIn('navigator', 'userAgent') || '';
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/engine-v8-version.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsEngineV8VersionJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var userAgent = __webpack_require__(
    /*! ../internals/engine-user-agent */
    "./node_modules/core-js-pure/internals/engine-user-agent.js");

    var process = global.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
      match = v8.split('.');
      version = match[0] + match[1];
    } else if (userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);

      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
      }
    }

    module.exports = version && +version;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/entry-virtual.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsEntryVirtualJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js-pure/internals/path.js");

    module.exports = function (CONSTRUCTOR) {
      return path[CONSTRUCTOR + 'Prototype'];
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/enum-bug-keys.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsEnumBugKeysJs(module, exports) {
    // IE8- don't enum bug keys
    module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/export.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js-pure/internals/export.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsExportJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js-pure/internals/is-forced.js");

    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js-pure/internals/path.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js-pure/internals/function-bind-context.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var wrapConstructor = function wrapConstructor(NativeConstructor) {
      var Wrapper = function Wrapper(a, b, c) {
        if (this instanceof NativeConstructor) {
          switch (arguments.length) {
            case 0:
              return new NativeConstructor();

            case 1:
              return new NativeConstructor(a);

            case 2:
              return new NativeConstructor(a, b);
          }

          return new NativeConstructor(a, b, c);
        }

        return NativeConstructor.apply(this, arguments);
      };

      Wrapper.prototype = NativeConstructor.prototype;
      return Wrapper;
    };
    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */


    module.exports = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var PROTO = options.proto;
      var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;
      var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
      var targetPrototype = target.prototype;
      var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
      var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

      for (key in source) {
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

        USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
        targetProperty = target[key];
        if (USE_NATIVE) if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor(nativeSource, key);
          nativeProperty = descriptor && descriptor.value;
        } else nativeProperty = nativeSource[key]; // export native or implementation

        sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
        if (USE_NATIVE && _typeof(targetProperty) === _typeof(sourceProperty)) continue; // bind timers to global for call from export context

        if (_bindInstanceProperty(options) && USE_NATIVE) resultProperty = bind(sourceProperty, global); // wrap global constructors for prevent changs in this version
        else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
          else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty); // default case
            else resultProperty = sourceProperty; // add a flag to not completely full polyfills

        if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(resultProperty, 'sham', true);
        }

        target[key] = resultProperty;

        if (PROTO) {
          VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

          if (!has(path, VIRTUAL_PROTOTYPE)) {
            createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
          } // export virtual prototype methods


          path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

          if (options.real && targetPrototype && !targetPrototype[key]) {
            createNonEnumerableProperty(targetPrototype, key, sourceProperty);
          }
        }
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/fails.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js-pure/internals/fails.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsFailsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/function-bind-context.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsFunctionBindContextJs(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js-pure/internals/a-function.js"); // optional / simple context binding


    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 0:
          return function () {
            return fn.call(that);
          };

        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function ()
      /* ...args */
      {
        return fn.apply(that, arguments);
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/get-built-in.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsGetBuiltInJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js-pure/internals/path.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var aFunction = function aFunction(variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/get-iterator-method.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsGetIteratorMethodJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js-pure/internals/classof.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var ITERATOR = wellKnownSymbol('iterator');

    module.exports = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/get-iterator.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsGetIteratorJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var getIteratorMethod = __webpack_require__(
    /*! ../internals/get-iterator-method */
    "./node_modules/core-js-pure/internals/get-iterator-method.js");

    module.exports = function (it) {
      var iteratorMethod = getIteratorMethod(it);

      if (typeof iteratorMethod != 'function') {
        throw TypeError(String(it) + ' is not iterable');
      }

      return anObject(iteratorMethod.call(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/global.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js-pure/internals/global.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsGlobalJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      var check = function check(it) {
        return it && it.Math == Math && it;
      }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


      module.exports = // eslint-disable-next-line no-undef
      check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(global) == 'object' && global) || // eslint-disable-next-line no-new-func
      Function('return this')();
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/has.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js-pure/internals/has.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsHasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/hidden-keys.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsHiddenKeysJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/host-report-errors.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/host-report-errors.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsHostReportErrorsJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    module.exports = function (a, b) {
      var console = global.console;

      if (console && console.error) {
        arguments.length === 1 ? console.error(a) : console.error(a, b);
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/html.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js-pure/internals/html.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsHtmlJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js-pure/internals/get-built-in.js");

    module.exports = getBuiltIn('document', 'documentElement');
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/ie8-dom-define.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js-pure/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !DESCRIPTORS && !fails(function () {
      return _Object$defineProperty(createElement('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/indexed-object.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIndexedObjectJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js-pure/internals/classof-raw.js");

    var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classof(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/inspect-source.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsInspectSourceJs(module, exports, __webpack_require__) {
    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js-pure/internals/shared-store.js");

    var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

    if (typeof store.inspectSource != 'function') {
      store.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    module.exports = store.inspectSource;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/internal-state.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsInternalStateJs(module, exports, __webpack_require__) {
    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ../internals/native-weak-map */
    "./node_modules/core-js-pure/internals/native-weak-map.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var objectHas = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js-pure/internals/shared-key.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js-pure/internals/hidden-keys.js");

    var WeakMap = global.WeakMap;
    var set, get, has;

    var enforce = function enforce(it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function getterFor(TYPE) {
      return function (it) {
        var state;

        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        }

        return state;
      };
    };

    if (NATIVE_WEAK_MAP) {
      var store = new WeakMap();
      var wmget = store.get;
      var wmhas = store.has;
      var wmset = store.set;

      set = function set(it, metadata) {
        wmset.call(store, it, metadata);
        return metadata;
      };

      get = function get(it) {
        return wmget.call(store, it) || {};
      };

      has = function has(it) {
        return wmhas.call(store, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;

      set = function set(it, metadata) {
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };

      get = function get(it) {
        return objectHas(it, STATE) ? it[STATE] : {};
      };

      has = function has(it) {
        return objectHas(it, STATE);
      };
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIsArrayIteratorMethodJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var ArrayPrototype = Array.prototype; // check on default Array iterator

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/is-array.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/is-array.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIsArrayJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js-pure/internals/classof-raw.js"); // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray


    module.exports = _Array$isArray2 || function isArray(arg) {
      return classof(arg) == 'Array';
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/is-forced.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIsForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var replacement = /#|\.prototype\./;

    var isForced = function isForced(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    module.exports = isForced;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/is-iterable.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/is-iterable.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIsIterableJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js-pure/internals/classof.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var ITERATOR = wellKnownSymbol('iterator');

    module.exports = function (it) {
      var O = Object(it);
      return O[ITERATOR] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins
      || Iterators.hasOwnProperty(classof(O));
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/is-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/is-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIsObjectJs(module, exports) {
    module.exports = function (it) {
      return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/is-pure.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIsPureJs(module, exports) {
    module.exports = true;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/iterate.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/iterate.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIterateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var isArrayIteratorMethod = __webpack_require__(
    /*! ../internals/is-array-iterator-method */
    "./node_modules/core-js-pure/internals/is-array-iterator-method.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js-pure/internals/to-length.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js-pure/internals/function-bind-context.js");

    var getIteratorMethod = __webpack_require__(
    /*! ../internals/get-iterator-method */
    "./node_modules/core-js-pure/internals/get-iterator-method.js");

    var callWithSafeIterationClosing = __webpack_require__(
    /*! ../internals/call-with-safe-iteration-closing */
    "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js");

    var Result = function Result(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
      var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
      var iterator, iterFn, index, length, result, next, step;

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
            if (result && result instanceof Result) return result;
          }

          return new Result(false);
        }

        iterator = iterFn.call(iterable);
      }

      next = iterator.next;

      while (!(step = next.call(iterator)).done) {
        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
        if (_typeof(result) == 'object' && result && result instanceof Result) return result;
      }

      return new Result(false);
    };

    iterate.stop = function (result) {
      return new Result(true, result);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/iterators-core.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIteratorsCoreJs(module, exports, __webpack_require__) {
    "use strict";

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js-pure/internals/object-get-prototype-of.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js-pure/internals/is-pure.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;

    var returnThis = function returnThis() {
      return this;
    }; // `%IteratorPrototype%` object
    // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

    if (_keysInstanceProperty([])) {
      var _context5;

      arrayIterator = _keysInstanceProperty(_context5 = []).call(_context5); // Safari 8 has buggy iterators w/o `next`

      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }

    if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

    if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
      createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    }

    module.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/iterators.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/iterators.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsIteratorsJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/microtask.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/microtask.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsMicrotaskJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js-pure/internals/classof-raw.js");

    var macrotask = __webpack_require__(
    /*! ../internals/task */
    "./node_modules/core-js-pure/internals/task.js").set;

    var IS_IOS = __webpack_require__(
    /*! ../internals/engine-is-ios */
    "./node_modules/core-js-pure/internals/engine-is-ios.js");

    var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
    var process = global.process;
    var Promise = global.Promise;
    var IS_NODE = classof(process) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

    var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
    var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
    var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

    if (!queueMicrotask) {
      flush = function flush() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();

        while (head) {
          fn = head.fn;
          head = head.next;

          try {
            fn();
          } catch (error) {
            if (head) notify();else last = undefined;
            throw error;
          }
        }

        last = undefined;
        if (parent) parent.enter();
      }; // Node.js


      if (IS_NODE) {
        notify = function notify() {
          process.nextTick(flush);
        }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339

      } else if (MutationObserver && !IS_IOS) {
        toggle = true;
        node = document.createTextNode('');
        new MutationObserver(flush).observe(node, {
          characterData: true
        });

        notify = function notify() {
          node.data = toggle = !toggle;
        }; // environments with maybe non-completely correct, but existent Promise

      } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise.resolve(undefined);
        then = promise.then;

        notify = function notify() {
          then.call(promise, flush);
        }; // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout

      } else {
        notify = function notify() {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }
    }

    module.exports = queueMicrotask || function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/native-promise-constructor.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/native-promise-constructor.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsNativePromiseConstructorJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    module.exports = global.Promise;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/native-symbol.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsNativeSymbolJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    module.exports = !!_Object$getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(_Symbol());
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/native-weak-map.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js-pure/internals/inspect-source.js");

    var WeakMap = global.WeakMap;
    module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/new-promise-capability.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/new-promise-capability.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsNewPromiseCapabilityJs(module, exports, __webpack_require__) {
    "use strict";

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js-pure/internals/a-function.js");

    var PromiseCapability = function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    }; // 25.4.1.5 NewPromiseCapability(C)


    module.exports.f = function (C) {
      return new PromiseCapability(C);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/object-create.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-create.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectCreateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var defineProperties = __webpack_require__(
    /*! ../internals/object-define-properties */
    "./node_modules/core-js-pure/internals/object-define-properties.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js-pure/internals/enum-bug-keys.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js-pure/internals/hidden-keys.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js-pure/internals/html.js");

    var documentCreateElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js-pure/internals/document-create-element.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js-pure/internals/shared-key.js");

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function EmptyConstructor() {
      /* empty */
    };

    var scriptTag = function scriptTag(content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


    var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak

      return temp;
    }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


    var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    }; // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug


    var activeXDocument;

    var _NullProtoObject = function NullProtoObject() {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
      } catch (error) {
        /* ignore */
      }

      _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
      var length = enumBugKeys.length;

      while (length--) {
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      }

      return _NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true; // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create

    module.exports = _Object$create || function create(O, Properties) {
      var result;

      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _NullProtoObject();

      return Properties === undefined ? result : defineProperties(result, Properties);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/object-define-properties.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js-pure/internals/object-define-property.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js-pure/internals/object-keys.js"); // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties


    module.exports = DESCRIPTORS ? _Object$defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], Properties[key]);
      }

      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/object-define-property.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js-pure/internals/ie8-dom-define.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js-pure/internals/to-primitive.js");

    var nativeDefineProperty = _Object$defineProperty; // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty

    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js-pure/internals/create-property-descriptor.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js-pure/internals/to-indexed-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js-pure/internals/to-primitive.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js-pure/internals/ie8-dom-define.js");

    var nativeGetOwnPropertyDescriptor = _Object$getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) {
        /* empty */
      }
      if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
  /*!************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js-pure/internals/to-object.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js-pure/internals/shared-key.js");

    var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
    /*! ../internals/correct-prototype-getter */
    "./node_modules/core-js-pure/internals/correct-prototype-getter.js");

    var IE_PROTO = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof

    module.exports = CORRECT_PROTOTYPE_GETTER ? _Object$getPrototypeOf : function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectPrototype : null;
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/object-keys-internal.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js-pure/internals/to-indexed-object.js");

    var indexOf = _indexOfInstanceProperty(__webpack_require__(
    /*! ../internals/array-includes */
    "./node_modules/core-js-pure/internals/array-includes.js"));

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js-pure/internals/hidden-keys.js");

    module.exports = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        !has(hiddenKeys, key) && has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/object-keys.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectKeysJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js-pure/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js-pure/internals/enum-bug-keys.js"); // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys


    module.exports = _Object$keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
    "use strict";

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = _Object$getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
      1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
  /*!************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var aPossiblePrototype = __webpack_require__(
    /*! ../internals/a-possible-prototype */
    "./node_modules/core-js-pure/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */


    module.exports = _Object$setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;

      try {
        setter = _Object$getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
        /* empty */
      }

      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
        return O;
      };
    }() : undefined);
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/object-to-string.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsObjectToStringJs(module, exports, __webpack_require__) {
    "use strict";

    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js-pure/internals/to-string-tag-support.js");

    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js-pure/internals/classof.js"); // `Object.prototype.toString` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring


    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return '[object ' + classof(this) + ']';
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/path.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js-pure/internals/path.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsPathJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/perform.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/perform.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsPerformJs(module, exports) {
    module.exports = function (exec) {
      try {
        return {
          error: false,
          value: exec()
        };
      } catch (error) {
        return {
          error: true,
          value: error
        };
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/promise-resolve.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/promise-resolve.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsPromiseResolveJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    var newPromiseCapability = __webpack_require__(
    /*! ../internals/new-promise-capability */
    "./node_modules/core-js-pure/internals/new-promise-capability.js");

    module.exports = function (C, x) {
      anObject(C);
      if (isObject(x) && x.constructor === C) return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/redefine-all.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/redefine-all.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsRedefineAllJs(module, exports, __webpack_require__) {
    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js-pure/internals/redefine.js");

    module.exports = function (target, src, options) {
      for (var key in src) {
        if (options && options.unsafe && target[key]) target[key] = src[key];else redefine(target, key, src[key], options);
      }

      return target;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/redefine.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/redefine.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsRedefineJs(module, exports, __webpack_require__) {
    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    module.exports = function (target, key, value, options) {
      if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/require-object-coercible.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsRequireObjectCoercibleJs(module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/set-global.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/set-global.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSetGlobalJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    module.exports = function (key, value) {
      try {
        createNonEnumerableProperty(global, key, value);
      } catch (error) {
        global[key] = value;
      }

      return value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/set-species.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/set-species.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSetSpeciesJs(module, exports, __webpack_require__) {
    "use strict";

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js-pure/internals/get-built-in.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js-pure/internals/object-define-property.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var SPECIES = wellKnownSymbol('species');

    module.exports = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = definePropertyModule.f;

      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineProperty(Constructor, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/set-to-string-tag.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSetToStringTagJs(module, exports, __webpack_require__) {
    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js-pure/internals/to-string-tag-support.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js-pure/internals/object-define-property.js").f;

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var toString = __webpack_require__(
    /*! ../internals/object-to-string */
    "./node_modules/core-js-pure/internals/object-to-string.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');

    module.exports = function (it, TAG, STATIC, SET_METHOD) {
      if (it) {
        var target = STATIC ? it : it.prototype;

        if (!has(target, TO_STRING_TAG)) {
          defineProperty(target, TO_STRING_TAG, {
            configurable: true,
            value: TAG
          });
        }

        if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
          createNonEnumerableProperty(target, 'toString', toString);
        }
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/shared-key.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js-pure/internals/shared.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js-pure/internals/uid.js");

    var keys = shared('keys');

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/shared-store.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSharedStoreJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js-pure/internals/set-global.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || setGlobal(SHARED, {});
    module.exports = store;
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/shared.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js-pure/internals/shared.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSharedJs(module, exports, __webpack_require__) {
    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js-pure/internals/is-pure.js");

    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js-pure/internals/shared-store.js");

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.6.4',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/species-constructor.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/species-constructor.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsSpeciesConstructorJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js-pure/internals/an-object.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js-pure/internals/a-function.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
    // https://tc39.github.io/ecma262/#sec-speciesconstructor

    module.exports = function (O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/string-multibyte.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsStringMultibyteJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js-pure/internals/to-integer.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js-pure/internals/require-object-coercible.js"); // `String.prototype.{ codePointAt, at }` methods implementation


    var createMethod = function createMethod(CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? _sliceInstanceProperty(S).call(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
    };

    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/task.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js-pure/internals/task.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsTaskJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js-pure/internals/classof-raw.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js-pure/internals/function-bind-context.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js-pure/internals/html.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js-pure/internals/document-create-element.js");

    var IS_IOS = __webpack_require__(
    /*! ../internals/engine-is-ios */
    "./node_modules/core-js-pure/internals/engine-is-ios.js");

    var location = global.location;
    var set = global.setImmediate;
    var clear = global.clearImmediate;
    var process = global.process;
    var MessageChannel = global.MessageChannel;
    var Dispatch = global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer, channel, port;

    var run = function run(id) {
      // eslint-disable-next-line no-prototype-builtins
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };

    var runner = function runner(id) {
      return function () {
        run(id);
      };
    };

    var listener = function listener(event) {
      run(event.data);
    };

    var post = function post(id) {
      // old engines have not location.origin
      global.postMessage(id + '', location.protocol + '//' + location.host);
    }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


    if (!set || !clear) {
      set = function setImmediate(fn) {
        var args = [];
        var i = 1;

        while (arguments.length > i) {
          args.push(arguments[i++]);
        }

        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
        };

        defer(counter);
        return counter;
      };

      clear = function clearImmediate(id) {
        delete queue[id];
      }; // Node.js 0.8-


      if (classof(process) == 'process') {
        defer = function defer(id) {
          process.nextTick(runner(id));
        }; // Sphere (JS game engine) Dispatch API

      } else if (Dispatch && Dispatch.now) {
        defer = function defer(id) {
          Dispatch.now(runner(id));
        }; // Browsers with MessageChannel, includes WebWorkers
        // except iOS - https://github.com/zloirock/core-js/issues/624

      } else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false); // IE8-
      } else if (ONREADYSTATECHANGE in createElement('script')) {
        defer = function defer(id) {
          html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run(id);
          };
        }; // Rest old browsers

      } else {
        defer = function defer(id) {
          _setTimeout(runner(id), 0);
        };
      }
    }

    module.exports = {
      set: set,
      clear: clear
    };
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/to-absolute-index.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js-pure/internals/to-integer.js");

    var max = Math.max;
    var min = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

    module.exports = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/to-indexed-object.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js-pure/internals/indexed-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js-pure/internals/require-object-coercible.js");

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/to-integer.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToIntegerJs(module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor; // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger

    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/to-length.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-length.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToLengthJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js-pure/internals/to-integer.js");

    var min = Math.min; // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength

    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/to-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToObjectJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js-pure/internals/require-object-coercible.js"); // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject


    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument));
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/to-primitive.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToPrimitiveJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js"); // `ToPrimitive` abstract operation
    // https://tc39.github.io/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input;
      var fn, val;
      if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
      if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/to-string-tag-support.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsToStringTagSupportJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var test = {};
    test[TO_STRING_TAG] = 'z';
    module.exports = String(test) === '[object z]';
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/uid.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js-pure/internals/uid.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsUidJs(module, exports) {
    var id = 0;
    var postfix = Math.random();

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsUseSymbolAsUidJs(module, exports, __webpack_require__) {
    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js-pure/internals/native-symbol.js");

    module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
    && !_Symbol.sham // eslint-disable-next-line no-undef
    && _typeof(_Symbol$iterator) == 'symbol';
    /***/
  },

  /***/
  "./node_modules/core-js-pure/internals/well-known-symbol.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js-pure/internals/shared.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js-pure/internals/has.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js-pure/internals/uid.js");

    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js-pure/internals/native-symbol.js");

    var USE_SYMBOL_AS_UID = __webpack_require__(
    /*! ../internals/use-symbol-as-uid */
    "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");

    var WellKnownSymbolsStore = shared('wks');
    var _Symbol2 = global.Symbol;
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol2 : _Symbol2 && _Symbol2.withoutSetter || uid;

    module.exports = function (name) {
      if (!has(WellKnownSymbolsStore, name)) {
        if (NATIVE_SYMBOL && has(_Symbol2, name)) WellKnownSymbolsStore[name] = _Symbol2[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }

      return WellKnownSymbolsStore[name];
    };
    /***/

  },

  /***/
  "./node_modules/core-js-pure/modules/es.array.is-array.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.array.is-array.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsArrayIsArrayJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js-pure/internals/is-array.js"); // `Array.isArray` method
    // https://tc39.github.io/ecma262/#sec-array.isarray


    $({
      target: 'Array',
      stat: true
    }, {
      isArray: isArray
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/es.array.iterator.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsArrayIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js-pure/internals/to-indexed-object.js");

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js-pure/internals/add-to-unscopables.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js-pure/internals/internal-state.js");

    var defineIterator = __webpack_require__(
    /*! ../internals/define-iterator */
    "./node_modules/core-js-pure/internals/define-iterator.js");

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.github.io/ecma262/#sec-createarrayiterator

    module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind: kind // kind

      }); // `%ArrayIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;

      if (!target || index >= target.length) {
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      }

      if (kind == 'keys') return {
        value: index,
        done: false
      };
      if (kind == 'values') return {
        value: target[index],
        done: false
      };
      return {
        value: [index, target[index]],
        done: false
      };
    }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

    Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/es.array.map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.array.map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsArrayMapJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var $map = _mapInstanceProperty(__webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js-pure/internals/array-iteration.js"));

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js-pure/internals/array-method-has-species-support.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js-pure/internals/array-method-uses-to-length.js");

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

    var USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    // with adding support of @@species

    $({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
    }, {
      map: function map(callbackfn
      /* , thisArg */
      ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/es.object.to-string.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsObjectToStringJs(module, exports) {// empty

    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/es.promise.all-settled.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsPromiseAllSettledJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js-pure/internals/a-function.js");

    var newPromiseCapabilityModule = __webpack_require__(
    /*! ../internals/new-promise-capability */
    "./node_modules/core-js-pure/internals/new-promise-capability.js");

    var perform = __webpack_require__(
    /*! ../internals/perform */
    "./node_modules/core-js-pure/internals/perform.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js-pure/internals/iterate.js"); // `Promise.allSettled` method
    // https://github.com/tc39/proposal-promise-allSettled


    $({
      target: 'Promise',
      stat: true
    }, {
      allSettled: function allSettled(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var promiseResolve = aFunction(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function (promise) {
            var index = counter++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            promiseResolve.call(C, promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[index] = {
                status: 'fulfilled',
                value: value
              };
              --remaining || resolve(values);
            }, function (e) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[index] = {
                status: 'rejected',
                reason: e
              };
              --remaining || resolve(values);
            });
          });
          --remaining || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/es.promise.finally.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.promise.finally.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsPromiseFinallyJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js-pure/internals/is-pure.js");

    var NativePromise = __webpack_require__(
    /*! ../internals/native-promise-constructor */
    "./node_modules/core-js-pure/internals/native-promise-constructor.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js-pure/internals/fails.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js-pure/internals/get-built-in.js");

    var speciesConstructor = __webpack_require__(
    /*! ../internals/species-constructor */
    "./node_modules/core-js-pure/internals/species-constructor.js");

    var promiseResolve = __webpack_require__(
    /*! ../internals/promise-resolve */
    "./node_modules/core-js-pure/internals/promise-resolve.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js-pure/internals/redefine.js"); // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829


    var NON_GENERIC = !!NativePromise && fails(function () {
      NativePromise.prototype['finally'].call({
        then: function then() {
          /* empty */
        }
      }, function () {
        /* empty */
      });
    }); // `Promise.prototype.finally` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.finally

    $({
      target: 'Promise',
      proto: true,
      real: true,
      forced: NON_GENERIC
    }, {
      'finally': function _finally(onFinally) {
        var C = speciesConstructor(this, getBuiltIn('Promise'));
        var isFunction = typeof onFinally == 'function';
        return this.then(isFunction ? function (x) {
          return promiseResolve(C, onFinally()).then(function () {
            return x;
          });
        } : onFinally, isFunction ? function (e) {
          return promiseResolve(C, onFinally()).then(function () {
            throw e;
          });
        } : onFinally);
      }
    }); // patch native Promise.prototype for native async functions

    if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
      redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
    }
    /***/

  },

  /***/
  "./node_modules/core-js-pure/modules/es.promise.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.promise.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsPromiseJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js-pure/internals/is-pure.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js-pure/internals/get-built-in.js");

    var NativePromise = __webpack_require__(
    /*! ../internals/native-promise-constructor */
    "./node_modules/core-js-pure/internals/native-promise-constructor.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js-pure/internals/redefine.js");

    var redefineAll = __webpack_require__(
    /*! ../internals/redefine-all */
    "./node_modules/core-js-pure/internals/redefine-all.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js-pure/internals/set-to-string-tag.js");

    var setSpecies = __webpack_require__(
    /*! ../internals/set-species */
    "./node_modules/core-js-pure/internals/set-species.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js-pure/internals/is-object.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js-pure/internals/a-function.js");

    var anInstance = __webpack_require__(
    /*! ../internals/an-instance */
    "./node_modules/core-js-pure/internals/an-instance.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js-pure/internals/classof-raw.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js-pure/internals/inspect-source.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js-pure/internals/iterate.js");

    var checkCorrectnessOfIteration = __webpack_require__(
    /*! ../internals/check-correctness-of-iteration */
    "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js");

    var speciesConstructor = __webpack_require__(
    /*! ../internals/species-constructor */
    "./node_modules/core-js-pure/internals/species-constructor.js");

    var task = __webpack_require__(
    /*! ../internals/task */
    "./node_modules/core-js-pure/internals/task.js").set;

    var microtask = __webpack_require__(
    /*! ../internals/microtask */
    "./node_modules/core-js-pure/internals/microtask.js");

    var promiseResolve = __webpack_require__(
    /*! ../internals/promise-resolve */
    "./node_modules/core-js-pure/internals/promise-resolve.js");

    var hostReportErrors = __webpack_require__(
    /*! ../internals/host-report-errors */
    "./node_modules/core-js-pure/internals/host-report-errors.js");

    var newPromiseCapabilityModule = __webpack_require__(
    /*! ../internals/new-promise-capability */
    "./node_modules/core-js-pure/internals/new-promise-capability.js");

    var perform = __webpack_require__(
    /*! ../internals/perform */
    "./node_modules/core-js-pure/internals/perform.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js-pure/internals/internal-state.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js-pure/internals/is-forced.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var V8_VERSION = __webpack_require__(
    /*! ../internals/engine-v8-version */
    "./node_modules/core-js-pure/internals/engine-v8-version.js");

    var SPECIES = wellKnownSymbol('species');
    var PROMISE = 'Promise';
    var getInternalState = InternalStateModule.get;
    var setInternalState = InternalStateModule.set;
    var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
    var PromiseConstructor = NativePromise;
    var TypeError = global.TypeError;
    var document = global.document;
    var process = global.process;
    var $fetch = getBuiltIn('fetch');
    var newPromiseCapability = newPromiseCapabilityModule.f;
    var newGenericPromiseCapability = newPromiseCapability;
    var IS_NODE = classof(process) == 'process';
    var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
    var UNHANDLED_REJECTION = 'unhandledrejection';
    var REJECTION_HANDLED = 'rejectionhandled';
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;
    var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
    var FORCED = isForced(PROMISE, function () {
      var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);

      if (!GLOBAL_CORE_JS_PROMISE) {
        // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // We can't detect it synchronously, so just check versions
        if (V8_VERSION === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

        if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
      } // We need Promise#finally in the pure version for preventing prototype pollution


      if (IS_PURE && !PromiseConstructor.prototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes
      // deoptimization and performance degradation
      // https://github.com/zloirock/core-js/issues/679

      if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

      var promise = PromiseConstructor.resolve(1);

      var FakePromise = function FakePromise(exec) {
        exec(function () {
          /* empty */
        }, function () {
          /* empty */
        });
      };

      var constructor = promise.constructor = {};
      constructor[SPECIES] = FakePromise;
      return !(promise.then(function () {
        /* empty */
      }) instanceof FakePromise);
    });
    var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
      PromiseConstructor.all(iterable)['catch'](function () {
        /* empty */
      });
    }); // helpers

    var isThenable = function isThenable(it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };

    var notify = function notify(promise, state, isReject) {
      if (state.notified) return;
      state.notified = true;
      var chain = state.reactions;
      microtask(function () {
        var value = state.value;
        var ok = state.state == FULFILLED;
        var index = 0; // variable length - can't use forEach

        while (chain.length > index) {
          var reaction = chain[index++];
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;

          try {
            if (handler) {
              if (!ok) {
                if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
                state.rejection = HANDLED;
              }

              if (handler === true) result = value;else {
                if (domain) domain.enter();
                result = handler(value); // can throw

                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }

              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (error) {
            if (domain && !exited) domain.exit();
            reject(error);
          }
        }

        state.reactions = [];
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(promise, state);
      });
    };

    var dispatchEvent = function dispatchEvent(name, promise, reason) {
      var event, handler;

      if (DISPATCH_EVENT) {
        event = document.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
      } else event = {
        promise: promise,
        reason: reason
      };

      if (handler = global['on' + name]) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
    };

    var onUnhandled = function onUnhandled(promise, state) {
      task.call(global, function () {
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;

        if (IS_UNHANDLED) {
          result = perform(function () {
            if (IS_NODE) {
              process.emit('unhandledRejection', value, promise);
            } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
          }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

          state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
          if (result.error) throw result.value;
        }
      });
    };

    var isUnhandled = function isUnhandled(state) {
      return state.rejection !== HANDLED && !state.parent;
    };

    var onHandleUnhandled = function onHandleUnhandled(promise, state) {
      task.call(global, function () {
        if (IS_NODE) {
          process.emit('rejectionHandled', promise);
        } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
      });
    };

    var bind = function bind(fn, promise, state, unwrap) {
      return function (value) {
        fn(promise, state, value, unwrap);
      };
    };

    var internalReject = function internalReject(promise, state, value, unwrap) {
      if (state.done) return;
      state.done = true;
      if (unwrap) state = unwrap;
      state.value = value;
      state.state = REJECTED;
      notify(promise, state, true);
    };

    var internalResolve = function internalResolve(promise, state, value, unwrap) {
      if (state.done) return;
      state.done = true;
      if (unwrap) state = unwrap;

      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        var then = isThenable(value);

        if (then) {
          microtask(function () {
            var wrapper = {
              done: false
            };

            try {
              then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
            } catch (error) {
              internalReject(promise, wrapper, error, state);
            }
          });
        } else {
          state.value = value;
          state.state = FULFILLED;
          notify(promise, state, false);
        }
      } catch (error) {
        internalReject(promise, {
          done: false
        }, error, state);
      }
    }; // constructor polyfill


    if (FORCED) {
      // 25.4.3.1 Promise(executor)
      PromiseConstructor = function Promise(executor) {
        anInstance(this, PromiseConstructor, PROMISE);
        aFunction(executor);
        Internal.call(this);
        var state = getInternalState(this);

        try {
          executor(bind(internalResolve, this, state), bind(internalReject, this, state));
        } catch (error) {
          internalReject(this, state, error);
        }
      }; // eslint-disable-next-line no-unused-vars


      Internal = function Promise(executor) {
        setInternalState(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: [],
          rejection: false,
          state: PENDING,
          value: undefined
        });
      };

      Internal.prototype = redefineAll(PromiseConstructor.prototype, {
        // `Promise.prototype.then` method
        // https://tc39.github.io/ecma262/#sec-promise.prototype.then
        then: function then(onFulfilled, onRejected) {
          var state = getInternalPromiseState(this);
          var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = IS_NODE ? process.domain : undefined;
          state.parent = true;
          state.reactions.push(reaction);
          if (state.state != PENDING) notify(this, state, false);
          return reaction.promise;
        },
        // `Promise.prototype.catch` method
        // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
        'catch': function _catch(onRejected) {
          return this.then(undefined, onRejected);
        }
      });

      OwnPromiseCapability = function OwnPromiseCapability() {
        var promise = new Internal();
        var state = getInternalState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, promise, state);
        this.reject = bind(internalReject, promise, state);
      };

      newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      };

      if (!IS_PURE && typeof NativePromise == 'function') {
        nativeThen = NativePromise.prototype.then; // wrap native Promise#then for native async functions

        redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // wrap fetch result

        if (typeof $fetch == 'function') $({
          global: true,
          enumerable: true,
          forced: true
        }, {
          // eslint-disable-next-line no-unused-vars
          fetch: function fetch(input
          /* , init */
          ) {
            return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
          }
        });
      }
    }

    $({
      global: true,
      wrap: true,
      forced: FORCED
    }, {
      Promise: PromiseConstructor
    });
    setToStringTag(PromiseConstructor, PROMISE, false, true);
    setSpecies(PROMISE);
    PromiseWrapper = getBuiltIn(PROMISE); // statics

    $({
      target: PROMISE,
      stat: true,
      forced: FORCED
    }, {
      // `Promise.reject` method
      // https://tc39.github.io/ecma262/#sec-promise.reject
      reject: function reject(r) {
        var capability = newPromiseCapability(this);
        capability.reject.call(undefined, r);
        return capability.promise;
      }
    });
    $({
      target: PROMISE,
      stat: true,
      forced: IS_PURE || FORCED
    }, {
      // `Promise.resolve` method
      // https://tc39.github.io/ecma262/#sec-promise.resolve
      resolve: function resolve(x) {
        return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
      }
    });
    $({
      target: PROMISE,
      stat: true,
      forced: INCORRECT_ITERATION
    }, {
      // `Promise.all` method
      // https://tc39.github.io/ecma262/#sec-promise.all
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var $promiseResolve = aFunction(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function (promise) {
            var index = counter++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            $promiseResolve.call(C, promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
      },
      // `Promise.race` method
      // https://tc39.github.io/ecma262/#sec-promise.race
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function () {
          var $promiseResolve = aFunction(C.resolve);
          iterate(iterable, function (promise) {
            $promiseResolve.call(C, promise).then(capability.resolve, reject);
          });
        });
        if (result.error) reject(result.value);
        return capability.promise;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/es.string.iterator.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsStringIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var charAt = __webpack_require__(
    /*! ../internals/string-multibyte */
    "./node_modules/core-js-pure/internals/string-multibyte.js").charAt;

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js-pure/internals/internal-state.js");

    var defineIterator = __webpack_require__(
    /*! ../internals/define-iterator */
    "./node_modules/core-js-pure/internals/define-iterator.js");

    var STRING_ITERATOR = 'String Iterator';
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
      }); // `%StringIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return {
        value: undefined,
        done: true
      };
      point = charAt(string, index);
      state.index += point.length;
      return {
        value: point,
        done: false
      };
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/esnext.aggregate-error.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/esnext.aggregate-error.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsnextAggregateErrorJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js-pure/internals/descriptors.js");

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js-pure/internals/object-get-prototype-of.js");

    var setPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js-pure/internals/object-set-prototype-of.js");

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js-pure/internals/object-create.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js-pure/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js-pure/internals/create-property-descriptor.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js-pure/internals/iterate.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js-pure/internals/internal-state.js");

    var setInternalState = InternalStateModule.set;
    var getInternalAggregateErrorState = InternalStateModule.getterFor('AggregateError');

    var $AggregateError = function AggregateError(errors, message) {
      var that = this;
      if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);

      if (setPrototypeOf) {
        that = setPrototypeOf(new Error(message), getPrototypeOf(that));
      }

      var errorsArray = [];
      iterate(errors, errorsArray.push, errorsArray);
      if (DESCRIPTORS) setInternalState(that, {
        errors: errorsArray,
        type: 'AggregateError'
      });else that.errors = errorsArray;
      if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
      return that;
    };

    $AggregateError.prototype = create(Error.prototype, {
      constructor: createPropertyDescriptor(5, $AggregateError),
      message: createPropertyDescriptor(5, ''),
      name: createPropertyDescriptor(5, 'AggregateError')
    });
    if (DESCRIPTORS) defineProperty.f($AggregateError.prototype, 'errors', {
      get: function get() {
        return getInternalAggregateErrorState(this).errors;
      },
      configurable: true
    });
    $({
      global: true
    }, {
      AggregateError: $AggregateError
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/esnext.promise.all-settled.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/esnext.promise.all-settled.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsnextPromiseAllSettledJs(module, exports, __webpack_require__) {
    // TODO: Remove from `core-js@4`
    __webpack_require__(
    /*! ./es.promise.all-settled.js */
    "./node_modules/core-js-pure/modules/es.promise.all-settled.js");
    /***/

  },

  /***/
  "./node_modules/core-js-pure/modules/esnext.promise.any.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/esnext.promise.any.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsnextPromiseAnyJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js-pure/internals/a-function.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js-pure/internals/get-built-in.js");

    var newPromiseCapabilityModule = __webpack_require__(
    /*! ../internals/new-promise-capability */
    "./node_modules/core-js-pure/internals/new-promise-capability.js");

    var perform = __webpack_require__(
    /*! ../internals/perform */
    "./node_modules/core-js-pure/internals/perform.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js-pure/internals/iterate.js");

    var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
    // https://github.com/tc39/proposal-promise-any

    $({
      target: 'Promise',
      stat: true
    }, {
      any: function any(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var promiseResolve = aFunction(C.resolve);
          var errors = [];
          var counter = 0;
          var remaining = 1;
          var alreadyResolved = false;
          iterate(iterable, function (promise) {
            var index = counter++;
            var alreadyRejected = false;
            errors.push(undefined);
            remaining++;
            promiseResolve.call(C, promise).then(function (value) {
              if (alreadyRejected || alreadyResolved) return;
              alreadyResolved = true;
              resolve(value);
            }, function (e) {
              if (alreadyRejected || alreadyResolved) return;
              alreadyRejected = true;
              errors[index] = e;
              --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
            });
          });
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
        if (result.error) reject(result.value);
        return capability.promise;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/esnext.promise.try.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/esnext.promise.try.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesEsnextPromiseTryJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js-pure/internals/export.js");

    var newPromiseCapabilityModule = __webpack_require__(
    /*! ../internals/new-promise-capability */
    "./node_modules/core-js-pure/internals/new-promise-capability.js");

    var perform = __webpack_require__(
    /*! ../internals/perform */
    "./node_modules/core-js-pure/internals/perform.js"); // `Promise.try` method
    // https://github.com/tc39/proposal-promise-try


    $({
      target: 'Promise',
      stat: true
    }, {
      'try': function _try(callbackfn) {
        var promiseCapability = newPromiseCapabilityModule.f(this);
        var result = perform(callbackfn);
        (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
        return promiseCapability.promise;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureModulesWebDomCollectionsIteratorJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ./es.array.iterator */
    "./node_modules/core-js-pure/modules/es.array.iterator.js");

    var DOMIterables = __webpack_require__(
    /*! ../internals/dom-iterables */
    "./node_modules/core-js-pure/internals/dom-iterables.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js-pure/internals/global.js");

    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js-pure/internals/classof.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js-pure/internals/iterators.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js-pure/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');

    for (var COLLECTION_NAME in DOMIterables) {
      var Collection = global[COLLECTION_NAME];
      var CollectionPrototype = Collection && Collection.prototype;

      if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }

      Iterators[COLLECTION_NAME] = Iterators.Array;
    }
    /***/

  },

  /***/
  "./node_modules/core-js-pure/stable/instance/map.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js-pure/stable/instance/map.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsPureStableInstanceMapJs(module, exports, __webpack_require__) {
    var parent = __webpack_require__(
    /*! ../../es/instance/map */
    "./node_modules/core-js-pure/es/instance/map.js");

    module.exports = parent;
    /***/
  },

  /***/
  "./node_modules/object-assign/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/object-assign/index.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesObjectAssignIndexJs(module, exports, __webpack_require__) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    /* eslint-disable no-unused-vars */

    var getOwnPropertySymbols = _Object$getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }

      return Object(val);
    }

    function shouldUseNative() {
      try {
        var _context6, _context7;

        if (!_Object$assign) {
          return false;
        } // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118


        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

        test1[5] = 'de';

        if (_Object$getOwnPropertyNames(test1)[0] === '5') {
          return false;
        } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


        var test2 = {};

        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }

        var order2 = _mapInstanceProperty(_context6 = _Object$getOwnPropertyNames(test2)).call(_context6, function (n) {
          return test2[n];
        });

        if (order2.join('') !== '0123456789') {
          return false;
        } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


        var test3 = {};

        _forEachInstanceProperty(_context7 = 'abcdefghijklmnopqrst'.split('')).call(_context7, function (letter) {
          test3[letter] = letter;
        });

        if (_Object$keys(_Object$assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }

        return true;
      } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
      }
    }

    module.exports = shouldUseNative() ? _Object$assign : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };
    /***/
  },

  /***/
  "./node_modules/prop-types/checkPropTypes.js":
  /*!***************************************************!*\
    !*** ./node_modules/prop-types/checkPropTypes.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPropTypesCheckPropTypesJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var printWarning = function printWarning() {};

    if (true) {
      var _context8;

      var ReactPropTypesSecret = __webpack_require__(
      /*! ./lib/ReactPropTypesSecret */
      "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

      var loggedTypeFailures = {};

      var has = _bindInstanceProperty(_context8 = Function.call).call(_context8, Object.prototype.hasOwnProperty);

      printWarning = function printWarning(text) {
        var message = 'Warning: ' + text;

        if (typeof console !== 'undefined') {
          console.error(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }
    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */


    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }

            if (error && !(error instanceof Error)) {
              printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
            }

            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
            }
          }
        }
      }
    }
    /**
     * Resets warning cache when testing.
     *
     * @private
     */


    checkPropTypes.resetWarningCache = function () {
      if (true) {
        loggedTypeFailures = {};
      }
    };

    module.exports = checkPropTypes;
    /***/
  },

  /***/
  "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPropTypesLibReactPropTypesSecretJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    module.exports = ReactPropTypesSecret;
    /***/
  },

  /***/
  "./node_modules/react/cjs/react.development.js":
  /*!*****************************************************!*\
    !*** ./node_modules/react/cjs/react.development.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesReactCjsReactDevelopmentJs(module, exports, __webpack_require__) {
    "use strict";
    /** @license React v16.12.0
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    if (true) {
      (function () {
        'use strict';

        var _assign = __webpack_require__(
        /*! object-assign */
        "./node_modules/object-assign/index.js");

        var checkPropTypes = __webpack_require__(
        /*! prop-types/checkPropTypes */
        "./node_modules/prop-types/checkPropTypes.js"); // TODO: this is special because it gets imported during build.


        var ReactVersion = '16.12.0'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.

        var hasSymbol = typeof _Symbol === 'function' && _Symbol$for;
        var REACT_ELEMENT_TYPE = hasSymbol ? _Symbol$for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? _Symbol$for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? _Symbol$for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? _Symbol$for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? _Symbol$for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? _Symbol$for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? _Symbol$for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? _Symbol$for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? _Symbol$for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? _Symbol$for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? _Symbol$for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? _Symbol$for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? _Symbol$for('react.lazy') : 0xead4;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? _Symbol$for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? _Symbol$for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? _Symbol$for('react.scope') : 0xead7;
        var MAYBE_ITERATOR_SYMBOL = typeof _Symbol === 'function' && _Symbol$iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';

        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
            return null;
          }

          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }

          return null;
        } // Do not require this module directly! Use normal `invariant` calls with
        // template literal strings. The messages will be replaced with error codes
        // during build.

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        /**
         * Forked from fbjs/warning:
         * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
         *
         * Only change is we use console.warn instead of console.error,
         * and do nothing when 'console' is not supported.
         * This really simplifies the code.
         * ---
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */


        var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

        {
          var printWarning = function printWarning(format) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });

            if (typeof console !== 'undefined') {
              console.warn(message);
            }

            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
            if (format === undefined) {
              throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
            }

            if (!condition) {
              var _context9;

              for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }

              printWarning.apply(void 0, _concatInstanceProperty(_context9 = [format]).call(_context9, args));
            }
          };
        }
        var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;
        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warningWithoutStack = function warningWithoutStack() {};

        {
          warningWithoutStack = function warningWithoutStack(condition, format) {
            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }

            if (format === undefined) {
              throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
            }

            if (args.length > 8) {
              // Check before the condition to catch violations early.
              throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
            }

            if (condition) {
              return;
            }

            if (typeof console !== 'undefined') {
              var argsWithFormat = _mapInstanceProperty(args).call(args, function (item) {
                return '' + item;
              });

              argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
              // breaks IE9: https://github.com/facebook/react/issues/13610

              Function.prototype.apply.call(console.error, console, argsWithFormat);
            }

            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              var argIndex = 0;
              var message = 'Warning: ' + format.replace(/%s/g, function () {
                return args[argIndex++];
              });
              throw new Error(message);
            } catch (x) {}
          };
        }
        var warningWithoutStack$1 = warningWithoutStack;
        var didWarnStateUpdateForUnmountedComponent = {};

        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
            var warningKey = componentName + "." + callerName;

            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }

            warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        /**
         * This is the abstract API for an update queue.
         */


        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function isMounted(publicInstance) {
            return false;
          },

          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },

          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
          },

          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
          }
        };
        var emptyObject = {};
        {
          _Object$freeze(emptyObject);
        }
        /**
         * Base class helpers for the updating state of a component.
         */

        function Component(props, context, updater) {
          this.props = props;
          this.context = context; // If a component has string refs, we will assign a different object later.

          this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
          // renderer.

          this.updater = updater || ReactNoopUpdateQueue;
        }

        Component.prototype.isReactComponent = {};
        /**
         * Sets a subset of the state. Always use this to mutate
         * state. You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * There is no guarantee that calls to `setState` will run synchronously,
         * as they may eventually be batched together.  You can provide an optional
         * callback that will be executed when the call to setState is actually
         * completed.
         *
         * When a function is provided to setState, it will be called at some point in
         * the future (not synchronously). It will be called with the up to date
         * component arguments (state, props, context). These values can be different
         * from this.* because your function may be called after receiveProps but before
         * shouldComponentUpdate, and this new state, props, and context will not yet be
         * assigned to this.
         *
         * @param {object|function} partialState Next partial state or function to
         *        produce next partial state to be merged with current state.
         * @param {?function} callback Called after state is updated.
         * @final
         * @protected
         */

        Component.prototype.setState = function (partialState, callback) {
          if (!(_typeof(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }

          this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {?function} callback Called after update is complete.
         * @final
         * @protected
         */


        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        /**
         * Deprecated APIs. These APIs used to exist on classic React classes but since
         * we would like to deprecate them, we're not going to move them over to this
         * modern base class. Instead, we define a getter that warns if it's accessed.
         */


        {
          var deprecatedAPIs = {
            isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
            replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
          };

          var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
            _Object$defineProperty(Component.prototype, methodName, {
              get: function get() {
                lowPriorityWarningWithoutStack$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
              }
            });
          };

          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }

        function ComponentDummy() {}

        ComponentDummy.prototype = Component.prototype;
        /**
         * Convenience component with default shallow equality check for sCU.
         */

        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context; // If a component has string refs, we will assign a different object later.

          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }

        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

        _assign(pureComponentPrototype, Component.prototype);

        pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

        function createRef() {
          var refObject = {
            current: null
          };
          {
            _Object$seal(refObject);
          }
          return refObject;
        }
        /**
         * Keeps track of the current dispatcher.
         */


        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        /**
         * Keeps track of the current batch's configuration such as how long an update
         * should suspend for if it needs to.
         */

        var ReactCurrentBatchConfig = {
          suspense: null
        };
        /**
         * Keeps track of the current owner.
         *
         * The current owner is the component who should own any components that are
         * currently being constructed.
         */

        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

        var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
          var sourceInfo = '';

          if (source) {
            var path = source.fileName;
            var fileName = path.replace(BEFORE_SLASH_RE, '');
            {
              // In DEV, include code for a common special case:
              // prefer "folder/index.js" instead of just "index.js".
              if (/^index\./.test(fileName)) {
                var match = path.match(BEFORE_SLASH_RE);

                if (match) {
                  var pathBeforeSlash = match[1];

                  if (pathBeforeSlash) {
                    var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                    fileName = folderName + '/' + fileName;
                  }
                }
              }
            }
            sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
          } else if (ownerName) {
            sourceInfo = ' (created by ' + ownerName + ')';
          }

          return '\n    in ' + (name || 'Unknown') + sourceInfo;
        };

        var Resolved = 1;

        function refineResolvedLazyComponent(lazyComponent) {
          return lazyComponent._status === Resolved ? lazyComponent._result : null;
        }

        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || '';
          return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
        }

        function getComponentName(type) {
          if (type == null) {
            // Host root, text node or just invalid type.
            return null;
          }

          {
            if (typeof type.tag === 'number') {
              warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
            }
          }

          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }

          if (typeof type === 'string') {
            return type;
          }

          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return 'Fragment';

            case REACT_PORTAL_TYPE:
              return 'Portal';

            case REACT_PROFILER_TYPE:
              return "Profiler";

            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';

            case REACT_SUSPENSE_TYPE:
              return 'Suspense';

            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }

          if (_typeof(type) === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return 'Context.Consumer';

              case REACT_PROVIDER_TYPE:
                return 'Context.Provider';

              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');

              case REACT_MEMO_TYPE:
                return getComponentName(type.type);

              case REACT_LAZY_TYPE:
                {
                  var thenable = type;
                  var resolvedThenable = refineResolvedLazyComponent(thenable);

                  if (resolvedThenable) {
                    return getComponentName(resolvedThenable);
                  }

                  break;
                }
            }
          }

          return null;
        }

        var ReactDebugCurrentFrame = {};
        var currentlyValidatingElement = null;

        function setCurrentlyValidatingElement(element) {
          {
            currentlyValidatingElement = element;
          }
        }

        {
          // Stack implementation injected by the current renderer.
          ReactDebugCurrentFrame.getCurrentStack = null;

          ReactDebugCurrentFrame.getStackAddendum = function () {
            var stack = ''; // Add an extra top frame while an element is being validated

            if (currentlyValidatingElement) {
              var name = getComponentName(currentlyValidatingElement.type);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
            } // Delegate to the injected renderer-specific implementation


            var impl = ReactDebugCurrentFrame.getCurrentStack;

            if (impl) {
              stack += impl() || '';
            }

            return stack;
          };
        }
        /**
         * Used by act() to track whether you're inside an act() scope.
         */

        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher: ReactCurrentDispatcher,
          ReactCurrentBatchConfig: ReactCurrentBatchConfig,
          ReactCurrentOwner: ReactCurrentOwner,
          IsSomeRendererActing: IsSomeRendererActing,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };
        {
          _assign(ReactSharedInternals, {
            // These should not be included in production.
            ReactDebugCurrentFrame: ReactDebugCurrentFrame,
            // Shim for React DOM 16.0.0 which still destructured (but not used) this.
            // TODO: remove in React 17.0.
            ReactComponentTreeHook: {}
          });
        }
        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warning = warningWithoutStack$1;
        {
          warning = function warning(condition, format) {
            var _context10;

            if (condition) {
              return;
            }

            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }

            warningWithoutStack$1.apply(void 0, _concatInstanceProperty(_context10 = [false, format + '%s']).call(_context10, args, [stack]));
          };
        }
        var warning$1 = warning;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;

        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = _Object$getOwnPropertyDescriptor(config, 'ref').get;

              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }

        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = _Object$getOwnPropertyDescriptor(config, 'key').get;

              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }

        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function warnAboutAccessingKey() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          };

          warnAboutAccessingKey.isReactWarning = true;

          _Object$defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }

        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function warnAboutAccessingRef() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          };

          warnAboutAccessingRef.isReactWarning = true;

          _Object$defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        /**
         * Factory method to create a new React element. This no longer adheres to
         * the class pattern, so do not use new to call it. Also, instanceof check
         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
         * if something is a React Element.
         *
         * @param {*} type
         * @param {*} props
         * @param {*} key
         * @param {string|object} ref
         * @param {*} owner
         * @param {*} self A *temporary* helper to detect places where `this` is
         * different from the `owner` when React.createElement is called, so that we
         * can warn. We want to get rid of owner and replace string `ref`s with arrow
         * functions, and as long as `this` and owner are the same, there will be no
         * change in behavior.
         * @param {*} source An annotation object (added by a transpiler or otherwise)
         * indicating filename, line number, and/or other information.
         * @internal
         */


        var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.

            _Object$defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            }); // self and source are DEV only properties.


            _Object$defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            }); // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.


            _Object$defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });

            if (_Object$freeze) {
              _Object$freeze(element.props);

              _Object$freeze(element);
            }
          }
          return element;
        };
        /**
         * https://github.com/reactjs/rfcs/pull/107
         * @param {*} type
         * @param {object} props
         * @param {string} key
         */

        /**
         * https://github.com/reactjs/rfcs/pull/107
         * @param {*} type
         * @param {object} props
         * @param {string} key
         */


        function jsxDEV(type, config, maybeKey, source, self) {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null; // Currently, key can be spread in as a prop. This causes a potential
          // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
          // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
          // but as an intermediary step, we will use jsxDEV for everything except
          // <div {...props} key="Hi" />, because we aren't currently able to tell if
          // key is explicitly declared to be undefined or not.

          if (maybeKey !== undefined) {
            key = '' + maybeKey;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          if (hasValidRef(config)) {
            ref = config.ref;
          } // Remaining properties are added to a new props object


          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          } // Resolve default props


          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;

            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }

          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }

          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        /**
         * Create and return a new ReactElement of the given type.
         * See https://reactjs.org/docs/react-api.html#createelement
         */


        function createElement(type, config, children) {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;

          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
            }

            if (hasValidKey(config)) {
              key = '' + config.key;
            }

            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          } // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.


          var childrenLength = arguments.length - 2;

          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);

            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }

            {
              if (_Object$freeze) {
                _Object$freeze(childArray);
              }
            }
            props.children = childArray;
          } // Resolve default props


          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;

            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }

          {
            if (key || ref) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }

              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        /**
         * Return a function that produces ReactElements of a given type.
         * See https://reactjs.org/docs/react-api.html#createfactory
         */


        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        /**
         * Clone and return a new ReactElement using element as the starting point.
         * See https://reactjs.org/docs/react-api.html#cloneelement
         */


        function cloneElement(element, config, children) {
          if (!!(element === null || element === undefined)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }

          var propName; // Original props are copied

          var props = _assign({}, element.props); // Reserved names are extracted


          var key = element.key;
          var ref = element.ref; // Self is preserved since the owner is preserved.

          var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
          // transpiler, and the original source is probably a better indicator of the
          // true owner.

          var source = element._source; // Owner will be preserved, unless ref is overridden

          var owner = element._owner;

          if (config != null) {
            if (hasValidRef(config)) {
              // Silently steal the ref from the parent.
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }

            if (hasValidKey(config)) {
              key = '' + config.key;
            } // Remaining properties override existing props


            var defaultProps;

            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }

            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) {
                  // Resolve default props
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          } // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.


          var childrenLength = arguments.length - 2;

          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);

            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }

            props.children = childArray;
          }

          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        /**
         * Verifies the object is a ReactElement.
         * See https://reactjs.org/docs/react-api.html#isvalidelement
         * @param {?object} object
         * @return {boolean} True if `object` is a ReactElement.
         * @final
         */


        function isValidElement(object) {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }

        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        /**
         * Escape and wrap key so it is safe to use as a reactid
         *
         * @param {string} key to be escaped.
         * @return {string} the escaped key.
         */

        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            '=': '=0',
            ':': '=2'
          };
          var escapedString = ('' + key).replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return '$' + escapedString;
        }
        /**
         * TODO: Test that a single child and an array with one item have the same key
         * pattern.
         */


        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;

        function escapeUserProvidedKey(text) {
          return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
        }

        var POOL_SIZE = 10;
        var traverseContextPool = [];

        function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix: keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }

        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;

          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }
        /**
         * @param {?*} children Children tree container.
         * @param {!string} nameSoFar Name of the key path so far.
         * @param {!function} callback Callback to invoke with each child found.
         * @param {?*} traverseContext Used to pass information throughout the traversal
         * process.
         * @return {!number} The number of children in this subtree.
         */


        function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
          var type = _typeof(children);

          if (type === 'undefined' || type === 'boolean') {
            // All of the above are perceived as null.
            children = null;
          }

          var invokeCallback = false;

          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;

              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }

            }
          }

          if (invokeCallback) {
            callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows.
            nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
            return 1;
          }

          var child;
          var nextName;
          var subtreeCount = 0; // Count of children found in the current subtree.

          var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

          if (_Array$isArray2(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            var iteratorFn = getIteratorFn(children);

            if (typeof iteratorFn === 'function') {
              {
                // Warn about using Maps as children
                if (iteratorFn === _entriesInstanceProperty(children)) {
                  !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(children);
              var step;
              var ii = 0;

              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else if (type === 'object') {
              var addendum = '';
              {
                addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = '' + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + _Object$keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
                }
              }
            }
          }

          return subtreeCount;
        }
        /**
         * Traverses children that are typically specified as `props.children`, but
         * might also be specified through attributes:
         *
         * - `traverseAllChildren(this.props.children, ...)`
         * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
         *
         * The `traverseContext` is an optional argument that is passed through the
         * entire traversal. It can be used to store accumulations or anything else that
         * the callback might find relevant.
         *
         * @param {?*} children Children tree object.
         * @param {!function} callback To invoke upon traversing each child.
         * @param {?*} traverseContext Context for traversal.
         * @return {!number} The number of children in this subtree.
         */


        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }

          return traverseAllChildrenImpl(children, '', callback, traverseContext);
        }
        /**
         * Generate a key string that identifies a component within a set.
         *
         * @param {*} component A component that could contain a manual key.
         * @param {number} index Index that is used if a manual key is not provided.
         * @return {string}
         */


        function getComponentKey(component, index) {
          // Do some typechecking here since we call this blindly. We want to ensure
          // that we don't block potential future ES APIs.
          if (_typeof(component) === 'object' && component !== null && component.key != null) {
            // Explicit key
            return escape(component.key);
          } // Implicit key determined by the index in the set


          return index.toString(36);
        }

        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func,
              context = bookKeeping.context;
          func.call(context, child, bookKeeping.count++);
        }
        /**
         * Iterates through children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
         *
         * The provided forEachFunc(child, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} forEachFunc
         * @param {*} forEachContext Context for forEachContext.
         */


        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }

          var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }

        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result,
              keyPrefix = bookKeeping.keyPrefix,
              func = bookKeeping.func,
              context = bookKeeping.context;
          var mappedChild = func.call(context, child, bookKeeping.count++);

          if (_Array$isArray2(mappedChild)) {
            mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
            }

            result.push(mappedChild);
          }
        }

        function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
          var escapedPrefix = '';

          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + '/';
          }

          var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
          traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        /**
         * Maps children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenmap
         *
         * The provided mapFunction(child, key, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} func The map function.
         * @param {*} context Context for mapFunction.
         * @return {object} Object containing the ordered map of results.
         */


        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }

          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }
        /**
         * Count the number of children that are typically specified as
         * `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrencount
         *
         * @param {?*} children Children tree container.
         * @return {number} The number of children.
         */


        function countChildren(children) {
          return traverseAllChildren(children, function () {
            return null;
          }, null);
        }
        /**
         * Flatten a children object (typically specified as `props.children`) and
         * return an array with appropriately re-keyed children.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
         */


        function toArray(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
            return child;
          });
          return result;
        }
        /**
         * Returns the first child in a collection of children and verifies that there
         * is only one child in the collection.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenonly
         *
         * The current implementation of this function assumes that a single child gets
         * passed without a wrapper, but the purpose of this helper function is to
         * abstract away the particular structure of children.
         *
         * @param {?object} children Child collection structure.
         * @return {ReactElement} The first and only `ReactElement` contained in the
         * structure.
         */


        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }

          return children;
        }

        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === undefined) {
            calculateChangedBits = null;
          } else {
            {
              !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
            }
          }

          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          {
            // A separate object, but proxies back to the original context object for
            // backwards compatibility. It has a different $$typeof, so we can properly
            // warn for the incorrect usage of Context as a Consumer.
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

            _Object$defineProperties(Consumer, {
              Provider: {
                get: function get() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                  }

                  return context.Provider;
                },
                set: function set(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function get() {
                  return context._currentValue;
                },
                set: function set(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function get() {
                  return context._currentValue2;
                },
                set: function set(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function get() {
                  return context._threadCount;
                },
                set: function set(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function get() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                  }

                  return context.Consumer;
                }
              }
            }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty


            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }

        function lazy(ctor) {
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _ctor: ctor,
            // React uses these fields to store the result.
            _status: -1,
            _result: null
          };
          {
            // In production, this would just set it on the object.
            var defaultProps;
            var propTypes;

            _Object$defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function get() {
                  return defaultProps;
                },
                set: function set(newDefaultProps) {
                  warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                  defaultProps = newDefaultProps; // Match production behavior more closely:

                  _Object$defineProperty(lazyType, 'defaultProps', {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function get() {
                  return propTypes;
                },
                set: function set(newPropTypes) {
                  warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                  propTypes = newPropTypes; // Match production behavior more closely:

                  _Object$defineProperty(lazyType, 'propTypes', {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }

        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
            } else if (typeof render !== 'function') {
              warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
            } else {
              !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
              render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
            }

            if (render != null) {
              !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
            }
          }
          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
          };
        }

        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
        }

        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
            }
          }
          return {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
          };
        }

        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;

          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }

          return dispatcher;
        }

        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && _Array$isArray2(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0; // TODO: add a more generic warning for invalid values.

            if (Context._context !== undefined) {
              var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
              // and nobody should be using this in existing code.

              if (realContext.Consumer === Context) {
                warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
              } else if (realContext.Provider === Context) {
                warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }

        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }

        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }

        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }

        function useEffect(create, inputs) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, inputs);
        }

        function useLayoutEffect(create, inputs) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, inputs);
        }

        function useCallback(callback, inputs) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, inputs);
        }

        function useMemo(create, inputs) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, inputs);
        }

        function useImperativeHandle(ref, create, inputs) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, inputs);
        }

        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }

        var emptyObject$1 = {};

        function useResponder(responder, listenerProps) {
          var dispatcher = resolveDispatcher();
          {
            if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
              warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
              return;
            }
          }
          return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
        }

        function useTransition(config) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition(config);
        }

        function useDeferredValue(value, config) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value, config);
        }

        function withSuspenseConfig(scope, config) {
          var previousConfig = ReactCurrentBatchConfig.suspense;
          ReactCurrentBatchConfig.suspense = config === undefined ? null : config;

          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.suspense = previousConfig;
          }
        }
        /**
         * ReactElementValidator provides a wrapper around a element factory
         * which validates the props passed to the element. This is intended to be
         * used only in DEV and could be replaced by a static type checker for languages
         * that support it.
         */


        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);

            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }

          return '';
        }

        function getSourceInfoErrorAddendum(source) {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }

          return '';
        }

        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== undefined) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }

          return '';
        }
        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */


        var ownerHasKeyUseWarning = {};

        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();

          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }

          return info;
        }
        /**
         * Warn if the element doesn't have an explicit key assigned to it.
         * This element is in an array. The array could grow and shrink or be
         * reordered. All children that haven't already been validated are required to
         * have a "key" property assigned to it. Error statuses are cached so a warning
         * will only be shown once.
         *
         * @internal
         * @param {ReactElement} element Element that requires a key.
         * @param {*} parentType element's parent's type.
         */


        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }

          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }

          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';

          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }

          setCurrentlyValidatingElement(element);
          {
            warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
          }
          setCurrentlyValidatingElement(null);
        }
        /**
         * Ensure that every element either is passed in a static location, in an
         * array with an explicit keys property defined, or in an object literal
         * with valid key property.
         *
         * @internal
         * @param {ReactNode} node Statically passed child of any type.
         * @param {*} parentType node's parent's type.
         */


        function validateChildKeys(node, parentType) {
          if (_typeof(node) !== 'object') {
            return;
          }

          if (_Array$isArray2(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];

              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);

            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== _entriesInstanceProperty(node)) {
                var iterator = iteratorFn.call(node);
                var step;

                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        /**
         * Given an element, validate that its props follow the propTypes definition,
         * provided by the type.
         *
         * @param {ReactElement} element
         */


        function validatePropTypes(element) {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var name = getComponentName(type);
          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            setCurrentlyValidatingElement(element);
            checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
            setCurrentlyValidatingElement(null);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function') {
            !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
          }
        }
        /**
         * Given a fragment, validate that it can only be provided with fragment props
         * @param {ReactElement} fragment
         */


        function validateFragmentProps(fragment) {
          setCurrentlyValidatingElement(fragment);

          var keys = _Object$keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              break;
            }
          }

          if (fragment.ref !== null) {
            warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
          }

          setCurrentlyValidatingElement(null);
        }

        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';

            if (type === undefined || _typeof(type) === 'object' && type !== null && _Object$keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }

            var sourceInfo = getSourceInfoErrorAddendum(source);

            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }

            var typeString;

            if (type === null) {
              typeString = 'null';
            } else if (_Array$isArray2(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = _typeof(type);
            }

            warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }

          var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)


          if (validType) {
            var children = props.children;

            if (children !== undefined) {
              if (isStaticChildren) {
                if (_Array$isArray2(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }

                  if (_Object$freeze) {
                    _Object$freeze(children);
                  }
                } else {
                  warning$1(false, 'React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }

          if (hasOwnProperty$1.call(props, 'key')) {
            warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
          }

          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }

          return element;
        } // These two functions exist to still get child warnings in dev
        // even with the prod transform. This means that jsxDEV is purely
        // opt-in behavior for better messages but that we won't stop
        // giving you warnings if you use production apis.


        function jsxWithValidationStatic(type, props, key) {
          return jsxWithValidation(type, props, key, true);
        }

        function jsxWithValidationDynamic(type, props, key) {
          return jsxWithValidation(type, props, key, false);
        }

        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';

            if (type === undefined || _typeof(type) === 'object' && type !== null && _Object$keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }

            var sourceInfo = getSourceInfoErrorAddendumForProps(props);

            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }

            var typeString;

            if (type === null) {
              typeString = 'null';
            } else if (_Array$isArray2(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = _typeof(type);
            }

            warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }

          var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)


          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }

          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }

          return element;
        }

        function createFactoryWithValidation(type) {
          var validatedFactory = _bindInstanceProperty(createElementWithValidation).call(createElementWithValidation, null, type);

          validatedFactory.type = type; // Legacy hook: remove it

          {
            _Object$defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function get() {
                lowPriorityWarningWithoutStack$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

                _Object$defineProperty(this, 'type', {
                  value: type
                });

                return type;
              }
            });
          }
          return validatedFactory;
        }

        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);

          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }

          validatePropTypes(newElement);
          return newElement;
        }

        var hasBadMapPolyfill;
        {
          hasBadMapPolyfill = false;

          try {
            var frozenObject = _Object$freeze({});

            var testMap = new _Map([[frozenObject, null]]);
            var testSet = new _Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
            // https://github.com/rollup/rollup/issues/1771
            // TODO: we can remove these if Rollup fixes the bug.

            testMap.set(0, 0);
            testSet.add(0);
          } catch (e) {
            // TODO: Consider warning about bad polyfills
            hasBadMapPolyfill = true;
          }
        }

        function createFundamentalComponent(impl) {
          // We use responder as a Map key later on. When we have a bad
          // polyfill, then we can't use it as a key as the polyfill tries
          // to add a property to the object.
          if (true && !hasBadMapPolyfill) {
            _Object$freeze(impl);
          }

          var fundamantalComponent = {
            $$typeof: REACT_FUNDAMENTAL_TYPE,
            impl: impl
          };
          {
            _Object$freeze(fundamantalComponent);
          }
          return fundamantalComponent;
        }

        function createEventResponder(displayName, responderConfig) {
          var getInitialState = responderConfig.getInitialState,
              onEvent = responderConfig.onEvent,
              onMount = responderConfig.onMount,
              onUnmount = responderConfig.onUnmount,
              onRootEvent = responderConfig.onRootEvent,
              rootEventTypes = responderConfig.rootEventTypes,
              targetEventTypes = responderConfig.targetEventTypes,
              targetPortalPropagation = responderConfig.targetPortalPropagation;
          var eventResponder = {
            $$typeof: REACT_RESPONDER_TYPE,
            displayName: displayName,
            getInitialState: getInitialState || null,
            onEvent: onEvent || null,
            onMount: onMount || null,
            onRootEvent: onRootEvent || null,
            onUnmount: onUnmount || null,
            rootEventTypes: rootEventTypes || null,
            targetEventTypes: targetEventTypes || null,
            targetPortalPropagation: targetPortalPropagation || false
          }; // We use responder as a Map key later on. When we have a bad
          // polyfill, then we can't use it as a key as the polyfill tries
          // to add a property to the object.

          if (true && !hasBadMapPolyfill) {
            _Object$freeze(eventResponder);
          }

          return eventResponder;
        }

        function createScope() {
          var scopeComponent = {
            $$typeof: REACT_SCOPE_TYPE
          };
          {
            _Object$freeze(scopeComponent);
          }
          return scopeComponent;
        } // Helps identify side effects in render-phase lifecycle hooks and setState
        // reducers by double invoking them in Strict Mode.
        // To preserve the "Pause on caught exceptions" behavior of the debugger, we
        // replay the begin phase of a failed component inside invokeGuardedCallback.
        // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
        // Gather advanced timing metrics for Profiler subtrees.
        // Trace which interactions trigger each commit.
        // SSR experiments
        // Only used in www builds.
        // Only used in www builds.
        // Disable javascript: URL strings in href for XSS protection.
        // React Fire: prevent the value and checked attributes from syncing
        // with their related DOM properties
        // These APIs will no longer be "unstable" in the upcoming 16.7 release,
        // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.


        var exposeConcurrentModeAPIs = false; // Experimental React Flare event system and event components support.

        var enableFlareAPI = false; // Experimental Host Component support.

        var enableFundamentalAPI = false; // Experimental Scope support.

        var enableScopeAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

        var enableJSXTransformAPI = false; // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
        // Till then, we warn about the missing mock, but still fallback to a legacy mode compatible version
        // For tests, we flush suspense fallbacks in an act scope;
        // *except* in some of our own tests, where we test incremental loading states.
        // Add a callback property to suspense to notify which promises are currently
        // in the update queue. This allows reporting and tracing of what is causing
        // the user to see a loading state.
        // Also allows hydration callbacks to fire when a dehydrated boundary gets
        // hydrated or deleted.
        // Part of the simplification of React.createElement so we can eventually move
        // from React.createElement to React.jsx
        // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md
        // Flag to turn event.target and event.currentTarget in ReactNative from a reactTag to a component instance

        var React = {
          Children: {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
          },
          createRef: createRef,
          Component: Component,
          PureComponent: PureComponent,
          createContext: createContext,
          forwardRef: forwardRef,
          lazy: lazy,
          memo: memo,
          useCallback: useCallback,
          useContext: useContext,
          useEffect: useEffect,
          useImperativeHandle: useImperativeHandle,
          useDebugValue: useDebugValue,
          useLayoutEffect: useLayoutEffect,
          useMemo: useMemo,
          useReducer: useReducer,
          useRef: useRef,
          useState: useState,
          Fragment: REACT_FRAGMENT_TYPE,
          Profiler: REACT_PROFILER_TYPE,
          StrictMode: REACT_STRICT_MODE_TYPE,
          Suspense: REACT_SUSPENSE_TYPE,
          createElement: createElementWithValidation,
          cloneElement: cloneElementWithValidation,
          createFactory: createFactoryWithValidation,
          isValidElement: isValidElement,
          version: ReactVersion,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
        };

        if (exposeConcurrentModeAPIs) {
          React.useTransition = useTransition;
          React.useDeferredValue = useDeferredValue;
          React.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
          React.unstable_withSuspenseConfig = withSuspenseConfig;
        }

        if (enableFlareAPI) {
          React.unstable_useResponder = useResponder;
          React.unstable_createResponder = createEventResponder;
        }

        if (enableFundamentalAPI) {
          React.unstable_createFundamental = createFundamentalComponent;
        }

        if (enableScopeAPI) {
          React.unstable_createScope = createScope;
        } // Note: some APIs are added with feature flags.
        // Make sure that stable builds for open source
        // don't modify the React object to avoid deopts.
        // Also let's not expose their names in stable builds.


        if (enableJSXTransformAPI) {
          {
            React.jsxDEV = jsxWithValidation;
            React.jsx = jsxWithValidationDynamic;
            React.jsxs = jsxWithValidationStatic;
          }
        }

        var React$2 = _Object$freeze({
          default: React
        });

        var React$3 = React$2 && React || React$2; // TODO: decide on the top-level export form.
        // This is hacky but makes it work with both Rollup and Jest.

        var react = React$3.default || React$3;
        module.exports = react;
      })();
    }
    /***/

  },

  /***/
  "./node_modules/react/index.js":
  /*!*************************************!*\
    !*** ./node_modules/react/index.js ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function node_modulesReactIndexJs(module, exports, __webpack_require__) {
    "use strict";

    if (false) {} else {
      module.exports = __webpack_require__(
      /*! ./cjs/react.development.js */
      "./node_modules/react/cjs/react.development.js");
    }
    /***/

  },

  /***/
  "./node_modules/regenerator-runtime/runtime.js":
  /*!*****************************************************!*\
    !*** ./node_modules/regenerator-runtime/runtime.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRegeneratorRuntimeRuntimeJs(module, exports, __webpack_require__) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {
      "use strict";

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.

      var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;

        var generator = _Object$create(protoGenerator.prototype);

        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = _Object$getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);

      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        var _context11;

        _forEachInstanceProperty(_context11 = ["next", "throw", "return"]).call(_context11, function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (_Object$setPrototypeOf) {
          _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;

          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }

        genFun.prototype = _Object$create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return _Promise2.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return _Promise2.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new _Promise2(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];

        _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this);

        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        _reverseInstanceProperty(keys).call(keys); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.


        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          var _context12;

          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;

          _forEachInstanceProperty(_context12 = this.tryEntries).call(_context12, resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    true ? module.exports : undefined);

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
    /***/

  },

  /***/
  "./node_modules/unfetch/dist/unfetch.mjs":
  /*!***********************************************!*\
    !*** ./node_modules/unfetch/dist/unfetch.mjs ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUnfetchDistUnfetchMjs(__webpack_module__, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = function (e, n) {
      return n = n || {}, new _Promise2(function (t, r) {
        var s = new XMLHttpRequest(),
            o = [],
            u = [],
            i = {},
            a = function a() {
          return {
            ok: 2 == (s.status / 100 | 0),
            statusText: s.statusText,
            status: s.status,
            url: s.responseURL,
            text: function text() {
              return _Promise2.resolve(s.responseText);
            },
            json: function json() {
              return _Promise2.resolve(JSON.parse(s.responseText));
            },
            blob: function blob() {
              return _Promise2.resolve(new Blob([s.response]));
            },
            clone: a,
            headers: {
              keys: function keys() {
                return o;
              },
              entries: function entries() {
                return u;
              },
              get: function get(e) {
                return i[e.toLowerCase()];
              },
              has: function has(e) {
                return e.toLowerCase() in i;
              }
            }
          };
        };

        for (var l in s.open(n.method || "get", e, !0), s.onload = function () {
          s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
            o.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? i[n] + "," + t : t;
          }), t(a());
        }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) {
          s.setRequestHeader(l, n.headers[l]);
        }

        s.send(n.body || null);
      });
    };
    /***/

  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/components/components.tsx":
  /*!***************************************!*\
    !*** ./src/components/components.tsx ***!
    \***************************************/

  /*! exports provided: Components */

  /***/
  function srcComponentsComponentsTsx(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Components", function () {
      return Components;
    });
    /* harmony import */


    var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @babel/runtime-corejs3/core-js-stable/instance/map */
    "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
    /* harmony import */


    var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @babel/runtime-corejs3/regenerator */
    "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
    /* harmony import */


    var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @babel/runtime-corejs3/helpers/asyncToGenerator */
    "./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js");
    /* harmony import */


    var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @babel/runtime-corejs3/helpers/slicedToArray */
    "./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js");
    /* harmony import */


    var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! react */
    "./node_modules/react/index.js");
    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! unfetch */
    "./node_modules/unfetch/dist/unfetch.mjs");

    var Components = function Components() {
      var _context2;

      var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](undefined),
          _React$useState2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),
          response = _React$useState2[0],
          updateResponse = _React$useState2[1];

      react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
        _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var res, json;
          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(unfetch__WEBPACK_IMPORTED_MODULE_5__["default"])('https://next.json-generator.com/api/json/get/4JjRSZ7Qd', {
                    mode: 'cors'
                  });

                case 2:
                  res = _context.sent;
                  _context.next = 5;
                  return res.json();

                case 5:
                  json = _context.sent;
                  updateResponse(json);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }, []);
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, response ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, "\u975E\u540C\u671F\u901A\u4FE1\u7D50\u679C"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", null, response && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = response.list).call(_context2, function (data) {
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
          key: data.id
        }, data.id, ": ", data.name);
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, "\u753B\u50CF\u30C6\u30B9\u30C8: ", react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "https://placehold.jp/16x16.png"
      }))) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, "loading..."));
    };
    /***/

  },

  /***/
  "./src/features/index.tsx":
  /*!********************************!*\
    !*** ./src/features/index.tsx ***!
    \********************************/

  /*! exports provided: Domain1 */

  /***/
  function srcFeaturesIndexTsx(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Domain1", function () {
      return Domain1;
    });
    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! react */
    "./node_modules/react/index.js");
    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/components */
    "./src/components/components.tsx");

    var Domain1 = function Domain1() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_components__WEBPACK_IMPORTED_MODULE_1__["Components"], null);
    };
    /***/

  }
  /******/

});