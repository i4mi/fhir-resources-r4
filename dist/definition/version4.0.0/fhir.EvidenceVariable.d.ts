import { Element, ContactDetail, Period, Extension, Identifier, CodeableConcept, Meta, Annotation, RelatedArtifact, Narrative, UsageContext, DataRequirement, Expression, Reference, TriggerDefinition, Duration, Timing } from "./fhir._";
export interface EvidenceVariable {
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
     * Extensions for shortTitle
     */
    _shortTitle?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
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
     * A characteristic that defines the members of the evidence element. Multiple
     * characteristics are applied with "and" semantics.
     */
    characteristic: Array<any[] | boolean | EvidenceVariableCharacteristic | number | number | null | string>;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | EvidenceVariable | number | null | string>;
    /**
     * A copyright statement relating to the evidence variable and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the evidence
     * variable.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the evidence variable was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the evidence variable
     * changes.
     */
    date?: string;
    /**
     * A free text natural language description of the evidence variable from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The period during which the evidence variable content was or is planned to be in active
     * use.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
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
     * A formal identifier that is used to identify this evidence variable when it is
     * represented in other formats, or referenced in a specification, model, design or an
     * instance.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the evidence variable is intended to be used.
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
     * A natural language name identifying the evidence variable. This name should be usable as
     * an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * The name of the organization or individual that published the evidence variable.
     */
    publisher?: string;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * This is a EvidenceVariable resource
     */
    resourceType: any;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts
     * where the full, formal title is not necessary.
     */
    shortTitle?: string;
    /**
     * The status of this evidence variable. Enables tracking the life-cycle of the content.
     */
    status?: FhirEvidenceVariableStatus;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information
     * about its content.
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
     * A short, descriptive, user-friendly title for the evidence variable.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the EvidenceVariable. Topics provide a
     * high-level categorization grouping types of EvidenceVariables that can be useful for
     * filtering and searching.
     */
    topic?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The type of evidence element, a population, an exposure, or an outcome.
     */
    type?: FhirEvidenceVariableType;
    /**
     * An absolute URI that is used to identify this evidence variable when it is referenced in
     * a specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this evidence variable is (or will be) published. This URL can
     * be the target of a canonical reference. It SHALL remain the same when the evidence
     * variable is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate evidence variable instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the evidence variable when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the evidence variable author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     * To provide a version consistent with the Decision Support Service specification, use the
     * format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge
     * assets, refer to the Decision Support Service specification. Note that a version is
     * required for non-experimental active artifacts.
     */
    version?: string;
}
export interface EvidenceVariableCharacteristic {
    /**
     * Extensions for definitionCanonical
     */
    _definitionCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for exclude
     */
    _exclude?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for groupMeasure
     */
    _groupMeasure?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for participantEffectiveDateTime
     */
    _participantEffectiveDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
    /**
     * A short, natural language description of the characteristic that could be used to
     * communicate the criteria to an end-user.
     */
    description?: string;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: GroupMeasure;
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
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * Indicates duration from the participant's study entry.
     */
    timeFromStart?: any[] | boolean | Duration | number | number | null | string;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders,
     * Settings.
     */
    usageContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
}
/**
 * Indicates how elements are aggregated within the study effective period.
 */
export declare enum GroupMeasure {
    Mean = "mean",
    MeanOfMean = "mean-of-mean",
    MeanOfMedian = "mean-of-median",
    Median = "median",
    MedianOfMean = "median-of-mean",
    MedianOfMedian = "median-of-median"
}
/**
 * The status of this evidence variable. Enables tracking the life-cycle of the content.
 */
export declare enum FhirEvidenceVariableStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
/**
 * The type of evidence element, a population, an exposure, or an outcome.
 */
export declare enum FhirEvidenceVariableType {
    Continuous = "continuous",
    Descriptive = "descriptive",
    Dichotomous = "dichotomous"
}
