(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fhir_resources", [], factory);
	else if(typeof exports === 'object')
		exports["fhir_resources"] = factory();
	else
		root["fhir_resources"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//https://hackernoon.com/import-json-into-typescript-8d465beded79
//https://webpack.js.org/guides/typescript/
//https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c
Object.defineProperty(exports, "__esModule", { value: true });
//SETUP TESTS WITH JEST!
var bundle_1 = __webpack_require__(1);
exports.I4MIBundle = bundle_1.I4MIBundle;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = __webpack_require__(2);
var I4MIBundle = /** @class */ (function () {
    function I4MIBundle(type) {
        this.resourceType = 'Bundle';
        this.type = type;
    }
    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param resourceType Resource type of bundle entry
     * @param resource A fhir resource. Note that is has to be a valid resource!
     * @returns the added bundle entry
     */
    I4MIBundle.prototype.addEntry = function (method, resourceType, resource) {
        var id;
        // Generate id
        id = this.generateId();
        // create entry array if still undefined
        if (typeof this.entry === 'undefined') {
            this.entry = [];
        }
        // check if id of resource is already set
        if (typeof resource.id !== 'undefined') {
            // now using already given id
            console.warn("Entry id already given. Now using " + resource.id + " as id");
            id = resource.id;
            // check if there already is an entry with given id
            if (this.idAlreadyExistsInBundle(id)) {
                throw Error("An entry with the id " + resource.id + " already exists in bundle");
            }
        }
        // Set relative id to entry
        resource.id = id;
        // adding bundle entry of resource with method and resource type
        var bundleEntry = {
            request: {
                method: method,
                url: resourceType
            },
            resource: resource
        };
        this.entry.push(bundleEntry);
        return bundleEntry;
    };
    /**
     * Removes an entry with the id x from the bundle
     * @param id Id of entry to remove
     * @returns the removed bundle entry or, if id not found, undefined
     */
    I4MIBundle.prototype.removeEntry = function (id) {
        var _this = this;
        var removedItem = undefined;
        this.entry.forEach(function (e, index) {
            var resource = e.resource;
            if (resource['id'] === id) {
                removedItem = e;
                _this.entry.splice(index, 1);
            }
        });
        if (typeof removedItem === 'undefined')
            console.warn("No Entry to remove with id " + id + " found");
        return removedItem;
    };
    /**
     * Generates a id for
     * @returns guid as string
     */
    I4MIBundle.prototype.generateId = function () {
        return guid_typescript_1.Guid.create().toString();
    };
    /**
     * Checks if the given id already exists in the bundle
     * @param id id to check if exists in bundle
     * @returns true, if id already exists
     * @returns false, if id not exists
     */
    I4MIBundle.prototype.idAlreadyExistsInBundle = function (id) {
        for (var _i = 0, _a = this.entry; _i < _a.length; _i++) {
            var e = _a[_i];
            var resource = e.resource;
            if (resource['id'] === id)
                return true;
        }
        return false;
    };
    return I4MIBundle;
}());
exports.I4MIBundle = I4MIBundle;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Guid = /** @class */ (function () {
    function Guid(guid) {
        if (!guid) {
            throw new TypeError("Invalid argument; `value` has no value.");
        }
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    Guid.isGuid = function (guid) {
        var value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    };
    Guid.create = function () {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
    };
    Guid.createEmpty = function () {
        return new Guid("emptyguid");
    };
    Guid.parse = function (guid) {
        return new Guid(guid);
    };
    Guid.raw = function () {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
    };
    Guid.gen = function (count) {
        var out = "";
        for (var i = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    Guid.prototype.equals = function (other) {
        // Comparing string `value` against provided `guid` will auto-call
        // toString on `guid` for comparison
        return Guid.isGuid(other) && this.value === other.toString();
    };
    Guid.prototype.isEmpty = function () {
        return this.value === Guid.EMPTY;
    };
    Guid.prototype.toString = function () {
        return this.value;
    };
    Guid.prototype.toJSON = function () {
        return {
            value: this.value
        };
    };
    Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
    Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
    return Guid;
}());
exports.Guid = Guid;


/***/ })
/******/ ]);
});
//# sourceMappingURL=fhir_resources.js.map