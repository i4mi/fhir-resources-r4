import { Extension, Element, Coding, CodeableConcept, code } from "../definition";
export interface I18NStrings {
    [lang: string]: string;
}
export interface ExtensionElement extends Element {
    extension: Extension[];
}
/**
 * Creates a internationalization extension object for assigning to text fields, according to
 * specification in http://hl7.org/fhir/R4B/extension-translation.html.
 * @param strings   A key / value pair object with the translation strings.
 * @returns         A javascript object containing the extensions for an extensible property of a FHIR resource.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export declare function writeI18N(strings: I18NStrings): ExtensionElement;
/**
 * Reads the i18n string from a given extension element. The element needs to have
 * the structure as defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param element   the element formed like defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param lang      the desired language string
 * @returns         the i18n string, or undefined if the given language is not available or the
 *                  element is malformed.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export declare function readI18N(element: Element, lang: string): string | undefined;
/**
 * Reads all available i18n strings from a given extension element. The element needs to have
 * the structure as defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param element   the element formed like defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @returns         a key/value pair object with all available i18n strings as value and their respective
 *                  language as key
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export declare function getAllI18N(element: Element): {
    [lang: string]: string;
};
/**
 * Helper function to detect if a CodeableConcept has a given coding
 * @param codeableConcept   a codeable concept
 * @param coding            the coding to search for
 * @returns                 true if the codeable concept contains the given coding
 *                          false if the codeable concept is undefined or does not
 *                          contain the given coding
 */
export declare function hasCoding(codeableConcept: CodeableConcept | undefined, coding: Coding): boolean;
/**
 * Helper function extract a code from a codeable concept
 * @param codeableConcept   a codeable concept
 * @param coding            the system of the wanted code
 * @returns                 the code, if found, else undefined
 */
export declare function getCode(codeableConcept: CodeableConcept | undefined, system: string): code | undefined;
