import { Element, ContactDetail, Period, Extension, Identifier, CodeableConcept, Meta, Annotation, RelatedArtifact, Narrative, UsageContext, DataRequirement, Expression, Reference, TriggerDefinition, Duration, Timing } from "./fhir._";
export interface EvidenceVariable {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: Element;
    /**
     * Extensions for copyright
     */
    _copyright?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for publisher
     */
    _publisher?: Element;
    /**
     * Extensions for shortTitle
     */
    _shortTitle?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for subtitle
     */
    _subtitle?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the
     * content.
     */
    author?: ContactDetail[];
    /**
     * A characteristic that defines the members of the evidence element. Multiple
     * characteristics are applied with "and" semantics.
     */
    characteristic?: EvidenceVariableCharacteristic[];
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: EvidenceVariable[];
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
    editor?: ContactDetail[];
    /**
     * The period during which the evidence variable content was or is planned to be in active
     * use.
     */
    effectivePeriod?: Period;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: ContactDetail[];
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
     * A formal identifier that is used to identify this evidence variable when it is
     * represented in other formats, or referenced in a specification, model, design or an
     * instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the evidence variable is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
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
     * A natural language name identifying the evidence variable. This name should be usable as
     * an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: Annotation[];
    /**
     * The name of the organization or individual that published the evidence variable.
     */
    publisher?: string;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: RelatedArtifact[];
    /**
     * This is a EvidenceVariable resource
     */
    resourceType?: any;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: ContactDetail[];
    /**
     * The short title provides an alternate title for use in informal descriptive contexts
     * where the full, formal title is not necessary.
     */
    shortTitle?: string;
    /**
     * The status of this evidence variable. Enables tracking the life-cycle of the content.
     */
    status?: EvidenceVariableStatus;
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
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the evidence variable.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the EvidenceVariable. Topics provide a
     * high-level categorization grouping types of EvidenceVariables that can be useful for
     * filtering and searching.
     */
    topic?: CodeableConcept[];
    /**
     * The type of evidence element, a population, an exposure, or an outcome.
     */
    type?: EvidenceVariableType;
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
    useContext?: UsageContext[];
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
/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence,
 * assertion, recommendation) is about.
 */
export interface EvidenceVariableCharacteristic {
    /**
     * Extensions for definitionCanonical
     */
    _definitionCanonical?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for exclude
     */
    _exclude?: Element;
    /**
     * Extensions for groupMeasure
     */
    _groupMeasure?: Element;
    /**
     * Extensions for participantEffectiveDateTime
     */
    _participantEffectiveDateTime?: Element;
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
    definitionCodeableConcept?: CodeableConcept;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: DataRequirement;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: Expression;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionReference?: Reference;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or
     * observation), Expressions ( using an expression language such as FHIRPath or CQL) or
     * DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionTriggerDefinition?: TriggerDefinition;
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
    extension?: Extension[];
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
    modifierExtension?: Extension[];
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: Duration;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: Period;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: Timing;
    /**
     * Indicates duration from the participant's study entry.
     */
    timeFromStart?: Duration;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders,
     * Settings.
     */
    usageContext?: UsageContext[];
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
export declare enum EvidenceVariableStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
/**
 * The type of evidence element, a population, an exposure, or an outcome.
 */
export declare enum EvidenceVariableType {
    Continuous = "continuous",
    Descriptive = "descriptive",
    Dichotomous = "dichotomous"
}
