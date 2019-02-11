import { Element,
         ContactDetail, 
         Attachment,
         DataRequirement,
         Period,
         Extension,
         Identifier,
         CodeableConcept,
         Meta,
         ParameterDefinition,
         RelatedArtifact,
         Reference,
         Narrative,
         UsageContext} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirLibrary } from "./file";
//
//   const fhirLibrary = Convert.toFhirLibrary(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Library {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for experimental
     */
    _experimental?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publisher
     */
    _publisher?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for purpose
     */
    _purpose?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for subtitle
     */
    _subtitle?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for usage
     */
    _usage?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the
     * content.
     */
    author?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Library | number | null | string>;
    /**
     * The content of the library as an Attachment. The content may be a reference to a url, or
     * may be directly embedded as a base-64 string. Either way, the contentType of the
     * attachment determines how to interpret the content.
     */
    content?: Array<any[] | boolean | Attachment | number | number | null | string>;
    /**
     * A copyright statement relating to the library and/or its contents. Copyright statements
     * are generally legal restrictions on the use and publishing of the library.
     */
    copyright?: string;
    /**
     * Describes a set of data that must be provided in order to be able to successfully perform
     * the computations defined by the library.
     */
    dataRequirement?: Array<any[] | boolean | DataRequirement | number | number | null | string>;
    /**
     * The date  (and optionally time) when the library was published. The date must change when
     * the business version changes and it must change if the status code changes. In addition,
     * it should change when the substantive content of the library changes.
     */
    date?: string;
    /**
     * A free text natural language description of the library from a consumer's perspective.
     */
    description?: string;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The period during which the library content was or is planned to be in active use.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * A Boolean value to indicate that this library is authored for testing purposes (or
     * education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;
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
     * A formal identifier that is used to identify this library when it is represented in other
     * formats, or referenced in a specification, model, design or an instance. e.g. CMS or NQF
     * identifiers for a measure artifact. Note that at least one identifier is required for
     * non-experimental active artifacts.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the library is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The date on which the resource content was last reviewed. Review happens periodically
     * after approval but does not change the original approval date.
     */
    lastReviewDate?: string;
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
     * A natural language name identifying the library. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The parameter element defines parameters used by the library.
     */
    parameter?: Array<any[] | boolean | ParameterDefinition | number | number | null | string>;
    /**
     * The name of the organization or individual that published the library.
     */
    publisher?: string;
    /**
     * Explanation of why this library is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * This is a Library resource
     */
    resourceType: any;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The status of this library. Enables tracking the life-cycle of the content.
     */
    status?: FhirLibraryStatus;
    /**
     * A code or group definition that describes the intended subject of the contents of the
     * library.
     */
    subjectCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code or group definition that describes the intended subject of the contents of the
     * library.
     */
    subjectReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * An explanatory or alternate title for the library giving additional information about its
     * content.
     */
    subtitle?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the library.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the library. Topics provide a high-level
     * categorization of the library that can be useful for filtering and searching.
     */
    topic?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Identifies the type of library such as a Logic Library, Model Definition, Asset
     * Collection, or Module Definition.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * An absolute URI that is used to identify this library when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this library is (or will be) published. This URL can be the
     * target of a canonical reference. It SHALL remain the same when the library is stored on
     * different servers.
     */
    url?: string;
    /**
     * A detailed description of how the library is used from a clinical perspective.
     */
    usage?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate library instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the library when it is referenced
     * in a specification, model, design or instance. This is an arbitrary value managed by the
     * library author and is not expected to be globally unique. For example, it might be a
     * timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no
     * expectation that versions can be placed in a lexicographical sequence. To provide a
     * version consistent with the Decision Support Service specification, use the format
     * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets,
     * refer to the Decision Support Service specification. Note that a version is required for
     * non-experimental active artifacts.
     */
    version?: string;
}

/**
 * The status of this library. Enables tracking the life-cycle of the content.
 */
export enum FhirLibraryStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}