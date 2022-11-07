import { Extension, Element } from "../definition";
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
