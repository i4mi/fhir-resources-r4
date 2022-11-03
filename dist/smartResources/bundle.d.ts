import { BundleType, Bundle, BundleHTTPVerb, BundleEntry, Resource } from "../definition";
export interface I4MIInterfaceToMapResource {
    [key: string]: any;
}
export declare class I4MIBundle implements Bundle {
    resourceType: string;
    type: BundleType;
    entry: Array<BundleEntry>;
    constructor(type: BundleType);
    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param resource A FHIR resource. Note that it has to be a valid resource!
     * @returns the added bundle entry
     */
    addEntry(method: BundleHTTPVerb, resource: Resource): BundleEntry;
    /**
     * Removes an entry with the id x from the bundle
     * @param id Id of entry to remove
     * @returns the removed bundle entry or, if id not found, undefined
     */
    removeEntry(id: string): BundleEntry | undefined;
    /**
     * Generates a id for
     * @returns guid as string
     */
    private generateId;
    /**
     * Checks if the given id already exists in the bundle
     * @param id id to check if exists in bundle
     * @returns true, if id already exists
     * @returns false, if id not exists
     */
    private idAlreadyExistsInBundle;
}
