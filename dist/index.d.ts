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
export declare function getResources(version?: SupportedFhirVersions): Promise<typeof import("./definition/version4.0.0")> | "NOT_IMPLEMENTED_YET";
export declare enum SupportedFhirVersions {
    latest = "V4_0_0",
    V4_0_0 = "V4_0_0",
    V3_0_1 = "V3_0_1"
}
