import { Element,
         Reference, 
         CodeableConcept,
         Period,
         Extension,
         Identifier,
         Meta,
         Attachment,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirDiagnosticReport } from "./file";
//
//   const fhirDiagnosticReport = Convert.toFhirDiagnosticReport(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface DiagnosticReport {
    /**
     * Extensions for conclusion
     */
    _conclusion?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for effectiveDateTime
     */
    _effectiveDateTime?: any[] | boolean | Element | number | number | null | string;
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
     * Details concerning a service requested.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A code that classifies the clinical discipline, department or diagnostic service that
     * created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for
     * searching, sorting and display purposes.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of
     * the diagnostic report.
     */
    conclusion?: string;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of
     * the diagnostic report.
     */
    conclusionCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | DiagnosticReport | number | null | string>;
    /**
     * The time or time-period the observed values are related to. When the subject of the
     * report is a patient, this is usually either the time of the procedure or of specimen
     * collection(s), but very often the source of the date/time is not known, only the
     * date/time itself.
     */
    effectiveDateTime?: string;
    /**
     * The time or time-period the observed values are related to. When the subject of the
     * report is a patient, this is usually either the time of the procedure or of specimen
     * collection(s), but very often the source of the date/time is not known, only the
     * date/time itself.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) which this
     * DiagnosticReport is about.
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
     * Identifiers assigned to this report by the performer or other systems.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * One or more links to full details of any imaging performed during the diagnostic
     * investigation. Typically, this is imaging performed by DICOM enabled modalities, but this
     * is not required. A fully enabled PACS viewer can use this information to provide views of
     * the source images.
     */
    imagingStudy?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The date and time that this version of the report was made available to providers,
     * typically after the report was reviewed and verified.
     */
    issued?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * A list of key images associated with this report. The images are generally created during
     * the diagnostic process, and may be directly of the patient, or of treated specimens (i.e.
     * slides of interest).
     */
    media?: Array<any[] | boolean | DiagnosticReportMedia | number | number | null | string>;
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
     * The diagnostic service that is responsible for issuing the report.
     */
    performer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Rich text representation of the entire result as issued by the diagnostic service.
     * Multiple formats are allowed but they SHALL be semantically equivalent.
     */
    presentedForm?: Array<any[] | boolean | Attachment | number | number | null | string>;
    /**
     * This is a DiagnosticReport resource
     */
    resourceType: any;
    /**
     * [Observations](observation.html)  that are part of this diagnostic report.
     */
    result?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The practitioner or organization that is responsible for the report's conclusions and
     * interpretations.
     */
    resultsInterpreter?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Details about the specimens on which this diagnostic report is based.
     */
    specimen?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The status of the diagnostic report.
     */
    status?: FhirDiagnosticReportStatus;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However,
     * diagnostic services also perform analyses on specimens collected from a variety of other
     * sources.
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
}

export interface DiagnosticReportMedia {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * A comment about the image. Typically, this is used to provide an explanation for why the
     * image is included, or to draw the viewer's attention to important features.
     */
    comment?: string;
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
     * Reference to the image source.
     */
    link: any[] | boolean | Reference | number | number | null | string;
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
 * The status of the diagnostic report.
 */
export enum FhirDiagnosticReportStatus {
    Amended = "amended",
    Appended = "appended",
    Cancelled = "cancelled",
    Corrected = "corrected",
    EnteredInError = "entered-in-error",
    Final = "final",
    Partial = "partial",
    Preliminary = "preliminary",
    Registered = "registered",
    Unknown = "unknown",
}