import {
    Element,
    Extension,
    Reference,
    Attachment,
    CodeableConcept,
    Identifier,
    Meta,
    Period,
    Narrative,
    Address,
    Money,
    Quantity
} from "./fhir._";

export interface ClaimResponse {
    /**
     * Extensions for created
     */
    _created?: Element;
    /**
     * Extensions for disposition
     */
    _disposition?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for outcome
     */
    _outcome?: Element;
    /**
     * Extensions for preAuthRef
     */
    _preAuthRef?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: ClaimResponseAddItem[];
    /**
     * The adjudication results which are presented at the header level rather than at the
     * line-item or add-item levels.
     */
    adjudication?: ClaimResponseAdjudication[];
    /**
     * Request for additional supporting or authorizing information.
     */
    communicationRequest?: Reference[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ClaimResponse[];
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string;
    /**
     * Errors encountered during the processing of the adjudication.
     */
    error?: ClaimResponseError[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The actual form, by reference or inclusion, for printing the content or an EOB.
     */
    form?: Attachment;
    /**
     * A code for the form to be used for printing the content.
     */
    formCode?: CodeableConcept;
    /**
     * A code, used only on a response to a preauthorization, to indicate whether the benefits
     * payable have been reserved and for whom.
     */
    fundsReserve?: CodeableConcept;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Financial instruments for reimbursement for the health care products and services
     * specified on the claim.
     */
    insurance?: ClaimResponseInsurance[];
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer?: Reference;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can
     * also be a simple items or groups of sub-details.
     */
    item?: ClaimResponseItem[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
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
     * The outcome of the claim, predetermination, or preauthorization processing.
     */
    outcome?: string;
    /**
     * The party to whom the professional services and/or products have been supplied or are
     * being considered and for whom actual for facast reimbursement is sought.
     */
    patient?: Reference;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: CodeableConcept;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: ClaimResponsePayment;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: Period;
    /**
     * Reference from the Insurer which is used in later communications which refers to this
     * adjudication.
     */
    preAuthRef?: string;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: ClaimResponseProcessNote[];
    /**
     * Original request resource reference.
     */
    request?: Reference;
    /**
     * The provider which is responsible for the claim, predetermination or preauthorization.
     */
    requestor?: Reference;
    /**
     * This is a ClaimResponse resource
     */
    resourceType?: any;
    /**
     * The status of the resource instance.
     */
    status?: string;
    /**
     * A finer grained suite of claim type codes which may convey additional information such as
     * Inpatient vs Outpatient and/or a specialty service.
     */
    subType?: CodeableConcept;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * Categorized monetary totals for the adjudication.
     */
    total?: ClaimResponseTotal[];
    /**
     * A finer grained suite of claim type codes which may convey additional information such as
     * Inpatient vs Outpatient and/or a specialty service.
     */
    type?: CodeableConcept;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of
     * products and services previously rendered; or requesting authorization and adjudication
     * for provision in the future; or requesting the non-binding adjudication of the listed
     * products and services which could be provided in the future.
     */
    use?: string;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseAddItem {
    /**
     * Extensions for detailSequence
     */
    _detailSequence?: Element[];
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for itemSequence
     */
    _itemSequence?: Element[];
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: Element;
    /**
     * Extensions for subdetailSequence
     */
    _subdetailSequence?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ClaimResponseAdjudication[];
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: CodeableConcept;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: ClaimResponseDetail1[];
    /**
     * The sequence number of the details within the claim item which this line is intended to
     * replace.
     */
    detailSequence?: number[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[];
    /**
     * Where the product or service was provided.
     */
    locationAddress?: Address;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: CodeableConcept;
    /**
     * Where the product or service was provided.
     */
    locationReference?: Reference;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: Reference[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: Period;
    /**
     * The sequence number of the sub-details within the details within the claim item which
     * this line is intended to replace.
     */
    subdetailSequence?: number[];
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: CodeableConcept[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseAdjudication {
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * Monetary amount associated with the category.
     */
    amount?: Money;
    /**
     * A code to indicate the information type of this adjudication record. Information types
     * may include the value submitted, maximum values or percentages allowed or payable under
     * the plan, amounts that: the patient is responsible for in aggregate or pertaining to this
     * item; amounts paid by other coverages; and, the benefit payable for this item.
     */
    category?: CodeableConcept;
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
     * A code supporting the understanding of the adjudication result and explaining variance
     * from expected amount.
     */
    reason?: CodeableConcept;
    /**
     * A non-monetary value associated with the category. Mutually exclusive to the amount
     * element above.
     */
    value?: number;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseDetail1 {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ClaimResponseAdjudication[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: ClaimResponseSubDetail1[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseSubDetail1 {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ClaimResponseAdjudication[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A real number that represents a multiplier used in determining the overall value of
     * services delivered and/or goods received. The concept of a Factor allows for a discount
     * or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: CodeableConcept[];
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: Money;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseError {
    /**
     * Extensions for detailSequence
     */
    _detailSequence?: Element;
    /**
     * Extensions for itemSequence
     */
    _itemSequence?: Element;
    /**
     * Extensions for subDetailSequence
     */
    _subDetailSequence?: Element;
    /**
     * An error code, from a specified code system, which details why the claim could not be
     * adjudicated.
     */
    code?: CodeableConcept;
    /**
     * The sequence number of the detail within the line item submitted which contains the
     * error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number;
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
     * The sequence number of the line item submitted which contains the error. This value is
     * omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number;
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
     * The sequence number of the sub-detail within the detail within the line item submitted
     * which contains the error. This value is omitted when the error occurs outside of the item
     * structure.
     */
    subDetailSequence?: number;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseInsurance {
    /**
     * Extensions for businessArrangement
     */
    _businessArrangement?: Element;
    /**
     * Extensions for focal
     */
    _focal?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * A business agreement number established between the provider and the insurer for special
     * business processing purposes.
     */
    businessArrangement?: string;
    /**
     * The result of the adjudication of the line items for the Coverage specified in this
     * insurance.
     */
    claimResponse?: Reference;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The
     * coverage issuing insurer will use these details to locate the patient's actual coverage
     * within the insurer's information system.
     */
    coverage?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A flag to indicate that this Coverage is to be used for adjudication of this claim when
     * set to true.
     */
    focal?: boolean;
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
     * A number to uniquely identify insurance entries and provide a sequence of coverages to
     * convey coordination of benefit order.
     */
    sequence?: number;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseItem {
    /**
     * Extensions for itemSequence
     */
    _itemSequence?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * If this item is a group then the values here are a summary of the adjudication of the
     * detail items. If this item is a simple product or service then this is the result of the
     * adjudication of this item.
     */
    adjudication?: ClaimResponseAdjudication[];
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which
     * are simple items.
     */
    detail?: ClaimResponseDetail[];
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
     * A number to uniquely reference the claim item entries.
     */
    itemSequence?: number;
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
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseDetail {
    /**
     * Extensions for detailSequence
     */
    _detailSequence?: Element;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * The adjudication results.
     */
    adjudication?: ClaimResponseAdjudication[];
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence?: number;
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
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: ClaimResponseSubDetail[];
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseSubDetail {
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Element[];
    /**
     * Extensions for subDetailSequence
     */
    _subDetailSequence?: Element;
    /**
     * The adjudication results.
     */
    adjudication?: ClaimResponseAdjudication[];
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
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence?: number;
}

/**
 * Payment details for the adjudication of the claim.
 *
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponsePayment {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Total amount of all adjustments to this payment included in this transaction which are
     * not related to this claim's adjudication.
     */
    adjustment?: Money;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: CodeableConcept;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: Money;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string;
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
     * Issuer's unique identifier for the payment instrument.
     */
    identifier?: Identifier;
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
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: CodeableConcept;
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseProcessNote {
    /**
     * Extensions for number
     */
    _number?: Element;
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
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
     * A code to define the language used in the text of the note.
     */
    language?: CodeableConcept;
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
     * A number to uniquely identify a note entry.
     */
    number?: number;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string;
    /**
     * The business purpose of the note text.
     */
    type?: ClaimResponseProcessNoteType;
}

/**
 * The business purpose of the note text.
 */
export enum ClaimResponseProcessNoteType {
    Display = "display",
    Print = "print",
    Printoper = "printoper",
}

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponseTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount?: Money;
    /**
     * A code to indicate the information type of this adjudication record. Information types
     * may include: the value submitted, maximum values or percentages allowed or payable under
     * the plan, amounts that the patient is responsible for in aggregate or pertaining to this
     * item, amounts paid by other coverages, and the benefit payable for this item.
     */
    category?: CodeableConcept;
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
}
