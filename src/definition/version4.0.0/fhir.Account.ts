import { Element, 
         Extension,
         Identifier,
         Meta,
         Reference,
         Period,
         Narrative,
         CodeableConcept } from './fhir._';

// To parse this data:
//
//   import { Convert, FhirAccount } from "./file";
//
//   const fhirAccount = Convert.toFhirAccount(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Account {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
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
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Account | number | null | string>;
    /**
     * The party(s) that are responsible for covering the payment of this account, and what
     * order should they be applied to the account.
     */
    coverage?: Array<any[] | boolean | AccountCoverage | number | number | null | string>;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: Array<any[] | boolean | AccountGuarantor | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for
     * human use (e.g. credit card number).
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
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing
     * the Account.
     */
    owner?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Reference to a parent Account.
     */
    partOf?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a Account resource
     */
    resourceType: any;
    /**
     * The date range of services associated with this account.
     */
    servicePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Indicates whether the account is presently used/usable or not.
     */
    status?: FhirAccountStatus;
    /**
     * Identifies the entity which incurs the expenses. While the immediate recipients of
     * services or goods might be entities related to the subject, the expenses were ultimately
     * incurred by the subject of the Account.
     */
    subject?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface AccountCoverage {
    /**
     * Extensions for priority
     */
    _priority?: any[] | boolean | Element | number | number | null | string;
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this
     * account (including self-pay).
     *
     * A coverage may only be responsible for specific types of charges, and the sequence of the
     * coverages in the account could be important when processing billing.
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
     * The priority of the coverage in the context of this account.
     */
    priority?: number;
}

export interface AccountGuarantor {
    /**
     * Extensions for onHold
     */
    _onHold?: any[] | boolean | Element | number | number | null | string;
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
     * A guarantor may be placed on credit hold or otherwise have their role temporarily
     * suspended.
     */
    onHold?: boolean;
    /**
     * The entity who is responsible.
     */
    party: any[] | boolean | Reference | number | number | null | string;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: any[] | boolean | Period | number | number | null | string;
}

/**
 * Indicates whether the account is presently used/usable or not.
 */
export enum FhirAccountStatus {
    Active = "active",
    EnteredInError = "entered-in-error",
    Inactive = "inactive",
    OnHold = "on-hold",
    Unknown = "unknown",
}