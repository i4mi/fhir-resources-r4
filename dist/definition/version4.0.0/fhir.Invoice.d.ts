import { Element, Reference, Extension, Identifier, Meta, Annotation, Narrative, Money, CodeableConcept } from "./fhir._";
export interface Invoice {
    /**
     * Extensions for cancelledReason
     */
    _cancelledReason?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for paymentTerms
     */
    _paymentTerms?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Account which is supposed to be balanced with this Invoice.
     */
    account?: any[] | boolean | Reference | number | number | null | string;
    /**
     * In case of Invoice cancellation a reason must be given (entered in error, superseded by
     * corrected invoice etc.).
     */
    cancelledReason?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Invoice | number | null | string>;
    /**
     * Date/time(s) of when this Invoice was posted.
     */
    date?: string;
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
     * Identifier of this Invoice, often used for reference in correspondence about this invoice
     * or for tracking of payments.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The organizationissuing the Invoice.
     */
    issuer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as
     * date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: Array<any[] | boolean | InvoiceLineItem | number | number | null | string>;
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
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: Array<any[] | boolean | InvoiceParticipant | number | number | null | string>;
    /**
     * Payment details such as banking details, period of payment, deductibles, methods of
     * payment.
     */
    paymentTerms?: string;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a Invoice resource
     */
    resourceType: any;
    /**
     * The current state of the Invoice.
     */
    status?: FhirInvoiceStatus;
    /**
     * The individual or set of individuals receiving the goods and services billed in this
     * invoice.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Invoice total, tax included.
     */
    totalGross?: any[] | boolean | Money | number | number | null | string;
    /**
     * Invoice total , taxes excluded.
     */
    totalNet?: any[] | boolean | Money | number | number | null | string;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with
     * surcharges/deductions that apply in certain conditions.  The priceComponent element can
     * be used to offer transparency to the recipient of the Invoice of how the total price was
     * calculated.
     */
    totalPriceComponent?: Array<any[] | boolean | InvoicePriceComponent | number | number | null | string>;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental,
     * preliminary).
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface InvoiceLineItem {
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no
     * further details are required for the lineItem, inline billing codes can be added using
     * the CodeableConcept data type instead of the Reference.
     */
    chargeItemCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no
     * further details are required for the lineItem, inline billing codes can be added using
     * the CodeableConcept data type instead of the Reference.
     */
    chargeItemReference?: any[] | boolean | Reference | number | number | null | string;
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
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions
     * that apply in certain conditions. A ChargeItemDefinition resource that defines the
     * prices, factors and conditions that apply to a billing code is currently under
     * development. The priceComponent element can be used to offer transparency to the
     * recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: Array<any[] | boolean | InvoicePriceComponent | number | number | null | string>;
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number;
}
export interface InvoicePriceComponent {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * The amount calculated for this component.
     */
    amount?: any[] | boolean | Money | number | number | null | string;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of
     * taxes, surcharges, discounts etc.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The factor that has been applied on the base price for calculating this component.
     */
    factor?: number;
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
     * This code identifies the type of the component.
     */
    type?: InvoicePriceComponentType;
}
/**
 * This code identifies the type of the component.
 */
export declare enum InvoicePriceComponentType {
    Base = "base",
    Deduction = "deduction",
    Discount = "discount",
    Informational = "informational",
    Surcharge = "surcharge",
    Tax = "tax"
}
export interface InvoiceParticipant {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
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
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice
     * has been created automatically, the Participant may be a billing engine or another kind
     * of device.
     */
    role?: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * The current state of the Invoice.
 */
export declare enum FhirInvoiceStatus {
    Balanced = "balanced",
    Cancelled = "cancelled",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    Issued = "issued"
}
