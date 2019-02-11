import { Element, CodeableConcept, Reference, Period, Extension, Identifier, Meta, Annotation, Narrative, Quantity, Ratio } from "./fhir._";
export interface MedicationAdministration {
    /**
     * Extensions for effectiveDateTime
     */
    _effectiveDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instantiates
     */
    _instantiates?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicationAdministration | number | null | string>;
    /**
     * The visit, admission, or other contact between patient and health care provider during
     * which the medication administration was performed.
     */
    context?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The device used in administering the medication to the patient.  For example, a
     * particular infusion pump.
     */
    device?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: any[] | boolean | MedicationAdministrationDosage | number | number | null | string;
    /**
     * A specific date/time or interval of time during which the administration took place (or
     * did not take place, when the 'notGiven' attribute is true). For many administrations,
     * such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveDateTime?: string;
    /**
     * A specific date/time or interval of time during which the administration took place (or
     * did not take place, when the 'notGiven' attribute is true). For many administrations,
     * such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * A summary of the events of interest that have occurred, such as when the administration
     * was verified.
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
     * Identifiers associated with this Medication Administration that are defined by business
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
     * A protocol, guideline, orderset, or other definition that was adhered to in whole or in
     * part by this event.
     */
    instantiates?: string[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Identifies the medication that was administered. This is either a link to a resource
     * representing the details of the medication or a simple attribute carrying a code that
     * identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the medication that was administered. This is either a link to a resource
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
     * Extra information about the medication administration that is not conveyed by the other
     * attributes.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates who or what performed the medication administration and how they were involved.
     */
    performer?: Array<any[] | boolean | MedicationAdministrationPerformer | number | number | null | string>;
    /**
     * A code indicating why the medication was given.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Condition or observation that supports why the medication was administered.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The original request, instruction or authority to perform the administration.
     */
    request?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a MedicationAdministration resource
     */
    resourceType: any;
    /**
     * Will generally be set to show that the administration has been completed.  For some long
     * running administrations such as infusions, it is possible for an administration to be
     * started but not completed or it may be paused while some other process is under way.
     */
    status?: string;
    /**
     * A code indicating why the administration was not performed.
     */
    statusReason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * Additional information (for example, patient height and weight) that supports the
     * administration of the medication.
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
}
export interface MedicationAdministrationDosage {
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * The amount of the medication given at one administration event.   Use this value when the
     * administration is essentially an instantaneous event such as a swallowing a tablet or
     * giving an injection.
     */
    dose?: any[] | boolean | Quantity | number | number | null | string;
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
     * A coded value indicating the method by which the medication is intended to be or was
     * introduced into or on the body.  This attribute will most often NOT be populated.  It is
     * most commonly used for injections.  For example, Slow Push, Deep IV.
     */
    method?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Identifies the speed with which the medication was or will be introduced into the
     * patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May
     * also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:
     * 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Identifies the speed with which the medication was or will be introduced into the
     * patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May
     * also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:
     * 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic
     * agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A coded specification of the anatomic site where the medication first entered the body.
     * For example, "left arm".
     */
    site?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to
     * code. When coded dosage is present, the free text dosage may still be present for display
     * to humans.

The dosage instructions should reflect the dosage of the medication that was
     * administered.
     */
    text?: string;
}
export interface MedicationAdministrationPerformer {
    /**
     * Indicates who or what performed the medication administration.
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
     * Distinguishes the type of involvement of the performer in the medication administration.
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
