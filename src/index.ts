//https://hackernoon.com/import-json-into-typescript-8d465beded79
//https://webpack.js.org/guides/typescript/
//https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

/**
 * EXPORTS OF I4MI Resources
 */
export { I4MIBundle, I4MIInterfaceToMapResource } from './resource/version4.0.0/bundle';

/**
 * This function exports you the library for the given fhir version
 * The supported fhir versions are given in the SupportedFhirVersion enum type
 * If no version is given, it will always take the latest
 * @param version Version for fhir resources to export
 */
export function getResources(version?: SupportedFhirVersions) {
    if (typeof version === 'undefined') {
        console.log(`No version given. Exports latest (${SupportedFhirVersions.latest}) supported fhir version.`);
        return import('./definition/version4.0.0');
    }

    switch (version) {
        case SupportedFhirVersions.V4_0_0:
            console.log('dynamic export R4');
            return import('./definition/version4.0.0');
        case SupportedFhirVersions.V3_0_1:
            console.log('dynamic export STU3');
            return 'NOT_IMPLEMENTED_YET';
    }
}

export enum SupportedFhirVersions {
    latest = 'V4_0_0',
    V4_0_0 = 'V4_0_0',
    V3_0_1 = 'V3_0_1'
}