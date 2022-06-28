"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I4MIBundle = void 0;
const guid_typescript_1 = require("guid-typescript");
class I4MIBundle {
    constructor(type) {
        this.resourceType = 'Bundle';
        this.type = type;
    }
    /**
     * Add resource to bundle as BundleEntry
     * @param method Request method of bundle entry
     * @param resourceType Resource type of bundle entry
     * @param resource A fhir resource. Note that is has to be a valid resource!
     * @returns the added bundle entry
     */
    addEntry(method, resourceType, resource) {
        let id;
        // Generate id
        id = this.generateId();
        // create entry array if still undefined
        if (typeof this.entry === 'undefined') {
            this.entry = [];
        }
        // check if id of resource is already set
        if (typeof resource.id !== 'undefined') {
            // now using already given id
            console.log(`Entry id is provided for resource (${resource.id}), using this as id.`);
            id = resource.id;
            // check if there already is an entry with given id
            if (this.idAlreadyExistsInBundle(id)) {
                throw Error(`An entry with the id ${resource.id} already exists in bundle`);
            }
        }
        // Set relative id to entry
        resource.id = id;
        // adding bundle entry of resource with method and resource type
        let bundleEntry = {
            request: {
                method: method,
                url: resourceType
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
    removeEntry(id) {
        let removedItem = undefined;
        this.entry.forEach((e, index) => {
            let resource = e.resource;
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
    generateId() {
        return guid_typescript_1.Guid.create().toString();
    }
    /**
     * Checks if the given id already exists in the bundle
     * @param id id to check if exists in bundle
     * @returns true, if id already exists
     * @returns false, if id not exists
     */
    idAlreadyExistsInBundle(id) {
        for (let e of this.entry) {
            let resource = e.resource;
            if (resource['id'] === id)
                return true;
        }
        return false;
    }
}
exports.I4MIBundle = I4MIBundle;
