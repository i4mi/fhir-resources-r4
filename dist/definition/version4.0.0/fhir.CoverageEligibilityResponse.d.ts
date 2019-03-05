import { Element, Extension, CodeableConcept, Identifier, Reference, Meta, Period, Narrative, Money } from "./fhir._";
export interface CoverageEligibilityResponse {
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
     * Extensions for purpose
     */
    _purpose?: Element[];
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: CoverageEligibilityResponse[];
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: CoverageEligibilityResponseError[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A code for the form to be used for printing the content.
     */
    form?: CodeableConcept;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Financial instruments for reimbursement for the health care products and services.
     */
    insurance?: CoverageEligibilityResponseInsurance[];
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer?: Reference;
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
     * The outcome of the request processing.
     */
    outcome?: CoverageEligibilityResponseOutcome;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is
     * sought.
     */
    patient?: Reference;
    /**
     * A reference from the Insurer to which these services pertain to be used on further
     * communication and as proof that the request occurred.
     */
    preAuthRef?: string;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service
     * categories or billing codes; benefits for coverages specified or discovered; discovery
     * and return of coverages for the patient; and/or validation that the specified coverage is
     * in-force at the date/period specified or 'now' if not specified.
     */
    purpose?: CoverageEligibilityResponsePurpose[];
    /**
     * Reference to the original request resource.
     */
    request?: Reference;
    /**
     * The provider which is responsible for the request.
     */
    requestor?: Reference;
    /**
     * This is a CoverageEligibilityResponse resource
     */
    resourceType?: any;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: Period;
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
    text?: Narrative;
}
/**
 * This resource provides eligibility and plan details from the processing of an
 * CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponseError {
    /**
     * An error code,from a specified code system, which details why the eligibility check could
     * not be performed.
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
}
/**
 * This resource provides eligibility and plan details from the processing of an
 * CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponseInsurance {
    /**
     * Extensions for inforce
     */
    _inforce?: Element;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: Period;
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
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s)
     * specified or for the whole duration of the service dates.
     */
    inforce?: boolean;
    /**
     * Benefits and optionally current balances, and authorization details by category or
     * service.
     */
    item?: CoverageEligibilityResponseItem[];
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
 * This resource provides eligibility and plan details from the processing of an
 * CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponseItem {
    /**
     * Extensions for authorizationRequired
     */
    _authorizationRequired?: Element;
    /**
     * Extensions for authorizationUrl
     */
    _authorizationUrl?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for excluded
     */
    _excluded?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service
     * delivery.
     */
    authorizationRequired?: boolean;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: CodeableConcept[];
    /**
     * A web location for obtaining requirements or descriptive information regarding the
     * preauthorization.
     */
    authorizationUrl?: string;
    /**
     * Benefits used to date.
     */
    benefit?: CoverageEligibilityResponseBenefit[];
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: CodeableConcept;
    /**
     * A richer description of the benefit or services covered.
     */
    description?: string;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False
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
    extension?: Extension[];
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
     * A short name or tag for the benefit.
     */
    name?: string;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or
     * out-of-network providers.
     */
    network?: CodeableConcept;
    /**
     * This contains the product, service, drug or other billing code for the item.
     */
    productOrService?: CodeableConcept;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: Reference;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual
     * visits'.
     */
    term?: CodeableConcept;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: CodeableConcept;
}
/**
 * This resource provides eligibility and plan details from the processing of an
 * CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponseBenefit {
    /**
     * Extensions for allowedString
     */
    _allowedString?: Element;
    /**
     * Extensions for allowedUnsignedInt
     */
    _allowedUnsignedInt?: Element;
    /**
     * Extensions for usedString
     */
    _usedString?: Element;
    /**
     * Extensions for usedUnsignedInt
     */
    _usedUnsignedInt?: Element;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: Money;
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
     * Classification of benefit being provided.
     */
    type?: CodeableConcept;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: Money;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number;
}
/**
 * The outcome of the request processing.
 */
export declare enum CoverageEligibilityResponseOutcome {
    Complete = "complete",
    Error = "error",
    Partial = "partial",
    Queued = "queued"
}
export declare enum CoverageEligibilityResponsePurpose {
    AuthRequirements = "auth-requirements",
    Benefits = "benefits",
    Discovery = "discovery",
    Validation = "validation"
}
