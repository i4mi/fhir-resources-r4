import { Extension, Element} from "../definition";

const TRANSLATION_URL = 'http://hl7.org/fhir/StructureDefinition/translation';
const LANG_URL = 'lang';
const CONTENT_URL = 'content';

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