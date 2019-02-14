import { Element, ContactDetail, Period, Reference, Extension, Identifier, CodeableConcept, Meta, Annotation, RelatedArtifact, Narrative, UsageContext } from "./fhir._";
export interface EffectEvidenceSynthesis {
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
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
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
     * A description of the certainty of the effect estimate.
     */
    certainty?: Array<any[] | boolean | EffectEvidenceSynthesisCertainty | number | number | null | string>;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | EffectEvidenceSynthesis | number | null | string>;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents.
     * Copyright statements are generally legal restrictions on the use and publishing of the
     * effect evidence synthesis.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the effect evidence synthesis was published. The
     * date must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the effect
     * evidence synthesis changes.
     */
    date?: string;
    /**
     * A free text natural language description of the effect evidence synthesis from a
     * consumer's perspective.
     */
    description?: string;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: Array<any[] | boolean | EffectEvidenceSynthesisEffectEstimate | number | number | null | string>;
    /**
     * The period during which the effect evidence synthesis content was or is planned to be in
     * active use.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: any[] | boolean | Reference | number | number | null | string;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the
     * research.
     */
    exposureAlternative: any[] | boolean | Reference | number | number | null | string;
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
     * A formal identifier that is used to identify this effect evidence synthesis when it is
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
     * A legal or geographic region in which the effect evidence synthesis is intended to be
     * used.
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
     * A natural language name identifying the effect evidence synthesis. This name should be
     * usable as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: any[] | boolean | Reference | number | number | null | string;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: any[] | boolean | Reference | number | number | null | string;
    /**
     * The name of the organization or individual that published the effect evidence synthesis.
     */
    publisher?: string;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * This is a EffectEvidenceSynthesis resource
     */
    resourceType: any;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: Array<any[] | boolean | EffectEvidenceSynthesisResultsByExposure | number | number | null | string>;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: any[] | boolean | EffectEvidenceSynthesisSampleSize | number | number | null | string;
    /**
     * The status of this effect evidence synthesis. Enables tracking the life-cycle of the
     * content.
     */
    status?: FhirEffectEvidenceSynthesisStatus;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the effect evidence synthesis.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide
     * a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful
     * for filtering and searching.
     */
    topic?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * An absolute URI that is used to identify this effect evidence synthesis when it is
     * referenced in a specification, model, design or an instance; also called its canonical
     * identifier. This SHOULD be globally unique and SHOULD be a literal address at which at
     * which an authoritative instance of this effect evidence synthesis is (or will be)
     * published. This URL can be the target of a canonical reference. It SHALL remain the same
     * when the effect evidence synthesis is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate effect evidence synthesis instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the effect evidence synthesis
     * when it is referenced in a specification, model, design or instance. This is an arbitrary
     * value managed by the effect evidence synthesis author and is not expected to be globally
     * unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not
     * available. There is also no expectation that versions can be placed in a lexicographical
     * sequence.
     */
    version?: string;
}
export interface EffectEvidenceSynthesisCertainty {
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: Array<any[] | boolean | EffectEvidenceSynthesisCertaintySubcomponent | number | number | null | string>;
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
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
}
export interface EffectEvidenceSynthesisCertaintySubcomponent {
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
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface EffectEvidenceSynthesisEffectEstimate {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string;
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
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: Array<any[] | boolean | EffectEvidenceSynthesisPrecisionEstimate | number | number | null | string>;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface EffectEvidenceSynthesisPrecisionEstimate {
    /**
     * Extensions for from
     */
    _from?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for level
     */
    _level?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for to
     */
    _to?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Lower bound of confidence interval.
     */
    from?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number;
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
     * Upper bound of confidence interval.
     */
    to?: number;
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface EffectEvidenceSynthesisResultsByExposure {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for exposureState
     */
    _exposureState?: any[] | boolean | Element | number | number | null | string;
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: ExposureState;
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
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: any[] | boolean | Reference | number | number | null | string;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * Whether these results are for the exposure state or alternative exposure state.
 */
export declare enum ExposureState {
    Exposure = "exposure",
    ExposureAlternative = "exposure-alternative"
}
export interface EffectEvidenceSynthesisSampleSize {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for numberOfParticipants
     */
    _numberOfParticipants?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for numberOfStudies
     */
    _numberOfStudies?: any[] | boolean | Element | number | number | null | string;
    /**
     * Human-readable summary of sample size.
     */
    description?: string;
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
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number;
}
/**
 * The status of this effect evidence synthesis. Enables tracking the life-cycle of the
 * content.
 */
export declare enum FhirEffectEvidenceSynthesisStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
