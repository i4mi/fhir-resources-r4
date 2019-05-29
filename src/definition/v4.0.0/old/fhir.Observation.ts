import {
    Element,
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
    SampledData,
    Range
} from "./fhir._";

export interface Observation {
    /**
     * Extensions for effectiveDateTime
     */
    _effectiveDateTime?: Element;
    /**
     * Extensions for effectiveInstant
     */
    _effectiveInstant?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for issued
     */
    _issued?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.  For
     * example, a MedicationRequest may require a patient to have laboratory test performed
     * before  it is dispensed.
     */
    basedOn?: Reference[];
    /**
     * Indicates the site on the subject's body where the observation was made (i.e. the target
     * site).
     */
    bodySite?: CodeableConcept;
    /**
     * A code that classifies the general type of observation being made.
     */
    category?: CodeableConcept[];
    /**
     * Describes what was observed. Sometimes this is called the observation "name".
     */
    code?: CodeableConcept;
    /**
     * Some observations have multiple component observations.  These component observations are
     * expressed as separate code value pairs that share the same attributes.  Examples include
     * systolic and diastolic component observations for blood pressure measurement and multiple
     * component observations for genetics observations.
     */
    component?: ObservationComponent[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Observation[];
    /**
     * Provides a reason why the expected value in the element Observation.value[x] is missing.
     */
    dataAbsentReason?: CodeableConcept;
    /**
     * The target resource that represents a measurement from which this observation value is
     * derived. For example, a calculated anion gap or a fetal measurement based on an
     * ultrasound image.
     */
    derivedFrom?: Reference[];
    /**
     * The device used to generate the observation data.
     */
    device?: Reference;
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
    effectivePeriod?: Period;
    /**
     * The time or time-period the observed value is asserted as being true. For biological
     * subjects - e.g. human patients - this is usually called the "physiologically relevant
     * time". This is usually either the time of the procedure or of specimen collection, but
     * very often the source of the date/time is not known, only the date/time itself.
     */
    effectiveTiming?: Timing;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which
     * this observation is made.
     */
    encounter?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
    focus?: Reference[];
    /**
     * This observation is a group observation (e.g. a battery, a panel of tests, a set of vital
     * sign measurements) that includes the target as a member of the group.
     */
    hasMember?: Reference[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this observation.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A categorical assessment of an observation value.  For example, high, low, normal.
     */
    interpretation?: CodeableConcept[];
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
    meta?: Meta;
    /**
     * Indicates the mechanism used to perform the observation.
     */
    method?: CodeableConcept;
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
     * Comments about the observation or the results.
     */
    note?: Annotation[];
    /**
     * A larger event of which this particular Observation is a component or step.  For
     * example,  an observation as part of a procedure.
     */
    partOf?: Reference[];
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: Reference[];
    /**
     * Guidance on how to interpret the value by comparison to a normal or recommended range.
     * Multiple reference ranges are interpreted as an "OR".   In other words, to represent two
     * distinct target populations, two `referenceRange` elements would be used.
     */
    referenceRange?: ObservationReferenceRange[];
    /**
     * This is a Observation resource
     */
    resourceType?: any;
    /**
     * The specimen that was used when this observation was made.
     */
    specimen?: Reference;
    /**
     * The status of the result value.
     */
    status?: ObservationStatus;
    /**
     * The patient, or group of patients, location, or device this observation is about and into
     * whose record the observation is placed. If the actual focus of the observation is
     * different from the subject (or a sample of, part, or region of the subject), the `focus`
     * element or the `code` itself specifies the actual focus of the observation.
     */
    subject?: Reference;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueBoolean?: boolean;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueCodeableConcept?: CodeableConcept;
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
    valuePeriod?: Period;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueQuantity?: Quantity;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRange?: Range;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRatio?: Ratio;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueSampledData?: SampledData;
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

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface ObservationComponent {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * Describes what was observed. Sometimes this is called the observation "code".
     */
    code?: CodeableConcept;
    /**
     * Provides a reason why the expected value in the element Observation.component.value[x] is
     * missing.
     */
    dataAbsentReason?: CodeableConcept;
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
     * A categorical assessment of an observation value.  For example, high, low, normal.
     */
    interpretation?: CodeableConcept[];
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
     * Guidance on how to interpret the value by comparison to a normal or recommended range.
     */
    referenceRange?: ObservationReferenceRange[];
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueBoolean?: boolean;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueCodeableConcept?: CodeableConcept;
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
    valuePeriod?: Period;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueQuantity?: Quantity;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRange?: Range;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueRatio?: Ratio;
    /**
     * The information determined as a result of making the observation, if the information has
     * a simple value.
     */
    valueSampledData?: SampledData;
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

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface ObservationReferenceRange {
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number
     * of weeks at term) if the meaning says so.
     */
    age?: Range;
    /**
     * Codes to indicate the target population this reference range applies to.  For example, a
     * reference range may be based on the normal population or a particular sex or race.
     * Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For
     * example, to represent a target population of African American females, both a code of
     * female and a code for African American would be used.
     */
    appliesTo?: CodeableConcept[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The value of the high bound of the reference range.  The high bound of the reference
     * range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the
     * high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
     */
    high?: Quantity;
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
    low?: Quantity;
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
     * Text based reference range in an observation which may be used when a quantitative range
     * is not appropriate for an observation.  An example would be a reference value of
     * "Negative" or a list or table of "normals".
     */
    text?: string;
    /**
     * Codes to indicate the what part of the targeted reference population it applies to. For
     * example, the normal or therapeutic range.
     */
    type?: CodeableConcept;
}

/**
 * The status of the result value.
 */
export enum ObservationStatus {
    Amended = "amended",
    Cancelled = "cancelled",
    Corrected = "corrected",
    EnteredInError = "entered-in-error",
    Final = "final",
    Preliminary = "preliminary",
    Registered = "registered",
    Unknown = "unknown",
}