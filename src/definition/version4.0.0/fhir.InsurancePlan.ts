import { Element,
         Reference, 
         Extension,
         Identifier,
         Meta,
         Period,
         Narrative,
         CodeableConcept,
         Address,
         HumanName,
         ContactPoint,
         Quantity,
         Money} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirInsurancePlan } from "./file";
//
//   const fhirInsurancePlan = Convert.toFhirInsurancePlan(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface InsurancePlan {
    /**
     * Extensions for alias
     */
    _alias?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * An organization which administer other services such as underwriting, customer service
     * and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A list of alternate names that the product is known as, or was known as in the past.
     */
    alias?: string[];
    /**
     * The contact for the health insurance product for a certain purpose.
     */
    contact?: Array<any[] | boolean | InsurancePlanContact | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | InsurancePlan | number | null | string>;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: Array<any[] | boolean | InsurancePlanCoverage | number | number | null | string>;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The technical endpoints providing access to services operated for the health insurance
     * product.
     */
    endpoint?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Business identifiers assigned to this health insurance product which remain constant as
     * the resource is updated and propagates from server to server.
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
     * Official name of the health insurance product as designated by the owner.
     */
    name?: string;
    /**
     * Reference to the network included in the health insurance product.
     */
    network?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.
     * This is typically an insurance carriers, other third-party payers, or health plan
     * sponsors comonly referred to as 'payers'.
     */
    ownedBy?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * Details about an insurance plan.
     */
    plan?: Array<any[] | boolean | InsurancePlanPlan | number | number | null | string>;
    /**
     * This is a InsurancePlan resource
     */
    resourceType: any;
    /**
     * The current state of the health insurance product.
     */
    status?: FhirInsurancePlanStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The kind of health insurance product.
     */
    type?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
}

export interface InsurancePlanContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: any[] | boolean | Address | number | number | null | string;
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
     * A name associated with the contact.
     */
    name?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be
     * contacted.
     */
    telecom?: Array<any[] | boolean | ContactPoint | number | number | null | string>;
}

export interface InsurancePlanCoverage {
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: Array<any[] | boolean | InsurancePlanBenefit | number | number | null | string>;
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
     * Reference to the network that providing the type of coverage.
     */
    network?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short
     * Term; Long Term Care; Hospice; Home Health).
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface InsurancePlanBenefit {
    /**
     * Extensions for requirement
     */
    _requirement?: any[] | boolean | Element | number | number | null | string;
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
     * The specific limits on the benefit.
     */
    limit?: Array<any[] | boolean | InsurancePlanLimit | number | number | null | string>;
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
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface InsurancePlanLimit {
    /**
     * The specific limit on the benefit.
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
     * The maximum amount of a service item a plan will pay for a covered benefit.  For
     * examples. wellness visits, or eyeglasses.
     */
    value?: any[] | boolean | Quantity | number | number | null | string;
}

export interface InsurancePlanPlan {
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: Array<any[] | boolean | InsurancePlanGeneralCost | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the
     * resource is updated and propagates from server to server.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
     * Reference to the network that providing the type of coverage.
     */
    network?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: Array<any[] | boolean | InsurancePlanSpecificCost | number | number | null | string>;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface InsurancePlanGeneralCost {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for groupSize
     */
    _groupSize?: any[] | boolean | Element | number | number | null | string;
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string;
    /**
     * Value of the cost.
     */
    cost?: any[] | boolean | Money | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number;
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
     * Type of cost.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface InsurancePlanSpecificCost {
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: Array<any[] | boolean | InsurancePlanBenefit1 | number | number | null | string>;
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance
     * Abuse; Hospice, Home Health).
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

export interface InsurancePlanBenefit1 {
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: Array<any[] | boolean | InsurancePlanCost | number | number | null | string>;
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
     * Type of specific benefit (preventative; primary care office visit; speciality office
     * visit; hospitalization; emergency room; urgent care).
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface InsurancePlanCost {
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network;
     * out-of-network; other).
     */
    applicability?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Additional information about the cost, such as information about funding sources (e.g.
     * HSA, HRA, FSA, RRA).
     */
    qualifiers?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than
     * currency, e.g. 10% coinsurance).
     */
    value?: any[] | boolean | Quantity | number | number | null | string;
}

/**
 * The current state of the health insurance product.
 */
export enum FhirInsurancePlanStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}