import { Element,
         Period, 
         Reference,
         Extension,
         Attachment,
         CodeableConcept,
         Identifier,
         Meta,
         Narrative,
         Address,
         Money,
         Quantity,
         Coding} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirExplanationOfBenefit } from "./file";
//
//   const fhirExplanationOfBenefit = Convert.toFhirExplanationOfBenefit(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ExplanationOfBenefit {
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
     * Extensions for preAuthRef
     */
    _preAuthRef?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for precedence
     */
    _precedence?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for use
     */
    _use?: any[] | boolean | Element | number | number | null | string;
    /**
     * Details of a accident which resulted in injuries which required the products and services
     * listed in the claim.
     */
    accident?: any[] | boolean | ExplanationOfBenefitAccident | number | number | null | string;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: Array<any[] | boolean | ExplanationOfBenefitAddItem | number | number | null | string>;
    /**
     * The adjudication results which are presented at the header level rather than at the
     * line-item or add-item levels.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: Array<any[] | boolean | ExplanationOfBenefitBenefitBalance | number | number | null | string>;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The period for which charges are being submitted.
     */
    billablePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: Array<any[] | boolean | ExplanationOfBenefitCareTeam | number | number | null | string>;
    /**
     * The business identifier for the instance of the adjudication request: claim
     * predetermination or preauthorization.
     */
    claim?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The business identifier for the instance of the adjudication response: claim,
     * predetermination or preauthorization response.
     */
    claimResponse?: any[] | boolean | Reference | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ExplanationOfBenefit | number | null | string>;
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: Array<any[] | boolean | ExplanationOfBenefitDiagnosis | number | number | null | string>;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Facility where the services were provided.
     */
    facility?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The actual form, by reference or inclusion, for printing the content or an EOB.
     */
    form?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * A code for the form to be used for printing the content.
     */
    formCode?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code, used only on a response to a preauthorization, to indicate whether the benefits
     * payable have been reserved and for whom.
     */
    fundsReserve?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code to indicate whether and for whom funds are to be reserved for future claims.
     */
    fundsReserveRequested?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
    insurance: Array<any[] | boolean | ExplanationOfBenefitInsurance | number | number | null | string>;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: any[] | boolean | Reference | number | number | null | string;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can
     * also be a simple items or groups of sub-details.
     */
    item?: Array<any[] | boolean | ExplanationOfBenefitItem | number | number | null | string>;
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
     * Original prescription which has been superseded by this prescription to support the
     * dispensing of pharmacy services, medications or products.
     */
    originalPrescription?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The outcome of the claim, predetermination, or preauthorization processing.
     */
    outcome?: string;
    /**
     * The party to whom the professional services and/or products have been supplied or are
     * being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * The party to be reimbursed for cost of the products and services according to the terms
     * of the policy.
     */
    payee?: any[] | boolean | ExplanationOfBenefitPayee | number | number | null | string;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: any[] | boolean | ExplanationOfBenefitPayment | number | number | null | string;
    /**
     * Reference from the Insurer which is used in later communications which refers to this
     * adjudication.
     */
    preAuthRef?: string[];
    /**
     * The timeframe during which the supplied preauthorization reference may be quoted on
     * claims to obtain the adjudication as provided.
     */
    preAuthRefPeriod?: Array<any[] | boolean | Period | number | number | null | string>;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for
     * the same suite of services.
     */
    precedence?: number;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The provider-required urgency of processing the request. Typical values include: stat,
     * routine deferred.
     */
    priority?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: Array<any[] | boolean | ExplanationOfBenefitProcedure | number | number | null | string>;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: Array<any[] | boolean | ExplanationOfBenefitProcessNote | number | number | null | string>;
    /**
     * The provider which is responsible for the claim, predetermination or preauthorization.
     */
    provider: any[] | boolean | Reference | number | number | null | string;
    /**
     * A reference to a referral resource.
     */
    referral?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Other claims which are related to this claim such as prior submissions or claims for
     * related services or for the same event.
     */
    related?: Array<any[] | boolean | ExplanationOfBenefitRelated | number | number | null | string>;
    /**
     * This is a ExplanationOfBenefit resource
     */
    resourceType: any;
    /**
     * The status of the resource instance.
     */
    status?: FhirExplanationOfBenefitStatus;
    /**
     * A finer grained suite of claim type codes which may convey additional information such as
     * Inpatient vs Outpatient and/or a specialty service.
     */
    subType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition,
     * situation, prior or concurrent issues.
     */
    supportingInfo?: Array<any[] | boolean | ExplanationOfBenefitSupportingInfo | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Categorized monetary totals for the adjudication.
     */
    total?: Array<any[] | boolean | ExplanationOfBenefitTotal | number | number | null | string>;
    /**
     * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of
     * products and services previously rendered; or requesting authorization and adjudication
     * for provision in the future; or requesting the non-binding adjudication of the listed
     * products and services which could be provided in the future.
     */
    use?: string;
}

