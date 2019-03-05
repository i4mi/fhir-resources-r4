import {
    Element,
    Reference,
    Extension,
    Identifier,
    Meta,
    Period,
    Narrative,
    CodeableConcept
} from "./fhir._";

export interface EpisodeOfCare {
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
     * The set of accounts that may be used for billing for this EpisodeOfCare.
     */
    account?: Reference[];
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: Reference;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: EpisodeOfCare[];
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: EpisodeOfCareDiagnosis[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use,
     * such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: Identifier[];
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
     * The organization that has assumed the specific responsibilities for the specified
     * duration.
     */
    managingOrganization?: Reference;
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
     * The patient who is the focus of this episode of care.
     */
    patient?: Reference;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: Period;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: Reference[];
    /**
     * This is a EpisodeOfCare resource
     */
    resourceType?: any;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status?: EpisodeOfCareStatus;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring
     * processing the history of the resource).
     */
    statusHistory?: EpisodeOfCareStatusHistory[];
    /**
     * The list of practitioners that may be facilitating this episode of care for specific
     * purposes.
     */
    team?: Reference[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A classification of the type of episode of care; e.g. specialist referral, disease
     * management, type of funded care.
     */
    type?: CodeableConcept[];
}

/**
 * An association between a patient and an organization / healthcare provider(s) during
 * which time encounters may occur. The managing organization assumes a level of
 * responsibility for the patient during this time.
 */
export interface EpisodeOfCareDiagnosis {
    /**
     * Extensions for rank
     */
    _rank?: Element;
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be
     * providing care for.
     */
    condition?: Reference;
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
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing,
     * discharge …).
     */
    role?: CodeableConcept;
}

/**
 * planned | waitlist | active | onhold | finished | cancelled.
 */
export enum EpisodeOfCareStatus {
    Active = "active",
    Cancelled = "cancelled",
    EnteredInError = "entered-in-error",
    Finished = "finished",
    Onhold = "onhold",
    Planned = "planned",
    Waitlist = "waitlist",
}

/**
 * An association between a patient and an organization / healthcare provider(s) during
 * which time encounters may occur. The managing organization assumes a level of
 * responsibility for the patient during this time.
 */
export interface EpisodeOfCareStatusHistory {
    /**
     * Extensions for status
     */
    _status?: Element;
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
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period?: Period;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status?: EpisodeOfCareStatus;
}