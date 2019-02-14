import { Element, Extension, CodeableConcept, Identifier, Meta, Money, Reference, Period, Narrative } from "./fhir._";
export interface PaymentReconciliation {
    /**
     * Extensions for created
     */
    _created?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for disposition
     */
    _disposition?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for outcome
     */
    _outcome?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for paymentDate
     */
    _paymentDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | PaymentReconciliation | number | null | string>;
    /**
     * The date when the resource was created.
     */
    created?: string;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: Array<any[] | boolean | PaymentReconciliationDetail | number | number | null | string>;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A code for the form to be used for printing the content.
     */
    formCode?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this payment reconciliation.
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
     * The outcome of a request for a reconciliation.
     */
    outcome?: Outcome;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: any[] | boolean | Money | number | number | null | string;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate?: string;
    /**
     * Issuer's unique identifier for the payment instrument.
     */
    paymentIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The party who generated the payment.
     */
    paymentIssuer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The period of time for which payments have been gathered into this bulk payment for
     * settlement.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: Array<any[] | boolean | PaymentReconciliationProcessNote | number | number | null | string>;
    /**
     * Original request resource reference.
     */
    request?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a PaymentReconciliation resource
     */
    resourceType: any;
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
export interface PaymentReconciliationDetail {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: any[] | boolean | Money | number | number | null | string;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string;
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
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
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
     * The party which is receiving the payment.
     */
    payee?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and
     * its payment.
     */
    responsible?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Code to indicate the nature of the payment.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * The outcome of a request for a reconciliation.
 */
export declare enum Outcome {
    Complete = "complete",
    Error = "error",
    Partial = "partial",
    Queued = "queued"
}
export interface PaymentReconciliationProcessNote {
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
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
     * The explanation or description associated with the processing.
     */
    text?: string;
    /**
     * The business purpose of the note text.
     */
    type?: PaymentReconciliationProcessNoteType;
}
/**
 * The business purpose of the note text.
 */
export declare enum PaymentReconciliationProcessNoteType {
    Display = "display",
    Print = "print",
    Printoper = "printoper"
}
