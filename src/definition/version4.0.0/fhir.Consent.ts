import { Element,
         CodeableConcept, 
         Extension,
         Identifier,
         Meta,
         Reference,
         Attachment,
         Narrative,
         Coding,
         Period} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirConsent } from "./file";
//
//   const fhirConsent = Convert.toFhirConsent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Consent {
    /**
     * Extensions for dateTime
     */
    _dateTime?: any[] | boolean | Element | number | number | null | string;
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
     * A ification of the type of consents found in the statement. This element supports
     * indexing and retrieval of consent statements.
     */
    category: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Consent | number | null | string>;
    /**
     * When this  Consent was issued / created / indexed.
     */
    dateTime?: string;
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
     * Unique identifier for this copy of the Consent Statement.
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
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The patient/healthcare consumer to whom this consent applies.
     */
    patient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Either the Grantor, which is the entity responsible for granting the rights listed in a
     * Consent Directive or the Grantee, which is the entity responsible for complying with the
     * Consent Directive, including any obligations or limitations on authorizations and
     * enforcement of prohibitions.
     */
    performer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The references to the policies that are included in this consent scope. Policies may be
     * organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: Array<any[] | boolean | ConsentPolicy | number | number | null | string>;
    /**
     * A reference to the specific base computable regulation or policy.
     */
    policyRule?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or
     * removal of access permissions.
     */
    provision?: any[] | boolean | ConsentProvision | number | number | null | string;
    /**
     * This is a Consent resource
     */
    resourceType: any;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.
     * This list is now extensible.
     */
    scope: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The source on which this consent statement is based. The source might be a scanned
     * original paper form, or a reference to a consent that links back to such a source, a
     * reference to a document repository (e.g. XDS) that stores the original consent document.
     */
    sourceAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * The source on which this consent statement is based. The source might be a scanned
     * original paper form, or a reference to a consent that links back to such a source, a
     * reference to a document repository (e.g. XDS) that stores the original consent document.
     */
    sourceReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates the current state of this consent.
     */
    status?: FhirConsentStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with
     * the patient, his/her family or another authorized person.
     */
    verification?: Array<any[] | boolean | ConsentVerification | number | number | null | string>;
}

export interface ConsentPolicy {
    /**
     * Extensions for authority
     */
    _authority?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for uri
     */
    _uri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing
     * policies pertaining to Consent Directives.
     */
    authority?: string;
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
     * The references to the policies that are included in this consent scope. Policies may be
     * organizational, but are often defined jurisdictionally, or in law.
     */
    uri?: string;
}

export interface ConsentProvision {
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Actions controlled by this Rule.
     */
    action?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some
     * property they share (e.g. 'admitting officers').
     */
    actor?: Array<any[] | boolean | ConsentActor | number | number | null | string>;
    /**
     * The class of information covered by this rule. The type can be a FHIR resource type, a
     * profile on a type, or a CDA document, or some other type that indicates what sort of
     * information the consent relates to.
     */
    class?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * If this code is found in an instance, then the rule applies.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: Array<any[] | boolean | ConsentData | number | number | null | string>;
    /**
     * Clinical or Operational Relevant period of time that bounds the data controlled by this
     * rule.
     */
    dataPeriod?: any[] | boolean | Period | number | number | null | string;
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
     * The timeframe in this rule is valid.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: Array<any[] | boolean | ConsentProvision | number | number | null | string>;
    /**
     * The context of the activities a user is taking - why the user is accessing the data -
     * that are controlled by this rule.
     */
    purpose?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * A security label, comprised of 0..* security label fields (Privacy tags), which define
     * which resources are controlled by this exception.
     */
    securityLabel?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in
     * root rule, required in all nested rules.
     */
    type?: ConsentProvisionType;
}

export interface ConsentActor {
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
     * The resource that identifies the actor. To identify actors by type, use group to identify
     * a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: any[] | boolean | Reference | number | number | null | string;
    /**
     * How the individual is involved in the resources content that is described in the
     * exception.
     */
    role: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ConsentData {
    /**
     * Extensions for meaning
     */
    _meaning?: any[] | boolean | Element | number | number | null | string;
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
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning?: Meaning;
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
     * A reference to a specific resource that defines which resources are covered by this
     * consent.
     */
    reference: any[] | boolean | Reference | number | number | null | string;
}

/**
 * How the resource reference is interpreted when testing consent restrictions.
 */
export enum Meaning {
    Authoredby = "authoredby",
    Dependents = "dependents",
    Instance = "instance",
    Related = "related",
}

/**
 * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in
 * root rule, required in all nested rules.
 */
export enum ConsentProvisionType {
    Deny = "deny",
    Permit = "permit",
}

/**
 * Indicates the current state of this consent.
 */
export enum FhirConsentStatus {
    Active = "active",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    Inactive = "inactive",
    Proposed = "proposed",
    Rejected = "rejected",
}

export interface ConsentVerification {
    /**
     * Extensions for verificationDate
     */
    _verificationDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for verified
     */
    _verified?: any[] | boolean | Element | number | number | null | string;
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
     * Date verification was collected.
     */
    verificationDate?: string;
    /**
     * Has the instruction been verified.
     */
    verified?: boolean;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: any[] | boolean | Reference | number | number | null | string;
}