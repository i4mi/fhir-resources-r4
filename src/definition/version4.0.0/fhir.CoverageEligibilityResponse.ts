import { Element,
         Extension, 
         CodeableConcept,
         Identifier,
         Reference,
         Meta,
         Period,
         Narrative,
         Money} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirCoverageEligibilityResponse } from "./file";
//
//   const fhirCoverageEligibilityResponse = Convert.toFhirCoverageEligibilityResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CoverageEligibilityResponse {
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
    _preAuthRef?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for purpose
     */
    _purpose?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for servicedDate
     */
    _servicedDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | CoverageEligibilityResponse | number | null | string>;
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
    error?: Array<any[] | boolean | CoverageEligibilityResponseError | number | number | null | string>;
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
    form?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Financial instruments for reimbursement for the health care products and services.
     */
    insurance?: Array<any[] | boolean | CoverageEligibilityResponseInsurance | number | number | null | string>;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: any[] | boolean | Reference | number | number | null | string;
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
     * The outcome of the request processing.
     */
    outcome?: Outcome;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is
     * sought.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
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
    purpose?: Purpose[];
    /**
     * Reference to the original request resource.
     */
    request: any[] | boolean | Reference | number | number | null | string;
    /**
     * The provider which is responsible for the request.
     */
    requestor?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a CoverageEligibilityResponse resource
     */
    resourceType: any;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: any[] | boolean | Period | number | number | null | string;
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

export interface CoverageEligibilityResponseError {
    /**
     * An error code,from a specified code system, which details why the eligibility check could
     * not be performed.
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
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

export interface CoverageEligibilityResponseInsurance {
    /**
     * Extensions for inforce
     */
    _inforce?: any[] | boolean | Element | number | number | null | string;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: any[] | boolean | Period | number | number | null | string;
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
    item?: Array<any[] | boolean | CoverageEligibilityResponseItem | number | number | null | string>;
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

export interface CoverageEligibilityResponseItem {
    /**
     * Extensions for authorizationRequired
     */
    _authorizationRequired?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for authorizationUrl
     */
    _authorizationUrl?: any[] | boolean | Element | number | number | null | string;
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
     * A boolean flag indicating whether a preauthorization is required prior to actual service
     * delivery.
     */
    authorizationRequired?: boolean;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A web location for obtaining requirements or descriptive information regarding the
     * preauthorization.
     */
    authorizationUrl?: string;
    /**
     * Benefits used to date.
     */
    benefit?: Array<any[] | boolean | CoverageEligibilityResponseBenefit | number | number | null | string>;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
     * A short name or tag for the benefit.
     */
    name?: string;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or
     * out-of-network providers.
     */
    network?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This contains the product, service, drug or other billing code for the item.
     */
    productOrService?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: any[] | boolean | Reference | number | number | null | string;
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

export interface CoverageEligibilityResponseBenefit {
    /**
     * Extensions for allowedString
     */
    _allowedString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for allowedUnsignedInt
     */
    _allowedUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for usedString
     */
    _usedString?: any[] | boolean | Element | number | number | null | string;
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
     * Classification of benefit being provided.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: any[] | boolean | Money | number | number | null | string;
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
export enum Outcome {
    Complete = "complete",
    Error = "error",
    Partial = "partial",
    Queued = "queued",
}

export enum Purpose {
    AuthRequirements = "auth-requirements",
    Benefits = "benefits",
    Discovery = "discovery",
    Validation = "validation",
}