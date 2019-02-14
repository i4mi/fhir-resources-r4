import { Element, Reference, Extension, Identifier, CodeableConcept, Meta, Period, Narrative, Quantity } from "./fhir._";
export interface MeasureReport {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MeasureReport | number | null | string>;
    /**
     * The date this measure report was generated.
     */
    date?: string;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of
     * this measure.
     */
    evaluatedResource?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: Array<any[] | boolean | MeasureReportGroup | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this MeasureReport when it is represented in
     * other formats or referenced in a specification, model, design or an instance.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
    improvementNotation?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: string;
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
     * The reporting period for which the report was calculated.
     */
    period: any[] | boolean | Period | number | number | null | string;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a MeasureReport resource
     */
    resourceType: any;
    /**
     * The MeasureReport status. No data will be available until the MeasureReport status is
     * complete.
     */
    status?: FhirMeasureReportStatus;
    /**
     * Optional subject identifying the individual or individuals the report is for.
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
     * The type of measure report. This may be an individual report, which provides the score
     * for the measure for an individual member of the population; a subject-listing, which
     * returns the list of members that meet the various criteria in the measure; a summary
     * report, which returns a population count for each of the criteria in the measure; or a
     * data-collection, which enables the MeasureReport to be used to exchange the
     * data-of-interest for a quality measure.
     */
    type?: FhirMeasureReportType;
}
export interface MeasureReportGroup {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The measure score for this population group, calculated as appropriate for the measure
     * type and scoring method, and based on the contents of the populations defined in the
     * group.
     */
    measureScore?: any[] | boolean | Quantity | number | number | null | string;
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
     * The populations that make up the population group, one for each type of population
     * appropriate for the measure.
     */
    population?: Array<any[] | boolean | MeasureReportPopulation | number | number | null | string>;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each
     * stratifier defined by the measure.
     */
    stratifier?: Array<any[] | boolean | MeasureReportStratifier | number | number | null | string>;
}
export interface MeasureReportPopulation {
    /**
     * Extensions for count
     */
    _count?: any[] | boolean | Element | number | number | null | string;
    /**
     * The type of the population.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * This element refers to a List of subject level MeasureReport resources, one for each
     * subject in this population.
     */
    subjectResults?: any[] | boolean | Reference | number | number | null | string;
}
export interface MeasureReportStratifier {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * This element contains the results for a single stratum within the stratifier. For
     * example, when stratifying on administrative gender, there will be four strata, one for
     * each possible gender value.
     */
    stratum?: Array<any[] | boolean | MeasureReportStratum | number | number | null | string>;
}
export interface MeasureReportStratum {
    /**
     * A stratifier component value.
     */
    component?: Array<any[] | boolean | MeasureReportComponent | number | number | null | string>;
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
     * The measure score for this stratum, calculated as appropriate for the measure type and
     * scoring method, and based on only the members of this stratum.
     */
    measureScore?: any[] | boolean | Quantity | number | number | null | string;
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
     * The populations that make up the stratum, one for each type of population appropriate to
     * the measure.
     */
    population?: Array<any[] | boolean | MeasureReportPopulation1 | number | number | null | string>;
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on
     * complex values, the value must be rendered such that the value for each stratum within
     * the stratifier is unique.
     */
    value?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface MeasureReportComponent {
    /**
     * The code for the stratum component value.
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The stratum component value.
     */
    value: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface MeasureReportPopulation1 {
    /**
     * Extensions for count
     */
    _count?: any[] | boolean | Element | number | number | null | string;
    /**
     * The type of the population.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * This element refers to a List of subject level MeasureReport resources, one for each
     * subject in this population in this stratum.
     */
    subjectResults?: any[] | boolean | Reference | number | number | null | string;
}
/**
 * The MeasureReport status. No data will be available until the MeasureReport status is
 * complete.
 */
export declare enum FhirMeasureReportStatus {
    Complete = "complete",
    Error = "error",
    Pending = "pending"
}
/**
 * The type of measure report. This may be an individual report, which provides the score
 * for the measure for an individual member of the population; a subject-listing, which
 * returns the list of members that meet the various criteria in the measure; a summary
 * report, which returns a population count for each of the criteria in the measure; or a
 * data-collection, which enables the MeasureReport to be used to exchange the
 * data-of-interest for a quality measure.
 */
export declare enum FhirMeasureReportType {
    DataCollection = "data-collection",
    Individual = "individual",
    SubjectList = "subject-list",
    Summary = "summary"
}
