import { Extension, Element, Coding, CodeableConcept, code, HumanName, HumanNameNameUse, Period, Patient } from "../definition";

const TRANSLATION_URL = 'http://hl7.org/fhir/StructureDefinition/translation';
const LANG_URL = 'lang';
const CONTENT_URL = 'content';

const REG_EXP_UUID = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);

export interface I18NStrings {
    [lang: string]: string
}

export interface ExtensionElement extends Element {
    extension: Extension[]
}

/**
 * Creates a internationalization extension object for assigning to text fields, according to
 * specification in http://hl7.org/fhir/R4B/extension-translation.html.
 * @param strings   A key / value pair object with the translation strings.
 * @returns         A javascript object containing the extensions for an extensible property of a FHIR resource.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export function writeI18N(strings: I18NStrings): ExtensionElement {
    const i18nExtensions = new Array<Extension>();
    Object.keys(strings).forEach(language => {
        i18nExtensions.push(
            {
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
            }
        );
    })
    return {
        extension: i18nExtensions
    };
}

/**
 * Reads the i18n string from a given extension element. The element needs to have  
 * the structure as defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param element   the element formed like defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param lang      the desired language string
 * @returns         the i18n string, or undefined if the given language is not available or the
 *                  element is malformed.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export function readI18N(element: Element, lang: string): string | undefined {
    if (!element.extension) return undefined;

    const translationExtension = element.extension.find((extension) => {
        if (extension.url === TRANSLATION_URL) {
            return (
                extension.extension &&
                extension.extension?.findIndex((extension) => {
                    return extension.url === LANG_URL && extension.valueCode === lang;
                }) > -1
            );
        } else {
            return false;
        }
    });
    return translationExtension?.extension?.find((extension) => {
        return extension.url === CONTENT_URL;
    })?.valueString;
}

/**
 * Reads all available i18n strings from a given extension element. The element needs to have  
 * the structure as defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @param element   the element formed like defined in http://hl7.org/fhir/R4B/extension-translation.html
 * @returns         a key/value pair object with all available i18n strings as value and their respective 
 *                  language as key
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export function getAllI18N(element: Element): {[lang:string]: string} {
    const i18n: {[lang:string]: string} = {};
    const translationExtensions = element.extension?.filter(ext => ext.url === TRANSLATION_URL);
    translationExtensions?.map(te => {
        const lang = te.extension?.find(ext => ext.url === LANG_URL)?.valueCode;
        const str = te.extension?.find(ext => ext.url === CONTENT_URL)?.valueString;
        if (lang && str) {
            i18n[lang] = str; 
        }
    });
    return i18n;
}

/**
 * Helper function to detect if a CodeableConcept has a given coding
 * @param codeableConcept   a codeable concept
 * @param coding            the coding to search for
 * @returns                 true if the codeable concept contains the given coding
 *                          false if the codeable concept is undefined or does not
 *                          contain the given coding
 */
export function hasCoding(codeableConcept: CodeableConcept | undefined, coding: Coding): boolean {
    if (!codeableConcept) return false;
    const system = coding.system;
    const code = coding.code;
    if (!codeableConcept.coding) return false;
    return codeableConcept.coding.findIndex(c => (system === undefined || c.system === system) && (c.code === code)) > -1;
}

/**
 * Helper function extract a code from a codeable concept
 * @param codeableConcept   a codeable concept
 * @param coding            the system of the wanted code
 * @returns                 the code, if found, else undefined
 */
export function getCode(codeableConcept: CodeableConcept | undefined, system: string): code | undefined {
    if (!codeableConcept) return undefined;
    const coding = codeableConcept.coding?.find((coding) => coding.system === system);
    return coding
        ? coding.code
        : undefined;
}

/**

* Checks if the given value is a valid UUID / GUID.
* @param id     the value that will be tested.
* @returns      true if the given ID is an UUID or GUID
*               false if in every other case
*/
export function isUUID(id: any): boolean {
    if (typeof id !== 'string') return false;
    return REG_EXP_UUID.test(id);
}

