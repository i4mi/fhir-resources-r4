import { Element,
         Reference, 
         CodeableConcept,
         Extension,
         Identifier,
         Meta,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirImmunizationEvaluation } from "./file";
//
//   const fhirImmunizationEvaluation = Convert.toFhirImmunizationEvaluation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ImmunizationEvaluation {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for doseNumberPositiveInt
     */
    _doseNumberPositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for doseNumberString
     */
    _doseNumberString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for series
     */
    _series?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for seriesDosesPositiveInt
     */
    _seriesDosesPositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for seriesDosesString
     */
    _seriesDosesString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: any[] | boolean | Reference | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ImmunizationEvaluation | number | null | string>;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string;
    /**
     * Additional information about the evaluation.
     */
    description?: string;
    /**
     * Nominal position in a series.
     */
    doseNumberPositiveInt?: number;
    /**
     * Nominal position in a series.
     */
    doseNumberString?: string;
    /**
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not
     * relative to the published recommendations.
     */
    doseStatusReason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: any[] | boolean | Reference | number | number | null | string;
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
     * The individual for whom the evaluation is being done.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a ImmunizationEvaluation resource
     */
    resourceType: any;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of
     * an authority.
     */
    series?: string;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDosesPositiveInt?: number;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDosesString?: string;
    /**
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status?: string;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}