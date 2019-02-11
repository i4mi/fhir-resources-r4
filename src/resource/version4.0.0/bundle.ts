import { FhirBundleType, Bundle, Method, BundleEntry } from "../../definition/version4.0.0/fhir.Bundle";

export class I4MIBundle {
    _bundle!: Bundle;

    constructor(type: FhirBundleType) {
        this._bundle.resourceType = 'Bundle';
        this._bundle.type = type;
    }

    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param url Request url of bundle entry
     * @param entry A fhir resource. Note that is has to be a valid resource!
     */
    addEntry(method: Method, url: string, entry: any) {

        let length: number = 0;

        if (typeof this._bundle.entry !== 'undefined') {
            length = Number(this._bundle.entry.length);
        }

        entry.id = String(length += 1);
        
        if (typeof this._bundle.entry === 'undefined') {
            this._bundle.entry = [];
        }

        this._bundle.entry.push({
            request: {
                method: method,
                url: url
            },
            resource: entry.toJSON()
        } as BundleEntry);
    }
}