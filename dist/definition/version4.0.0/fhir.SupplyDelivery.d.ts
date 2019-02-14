import { Element, Reference, Extension, Identifier, Meta, Period, Timing, Narrative, CodeableConcept, Quantity } from "./fhir._";
export interface SupplyDelivery {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | SupplyDelivery | number | null | string>;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the
     * dispense event.
     */
    destination?: any[] | boolean | Reference | number | number | null | string;
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
     * Identifier for the supply delivery event that is used to identify it across multiple
     * disparate systems.
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
     * The date or time(s) the activity occurred.
     */
    occurrenceDateTime?: string;
    /**
     * The date or time(s) the activity occurred.
     */
    occurrencePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The date or time(s) the activity occurred.
     */
    occurrenceTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a SupplyDelivery resource
     */
    resourceType: any;
    /**
     * A code specifying the state of the dispense event.
     */
    status?: FhirSupplyDeliveryStatus;
    /**
     * The item that is being delivered or has been supplied.
     */
    suppliedItem?: any[] | boolean | SupplyDeliverySuppliedItem | number | number | null | string;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill,
     * Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * A code specifying the state of the dispense event.
 */
export declare enum FhirSupplyDeliveryStatus {
    Abandoned = "abandoned",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    InProgress = "in-progress"
}
export interface SupplyDeliverySuppliedItem {
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
     * Identifies the medication, substance or device being dispensed. This is either a link to
     * a resource representing the details of the item or a code that identifies the item from a
     * known list.
     */
    itemCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to
     * a resource representing the details of the item or a code that identifies the item from a
     * known list.
     */
    itemReference?: any[] | boolean | Reference | number | number | null | string;
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
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
}
