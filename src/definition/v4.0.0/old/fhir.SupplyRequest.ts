import {
    Element,
    CodeableConcept,
    Reference,
    Extension,
    Identifier,
    Meta,
    Period,
    Timing,
    Quantity,
    Narrative,
    Range
} from "./fhir._";

export interface SupplyRequest {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: Element;
    /**
     * Extensions for priority
     */
    _priority?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * When the request was made.
     */
    authoredOn?: string;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows
     * associated with the supply process.
     */
    category?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: SupplyRequest[];
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: Reference;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this SupplyRequest by the author and/or other systems.
     * These identifiers remain constant as the resource is updated and propagates from server
     * to server.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The item that is requested to be supplied. This is either a link to a resource
     * representing the details of the item or a code that identifies the item from a known list.
     */
    itemCodeableConcept?: CodeableConcept;
    /**
     * The item that is requested to be supplied. This is either a link to a resource
     * representing the details of the item or a code that identifies the item from a known list.
     */
    itemReference?: Reference;
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
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: Period;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: Timing;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: SupplyRequestParameter[];
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other
     * requests.
     */
    priority?: string;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity?: Quantity;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: CodeableConcept[];
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: Reference[];
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: Reference;
    /**
     * This is a SupplyRequest resource
     */
    resourceType?: any;
    /**
     * Status of the supply request.
     */
    status?: SupplyRequestStatus;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: Reference[];
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
 * A record of a request for a medication, substance or device used in the healthcare
 * setting.
 */
export interface SupplyRequestParameter {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * A code or string that identifies the device detail being asserted.
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
    /**
     * The value of the device detail.
     */
    valueBoolean?: boolean;
    /**
     * The value of the device detail.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * The value of the device detail.
     */
    valueQuantity?: Quantity;
    /**
     * The value of the device detail.
     */
    valueRange?: Range;
}

/**
 * Status of the supply request.
 */
export enum SupplyRequestStatus {
    Active = "active",
    Cancelled = "cancelled",
    Completed = "completed",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    Suspended = "suspended",
    Unknown = "unknown",
}