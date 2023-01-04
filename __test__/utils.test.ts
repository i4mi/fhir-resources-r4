import { getAllI18N, getCode, getFullName, hasCoding, isUUID, isInPeriod, readI18N, selectName, writeI18N, getIdentifierString } from "../src";
import { CodeableConcept, Element, HumanName, HumanNameNameUse, Period } from "../src/definition";



test('I18N', () => {
    const TRANSLATION_URL = 'http://hl7.org/fhir/StructureDefinition/translation';
    const translations = {
        de: 'FHIR ist super!',
        fr: 'FHIR est manifique!'
    };
    const fhirTranslations: Element = {
        extension: [
            {
                url: TRANSLATION_URL,
                extension: [
                    {
                        url: 'lang',
                        valueCode: 'de'
                    },
                    {
                        url: 'content',
                        valueString: 'FHIR ist super!'
                    }
                ]
                },
                {
                url: TRANSLATION_URL,
                extension: [
                    {
                        url: 'lang',
                        valueCode: 'fr'
                    },
                    {
                        url: 'content',
                        valueString: 'FHIR est manifique!'
                    }
                ]
            }
        ]
    };
    const otherFhirElement: Element = {
        extension: [
            {
                url: 'http://example.any/url',
                valueInteger: 1
            },
            {
                url: 'lang',
                valueBoolean: false
            },
        ]
    }

    expect(writeI18N(translations).extension.length).toBe(2);
    expect(writeI18N({}).extension.length).toBe(0);
    expect(writeI18N(translations)).toEqual(fhirTranslations);
    expect(readI18N(fhirTranslations, 'de')).toEqual(translations.de);
    expect(readI18N(fhirTranslations, 'fr')).toEqual(translations.fr);
    expect(readI18N(fhirTranslations, 'en')).toBeUndefined();
    expect(readI18N(fhirTranslations, '')).toBeUndefined();
    expect(readI18N({}, 'de')).toBeUndefined();
    expect(readI18N(otherFhirElement, 'de')).toBeUndefined();
    expect(getAllI18N(fhirTranslations)).toEqual(translations);
    expect(getAllI18N({})).toEqual({});
    expect(getAllI18N(otherFhirElement)).toEqual({});
});

test('Coding', () => {
    const SCT_CODE = '42106004'; 
    const ANOTHER_SCT_CODE = '273881007';
    const LOINC_CODE = '38520-3';
    const SCT_SYSTEM = 'http://snomed.info/sct';
    const LOINC_SYSTEM = 'http://loinc.org';

    const correctCoding = {
        system: SCT_SYSTEM,
        code: SCT_CODE,
        display: 'Hess test'
    };
    const simpleCodeableConceptCorrect: CodeableConcept = {
        coding: [
            correctCoding
        ],
        text: 'Hess test'
    };
    const multipleCodeableConceptCorrect = {
        coding: [
            {
                system: SCT_SYSTEM,
                code: ANOTHER_SCT_CODE,
            },
            correctCoding,
            {
                system: LOINC_SYSTEM,
                code: LOINC_CODE
            }
        ]
    };
    const simpleCodeableConceptFalse: CodeableConcept = {
        coding: [
            {
                system: SCT_SYSTEM,
                code: ANOTHER_SCT_CODE,
            }
        ]
    };
    const multipleCodeableConceptFalse = {
        coding: [
            {
                system: SCT_SYSTEM,
                code: ANOTHER_SCT_CODE,
            },
            {
                system: LOINC_SYSTEM,
                code: SCT_CODE,
            },
            {
                system: LOINC_SYSTEM,
                code: LOINC_CODE
            }
        ]
    };

    expect(hasCoding(simpleCodeableConceptCorrect, correctCoding)).toBe(true);
    expect(hasCoding(simpleCodeableConceptCorrect, {code: SCT_CODE})).toBe(true);
    expect(hasCoding(simpleCodeableConceptCorrect, {system: SCT_SYSTEM})).toBe(false);
    expect(hasCoding(simpleCodeableConceptCorrect, {system: LOINC_SYSTEM, code: SCT_CODE})).toBe(false);
    expect(hasCoding(simpleCodeableConceptCorrect, {system: SCT_SYSTEM, code: ANOTHER_SCT_CODE})).toBe(false);
    
    expect(hasCoding(multipleCodeableConceptCorrect, correctCoding)).toBe(true);
    expect(hasCoding(multipleCodeableConceptCorrect, {code: SCT_CODE})).toBe(true);
    expect(hasCoding(multipleCodeableConceptCorrect, {system: SCT_SYSTEM})).toBe(false);
    expect(hasCoding(multipleCodeableConceptCorrect, {system: LOINC_SYSTEM, code: SCT_CODE})).toBe(false);
    expect(hasCoding(multipleCodeableConceptCorrect, {system: SCT_SYSTEM, code: LOINC_CODE})).toBe(false);

    expect(hasCoding(simpleCodeableConceptFalse, correctCoding)).toBe(false);
    expect(hasCoding(simpleCodeableConceptFalse, {code: SCT_CODE})).toBe(false);
    expect(hasCoding(simpleCodeableConceptFalse, {system: SCT_SYSTEM})).toBe(false);

    expect(hasCoding(multipleCodeableConceptFalse, correctCoding)).toBe(false);
    expect(hasCoding(multipleCodeableConceptFalse, {code: SCT_CODE})).toBe(true);
    expect(hasCoding(multipleCodeableConceptFalse, {system: SCT_SYSTEM})).toBe(false);
    
    expect(hasCoding(undefined, correctCoding)).toBe(false);
    expect(hasCoding(undefined, {system: SCT_SYSTEM, code: ANOTHER_SCT_CODE})).toBe(false);

    expect(getCode(simpleCodeableConceptCorrect, SCT_SYSTEM)).toEqual(SCT_CODE);
    expect(getCode(simpleCodeableConceptCorrect, LOINC_SYSTEM)).toBeUndefined();
    expect(getCode(simpleCodeableConceptCorrect, '')).toBeUndefined();

    expect(getCode(multipleCodeableConceptCorrect, SCT_SYSTEM)).toEqual(ANOTHER_SCT_CODE);

    expect(getCode(undefined, SCT_SYSTEM)).toBeUndefined();
});

