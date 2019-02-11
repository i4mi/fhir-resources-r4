import { Element, Reference, Extension, Identifier, Meta, Period, CodeableConcept, Narrative, Money, Quantity } from "./fhir._";
export interface Coverage {
    /**
     * Extensions for dependent
     */
    _dependent?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for network
     */
    _network?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for order
     */
    _order?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for subrogation
     */
    _subrogation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for subscriberId
     */
    _subscriberId?: any[] | boolean | Element | number | number | null | string;
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or
     * services are provided.
     */
    beneficiary: any[] | boolean | Reference | number | number | null | string;
    /**
     * A suite of underwriter specific classifiers.
     */
    class?: Array<any[] | boolean | CoverageClass | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Coverage | number | null | string>;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A suite of codes indicating the cost category and associated amount which have been
     * detailed in the policy and may have been  included on the health card.
     */
    costToBeneficiary?: Array<any[] | boolean | CoverageCostToBeneficiary | number | number | null | string>;
    /**
     * A unique identifier for a dependent under the coverage.
     */
    dependent?: string;
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
     * A unique identifier assigned to this coverage.
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
     * The insurer-specific identifier for the insurer-defined network of providers to which the
     * beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise
     * 'out of network' terms and conditions apply.
     */
    network?: string;
    /**
     * The order of applicability of this coverage relative to other coverages which are
     * currently in force. Note, there may be gaps in the numbering and this does not imply
     * primary, secondary etc. as the specific positioning of coverages depends upon the episode
     * of care.
     */
    order?: number;
    /**
     * The program or plan underwriter or payor including both insurance and non-insurance
     * agreements, such as patient-pay agreements.
     */
    payor: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the
     * start date isn't known, a missing end date means the coverage is continuing to be in
     * force.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * The party who 'owns' the insurance policy.
     */
    policyHolder?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The relationship of beneficiary (patient) to the subscriber.
     */
    relationship?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This is a Coverage resource
     */
    resourceType: any;
    /**
     * The status of the resource instance.
     */
    status?: string;
    /**
     * When 'subrogation=true' this insurance instance has been included not for adjudication
     * but to provide insurers with the details to recover costs.
     */
    subrogation?: boolean;
    /**
     * The party who has signed-up for or 'owns' the contractual relationship to the policy or
     * to whom the benefit of the policy for services rendered to them or their family is due.
     */
    subscriber?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers
     * compensation, auto), group health or payment by an individual or organization.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface CoverageClass {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
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
     * A short description for the class.
     */
    name?: string;
    /**
     * The type of classification for which an insurer-specific class label or number and
     * optional name is provided, for example may be used to identify a class of coverage or
     * employer group, Policy, Plan.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The alphanumeric string value associated with the insurer issued label.
     */
    value?: string;
}
export interface CoverageCostToBeneficiary {
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective
     * periods.
     */
    exception?: Array<any[] | boolean | CoverageException | number | number | null | string>;
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
     * The category of patient centric costs associated with treatment.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The amount due from the patient for the cost category.
     */
    valueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The amount due from the patient for the cost category.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
}
export interface CoverageException {
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
     * The timeframe during when the exception is in force.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * The code for the specific exception.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
