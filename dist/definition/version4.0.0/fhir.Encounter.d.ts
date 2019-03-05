import { Element, Reference, Coding, Extension, Identifier, Duration, Meta, Period, CodeableConcept, Narrative } from "./fhir._";
export interface Encounter {
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
     * The set of accounts that may be used for billing for this Encounter.
     */
    account?: Reference[];
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: Reference[];
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: Reference[];
    /**
     * Concepts representing classification of patient encounter such as ambulatory
     * (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class?: Coding;
    /**
     * The class history permits the tracking of the encounters transitions without needing to
     * go  through the resource history.  This would be used for a case where an admission
     * starts of as an emergency encounter, then transitions into an inpatient scenario. Doing
     * this and not restarting a new encounter ensures that any lab/diagnostic results can more
     * easily follow the patient and not require re-processing and not get lost or cancelled
     * during a kind of discharge from emergency to inpatient.
     */
    classHistory?: EncounterClassHistory[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Encounter[];
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: EncounterDiagnosis[];
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of
     * care this field should be used. This association can facilitate grouping of related
     * encounters together for a specific purpose, such as government reporting, issue tracking,
     * association via a common problem.  The association is recorded on the encounter as these
     * are typically created after the episode of care and grouped on entry rather than editing
     * the episode of care to append another encounter to it (the episode of care could span
     * years).
     */
    episodeOfCare?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Details about the admission to a healthcare service.
     */
    hospitalization?: EncounterHospitalization;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifier(s) by which this encounter is known.
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
     * Quantity of time the encounter lasted. This excludes the time during leaves of absence.
     */
    length?: Duration;
    /**
     * List of locations where  the patient has been during this encounter.
     */
    location?: EncounterLocation[];
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
     * The list of people responsible for providing the service.
     */
    participant?: EncounterParticipant[];
    /**
     * Another Encounter of which this encounter is a part of (administratively or in time).
     */
    partOf?: Reference;
    /**
     * The start and end time of the encounter.
     */
    period?: Period;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: CodeableConcept;
    /**
     * Reason the encounter takes place, expressed as a code. For admissions, this can be used
     * for a coded admission diagnosis.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Reason the encounter takes place, expressed as a code. For admissions, this can be used
     * for a coded admission diagnosis.
     */
    reasonReference?: Reference[];
    /**
     * This is a Encounter resource
     */
    resourceType?: any;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be
     * the same as the organization on the Patient record, however it could be different, such
     * as if the actor performing the services was from an external organization (which may be
     * billed seperately) for an external consultation.  Refer to the example bundle showing an
     * abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: Reference;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: CodeableConcept;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status?: EncounterStatus;
    /**
     * The status history permits the encounter resource to contain the status history without
     * needing to read through the historical versions of the resource, or even have the server
     * store them.
     */
    statusHistory?: EncounterStatusHistory[];
    /**
     * The patient or group present at the encounter.
     */
    subject?: Reference;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing,
     * rehabilitation).
     */
    type?: CodeableConcept[];
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing
 * healthcare service(s) or assessing the health status of a patient.
 */
export interface EncounterClassHistory {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class?: Coding;
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
     * The time that the episode was in the specified class.
     */
    period?: Period;
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing
 * healthcare service(s) or assessing the health status of a patient.
 */
export interface EncounterDiagnosis {
    /**
     * Extensions for rank
     */
    _rank?: Element;
    /**
     * Reason the encounter takes place, as specified using information from another resource.
     * For admissions, this is the admission diagnosis. The indication will typically be a
     * Condition (with other resources referenced in the evidence.detail), or a Procedure.
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
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: CodeableConcept;
}
/**
 * Details about the admission to a healthcare service.
 *
 * An interaction between a patient and healthcare provider(s) for the purpose of providing
 * healthcare service(s) or assessing the health status of a patient.
 */
export interface EncounterHospitalization {
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: CodeableConcept;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: Reference;
    /**
     * Diet preferences reported by the patient.
     */
    dietPreference?: CodeableConcept[];
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: CodeableConcept;
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
     * The location/organization from which the patient came before admission.
     */
    origin?: Reference;
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: Identifier;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: CodeableConcept;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the
     * provision of specific equipment or other things.
     */
    specialArrangement?: CodeableConcept[];
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: CodeableConcept[];
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing
 * healthcare service(s) or assessing the health status of a patient.
 */
export interface EncounterLocation {
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
     * The location where the encounter takes place.
     */
    location?: Reference;
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
     * Time period during which the patient was present at the location.
     */
    period?: Period;
    /**
     * This will be used to specify the required levels (bed/ward/room/etc.) desired to be
     * recorded to simplify either messaging or query.
     */
    physicalType?: CodeableConcept;
    /**
     * The status of the participants' presence at the specified location during the period
     * specified. If the participant is no longer at the location, then the period will have an
     * end date/time.
     */
    status?: EncounterLocationStatus;
}
/**
 * The status of the participants' presence at the specified location during the period
 * specified. If the participant is no longer at the location, then the period will have an
 * end date/time.
 */
export declare enum EncounterLocationStatus {
    Active = "active",
    Completed = "completed",
    Planned = "planned",
    Reserved = "reserved"
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing
 * healthcare service(s) or assessing the health status of a patient.
 */
export interface EncounterParticipant {
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
     * Persons involved in the encounter other than the patient.
     */
    individual?: Reference;
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
     * The period of time that the specified participant participated in the encounter. These
     * can overlap or be sub-sets of the overall encounter's period.
     */
    period?: Period;
    /**
     * Role of participant in encounter.
     */
    type?: CodeableConcept[];
}
/**
 * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
 */
export declare enum EncounterStatus {
    Arrived = "arrived",
    Cancelled = "cancelled",
    EnteredInError = "entered-in-error",
    Finished = "finished",
    InProgress = "in-progress",
    Onleave = "onleave",
    Planned = "planned",
    Triaged = "triaged",
    Unknown = "unknown"
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing
 * healthcare service(s) or assessing the health status of a patient.
 */
export interface EncounterStatusHistory {
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
     * The time that the episode was in the specified status.
     */
    period?: Period;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status?: EncounterStatus;
}
