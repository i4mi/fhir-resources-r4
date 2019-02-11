import { Element, CodeableConcept, Extension, Identifier, Meta, Reference, Narrative } from "./fhir._";
export interface Slot {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for end
     */
    _end?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for overbooked
     */
    _overbooked?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for start
     */
    _start?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on
     * the slot.
     */
    comment?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Slot | number | null | string>;
    /**
     * Date/Time that the slot is to conclude.
     */
    end?: string;
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
     * External Ids for this item.
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
     * This slot has already been overbooked, appointments are unlikely to be accepted for this
     * time.
     */
    overbooked?: boolean;
    /**
     * This is a Slot resource
     */
    resourceType: any;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: any[] | boolean | Reference | number | number | null | string;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an
     * identifiable service - which is at a location, rather than the location itself). If
     * provided then this overrides the value provided on the availability resource.
     */
    serviceType?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The specialty of a practitioner that would be required to perform the service requested
     * in this appointment.
     */
    specialty?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Date/Time that the slot is to begin.
     */
    start?: string;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status?: FhirSlotStatus;
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
 * busy | free | busy-unavailable | busy-tentative | entered-in-error.
 */
export declare enum FhirSlotStatus {
    Busy = "busy",
    BusyTentative = "busy-tentative",
    BusyUnavailable = "busy-unavailable",
    EnteredInError = "entered-in-error",
    Free = "free"
}
