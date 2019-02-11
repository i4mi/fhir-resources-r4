import { Element, Reference, Extension, Identifier, Meta, Period, Narrative } from "./fhir._";
export interface ResearchSubject {
    /**
     * Extensions for actualArm
     */
    _actualArm?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for assignedArm
     */
    _assignedArm?: any[] | boolean | Element | number | number | null | string;
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
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: any[] | boolean | Reference | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ResearchSubject | number | null | string>;
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
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: any[] | boolean | Reference | number | number | null | string;
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
     * The dates the subject began and ended their participation in the study.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * This is a ResearchSubject resource
     */
    resourceType: any;
    /**
     * The current state of the subject.
     */
    status?: FhirResearchSubjectStatus;
    /**
     * Reference to the study the subject is participating in.
     */
    study: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
/**
 * The current state of the subject.
 */
export declare enum FhirResearchSubjectStatus {
    Candidate = "candidate",
    Eligible = "eligible",
    FollowUp = "follow-up",
    Ineligible = "ineligible",
    NotRegistered = "not-registered",
    OffStudy = "off-study",
    OnStudy = "on-study",
    OnStudyIntervention = "on-study-intervention",
    OnStudyObservation = "on-study-observation",
    PendingOnStudy = "pending-on-study",
    PotentialCandidate = "potential-candidate",
    Screening = "screening",
    Withdrawn = "withdrawn"
}
