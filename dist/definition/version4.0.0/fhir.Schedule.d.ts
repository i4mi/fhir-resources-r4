import { Element, Reference, Extension, Identifier, Meta, Period, CodeableConcept, Narrative } from "./fhir._";
export interface Schedule {
    /**
     * Extensions for active
     */
    _active?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether this schedule record is in active use or should not be used (such as was entered
     * in error).
     */
    active?: boolean;
    /**
     * Slots that reference this schedule resource provide the availability details to these
     * referenced resource(s).
     */
    actor: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Comments on the availability to describe any extended information. Such as custom
     * constraints on the slots that may be associated.
     */
    comment?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Schedule | number | null | string>;
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
     * The period of time that the slots that reference this Schedule resource cover (even if
     * none exist). These  cover the amount of time that an organization's planning horizon; the
     * interval for which they are currently accepting appointments. This does not define a
     * "template" for planning outside these dates.
     */
    planningHorizon?: any[] | boolean | Period | number | number | null | string;
    /**
     * This is a Schedule resource
     */
    resourceType: any;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The specialty of a practitioner that would be required to perform the service requested
     * in this appointment.
     */
    specialty?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
