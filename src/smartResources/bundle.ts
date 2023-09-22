import { BundleType, Bundle, BundleHTTPVerb, BundleEntry, Resource } from "../definition";
import { v4 as uuidv4 } from 'uuid';

export interface I4MIInterfaceToMapResource {
    [key: string]: any;
}

export class I4MIBundle implements Bundle {
    resourceType = 'Bundle';

    type!: BundleType;
    entry!: Array<BundleEntry>;

    constructor(type: BundleType) {
        this.type = type;
    }

    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param resource A FHIR resource. Note that it has to be a valid resource!
     * @returns the added bundle entry
     */
    addEntry(method: BundleHTTPVerb, resource: Resource): BundleEntry {
        let id = this.generateId();

        // create entry array if still undefined
        if (typeof this.entry === 'undefined') {
            this.entry = [];
        }

        // check if id of resource is already set
        if (typeof resource.id !== 'undefined') {
            id = resource.id;

            // check if there already is an entry with given id
            if (this.idAlreadyExistsInBundle(id)) {
                throw Error(`An entry with the id ${resource.id} already exists in bundle`);
            }
        } else {
            // Set relative id to entry
            resource.id = id;
        }


        // adding bundle entry of resource with method and resource type
        let bundleEntry: BundleEntry = {
            request: {
                method: method,
                url: resource.resourceType
            },
            resource: resource
        };
        this.entry.push(bundleEntry);

        return bundleEntry;
    }

    /**
     * Removes an entry with the id x from the bundle
     * @param id Id of entry to remove
     * @returns the removed bundle entry or, if id not found, undefined
     */
    removeEntry(id: string): BundleEntry | undefined {
        let removedItem: BundleEntry | undefined = undefined;
        this.entry.forEach((e, index) => {
            let resource = <I4MIInterfaceToMapResource>e.resource;
            if (resource['id'] === id) {
                removedItem = e;
                this.entry.splice(index, 1);
            }
        });
        if (typeof removedItem === 'undefined')
            console.warn(`No Entry to remove with id ${id} found`);

        return removedItem;
    }

    /**
     * Generates a id for
     * @returns guid as string
     */
    private generateId(): string {
        return uuidv4();
    }

    /**
     * Checks if the given id already exists in the bundle
     * @param id id to check if exists in bundle
     * @returns true, if id already exists
     * @returns false, if id not exists
     */
    private idAlreadyExistsInBundle(id: string) {
        for (let e of this.entry) {
            let resource = <I4MIInterfaceToMapResource>e.resource;
            if (resource['id'] === id)
                return true;
        }
        return false;
    }

}