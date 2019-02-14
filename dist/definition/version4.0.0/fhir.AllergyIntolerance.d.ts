import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Annotation, Age, Period, Range, Narrative } from './fhir._';
export interface AllergyIntolerance {
    /**
     * Extensions for category
     */
    _category?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for criticality
     */
    _criticality?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastOccurrence
     */
    _lastOccurrence?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for onsetDateTime
     */
    _onsetDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for onsetString
     */
    _onsetString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for recordedDate
     */
    _recordedDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * The source of the information about the allergy that is recorded.
     */
    asserter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Category of the identified substance.
     */
    category?: Category[];
    /**
     * The clinical status of the allergy or intolerance.
     */
    clinicalStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Code for an allergy or intolerance statement (either a positive or a negated/excluded
     * statement).  This may be a code for a substance or pharmaceutical product that is
     * considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or
     * intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific
     * substance or  (e.g., "No latex allergy") or a general or categorical negated
     * statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance
     * for a specific reaction may be different from the substance identified as the cause of
     * the risk, but it must be consistent with it. For instance, it may be a more specific
     * substance (e.g. a brand medication) or a composite product that includes the identified
     * substance. It must be clinically safe to only process the 'code' and ignore the
     * 'reaction.substance'.  If a receiving system is unable to confirm that
     * AllergyIntolerance.reaction.substance falls within the semantic scope of
     * AllergyIntolerance.code, then the receiving system should ignore
     * AllergyIntolerance.reaction.substance.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | AllergyIntolerance | number | null | string>;
    /**
     * Estimate of the potential clinical harm, or seriousness, of the reaction to the
     * identified substance.
     */
    criticality?: Criticality;
    /**
     * The encounter when the allergy or intolerance was asserted.
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
     * Business identifiers assigned to this AllergyIntolerance by the performer or other
     * systems which remain constant as the resource is updated and propagates from server to
     * server.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
     * Represents the date and/or time of the last known occurrence of a reaction event.
     */
    lastOccurrence?: string;
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
     * Additional narrative about the propensity for the Adverse Reaction, not captured in other
     * fields.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetDateTime?: string;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetString?: string;
    /**
     * The patient who has the allergy or intolerance.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * Details about each adverse reaction event linked to exposure to the identified substance.
     */
    reaction?: Array<any[] | boolean | AllergyIntoleranceReaction | number | number | null | string>;
    /**
     * The recordedDate represents when this particular AllergyIntolerance record was created in
     * the system, which is often a system-generated date.
     */
    recordedDate?: string;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a AllergyIntolerance resource
     */
    resourceType: any;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Identification of the underlying physiological mechanism for the reaction risk.
     */
    type?: FhirSchemaAllergyIntoleranceType;
    /**
     * Assertion about certainty associated with the propensity, or potential risk, of a
     * reaction to the identified substance (including pharmaceutical product).
     */
    verificationStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export declare enum Category {
    Biologic = "biologic",
    Environment = "environment",
    Food = "food",
    Medication = "medication"
}
/**
 * Estimate of the potential clinical harm, or seriousness, of the reaction to the
 * identified substance.
 */
export declare enum Criticality {
    High = "high",
    Low = "low",
    UnableToAssess = "unable-to-assess"
}
export interface AllergyIntoleranceReaction {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for onset
     */
    _onset?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for severity
     */
    _severity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Text description about the reaction as a whole, including details of the manifestation if
     * required.
     */
    description?: string;
    /**
     * Identification of the route by which the subject was exposed to the substance.
     */
    exposureRoute?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Clinical symptoms and/or signs that are observed or associated with the adverse reaction
     * event.
     */
    manifestation: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Additional text about the adverse reaction event not captured in other fields.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Record of the date and/or time of the onset of the Reaction.
     */
    onset?: string;
    /**
     * Clinical assessment of the severity of the reaction event as a whole, potentially
     * considering multiple different manifestations.
     */
    severity?: Severity;
    /**
     * Identification of the specific substance (or pharmaceutical product) considered to be
     * responsible for the Adverse Reaction event. Note: the substance for a specific reaction
     * may be different from the substance identified as the cause of the risk, but it must be
     * consistent with it. For instance, it may be a more specific substance (e.g. a brand
     * medication) or a composite product that includes the identified substance. It must be
     * clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a
     * receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls
     * within the semantic scope of AllergyIntolerance.code, then the receiving system should
     * ignore AllergyIntolerance.reaction.substance.
     */
    substance?: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * Clinical assessment of the severity of the reaction event as a whole, potentially
 * considering multiple different manifestations.
 */
export declare enum Severity {
    Mild = "mild",
    Moderate = "moderate",
    Severe = "severe"
}
/**
 * Identification of the underlying physiological mechanism for the reaction risk.
 */
export declare enum FhirSchemaAllergyIntoleranceType {
    Allergy = "allergy",
    Intolerance = "intolerance"
}
