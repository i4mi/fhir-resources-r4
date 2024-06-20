import { Extension, Element, Coding, CodeableConcept, code, HumanName, HumanNameNameUse, Period, Patient, Identifier } from "../definition";
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
/**

* Checks if the given value is a valid UUID / GUID.
* @param id     the value that will be tested.
* @returns      true if the given ID is an UUID or GUID
*               false if in every other case
*/
export declare function isUUID(id: any): boolean;
/**
* Generates the full name according the given HumanName
* @param name            the HumanName that will be used to generate the full name
* @param excludeTitles
* @returns               the name concatenated to a string
*/
export declare function getFullName(name: HumanName | undefined, excludeTitles?: boolean): string;
/**
* Chooses which supplied HumanName is the best suited. When no priorisation provided,
* the priority is:
* USUAL > OFFICIAL > TEMP (if period does match) > NICKNAME >
* ANONYMOUS > TEMP (if period does not match) > MAIDEN > OLD.
* @param names      an array of HumanName
* @param preferred? an array of HumanNameNameUse, describing your priorisation (priorisation[0] is highest)
* @returns          the best suited name
*/
export declare function selectName(names: HumanName[], priorisation?: HumanNameNameUse[], alsoReturnOldNames?: boolean): HumanName | undefined;
/**
 * Evaluates if a given time is in a given period.
 * @param period    the Period (can have a start and / or an end) to check against
 * @param time?     the time point to check against (can be Date, number or string, if it's a string
 *                  it must be parseable by new Date()).
 *                  if no time point is provided, the current time is taken as time point
 * @returns         - true if the given time or the current time is after the start and / or before
 *                    the end of the period
 *                  - false if the given time or the current time is outside the period or an invalid
 *                    time point was given
 */
export declare function isInPeriod(period: Period, time?: string | number | Date): boolean;
/**
 * Gets the identifier string for a given system (of the identifier) from an array of identifiers
 * For backward compatibility, also a Patient resource can be passed as source
 * @param source  an array of Identifier (or a Patient resource)
 * @param system  the system the wanted identifier is in (e.g. as oid)
 * @returns       a string in the form of urn:oid:1.1.1.99.1|1e3796be
 * @throws        an Error if the source has no identifier whose system matches the given system
 */
export declare function getIdentifierString(source: Patient | Identifier[], system: string): string;
