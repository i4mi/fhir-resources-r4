import { Element,
         CodeableConcept, 
         ContactDetail,
         Reference,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Period,
         RelatedArtifact,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirResearchStudy } from "./file";
//
//   const fhirResearchStudy = Convert.toFhirResearchStudy(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ResearchStudy {
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
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g.
     * Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: Array<any[] | boolean | ResearchStudyArm | number | number | null | string>;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of
     * blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk
     * factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the
     * target condition code would be a Lupus SNOMED code.
     */
    condition?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ResearchStudy | number | null | string>;
    /**
     * A full description of how the study is being conducted.
     */
    description?: string;
    /**
     * Reference to a Group that defines the criteria for and quantity of subjects participating
     * in the study.  E.g. " 200 female Europeans between the ages of 20 and 45 with early onset
     * diabetes".
     */
    enrollment?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions
     * that the study is seeking to gain more information about.
     */
    focus?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be
     * answered by the analysis of data collected during the study.
     */
    objective?: Array<any[] | boolean | ResearchStudyObjective | number | number | null | string>;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for
     * the study.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in
     * clinical trials to post-market evaluation.
     */
    phase?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The type of study based upon the intent of the study's activities. A classification of
     * the intent of the study.
     */
    primaryPurposeType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept
     * development, protocol writing, protocol submission for IRB approval, participant
     * recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * This is a ResearchStudy resource
     */
    resourceType: any;
    /**
     * A facility in which study activities are conducted.
     */
    site?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The current state of the study.
     */
    status?: FhirResearchStudyStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: string;
}

export interface ResearchStudyArm {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * A succinct description of the path through the study that would be followed by a subject
     * adhering to this arm.
     */
    description?: string;
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
     * Unique, human-readable label for this arm of the study.
     */
    name?: string;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ResearchStudyObjective {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
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
     * Unique, human-readable label for this objective of the study.
     */
    name?: string;
    /**
     * The kind of study objective.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

/**
 * The current state of the study.
 */
export enum FhirResearchStudyStatus {
    Active = "active",
    AdministrativelyCompleted = "administratively-completed",
    Approved = "approved",
    ClosedToAccrual = "closed-to-accrual",
    ClosedToAccrualAndIntervention = "closed-to-accrual-and-intervention",
    Completed = "completed",
    Disapproved = "disapproved",
    InReview = "in-review",
    TemporarilyClosedToAccrual = "temporarily-closed-to-accrual",
    TemporarilyClosedToAccrualAndIntervention = "temporarily-closed-to-accrual-and-intervention",
    Withdrawn = "withdrawn",
}