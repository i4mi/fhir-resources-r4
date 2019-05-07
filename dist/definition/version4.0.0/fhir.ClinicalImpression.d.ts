import { Element, Reference, CodeableConcept, Period, Extension, Identifier, Annotation, Meta, Narrative } from "./fhir._";
export interface ClinicalImpression {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for effectiveDateTime
     */
    _effectiveDateTime?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for protocol
     */
    _protocol?: Element[];
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for summary
     */
    _summary?: Element;
    /**
     * The clinician performing the assessment.
     */
    assessor?: Reference;
    /**
     * Categorizes the type of clinical assessment performed.
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ClinicalImpression[];
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed,
     * and what patient events/status prompted it.
     */
    description?: string;
    /**
     * The point in time or period over which the subject was assessed.
     */
    effectiveDateTime?: string;
    /**
     * The point in time or period over which the subject was assessed.
     */
    effectivePeriod?: Period;
    /**
     * The Encounter during which this ClinicalImpression was created or to which the creation
     * of this record is tightly associated.
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
     * Specific findings or diagnoses that were considered likely or relevant to ongoing
     * treatment.
     */
    finding?: ClinicalImpressionFinding[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this clinical impression by the performer or other
     * systems which remain constant as the resource is updated and propagates from server to
     * server.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of
     * investigations varies greatly depending on the type and context of the assessment. These
     * investigations may include data generated during the assessment process, or data
     * previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: ClinicalImpressionInvestigation[];
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
     * Commentary about the impression, typically recorded after the impression itself was made,
     * though supplemental notes by the original author could also appear.
     */
    note?: Annotation[];
    /**
     * A reference to the last assessment that was conducted on this patient. Assessments are
     * often/usually ongoing in nature; a care provider (practitioner or team) will make new
     * assessments on an ongoing basis as new data arises or the patient's conditions changes.
     */
    previous?: Reference;
    /**
     * A list of the relevant problems/conditions for a patient.
     */
    problem?: Reference[];
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: CodeableConcept[];
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: Reference[];
    /**
     * Reference to a specific published clinical protocol that was followed during this
     * assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[];
    /**
     * This is a ClinicalImpression resource
     */
    resourceType?: any;
    /**
     * Identifies the workflow status of the assessment.
     */
    status?: string;
    /**
     * Captures the reason for the current state of the ClinicalImpression.
     */
    statusReason?: CodeableConcept;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject?: Reference;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: Reference[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the
 * patient and before planning the treatments or management strategies that are best to
 * manage a patient's condition. Assessments are often 1:1 with a clinical consultation /
 * encounter,  but this varies greatly depending on the clinical workflow. This resource is
 * called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the
 * recording of assessment tools such as Apgar score.
 */
export interface ClinicalImpressionFinding {
    /**
     * Extensions for basis
     */
    _basis?: Element;
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string;
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
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved
     * conditions.
     */
    itemCodeableConcept?: CodeableConcept;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved
     * conditions.
     */
    itemReference?: Reference;
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
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the
 * patient and before planning the treatments or management strategies that are best to
 * manage a patient's condition. Assessments are often 1:1 with a clinical consultation /
 * encounter,  but this varies greatly depending on the clinical workflow. This resource is
 * called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the
 * recording of assessment tools such as Apgar score.
 */
export interface ClinicalImpressionInvestigation {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something
     * like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and
     * others such groups such as (exposure|family|travel|nutritional) history may be used.
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
     * A record of a specific investigation that was undertaken.
     */
    item?: Reference[];
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
}
