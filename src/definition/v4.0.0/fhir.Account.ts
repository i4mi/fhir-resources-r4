import { Element, Identifier, Reference, Period, CodeableConcept, DomainResource, BackboneElement } from './fhir._';
////////////////////////////////////////////////////////////////////////////////
// FILENAME :        fhir.Account.ts             
//
// DESCRIPTION :
//       Account classes end enums 
//
// DATE :
//       15.03.2019  
//
// NOTES :
//       This libraray is free to use.
//
// LICENSE :
//       Apache License V2.0
// 
// AUTHOR/EDITOR :    Stefan Iseli        BASIC FILE GENERATION :    quicktype.io
//
// CHANGES FROM ORIGINAL :
//
// Naming of interfaces
// Implemented inheritance and relations between interfaces
//
////////////////////////////////////////////////////////////////////////////////

export interface Account extends DomainResource {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * The party(s) that are responsible for covering the payment of this account, and what
     * order should they be applied to the account.
     */
    coverage?: AccountCoverage[];
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: AccountGuarantor[];
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for
     * human use (e.g. credit card number).
     */
    identifier?: Identifier[];
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing
     * the Account.
     */
    owner?: Reference;
    /**
     * Reference to a parent Account.
     */
    partOf?: Reference;
    /**
     * The date range of services associated with this account.
     */
    servicePeriod?: Period;
    /**
     * Indicates whether the account is presently used/usable or not.
     */
    status?: AccountStatus;
    /**
     * Identifies the entity which incurs the expenses. While the immediate recipients of
     * services or goods might be entities related to the subject, the expenses were ultimately
     * incurred by the subject of the Account.
     */
    subject?: Reference[];
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: CodeableConcept;
}

/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare
 * field, used to track charges for a patient, cost centers, etc.
 */
export interface AccountCoverage extends BackboneElement {
    /**
     * Extensions for priority
     */
    _priority?: Element;
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this
     * account (including self-pay).
     *
     * A coverage may only be responsible for specific types of charges, and the sequence of the
     * coverages in the account could be important when processing billing.
     */
    coverage?: Reference;
    /**
     * The priority of the coverage in the context of this account.
     */
    priority?: number;
}

/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare
 * field, used to track charges for a patient, cost centers, etc.
 */
export interface AccountGuarantor extends BackboneElement {
    /**
     * Extensions for onHold
     */
    _onHold?: Element;
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily
     * suspended.
     */
    onHold?: boolean;
    /**
     * The entity who is responsible.
     */
    party?: Reference;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: Period;
}


/**
 * Indicates whether the account is presently used/usable or not.
 */
export enum AccountStatus {
    Active = "active",
    EnteredInError = "entered-in-error",
    Inactive = "inactive",
    OnHold = "on-hold",
    Unknown = "unknown",
}