export interface ExplanationOfBenefitAccident {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Date of an accident event  related to the products and services contained in the claim.
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
     * The physical location of the accident event.
     */
    locationAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * The physical location of the accident event.
     */
    locationReference?: any[] | boolean | Reference | number | number | null | string;
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
     * The type or context of the accident event for the purposes of selection of potential
     * insurance coverages and determination of coordination between insurers.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ExplanationOfBenefitAddItem {
    /**
     * Extensions for detailSequence
     */
    _detailSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for itemSequence
     */
    _itemSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for subDetailSequence
     */
    _subDetailSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * The adjudication results.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: Array<any[] | boolean | ExplanationOfBenefitDetail1 | number | number | null | string>;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    locationAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Where the product or service was provided.
     */
    locationReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The sequence number of the sub-details woithin the details within the claim item which
     * this line is intended to replace.
     */
    subDetailSequence?: number[];
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}

export interface ExplanationOfBenefitAdjudication {
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
    /**
     * Monetary amount associated with the category.
     */
    amount?: any[] | boolean | Money | number | number | null | string;
    /**
     * A code to indicate the information type of this adjudication record. Information types
     * may include: the value submitted, maximum values or percentages allowed or payable under
     * the plan, amounts that the patient is responsible for in-aggregate or pertaining to this
     * item, amounts paid by other coverages, and the benefit payable for this item.
     */
    category: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * A code supporting the understanding of the adjudication result and explaining variance
     * from expected amount.
     */
    reason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A non-monetary value associated with the category. Mutually exclusive to the amount
     * element above.
     */
    value?: number;
}

export interface ExplanationOfBenefitDetail1 {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * The adjudication results.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: Array<any[] | boolean | ExplanationOfBenefitSubDetail1 | number | number | null | string>;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}

export interface ExplanationOfBenefitSubDetail1 {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * The adjudication results.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}

export interface ExplanationOfBenefitBenefitBalance {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for excluded
     */
    _excluded?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A richer description of the benefit or services covered.
     */
    description?: string;
    /**
     * True if the indicated  of service is excluded from the plan, missing or False
     * indicates the product or service is included in the coverage.
     */
    excluded?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Benefits Used to date.
     */
    financial?: Array<any[] | boolean | ExplanationOfBenefitFinancial | number | number | null | string>;
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
     * A short name or tag for the benefit.
     */
    name?: string;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or
     * out-of-network providers.
     */
    network?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual
     * visits'.
     */
    term?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ExplanationOfBenefitFinancial {
    /**
     * Extensions for allowedString
     */
    _allowedString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for allowedUnsignedInt
     */
    _allowedUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for usedUnsignedInt
     */
    _usedUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number;
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
     * ification of benefit being provided.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number;
}

export interface ExplanationOfBenefitCareTeam {
    /**
     * Extensions for responsible
     */
    _responsible?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
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
     * Member of the team who provided the product or service.
     */
    provider: any[] | boolean | Reference | number | number | null | string;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The party who is billing and/or responsible for the claimed products or services.
     */
    responsible?: boolean;
    /**
     * The lead, assisting or supervising practitioner and their discipline if a
     * multidisciplinary team.
     */
    role?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence?: number;
}

export interface ExplanationOfBenefitDiagnosis {
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined
     * Condition.
     */
    diagnosisCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined
     * Condition.
     */
    diagnosisReference?: any[] | boolean | Reference | number | number | null | string;
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
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A package billing code or bundle code used to group products and services to a particular
     * health condition (such as heart attack) which is based on a predetermined grouping code
     * system.
     */
    packageCode?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A number to uniquely identify diagnosis entries.
     */
    sequence?: number;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
}

export interface ExplanationOfBenefitInsurance {
    /**
     * Extensions for focal
     */
    _focal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for preAuthRef
     */
    _preAuthRef?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The
     * coverage issuing insurer will use these details to locate the patient's actual coverage
     * within the insurer's information system.
     */
    coverage: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Reference numbers previously provided by the insurer to the provider to be quoted on
     * subsequent claims containing services or products related to the prior authorization.
     */
    preAuthRef?: string[];
}

export interface ExplanationOfBenefitItem {
    /**
     * Extensions for careTeamSequence
     */
    _careTeamSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for diagnosisSequence
     */
    _diagnosisSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for informationSequence
     */
    _informationSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for procedureSequence
     */
    _procedureSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the
     * detail items. If this item is a simple product or service then this is the result of the
     * adjudication of this item.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Second-tier of goods and services.
     */
    detail?: Array<any[] | boolean | ExplanationOfBenefitDetail | number | number | null | string>;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[];
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
     * Exceptions, special conditions and supporting information applicable for this service or
     * product.
     */
    informationSequence?: number[];
    /**
     * Where the product or service was provided.
     */
    locationAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Where the product or service was provided.
     */
    locationReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Item typification or modifiers codes to convey additional context for the product or
     * service.
     */
    modifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}

export interface ExplanationOfBenefitDetail {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * The adjudication results.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    sequence?: number;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: Array<any[] | boolean | ExplanationOfBenefitSubDetail | number | number | null | string>;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}

export interface ExplanationOfBenefitSubDetail {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for noteNumber
     */
    _noteNumber?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * The adjudication results.
     */
    adjudication?: Array<any[] | boolean | ExplanationOfBenefitAdjudication | number | number | null | string>;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The quantity times the unit price for an additional service or product or charge.
     */
    net?: any[] | boolean | Money | number | number | null | string;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[];
    /**
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    sequence?: number;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}

export interface ExplanationOfBenefitPayee {
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
     * Reference to the individual or organization to whom any payment will be made.
     */
    party?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ExplanationOfBenefitPayment {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Total amount of all adjustments to this payment included in this transaction which are
     * not related to this claim's adjudication.
     */
    adjustment?: any[] | boolean | Money | number | number | null | string;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: any[] | boolean | Money | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Issuer's unique identifier for the payment instrument.
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
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ExplanationOfBenefitProcedure {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * Date and optionally time the procedure was performed.
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
     * The code or reference to a Procedure resource which identifies the clinical intervention
     * performed.
     */
    procedureCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention
     * performed.
     */
    procedureReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence?: number;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Array<any[] | boolean | Reference | number | number | null | string>;
}

export interface ExplanationOfBenefitProcessNote {
    /**
     * Extensions for number
     */
    _number?: any[] | boolean | Element | number | number | null | string;
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
     * A code to define the language used in the text of the note.
     */
    language?: any[] | boolean | CodeableConcept | number | number | null | string;
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
    type?: ExplanationOfBenefitProcessNoteType;
}

/**
 * The business purpose of the note text.
 */
export enum ExplanationOfBenefitProcessNoteType {
    Display = "display",
    Print = "print",
    Printoper = "printoper",
}

export interface ExplanationOfBenefitRelated {
    /**
     * Reference to a related claim.
     */
    claim?: any[] | boolean | Reference | number | number | null | string;
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
     * An alternate organizational reference to the case or file to which this particular claim
     * pertains.
     */
    reference?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * A code to convey how the claims are related.
     */
    relationship?: any[] | boolean | CodeableConcept | number | number | null | string;
}

/**
 * The status of the resource instance.
 */
export enum FhirExplanationOfBenefitStatus {
    Active = "active",
    Cancelled = "cancelled",
    Draft = "draft",
    EnteredInError = "entered-in-error",
}

export interface ExplanationOfBenefitSupportingInfo {
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timingDate
     */
    _timingDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * The general  of the information supplied: information; exception; accident,
     * employment; onset, etc.
     */
    category: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * System and code pertaining to the specific information regarding special conditions
     * relating to the setting, treatment or patient  for which care is sought.
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
     * Provides the reason in the situation where a reason code is required in addition to the
     * content.
     */
    reason?: any[] | boolean | Coding | number | number | null | string;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence?: number;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueBoolean?: boolean;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueString?: string;
}

export interface ExplanationOfBenefitTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount: any[] | boolean | Money | number | number | null | string;
    /**
     * A code to indicate the information type of this adjudication record. Information types
     * may include: the value submitted, maximum values or percentages allowed or payable under
     * the plan, amounts that the patient is responsible for in aggregate or pertaining to this
     * item, amounts paid by other coverages, and the benefit payable for this item.
     */
    category: any[] | boolean | CodeableConcept | number | number | null | string;
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
}