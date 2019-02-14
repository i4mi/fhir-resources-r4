import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Annotation, Period, Narrative, Range } from "./fhir._";
export interface RiskAssessment {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mitigation
     */
    _mitigation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates the source data considered as part of the assessment (for example,
     * FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The type of the risk assessment performed.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition
     * being assessed.
     */
    condition?: any[] | boolean | Reference | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | RiskAssessment | number | null | string>;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
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
     * Business identifier assigned to the risk assessment.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
    meta?: any[] | boolean | Meta | number | number | null | string;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string;
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
     * Additional comments about the risk assessment.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Describes the expected outcome for the subject.
     */
    prediction?: Array<any[] | boolean | RiskAssessmentPrediction | number | number | null | string>;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a RiskAssessment resource
     */
    resourceType: any;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status?: string;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface RiskAssessmentPrediction {
    /**
     * Extensions for probabilityDecimal
     */
    _probabilityDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for rationale
     */
    _rationale?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for relativeRisk
     */
    _relativeRisk?: any[] | boolean | Element | number | number | null | string;
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
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular
     * condition).
     */
    outcome?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates how likely the outcome is (in the specified timeframe).
     */
    probabilityDecimal?: number;
    /**
     * Indicates how likely the outcome is (in the specified timeframe).
     */
    probabilityRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a
     * qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics)
     * divided by the risk of the population in general.  (Numbers greater than 1 = higher risk
     * than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number;
    /**
     * Indicates the period of time or age range of the subject to which the specified
     * probability applies.
     */
    whenPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Indicates the period of time or age range of the subject to which the specified
     * probability applies.
     */
    whenRange?: any[] | boolean | Range | number | number | null | string;
}
