import { Element, Reference, Extension, Identifier, Meta, Period, Narrative, CodeableConcept, Address, HumanName, ContactPoint, Quantity, Money } from "./fhir._";
export interface InsurancePlan {
    /**
     * Extensions for alias
     */
    _alias?: Element[];
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * An organization which administer other services such as underwriting, customer service
     * and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: Reference;
    /**
     * A list of alternate names that the product is known as, or was known as in the past.
     */
    alias?: string[];
    /**
     * The contact for the health insurance product for a certain purpose.
     */
    contact?: InsurancePlanContact[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: InsurancePlan[];
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: InsurancePlanCoverage[];
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: Reference[];
    /**
     * The technical endpoints providing access to services operated for the health insurance
     * product.
     */
    endpoint?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this health insurance product which remain constant as
     * the resource is updated and propagates from server to server.
     */
    identifier?: Identifier[];
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
     * Official name of the health insurance product as designated by the owner.
     */
    name?: string;
    /**
     * Reference to the network included in the health insurance product.
     */
    network?: Reference[];
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.
     * This is typically an insurance carriers, other third-party payers, or health plan
     * sponsors comonly referred to as 'payers'.
     */
    ownedBy?: Reference;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: Period;
    /**
     * Details about an insurance plan.
     */
    plan?: InsurancePlanPlan[];
    /**
     * This is a InsurancePlan resource
     */
    resourceType?: any;
    /**
     * The current state of the health insurance product.
     */
    status?: InsurancePlanStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * The kind of health insurance product.
     */
    type?: CodeableConcept[];
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: Address;
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
     * A name associated with the contact.
     */
    name?: HumanName;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: CodeableConcept;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be
     * contacted.
     */
    telecom?: ContactPoint[];
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanCoverage {
    /**
     * Specific benefits under this type of coverage.
     */
    benefit?: InsurancePlanBenefit[];
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
     * Reference to the network that providing the type of coverage.
     */
    network?: Reference[];
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short
     * Term; Long Term Care; Hospice; Home Health).
     */
    type?: CodeableConcept;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanBenefit {
    /**
     * Extensions for requirement
     */
    _requirement?: Element;
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
     * The specific limits on the benefit.
     */
    limit?: InsurancePlanLimit[];
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
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type?: CodeableConcept;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanLimit {
    /**
     * The specific limit on the benefit.
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
     * The maximum amount of a service item a plan will pay for a covered benefit.  For
     * examples. wellness visits, or eyeglasses.
     */
    value?: Quantity;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanPlan {
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: InsurancePlanGeneralCost[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the
     * resource is updated and propagates from server to server.
     */
    identifier?: Identifier[];
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
     * Reference to the network that providing the type of coverage.
     */
    network?: Reference[];
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: InsurancePlanSpecificCost[];
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: CodeableConcept;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanGeneralCost {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for groupSize
     */
    _groupSize?: Element;
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string;
    /**
     * Value of the cost.
     */
    cost?: Money;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
    modifierExtension?: Extension[];
    /**
     * Type of cost.
     */
    type?: CodeableConcept;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanSpecificCost {
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: InsurancePlanBenefit1[];
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance
     * Abuse; Hospice, Home Health).
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
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanBenefit1 {
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: InsurancePlanCost[];
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
     * Type of specific benefit (preventative; primary care office visit; speciality office
     * visit; hospitalization; emergency room; urgent care).
     */
    type?: CodeableConcept;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlanCost {
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network;
     * out-of-network; other).
     */
    applicability?: CodeableConcept;
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
     * Additional information about the cost, such as information about funding sources (e.g.
     * HSA, HRA, FSA, RRA).
     */
    qualifiers?: CodeableConcept[];
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type?: CodeableConcept;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than
     * currency, e.g. 10% coinsurance).
     */
    value?: Quantity;
}
/**
 * The current state of the health insurance product.
 */
export declare enum InsurancePlanStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