test('UUID', () => {
    expect(isUUID('5c5e04ea-21cb-41b1-956a-43ee07200dce')).toBe(true);
    expect(isUUID('5C5E04EA-21CB-41B1-956A-43EE07200DCE')).toBe(true);
    expect(isUUID('d735bdb3-bf62-4465-ba45-0a1a36db01ba')).toBe(true);
    expect(isUUID('5c5e04ea-21ce-41b1-956a-43ee07200xxx')).toBe(false); // x is not a valid character
    expect(isUUID('5c5e04ea-21cb-41b1-956a-43ee07200dc')).toBe(false);  // to short
    expect(isUUID('5c5e04ea-21cb-41b1-956a-43ee07200dcef')).toBe(false);// to long
    expect(isUUID('ich bin keine UUID')).toBe(false);
    expect(isUUID('')).toBe(false);
    expect(isUUID(undefined)).toBe(false);
    expect(isUUID(null)).toBe(false);
    expect(isUUID(() => '5c5e04ea-21cb-41b1-956a-43ee07200dce')).toBe(false);
    expect(isUUID({id: '5c5e04ea-21cb-41b1-956a-43ee07200dce'})).toBe(false);
    expect(isUUID(true)).toBe(false);
    expect(isUUID(1234)).toBe(false);
    expect(isUUID(['5c5e04ea-21cb-41b1-956a-43ee07200dce'])).toBe(false);
});

test('Name', () => {
    const homer: HumanName = {
        text: 'Homer J. Simpson',
        family: 'Simpson',
        given: [
            'Homer',
            'Jay'
        ]
    };

    expect(getFullName(homer)).toEqual('Homer Jay Simpson');
    expect(getFullName(undefined)).toEqual('');
    expect(getFullName({})).toEqual('');

    const officialName = {
        family: 'Simpson',
        given: ['Marjorie', 'Jacqueline'],
        use: HumanNameNameUse.OFFICIAL
    };
    const usualName = {
        family: 'Simpson',
        given: ['Marjorie'],
        use: HumanNameNameUse.USUAL
    };
    const maidenName = {
        family: 'Bouvier',
        given: ['Marjorie', 'Jacqueline'],
        use: HumanNameNameUse.MAIDEN
    };
    const nickname = {
        family: 'Simpson',
        given: ['Marge'],
        use: HumanNameNameUse.NICKNAME
    };
    const tempCurrentName = {
        family: 'Simpson (current)',
        given: ['Marge'],
        use: HumanNameNameUse.TEMP,
        period: {
            start: '1990-01-01',
            end: '9999-12-31' // TODO: don't forget to adjust the test in the year 10000 ;-)
        }
    };
    const tempNotCurrentName = {
        family: 'Simpson (not current)',
        given: ['Marge'],
        use: HumanNameNameUse.TEMP,
        period: {
            start: '1990-01-01',
            end: '1999-12-31'
        }
    };
    const oldName = {
        family: 'Smipson',
        given: ['Marge'],
        use: HumanNameNameUse.OLD,
    };

    expect(selectName([tempNotCurrentName, tempCurrentName, maidenName, nickname, usualName, officialName]))
    .toEqual(usualName);
    expect(selectName([tempNotCurrentName, tempCurrentName, maidenName, nickname]))
    .toEqual(tempCurrentName);
    expect(selectName([tempNotCurrentName, maidenName, nickname]))
    .toEqual(nickname);
    expect(selectName(
        [tempNotCurrentName, tempCurrentName, maidenName, nickname, usualName, officialName],
        [HumanNameNameUse.NICKNAME, HumanNameNameUse.USUAL, HumanNameNameUse.OFFICIAL]
    )).toEqual(nickname);
    expect(selectName(
        [tempNotCurrentName, tempCurrentName, maidenName, usualName, officialName],
        [HumanNameNameUse.NICKNAME, HumanNameNameUse.MAIDEN]
    )).toEqual(maidenName);
    expect(selectName(
        [tempNotCurrentName, tempCurrentName, usualName, officialName],
        [HumanNameNameUse.NICKNAME, HumanNameNameUse.MAIDEN]
    )).toEqual(usualName);
    expect
    expect(selectName([])).toBeUndefined();
    expect(selectName([oldName])).toBeUndefined();
    expect(selectName([oldName], [HumanNameNameUse.OLD])).toEqual(oldName);
    expect(selectName([oldName, maidenName], [HumanNameNameUse.MAIDEN], true)).toEqual(maidenName);
    expect(selectName([oldName], [], true)).toEqual(oldName);
    // test when no name has use
    expect(selectName([homer])).toEqual(homer);
    expect(selectName([homer], [HumanNameNameUse.OFFICIAL, HumanNameNameUse.USUAL])).toEqual(homer);
});

