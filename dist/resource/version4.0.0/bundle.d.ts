import { FhirBundleType, Bundle, Method, BundleEntry } from "../../definition/version4.0.0/fhir.Bundle";
export declare class I4MIBundle implements Bundle {
    resourceType: string;
    type: FhirBundleType;
    entry: Array<BundleEntry>;
    constructor(type: FhirBundleType);
    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param url Request url of bundle entry
     * @param entry A fhir resource. Note that is has to be a valid resource!
     */
    addEntry(method: Method, url: string, entry: any): void;
}
