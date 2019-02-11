import { Element, Money, Extension, Identifier, Meta, Reference, CodeableConcept, Narrative } from "./fhir._";
export interface PaymentNotice {
    /**
     * Extensions for created
     */
    _created?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for paymentDate
     */
    _paymentDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * The amount sent to the payee.
     */
    amount: any[] | boolean | Money | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | PaymentNotice | number | null | string>;
    /**
     * The date when this resource was created.
     */
    created?: string;
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
     * A unique identifier assigned to this payment notice.
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
     * The party who will receive or has received payment that is the subject of this
     * notification.
     */
    payee?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: any[] | boolean | Reference | number | number | null | string;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: string;
    /**
     * A code indicating whether payment has been sent or cleared.
     */
    paymentStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The party who is notified of the payment status.
     */
    recipient: any[] | boolean | Reference | number | number | null | string;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a PaymentNotice resource
     */
    resourceType: any;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The status of the resource instance.
     */
    status?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
