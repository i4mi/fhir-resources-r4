import {
    Element,
    Reference,
    CodeableConcept,
    Extension,
    Identifier,
    Meta,
    Narrative,
    Range
} from "./fhir._";

export interface ObservationDefinition {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for multipleResultsAllowed
     */
    _multipleResultsAllowed?: Element;
    /**
     * Extensions for permittedDataType
     */
    _permittedDataType?: Element[];
    /**
     * Extensions for preferredReportName
     */
    _preferredReportName?: Element;
    /**
     * The set of abnormal coded results for the observation conforming to this
     * ObservationDefinition.
     */
    abnormalCodedValueSet?: Reference;
    /**
     * A code that classifies the general type of observation.
     */
    category?: CodeableConcept[];
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ObservationDefinition[];
    /**
     * The set of critical coded results for the observation conforming to this
     * ObservationDefinition.
     */
    criticalCodedValueSet?: Reference;
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
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: Identifier[];
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
     * The method or technique used to perform the observation.
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
     * Multiple results allowed for observations conforming to this ObservationDefinition.
     */
    multipleResultsAllowed?: boolean;
    /**
     * The set of normal coded results for the observations conforming to this
     * ObservationDefinition.
     */
    normalCodedValueSet?: Reference;
    /**
     * The data types allowed for the value element of the instance observations conforming to
     * this ObservationDefinition.
     */
    permittedDataType?: PermittedDataType[];
    /**
     * The preferred name to be used when reporting the results of observations conforming to
     * this ObservationDefinition.
     */
    preferredReportName?: string;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous
     * observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: ObservationDefinitionQualifiedInterval[];
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: ObservationDefinitionQuantitativeDetails;
    /**
     * This is a ObservationDefinition resource
     */
    resourceType?: any;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * The set of valid coded results for the observations  conforming to this
     * ObservationDefinition.
     */
    validCodedValueSet?: Reference;
}

export enum PermittedDataType {
    Boolean = "boolean",
    CodeableConcept = "CodeableConcept",
    DateTime = "dateTime",
    Integer = "integer",
    Period = "Period",
    Quantity = "Quantity",
    Range = "Range",
    Ratio = "Ratio",
    SampledData = "SampledData",
    String = "string",
    Time = "time",
}

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or
 * consumed by an orderable health care service.
 */
export interface ObservationDefinitionQualifiedInterval {
    /**
     * Extensions for category
     */
    _category?: Element;
    /**
     * Extensions for condition
     */
    _condition?: Element;
    /**
     * Extensions for gender
     */
    _gender?: Element;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number
     * of weeks at term) if the meaning says so.
     */
    age?: Range;
    /**
     * Codes to indicate the target population this reference range applies to.
     */
    appliesTo?: CodeableConcept[];
    /**
     * The category of interval of values for continuous or ordinal observations conforming to
     * this ObservationDefinition.
     */
    category?: Category;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or
     * therapeutic range.
     */
    context?: CodeableConcept;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Sex of the population the range applies to.
     */
    gender?: Gender;
    /**
     * The gestational age to which this reference range is applicable, in the context of
     * pregnancy.
     */
    gestationalAge?: Range;
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
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: Range;
}

/**
 * The category of interval of values for continuous or ordinal observations conforming to
 * this ObservationDefinition.
 */
export enum Category {
    Absolute = "absolute",
    Critical = "critical",
    Reference = "reference",
}

/**
 * Sex of the population the range applies to.
 */
export enum Gender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown",
}

/**
 * Characteristics for quantitative results of this observation.
 *
 * Set of definitional characteristics for a kind of observation or measurement produced or
 * consumed by an orderable health care service.
 */
export interface ObservationDefinitionQuantitativeDetails {
    /**
     * Extensions for conversionFactor
     */
    _conversionFactor?: Element;
    /**
     * Extensions for decimalPrecision
     */
    _decimalPrecision?: Element;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number;
    /**
     * Customary unit used to report quantitative results of observations conforming to this
     * ObservationDefinition.
     */
    customaryUnit?: CodeableConcept;
    /**
     * Number of digits after decimal separator when the results of such observations are of
     * type Quantity.
     */
    decimalPrecision?: number;
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
     * SI unit used to report quantitative results of observations conforming to this
     * ObservationDefinition.
     */
    unit?: CodeableConcept;
}