test('Period', () => {
    const noEndTrue: Period = {
        start: '2022',
        end: undefined
    };
    const noEndFalse: Period = {
        start: '2100',
        end: undefined
    };
    const noEndBorder: Period = {
        start: new Date().getFullYear().toString(),
        end: undefined
    }
    const noStartTrue: Period = {
        start: undefined,
        end: '9999' // TODO: don't forget to adjust the test in the year 10000 ;-)
    };
    const noStartBorder: Period = {
        start: undefined,
        end: new Date().getFullYear().toString()
    };
    const noStartFalse: Period = {
        start: undefined,
        end: '1990'
    };
    const invalidPeriod: Period = {
        start: '2024',
        end: '2023'
    };
    const beforeFalse = {
        start: '2022-01-01',
        end: '2022-10-10'
    };
    const afterFalse = {
        start: '2100-01-01',
        end: '2100-10-10'
    };
    const emptyTrue = { // according to fhir spec: start date unknown, but ongoing
        start: undefined,
        end: undefined
    };

    expect(isInPeriod(noEndTrue)).toBe(true);
    expect(isInPeriod(noEndFalse)).toBe(false);
    expect(isInPeriod(noEndBorder)).toBe(true);
    expect(isInPeriod(noStartTrue)).toBe(true);
    expect(isInPeriod(noStartBorder)).toBe(true);
    expect(isInPeriod(noStartFalse)).toBe(false);
    expect(isInPeriod(invalidPeriod)).toBe(false);
    expect(isInPeriod(beforeFalse)).toBe(false);
    expect(isInPeriod(afterFalse)).toBe(false);
    expect(isInPeriod(emptyTrue)).toBe(true);

    expect(isInPeriod(beforeFalse, '2022')).toBe(true);
    expect(isInPeriod(beforeFalse, '2022-02-01')).toBe(true);
    expect(isInPeriod(beforeFalse, '2022-02-01T10:00:00')).toBe(true);
    expect(isInPeriod(beforeFalse, 's0meRu661sh')).toBe(false);
    expect(isInPeriod(beforeFalse, '20. Jänner 2022')).toBe(false);
    expect(isInPeriod(beforeFalse, 1643673600000)).toBe(true);
    expect(isInPeriod(beforeFalse, -1643673600000)).toBe(false);
    expect(isInPeriod(beforeFalse, 0)).toBe(false);
    // mix formats
    expect(isInPeriod({
        start: '2020',
        end: '2022'
    }, '1970-01-01T00:00:01+00:00')).toBe(false);
    expect(isInPeriod({
        start: '2020',
        end: '2022'
    }, 1000)).toBe(false);
    expect(isInPeriod({
        start: '2020',
        end: '2022'
    }, 1620130900)).toBe(true);
});

test('Get Identifier', () => {
    const MPIID_SYSTEM = 'urn:oid:1.1.1.99.1';
    const UUID1 = 'b9902235-bd16-43d4-b40b-1cd1ff96b356';
    const UUID2 = '4921a69e-6fb7-4566-a249-90f8a85b9ec1';

    expect(getIdentifierString({
        resourceType: 'Patient',
        identifier: [
            {
                system: MPIID_SYSTEM,
                value: UUID1
            },
            {
                value: UUID2
            }
        ]
    }, MPIID_SYSTEM)).toBe(MPIID_SYSTEM + '|' + UUID1);

    expect(() => getIdentifierString({
        resourceType: 'Patient',
        identifier: [{
            system: MPIID_SYSTEM,
        }]
    }, MPIID_SYSTEM)).toThrow();

    expect(() => getIdentifierString({
        resourceType: 'Patient',
        identifier: [{
                system: 'http://midata.coop/test',
                value: 'ABC1'
            }]
    }, MPIID_SYSTEM)).toThrow();

    expect(() => getIdentifierString({
        resourceType: 'Patient'
    }, MPIID_SYSTEM)).toThrow();

    expect(() => getIdentifierString({
        resourceType: 'Patient',
        identifier: [{}]
    }, MPIID_SYSTEM)).toThrow();
});