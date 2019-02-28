import {
    Element,
    CodeableConcept,
    Reference,
    Extension,
    Identifier,
    Meta,
    Annotation,
    Period,
    ContactPoint,
    Narrative
} from "./fhir._";

export interface CareTeam {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Identifies what kind of team.  This is to support differentiation between multiple
     * co-existing teams, such as care plan team, episode of care team, longitudinal care team.
     */
    category?: CodeableConcept[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: CareTeam[];
    /**
     * The Encounter during which this CareTeam was created or to which the creation of this
     * record is tightly associated.
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
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this care team by the performer or other systems which
     * remain constant as the resource is updated and propagates from server to server.
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
     * The organization responsible for the care team.
     */
    managingOrganization?: Reference[];
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
     * A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green"
     * trauma teams.
     */
    name?: string;
    /**
     * Comments made about the CareTeam.
     */
    note?: Annotation[];
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: CareTeamParticipant[];
    /**
     * Indicates when the team did (or is intended to) come into effect and end.
     */
    period?: Period;
    /**
     * Describes why the care team exists.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Condition(s) that this care team addresses.
     */
    reasonReference?: Reference[];
    /**
     * This is a CareTeam resource
     */
    resourceType?: any;
    /**
     * Indicates the current state of the care team.
     */
    status?: CareTeamStatus;
    /**
     * Identifies the patient or group whose intended care is handled by the team.
     */
    subject?: Reference;
    /**
     * A central contact detail for the care team (that applies to all members).
     */
    telecom?: ContactPoint[];
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
 * The Care Team includes all the people and organizations who plan to participate in the
 * coordination and delivery of care for a patient.
 */
export interface CareTeamParticipant {
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
     * The specific person or organization who is participating/expected to participate in the
     * care team.
     */
    member?: Reference;
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
     * The organization of the practitioner.
     */
    onBehalfOf?: Reference;
    /**
     * Indicates when the specific member or organization did (or is intended to) come into
     * effect and end.
     */
    period?: Period;
    /**
     * Indicates specific responsibility of an individual within the care team, such as "Primary
     * care physician", "Trained social worker counselor", "Caregiver", etc.
     */
    role?: CodeableConcept[];
}

/**
 * Indicates the current state of the care team.
 */
export enum CareTeamStatus {
    Active = "active",
    EnteredInError = "entered-in-error",
    Inactive = "inactive",
    Proposed = "proposed",
    Suspended = "suspended",
}