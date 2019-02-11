import { Element,
         Reference, 
         CodeableConcept,
         Period,
         Timing,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative,
         Quantity,
         Ratio,
         SampledData} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirObservation } from "./file";
//
//   const fhirObservation = Convert.toFhirObservation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Observation {
    /**
     * Extensions for effectiveDateTime
     */
    _effectiveDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for effectiveInstant
     */
    _effectiveInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for issued
     */
    _issued?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.  For
     * example, a MedicationRequest may require a patient to have laboratory test performed
     * before  it is dispensed.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates the site on the subject's body where the observation was made (i.e. the target
     * site).
     */
    bodySite?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code that classifies the general type of observation being made.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Describes what was observed. Sometimes this is called the observation "name".
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Some observations have multiple component observations.  These component observations are
     * expressed as separate code value pairs that share the same attributes.  Examples include
     * systolic and diastolic component observations for blood pressure measurement and multiple
     * component observations for genetics observations.
     */
    component?: Array<any[] | boolean | ObservationComponent | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Observation | number | null | string>;
    /**
     * Provides a reason why the expected value in the element Observation.value[x] is missing.
     */
    dataAbsentReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The target resource that represents a measurement from which this observation value is
     * derived. For example, a calculated anion gap or a fetal measurement based on an
     * ultrasound image.
     */
    derivedFrom?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The device used to generate the observation data.
     */
    device?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The time or time-period the observed value is asserted as being true. For biological
     * subjects - e.g. human patients - this is usually called the "physiologically relevant
     * time". This is usually either the time of the procedure or of specimen collection, but
     * very often the source of the date/time is not known, only the date/time itself.
     */
    effectiveDateTime?: string;
    /**
     * The time or time-period the observed value is asserted as being true. For biological
     * subjects - e.g. human patients - this is usually called the "physiologically relevant
     * time". This is usually either the time of the procedure or of specimen collection, but
     * very often the source of the date/time is not known, only the date/time itself.
     */
    effectiveInstant?: string;
    /**
     * The time or time-period the observed value is asserted as being true. For biological
     * subjects - e.g. human patients - this is usually called the "physiologically relevant
     * time". This is usually either the time of the procedure or of specimen collection, but
     * very often the source of the date/time is not known, only the date/time itself.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The time or time-period the observed value is asserted as being true. For biological
     * subjects - e.g. human patients - this is usually called the "physiologically relevant
     * time". This is usually either the time of the procedure or of specimen collection, but
     * very often the source of the date/time is not known, only the date/time itself.
     */
    effectiveTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which
     * this observation is made.
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
     * The actual focus of an observation when it is not the patient of record representing
     * something or someone associated with the patient such as a spouse, parent, fetus, or
     * donor. For example, fetus observations in a mother's record.  The focus of an observation
     * could also be an existing condition,  an intervention, the subject's diet,  another
     * observation of the subject,  or a body structure such as tumor or implanted device.   An
     * example use case would be using the Observation resource to capture whether the mother is
     * trained to change her child's tracheostomy tube. In this example, the child is the
     * patient of record and the mother is the focus.
     */
    focus?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This observation is a group observation (e.g. a battery, a panel of tests, a set of vital
     * sign measurements) that includes the target as a member of the group.
     */
    hasMember?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this observation.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A categorical assessment of an observation value.  For example, high, low, normal.
     */
    interpretation?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The date and time this version of the observation was made available to providers,
     * typically after the results have been reviewed and verified.
     */
    issued?: string;
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
     * Indicates the mechanism used to perform the observation.
     */
    method?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Comments about the observation or the results.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A larger event of which this particular Observation is a component or step.  For
     * example,  an observation as part of a procedure.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Guidance on how to interpret the value by comparison to a normal or recommended range.
     * Multiple reference ranges are interpreted as an "OR".   In other words, to represent two
     * distinct target populations, two `referenceRange` elements would be used.
     */
    referenceRange?: Array<any[] | boolean | ObservationReferenceRange | number | number | null | string>;
    /**
     * This is a Observation resource
     */
    resourceType: any;
    /**
     * The specimen that was used when this observation was made.
     */
    specimen?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The status of the result value.
     */
    status?: FhirObservationStatus;
    /**
     * The patient, or group of patients, location, or device this observation is about and into
     * whose record the observation is placed. If the actual focus of the observation is
     * different from the subject (or a sample of, part, or region of the subject), the `focus`
     * element or the `code` itself specifies the actual focus of the observation.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueBoolean?: boolean;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueDateTime?: string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueInteger?: number;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueString?: string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueTime?: string;
}

export interface ObservationComponent {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Describes what was observed. Sometimes this is called the observation "code".
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Provides a reason why the expected value in the element Observation.component.value[x] is
     * missing.
     */
    dataAbsentReason?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * A categorical assessment of an observation value.  For example, high, low, normal.
     */
    interpretation?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Guidance on how to interpret the value by comparison to a normal or recommended range.
     */
    referenceRange?: Array<any[] | boolean | ObservationReferenceRange | number | number | null | string>;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueBoolean?: boolean;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueDateTime?: string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueInteger?: number;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueString?: string;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueTime?: string;
}

export interface ObservationReferenceRange {
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number
     * of weeks at term) if the meaning says so.
     */
    age?: any[] | boolean | Range | number | number | null | string;
    /**
     * Codes to indicate the target population this reference range applies to.  For example, a
     * reference range may be based on the normal population or a particular sex or race.
     * Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For
     * example, to represent a target population of African American females, both a code of
     * female and a code for African American would be used.
     */
    appliesTo?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference
     * range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the
     * high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
     */
    high?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range
     * endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound
     * is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
     */
    low?: any[] | boolean | Quantity | number | number | null | string;
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
     * Text based reference range in an observation which may be used when a quantitative range
     * is not appropriate for an observation.  An example would be a reference value of
     * "Negative" or a list or table of "normals".
     */
    text?: string;
    /**
     * Codes to indicate the what part of the targeted reference population it applies to. For
     * example, the normal or therapeutic range.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

/**
 * The status of the result value.
 */
export enum FhirObservationStatus {
    Amended = "amended",
    Cancelled = "cancelled",
    Corrected = "corrected",
    EnteredInError = "entered-in-error",
    Final = "final",
    Preliminary = "preliminary",
    Registered = "registered",
    Unknown = "unknown",
}