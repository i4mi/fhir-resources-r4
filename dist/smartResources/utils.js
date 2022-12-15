"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = exports.hasCoding = exports.getAllI18N = exports.readI18N = exports.writeI18N = void 0;
const TRANSLATION_URL = 'http://hl7.org/fhir/StructureDefinition/translation';
const LANG_URL = 'lang';
const CONTENT_URL = 'content';
/**
 * Creates a internationalization extension object for assigning to text fields, according to
 * specification in http://hl7.org/fhir/R4B/extension-translation.html.
 * @param strings   A key / value pair object with the translation strings.
 * @returns         A javascript object containing the extensions for an extensible property of a FHIR resource.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
function writeI18N(strings) {
    const i18nExtensions = new Array();
    Object.keys(strings).forEach(language => {
        i18nExtensions.push({
            url: TRANSLATION_URL,
            extension: [
                {
                    url: LANG_URL,
                    valueCode: language
                },
                {
                    url: CONTENT_URL,
                    valueString: strings[language]
                }
            ]
        });
    });
    return {
        extension: i18nExtensions
    };
}
exports.writeI18N = writeI18N;
/**
 * Reads the i18n string from a given extension element. The element needs to have
 * the structure as defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param element   the element formed like defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param lang      the desired language string
 * @returns         the i18n string, or undefined if the given language is not available or the
 *                  element is malformed.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
function readI18N(element, lang) {
    var _a, _b;
    if (!element.extension)
        return undefined;
    const translationExtension = element.extension.find((extension) => {
        var _a;
        if (extension.url === TRANSLATION_URL) {
            return (extension.extension &&
                ((_a = extension.extension) === null || _a === void 0 ? void 0 : _a.findIndex((extension) => {
                    return extension.url === LANG_URL && extension.valueCode === lang;
                })) > -1);
        }
        else {
            return false;
        }
    });
    return (_b = (_a = translationExtension === null || translationExtension === void 0 ? void 0 : translationExtension.extension) === null || _a === void 0 ? void 0 : _a.find((extension) => {
        return extension.url === CONTENT_URL;
    })) === null || _b === void 0 ? void 0 : _b.valueString;
}
exports.readI18N = readI18N;
/**
 * Reads all available i18n strings from a given extension element. The element needs to have
 * the structure as defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param element   the element formed like defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @returns         a key/value pair object with all available i18n strings as value and their respective
 *                  language as key
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
function getAllI18N(element) {
    var _a;
    const i18n = {};
    const translationExtensions = (_a = element.extension) === null || _a === void 0 ? void 0 : _a.filter(ext => ext.url === TRANSLATION_URL);
    translationExtensions === null || translationExtensions === void 0 ? void 0 : translationExtensions.map(te => {
        var _a, _b, _c, _d;
        const lang = (_b = (_a = te.extension) === null || _a === void 0 ? void 0 : _a.find(ext => ext.url === LANG_URL)) === null || _b === void 0 ? void 0 : _b.valueCode;
        const str = (_d = (_c = te.extension) === null || _c === void 0 ? void 0 : _c.find(ext => ext.url === CONTENT_URL)) === null || _d === void 0 ? void 0 : _d.valueString;
        if (lang && str) {
            i18n[lang] = str;
        }
    });
    return i18n;
}
exports.getAllI18N = getAllI18N;
/**
 * Helper function to detect if a CodeableConcept has a given coding
 * @param codeableConcept   a codeable concept
 * @param coding            the coding to search for
 * @returns                 true if the codeable concept contains the given coding
 *                          false if the codeable concept is undefined or does not
 *                          contain the given coding
 */
function hasCoding(codeableConcept, coding) {
    if (!codeableConcept)
        return false;
    const system = coding.system;
    const code = coding.code;
    if (!codeableConcept.coding)
        return false;
    return codeableConcept.coding.findIndex(c => (system === undefined || c.system === system) && (c.code === code)) > -1;
}
exports.hasCoding = hasCoding;
/**
 * Helper function extract a code from a codeable concept
 * @param codeableConcept   a codeable concept
 * @param coding            the system of the wanted code
 * @returns                 the code, if found, else undefined
 */
function getCode(codeableConcept, system) {
    var _a;
    if (!codeableConcept)
        return undefined;
    const coding = (_a = codeableConcept.coding) === null || _a === void 0 ? void 0 : _a.find((coding) => coding.system === system);
    return coding
        ? coding.code
        : undefined;
}
exports.getCode = getCode;
