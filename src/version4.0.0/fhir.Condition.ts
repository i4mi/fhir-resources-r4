import { Element,
         Age, 
         Period,
         Reference,
         CodeableConcept,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirCondition } from "./file";
//
//   const fhirCondition = Convert.toFhirCondition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Condition {
    /**
     * Extensions for abatementDateTime
     */
    _abatementDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for abatementString
     */
    _abatementString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
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
     * The date or estimated date that the condition resolved or went into remission. This is
     * called "abatement" because of the many overloaded connotations associated with
     * "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is
     * called "abatement" because of the many overloaded connotations associated with
     * "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementDateTime?: string;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is
     * called "abatement" because of the many overloaded connotations associated with
     * "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is
     * called "abatement" because of the many overloaded connotations associated with
     * "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is
     * called "abatement" because of the many overloaded connotations associated with
     * "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementString?: string;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The anatomical location where this condition manifests itself.
     */
    bodySite?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A category assigned to the condition.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The clinical status of the condition.
     */
    clinicalStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Condition | number | null | string>;
    /**
     * The Encounter during which this Condition was created or to which the creation of this
     * record is tightly associated.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Supporting evidence / manifestations that are the basis of the Condition's verification
     * status, such as evidence that confirmed or refuted the condition.
     */
    evidence?: Array<any[] | boolean | ConditionEvidence | number | number | null | string>;
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
     * Business identifiers assigned to this condition by the performer or other systems which
     * remain constant as the resource is updated and propagates from server to server.
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
     * Additional information about the Condition. This is a general notes/comments entry  for
     * description of the Condition, its diagnosis and prognosis.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the
     * clinician.
     */
    onsetAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the
     * clinician.
     */
    onsetDateTime?: string;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the
     * clinician.
     */
    onsetPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the
     * clinician.
     */
    onsetRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the
     * clinician.
     */
    onsetString?: string;
    /**
     * The recordedDate represents when this particular Condition record was created in the
     * system, which is often a system-generated date.
     */
    recordedDate?: string;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a Condition resource
     */
    resourceType: any;
    /**
     * A subjective assessment of the severity of the condition as evaluated by the clinician.
     */
    severity?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: Array<any[] | boolean | ConditionStage | number | number | null | string>;
    /**
     * Indicates the patient or group who the condition record is associated with.
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
    /**
     * The verification status to support the clinical status of the condition.
     */
    verificationStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ConditionEvidence {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: Array<any[] | boolean | Reference | number | number | null | string>;
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
}

export interface ConditionStage {
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * A simple summary of the stage such as "Stage 3". The determination of the stage is
     * disease-specific.
     */
    summary?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The kind of staging, such as pathological or clinical staging.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}