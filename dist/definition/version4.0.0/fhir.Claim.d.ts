import { Element, Period, Reference, Extension, CodeableConcept, Identifier, Meta, Narrative, Money, Address, Quantity, Attachment } from "./fhir._";
export interface Claim {
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
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for use
     */
    _use?: any[] | boolean | Element | number | number | null | string;
    /**
     * Details of an accident which resulted in injuries which required the products and
     * services listed in the claim.
     */
    accident?: any[] | boolean | ClaimAccident | number | number | null | string;
    /**
     * The period for which charges are being submitted.
     */
    billablePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: Array<any[] | boolean | ClaimCareTeam | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Claim | number | null | string>;
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: Array<any[] | boolean | ClaimDiagnosis | number | number | null | string>;
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
     * A code to indicate whether and for whom funds are to be reserved for future claims.
     */
    fundsReserve?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this claim.
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
    insurance: Array<any[] | boolean | ClaimInsurance | number | number | null | string>;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each
     * be a simple items or groups of sub-details.
     */
    item?: Array<any[] | boolean | ClaimItem | number | number | null | string>;
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
     * The party to whom the professional services and/or products have been supplied or are
     * being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * The party to be reimbursed for cost of the products and services according to the terms
     * of the policy.
     */
    payee?: any[] | boolean | ClaimPayee | number | number | null | string;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The provider-required urgency of processing the request. Typical values include: stat,
     * routine deferred.
     */
    priority: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: Array<any[] | boolean | ClaimProcedure | number | number | null | string>;
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
    related?: Array<any[] | boolean | ClaimRelated | number | number | null | string>;
    /**
     * This is a Claim resource
     */
    resourceType: any;
    /**
     * The status of the resource instance.
     */
    status?: string;
    /**
     * A finer grained suite of claim type codes which may convey additional information such as
     * Inpatient vs Outpatient and/or a specialty service.
     */
    subType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition,
     * situation, prior or concurrent issues.
     */
    supportingInfo?: Array<any[] | boolean | ClaimSupportingInfo | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The total value of the all the items in the claim.
     */
    total?: any[] | boolean | Money | number | number | null | string;
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
    use?: FhirClaimUse;
}
export interface ClaimAccident {
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
export interface ClaimCareTeam {
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
export interface ClaimDiagnosis {
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
export interface ClaimInsurance {
    /**
     * Extensions for businessArrangement
     */
    _businessArrangement?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for focal
     */
    _focal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for preAuthRef
     */
    _preAuthRef?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * A business agreement number established between the provider and the insurer for special
     * business processing purposes.
     */
    businessArrangement?: string;
    /**
     * The result of the adjudication of the line items for the Coverage specified in this
     * insurance.
     */
    claimResponse?: any[] | boolean | Reference | number | number | null | string;
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
     * The business identifier to be used when the claim is sent for adjudication against this
     * insurance policy.
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
export interface ClaimItem {
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
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    detail?: Array<any[] | boolean | ClaimDetail | number | number | null | string>;
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[];
    /**
     * The Encounters during which this Claim was created or to which the creation of this
     * record is tightly associated.
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
export interface ClaimDetail {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details
     * which are simple items.
     */
    subDetail?: Array<any[] | boolean | ClaimSubDetail | number | number | null | string>;
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
export interface ClaimSubDetail {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
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
     * Unique Device Identifiers associated with this line item.
     */
    udi?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise
     * this is the total of the fees for the details of the group.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}
export interface ClaimPayee {
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
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ClaimProcedure {
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
export interface ClaimRelated {
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
export interface ClaimSupportingInfo {
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
     * The general class of the information supplied: information; exception; accident,
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
    reason?: any[] | boolean | CodeableConcept | number | number | null | string;
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
/**
 * A code to indicate whether the nature of the request is: to request adjudication of
 * products and services previously rendered; or requesting authorization and adjudication
 * for provision in the future; or requesting the non-binding adjudication of the listed
 * products and services which could be provided in the future.
 */
export declare enum FhirClaimUse {
    Claim = "claim",
    Preauthorization = "preauthorization",
    Predetermination = "predetermination"
}
