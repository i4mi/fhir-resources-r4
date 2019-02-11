import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Annotation, Period, Timing, Narrative, Quantity, Range } from "./fhir._";
export interface DeviceRequest {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for intent
     */
    _intent?: any[] | boolean | Element | number | number | null | string;
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
     * When the request transitioned to being actionable.
     */
    authoredOn?: string;
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The details of the device to be used.
     */
    codeCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The details of the device to be used.
     */
    codeReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | DeviceRequest | number | null | string>;
    /**
     * An encounter that provides additional context in which this request is made.
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
     * Composite request this is part of.
     */
    groupIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that
     * is adhered to in whole or in part by this DeviceRequest.
     */
    instantiatesCanonical?: string[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other
     * definition that is adhered to in whole or in part by this DeviceRequest.
     */
    instantiatesUri?: string[];
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that
     * may be required for delivering the requested service.
     */
    insurance?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Whether the request is a proposal, plan, an original order or a reflex order.
     */
    intent?: string;
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
     * Details about this request that were not represented at all or sufficiently in one of the
     * attributes provided in a class. These may include for example a comment, an instruction,
     * or a note associated with the statement.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many
     * different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour
     * before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov
     * 2013".
     */
    occurrenceDateTime?: string;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many
     * different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour
     * before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov
     * 2013".
     */
    occurrencePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many
     * different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour
     * before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov
     * 2013".
     */
    occurrenceTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * Specific parameters for the ordered item.  For example, the prism value for lenses.
     */
    parameter?: Array<any[] | boolean | DeviceRequestParameter | number | number | null | string>;
    /**
     * The desired performer for doing the diagnostic testing.
     */
    performer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Desired type of performer for doing the diagnostic testing.
     */
    performerType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates how quickly the {{title}} should be addressed with respect to other requests.
     */
    priority?: string;
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    priorRequest?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Reason or justification for the use of this device.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Reason or justification for the use of this device.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Key events in the history of the request.
     */
    relevantHistory?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a DeviceRequest resource
     */
    resourceType: any;
    /**
     * The status of the request.
     */
    status?: string;
    /**
     * The patient who will use the device.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * Additional clinical information about the patient that may influence the request
     * fulfilment.  For example, this may include where on the subject's body the device will be
     * used (i.e. the target site).
     */
    supportingInfo?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface DeviceRequestParameter {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The value of the device detail.
     */
    valueBoolean?: boolean;
    /**
     * The value of the device detail.
     */
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value of the device detail.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The value of the device detail.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
}
