import { Element,
         Extension, 
         Identifier,
         Meta,
         Signature} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirBundle } from "./file";
//
//   const fhirBundle = Convert.toFhirBundle(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface BundleResponse {
    /**
     * Extensions for etag
     */
    _etag?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastModified
     */
    _lastModified?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for location
     */
    _location?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * The Etag for the resource, if the operation for the entry produced a versioned resource
     * (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource
     * Contention](http.html#concurrency)).
     */
    etag?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The date/time that the resource was modified on the server.
     */
    lastModified?: string;
    /**
     * The location header created by processing this operation, populated if the operation
     * returns a location.
     */
    location?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * An OperationOutcome containing hints and warnings produced as part of processing this
     * entry in a batch or transaction.
     */
    outcome?: any[] | boolean | Bundle | number | null | string;
    /**
     * The status code returned by processing this entry. The status SHALL start with a 3 digit
     * HTTP code (e.g. 404) and may contain the standard HTTP description associated with the
     * status code.
     */
    status?: string;
}

export interface BundleEntry {
    /**
     * Extensions for fullUrl
     */
    _fullUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the
     * resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent
     * URL consistent with the Resource.id. The fullUrl is a version independent reference to
     * the resource. The fullUrl element SHALL have a value except that:
     * * fullUrl can be empty on a POST (although it does not need to when specifying a
     * temporary id for reference in the bundle)
     * * Results from operations might involve resources that are not identified.
     */
    fullUrl?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A series of links that provide context to this entry.
     */
    link?: Array<any[] | boolean | BundleLink | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Additional information about how this entry should be processed as part of a transaction
     * or batch.  For history, it shows how the entry was processed to create the version
     * contained in the entry.
     */
    request?: any[] | boolean | BundleRequest | number | number | null | string;
    /**
     * The Resource for the entry. The purpose/meaning of the resource is determined by the
     * Bundle.type.
     */
    resource?: any[] | boolean | Bundle | number | null | string;
    /**
     * Indicates the results of processing the corresponding 'request' entry in the batch or
     * transaction being responded to or what the results of an operation where when returning
     * history.
     */
    response?: any[] | boolean | BundleResponse | number | number | null | string;
    /**
     * Information about the search process that lead to the creation of this entry.
     */
    search?: any[] | boolean | BundleSearch | number | number | null | string;
}

export interface Bundle {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timestamp
     */
    _timestamp?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for total
     */
    _total?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * An entry in a bundle resource - will either contain a resource or information about a
     * resource (transactions and history only).
     */
    entry?: Array<any[] | boolean | BundleEntry | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A persistent identifier for the bundle that won't change as a bundle is copied from
     * server to server.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * A series of links that provide context to this bundle.
     */
    link?: Array<any[] | boolean | BundleLink | number | number | null | string>;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: any[] | boolean | Meta | number | number | null | string;
    /**
     * This is a Bundle resource
     */
    resourceType: any;
    /**
     * Digital Signature - base64 encoded. XML-DSig or a JWT.
     */
    signature?: any[] | boolean | Signature | number | number | null | string;
    /**
     * The date/time that the bundle was assembled - i.e. when the resources were placed in the
     * bundle.
     */
    timestamp?: string;
    /**
     * If a set of search matches, this is the total number of entries of type 'match' across
     * all pages in the search.  It does not include search.mode = 'include' or 'outcome'
     * entries and it does not provide a count of the number of entries in the Bundle.
     */
    total?: number;
    /**
     * Indicates the purpose of this bundle - how it is intended to be used.
     */
    type?: FhirBundleType;
}

export interface BundleLink {
    /**
     * Extensions for relation
     */
    _relation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A name which details the functional use for this link - see
     * [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
     */
    relation?: string;
    /**
     * The reference details for the link.
     */
    url?: string;
}

export interface BundleRequest {
    /**
     * Extensions for ifMatch
     */
    _ifMatch?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for ifModifiedSince
     */
    _ifModifiedSince?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for ifNoneExist
     */
    _ifNoneExist?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for ifNoneMatch
     */
    _ifNoneMatch?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for method
     */
    _method?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Only perform the operation if the Etag value matches. For more information, see the API
     * section ["Managing Resource Contention"](http.html#concurrency).
     */
    ifMatch?: string;
    /**
     * Only perform the operation if the last updated date matches. See the API documentation
     * for ["Conditional Read"](http.html#cread).
     */
    ifModifiedSince?: string;
    /**
     * Instruct the server not to perform the create if a specified resource already exists. For
     * further information, see the API documentation for ["Conditional
     * Create"](http.html#ccreate). This is just the query portion of the URL - what follows the
     * "?" (not including the "?").
     */
    ifNoneExist?: string;
    /**
     * If the ETag values match, return a 304 Not Modified status. See the API documentation for
     * ["Conditional Read"](http.html#cread).
     */
    ifNoneMatch?: string;
    /**
     * In a transaction or batch, this is the HTTP action to be executed for this entry. In a
     * history bundle, this indicates the HTTP action that occurred.
     */
    method?: Method;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The URL for this entry, relative to the root (the address to which the request is posted).
     */
    url?: string;
}

/**
 * In a transaction or batch, this is the HTTP action to be executed for this entry. In a
 * history bundle, this indicates the HTTP action that occurred.
 */
export enum Method {
    Delete = "DELETE",
    Get = "GET",
    Head = "HEAD",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT",
}

export interface BundleSearch {
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for score
     */
    _score?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Why this entry is in the result set - whether it's included as a match or because of an
     * _include requirement, or to convey information or warning information about the search
     * process.
     */
    mode?: Mode;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * When searching, the server's search ranking score for the entry.
     */
    score?: number;
}

/**
 * Why this entry is in the result set - whether it's included as a match or because of an
 * _include requirement, or to convey information or warning information about the search
 * process.
 */
export enum Mode {
    Include = "include",
    Match = "match",
    Outcome = "outcome",
}

/**
 * Indicates the purpose of this bundle - how it is intended to be used.
 */
export enum FhirBundleType {
    Batch = "batch",
    BatchResponse = "batch-response",
    Collection = "collection",
    Document = "document",
    History = "history",
    Message = "message",
    Searchset = "searchset",
    Transaction = "transaction",
    TransactionResponse = "transaction-response",
}