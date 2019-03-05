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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(23));
__export(__webpack_require__(24));
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(33));
__export(__webpack_require__(34));
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(38));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(41));
__export(__webpack_require__(42));
__export(__webpack_require__(43));
__export(__webpack_require__(44));
__export(__webpack_require__(45));
__export(__webpack_require__(46));
__export(__webpack_require__(47));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(54));
__export(__webpack_require__(55));
__export(__webpack_require__(56));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//https://hackernoon.com/import-json-into-typescript-8d465beded79
//https://webpack.js.org/guides/typescript/
//https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c
Object.defineProperty(exports, "__esModule", { value: true });
//SETUP TESTS WITH JEST!
var bundle_1 = __webpack_require__(2);
exports.I4MIBundle = bundle_1.I4MIBundle;
/**
 * This function exports you the library for the given fhir version
 * The supported fhir versions are given in the SupportedFhirVersion enum type
 * If no version is given, it will always take the latest
 * @param version Version for fhir resources to export
 */
function getResources(version) {
    if (typeof version === 'undefined') {
        console.log("No version given. Exports latest (" + SupportedFhirVersions.latest + ") supported fhir version.");
        return Promise.resolve().then(function () { return __webpack_require__(0); });
    }
    switch (version) {
        case SupportedFhirVersions.V4_0_0:
            console.log('dynamic export R4');
            return Promise.resolve().then(function () { return __webpack_require__(0); });
        case SupportedFhirVersions.V3_0_1:
            console.log('dynamic export STU3');
            return 'NOT_IMPLEMENTED_YET';
    }
}
exports.getResources = getResources;
var SupportedFhirVersions;
(function (SupportedFhirVersions) {
    SupportedFhirVersions["latest"] = "V4_0_0";
    SupportedFhirVersions["V4_0_0"] = "V4_0_0";
    SupportedFhirVersions["V3_0_1"] = "V3_0_1";
})(SupportedFhirVersions = exports.SupportedFhirVersions || (exports.SupportedFhirVersions = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = __webpack_require__(3);
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
/* 3 */
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of triggering event.
 */
var TriggerDefinitionType;
(function (TriggerDefinitionType) {
    TriggerDefinitionType["DataAccessEnded"] = "data-access-ended";
    TriggerDefinitionType["DataAccessed"] = "data-accessed";
    TriggerDefinitionType["DataAdded"] = "data-added";
    TriggerDefinitionType["DataChanged"] = "data-changed";
    TriggerDefinitionType["DataModified"] = "data-modified";
    TriggerDefinitionType["DataRemoved"] = "data-removed";
    TriggerDefinitionType["NamedEvent"] = "named-event";
    TriggerDefinitionType["Periodic"] = "periodic";
})(TriggerDefinitionType = exports.TriggerDefinitionType || (exports.TriggerDefinitionType = {}));
/**
 * The type of relationship to the related artifact.
 */
var RelatedArtifactType;
(function (RelatedArtifactType) {
    RelatedArtifactType["Citation"] = "citation";
    RelatedArtifactType["ComposedOf"] = "composed-of";
    RelatedArtifactType["DependsOn"] = "depends-on";
    RelatedArtifactType["DerivedFrom"] = "derived-from";
    RelatedArtifactType["Documentation"] = "documentation";
    RelatedArtifactType["Justification"] = "justification";
    RelatedArtifactType["Predecessor"] = "predecessor";
    RelatedArtifactType["Successor"] = "successor";
})(RelatedArtifactType = exports.RelatedArtifactType || (exports.RelatedArtifactType = {}));
/**
 * Identifies the purpose for this name.
 */
var HumanNameUse;
(function (HumanNameUse) {
    HumanNameUse["Anonymous"] = "anonymous";
    HumanNameUse["Maiden"] = "maiden";
    HumanNameUse["Nickname"] = "nickname";
    HumanNameUse["Official"] = "official";
    HumanNameUse["Old"] = "old";
    HumanNameUse["Temp"] = "temp";
    HumanNameUse["Usual"] = "usual";
})(HumanNameUse = exports.HumanNameUse || (exports.HumanNameUse = {}));
/**
 * The media type of the language for the expression.
 */
var Language;
(function (Language) {
    Language["ApplicationXFhirQuery"] = "application/x-fhir-query";
    Language["TextCql"] = "text/cql";
    Language["TextFhirpath"] = "text/fhirpath";
})(Language = exports.Language || (exports.Language = {}));
/**
 * The units of time for the duration, in UCUM units.
 *
 * The units of time for the period in UCUM units.
 */
var Unit;
(function (Unit) {
    Unit["A"] = "a";
    Unit["D"] = "d";
    Unit["H"] = "h";
    Unit["Min"] = "min";
    Unit["Mo"] = "mo";
    Unit["S"] = "s";
    Unit["Wk"] = "wk";
})(Unit = exports.Unit || (exports.Unit = {}));
var When;
(function (When) {
    When["AC"] = "AC";
    When["ACD"] = "ACD";
    When["ACM"] = "ACM";
    When["AFTEarly"] = "AFT.early";
    When["AFTLate"] = "AFT.late";
    When["Acv"] = "ACV";
    When["Aft"] = "AFT";
    When["C"] = "C";
    When["CD"] = "CD";
    When["CM"] = "CM";
    When["Cv"] = "CV";
    When["EVEEarly"] = "EVE.early";
    When["EVELate"] = "EVE.late";
    When["Eve"] = "EVE";
    When["Hs"] = "HS";
    When["MORNEarly"] = "MORN.early";
    When["MORNLate"] = "MORN.late";
    When["Morn"] = "MORN";
    When["Night"] = "NIGHT";
    When["Noon"] = "NOON";
    When["PC"] = "PC";
    When["PCM"] = "PCM";
    When["Pcd"] = "PCD";
    When["Pcv"] = "PCV";
    When["Phs"] = "PHS";
    When["Wake"] = "WAKE";
})(When = exports.When || (exports.When = {}));
/**
 * How the value should be understood and represented - whether the actual value is greater
 * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
 * then the real value is < stated value.
 */
var Comparator;
(function (Comparator) {
    Comparator["Comparator"] = "<=";
    Comparator["Empty"] = "<";
    Comparator["Fluffy"] = ">";
    Comparator["Purple"] = ">=";
})(Comparator = exports.Comparator || (exports.Comparator = {}));
/**
 * The direction of the sort, ascending or descending.
 */
var Direction;
(function (Direction) {
    Direction["Ascending"] = "ascending";
    Direction["Descending"] = "descending";
})(Direction = exports.Direction || (exports.Direction = {}));
/**
 * The type of contributor.
 */
var ContributorType;
(function (ContributorType) {
    ContributorType["Author"] = "author";
    ContributorType["Editor"] = "editor";
    ContributorType["Endorser"] = "endorser";
    ContributorType["Reviewer"] = "reviewer";
})(ContributorType = exports.ContributorType || (exports.ContributorType = {}));
/**
 * Telecommunications form for contact point - what communications system is required to
 * make use of the contact.
 */
var System;
(function (System) {
    System["Email"] = "email";
    System["Fax"] = "fax";
    System["Other"] = "other";
    System["Pager"] = "pager";
    System["Phone"] = "phone";
    System["Sms"] = "sms";
    System["Url"] = "url";
})(System = exports.System || (exports.System = {}));
/**
 * Identifies the purpose for the contact point.
 */
var ContactPointUse;
(function (ContactPointUse) {
    ContactPointUse["Home"] = "home";
    ContactPointUse["Mobile"] = "mobile";
    ContactPointUse["Old"] = "old";
    ContactPointUse["Temp"] = "temp";
    ContactPointUse["Work"] = "work";
})(ContactPointUse = exports.ContactPointUse || (exports.ContactPointUse = {}));
/**
 * The purpose of this identifier.
 */
var IdentifierUse;
(function (IdentifierUse) {
    IdentifierUse["Official"] = "official";
    IdentifierUse["Old"] = "old";
    IdentifierUse["Secondary"] = "secondary";
    IdentifierUse["Temp"] = "temp";
    IdentifierUse["Usual"] = "usual";
})(IdentifierUse = exports.IdentifierUse || (exports.IdentifierUse = {}));
/**
 * Distinguishes between physical addresses (those you can visit) and mailing addresses
 * (e.g. PO Boxes and care-of addresses). Most addresses are both.
 */
var AddressType;
(function (AddressType) {
    AddressType["Both"] = "both";
    AddressType["Physical"] = "physical";
    AddressType["Postal"] = "postal";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
/**
 * The purpose of this address.
 */
var AddressUse;
(function (AddressUse) {
    AddressUse["Billing"] = "billing";
    AddressUse["Home"] = "home";
    AddressUse["Old"] = "old";
    AddressUse["Temp"] = "temp";
    AddressUse["Work"] = "work";
})(AddressUse = exports.AddressUse || (exports.AddressUse = {}));
/**
 * The status of the narrative - whether it's entirely generated (from just the defined data
 * or the extensions too), or whether a human authored it and it may contain additional data.
 */
var Status;
(function (Status) {
    Status["Additional"] = "additional";
    Status["Empty"] = "empty";
    Status["Extensions"] = "extensions";
    Status["Generated"] = "generated";
})(Status = exports.Status || (exports.Status = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates whether the account is presently used/usable or not.
 */
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Active"] = "active";
    AccountStatus["EnteredInError"] = "entered-in-error";
    AccountStatus["Inactive"] = "inactive";
    AccountStatus["OnHold"] = "on-hold";
    AccountStatus["Unknown"] = "unknown";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of this activity definition. Enables tracking the life-cycle of the content.
 */
var ActivityDefinitionStatus;
(function (ActivityDefinitionStatus) {
    ActivityDefinitionStatus["Active"] = "active";
    ActivityDefinitionStatus["Draft"] = "draft";
    ActivityDefinitionStatus["Retired"] = "retired";
    ActivityDefinitionStatus["Unknown"] = "unknown";
})(ActivityDefinitionStatus = exports.ActivityDefinitionStatus || (exports.ActivityDefinitionStatus = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Whether the event actually happened, or just had the potential to. Note that this is
 * independent of whether anyone was affected or harmed or how severely.
 */
var Actuality;
(function (Actuality) {
    Actuality["Actual"] = "actual";
    Actuality["Potential"] = "potential";
})(Actuality = exports.Actuality || (exports.Actuality = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AllergyIntoleranceCategory;
(function (AllergyIntoleranceCategory) {
    AllergyIntoleranceCategory["Biologic"] = "biologic";
    AllergyIntoleranceCategory["Environment"] = "environment";
    AllergyIntoleranceCategory["Food"] = "food";
    AllergyIntoleranceCategory["Medication"] = "medication";
})(AllergyIntoleranceCategory = exports.AllergyIntoleranceCategory || (exports.AllergyIntoleranceCategory = {}));
/**
 * Estimate of the potential clinical harm, or seriousness, of the reaction to the
 * identified substance.
 */
var Criticality;
(function (Criticality) {
    Criticality["High"] = "high";
    Criticality["Low"] = "low";
    Criticality["UnableToAssess"] = "unable-to-assess";
})(Criticality = exports.Criticality || (exports.Criticality = {}));
/**
 * Clinical assessment of the severity of the reaction event as a whole, potentially
 * considering multiple different manifestations.
 */
var AllergyIntoleranceSeverity;
(function (AllergyIntoleranceSeverity) {
    AllergyIntoleranceSeverity["Mild"] = "mild";
    AllergyIntoleranceSeverity["Moderate"] = "moderate";
    AllergyIntoleranceSeverity["Severe"] = "severe";
})(AllergyIntoleranceSeverity = exports.AllergyIntoleranceSeverity || (exports.AllergyIntoleranceSeverity = {}));
/**
 * Identification of the underlying physiological mechanism for the reaction risk.
 */
var AllergyIntoleranceType;
(function (AllergyIntoleranceType) {
    AllergyIntoleranceType["Allergy"] = "allergy";
    AllergyIntoleranceType["Intolerance"] = "intolerance";
})(AllergyIntoleranceType = exports.AllergyIntoleranceType || (exports.AllergyIntoleranceType = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Whether this participant is required to be present at the meeting. This covers a use-case
 * where two doctors need to meet to discuss the results for a specific patient, and the
 * patient is not required to be present.
 */
var Required;
(function (Required) {
    Required["InformationOnly"] = "information-only";
    Required["Optional"] = "optional";
    Required["Required"] = "required";
})(Required = exports.Required || (exports.Required = {}));
/**
 * Participation status of the actor.
 */
var AppointmentParticipantStatus;
(function (AppointmentParticipantStatus) {
    AppointmentParticipantStatus["Accepted"] = "accepted";
    AppointmentParticipantStatus["Declined"] = "declined";
    AppointmentParticipantStatus["NeedsAction"] = "needs-action";
    AppointmentParticipantStatus["Tentative"] = "tentative";
})(AppointmentParticipantStatus = exports.AppointmentParticipantStatus || (exports.AppointmentParticipantStatus = {}));
/**
 * The overall status of the Appointment. Each of the participants has their own
 * participation status which indicates their involvement in the process, however this
 * status indicates the shared status.
 */
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["Arrived"] = "arrived";
    AppointmentStatus["Booked"] = "booked";
    AppointmentStatus["Cancelled"] = "cancelled";
    AppointmentStatus["CheckedIn"] = "checked-in";
    AppointmentStatus["EnteredInError"] = "entered-in-error";
    AppointmentStatus["Fulfilled"] = "fulfilled";
    AppointmentStatus["Noshow"] = "noshow";
    AppointmentStatus["Pending"] = "pending";
    AppointmentStatus["Proposed"] = "proposed";
    AppointmentStatus["Waitlist"] = "waitlist";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicator for type of action performed during the event that generated the audit.
 */
var Action;
(function (Action) {
    Action["C"] = "C";
    Action["D"] = "D";
    Action["E"] = "E";
    Action["R"] = "R";
    Action["U"] = "U";
})(Action = exports.Action || (exports.Action = {}));
/**
 * An identifier for the type of network access point that originated the audit event.
 */
var AuditEventNetworkType;
(function (AuditEventNetworkType) {
    AuditEventNetworkType["The1"] = "1";
    AuditEventNetworkType["The2"] = "2";
    AuditEventNetworkType["The3"] = "3";
    AuditEventNetworkType["The4"] = "4";
    AuditEventNetworkType["The5"] = "5";
})(AuditEventNetworkType = exports.AuditEventNetworkType || (exports.AuditEventNetworkType = {}));
/**
 * Indicates whether the event succeeded or failed.
 */
var AuditEventOutcome;
(function (AuditEventOutcome) {
    AuditEventOutcome["The0"] = "0";
    AuditEventOutcome["The12"] = "12";
    AuditEventOutcome["The4"] = "4";
    AuditEventOutcome["The8"] = "8";
})(AuditEventOutcome = exports.AuditEventOutcome || (exports.AuditEventOutcome = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Broad category of this product.
 */
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["BiologicalAgent"] = "biologicalAgent";
    ProductCategory["Cells"] = "cells";
    ProductCategory["Fluid"] = "fluid";
    ProductCategory["Organ"] = "organ";
    ProductCategory["Tissue"] = "tissue";
})(ProductCategory = exports.ProductCategory || (exports.ProductCategory = {}));
/**
 * Whether the product is currently available.
 */
var BiologicallyDerivedProductStatus;
(function (BiologicallyDerivedProductStatus) {
    BiologicallyDerivedProductStatus["Available"] = "available";
    BiologicallyDerivedProductStatus["Unavailable"] = "unavailable";
})(BiologicallyDerivedProductStatus = exports.BiologicallyDerivedProductStatus || (exports.BiologicallyDerivedProductStatus = {}));
/**
 * Temperature scale used.
 */
var Scale;
(function (Scale) {
    Scale["Celsius"] = "celsius";
    Scale["Farenheit"] = "farenheit";
    Scale["Kelvin"] = "kelvin";
})(Scale = exports.Scale || (exports.Scale = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In a transaction or batch, this is the HTTP action to be executed for this entry. In a
 * history bundle, this indicates the HTTP action that occurred.
 */
var Method;
(function (Method) {
    Method["Delete"] = "DELETE";
    Method["Get"] = "GET";
    Method["Head"] = "HEAD";
    Method["Patch"] = "PATCH";
    Method["Post"] = "POST";
    Method["Put"] = "PUT";
})(Method = exports.Method || (exports.Method = {}));
/**
 * Why this entry is in the result set - whether it's included as a match or because of an
 * _include requirement, or to convey information or warning information about the search
 * process.
 */
var BundleSearchMode;
(function (BundleSearchMode) {
    BundleSearchMode["Include"] = "include";
    BundleSearchMode["Match"] = "match";
    BundleSearchMode["Outcome"] = "outcome";
})(BundleSearchMode = exports.BundleSearchMode || (exports.BundleSearchMode = {}));
/**
 * Indicates the purpose of this bundle - how it is intended to be used.
 */
var BundleType;
(function (BundleType) {
    BundleType["Batch"] = "batch";
    BundleType["BatchResponse"] = "batch-response";
    BundleType["Collection"] = "collection";
    BundleType["Document"] = "document";
    BundleType["History"] = "history";
    BundleType["Message"] = "message";
    BundleType["Searchset"] = "searchset";
    BundleType["Transaction"] = "transaction";
    BundleType["TransactionResponse"] = "transaction-response";
})(BundleType = exports.BundleType || (exports.BundleType = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mode of this document declaration - whether an application is a producer or consumer.
 */
var CapabilityStatementDocumentMode;
(function (CapabilityStatementDocumentMode) {
    CapabilityStatementDocumentMode["Consumer"] = "consumer";
    CapabilityStatementDocumentMode["Producer"] = "producer";
})(CapabilityStatementDocumentMode = exports.CapabilityStatementDocumentMode || (exports.CapabilityStatementDocumentMode = {}));
/**
 * The version of the FHIR specification that this CapabilityStatement describes (which
 * SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no
 * default value.
 */
var CapabilityStatementFhirVersion;
(function (CapabilityStatementFhirVersion) {
    CapabilityStatementFhirVersion["The001"] = "0.01";
    CapabilityStatementFhirVersion["The005"] = "0.05";
    CapabilityStatementFhirVersion["The006"] = "0.06";
    CapabilityStatementFhirVersion["The0080"] = "0.0.80";
    CapabilityStatementFhirVersion["The0081"] = "0.0.81";
    CapabilityStatementFhirVersion["The0082"] = "0.0.82";
    CapabilityStatementFhirVersion["The011"] = "0.11";
    CapabilityStatementFhirVersion["The040"] = "0.4.0";
    CapabilityStatementFhirVersion["The050"] = "0.5.0";
    CapabilityStatementFhirVersion["The100"] = "1.0.0";
    CapabilityStatementFhirVersion["The101"] = "1.0.1";
    CapabilityStatementFhirVersion["The102"] = "1.0.2";
    CapabilityStatementFhirVersion["The110"] = "1.1.0";
    CapabilityStatementFhirVersion["The140"] = "1.4.0";
    CapabilityStatementFhirVersion["The160"] = "1.6.0";
    CapabilityStatementFhirVersion["The180"] = "1.8.0";
    CapabilityStatementFhirVersion["The300"] = "3.0.0";
    CapabilityStatementFhirVersion["The301"] = "3.0.1";
    CapabilityStatementFhirVersion["The330"] = "3.3.0";
    CapabilityStatementFhirVersion["The350"] = "3.5.0";
    CapabilityStatementFhirVersion["The400"] = "4.0.0";
})(CapabilityStatementFhirVersion = exports.CapabilityStatementFhirVersion || (exports.CapabilityStatementFhirVersion = {}));
/**
 * The way that this statement is intended to be used, to describe an actual running
 * instance of software, a particular product (kind, not instance of software) or a class of
 * implementation (e.g. a desired purchase).
 */
var Kind;
(function (Kind) {
    Kind["Capability"] = "capability";
    Kind["Instance"] = "instance";
    Kind["Requirements"] = "requirements";
})(Kind = exports.Kind || (exports.Kind = {}));
/**
 * The mode of this event declaration - whether application is sender or receiver.
 */
var CapabilityStatementSupportedMessageMode;
(function (CapabilityStatementSupportedMessageMode) {
    CapabilityStatementSupportedMessageMode["Receiver"] = "receiver";
    CapabilityStatementSupportedMessageMode["Sender"] = "sender";
})(CapabilityStatementSupportedMessageMode = exports.CapabilityStatementSupportedMessageMode || (exports.CapabilityStatementSupportedMessageMode = {}));
/**
 * A coded identifier of the operation, supported by the system.
 */
var CapabilityStatementInteraction1Code;
(function (CapabilityStatementInteraction1Code) {
    CapabilityStatementInteraction1Code["Batch"] = "batch";
    CapabilityStatementInteraction1Code["HistorySystem"] = "history-system";
    CapabilityStatementInteraction1Code["SearchSystem"] = "search-system";
    CapabilityStatementInteraction1Code["Transaction"] = "transaction";
})(CapabilityStatementInteraction1Code = exports.CapabilityStatementInteraction1Code || (exports.CapabilityStatementInteraction1Code = {}));
/**
 * Identifies whether this portion of the statement is describing the ability to initiate or
 * receive restful operations.
 */
var CapabilityStatementRestMode;
(function (CapabilityStatementRestMode) {
    CapabilityStatementRestMode["Client"] = "client";
    CapabilityStatementRestMode["Server"] = "server";
})(CapabilityStatementRestMode = exports.CapabilityStatementRestMode || (exports.CapabilityStatementRestMode = {}));
/**
 * A code that indicates how the server supports conditional delete.
 */
var ConditionalDelete;
(function (ConditionalDelete) {
    ConditionalDelete["Multiple"] = "multiple";
    ConditionalDelete["NotSupported"] = "not-supported";
    ConditionalDelete["Single"] = "single";
})(ConditionalDelete = exports.ConditionalDelete || (exports.ConditionalDelete = {}));
/**
 * A code that indicates how the server supports conditional read.
 */
var ConditionalRead;
(function (ConditionalRead) {
    ConditionalRead["FullSupport"] = "full-support";
    ConditionalRead["ModifiedSince"] = "modified-since";
    ConditionalRead["NotMatch"] = "not-match";
    ConditionalRead["NotSupported"] = "not-supported";
})(ConditionalRead = exports.ConditionalRead || (exports.ConditionalRead = {}));
/**
 * Coded identifier of the operation, supported by the system resource.
 */
var CapabilityStatementInteractionCode;
(function (CapabilityStatementInteractionCode) {
    CapabilityStatementInteractionCode["Create"] = "create";
    CapabilityStatementInteractionCode["Delete"] = "delete";
    CapabilityStatementInteractionCode["HistoryInstance"] = "history-instance";
    CapabilityStatementInteractionCode["HistoryType"] = "history-type";
    CapabilityStatementInteractionCode["Patch"] = "patch";
    CapabilityStatementInteractionCode["Read"] = "read";
    CapabilityStatementInteractionCode["SearchType"] = "search-type";
    CapabilityStatementInteractionCode["Update"] = "update";
    CapabilityStatementInteractionCode["Vread"] = "vread";
})(CapabilityStatementInteractionCode = exports.CapabilityStatementInteractionCode || (exports.CapabilityStatementInteractionCode = {}));
var ReferencePolicy;
(function (ReferencePolicy) {
    ReferencePolicy["Enforced"] = "enforced";
    ReferencePolicy["Literal"] = "literal";
    ReferencePolicy["Local"] = "local";
    ReferencePolicy["Logical"] = "logical";
    ReferencePolicy["Resolves"] = "resolves";
})(ReferencePolicy = exports.ReferencePolicy || (exports.ReferencePolicy = {}));
/**
 * The type of value a search parameter refers to, and how the content is interpreted.
 */
var CapabilityStatementSearchParamType;
(function (CapabilityStatementSearchParamType) {
    CapabilityStatementSearchParamType["Composite"] = "composite";
    CapabilityStatementSearchParamType["Date"] = "date";
    CapabilityStatementSearchParamType["Number"] = "number";
    CapabilityStatementSearchParamType["Quantity"] = "quantity";
    CapabilityStatementSearchParamType["Reference"] = "reference";
    CapabilityStatementSearchParamType["Special"] = "special";
    CapabilityStatementSearchParamType["String"] = "string";
    CapabilityStatementSearchParamType["Token"] = "token";
    CapabilityStatementSearchParamType["Uri"] = "uri";
})(CapabilityStatementSearchParamType = exports.CapabilityStatementSearchParamType || (exports.CapabilityStatementSearchParamType = {}));
/**
 * This field is set to no-version to specify that the system does not support (server) or
 * use (client) versioning for this resource type. If this has some other value, the server
 * must at least correctly track and populate the versionId meta-property on resources. If
 * the value is 'versioned-update', then the server supports all the versioning features,
 * including using e-tags for version integrity in the API.
 */
var Versioning;
(function (Versioning) {
    Versioning["NoVersion"] = "no-version";
    Versioning["Versioned"] = "versioned";
    Versioning["VersionedUpdate"] = "versioned-update";
})(Versioning = exports.Versioning || (exports.Versioning = {}));
/**
 * The status of this capability statement. Enables tracking the life-cycle of the content.
 */
var CapabilityStatementStatus;
(function (CapabilityStatementStatus) {
    CapabilityStatementStatus["Active"] = "active";
    CapabilityStatementStatus["Draft"] = "draft";
    CapabilityStatementStatus["Retired"] = "retired";
    CapabilityStatementStatus["Unknown"] = "unknown";
})(CapabilityStatementStatus = exports.CapabilityStatementStatus || (exports.CapabilityStatementStatus = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Identifies what progress is being made for the specific activity.
 */
var CarePlanDetailStatus;
(function (CarePlanDetailStatus) {
    CarePlanDetailStatus["Cancelled"] = "cancelled";
    CarePlanDetailStatus["Completed"] = "completed";
    CarePlanDetailStatus["EnteredInError"] = "entered-in-error";
    CarePlanDetailStatus["InProgress"] = "in-progress";
    CarePlanDetailStatus["NotStarted"] = "not-started";
    CarePlanDetailStatus["OnHold"] = "on-hold";
    CarePlanDetailStatus["Scheduled"] = "scheduled";
    CarePlanDetailStatus["Stopped"] = "stopped";
    CarePlanDetailStatus["Unknown"] = "unknown";
})(CarePlanDetailStatus = exports.CarePlanDetailStatus || (exports.CarePlanDetailStatus = {}));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates the current state of the care team.
 */
var CareTeamStatus;
(function (CareTeamStatus) {
    CareTeamStatus["Active"] = "active";
    CareTeamStatus["EnteredInError"] = "entered-in-error";
    CareTeamStatus["Inactive"] = "inactive";
    CareTeamStatus["Proposed"] = "proposed";
    CareTeamStatus["Suspended"] = "suspended";
})(CareTeamStatus = exports.CareTeamStatus || (exports.CareTeamStatus = {}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of relation to the related item: child, parent, packageContent,
 * containerPackage, usedIn, uses, requires, etc.
 */
var Relationtype;
(function (Relationtype) {
    Relationtype["IsReplacedBy"] = "is-replaced-by";
    Relationtype["Triggers"] = "triggers";
})(Relationtype = exports.Relationtype || (exports.Relationtype = {}));
/**
 * Used to support catalog exchange even for unsupported products, e.g. getting list of
 * medications even if not prescribable.
 */
var CatalogEntryStatus;
(function (CatalogEntryStatus) {
    CatalogEntryStatus["Active"] = "active";
    CatalogEntryStatus["Draft"] = "draft";
    CatalogEntryStatus["Retired"] = "retired";
    CatalogEntryStatus["Unknown"] = "unknown";
})(CatalogEntryStatus = exports.CatalogEntryStatus || (exports.CatalogEntryStatus = {}));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The current state of the ChargeItem.
 */
var ChargeItemStatus;
(function (ChargeItemStatus) {
    ChargeItemStatus["Aborted"] = "aborted";
    ChargeItemStatus["Billable"] = "billable";
    ChargeItemStatus["Billed"] = "billed";
    ChargeItemStatus["EnteredInError"] = "entered-in-error";
    ChargeItemStatus["NotBillable"] = "not-billable";
    ChargeItemStatus["Planned"] = "planned";
    ChargeItemStatus["Unknown"] = "unknown";
})(ChargeItemStatus = exports.ChargeItemStatus || (exports.ChargeItemStatus = {}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The current state of the ChargeItemDefinition.
 */
var ChargeItemDefinitionStatus;
(function (ChargeItemDefinitionStatus) {
    ChargeItemDefinitionStatus["Active"] = "active";
    ChargeItemDefinitionStatus["Draft"] = "draft";
    ChargeItemDefinitionStatus["Retired"] = "retired";
    ChargeItemDefinitionStatus["Unknown"] = "unknown";
})(ChargeItemDefinitionStatus = exports.ChargeItemDefinitionStatus || (exports.ChargeItemDefinitionStatus = {}));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A code to indicate whether the nature of the request is: to request adjudication of
 * products and services previously rendered; or requesting authorization and adjudication
 * for provision in the future; or requesting the non-binding adjudication of the listed
 * products and services which could be provided in the future.
 */
var ClaimUse;
(function (ClaimUse) {
    ClaimUse["Claim"] = "claim";
    ClaimUse["Preauthorization"] = "preauthorization";
    ClaimUse["Predetermination"] = "predetermination";
})(ClaimUse = exports.ClaimUse || (exports.ClaimUse = {}));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The business purpose of the note text.
 */
var ClaimResponseProcessNoteType;
(function (ClaimResponseProcessNoteType) {
    ClaimResponseProcessNoteType["Display"] = "display";
    ClaimResponseProcessNoteType["Print"] = "print";
    ClaimResponseProcessNoteType["Printoper"] = "printoper";
})(ClaimResponseProcessNoteType = exports.ClaimResponseProcessNoteType || (exports.ClaimResponseProcessNoteType = {}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The extent of the content of the code system (the concepts and codes it defines) are
 * represented in this resource instance.
 */
var Content;
(function (Content) {
    Content["Complete"] = "complete";
    Content["Example"] = "example";
    Content["Fragment"] = "fragment";
    Content["NotPresent"] = "not-present";
    Content["Supplement"] = "supplement";
})(Content = exports.Content || (exports.Content = {}));
/**
 * The meaning of the hierarchy of concepts as represented in this resource.
 */
var HierarchyMeaning;
(function (HierarchyMeaning) {
    HierarchyMeaning["ClassifiedWith"] = "classified-with";
    HierarchyMeaning["GroupedBy"] = "grouped-by";
    HierarchyMeaning["IsA"] = "is-a";
    HierarchyMeaning["PartOf"] = "part-of";
})(HierarchyMeaning = exports.HierarchyMeaning || (exports.HierarchyMeaning = {}));
/**
 * The type of the property value. Properties of type "code" contain a code defined by the
 * code system (e.g. a reference to another defined concept).
 */
var CodeSystemPropertyType;
(function (CodeSystemPropertyType) {
    CodeSystemPropertyType["Boolean"] = "boolean";
    CodeSystemPropertyType["Code"] = "code";
    CodeSystemPropertyType["Coding"] = "Coding";
    CodeSystemPropertyType["DateTime"] = "dateTime";
    CodeSystemPropertyType["Decimal"] = "decimal";
    CodeSystemPropertyType["Integer"] = "integer";
    CodeSystemPropertyType["String"] = "string";
})(CodeSystemPropertyType = exports.CodeSystemPropertyType || (exports.CodeSystemPropertyType = {}));
/**
 * The date (and optionally time) when the code system resource was created or revised.
 */
var CodeSystemStatus;
(function (CodeSystemStatus) {
    CodeSystemStatus["Active"] = "active";
    CodeSystemStatus["Draft"] = "draft";
    CodeSystemStatus["Retired"] = "retired";
    CodeSystemStatus["Unknown"] = "unknown";
})(CodeSystemStatus = exports.CodeSystemStatus || (exports.CodeSystemStatus = {}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Which compartment this definition describes.
 */
var CompartmentDefinitionCode;
(function (CompartmentDefinitionCode) {
    CompartmentDefinitionCode["Device"] = "Device";
    CompartmentDefinitionCode["Encounter"] = "Encounter";
    CompartmentDefinitionCode["Patient"] = "Patient";
    CompartmentDefinitionCode["Practitioner"] = "Practitioner";
    CompartmentDefinitionCode["RelatedPerson"] = "RelatedPerson";
})(CompartmentDefinitionCode = exports.CompartmentDefinitionCode || (exports.CompartmentDefinitionCode = {}));
/**
 * The status of this compartment definition. Enables tracking the life-cycle of the content.
 */
var CompartmentDefinitionStatus;
(function (CompartmentDefinitionStatus) {
    CompartmentDefinitionStatus["Active"] = "active";
    CompartmentDefinitionStatus["Draft"] = "draft";
    CompartmentDefinitionStatus["Retired"] = "retired";
    CompartmentDefinitionStatus["Unknown"] = "unknown";
})(CompartmentDefinitionStatus = exports.CompartmentDefinitionStatus || (exports.CompartmentDefinitionStatus = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of attestation the authenticator offers.
 */
var CompositionAttesterMode;
(function (CompositionAttesterMode) {
    CompositionAttesterMode["Legal"] = "legal";
    CompositionAttesterMode["Official"] = "official";
    CompositionAttesterMode["Personal"] = "personal";
    CompositionAttesterMode["Professional"] = "professional";
})(CompositionAttesterMode = exports.CompositionAttesterMode || (exports.CompositionAttesterMode = {}));
/**
 * The workflow/clinical status of this composition. The status is a marker for the clinical
 * standing of the document.
 */
var CompositionStatus;
(function (CompositionStatus) {
    CompositionStatus["Amended"] = "amended";
    CompositionStatus["EnteredInError"] = "entered-in-error";
    CompositionStatus["Final"] = "final";
    CompositionStatus["Preliminary"] = "preliminary";
})(CompositionStatus = exports.CompositionStatus || (exports.CompositionStatus = {}));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The equivalence between the source and target concepts (counting for the dependencies and
 * products). The equivalence is read from target to source (e.g. the target is 'wider' than
 * the source).
 */
var Equivalence;
(function (Equivalence) {
    Equivalence["Disjoint"] = "disjoint";
    Equivalence["Equal"] = "equal";
    Equivalence["Equivalent"] = "equivalent";
    Equivalence["Inexact"] = "inexact";
    Equivalence["Narrower"] = "narrower";
    Equivalence["Relatedto"] = "relatedto";
    Equivalence["Specializes"] = "specializes";
    Equivalence["Subsumes"] = "subsumes";
    Equivalence["Unmatched"] = "unmatched";
    Equivalence["Wider"] = "wider";
})(Equivalence = exports.Equivalence || (exports.Equivalence = {}));
/**
 * Defines which action to take if there is no match for the source concept in the target
 * system designated for the group. One of 3 actions are possible: use the unmapped code
 * (this is useful when doing a mapping between versions, and only a few codes have
 * changed), use a fixed code (a default code), or alternatively, a reference to a different
 * concept map can be provided (by canonical URL).
 */
var ConceptMapUnmappedMode;
(function (ConceptMapUnmappedMode) {
    ConceptMapUnmappedMode["Fixed"] = "fixed";
    ConceptMapUnmappedMode["OtherMap"] = "other-map";
    ConceptMapUnmappedMode["Provided"] = "provided";
})(ConceptMapUnmappedMode = exports.ConceptMapUnmappedMode || (exports.ConceptMapUnmappedMode = {}));
/**
 * The status of this concept map. Enables tracking the life-cycle of the content.
 */
var ConceptMapStatus;
(function (ConceptMapStatus) {
    ConceptMapStatus["Active"] = "active";
    ConceptMapStatus["Draft"] = "draft";
    ConceptMapStatus["Retired"] = "retired";
    ConceptMapStatus["Unknown"] = "unknown";
})(ConceptMapStatus = exports.ConceptMapStatus || (exports.ConceptMapStatus = {}));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * How the resource reference is interpreted when testing consent restrictions.
 */
var Meaning;
(function (Meaning) {
    Meaning["Authoredby"] = "authoredby";
    Meaning["Dependents"] = "dependents";
    Meaning["Instance"] = "instance";
    Meaning["Related"] = "related";
})(Meaning = exports.Meaning || (exports.Meaning = {}));
/**
 * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in
 * root rule, required in all nested rules.
 */
var ConsentProvisionType;
(function (ConsentProvisionType) {
    ConsentProvisionType["Deny"] = "deny";
    ConsentProvisionType["Permit"] = "permit";
})(ConsentProvisionType = exports.ConsentProvisionType || (exports.ConsentProvisionType = {}));
/**
 * Indicates the current state of this consent.
 */
var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus["Active"] = "active";
    ConsentStatus["Draft"] = "draft";
    ConsentStatus["EnteredInError"] = "entered-in-error";
    ConsentStatus["Inactive"] = "inactive";
    ConsentStatus["Proposed"] = "proposed";
    ConsentStatus["Rejected"] = "rejected";
})(ConsentStatus = exports.ConsentStatus || (exports.ConsentStatus = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoverageEligibilityRequestPurpose;
(function (CoverageEligibilityRequestPurpose) {
    CoverageEligibilityRequestPurpose["AuthRequirements"] = "auth-requirements";
    CoverageEligibilityRequestPurpose["Benefits"] = "benefits";
    CoverageEligibilityRequestPurpose["Discovery"] = "discovery";
    CoverageEligibilityRequestPurpose["Validation"] = "validation";
})(CoverageEligibilityRequestPurpose = exports.CoverageEligibilityRequestPurpose || (exports.CoverageEligibilityRequestPurpose = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The outcome of the request processing.
 */
var CoverageEligibilityResponseOutcome;
(function (CoverageEligibilityResponseOutcome) {
    CoverageEligibilityResponseOutcome["Complete"] = "complete";
    CoverageEligibilityResponseOutcome["Error"] = "error";
    CoverageEligibilityResponseOutcome["Partial"] = "partial";
    CoverageEligibilityResponseOutcome["Queued"] = "queued";
})(CoverageEligibilityResponseOutcome = exports.CoverageEligibilityResponseOutcome || (exports.CoverageEligibilityResponseOutcome = {}));
var CoverageEligibilityResponsePurpose;
(function (CoverageEligibilityResponsePurpose) {
    CoverageEligibilityResponsePurpose["AuthRequirements"] = "auth-requirements";
    CoverageEligibilityResponsePurpose["Benefits"] = "benefits";
    CoverageEligibilityResponsePurpose["Discovery"] = "discovery";
    CoverageEligibilityResponsePurpose["Validation"] = "validation";
})(CoverageEligibilityResponsePurpose = exports.CoverageEligibilityResponsePurpose || (exports.CoverageEligibilityResponsePurpose = {}));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates the degree of importance associated with the identified issue based on the
 * potential impact on the patient.
 */
var DetectedIssueSeverity;
(function (DetectedIssueSeverity) {
    DetectedIssueSeverity["High"] = "high";
    DetectedIssueSeverity["Low"] = "low";
    DetectedIssueSeverity["Moderate"] = "moderate";
})(DetectedIssueSeverity = exports.DetectedIssueSeverity || (exports.DetectedIssueSeverity = {}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of deviceName.
 * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
var DeviceDeviceNameType;
(function (DeviceDeviceNameType) {
    DeviceDeviceNameType["ManufacturerName"] = "manufacturer-name";
    DeviceDeviceNameType["ModelName"] = "model-name";
    DeviceDeviceNameType["Other"] = "other";
    DeviceDeviceNameType["PatientReportedName"] = "patient-reported-name";
    DeviceDeviceNameType["UdiLabelName"] = "udi-label-name";
    DeviceDeviceNameType["UserFriendlyName"] = "user-friendly-name";
})(DeviceDeviceNameType = exports.DeviceDeviceNameType || (exports.DeviceDeviceNameType = {}));
/**
 * Status of the Device availability.
 */
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["Active"] = "active";
    DeviceStatus["EnteredInError"] = "entered-in-error";
    DeviceStatus["Inactive"] = "inactive";
    DeviceStatus["Unknown"] = "unknown";
})(DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {}));
/**
 * A coded entry to indicate how the data was entered.
 */
var EntryType;
(function (EntryType) {
    EntryType["Barcode"] = "barcode";
    EntryType["Card"] = "card";
    EntryType["Manual"] = "manual";
    EntryType["Rfid"] = "rfid";
    EntryType["SelfReported"] = "self-reported";
    EntryType["Unknown"] = "unknown";
})(EntryType = exports.EntryType || (exports.EntryType = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of deviceName.
 * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
var DeviceDefinitionDeviceNameType;
(function (DeviceDefinitionDeviceNameType) {
    DeviceDefinitionDeviceNameType["ManufacturerName"] = "manufacturer-name";
    DeviceDefinitionDeviceNameType["ModelName"] = "model-name";
    DeviceDefinitionDeviceNameType["Other"] = "other";
    DeviceDefinitionDeviceNameType["PatientReportedName"] = "patient-reported-name";
    DeviceDefinitionDeviceNameType["UdiLabelName"] = "udi-label-name";
    DeviceDefinitionDeviceNameType["UserFriendlyName"] = "user-friendly-name";
})(DeviceDefinitionDeviceNameType = exports.DeviceDefinitionDeviceNameType || (exports.DeviceDefinitionDeviceNameType = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes the state of the calibration.
 */
var State;
(function (State) {
    State["Calibrated"] = "calibrated";
    State["CalibrationRequired"] = "calibration-required";
    State["NotCalibrated"] = "not-calibrated";
    State["Unspecified"] = "unspecified";
})(State = exports.State || (exports.State = {}));
/**
 * Describes the type of the calibration method.
 */
var DeviceMetricCalibrationType;
(function (DeviceMetricCalibrationType) {
    DeviceMetricCalibrationType["Gain"] = "gain";
    DeviceMetricCalibrationType["Offset"] = "offset";
    DeviceMetricCalibrationType["TwoPoint"] = "two-point";
    DeviceMetricCalibrationType["Unspecified"] = "unspecified";
})(DeviceMetricCalibrationType = exports.DeviceMetricCalibrationType || (exports.DeviceMetricCalibrationType = {}));
/**
 * Indicates the category of the observation generation process. A DeviceMetric can be for
 * example a setting, measurement, or calculation.
 */
var DeviceMetricCategory;
(function (DeviceMetricCategory) {
    DeviceMetricCategory["Calculation"] = "calculation";
    DeviceMetricCategory["Measurement"] = "measurement";
    DeviceMetricCategory["Setting"] = "setting";
    DeviceMetricCategory["Unspecified"] = "unspecified";
})(DeviceMetricCategory = exports.DeviceMetricCategory || (exports.DeviceMetricCategory = {}));
/**
 * Describes the color representation for the metric. This is often used to aid clinicians
 * to track and identify parameter types by color. In practice, consider a Patient Monitor
 * that has ECG/HR and Pleth for example; the parameters are displayed in different
 * characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
 */
var Color;
(function (Color) {
    Color["Black"] = "black";
    Color["Blue"] = "blue";
    Color["Cyan"] = "cyan";
    Color["Green"] = "green";
    Color["Magenta"] = "magenta";
    Color["Red"] = "red";
    Color["White"] = "white";
    Color["Yellow"] = "yellow";
})(Color = exports.Color || (exports.Color = {}));
/**
 * Indicates current operational state of the device. For example: On, Off, Standby, etc.
 */
var OperationalStatus;
(function (OperationalStatus) {
    OperationalStatus["EnteredInError"] = "entered-in-error";
    OperationalStatus["Off"] = "off";
    OperationalStatus["On"] = "on";
    OperationalStatus["Standby"] = "standby";
})(OperationalStatus = exports.OperationalStatus || (exports.OperationalStatus = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A code representing the patient or other source's judgment about the state of the device
 * used that this statement is about.  Generally this will be active or completed.
 */
var DeviceUseStatementStatus;
(function (DeviceUseStatementStatus) {
    DeviceUseStatementStatus["Active"] = "active";
    DeviceUseStatementStatus["Completed"] = "completed";
    DeviceUseStatementStatus["EnteredInError"] = "entered-in-error";
    DeviceUseStatementStatus["Intended"] = "intended";
    DeviceUseStatementStatus["OnHold"] = "on-hold";
    DeviceUseStatementStatus["Stopped"] = "stopped";
})(DeviceUseStatementStatus = exports.DeviceUseStatementStatus || (exports.DeviceUseStatementStatus = {}));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of the diagnostic report.
 */
var DiagnosticReportStatus;
(function (DiagnosticReportStatus) {
    DiagnosticReportStatus["Amended"] = "amended";
    DiagnosticReportStatus["Appended"] = "appended";
    DiagnosticReportStatus["Cancelled"] = "cancelled";
    DiagnosticReportStatus["Corrected"] = "corrected";
    DiagnosticReportStatus["EnteredInError"] = "entered-in-error";
    DiagnosticReportStatus["Final"] = "final";
    DiagnosticReportStatus["Partial"] = "partial";
    DiagnosticReportStatus["Preliminary"] = "preliminary";
    DiagnosticReportStatus["Registered"] = "registered";
    DiagnosticReportStatus["Unknown"] = "unknown";
})(DiagnosticReportStatus = exports.DiagnosticReportStatus || (exports.DiagnosticReportStatus = {}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of this document manifest.
 */
var DocumentManifestStatus;
(function (DocumentManifestStatus) {
    DocumentManifestStatus["Current"] = "current";
    DocumentManifestStatus["EnteredInError"] = "entered-in-error";
    DocumentManifestStatus["Superseded"] = "superseded";
})(DocumentManifestStatus = exports.DocumentManifestStatus || (exports.DocumentManifestStatus = {}));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of relationship that this document has with anther document.
 */
var DocumentReferenceRelatesToCode;
(function (DocumentReferenceRelatesToCode) {
    DocumentReferenceRelatesToCode["Appends"] = "appends";
    DocumentReferenceRelatesToCode["Replaces"] = "replaces";
    DocumentReferenceRelatesToCode["Signs"] = "signs";
    DocumentReferenceRelatesToCode["Transforms"] = "transforms";
})(DocumentReferenceRelatesToCode = exports.DocumentReferenceRelatesToCode || (exports.DocumentReferenceRelatesToCode = {}));
/**
 * The status of this document reference.
 */
var DocumentReferenceStatus;
(function (DocumentReferenceStatus) {
    DocumentReferenceStatus["Current"] = "current";
    DocumentReferenceStatus["EnteredInError"] = "entered-in-error";
    DocumentReferenceStatus["Superseded"] = "superseded";
})(DocumentReferenceStatus = exports.DocumentReferenceStatus || (exports.DocumentReferenceStatus = {}));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Whether these results are for the exposure state or alternative exposure state.
 */
var ExposureState;
(function (ExposureState) {
    ExposureState["Exposure"] = "exposure";
    ExposureState["ExposureAlternative"] = "exposure-alternative";
})(ExposureState = exports.ExposureState || (exports.ExposureState = {}));
/**
 * The status of this effect evidence synthesis. Enables tracking the life-cycle of the
 * content.
 */
var EffectEvidenceSynthesisStatus;
(function (EffectEvidenceSynthesisStatus) {
    EffectEvidenceSynthesisStatus["Active"] = "active";
    EffectEvidenceSynthesisStatus["Draft"] = "draft";
    EffectEvidenceSynthesisStatus["Retired"] = "retired";
    EffectEvidenceSynthesisStatus["Unknown"] = "unknown";
})(EffectEvidenceSynthesisStatus = exports.EffectEvidenceSynthesisStatus || (exports.EffectEvidenceSynthesisStatus = {}));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of the participants' presence at the specified location during the period
 * specified. If the participant is no longer at the location, then the period will have an
 * end date/time.
 */
var EncounterLocationStatus;
(function (EncounterLocationStatus) {
    EncounterLocationStatus["Active"] = "active";
    EncounterLocationStatus["Completed"] = "completed";
    EncounterLocationStatus["Planned"] = "planned";
    EncounterLocationStatus["Reserved"] = "reserved";
})(EncounterLocationStatus = exports.EncounterLocationStatus || (exports.EncounterLocationStatus = {}));
/**
 * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
 */
var EncounterStatus;
(function (EncounterStatus) {
    EncounterStatus["Arrived"] = "arrived";
    EncounterStatus["Cancelled"] = "cancelled";
    EncounterStatus["EnteredInError"] = "entered-in-error";
    EncounterStatus["Finished"] = "finished";
    EncounterStatus["InProgress"] = "in-progress";
    EncounterStatus["Onleave"] = "onleave";
    EncounterStatus["Planned"] = "planned";
    EncounterStatus["Triaged"] = "triaged";
    EncounterStatus["Unknown"] = "unknown";
})(EncounterStatus = exports.EncounterStatus || (exports.EncounterStatus = {}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * active | suspended | error | off | test.
 */
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["Active"] = "active";
    EndpointStatus["EnteredInError"] = "entered-in-error";
    EndpointStatus["Error"] = "error";
    EndpointStatus["Off"] = "off";
    EndpointStatus["Suspended"] = "suspended";
    EndpointStatus["Test"] = "test";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Processing status: error, complete.
 */
var EnrollmentResponseOutcome;
(function (EnrollmentResponseOutcome) {
    EnrollmentResponseOutcome["Complete"] = "complete";
    EnrollmentResponseOutcome["Error"] = "error";
    EnrollmentResponseOutcome["Partial"] = "partial";
    EnrollmentResponseOutcome["Queued"] = "queued";
})(EnrollmentResponseOutcome = exports.EnrollmentResponseOutcome || (exports.EnrollmentResponseOutcome = {}));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * planned | waitlist | active | onhold | finished | cancelled.
 */
var EpisodeOfCareStatus;
(function (EpisodeOfCareStatus) {
    EpisodeOfCareStatus["Active"] = "active";
    EpisodeOfCareStatus["Cancelled"] = "cancelled";
    EpisodeOfCareStatus["EnteredInError"] = "entered-in-error";
    EpisodeOfCareStatus["Finished"] = "finished";
    EpisodeOfCareStatus["Onhold"] = "onhold";
    EpisodeOfCareStatus["Planned"] = "planned";
    EpisodeOfCareStatus["Waitlist"] = "waitlist";
})(EpisodeOfCareStatus = exports.EpisodeOfCareStatus || (exports.EpisodeOfCareStatus = {}));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of this event definition. Enables tracking the life-cycle of the content.
 */
var EventDefinitionStatus;
(function (EventDefinitionStatus) {
    EventDefinitionStatus["Active"] = "active";
    EventDefinitionStatus["Draft"] = "draft";
    EventDefinitionStatus["Retired"] = "retired";
    EventDefinitionStatus["Unknown"] = "unknown";
})(EventDefinitionStatus = exports.EventDefinitionStatus || (exports.EventDefinitionStatus = {}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of this evidence. Enables tracking the life-cycle of the content.
 */
var EvidenceStatus;
(function (EvidenceStatus) {
    EvidenceStatus["Active"] = "active";
    EvidenceStatus["Draft"] = "draft";
    EvidenceStatus["Retired"] = "retired";
    EvidenceStatus["Unknown"] = "unknown";
})(EvidenceStatus = exports.EvidenceStatus || (exports.EvidenceStatus = {}));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates how elements are aggregated within the study effective period.
 */
var GroupMeasure;
(function (GroupMeasure) {
    GroupMeasure["Mean"] = "mean";
    GroupMeasure["MeanOfMean"] = "mean-of-mean";
    GroupMeasure["MeanOfMedian"] = "mean-of-median";
    GroupMeasure["Median"] = "median";
    GroupMeasure["MedianOfMean"] = "median-of-mean";
    GroupMeasure["MedianOfMedian"] = "median-of-median";
})(GroupMeasure = exports.GroupMeasure || (exports.GroupMeasure = {}));
/**
 * The status of this evidence variable. Enables tracking the life-cycle of the content.
 */
var EvidenceVariableStatus;
(function (EvidenceVariableStatus) {
    EvidenceVariableStatus["Active"] = "active";
    EvidenceVariableStatus["Draft"] = "draft";
    EvidenceVariableStatus["Retired"] = "retired";
    EvidenceVariableStatus["Unknown"] = "unknown";
})(EvidenceVariableStatus = exports.EvidenceVariableStatus || (exports.EvidenceVariableStatus = {}));
/**
 * The type of evidence element, a population, an exposure, or an outcome.
 */
var EvidenceVariableType;
(function (EvidenceVariableType) {
    EvidenceVariableType["Continuous"] = "continuous";
    EvidenceVariableType["Descriptive"] = "descriptive";
    EvidenceVariableType["Dichotomous"] = "dichotomous";
})(EvidenceVariableType = exports.EvidenceVariableType || (exports.EvidenceVariableType = {}));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of actor - person or system.
 */
var ExampleScenarioActorType;
(function (ExampleScenarioActorType) {
    ExampleScenarioActorType["Entity"] = "entity";
    ExampleScenarioActorType["Person"] = "person";
})(ExampleScenarioActorType = exports.ExampleScenarioActorType || (exports.ExampleScenarioActorType = {}));
/**
 * The status of this example scenario. Enables tracking the life-cycle of the content.
 */
var ExampleScenarioStatus;
(function (ExampleScenarioStatus) {
    ExampleScenarioStatus["Active"] = "active";
    ExampleScenarioStatus["Draft"] = "draft";
    ExampleScenarioStatus["Retired"] = "retired";
    ExampleScenarioStatus["Unknown"] = "unknown";
})(ExampleScenarioStatus = exports.ExampleScenarioStatus || (exports.ExampleScenarioStatus = {}));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The business purpose of the note text.
 */
var ExplanationOfBenefitProcessNoteType;
(function (ExplanationOfBenefitProcessNoteType) {
    ExplanationOfBenefitProcessNoteType["Display"] = "display";
    ExplanationOfBenefitProcessNoteType["Print"] = "print";
    ExplanationOfBenefitProcessNoteType["Printoper"] = "printoper";
})(ExplanationOfBenefitProcessNoteType = exports.ExplanationOfBenefitProcessNoteType || (exports.ExplanationOfBenefitProcessNoteType = {}));
/**
 * The status of the resource instance.
 */
var ExplanationOfBenefitStatus;
(function (ExplanationOfBenefitStatus) {
    ExplanationOfBenefitStatus["Active"] = "active";
    ExplanationOfBenefitStatus["Cancelled"] = "cancelled";
    ExplanationOfBenefitStatus["Draft"] = "draft";
    ExplanationOfBenefitStatus["EnteredInError"] = "entered-in-error";
})(ExplanationOfBenefitStatus = exports.ExplanationOfBenefitStatus || (exports.ExplanationOfBenefitStatus = {}));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A code specifying the status of the record of the family history of a specific family
 * member.
 */
var FamilyMemberHistoryStatus;
(function (FamilyMemberHistoryStatus) {
    FamilyMemberHistoryStatus["Completed"] = "completed";
    FamilyMemberHistoryStatus["EnteredInError"] = "entered-in-error";
    FamilyMemberHistoryStatus["HealthUnknown"] = "health-unknown";
    FamilyMemberHistoryStatus["Partial"] = "partial";
})(FamilyMemberHistoryStatus = exports.FamilyMemberHistoryStatus || (exports.FamilyMemberHistoryStatus = {}));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Supports basic workflow.
 */
var FlagStatus;
(function (FlagStatus) {
    FlagStatus["Active"] = "active";
    FlagStatus["EnteredInError"] = "entered-in-error";
    FlagStatus["Inactive"] = "inactive";
})(FlagStatus = exports.FlagStatus || (exports.FlagStatus = {}));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The state of the goal throughout its lifecycle.
 */
var LifecycleStatus;
(function (LifecycleStatus) {
    LifecycleStatus["Accepted"] = "accepted";
    LifecycleStatus["Active"] = "active";
    LifecycleStatus["Cancelled"] = "cancelled";
    LifecycleStatus["Completed"] = "completed";
    LifecycleStatus["EnteredInError"] = "entered-in-error";
    LifecycleStatus["OnHold"] = "on-hold";
    LifecycleStatus["Planned"] = "planned";
    LifecycleStatus["Proposed"] = "proposed";
    LifecycleStatus["Rejected"] = "rejected";
})(LifecycleStatus = exports.LifecycleStatus || (exports.LifecycleStatus = {}));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * identical | matching | different | no-rule | custom.
 */
var Rule;
(function (Rule) {
    Rule["Custom"] = "custom";
    Rule["Different"] = "different";
    Rule["Identical"] = "identical";
    Rule["Matching"] = "matching";
})(Rule = exports.Rule || (exports.Rule = {}));
/**
 * Defines how the compartment rule is used - whether it it is used to test whether
 * resources are subject to the rule, or whether it is a rule that must be followed.
 */
var GraphDefinitionCompartmentUse;
(function (GraphDefinitionCompartmentUse) {
    GraphDefinitionCompartmentUse["Condition"] = "condition";
    GraphDefinitionCompartmentUse["Requirement"] = "requirement";
})(GraphDefinitionCompartmentUse = exports.GraphDefinitionCompartmentUse || (exports.GraphDefinitionCompartmentUse = {}));
/**
 * The status of this graph definition. Enables tracking the life-cycle of the content.
 */
var GraphDefinitionStatus;
(function (GraphDefinitionStatus) {
    GraphDefinitionStatus["Active"] = "active";
    GraphDefinitionStatus["Draft"] = "draft";
    GraphDefinitionStatus["Retired"] = "retired";
    GraphDefinitionStatus["Unknown"] = "unknown";
})(GraphDefinitionStatus = exports.GraphDefinitionStatus || (exports.GraphDefinitionStatus = {}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Identifies the broad classification of the kind of resources the group includes.
 */
var GroupType;
(function (GroupType) {
    GroupType["Animal"] = "animal";
    GroupType["Device"] = "device";
    GroupType["Medication"] = "medication";
    GroupType["Person"] = "person";
    GroupType["Practitioner"] = "practitioner";
    GroupType["Substance"] = "substance";
})(GroupType = exports.GroupType || (exports.GroupType = {}));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of the response. If the evaluation is completed successfully, the status will
 * indicate success. However, in order to complete the evaluation, the engine may require
 * more information. In this case, the status will be data-required, and the response will
 * contain a description of the additional required information. If the evaluation completed
 * successfully, but the engine determines that a potentially more accurate response could
 * be provided if more data was available, the status will be data-requested, and the
 * response will contain a description of the additional requested information.
 */
var GuidanceResponseStatus;
(function (GuidanceResponseStatus) {
    GuidanceResponseStatus["DataRequested"] = "data-requested";
    GuidanceResponseStatus["DataRequired"] = "data-required";
    GuidanceResponseStatus["EnteredInError"] = "entered-in-error";
    GuidanceResponseStatus["Failure"] = "failure";
    GuidanceResponseStatus["InProgress"] = "in-progress";
    GuidanceResponseStatus["Success"] = "success";
})(GuidanceResponseStatus = exports.GuidanceResponseStatus || (exports.GuidanceResponseStatus = {}));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Fri"] = "fri";
    DaysOfWeek["Mon"] = "mon";
    DaysOfWeek["Sat"] = "sat";
    DaysOfWeek["Sun"] = "sun";
    DaysOfWeek["Thu"] = "thu";
    DaysOfWeek["Tue"] = "tue";
    DaysOfWeek["Wed"] = "wed";
})(DaysOfWeek = exports.DaysOfWeek || (exports.DaysOfWeek = {}));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The current state of the ImagingStudy.
 */
var ImagingStudyStatus;
(function (ImagingStudyStatus) {
    ImagingStudyStatus["Available"] = "available";
    ImagingStudyStatus["Cancelled"] = "cancelled";
    ImagingStudyStatus["EnteredInError"] = "entered-in-error";
    ImagingStudyStatus["Registered"] = "registered";
    ImagingStudyStatus["Unknown"] = "unknown";
})(ImagingStudyStatus = exports.ImagingStudyStatus || (exports.ImagingStudyStatus = {}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A code that indicates how the page is generated.
 */
var Generation;
(function (Generation) {
    Generation["Generated"] = "generated";
    Generation["Html"] = "html";
    Generation["Markdown"] = "markdown";
    Generation["Xml"] = "xml";
})(Generation = exports.Generation || (exports.Generation = {}));
/**
 * apply | path-resource | path-pages | path-tx-cache | expansion-parameter |
 * rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
 */
var ImplementationGuideParameterCode;
(function (ImplementationGuideParameterCode) {
    ImplementationGuideParameterCode["Apply"] = "apply";
    ImplementationGuideParameterCode["ExpansionParameter"] = "expansion-parameter";
    ImplementationGuideParameterCode["GenerateTurtle"] = "generate-turtle";
    ImplementationGuideParameterCode["Generatejson"] = "generate-json";
    ImplementationGuideParameterCode["Generatexml"] = "generate-xml";
    ImplementationGuideParameterCode["HtmlTemplate"] = "html-template";
    ImplementationGuideParameterCode["PathPages"] = "path-pages";
    ImplementationGuideParameterCode["PathResource"] = "path-resource";
    ImplementationGuideParameterCode["PathTxCache"] = "path-tx-cache";
    ImplementationGuideParameterCode["RuleBrokenLinks"] = "rule-broken-links";
})(ImplementationGuideParameterCode = exports.ImplementationGuideParameterCode || (exports.ImplementationGuideParameterCode = {}));
var ImplementationGuideFhirVersion;
(function (ImplementationGuideFhirVersion) {
    ImplementationGuideFhirVersion["The001"] = "0.01";
    ImplementationGuideFhirVersion["The005"] = "0.05";
    ImplementationGuideFhirVersion["The006"] = "0.06";
    ImplementationGuideFhirVersion["The0080"] = "0.0.80";
    ImplementationGuideFhirVersion["The0081"] = "0.0.81";
    ImplementationGuideFhirVersion["The0082"] = "0.0.82";
    ImplementationGuideFhirVersion["The011"] = "0.11";
    ImplementationGuideFhirVersion["The040"] = "0.4.0";
    ImplementationGuideFhirVersion["The050"] = "0.5.0";
    ImplementationGuideFhirVersion["The100"] = "1.0.0";
    ImplementationGuideFhirVersion["The101"] = "1.0.1";
    ImplementationGuideFhirVersion["The102"] = "1.0.2";
    ImplementationGuideFhirVersion["The110"] = "1.1.0";
    ImplementationGuideFhirVersion["The140"] = "1.4.0";
    ImplementationGuideFhirVersion["The160"] = "1.6.0";
    ImplementationGuideFhirVersion["The180"] = "1.8.0";
    ImplementationGuideFhirVersion["The300"] = "3.0.0";
    ImplementationGuideFhirVersion["The301"] = "3.0.1";
    ImplementationGuideFhirVersion["The330"] = "3.3.0";
    ImplementationGuideFhirVersion["The350"] = "3.5.0";
    ImplementationGuideFhirVersion["The400"] = "4.0.0";
})(ImplementationGuideFhirVersion = exports.ImplementationGuideFhirVersion || (exports.ImplementationGuideFhirVersion = {}));
/**
 * The license that applies to this Implementation Guide, using an SPDX license code, or
 * 'not-open-source'.
 */
var License;
(function (License) {
    License["AAL"] = "AAL";
    License["ADSL"] = "ADSL";
    License["AGPL10Only"] = "AGPL-1.0-only";
    License["AGPL10OrLater"] = "AGPL-1.0-or-later";
    License["AGPL30Only"] = "AGPL-3.0-only";
    License["AGPL30OrLater"] = "AGPL-3.0-or-later";
    License["APL10"] = "APL-1.0";
    License["Abstyles"] = "Abstyles";
    License["Adobe2006"] = "Adobe-2006";
    License["AdobeGlyph"] = "Adobe-Glyph";
    License["Afl11"] = "AFL-1.1";
    License["Afl12"] = "AFL-1.2";
    License["Afl20"] = "AFL-2.0";
    License["Afl21"] = "AFL-2.1";
    License["Afl30"] = "AFL-3.0";
    License["Afmparse"] = "Afmparse";
    License["Aladdin"] = "Aladdin";
    License["Amdplpa"] = "AMDPLPA";
    License["Aml"] = "AML";
    License["Ampas"] = "AMPAS";
    License["AntlrPD"] = "ANTLR-PD";
    License["Apache10"] = "Apache-1.0";
    License["Apache11"] = "Apache-1.1";
    License["Apache20"] = "Apache-2.0";
    License["Apafml"] = "APAFML";
    License["Apsl10"] = "APSL-1.0";
    License["Apsl11"] = "APSL-1.1";
    License["Apsl12"] = "APSL-1.2";
    License["Apsl20"] = "APSL-2.0";
    License["Artistic10"] = "Artistic-1.0";
    License["Artistic10Cl8"] = "Artistic-1.0-cl8";
    License["Artistic10Perl"] = "Artistic-1.0-Perl";
    License["Artistic20"] = "Artistic-2.0";
    License["BSD1Clause"] = "BSD-1-Clause";
    License["BSD2Clause"] = "BSD-2-Clause";
    License["BSD2ClauseFreeBSD"] = "BSD-2-Clause-FreeBSD";
    License["BSD2ClauseNetBSD"] = "BSD-2-Clause-NetBSD";
    License["BSD2ClausePatent"] = "BSD-2-Clause-Patent";
    License["BSD3Clause"] = "BSD-3-Clause";
    License["BSD3ClauseAttribution"] = "BSD-3-Clause-Attribution";
    License["BSD3ClauseClear"] = "BSD-3-Clause-Clear";
    License["BSD3ClauseLBNL"] = "BSD-3-Clause-LBNL";
    License["BSD3ClauseNoNuclearLicense"] = "BSD-3-Clause-No-Nuclear-License";
    License["BSD3ClauseNoNuclearLicense2014"] = "BSD-3-Clause-No-Nuclear-License-2014";
    License["BSD3ClauseNoNuclearWarranty"] = "BSD-3-Clause-No-Nuclear-Warranty";
    License["BSD4Clause"] = "BSD-4-Clause";
    License["BSD4ClauseUC"] = "BSD-4-Clause-UC";
    License["BSDProtection"] = "BSD-Protection";
    License["BSDSourceCode"] = "BSD-Source-Code";
    License["Bahyph"] = "Bahyph";
    License["Barr"] = "Barr";
    License["Beerware"] = "Beerware";
    License["BitTorrent10"] = "BitTorrent-1.0";
    License["BitTorrent11"] = "BitTorrent-1.1";
    License["Borceux"] = "Borceux";
    License["Bsl10"] = "BSL-1.0";
    License["Bzip2105"] = "bzip2-1.0.5";
    License["Bzip2106"] = "bzip2-1.0.6";
    License["CDLAPermissive10"] = "CDLA-Permissive-1.0";
    License["CDLASharing10"] = "CDLA-Sharing-1.0";
    License["CNRIJython"] = "CNRI-Jython";
    License["CNRIPython"] = "CNRI-Python";
    License["CNRIPythonGPLCompatible"] = "CNRI-Python-GPL-Compatible";
    License["CUAOpl10"] = "CUA-OPL-1.0";
    License["Caldera"] = "Caldera";
    License["Catosl11"] = "CATOSL-1.1";
    License["Cc010"] = "CC0-1.0";
    License["CcBy10"] = "CC-BY-1.0";
    License["CcBy20"] = "CC-BY-2.0";
    License["CcBy25"] = "CC-BY-2.5";
    License["CcBy30"] = "CC-BY-3.0";
    License["CcBy40"] = "CC-BY-4.0";
    License["CcByNc10"] = "CC-BY-NC-1.0";
    License["CcByNc20"] = "CC-BY-NC-2.0";
    License["CcByNc25"] = "CC-BY-NC-2.5";
    License["CcByNc30"] = "CC-BY-NC-3.0";
    License["CcByNc40"] = "CC-BY-NC-4.0";
    License["CcByNcNd10"] = "CC-BY-NC-ND-1.0";
    License["CcByNcNd20"] = "CC-BY-NC-ND-2.0";
    License["CcByNcNd25"] = "CC-BY-NC-ND-2.5";
    License["CcByNcNd30"] = "CC-BY-NC-ND-3.0";
    License["CcByNcNd40"] = "CC-BY-NC-ND-4.0";
    License["CcByNcSa10"] = "CC-BY-NC-SA-1.0";
    License["CcByNcSa20"] = "CC-BY-NC-SA-2.0";
    License["CcByNcSa25"] = "CC-BY-NC-SA-2.5";
    License["CcByNcSa30"] = "CC-BY-NC-SA-3.0";
    License["CcByNcSa40"] = "CC-BY-NC-SA-4.0";
    License["CcByNd10"] = "CC-BY-ND-1.0";
    License["CcByNd20"] = "CC-BY-ND-2.0";
    License["CcByNd25"] = "CC-BY-ND-2.5";
    License["CcByNd30"] = "CC-BY-ND-3.0";
    License["CcByNd40"] = "CC-BY-ND-4.0";
    License["CcBySa10"] = "CC-BY-SA-1.0";
    License["CcBySa20"] = "CC-BY-SA-2.0";
    License["CcBySa25"] = "CC-BY-SA-2.5";
    License["CcBySa30"] = "CC-BY-SA-3.0";
    License["CcBySa40"] = "CC-BY-SA-4.0";
    License["Cddl10"] = "CDDL-1.0";
    License["Cddl11"] = "CDDL-1.1";
    License["Cecill10"] = "CECILL-1.0";
    License["Cecill11"] = "CECILL-1.1";
    License["Cecill20"] = "CECILL-2.0";
    License["Cecill21"] = "CECILL-2.1";
    License["CecillB"] = "CECILL-B";
    License["CecillC"] = "CECILL-C";
    License["ClArtistic"] = "ClArtistic";
    License["Condor11"] = "Condor-1.1";
    License["Cpal10"] = "CPAL-1.0";
    License["Cpl10"] = "CPL-1.0";
    License["Cpol102"] = "CPOL-1.02";
    License["Crossword"] = "Crossword";
    License["CrystalStacker"] = "CrystalStacker";
    License["Cube"] = "Cube";
    License["Curl"] = "curl";
    License["DFsl10"] = "D-FSL-1.0";
    License["Diffmark"] = "diffmark";
    License["Doc"] = "DOC";
    License["Dotseqn"] = "Dotseqn";
    License["Dsdp"] = "DSDP";
    License["Dvipdfm"] = "dvipdfm";
    License["EGenix"] = "eGenix";
    License["EUDatagrid"] = "EUDatagrid";
    License["Ecl10"] = "ECL-1.0";
    License["Ecl20"] = "ECL-2.0";
    License["Efl10"] = "EFL-1.0";
    License["Efl20"] = "EFL-2.0";
    License["Entessa"] = "Entessa";
    License["Epl10"] = "EPL-1.0";
    License["Epl20"] = "EPL-2.0";
    License["ErlPL11"] = "ErlPL-1.1";
    License["Eupl10"] = "EUPL-1.0";
    License["Eupl11"] = "EUPL-1.1";
    License["Eupl12"] = "EUPL-1.2";
    License["Eurosym"] = "Eurosym";
    License["Fair"] = "Fair";
    License["Frameworx10"] = "Frameworx-1.0";
    License["FreeImage"] = "FreeImage";
    License["Fsfap"] = "FSFAP";
    License["Fsful"] = "FSFUL";
    License["Fsfullr"] = "FSFULLR";
    License["Ftl"] = "FTL";
    License["GFDL11Only"] = "GFDL-1.1-only";
    License["GFDL11OrLater"] = "GFDL-1.1-or-later";
    License["GFDL12Only"] = "GFDL-1.2-only";
    License["GFDL12OrLater"] = "GFDL-1.2-or-later";
    License["GFDL13Only"] = "GFDL-1.3-only";
    License["GFDL13OrLater"] = "GFDL-1.3-or-later";
    License["GPL10Only"] = "GPL-1.0-only";
    License["GPL10OrLater"] = "GPL-1.0-or-later";
    License["GPL20Only"] = "GPL-2.0-only";
    License["GPL20OrLater"] = "GPL-2.0-or-later";
    License["GPL30Only"] = "GPL-3.0-only";
    License["GPL30OrLater"] = "GPL-3.0-or-later";
    License["GSOAP13B"] = "gSOAP-1.3b";
    License["Giftware"] = "Giftware";
    License["Gl2PS"] = "GL2PS";
    License["Glide"] = "Glide";
    License["Glulxe"] = "Glulxe";
    License["Gnuplot"] = "gnuplot";
    License["HaskellReport"] = "HaskellReport";
    License["Hpnd"] = "HPND";
    License["IBMPibs"] = "IBM-pibs";
    License["IMatix"] = "iMatix";
    License["IPL10"] = "IPL-1.0";
    License["ISC"] = "ISC";
    License["Icu"] = "ICU";
    License["Ijg"] = "IJG";
    License["ImageMagick"] = "ImageMagick";
    License["Imlib2"] = "Imlib2";
    License["InfoZIP"] = "Info-ZIP";
    License["Intel"] = "Intel";
    License["IntelACPI"] = "Intel-ACPI";
    License["Interbase10"] = "Interbase-1.0";
    License["Ipa"] = "IPA";
    License["JSON"] = "JSON";
    License["JasPer20"] = "JasPer-2.0";
    License["LGPL20Only"] = "LGPL-2.0-only";
    License["LGPL20OrLater"] = "LGPL-2.0-or-later";
    License["LGPL21Only"] = "LGPL-2.1-only";
    License["LGPL21OrLater"] = "LGPL-2.1-or-later";
    License["LGPL30Only"] = "LGPL-3.0-only";
    License["LGPL30OrLater"] = "LGPL-3.0-or-later";
    License["LPPL13A"] = "LPPL-1.3a";
    License["LPPL13C"] = "LPPL-1.3c";
    License["Lal12"] = "LAL-1.2";
    License["Lal13"] = "LAL-1.3";
    License["Latex2E"] = "Latex2e";
    License["Leptonica"] = "Leptonica";
    License["Lgpllr"] = "LGPLLR";
    License["LiLiQP11"] = "LiLiQ-P-1.1";
    License["LiLiQR11"] = "LiLiQ-R-1.1";
    License["LiLiQRplus11"] = "LiLiQ-Rplus-1.1";
    License["Libpng"] = "Libpng";
    License["Libtiff"] = "libtiff";
    License["LinuxOpenIB"] = "Linux-OpenIB";
    License["Lpl10"] = "LPL-1.0";
    License["Lpl102"] = "LPL-1.02";
    License["Lppl10"] = "LPPL-1.0";
    License["Lppl11"] = "LPPL-1.1";
    License["Lppl12"] = "LPPL-1.2";
    License["MIT"] = "MIT";
    License["MIT0"] = "MIT-0";
    License["MITAdvertising"] = "MIT-advertising";
    License["MITCmu"] = "MIT-CMU";
    License["MITEnna"] = "MIT-enna";
    License["MITFeh"] = "MIT-feh";
    License["MPL10"] = "MPL-1.0";
    License["MPL11"] = "MPL-1.1";
    License["MPL20"] = "MPL-2.0";
    License["MPL20NoCopyleftException"] = "MPL-2.0-no-copyleft-exception";
    License["MSPl"] = "MS-PL";
    License["MSRl"] = "MS-RL";
    License["MakeIndex"] = "MakeIndex";
    License["MirOS"] = "MirOS";
    License["Mitnfa"] = "MITNFA";
    License["Motosoto"] = "Motosoto";
    License["Mpich2"] = "mpich2";
    License["Mtll"] = "MTLL";
    License["Multics"] = "Multics";
    License["Mup"] = "Mup";
    License["NCSA"] = "NCSA";
    License["NPL10"] = "NPL-1.0";
    License["NPL11"] = "NPL-1.1";
    License["NTP"] = "NTP";
    License["Nasa13"] = "NASA-1.3";
    License["Naumen"] = "Naumen";
    License["Nbpl10"] = "NBPL-1.0";
    License["NetCDF"] = "NetCDF";
    License["NetSNMP"] = "Net-SNMP";
    License["Newsletr"] = "Newsletr";
    License["Ngpl"] = "NGPL";
    License["Nlod10"] = "NLOD-1.0";
    License["Nlpl"] = "NLPL";
    License["Nokia"] = "Nokia";
    License["Nosl"] = "NOSL";
    License["NotOpenSource"] = "not-open-source";
    License["Noweb"] = "Noweb";
    License["Nposl30"] = "NPOSL-3.0";
    License["Nrl"] = "NRL";
    License["ODbL10"] = "ODbL-1.0";
    License["OcctPl"] = "OCCT-PL";
    License["Oclc20"] = "OCLC-2.0";
    License["Ofl10"] = "OFL-1.0";
    License["Ofl11"] = "OFL-1.1";
    License["Ogtsl"] = "OGTSL";
    License["Oldap11"] = "OLDAP-1.1";
    License["Oldap12"] = "OLDAP-1.2";
    License["Oldap13"] = "OLDAP-1.3";
    License["Oldap14"] = "OLDAP-1.4";
    License["Oldap20"] = "OLDAP-2.0";
    License["Oldap201"] = "OLDAP-2.0.1";
    License["Oldap21"] = "OLDAP-2.1";
    License["Oldap22"] = "OLDAP-2.2";
    License["Oldap221"] = "OLDAP-2.2.1";
    License["Oldap222"] = "OLDAP-2.2.2";
    License["Oldap23"] = "OLDAP-2.3";
    License["Oldap24"] = "OLDAP-2.4";
    License["Oldap25"] = "OLDAP-2.5";
    License["Oldap26"] = "OLDAP-2.6";
    License["Oldap27"] = "OLDAP-2.7";
    License["Oldap28"] = "OLDAP-2.8";
    License["Oml"] = "OML";
    License["OpenSSL"] = "OpenSSL";
    License["Opl10"] = "OPL-1.0";
    License["OsetPl21"] = "OSET-PL-2.1";
    License["Osl10"] = "OSL-1.0";
    License["Osl11"] = "OSL-1.1";
    License["Osl20"] = "OSL-2.0";
    License["Osl21"] = "OSL-2.1";
    License["Osl30"] = "OSL-3.0";
    License["PHP30"] = "PHP-3.0";
    License["PHP301"] = "PHP-3.01";
    License["Pddl10"] = "PDDL-1.0";
    License["Plexus"] = "Plexus";
    License["PostgreSQL"] = "PostgreSQL";
    License["Psfrag"] = "psfrag";
    License["Psutils"] = "psutils";
    License["Python20"] = "Python-2.0";
    License["Qhull"] = "Qhull";
    License["Qpl10"] = "QPL-1.0";
    License["RHeCos11"] = "RHeCos-1.1";
    License["RSAMd"] = "RSA-MD";
    License["Rdisc"] = "Rdisc";
    License["Rpl11"] = "RPL-1.1";
    License["Rpl15"] = "RPL-1.5";
    License["Rpsl10"] = "RPSL-1.0";
    License["Rscpl"] = "RSCPL";
    License["Ruby"] = "Ruby";
    License["SAXPD"] = "SAX-PD";
    License["SGIB10"] = "SGI-B-1.0";
    License["SGIB11"] = "SGI-B-1.1";
    License["SGIB20"] = "SGI-B-2.0";
    License["Saxpath"] = "Saxpath";
    License["Scea"] = "SCEA";
    License["Sendmail"] = "Sendmail";
    License["SimPL20"] = "SimPL-2.0";
    License["Sissl"] = "SISSL";
    License["Sissl12"] = "SISSL-1.2";
    License["Sleepycat"] = "Sleepycat";
    License["Smlnj"] = "SMLNJ";
    License["Smppl"] = "SMPPL";
    License["Snia"] = "SNIA";
    License["Spencer86"] = "Spencer-86";
    License["Spencer94"] = "Spencer-94";
    License["Spencer99"] = "Spencer-99";
    License["Spl10"] = "SPL-1.0";
    License["SugarCRM113"] = "SugarCRM-1.1.3";
    License["Swl"] = "SWL";
    License["TCPWrappers"] = "TCP-wrappers";
    License["TMate"] = "TMate";
    License["Tcl"] = "TCL";
    License["The0BSD"] = "0BSD";
    License["Torque11"] = "TORQUE-1.1";
    License["Tosl"] = "TOSL";
    License["UnicodeDFS2015"] = "Unicode-DFS-2015";
    License["UnicodeDFS2016"] = "Unicode-DFS-2016";
    License["UnicodeTOU"] = "Unicode-TOU";
    License["Unlicense"] = "Unlicense";
    License["Upl10"] = "UPL-1.0";
    License["Vim"] = "Vim";
    License["Vostrom"] = "VOSTROM";
    License["Vsl10"] = "VSL-1.0";
    License["W3C"] = "W3C";
    License["W3C19980720"] = "W3C-19980720";
    License["W3C20150513"] = "W3C-20150513";
    License["Watcom10"] = "Watcom-1.0";
    License["Wsuipa"] = "Wsuipa";
    License["Wtfpl"] = "WTFPL";
    License["X11"] = "X11";
    License["XFree8611"] = "XFree86-1.1";
    License["XSkat"] = "XSkat";
    License["Xerox"] = "Xerox";
    License["Xinetd"] = "xinetd";
    License["Xnet"] = "Xnet";
    License["Xpp"] = "xpp";
    License["Ypl10"] = "YPL-1.0";
    License["Ypl11"] = "YPL-1.1";
    License["ZPL11"] = "ZPL-1.1";
    License["ZPL20"] = "ZPL-2.0";
    License["ZPL21"] = "ZPL-2.1";
    License["Zed"] = "Zed";
    License["Zend20"] = "Zend-2.0";
    License["Zimbra13"] = "Zimbra-1.3";
    License["Zimbra14"] = "Zimbra-1.4";
    License["Zlib"] = "Zlib";
    License["ZlibAcknowledgement"] = "zlib-acknowledgement";
})(License = exports.License || (exports.License = {}));
/**
 * The status of this implementation guide. Enables tracking the life-cycle of the content.
 */
var ImplementationGuideStatus;
(function (ImplementationGuideStatus) {
    ImplementationGuideStatus["Active"] = "active";
    ImplementationGuideStatus["Draft"] = "draft";
    ImplementationGuideStatus["Retired"] = "retired";
    ImplementationGuideStatus["Unknown"] = "unknown";
})(ImplementationGuideStatus = exports.ImplementationGuideStatus || (exports.ImplementationGuideStatus = {}));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The current state of the health insurance product.
 */
var InsurancePlanStatus;
(function (InsurancePlanStatus) {
    InsurancePlanStatus["Active"] = "active";
    InsurancePlanStatus["Draft"] = "draft";
    InsurancePlanStatus["Retired"] = "retired";
    InsurancePlanStatus["Unknown"] = "unknown";
})(InsurancePlanStatus = exports.InsurancePlanStatus || (exports.InsurancePlanStatus = {}));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This code identifies the type of the component.
 */
var InvoicePriceComponentType;
(function (InvoicePriceComponentType) {
    InvoicePriceComponentType["Base"] = "base";
    InvoicePriceComponentType["Deduction"] = "deduction";
    InvoicePriceComponentType["Discount"] = "discount";
    InvoicePriceComponentType["Informational"] = "informational";
    InvoicePriceComponentType["Surcharge"] = "surcharge";
    InvoicePriceComponentType["Tax"] = "tax";
})(InvoicePriceComponentType = exports.InvoicePriceComponentType || (exports.InvoicePriceComponentType = {}));
/**
 * The current state of the Invoice.
 */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["Balanced"] = "balanced";
    InvoiceStatus["Cancelled"] = "cancelled";
    InvoiceStatus["Draft"] = "draft";
    InvoiceStatus["EnteredInError"] = "entered-in-error";
    InvoiceStatus["Issued"] = "issued";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));


/***/ })
/******/ ]);
});
//# sourceMappingURL=fhir_resources.js.map