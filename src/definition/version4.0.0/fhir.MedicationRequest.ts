import {
    Element,
    Reference,
    CodeableConcept,
    Dosage,
    Extension,
    Identifier,
    Meta,
    Annotation,
    Narrative,
    Duration,
    Quantity,
    Period
} from "./fhir._";

export interface MedicationRequest {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: Element;
    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for instantiatesCanonical
     */
    _instantiatesCanonical?: Element[];
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element[];
    /**
     * Extensions for intent
     */
    _intent?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for priority
     */
    _priority?: Element;
    /**
     * Extensions for reportedBoolean
     */
    _reportedBoolean?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: string;
    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn?: Reference[];
    /**
     * Indicates the type of medication request (for example, where the medication is expected
     * to be consumed or administered (i.e. inpatient or outpatient)).
     */
    category?: CodeableConcept[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: MedicationRequest[];
    /**
     * The description of the overall patte3rn of the administration of the medication to the
     * patient.
     */
    courseOfTherapyType?: CodeableConcept;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or
     * proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy,
     * dosage alert etc.
     */
    detectedIssue?: Reference[];
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication
     * request (also known as a Medication Prescription or Medication Order).  Note that this
     * information is not always sent with the order.  There may be in some settings (e.g.
     * hospitals) institutional or system support for completing the dispense details in the
     * pharmacy department.
     */
    dispenseRequest?: MedicationRequestDispenseRequest;
    /**
     * If true indicates that the provider is asking for the medication request not to occur.
     */
    doNotPerform?: boolean;
    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: Dosage[];
    /**
     * The Encounter during which this [x] was created or to which the creation of this record
     * is tightly associated.
     */
    encounter?: Reference;
    /**
     * Links to Provenance records for past versions of this resource or fulfilling request or
     * event resources that identify key state transitions or updates that are likely to be
     * relevant to a user looking at the current version of the resource.
     */
    eventHistory?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A shared identifier common to all requests that were authorized more or less
     * simultaneously by a single author, representing the identifier of the requisition or
     * prescription.
     */
    groupIdentifier?: Identifier;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifiers associated with this medication request that are defined by business
     * processes and/or used to refer to it when a direct URL reference to the resource itself
     * is not appropriate. They are business identifiers assigned to this resource by the
     * performer or other systems and remain constant as the resource is updated and propagates
     * from server to server.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered
     * to in whole or in part by this MedicationRequest.
     */
    instantiatesCanonical?: string[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other
     * definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesUri?: string[];
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that
     * may be required for delivering the requested service.
     */
    insurance?: Reference[];
    /**
     * Whether the request is a proposal, plan, or an original order.
     */
    intent?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Identifies the medication being requested. This is a link to a resource that represents
     * the medication which may be the details of the medication or simply an attribute carrying
     * a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: CodeableConcept;
    /**
     * Identifies the medication being requested. This is a link to a resource that represents
     * the medication which may be the details of the medication or simply an attribute carrying
     * a code that identifies the medication from a known list of medications.
     */
    medicationReference?: Reference;
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
     * Extra information about the prescription that could not be conveyed by the other
     * attributes.
     */
    note?: Annotation[];
    /**
     * The specified desired performer of the medication treatment (e.g. the performer of the
     * medication administration).
     */
    performer?: Reference;
    /**
     * Indicates the type of performer of the administration of the medication.
     */
    performerType?: CodeableConcept;
    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other
     * requests.
     */
    priority?: string;
    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: Reference;
    /**
     * The reason or the indication for ordering or not ordering the medication.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Condition or observation that supports why the medication was ordered.
     */
    reasonReference?: Reference[];
    /**
     * The person who entered the order on behalf of another individual for example in the case
     * of a verbal or a telephone order.
     */
    recorder?: Reference;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an
     * original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedBoolean?: boolean;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an
     * original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedReference?: Reference;
    /**
     * The individual, organization, or device that initiated the request and has responsibility
     * for its activation.
     */
    requester?: Reference;
    /**
     * This is a MedicationRequest resource
     */
    resourceType?: any;
    /**
     * A code specifying the current state of the order.  Generally, this will be active or
     * completed state.
     */
    status?: string;
    /**
     * Captures the reason for the current state of the MedicationRequest.
     */
    statusReason?: CodeableConcept;
    /**
     * A link to a resource representing the person or set of individuals to whom the medication
     * will be given.
     */
    subject?: Reference;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some
     * cases, substitution must happen, in other cases substitution must not happen. This block
     * explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: MedicationRequestSubstitution;
    /**
     * Include additional information (for example, patient height and weight) that supports the
     * ordering of the medication.
     */
    supportingInformation?: Reference[];
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
 * Indicates the specific details for the dispense or medication supply part of a medication
 * request (also known as a Medication Prescription or Medication Order).  Note that this
 * information is not always sent with the order.  There may be in some settings (e.g.
 * hospitals) institutional or system support for completing the dispense details in the
 * pharmacy department.
 *
 * An order or request for both supply of the medication and the instructions for
 * administration of the medication to a patient. The resource is called "MedicationRequest"
 * rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across
 * inpatient and outpatient settings, including care plans, etc., and to harmonize with
 * workflow patterns.
 */
export interface MedicationRequestDispenseRequest {
    /**
     * Extensions for numberOfRepeatsAllowed
     */
    _numberOfRepeatsAllowed?: Element;
    /**
     * The minimum period of time that must occur between dispenses of the medication.
     */
    dispenseInterval?: Duration;
    /**
     * Identifies the period time over which the supplied product is expected to be used, or the
     * length of time the dispense is expected to last.
     */
    expectedSupplyDuration?: Duration;
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
     * Indicates the quantity or duration for the first dispense of the medication.
     */
    initialFill?: MedicationRequestInitialFill;
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
     * An integer indicating the number of times, in addition to the original dispense, (aka
     * refills or repeats) that the patient can receive the prescribed medication. Usage Notes:
     * This integer does not include the original order dispense. This means that if an order
     * indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total
     * of 4 times and the patient can receive a total of 120 tablets.  A prescriber may
     * explicitly say that zero refills are permitted after the initial dispense.
     */
    numberOfRepeatsAllowed?: number;
    /**
     * Indicates the intended dispensing Organization specified by the prescriber.
     */
    performer?: Reference;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: Quantity;
    /**
     * This indicates the validity period of a prescription (stale dating the Prescription).
     */
    validityPeriod?: Period;
}

/**
 * Indicates the quantity or duration for the first dispense of the medication.
 *
 * An order or request for both supply of the medication and the instructions for
 * administration of the medication to a patient. The resource is called "MedicationRequest"
 * rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across
 * inpatient and outpatient settings, including care plans, etc., and to harmonize with
 * workflow patterns.
 */
export interface MedicationRequestInitialFill {
    /**
     * The length of time that the first dispense is expected to last.
     */
    duration?: Duration;
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
     * The amount or quantity to provide as part of the first dispense.
     */
    quantity?: Quantity;
}

/**
 * Indicates whether or not substitution can or should be part of the dispense. In some
 * cases, substitution must happen, in other cases substitution must not happen. This block
 * explains the prescriber's intent. If nothing is specified substitution may be done.
 *
 * An order or request for both supply of the medication and the instructions for
 * administration of the medication to a patient. The resource is called "MedicationRequest"
 * rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across
 * inpatient and outpatient settings, including care plans, etc., and to harmonize with
 * workflow patterns.
 */
export interface MedicationRequestSubstitution {
    /**
     * Extensions for allowedBoolean
     */
    _allowedBoolean?: Element;
    /**
     * True if the prescriber allows a different drug to be dispensed from what was prescribed.
     */
    allowedBoolean?: boolean;
    /**
     * True if the prescriber allows a different drug to be dispensed from what was prescribed.
     */
    allowedCodeableConcept?: CodeableConcept;
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
     * Indicates the reason for the substitution, or why substitution must or must not be
     * performed.
     */
    reason?: CodeableConcept;
}