import { Extension } from "../definition";

const TRANSLATION_URL = 'http://hl7.org/fhir/StructureDefinition/translation';
const LANG_URL = 'lang';
const CONTENT_URL = 'content';

export interface I18NStrings {
    [lang: string]: string
}

/**
 * Creates a internationalization extension object for assigning to text fields, according to
 * specification in http://hl7.org/fhir/R4B/extension-translation.html.
 * @param strings   A key / value pair object with the translation strings.
 * @returns         A javascript object containing the extensions for an extensible property of a FHIR resource.
 * @see http://hl7.org/fhir/R4B/extension-translation.html
 */
export function writeI18N(strings: I18NStrings): {extension: Extension[]} {
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
export function readI18N(element: {extension: Extension[]}, lang: string): string | undefined {
    const translationExtension = element.extension.find((extension) => extension.url && extension.url === TRANSLATION_URL);
    if (!translationExtension || !translationExtension.extension) return undefined;
    const languageExtension = translationExtension.extension.find((extension) => {
        const languageIndex = extension.extension?.findIndex((subExtension) => subExtension.url && subExtension.url === LANG_URL);
        return languageIndex && languageIndex > -1;
    })
    if (!languageExtension || !languageExtension.extension) return undefined;
    return languageExtension.extension.find(extension => extension.url && extension.url === CONTENT_URL)?.valueString;
}

// TODO: test & document
export function createI18NStrings(key: string, languages: string[], translator: (key: string, language: string) => string): I18NStrings {
    const returnObject: I18NStrings = {};
    languages.map(language => {
        returnObject[language] = translator(key, language);
    });
    return returnObject;
}