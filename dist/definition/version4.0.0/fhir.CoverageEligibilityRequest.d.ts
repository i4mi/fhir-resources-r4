import { Element, Reference, Extension, Identifier, Meta, CodeableConcept, Period, Narrative, Quantity, Money } from "./fhir._";
export interface CoverageEligibilityRequest {
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
    contained?: Array<any[] | boolean | CoverageEligibilityRequest | number | null | string>;
    /**
     * The date when this resource was created.
     */
    created?: string;
    /**
     * Person who created the request.
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
     * Facility where the services are intended to be provided.
     */
    facility?: any[] | boolean | Reference | number | number | null | string;
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
    insurance?: Array<any[] | boolean | CoverageEligibilityRequestInsurance | number | number | null | string>;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: any[] | boolean | Reference | number | number | null | string;
    /**
     * Service categories or billable services for which benefit details and/or an authorization
     * prior to service delivery may be required by the payor.
     */
    item?: Array<any[] | boolean | CoverageEligibilityRequestItem | number | number | null | string>;
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
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is
     * sought.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The provider which is responsible for the request.
     */
    provider?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service
     * categories or billing codes; benefits for coverages specified or discovered; discovery
     * and return of coverages for the patient; and/or validation that the specified coverage is
     * in-force at the date/period specified or 'now' if not specified.
     */
    purpose?: Purpose[];
    /**
     * This is a CoverageEligibilityRequest resource
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
     * Additional information codes regarding exceptions, special considerations, the condition,
     * situation, prior or concurrent issues.
     */
    supportingInfo?: Array<any[] | boolean | CoverageEligibilityRequestSupportingInfo | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface CoverageEligibilityRequestInsurance {
    /**
     * Extensions for businessArrangement
     */
    _businessArrangement?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for focal
     */
    _focal?: any[] | boolean | Element | number | number | null | string;
    /**
     * A business agreement number established between the provider and the insurer for special
     * business processing purposes.
     */
    businessArrangement?: string;
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
     * A flag to indicate that this Coverage is to be used for evaluation of this request when
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
}
export interface CoverageEligibilityRequestItem {
    /**
     * Extensions for supportingInfoSequence
     */
    _supportingInfoSequence?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Code to identify the general type of benefits under which products and services are
     * provided.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: Array<any[] | boolean | CoverageEligibilityRequestDiagnosis | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Facility where the services will be provided.
     */
    facility?: any[] | boolean | Reference | number | number | null | string;
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
     * This contains the product, service, drug or other billing code for the item.
     */
    productOrService?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The practitioner who is responsible for the product or service to be rendered to the
     * patient.
     */
    provider?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or
     * product line.
     */
    supportingInfoSequence?: number[];
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: any[] | boolean | Money | number | number | null | string;
}
export interface CoverageEligibilityRequestDiagnosis {
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
}
export declare enum Purpose {
    AuthRequirements = "auth-requirements",
    Benefits = "benefits",
    Discovery = "discovery",
    Validation = "validation"
}
export interface CoverageEligibilityRequestSupportingInfo {
    /**
     * Extensions for appliesToAll
     */
    _appliesToAll?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * The supporting materials are applicable for all detail items, product/servce categories
     * and specific billing codes.
     */
    appliesToAll?: boolean;
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
     * Additional data or information such as resources, documents, images etc. including
     * references to the data or the actual inclusion of the data.
     */
    information: any[] | boolean | Reference | number | number | null | string;
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
     * A number to uniquely identify supporting information entries.
     */
    sequence?: number;
}