/**
* Generates the full name according the given HumanName
* @param name            the HumanName that will be used to generate the full name
* @param excludeTitles     
* @returns               the name concatenated to a string
*/
export function getFullName(name: HumanName | undefined, excludeTitles = false): string {
    if (!name) return '';

    let text = '';
    if (name.prefix && name.prefix.length > 0 && !excludeTitles) text += name.prefix.reduce((a,b) => a + ' ' + b) + ' ';
    if (name.given) text += name.given.reduce((a,b) => a + ' ' + b) + ' ';
    if (name.family) text += name.family;
    if (name.suffix && name.suffix.length > 0 && !excludeTitles) text += ', ' + name.suffix.reduce((a,b) => a + ' ' + b);
    
    return text.trimEnd();
}

/**
* Chooses which supplied HumanName is the best suited. When no priorisation provided, 
* the priority is:
* USUAL > OFFICIAL > TEMP (if period does match) > NICKNAME >
* ANONYMOUS > TEMP (if period does not match) > MAIDEN > OLD.
* @param names      an array of HumanName
* @param preferred? an array of HumanNameNameUse, describing your priorisation (priorisation[0] is highest)
* @returns          the best suited name
*/
export function selectName(names: HumanName[], priorisation?: HumanNameNameUse[], alsoReturnOldNames?: boolean): HumanName | undefined {
    let name: HumanName | undefined = undefined;
    if (names.length === 0) return undefined;
    priorisation?.forEach(nameType => {
        if (!name)
        name = names.find((x) => x.use === nameType);  
    });
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.USUAL);
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.OFFICIAL);
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.TEMP && x.period && isInPeriod(x.period));
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.NICKNAME);
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.ANONYMOUS);
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.TEMP);
    if (name) return name;
    name = names.find((x) => x.use === HumanNameNameUse.MAIDEN);
    if (name) return name;
    name = names.find((x) => x.use !== HumanNameNameUse.OLD || alsoReturnOldNames);
    return name;
}

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
export function isInPeriod(period: Period, time: string | number | Date = new Date()): boolean {
    let now;

    switch (typeof time) {
        case 'string': 
        case 'number': 
            now = new Date(time);
            break;
        default: 
            now = time;
    }

    let hasStarted = period.start
        ? new Date(period.start).getTime() <= now.getTime()
        : true;
    
    let hasEnded = false;
    
    if (period.end) {
        const parts = period.end.split('-');
        if (period.end.length === 4) { // it's a year (inclusive for whole year!)
            const endYear = Number(period.end);
            hasEnded = endYear < now.getFullYear();
        } else if (parts.length === 2 && period.end.length < 8) { // it's a year with a month (inclusive for whole month!)
            const endYear = Number(parts[0]);
            const endMonth = Number(parts[1]);
            hasEnded = endYear < now.getFullYear() || endYear === now.getFullYear() && endMonth < now.getMonth() - 1
        } else if (parts.length === 3 && period.end.length < 11) { // it's a year with month and day (inclusive for whole day!)
            const endYear = Number(parts[0]);
            const endMonth = Number(parts[1]);
            const endDay = Number(parts[2]);
            hasEnded = (
                endYear < now.getFullYear() || 
                (endYear === now.getFullYear() && endMonth < (now.getMonth() + 1)) ||
                (endYear === now.getFullYear() && endMonth === (now.getMonth() + 1) && endDay < now.getDate())
            );
        } else {
            hasEnded = new Date(period.end).getTime() < now.getTime()
        }
    }
    return (hasStarted && !hasEnded);
}

  /**
   * Gets the identifier string for a given system (of the identifier) from a Patient resource
   * @param patient a Patient resource
   * @param system     the system the wanted identifier is in (e.g. as oid)
   * @returns       a string in the form of urn:oid:1.1.1.99.1|1e3796be
   * @throws        an Error if the Patient resource has no identifier whose system matches the system.
   */
  export function getIdentifierString(patient: Patient, system: string): string {
    const identifier = patient.identifier?.find((id) => id.system?.includes(system));
    if (!identifier || !identifier.value) {
      throw new Error('Patient has no identifier that matches the oid ' + system);
    }
    return system + '|' + identifier.value;
  }
