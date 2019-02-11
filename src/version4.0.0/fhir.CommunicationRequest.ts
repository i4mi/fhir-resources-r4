import { Element,
         Reference,
         CodeableConcept,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Period,
         Narrative,
         Attachment } from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirCommunicationRequest } from "./file";
//
//   const fhirCommunicationRequest = Convert.toFhirCommunicationRequest(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CommunicationRequest {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for priority
     */
    _priority?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Other resources that pertain to this communication request and to which this
     * communication request should be associated.
     */
    about?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other
     * statuses, indicates the date of activation.
     */
    authoredOn?: string;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The type of message to be sent such as alert, notification, reminder, instruction, etc.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | CommunicationRequest | number | null | string>;
    /**
     * If true indicates that the CommunicationRequest is asking for the specified action to
     * *not* occur.
     */
    doNotPerform?: boolean;
    /**
     * The Encounter during which this CommunicationRequest was created or to which the creation
     * of this record is tightly associated.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A shared identifier common to all requests that were authorized more or less
     * simultaneously by a single author, representing the identifier of the requisition,
     * prescription or similar form.
     */
    groupIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this communication request by the performer or other
     * systems which remain constant as the resource is updated and propagates from server to
     * server.
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
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Comments made about the request by the requester, sender, recipient, subject or other
     * participants.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: string;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: Array<any[] | boolean | CommunicationRequestPayload | number | number | null | string>;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as
     * stat, urgent, routine.
     */
    priority?: string;
    /**
     * Describes why the request is being made in coded or textual form.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or
     * care team) which is the intended target of the communication.
     */
    recipient?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Completed or terminated request(s) whose function is taken by this new request.
     */
    replaces?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The device, individual, or organization who initiated the request and has responsibility
     * for its activation.
     */
    requester?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a CommunicationRequest resource
     */
    resourceType: any;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is
     * to be the source of the communication.
     */
    sender?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The status of the proposal or order.
     */
    status?: string;
    /**
     * Captures the reason for the current state of the CommunicationRequest.
     */
    statusReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface CommunicationRequestPayload {
    /**
     * Extensions for contentString
     */
    _contentString?: any[] | boolean | Element | number | number | null | string;
    /**
     * The communicated content (or for multi-part communications, one portion of the
     * communication).
     */
    contentAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * The communicated content (or for multi-part communications, one portion of the
     * communication).
     */
    contentReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The communicated content (or for multi-part communications, one portion of the
     * communication).
     */
    contentString?: string;
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