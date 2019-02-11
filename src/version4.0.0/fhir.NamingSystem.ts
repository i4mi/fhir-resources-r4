import { Element,
         ContactDetail, 
         Extension,
         CodeableConcept,
         Meta,
         Narrative,
         UsageContext,
         Period} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirNamingSystem } from "./file";
//
//   const fhirNamingSystem = Convert.toFhirNamingSystem(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface NamingSystem {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for kind
     */
    _kind?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publisher
     */
    _publisher?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for responsible
     */
    _responsible?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for usage
     */
    _usage?: any[] | boolean | Element | number | number | null | string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | NamingSystem | number | null | string>;
    /**
     * The date  (and optionally time) when the naming system was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the naming system changes.
     */
    date?: string;
    /**
     * A free text natural language description of the naming system from a consumer's
     * perspective. Details about what the namespace identifies including scope, granularity,
     * version labeling, etc.
     */
    description?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the naming system is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind?: Kind;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: any[] | boolean | Meta | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource and that modifies the understanding of the element that contains it
     * and/or the understanding of the containing element's descendants. Usually modifier
     * elements provide negation or qualification. To make the use of extensions safe and
     * manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer is allowed to define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A natural language name identifying the naming system. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the naming system.
     */
    publisher?: string;
    /**
     * This is a NamingSystem resource
     */
    resourceType: any;
    /**
     * The name of the organization that is responsible for issuing identifiers or codes for
     * this namespace and ensuring their non-collision.
     */
    responsible?: string;
    /**
     * The status of this naming system. Enables tracking the life-cycle of the content.
     */
    status?: FhirNamingSystemStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Categorizes a naming system for easier search by grouping related naming systems.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates how the system may be identified when referenced in electronic exchange.
     */
    uniqueId: Array<any[] | boolean | NamingSystemUniqueID | number | number | null | string>;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting
     * characters, use of upper vs. lower case, etc.
     */
    usage?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate naming system instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
}

/**
 * Indicates the purpose for the naming system - what kinds of things does it make unique?
 */
export enum Kind {
    Codesystem = "codesystem",
    Identifier = "identifier",
    Root = "root",
}

/**
 * The status of this naming system. Enables tracking the life-cycle of the content.
 */
export enum FhirNamingSystemStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}

export interface NamingSystemUniqueID {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for preferred
     */
    _preferred?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
    /**
     * Notes about the past or intended usage of this identifier.
     */
    comment?: string;
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
     * Identifies the period of time over which this identifier is considered appropriate to
     * refer to the naming system.  Outside of this window, the identifier might be
     * non-deterministic.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: boolean;
    /**
     * Identifies the unique identifier scheme used for this particular identifier.
     */
    type?: NamingSystemUniqueIDType;
    /**
     * The string that should be sent over the wire to identify the code system or identifier
     * system.
     */
    value?: string;
}

/**
 * Identifies the unique identifier scheme used for this particular identifier.
 */
export enum NamingSystemUniqueIDType {
    OID = "oid",
    Other = "other",
    URI = "uri",
    UUID = "uuid",
}