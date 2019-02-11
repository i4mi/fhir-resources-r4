import { FhirBundleType, Bundle, Method, BundleEntry } from "../../definition/version4.0.0/fhir.Bundle";

export class I4MIBundle implements Bundle {
    resourceType = 'Bundle';

    type!: FhirBundleType;
    entry!: Array<BundleEntry>;

    constructor(type: FhirBundleType) {
        this.type = type;
    }

    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param url Request url of bundle entry
     * @param entry A fhir resource. Note that is has to be a valid resource!
     */
    addEntry(method: Method, url: string, entry: any) {

        let length: number = 0;

        if (typeof this.entry !== 'undefined') {
            length = Number(this.entry.length);
        }

        entry.id = String(length += 1);
        
        if (typeof this.entry === 'undefined') {
            this.entry = [];
        }

        this.entry.push({
            request: {
                method: method,
                url: url
            },
            resource: entry.toJSON()
        } as BundleEntry);
    }
}