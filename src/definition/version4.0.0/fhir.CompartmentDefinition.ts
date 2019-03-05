import {
    Element,
    ContactDetail,
    Extension,
    Meta,
    Narrative,
    UsageContext
} from "./fhir._";

export interface CompartmentDefinition {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for experimental
     */
    _experimental?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for publisher
     */
    _publisher?: Element;
    /**
     * Extensions for purpose
     */
    _purpose?: Element;
    /**
     * Extensions for search
     */
    _search?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * Which compartment this definition describes.
     */
    code?: CompartmentDefinitionCode;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: CompartmentDefinition[];
    /**
     * The date  (and optionally time) when the compartment definition was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the compartment
     * definition changes.
     */
    date?: string;
    /**
     * A free text natural language description of the compartment definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A Boolean value to indicate that this compartment definition is authored for testing
     * purposes (or education/evaluation/marketing) and is not intended to be used for genuine
     * usage.
     */
    experimental?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
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
    modifierExtension?: Extension[];
    /**
     * A natural language name identifying the compartment definition. This name should be
     * usable as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the compartment definition.
     */
    publisher?: string;
    /**
     * Explanation of why this compartment definition is needed and why it has been designed as
     * it has.
     */
    purpose?: string;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: CompartmentDefinitionResource[];
    /**
     * This is a CompartmentDefinition resource
     */
    resourceType?: any;
    /**
     * Whether the search syntax is supported,.
     */
    search?: boolean;
    /**
     * The status of this compartment definition. Enables tracking the life-cycle of the content.
     */
    status?: CompartmentDefinitionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * An absolute URI that is used to identify this compartment definition when it is
     * referenced in a specification, model, design or an instance; also called its canonical
     * identifier. This SHOULD be globally unique and SHOULD be a literal address at which at
     * which an authoritative instance of this compartment definition is (or will be) published.
     * This URL can be the target of a canonical reference. It SHALL remain the same when the
     * compartment definition is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate compartment definition instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the compartment definition when
     * it is referenced in a specification, model, design or instance. This is an arbitrary
     * value managed by the compartment definition author and is not expected to be globally
     * unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not
     * available. There is also no expectation that versions can be placed in a lexicographical
     * sequence.
     */
    version?: string;
}

/**
 * Which compartment this definition describes.
 */
export enum CompartmentDefinitionCode {
    Device = "Device",
    Encounter = "Encounter",
    Patient = "Patient",
    Practitioner = "Practitioner",
    RelatedPerson = "RelatedPerson",
}

/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export interface CompartmentDefinitionResource {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for param
     */
    _param?: Element[];
    /**
     * The name of a resource supported by the server.
     */
    code?: string;
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
    modifierExtension?: Extension[];
    /**
     * The name of a search parameter that represents the link to the compartment. More than one
     * may be listed because a resource may be linked to a compartment in more than one way,.
     */
    param?: string[];
}

/**
 * The status of this compartment definition. Enables tracking the life-cycle of the content.
 */
export enum CompartmentDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}