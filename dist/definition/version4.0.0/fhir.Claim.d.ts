import { Element, Period, Reference, Extension, CodeableConcept, Identifier, Meta, Narrative, Money, Address, Quantity, Attachment } from "./fhir._";
export interface Claim {
    /**
     * Extensions for created
     */
    _created?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * Details of an accident which resulted in injuries which required the products and
     * services listed in the claim.
     */
    accident?: ClaimAccident;
    /**
     * The period for which charges are being submitted.
     */
    billablePeriod?: Period;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: ClaimCareTeam[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Claim[];
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: ClaimDiagnosis[];
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Facility where the services were provided.
     */
    facility?: Reference;
    /**
     * A code to indicate whether and for whom funds are to be reserved for future claims.
     */
    fundsReserve?: CodeableConcept;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this claim.
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
    insurance?: ClaimInsurance[];
    /**
     * The Insurer who is target of the request.
     */
    insurer?: Reference;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each
     * be a simple items or groups of sub-details.
     */
    item?: ClaimItem[];
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
     * Original prescription which has been superseded by this prescription to support the
     * dispensing of pharmacy services, medications or products.
     */
    originalPrescription?: Reference;
    /**
     * The party to whom the professional services and/or products have been supplied or are
     * being considered and for whom actual or forecast reimbursement is sought.
     */
    patient?: Reference;
    /**
     * The party to be reimbursed for cost of the products and services according to the terms
     * of the policy.
     */
    payee?: ClaimPayee;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: Reference;
    /**
     * The provider-required urgency of processing the request. Typical values include: stat,
     * routine deferred.
     */
    priority?: CodeableConcept;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: ClaimProcedure[];
    /**
     * The provider which is responsible for the claim, predetermination or preauthorization.
     */
    provider?: Reference;
    /**
     * A reference to a referral resource.
     */
    referral?: Reference;
    /**
     * Other claims which are related to this claim such as prior submissions or claims for
     * related services or for the same event.
     */
    related?: ClaimRelated[];
    /**
     * This is a Claim resource
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
     * Additional information codes regarding exceptions, special considerations, the condition,
     * situation, prior or concurrent issues.
     */
    supportingInfo?: ClaimSupportingInfo[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * The total value of the all the items in the claim.
     */
    total?: Money;
    /**
     * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
     */
    type?: CodeableConcept;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of
     * products and services previously rendered; or requesting authorization and adjudication
     * for provision in the future; or requesting the non-binding adjudication of the listed
     * products and services which could be provided in the future.
     */
    use?: ClaimUse;
}
/**
 * Details of an accident which resulted in injuries which required the products and
 * services listed in the claim.
 *
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimAccident {
    /**
     * Extensions for date
     */
    _date?: Element;
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
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: Address;
    /**
     * The physical location of the accident event.
     */
    locationReference?: Reference;
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
     * The type or context of the accident event for the purposes of selection of potential
     * insurance coverages and determination of coordination between insurers.
     */
    type?: CodeableConcept;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimCareTeam {
    /**
     * Extensions for responsible
     */
    _responsible?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
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
     * Member of the team who provided the product or service.
     */
    provider?: Reference;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: CodeableConcept;
    /**
     * The party who is billing and/or responsible for the claimed products or services.
     */
    responsible?: boolean;
    /**
     * The lead, assisting or supervising practitioner and their discipline if a
     * multidisciplinary team.
     */
    role?: CodeableConcept;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence?: number;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimDiagnosis {
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined
     * Condition.
     */
    diagnosisCodeableConcept?: CodeableConcept;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined
     * Condition.
     */
    diagnosisReference?: Reference;
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
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: CodeableConcept;
    /**
     * A package billing code or bundle code used to group products and services to a particular
     * health condition (such as heart attack) which is based on a predetermined grouping code
     * system.
     */
    packageCode?: CodeableConcept;
    /**
     * A number to uniquely identify diagnosis entries.
     */
    sequence?: number;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: CodeableConcept[];
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimInsurance {
    /**
     * Extensions for businessArrangement
     */
    _businessArrangement?: Element;
    /**
     * Extensions for focal
     */
    _focal?: Element;
    /**
     * Extensions for preAuthRef
     */
    _preAuthRef?: Element[];
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
     * The business identifier to be used when the claim is sent for adjudication against this
     * insurance policy.
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
     * Reference numbers previously provided by the insurer to the provider to be quoted on
     * subsequent claims containing services or products related to the prior authorization.
     */
    preAuthRef?: string[];
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to
     * convey coordination of benefit order.
     */
    sequence?: number;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimItem {
    /**
     * Extensions for careTeamSequence
     */
    _careTeamSequence?: Element[];
    /**
     * Extensions for diagnosisSequence
     */
    _diagnosisSequence?: Element[];
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for informationSequence
     */
    _informationSequence?: Element[];
    /**
     * Extensions for procedureSequence
     */
    _procedureSequence?: Element[];
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: Element;
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: CodeableConcept;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: CodeableConcept;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    detail?: ClaimDetail[];
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[];
    /**
     * The Encounters during which this Claim was created or to which the creation of this
     * record is tightly associated.
     */
    encounter?: Reference[];
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
     * Exceptions, special conditions and supporting information applicable for this service or
     * product.
     */
    informationSequence?: number[];
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
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[];
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
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: CodeableConcept;
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
    servicedPeriod?: Period;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: CodeableConcept[];
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimDetail {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
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
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: CodeableConcept;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    subDetail?: ClaimSubDetail[];
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimSubDetail {
    /**
     * Extensions for factor
     */
    _factor?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
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
     * When the value is a group code then this item collects a set of related claim details,
     * otherwise this contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: Quantity;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: CodeableConcept;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: Money;
}
/**
 * The party to be reimbursed for cost of the products and services according to the terms
 * of the policy.
 *
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimPayee {
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
     * Reference to the individual or organization to whom any payment will be made.
     */
    party?: Reference;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type?: CodeableConcept;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimProcedure {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
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
     * The code or reference to a Procedure resource which identifies the clinical intervention
     * performed.
     */
    procedureCodeableConcept?: CodeableConcept;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention
     * performed.
     */
    procedureReference?: Reference;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence?: number;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: CodeableConcept[];
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Reference[];
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimRelated {
    /**
     * Reference to a related claim.
     */
    claim?: Reference;
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
     * An alternate organizational reference to the case or file to which this particular claim
     * pertains.
     */
    reference?: Identifier;
    /**
     * A code to convey how the claims are related.
     */
    relationship?: CodeableConcept;
}
/**
 * A provider issued list of professional services and products which have been provided, or
 * are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimSupportingInfo {
    /**
     * Extensions for sequence
     */
    _sequence?: Element;
    /**
     * Extensions for timingDate
     */
    _timingDate?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * The general class of the information supplied: information; exception; accident,
     * employment; onset, etc.
     */
    category?: CodeableConcept;
    /**
     * System and code pertaining to the specific information regarding special conditions
     * relating to the setting, treatment or patient  for which care is sought.
     */
    code?: CodeableConcept;
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
     * Provides the reason in the situation where a reason code is required in addition to the
     * content.
     */
    reason?: CodeableConcept;
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
    timingPeriod?: Period;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueAttachment?: Attachment;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueBoolean?: boolean;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueQuantity?: Quantity;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueReference?: Reference;
    /**
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    valueString?: string;
}
/**
 * A code to indicate whether the nature of the request is: to request adjudication of
 * products and services previously rendered; or requesting authorization and adjudication
 * for provision in the future; or requesting the non-binding adjudication of the listed
 * products and services which could be provided in the future.
 */
export declare enum ClaimUse {
    Claim = "claim",
    Preauthorization = "preauthorization",
    Predetermination = "predetermination"
}
