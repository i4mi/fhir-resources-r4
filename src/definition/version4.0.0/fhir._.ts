
/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or
 * categorize an artifact. This metadata can either be specific to the applicable population
 * (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting,
 * provider of care).
 */
export interface UsageContext {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code?: Coding;
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
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueQuantity?: Quantity;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueRange?: Range;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueReference?: Reference;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A description of a triggering event. Triggering events can be named events, data events,
 * or periodic, as determined by the type element.
 */
export interface TriggerDefinition {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for timingDate
     */
    _timingDate?: Element;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * A boolean-valued expression that is evaluated in the context of the container of the
     * trigger definition and returns whether or not the trigger fires.
     */
    condition?: Expression;
    /**
     * The triggering data of the event (if this is a data trigger). If more than one data is
     * requirement is specified, then all the data requirements must be true.
     */
    data?: DataRequirement[];
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
     * A formal name for the event. This may be an absolute URI that identifies the event
     * formally (e.g. from a trigger registry), or a simple relative URI that identifies the
     * event in a local context.
     */
    name?: string;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDate?: string;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDateTime?: string;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingReference?: Reference;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingTiming?: Timing;
    /**
     * The type of triggering event.
     */
    type?: TriggerDefinitionType;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A signature along with supporting context. The signature may be a digital signature that
 * is cryptographic in nature, or some other signature acceptable to the domain. This other
 * signature may be as simple as a graphical image representing a hand-written signature, or
 * a signature ceremony Different signature approaches have different utilities.
 */
export interface Signature {
    /**
     * Extensions for data
     */
    _data?: Element;
    /**
     * Extensions for sigFormat
     */
    _sigFormat?: Element;
    /**
     * Extensions for targetFormat
     */
    _targetFormat?: Element;
    /**
     * Extensions for when
     */
    _when?: Element;
    /**
     * The base64 encoding of the Signature content. When signature is not recorded
     * electronically this element would be empty.
     */
    data?: string;
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
     * A reference to an application-usable description of the identity that is represented by
     * the signature.
     */
    onBehalfOf?: Reference;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types
     * are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for
     * a graphical image of a signature, etc.
     */
    sigFormat?: string;
    /**
     * A mime type that indicates the technical format of the target resources signed by the
     * signature.
     */
    targetFormat?: string;
    /**
     * An indication of the reason that the entity signed this document. This may be explicitly
     * included as part of the signature information and can be used when determining
     * accountability for various actions concerning the document.
     */
    type?: Coding[];
    /**
     * When the digital signature was signed.
     */
    when?: string;
    /**
     * A reference to an application-usable description of the identity that signed  (e.g. the
     * signature used their private key).
     */
    who?: Reference;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A series of measurements taken by a device, with upper and lower limits. There may be
 * more than one dimension in the data.
 */
export interface SampledData {
    /**
     * Extensions for data
     */
    _data?: Element;
    /**
     * Extensions for dimensions
     */
    _dimensions?: Element;
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for lowerLimit
     */
    _lowerLimit?: Element;
    /**
     * Extensions for period
     */
    _period?: Element;
    /**
     * Extensions for upperLimit
     */
    _upperLimit?: Element;
    /**
     * A series of data points which are decimal values separated by a single space (character
     * u20). The special values "E" (error), "L" (below detection limit) and "U" (above
     * detection limit) can also be used in place of a decimal value.
     */
    data?: string;
    /**
     * The number of sample points at each time point. If this value is greater than one, then
     * the dimensions will be interlaced - all the sample points for a point in time will be
     * recorded at once.
     */
    dimensions?: number;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A correction factor that is applied to the sampled data points before they are added to
     * the origin.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data
     * points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides
     * the units of the entire measurement series.
     */
    origin?: Quantity;
    /**
     * The length of time between sampling times, measured in milliseconds.
     */
    period?: number;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data
     * points have the value "U" (higher than detection limit).
     */
    upperLimit?: number;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Related artifacts such as additional documentation, justification, or bibliographic
 * references.
 */
export interface RelatedArtifact {
    /**
     * Extensions for citation
     */
    _citation?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for label
     */
    _label?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * A bibliographic citation for the related artifact. This text SHOULD be formatted
     * according to an accepted citation format.
     */
    citation?: string;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for
     * display to a consumer.
     */
    display?: string;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the
     * resource element.
     */
    document?: Attachment;
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
     * A short label that can be used to reference the citation from elsewhere in the containing
     * artifact, such as a footnote index.
     */
    label?: string;
    /**
     * The related resource, such as a library, value set, profile, or other knowledge resource.
     */
    resource?: string;
    /**
     * The type of relationship to the related artifact.
     */
    type?: RelatedArtifactType;
    /**
     * A url for the artifact that can be followed to access the actual content.
     */
    url?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The parameters to the module. This collection specifies both the input and output
 * parameters. Input parameters are provided by the caller as part of the $evaluate
 * operation. Output parameters are included in the GuidanceResponse.
 */
export interface ParameterDefinition {
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for max
     */
    _max?: Element;
    /**
     * Extensions for min
     */
    _min?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
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
     * The maximum number of times this element is permitted to appear in the request or
     * response.
     */
    max?: string;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number;
    /**
     * The name of the parameter used to allow access to the value of the parameter in
     * evaluation contexts.
     */
    name?: string;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the
     * output data will conform to.
     */
    profile?: string;
    /**
     * The type of the parameter.
     */
    type?: string;
    /**
     * Whether the parameter is input or output for the module.
     */
    use?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * An amount of economic utility in some recognized currency.
 */
export interface Money {
    /**
     * Extensions for currency
     */
    _currency?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string;
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
     * Numerical value (with implicit precision).
     */
    value?: number;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A human's name with the ability to identify parts and usage.
 */
export interface HumanName {
    /**
     * Extensions for family
     */
    _family?: Element;
    /**
     * Extensions for given
     */
    _given?: Element[];
    /**
     * Extensions for prefix
     */
    _prefix?: Element[];
    /**
     * Extensions for suffix
     */
    _suffix?: Element[];
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the
     * family name of a son is the first name of his father.
     */
    family?: string;
    /**
     * Given name.
     */
    given?: string[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: Period;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or
     * nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or
     * nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[];
    /**
     * Specifies the entire name as it should be displayed e.g. on an application UI. This may
     * be provided instead of or as well as the specific parts.
     */
    text?: string;
    /**
     * Identifies the purpose for this name.
     */
    use?: HumanNameUse;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A expression that is evaluated in a specified context and returns a value. The context of
 * use of the expression must specify the context in which the expression is evaluated, and
 * how the result of the expression is used.
 *
 * A boolean-valued expression that is evaluated in the context of the container of the
 * trigger definition and returns whether or not the trigger fires.
 */
export interface Expression {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for expression
     */
    _expression?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for reference
     */
    _reference?: Element;
    /**
     * A brief, natural language description of the condition that effectively communicates the
     * intended semantics.
     */
    description?: string;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string;
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
     * The media type of the language for the expression.
     */
    language?: Language;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in
     * the context where it is defined.
     */
    name?: string;
    /**
     * A URI that defines where the expression is found.
     */
    reference?: string;
}

/**
 * A set of rules that describe when the event is scheduled.
 *
 * Specifies an event that may occur multiple times. Timing schedules are used to record
 * when things are planned, expected or requested to occur. The most common usage is in
 * dosage instructions for medications. They are also used when planning care of various
 * kinds, and may be used for reporting the schedule to which past regular activities were
 * carried out.
 */
export interface TimingRepeat {
    /**
     * Extensions for count
     */
    _count?: Element;
    /**
     * Extensions for countMax
     */
    _countMax?: Element;
    /**
     * Extensions for dayOfWeek
     */
    _dayOfWeek?: Element[];
    /**
     * Extensions for duration
     */
    _duration?: Element;
    /**
     * Extensions for durationMax
     */
    _durationMax?: Element;
    /**
     * Extensions for durationUnit
     */
    _durationUnit?: Element;
    /**
     * Extensions for frequency
     */
    _frequency?: Element;
    /**
     * Extensions for frequencyMax
     */
    _frequencyMax?: Element;
    /**
     * Extensions for offset
     */
    _offset?: Element;
    /**
     * Extensions for period
     */
    _period?: Element;
    /**
     * Extensions for periodMax
     */
    _periodMax?: Element;
    /**
     * Extensions for periodUnit
     */
    _periodUnit?: Element;
    /**
     * Extensions for timeOfDay
     */
    _timeOfDay?: Element[];
    /**
     * Extensions for when
     */
    _when?: Element[];
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or
     * outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: Duration;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or
     * outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: Period;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or
     * outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: Range;
    /**
     * A total count of the desired number of repetitions across the duration of the entire
     * timing specification. If countMax is present, this element indicates the lower bound of
     * the allowed range of count values.
     */
    count?: number;
    /**
     * If present, indicates that the count is a range - so to perform the action between
     * [count] and [countMax] times.
     */
    countMax?: number;
    /**
     * If one or more days of week is provided, then the action happens only on the specified
     * day(s).
     */
    dayOfWeek?: string[];
    /**
     * How long this thing happens for when it happens. If durationMax is present, this element
     * indicates the lower bound of the allowed range of the duration.
     */
    duration?: number;
    /**
     * If present, indicates that the duration is a range - so to perform the action between
     * [duration] and [durationMax] time length.
     */
    durationMax?: number;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: Unit;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is
     * present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: number;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency]
     * and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number;
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
     * The number of minutes from the event. If the event code does not indicate whether the
     * minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: number;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3
     * times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is
     * present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: number;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing
     * expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: number;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: Unit;
    /**
     * Specified time of day for action to take place.
     */
    timeOfDay?: string[];
    /**
     * An approximate time period during the day, potentially linked to an event of daily living
     * that indicates when the action should occur.
     */
    when?: When[];
}

/**
 * When medication should be administered.
 *
 * Specifies an event that may occur multiple times. Timing schedules are used to record
 * when things are planned, expected or requested to occur. The most common usage is in
 * dosage instructions for medications. They are also used when planning care of various
 * kinds, and may be used for reporting the schedule to which past regular activities were
 * carried out.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The timing of the event (if this is a periodic trigger).
 */
export interface Timing {
    /**
     * Extensions for event
     */
    _event?: Element[];
    /**
     * A code for the timing schedule (or just text in code.text). Some codes such as BID are
     * ubiquitous, but many institutions define their own additional codes. If a code is
     * provided, the code is understood to be a complete statement of whatever is specified in
     * the structured timing data, and either the code or the data may be used to interpret the
     * Timing, with the exception that .repeat.bounds still applies over the code (and is not
     * contained in the code).
     */
    code?: CodeableConcept;
    /**
     * Identifies specific times when the event occurs.
     */
    event?: string[];
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
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: TimingRepeat;
}

/**
 * Amount of medication per unit of time.
 *
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 *
 * Upper limit on medication per unit of time.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 */
export interface Ratio {
    /**
     * The value of the denominator.
     */
    denominator?: Quantity;
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
     * The value of the numerator.
     */
    numerator?: Quantity;
}

/**
 * Amount of medication per dose.
 *
 * A set of ordered Quantities defined by a low and high limit.
 *
 * Amount of medication per unit of time.
 *
 * Either a duration for the length of the timing schedule, a range of possible length, or
 * outer bounds for start and/or end limits of the timing schedule.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 */
export interface Range {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The high limit. The boundary is inclusive.
     */
    high?: Quantity;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The low limit. The boundary is inclusive.
     */
    low?: Quantity;
}

/**
 * Amount of medication per dose.
 *
 * A measured amount (or an amount that can potentially be measured). Note that measured
 * amounts include amounts that are not precisely quantified, including amounts involving
 * arbitrary units and floating currencies.
 *
 * The high limit. The boundary is inclusive.
 *
 * The low limit. The boundary is inclusive.
 *
 * Amount of medication per unit of time.
 *
 * The value of the denominator.
 *
 * The value of the numerator.
 *
 * Upper limit on medication per administration.
 *
 * Upper limit on medication per lifetime of the patient.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The base quantity that a measured value of zero represents. In addition, this provides
 * the units of the entire measurement series.
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 */
export interface Quantity {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for comparator
     */
    _comparator?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for unit
     */
    _unit?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
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
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export interface DosageDoseAndRate {
    /**
     * Amount of medication per dose.
     */
    doseQuantity?: Quantity;
    /**
     * Amount of medication per dose.
     */
    doseRange?: Range;
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
     * Amount of medication per unit of time.
     */
    rateQuantity?: Quantity;
    /**
     * Amount of medication per unit of time.
     */
    rateRange?: Range;
    /**
     * Amount of medication per unit of time.
     */
    rateRatio?: Ratio;
    /**
     * The kind of dose or rate specified, for example, ordered or calculated.
     */
    type?: CodeableConcept;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export interface Dosage {
    /**
     * Extensions for asNeededBoolean
     */
    _asNeededBoolean?: Element;
    /**
     * Extensions for patientInstruction
     */
    _patientInstruction?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * Supplemental instructions to the patient on how to take the medication  (e.g. "with
     * meals" or"take half to one hour before food") or warnings for the patient about the
     * medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or
     * sunlamps").
     */
    additionalInstruction?: CodeableConcept[];
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing
     * schedule (Boolean option), or it indicates the precondition for taking the Medication
     * (CodeableConcept).
     */
    asNeededBoolean?: boolean;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing
     * schedule (Boolean option), or it indicates the precondition for taking the Medication
     * (CodeableConcept).
     */
    asNeededCodeableConcept?: CodeableConcept;
    /**
     * The amount of medication administered.
     */
    doseAndRate?: DosageDoseAndRate[];
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
     * Upper limit on medication per administration.
     */
    maxDosePerAdministration?: Quantity;
    /**
     * Upper limit on medication per lifetime of the patient.
     */
    maxDosePerLifetime?: Quantity;
    /**
     * Upper limit on medication per unit of time.
     */
    maxDosePerPeriod?: Ratio;
    /**
     * Technique for administering medication.
     */
    method?: CodeableConcept;
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
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: string;
    /**
     * How drug should enter body.
     */
    route?: CodeableConcept;
    /**
     * Indicates the order in which the dosage instructions should be applied or interpreted.
     */
    sequence?: number;
    /**
     * Body site to administer to.
     */
    site?: CodeableConcept;
    /**
     * Free text dosage instructions e.g. SIG.
     */
    text?: string;
    /**
     * When medication should be administered.
     */
    timing?: Timing;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A length - a value with a unit that is a physical distance.
 */
export interface Distance {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for comparator
     */
    _comparator?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for unit
     */
    _unit?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
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
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface DataRequirementSort {
    /**
     * Extensions for direction
     */
    _direction?: Element;
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction?: Direction;
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
     * The attribute of the sort. The specified path must be resolvable from the type of the
     * required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as
     * well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index
     * must be an integer constant.
     */
    path?: string;
}

/**
 * The value of the filter. If period is specified, the filter will return only those data
 * items that fall within the bounds determined by the Period, inclusive of the period
 * boundaries. If dateTime is specified, the filter will return only those data items that
 * are equal to the specified dateTime. If a Duration is specified, the filter will return
 * only those data items that fall within Duration before now.
 *
 * A length of time.
 *
 * Either a duration for the length of the timing schedule, a range of possible length, or
 * outer bounds for start and/or end limits of the timing schedule.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 */
export interface Duration {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for comparator
     */
    _comparator?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for unit
     */
    _unit?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
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
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface DataRequirementDateFilter {
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for searchParam
     */
    _searchParam?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
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
     * The date-valued attribute of the filter. The specified path SHALL be a FHIRPath
     * resolveable on the specified type of the DataRequirement, and SHALL consist only of
     * identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers
     * (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality
     * sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     * Note that the index must be an integer constant. The path must resolve to an element of
     * type date, dateTime, Period, Schedule, or Timing.
     */
    path?: string;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the
     * DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule,
     * or Timing.
     */
    searchParam?: string;
    /**
     * The value of the filter. If period is specified, the filter will return only those data
     * items that fall within the bounds determined by the Period, inclusive of the period
     * boundaries. If dateTime is specified, the filter will return only those data items that
     * are equal to the specified dateTime. If a Duration is specified, the filter will return
     * only those data items that fall within Duration before now.
     */
    valueDateTime?: string;
    /**
     * The value of the filter. If period is specified, the filter will return only those data
     * items that fall within the bounds determined by the Period, inclusive of the period
     * boundaries. If dateTime is specified, the filter will return only those data items that
     * are equal to the specified dateTime. If a Duration is specified, the filter will return
     * only those data items that fall within Duration before now.
     */
    valueDuration?: Duration;
    /**
     * The value of the filter. If period is specified, the filter will return only those data
     * items that fall within the bounds determined by the Period, inclusive of the period
     * boundaries. If dateTime is specified, the filter will return only those data items that
     * are equal to the specified dateTime. If a Duration is specified, the filter will return
     * only those data items that fall within Duration before now.
     */
    valuePeriod?: Period;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface DataRequirementCodeFilter {
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for searchParam
     */
    _searchParam?: Element;
    /**
     * The codes for the code filter. If values are given, the filter will return only those
     * data items for which the code-valued attribute specified by the path has a value that is
     * one of the specified codes. If codes are specified in addition to a value set, the filter
     * returns items matching a code in the value set or one of the specified codes.
     */
    code?: Coding[];
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
     * The code-valued attribute of the filter. The specified path SHALL be a FHIRPath
     * resolveable on the specified type of the DataRequirement, and SHALL consist only of
     * identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers
     * (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality
     * sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     * Note that the index must be an integer constant. The path must resolve to an element of
     * type code, Coding, or CodeableConcept.
     */
    path?: string;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the
     * DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If
     * valueSet is specified, the filter will return only those data items for which the value
     * of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface DataRequirement {
    /**
     * Extensions for limit
     */
    _limit?: Element;
    /**
     * Extensions for mustSupport
     */
    _mustSupport?: Element[];
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Code filters specify additional constraints on the data, specifying the value set of
     * interest for a particular element of the data. Each code filter defines an additional
     * constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: DataRequirementCodeFilter[];
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date
     * range for specific elements. Each date filter specifies an additional constraint on the
     * data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: DataRequirementDateFilter[];
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
     * Specifies a maximum number of results that are required (uses the _count search
     * parameter).
     */
    limit?: number;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and
     * must be supported by the consumer in order to obtain an effective evaluation. This does
     * not mean that a value is required for this element, only that the consuming system must
     * understand the element and be able to provide values for it if they are available.
     *
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the
     * DataRequirement. The path SHALL consist only of identifiers, constant indexers, and
     * .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[];
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[];
    /**
     * Specifies the order of the results to be returned.
     */
    sort?: DataRequirementSort[];
    /**
     * The intended subjects of the data requirement. If this element is not provided, a Patient
     * subject is assumed.
     */
    subjectCodeableConcept?: CodeableConcept;
    /**
     * The intended subjects of the data requirement. If this element is not provided, a Patient
     * subject is assumed.
     */
    subjectReference?: Reference;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles,
     * this value is set to the type of the base resource of the profile.
     */
    type?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A measured amount (or an amount that can potentially be measured). Note that measured
 * amounts include amounts that are not precisely quantified, including amounts involving
 * arbitrary units and floating currencies.
 */
export interface Count {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for comparator
     */
    _comparator?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for unit
     */
    _unit?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
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
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers,
 * and endorsers.
 */
export interface Contributor {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: ContactDetail[];
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
     * The name of the individual or organization responsible for the contribution.
     */
    name?: string;
    /**
     * The type of contributor.
     */
    type?: ContributorType;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization,
 * including telephone, email, etc.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 */
export interface ContactPoint {
    /**
     * Extensions for rank
     */
    _rank?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
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
     * Time period when the contact point was/is in use.
     */
    period?: Period;
    /**
     * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower
     * rank values are more preferred than those with higher rank values.
     */
    rank?: number;
    /**
     * Telecommunications form for contact point - what communications system is required to
     * make use of the contact.
     */
    system?: System;
    /**
     * Identifies the purpose for the contact point.
     */
    use?: ContactPointUse;
    /**
     * The actual contact point details, in a form that is meaningful to the designated
     * communication system (i.e. phone number or email address).
     */
    value?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Specifies contact information for a person or organization.
 */
export interface ContactDetail {
    /**
     * Extensions for name
     */
    _name?: Element;
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
     * The name of an individual to contact.
     */
    name?: string;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: ContactPoint[];
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * For referring to data content defined in other formats.
 *
 * The document being referenced, represented as an attachment. This is exclusive with the
 * resource element.
 */
export interface Attachment {
    /**
     * Extensions for contentType
     */
    _contentType?: Element;
    /**
     * Extensions for creation
     */
    _creation?: Element;
    /**
     * Extensions for data
     */
    _data?: Element;
    /**
     * Extensions for hash
     */
    _hash?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for size
     */
    _size?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Identifies the type of the data in the attachment and allows a method to be chosen to
     * interpret or render the data. Includes mime type parameters such as charset where
     * appropriate.
     */
    contentType?: string;
    /**
     * The date that the attachment was first created.
     */
    creation?: string;
    /**
     * The actual data of the attachment - a sequence of bytes, base64 encoded.
     */
    data?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The calculated hash of the data using SHA-1. Represented using base64.
     */
    hash?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: string;
    /**
     * The number of bytes of data that make up this attachment (before base64 encoding, if that
     * is done).
     */
    size?: number;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: string;
    /**
     * A location where the data can be accessed.
     */
    url?: string;
}

/**
 * A reference to a code defined by a terminology system.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A code that identifies the type of context being specified by this usage context.
 */
export interface Coding {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for userSelected
     */
    _userSelected?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an
     * expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: string;
    /**
     * A representation of the meaning of the code in the system, following the rules of the
     * system.
     */
    display?: string;
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
     * The identification of the code system that defines the meaning of the symbol in the code.
     */
    system?: string;
    /**
     * Indicates that this coding was chosen by a user directly - e.g. off a pick list of
     * available items (codes or displays).
     */
    userSelected?: boolean;
    /**
     * The version of the code system which was used when choosing this code. Note that a
     * well-maintained code system does not need the version reported, because the meaning of
     * codes is consistent across versions. However this cannot consistently be assured, and
     * when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
     */
    version?: string;
}

/**
 * A coded type for the identifier that can be used to determine which identifier to use for
 * a specific purpose.
 *
 * A concept that may be defined by a formal reference to a terminology or ontology or may
 * be provided by text.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The intended subjects of the data requirement. If this element is not provided, a Patient
 * subject is assumed.
 *
 * Indicates whether the Medication is only taken when needed within a specific dosing
 * schedule (Boolean option), or it indicates the precondition for taking the Medication
 * (CodeableConcept).
 *
 * The kind of dose or rate specified, for example, ordered or calculated.
 *
 * Technique for administering medication.
 *
 * How drug should enter body.
 *
 * Body site to administer to.
 *
 * A code for the timing schedule (or just text in code.text). Some codes such as BID are
 * ubiquitous, but many institutions define their own additional codes. If a code is
 * provided, the code is understood to be a complete statement of whatever is specified in
 * the structured timing data, and either the code or the data may be used to interpret the
 * Timing, with the exception that .repeat.bounds still applies over the code (and is not
 * contained in the code).
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 *
 * Categorizes the account for reporting and searching purposes.
 */
export interface CodeableConcept {
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * A reference to a code defined by a terminology system.
     */
    coding?: Coding[];
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
     * A human language representation of the concept as seen/selected/uttered by the user who
     * entered the data and/or which represents the intended meaning of the user.
     */
    text?: string;
}

/**
 * An identifier for the target resource. This is used when there is no way to reference the
 * other resource directly, either because the entity it represents is not available through
 * a FHIR server, or because there is no way for the author of the resource to convert a
 * known identifier to an actual location. There is no requirement that a
 * Reference.identifier point to something that is actually exposed as a FHIR instance, but
 * it SHALL point to a business concept that would be expected to be exposed as a FHIR
 * instance, and that instance would need to be of a FHIR resource type allowed by the
 * reference.
 *
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used
 * for business identifiers.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 */
export interface Identifier {
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * Organization that issued/manages the identifier.
     */
    assigner?: Reference;
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
     * Time period during which identifier is/was valid for use.
     */
    period?: Period;
    /**
     * Establishes the namespace for the value - that is, a URL that describes a set values that
     * are unique.
     */
    system?: string;
    /**
     * A coded type for the identifier that can be used to determine which identifier to use for
     * a specific purpose.
     */
    type?: CodeableConcept;
    /**
     * The purpose of this identifier.
     */
    use?: IdentifierUse;
    /**
     * The portion of the identifier typically relevant to the user and which is unique within
     * the context of the system.
     */
    value?: string;
}

/**
 * The individual responsible for making the annotation.
 *
 * A reference from one resource to another.
 *
 * Organization that issued/manages the identifier.
 *
 * The intended subjects of the data requirement. If this element is not provided, a Patient
 * subject is assumed.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A reference to an application-usable description of the identity that is represented by
 * the signature.
 *
 * A reference to an application-usable description of the identity that signed  (e.g. the
 * signature used their private key).
 *
 * The timing of the event (if this is a periodic trigger).
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 *
 * The party(s) that contribute to payment (or part of) of the charges applied to this
 * account (including self-pay).
 *
 * A coverage may only be responsible for specific types of charges, and the sequence of the
 * coverages in the account could be important when processing billing.
 *
 * The entity who is responsible.
 *
 * Indicates the service area, hospital, department, etc. with responsibility for managing
 * the Account.
 *
 * Reference to a parent Account.
 */
export interface Reference {
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for reference
     */
    _reference?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Plain text narrative that identifies the resource in addition to the resource reference.
     */
    display?: string;
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
     * An identifier for the target resource. This is used when there is no way to reference the
     * other resource directly, either because the entity it represents is not available through
     * a FHIR server, or because there is no way for the author of the resource to convert a
     * known identifier to an actual location. There is no requirement that a
     * Reference.identifier point to something that is actually exposed as a FHIR instance, but
     * it SHALL point to a business concept that would be expected to be exposed as a FHIR
     * instance, and that instance would need to be of a FHIR resource type allowed by the
     * reference.
     */
    identifier?: Identifier;
    /**
     * A reference to a location at which the other resource is found. The reference may be a
     * relative reference, in which case it is relative to the service base URL, or an absolute
     * URL that resolves to the location where the resource is found. The reference may be
     * version specific or not. If the reference is not to a FHIR RESTful server, then it should
     * be assumed to be version specific. Internal fragment references (start with '#') refer to
     * contained resources.
     */
    reference?: string;
    /**
     * The expected type of the target of the reference. If both Reference.type and
     * Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be
     * consistent.
     *
     * The type is the Canonical URL of Resource Definition that is the type this reference
     * refers to. References are URLs that are relative to
     * http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to
     * http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for
     * logical models (and can only be used in references in logical models, not resources).
     */
    type?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A  text note which also  contains information about who made the statement and when.
 */
export interface Annotation {
    /**
     * Extensions for authorString
     */
    _authorString?: Element;
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * Extensions for time
     */
    _time?: Element;
    /**
     * The individual responsible for making the annotation.
     */
    authorReference?: Reference;
    /**
     * The individual responsible for making the annotation.
     */
    authorString?: string;
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
     * The text of the annotation in markdown format.
     */
    text?: string;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A duration of time during which an organism (or a process) has existed.
 */
export interface Age {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for comparator
     */
    _comparator?: Element;
    /**
     * Extensions for system
     */
    _system?: Element;
    /**
     * Extensions for unit
     */
    _unit?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
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
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Time period when address was/is in use.
 *
 * A time period defined by a start and end date and optionally time.
 *
 * Time period during which identifier is/was valid for use.
 *
 * Time period when the contact point was/is in use.
 *
 * The value of the filter. If period is specified, the filter will return only those data
 * items that fall within the bounds determined by the Period, inclusive of the period
 * boundaries. If dateTime is specified, the filter will return only those data items that
 * are equal to the specified dateTime. If a Duration is specified, the filter will return
 * only those data items that fall within Duration before now.
 *
 * Either a duration for the length of the timing schedule, a range of possible length, or
 * outer bounds for start and/or end limits of the timing schedule.
 *
 * Indicates the period of time when this name was valid for the named person.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The timeframe during which the guarantor accepts responsibility for the account.
 *
 * The date range of services associated with this account.
 */
export interface Period {
    /**
     * Extensions for end
     */
    _end?: Element;
    /**
     * Extensions for start
     */
    _start?: Element;
    /**
     * The end of the period. If the end of the period is missing, it means no end was known or
     * planned at the time the instance was created. The start may be in the past, and the end
     * date in the future, which means that period is expected/planned to end at that time.
     */
    end?: string;
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
     * The start of the period. The boundary is inclusive.
     */
    start?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * An address expressed using postal conventions (as opposed to GPS or other location
 * definition formats).  This data type may be used to convey addresses for use in
 * delivering mail as well as for visiting locations which might not be valid for mail
 * delivery.  There are a variety of postal address formats defined around the world.
 */
export interface Address {
    /**
     * Extensions for city
     */
    _city?: Element;
    /**
     * Extensions for country
     */
    _country?: Element;
    /**
     * Extensions for district
     */
    _district?: Element;
    /**
     * Extensions for line
     */
    _line?: Element[];
    /**
     * Extensions for postalCode
     */
    _postalCode?: Element;
    /**
     * Extensions for state
     */
    _state?: Element;
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: string;
    /**
     * Country - a nation as commonly understood or generally accepted.
     */
    country?: string;
    /**
     * The name of the administrative area (county).
     */
    district?: string;
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
     * This component contains the house number, apartment number, street name, street
     * direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: string[];
    /**
     * Time period when address was/is in use.
     */
    period?: Period;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code
     * may be used if codes are in common use (e.g. US 2 letter state codes).
     */
    state?: string;
    /**
     * Specifies the entire address as it should be displayed e.g. on a postal label. This may
     * be provided instead of or as well as the specific parts.
     */
    text?: string;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses
     * (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: AddressType;
    /**
     * The purpose of this address.
     */
    use?: AddressUse;
}

/**
 * Optional Extension Element - found in all resources.
 */
export interface Extension {
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: Element;
    /**
     * Extensions for valueCode
     */
    _valueCode?: Element;
    /**
     * Extensions for valueDate
     */
    _valueDate?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueId
     */
    _valueId?: Element;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: Element;
    /**
     * Extensions for valueOid
     */
    _valueOid?: Element;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: Element;
    /**
     * Extensions for valueUri
     */
    _valueUri?: Element;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: Element;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: Element;
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
     * Source of the definition for the extension code - a logical name or a URL.
     */
    url?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAddress?: Address;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAge?: Age;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAnnotation?: Annotation;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAttachment?: Attachment;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCoding?: Coding;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueContactDetail?: ContactDetail;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueContactPoint?: ContactPoint;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueContributor?: Contributor;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCount?: Count;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDataRequirement?: DataRequirement;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDistance?: Distance;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDosage?: Dosage;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDuration?: Duration;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueExpression?: Expression;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueHumanName?: HumanName;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueId?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueIdentifier?: Identifier;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueMoney?: Money;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueParameterDefinition?: ParameterDefinition;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valuePeriod?: Period;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueQuantity?: Quantity;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueRange?: Range;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueRatio?: Ratio;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueReference?: Reference;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueRelatedArtifact?: RelatedArtifact;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueSampledData?: SampledData;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueSignature?: Signature;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueString?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueTiming?: Timing;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueTriggerDefinition?: TriggerDefinition;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUsageContext?: UsageContext;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string;
}

/**
 * Extensions for description
 *
 * Base definition for all elements in a resource.
 *
 * Extensions for url
 *
 * Extensions for valueBase64Binary
 *
 * Extensions for valueBoolean
 *
 * Extensions for valueCanonical
 *
 * Extensions for valueCode
 *
 * Extensions for valueDate
 *
 * Extensions for valueDateTime
 *
 * Extensions for valueDecimal
 *
 * Extensions for valueId
 *
 * Extensions for valueInstant
 *
 * Extensions for valueInteger
 *
 * Extensions for valueMarkdown
 *
 * Extensions for valueOid
 *
 * Extensions for valuePositiveInt
 *
 * Extensions for valueString
 *
 * Extensions for valueTime
 *
 * Extensions for valueUnsignedInt
 *
 * Extensions for valueUri
 *
 * Extensions for valueUrl
 *
 * Extensions for valueUuid
 *
 * Extensions for city
 *
 * Extensions for country
 *
 * Extensions for district
 *
 * Extensions for postalCode
 *
 * Extensions for state
 *
 * Extensions for text
 *
 * Extensions for type
 *
 * Extensions for use
 *
 * Extensions for end
 *
 * Extensions for start
 *
 * Extensions for code
 *
 * Extensions for comparator
 *
 * Extensions for system
 *
 * Extensions for unit
 *
 * Extensions for value
 *
 * Extensions for authorString
 *
 * Extensions for time
 *
 * Extensions for display
 *
 * Extensions for reference
 *
 * Extensions for userSelected
 *
 * Extensions for version
 *
 * Extensions for contentType
 *
 * Extensions for creation
 *
 * Extensions for data
 *
 * Extensions for hash
 *
 * Extensions for language
 *
 * Extensions for size
 *
 * Extensions for title
 *
 * Extensions for name
 *
 * Extensions for rank
 *
 * Extensions for limit
 *
 * Extensions for path
 *
 * Extensions for searchParam
 *
 * Extensions for direction
 *
 * Extensions for asNeededBoolean
 *
 * Extensions for patientInstruction
 *
 * Extensions for sequence
 *
 * Extensions for count
 *
 * Extensions for countMax
 *
 * Extensions for duration
 *
 * Extensions for durationMax
 *
 * Extensions for durationUnit
 *
 * Extensions for frequency
 *
 * Extensions for frequencyMax
 *
 * Extensions for offset
 *
 * Extensions for period
 *
 * Extensions for periodMax
 *
 * Extensions for periodUnit
 *
 * Extensions for expression
 *
 * Extensions for family
 *
 * Extensions for currency
 *
 * Extensions for documentation
 *
 * Extensions for max
 *
 * Extensions for min
 *
 * Extensions for citation
 *
 * Extensions for label
 *
 * Extensions for dimensions
 *
 * Extensions for factor
 *
 * Extensions for lowerLimit
 *
 * Extensions for upperLimit
 *
 * Extensions for sigFormat
 *
 * Extensions for targetFormat
 *
 * Extensions for when
 *
 * Extensions for timingDate
 *
 * Extensions for timingDateTime
 *
 * Extensions for implicitRules
 *
 * Extensions for status
 *
 * Extensions for priority
 *
 * Extensions for onHold
 *
 * Extensions for lastUpdated
 *
 * Extensions for source
 *
 * Extensions for versionId
 */
export interface Element {
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
}

/**
 * The type of triggering event.
 */
export enum TriggerDefinitionType {
    DataAccessEnded = "data-access-ended",
    DataAccessed = "data-accessed",
    DataAdded = "data-added",
    DataChanged = "data-changed",
    DataModified = "data-modified",
    DataRemoved = "data-removed",
    NamedEvent = "named-event",
    Periodic = "periodic",
}

/**
 * The type of relationship to the related artifact.
 */
export enum RelatedArtifactType {
    Citation = "citation",
    ComposedOf = "composed-of",
    DependsOn = "depends-on",
    DerivedFrom = "derived-from",
    Documentation = "documentation",
    Justification = "justification",
    Predecessor = "predecessor",
    Successor = "successor",
}

/**
 * Identifies the purpose for this name.
 */
export enum HumanNameUse {
    Anonymous = "anonymous",
    Maiden = "maiden",
    Nickname = "nickname",
    Official = "official",
    Old = "old",
    Temp = "temp",
    Usual = "usual",
}

/**
 * The media type of the language for the expression.
 */
export enum Language {
    ApplicationXFhirQuery = "application/x-fhir-query",
    TextCql = "text/cql",
    TextFhirpath = "text/fhirpath",
}

/**
 * The units of time for the duration, in UCUM units.
 *
 * The units of time for the period in UCUM units.
 */
export enum Unit {
    A = "a",
    D = "d",
    H = "h",
    Min = "min",
    Mo = "mo",
    S = "s",
    Wk = "wk",
}

export enum When {
    AC = "AC",
    ACD = "ACD",
    ACM = "ACM",
    AFTEarly = "AFT.early",
    AFTLate = "AFT.late",
    Acv = "ACV",
    Aft = "AFT",
    C = "C",
    CD = "CD",
    CM = "CM",
    Cv = "CV",
    EVEEarly = "EVE.early",
    EVELate = "EVE.late",
    Eve = "EVE",
    Hs = "HS",
    MORNEarly = "MORN.early",
    MORNLate = "MORN.late",
    Morn = "MORN",
    Night = "NIGHT",
    Noon = "NOON",
    PC = "PC",
    PCM = "PCM",
    Pcd = "PCD",
    Pcv = "PCV",
    Phs = "PHS",
    Wake = "WAKE",
}

/**
 * How the value should be understood and represented - whether the actual value is greater
 * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
 * then the real value is < stated value.
 */
export enum Comparator {
    Comparator = "<=",
    Empty = "<",
    Fluffy = ">",
    Purple = ">=",
}

/**
 * The direction of the sort, ascending or descending.
 */
export enum Direction {
    Ascending = "ascending",
    Descending = "descending",
}

/**
 * The type of contributor.
 */
export enum ContributorType {
    Author = "author",
    Editor = "editor",
    Endorser = "endorser",
    Reviewer = "reviewer",
}

/**
 * Telecommunications form for contact point - what communications system is required to
 * make use of the contact.
 */
export enum System {
    Email = "email",
    Fax = "fax",
    Other = "other",
    Pager = "pager",
    Phone = "phone",
    Sms = "sms",
    Url = "url",
}

/**
 * Identifies the purpose for the contact point.
 */
export enum ContactPointUse {
    Home = "home",
    Mobile = "mobile",
    Old = "old",
    Temp = "temp",
    Work = "work",
}

/**
 * The purpose of this identifier.
 */
export enum IdentifierUse {
    Official = "official",
    Old = "old",
    Secondary = "secondary",
    Temp = "temp",
    Usual = "usual",
}

/**
 * Distinguishes between physical addresses (those you can visit) and mailing addresses
 * (e.g. PO Boxes and care-of addresses). Most addresses are both.
 */
export enum AddressType {
    Both = "both",
    Physical = "physical",
    Postal = "postal",
}

/**
 * The purpose of this address.
 */
export enum AddressUse {
    Billing = "billing",
    Home = "home",
    Old = "old",
    Temp = "temp",
    Work = "work",
}

/**
 * The metadata about the resource. This is content that is maintained by the
 * infrastructure. Changes to the content might not always be associated with version
 * changes to the resource.
 *
 * The metadata about a resource. This is content in the resource that is maintained by the
 * infrastructure. Changes to the content might not always be associated with version
 * changes to the resource.
 */
export interface Meta {
    /**
     * Extensions for lastUpdated
     */
    _lastUpdated?: Element;
    /**
     * Extensions for source
     */
    _source?: Element;
    /**
     * Extensions for versionId
     */
    _versionId?: Element;
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
     * When the resource last changed - e.g. when the version changed.
     */
    lastUpdated?: string;
    /**
     * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource
     * claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */
    profile?: string[];
    /**
     * Security labels applied to this resource. These tags connect specific resources to the
     * overall security policy and infrastructure.
     */
    security?: Coding[];
    /**
     * A uri that identifies the source system of the resource. This provides a minimal amount
     * of [[[Provenance]]] information that can be used to track or differentiate the source of
     * information in the resource. The source may identify another FHIR server, document,
     * message, database, etc.
     */
    source?: string;
    /**
     * Tags applied to this resource. Tags are intended to be used to identify and relate
     * resources to process and workflow, and applications are not required to consider the tags
     * when interpreting the meaning of a resource.
     */
    tag?: Coding[];
    /**
     * The version specific identifier, as it appears in the version portion of the URL. This
     * value changes when the resource is created, updated, or deleted.
     */
    versionId?: string;
}


/**
 * A human-readable narrative that contains a summary of the resource and can be used to
 * represent the content of the resource to a human. The narrative need not encode all the
 * structured data, but is required to contain sufficient detail to make it "clinically
 * safe" for a human to just read the narrative. Resource definitions may define what
 * content should be represented in the narrative to ensure clinical safety.
 *
 * A human-readable summary of the resource conveying the essential clinical and business
 * information for the resource.
 */
export interface Narrative {
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * The actual narrative content, a stripped down version of XHTML.
     */
    div?: any;
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
     * The status of the narrative - whether it's entirely generated (from just the defined data
     * or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status?: Status;
}

/**
 * The status of the narrative - whether it's entirely generated (from just the defined data
 * or the extensions too), or whether a human authored it and it may contain additional data.
 */
export enum Status {
    Additional = "additional",
    Empty = "empty",
    Extensions = "extensions",
    Generated = "generated",
}