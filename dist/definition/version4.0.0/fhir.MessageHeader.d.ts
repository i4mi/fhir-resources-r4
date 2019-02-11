import { Element, Reference, Coding, Extension, Meta, CodeableConcept, Narrative, ContactPoint } from "./fhir._";
export interface MessageHeader {
    /**
     * Extensions for eventUri
     */
    _eventUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * The logical author of the message - the person or device that decided the described event
     * should happen. When there is more than one candidate, pick the most proximal to the
     * MessageHeader. Can provide other authors in extensions.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MessageHeader | number | null | string>;
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: string;
    /**
     * The destination application which the message is intended for.
     */
    destination?: Array<any[] | boolean | MessageHeaderDestination | number | number | null | string>;
    /**
     * The person or device that performed the data entry leading to this message. When there is
     * more than one candidate, pick the most proximal to the message. Can provide other
     * enterers in extensions.
     */
    enterer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Code that identifies the event this message represents and connects it with its
     * definition. Events defined as part of the FHIR specification have the system value
     * "http://terminology.hl7.org/CodeSystem/message-events".  Alternatively uri to the
     * EventDefinition.
     */
    eventCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * Code that identifies the event this message represents and connects it with its
     * definition. Events defined as part of the FHIR specification have the system value
     * "http://terminology.hl7.org/CodeSystem/message-events".  Alternatively uri to the
     * EventDefinition.
     */
    eventUri?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The actual data of the message - a reference to the root/focus class of the event.
     */
    focus?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of
     * the event that is a focus of this message.
     */
    reason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This is a MessageHeader resource
     */
    resourceType: any;
    /**
     * Information about the message that this message is a response to.  Only present if this
     * message is a response.
     */
    response?: any[] | boolean | MessageHeaderResponse | number | number | null | string;
    /**
     * The person or organization that accepts overall responsibility for the contents of the
     * message. The implication is that the message event happened under the policies of the
     * responsible party.
     */
    responsible?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the sending system to allow the use of a trust relationship.
     */
    sender?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The source application from which this message originated.
     */
    source: any[] | boolean | MessageHeaderSource | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface MessageHeaderDestination {
    /**
     * Extensions for endpoint
     */
    _endpoint?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicates where the message should be routed to.
     */
    endpoint?: string;
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
     * Human-readable name for the target system.
     */
    name?: string;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department
     * when routing to a specific application isn't sufficient.
     */
    receiver?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the target end system in situations where the initial message transmission is
     * to an intermediary system.
     */
    target?: any[] | boolean | Reference | number | number | null | string;
}
export interface MessageHeaderResponse {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for identifier
     */
    _identifier?: any[] | boolean | Element | number | number | null | string;
    /**
     * Code that identifies the type of response to the message - whether it was successful or
     * not, and whether it should be resent or not.
     */
    code?: Code;
    /**
     * Full details of any issues found in the message.
     */
    details?: any[] | boolean | Reference | number | number | null | string;
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
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier?: string;
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
/**
 * Code that identifies the type of response to the message - whether it was successful or
 * not, and whether it should be resent or not.
 */
export declare enum Code {
    FatalError = "fatal-error",
    Ok = "ok",
    TransientError = "transient-error"
}
export interface MessageHeaderSource {
    /**
     * Extensions for endpoint
     */
    _endpoint?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for software
     */
    _software?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message
     * communications.
     */
    contact?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * Identifies the routing target to send acknowledgements to.
     */
    endpoint?: string;
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
     * Human-readable name for the source system.
     */
    name?: string;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: string;
    /**
     * Can convey versions of multiple systems in situations where a message passes through
     * multiple hands.
     */
    version?: string;
}
