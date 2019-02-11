import { Element,
         Reference, 
         Extension,
         Identifier,
         Meta,
         Coding,
         Annotation,
         CodeableConcept,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirImagingStudy } from "./file";
//
//   const fhirImagingStudy = Convert.toFhirImagingStudy(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ImagingStudy {
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
     * Extensions for numberOfInstances
     */
    _numberOfInstances?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for numberOfSeries
     */
    _numberOfSeries?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for started
     */
    _started?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ImagingStudy | number | null | string>;
    /**
     * The Imaging Manager description of the study. Institution-generated description or
     * classification of the Study (component) performed.
     */
    description?: string;
    /**
     * The healthcare event (e.g. a patient and healthcare provider interaction) during which
     * this ImagingStudy is made.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for the study. See
     * implementation notes for information about using DICOM endpoints. A study-level endpoint
     * applies to each series in the study, unless overridden by a series-level endpoint with
     * the same Endpoint.connectionType.
     */
    endpoint?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Identifiers for the ImagingStudy such as DICOM Study Instance UID, and Accession Number.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: any[] | boolean | Meta | number | number | null | string;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e.
     * those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: Array<any[] | boolean | Coding | number | number | null | string>;
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
     * Per the recommended DICOM mapping, this element is derived from the Study Description
     * attribute (0008,1030). Observations or findings about the imaging study should be
     * recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of
     * instance elements this resource contains due to resource availability, security, or other
     * factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series
     * elements this Resource contains due to resource availability, security, or other factors.
     * This element should be present if any series elements are present.
     */
    numberOfSeries?: number;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The requesting/referring physician.
     */
    referrer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a ImagingStudy resource
     */
    resourceType: any;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: Array<any[] | boolean | ImagingStudySeries | number | number | null | string>;
    /**
     * Date and time the study started.
     */
    started?: string;
    /**
     * The current state of the ImagingStudy.
     */
    status?: FhirImagingStudyStatus;
    /**
     * The subject, typically a patient, of the imaging study.
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

export interface ImagingStudySeries {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for number
     */
    _number?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for numberOfInstances
     */
    _numberOfInstances?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for started
     */
    _started?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for uid
     */
    _uid?: any[] | boolean | Element | number | number | null | string;
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L
     * (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for
     * DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part
     * imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: any[] | boolean | Coding | number | number | null | string;
    /**
     * A description of the series.
     */
    description?: string;
    /**
     * The network service providing access (e.g., query, view, or retrieval) for this series.
     * See implementation notes for information about using DICOM endpoints. A series-level
     * endpoint, if present, has precedence over a study-level endpoint with the same
     * Endpoint.connectionType.
     */
    endpoint?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: Array<any[] | boolean | ImagingStudyInstance | number | number | null | string>;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left
     * knee, both lungs, or unpaired abdomen. If present, shall be consistent with any
     * laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: any[] | boolean | Coding | number | number | null | string;
    /**
     * The modality of this series sequence.
     */
    modality: any[] | boolean | Coding | number | number | null | string;
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
     * The numeric identifier of this series in the study.
     */
    number?: number;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of
     * instance elements this resource contains due to resource availability, security, or other
     * factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number;
    /**
     * Indicates who or what performed the series and how they were involved.
     */
    performer?: Array<any[] | boolean | ImagingStudyPerformer | number | number | null | string>;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The date and time the series was started.
     */
    started?: string;
    /**
     * The DICOM Series Instance UID for the series.
     */
    uid?: string;
}

export interface ImagingStudyInstance {
    /**
     * Extensions for number
     */
    _number?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for uid
     */
    _uid?: any[] | boolean | Element | number | number | null | string;
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
     * The number of instance in the series.
     */
    number?: number;
    /**
     * DICOM instance  type.
     */
    sop: any[] | boolean | Coding | number | number | null | string;
    /**
     * The description of the instance.
     */
    title?: string;
    /**
     * The DICOM SOP Instance UID for this image or other DICOM content.
     */
    uid?: string;
}

export interface ImagingStudyPerformer {
    /**
     * Indicates who or what performed the series.
     */
    actor: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: any[] | boolean | CodeableConcept | number | number | null | string;
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
}

/**
 * The current state of the ImagingStudy.
 */
export enum FhirImagingStudyStatus {
    Available = "available",
    Cancelled = "cancelled",
    EnteredInError = "entered-in-error",
    Registered = "registered",
    Unknown = "unknown",
}