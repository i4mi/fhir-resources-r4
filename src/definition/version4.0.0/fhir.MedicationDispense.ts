import { Element,
         Reference, 
         CodeableConcept,
         Quantity,
         Dosage,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirMedicationDispense } from "./file";
//
//   const fhirMedicationDispense = Convert.toFhirMedicationDispense(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MedicationDispense {
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
     * Extensions for whenHandedOver
     */
    _whenHandedOver?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for whenPrepared
     */
    _whenPrepared?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicates the medication order that is being dispensed against.
     */
    authorizingPrescription?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates the type of medication dispense (for example, where the medication is expected
     * to be consumed or administered (i.e. inpatient or outpatient)).
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicationDispense | number | null | string>;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of
     * the dispense event.
     */
    destination?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates an actual or potential clinical issue with or between one or more active or
     * proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy,
     * dosage alert etc.
     */
    detectedIssue?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates how the medication is to be used by the patient.
     */
    dosageInstruction?: Array<any[] | boolean | Dosage | number | number | null | string>;
    /**
     * A summary of the events of interest that have occurred, such as when the dispense was
     * verified.
     */
    eventHistory?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Identifiers associated with this Medication Dispense that are defined by business
     * processes and/or used to refer to it when a direct URL reference to the resource itself
     * is not appropriate. They are business identifiers assigned to this resource by the
     * performer or other systems and remain constant as the resource is updated and propagates
     * from server to server.
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
     * The principal physical location where the dispense was performed.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the medication being administered. This is either a link to a resource
     * representing the details of the medication or a simple attribute carrying a code that
     * identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the medication being administered. This is either a link to a resource
     * representing the details of the medication or a simple attribute carrying a code that
     * identifies the medication from a known list of medications.
     */
    medicationReference?: any[] | boolean | Reference | number | number | null | string;
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
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * The procedure that trigger the dispense.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates who or what performed the event.
     */
    performer?: Array<any[] | boolean | MedicationDispensePerformer | number | number | null | string>;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or
     * their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a MedicationDispense resource
     */
    resourceType: any;
    /**
     * A code specifying the state of the set of dispense events.
     */
    status?: string;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    statusReasonCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    statusReasonReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A link to a resource representing the person or the group to whom the medication will be
     * given.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases,
     * substitution will be expected but does not happen, in other cases substitution is not
     * expected but does happen.  This block explains what substitution did or did not happen
     * and why.  If nothing is specified, substitution was not done.
     */
    substitution?: any[] | boolean | MedicationDispenseSubstitution | number | number | null | string;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill,
     * Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: string;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: string;
}

export interface MedicationDispensePerformer {
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the
     * actor is the dispenser of the medication.
     */
    actor: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Distinguishes the type of performer in the dispense.  For example, date enterer,
     * packager, final checker.
     */
    function?: any[] | boolean | CodeableConcept | number | number | null | string;
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

export interface MedicationDispenseSubstitution {
    /**
     * Extensions for wasSubstituted
     */
    _wasSubstituted?: any[] | boolean | Element | number | number | null | string;
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
     * Indicates the reason for the substitution (or lack of substitution) from what was
     * prescribed.
     */
    reason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted?: boolean;
}