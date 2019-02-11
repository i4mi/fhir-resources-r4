import { Element, Extension, Meta, CodeableConcept, Period, Coding, Narrative, Reference } from "./fhir._";
export interface AuditEvent {
    /**
     * Extensions for action
     */
    _action?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for outcomeDesc
     */
    _outcomeDesc?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for recorded
     */
    _recorded?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: Action;
    /**
     * An actor taking an active role in the event or activity that is logged.
     */
    agent: Array<any[] | boolean | AuditEventAgent | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | AuditEvent | number | null | string>;
    /**
     * Specific instances of data or objects that have been accessed.
     */
    entity?: Array<any[] | boolean | AuditEventEntity | number | number | null | string>;
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
     * Indicates whether the event succeeded or failed.
     */
    outcome?: Outcome;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: string;
    /**
     * The period during which the activity occurred.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * The purposeOfUse (reason) that was used during the event being recorded.
     */
    purposeOfEvent?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The time when the event was recorded.
     */
    recorded?: string;
    /**
     * This is a AuditEvent resource
     */
    resourceType: any;
    /**
     * The system that is reporting the event.
     */
    source: any[] | boolean | AuditEventSource | number | number | null | string;
    /**
     * Identifier for the category of event.
     */
    subtype?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy,
     * function code, application name or URL. It identifies the performed function.
     */
    type: any[] | boolean | Coding | number | number | null | string;
}
/**
 * Indicator for type of action performed during the event that generated the audit.
 */
export declare enum Action {
    C = "C",
    D = "D",
    E = "E",
    R = "R",
    U = "U"
}
export interface AuditEventAgent {
    /**
     * Extensions for altId
     */
    _altId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for policy
     */
    _policy?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for requestor
     */
    _requestor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string
     * from authentication system. This identifier would be one known to a common authentication
     * system (e.g. single sign-on), if available.
     */
    altId?: string;
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
     * Where the event occurred.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: any[] | boolean | Coding | number | number | null | string;
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
     * Human-meaningful name for the agent.
     */
    name?: string;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: any[] | boolean | AuditEventNetwork | number | number | null | string;
    /**
     * The policy or plan that authorized the activity being recorded. Typically, a single
     * activity may have multiple applicable policies, such as patient consent, guarantor
     * funding, etc. The policy would also indicate the security token used.
     */
    policy?: string[];
    /**
     * The reason (purpose of use), specific to this agent, that was used during the event being
     * recorded.
     */
    purposeOfUse?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicator that the user is or is not the requestor, or initiator, for the event being
     * audited.
     */
    requestor?: boolean;
    /**
     * The security role that the user was acting under, that come from local codes defined by
     * the access control security system (e.g. RBAC, ABAC) used in the local context.
     */
    role?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Reference to who this agent is that was involved in the event.
     */
    who?: any[] | boolean | Reference | number | number | null | string;
}
export interface AuditEventNetwork {
    /**
     * Extensions for address
     */
    _address?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * An identifier for the network access point of the user device for the audit event.
     */
    address?: string;
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
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: AuditEventNetworkType;
}
/**
 * An identifier for the type of network access point that originated the audit event.
 */
export declare enum AuditEventNetworkType {
    The1 = "1",
    The2 = "2",
    The3 = "3",
    The4 = "4",
    The5 = "5"
}
export interface AuditEventEntity {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for query
     */
    _query?: any[] | boolean | Element | number | number | null | string;
    /**
     * Text that describes the entity in more detail.
     */
    description?: string;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: Array<any[] | boolean | AuditEventDetail | number | number | null | string>;
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
     * Identifier for the data life-cycle stage for the entity.
     */
    lifecycle?: any[] | boolean | Coding | number | number | null | string;
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
     * A name of the entity in the audit event.
     */
    name?: string;
    /**
     * The query parameters for a query-type entities.
     */
    query?: string;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: any[] | boolean | Coding | number | number | null | string;
    /**
     * Security labels for the identified entity.
     */
    securityLabel?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * The type of the object that was involved in this audit event.
     */
    type?: any[] | boolean | Coding | number | number | null | string;
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: any[] | boolean | Reference | number | number | null | string;
}
export interface AuditEventDetail {
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
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
     * The type of extra detail provided in the value.
     */
    type?: string;
    /**
     * The  value of the extra detail.
     */
    valueBase64Binary?: string;
    /**
     * The  value of the extra detail.
     */
    valueString?: string;
}
/**
 * Indicates whether the event succeeded or failed.
 */
export declare enum Outcome {
    The0 = "0",
    The12 = "12",
    The4 = "4",
    The8 = "8"
}
export interface AuditEventSource {
    /**
     * Extensions for site
     */
    _site?: any[] | boolean | Element | number | number | null | string;
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
     * Identifier of the source where the event was detected.
     */
    observer: any[] | boolean | Reference | number | number | null | string;
    /**
     * Logical source location within the healthcare enterprise network.  For example, a
     * hospital or other provider location within a multi-entity provider group.
     */
    site?: string;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: Array<any[] | boolean | Coding | number | number | null | string>;
}
