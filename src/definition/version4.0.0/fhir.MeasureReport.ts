import {
    Element,
    Reference,
    Extension,
    Identifier,
    CodeableConcept,
    Meta,
    Period,
    Narrative,
    Quantity
} from "./fhir._";

export interface MeasureReport {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: MeasureReport[];
    /**
     * The date this measure report was generated.
     */
    date?: string;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of
     * this measure.
     */
    evaluatedResource?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: MeasureReportGroup[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this MeasureReport when it is represented in
     * other formats or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Whether improvement in the measure is noted by an increase or decrease in the measure
     * score.
     */
    improvementNotation?: CodeableConcept;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure?: string;
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
     * The reporting period for which the report was calculated.
     */
    period?: Period;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: Reference;
    /**
     * This is a MeasureReport resource
     */
    resourceType?: any;
    /**
     * The MeasureReport status. No data will be available until the MeasureReport status is
     * complete.
     */
    status?: MeasureReportStatus;
    /**
     * Optional subject identifying the individual or individuals the report is for.
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
     * The type of measure report. This may be an individual report, which provides the score
     * for the measure for an individual member of the population; a subject-listing, which
     * returns the list of members that meet the various criteria in the measure; a summary
     * report, which returns a population count for each of the criteria in the measure; or a
     * data-collection, which enables the MeasureReport to be used to exchange the
     * data-of-interest for a quality measure.
     */
    type?: MeasureReportType;
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and
 * optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportGroup {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: CodeableConcept;
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
     * The measure score for this population group, calculated as appropriate for the measure
     * type and scoring method, and based on the contents of the populations defined in the
     * group.
     */
    measureScore?: Quantity;
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
     * The populations that make up the population group, one for each type of population
     * appropriate for the measure.
     */
    population?: MeasureReportPopulation[];
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each
     * stratifier defined by the measure.
     */
    stratifier?: MeasureReportStratifier[];
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and
 * optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportPopulation {
    /**
     * Extensions for count
     */
    _count?: Element;
    /**
     * The type of the population.
     */
    code?: CodeableConcept;
    /**
     * The number of members of the population.
     */
    count?: number;
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
     * This element refers to a List of subject level MeasureReport resources, one for each
     * subject in this population.
     */
    subjectResults?: Reference;
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and
 * optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportStratifier {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: CodeableConcept[];
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
     * This element contains the results for a single stratum within the stratifier. For
     * example, when stratifying on administrative gender, there will be four strata, one for
     * each possible gender value.
     */
    stratum?: MeasureReportStratum[];
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and
 * optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportStratum {
    /**
     * A stratifier component value.
     */
    component?: MeasureReportComponent[];
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
     * The measure score for this stratum, calculated as appropriate for the measure type and
     * scoring method, and based on only the members of this stratum.
     */
    measureScore?: Quantity;
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
     * The populations that make up the stratum, one for each type of population appropriate to
     * the measure.
     */
    population?: MeasureReportPopulation1[];
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on
     * complex values, the value must be rendered such that the value for each stratum within
     * the stratifier is unique.
     */
    value?: CodeableConcept;
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and
 * optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportComponent {
    /**
     * The code for the stratum component value.
     */
    code?: CodeableConcept;
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
     * The stratum component value.
     */
    value?: CodeableConcept;
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and
 * optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportPopulation1 {
    /**
     * Extensions for count
     */
    _count?: Element;
    /**
     * The type of the population.
     */
    code?: CodeableConcept;
    /**
     * The number of members of the population in this stratum.
     */
    count?: number;
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
     * This element refers to a List of subject level MeasureReport resources, one for each
     * subject in this population in this stratum.
     */
    subjectResults?: Reference;
}

/**
 * The MeasureReport status. No data will be available until the MeasureReport status is
 * complete.
 */
export enum MeasureReportStatus {
    Complete = "complete",
    Error = "error",
    Pending = "pending",
}

/**
 * The type of measure report. This may be an individual report, which provides the score
 * for the measure for an individual member of the population; a subject-listing, which
 * returns the list of members that meet the various criteria in the measure; a summary
 * report, which returns a population count for each of the criteria in the measure; or a
 * data-collection, which enables the MeasureReport to be used to exchange the
 * data-of-interest for a quality measure.
 */
export enum MeasureReportType {
    DataCollection = "data-collection",
    Individual = "individual",
    SubjectList = "subject-list",
    Summary = "summary",
}
