import { Element, DataRequirement, Reference, Extension, Identifier, Meta, CodeableConcept, Annotation, Narrative } from "./fhir._";
export interface GuidanceResponse {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for moduleCanonical
     */
    _moduleCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for moduleUri
     */
    _moduleUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | GuidanceResponse | number | null | string>;
    /**
     * If the evaluation could not be completed due to lack of information, or additional
     * information would potentially result in a more accurate response, this element will a
     * description of the data required in order to proceed with the evaluation. A subsequent
     * request to the service should include this data.
     */
    dataRequirement?: Array<any[] | boolean | DataRequirement | number | number | null | string>;
    /**
     * The encounter during which this response was created or to which the creation of this
     * record is tightly associated.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Messages resulting from the evaluation of the artifact or artifacts. As part of
     * evaluating the request, the engine may produce informational or warning messages. These
     * messages will be provided by this element.
     */
    evaluationMessage?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Allows a service to provide  unique, business identifiers for the response.
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
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleCanonical?: string;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleUri?: string;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Indicates when the guidance response was processed.
     */
    occurrenceDateTime?: string;
    /**
     * The output parameters of the evaluation, if any. Many modules will result in the return
     * of specific resources such as procedure or communication requests that are returned as
     * part of the operation result. However, modules may define specific outputs that would be
     * returned as the result of the evaluation, and these would be returned in this element.
     */
    outputParameters?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Provides a reference to the device that performed the guidance.
     */
    performer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Describes the reason for the guidance response in coded or textual form.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates the reason the request was initiated. This is typically provided as a parameter
     * to the evaluation and echoed by the service, although for some use cases, such as
     * subscription- or event-based scenarios, it may provide an indication of the cause for the
     * response.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The identifier of the request associated with this response. If an identifier was given
     * as part of the request, it will be reproduced here to enable the requester to more easily
     * identify the response in a multi-request scenario.
     */
    requestIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * This is a GuidanceResponse resource
     */
    resourceType: any;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    result?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The status of the response. If the evaluation is completed successfully, the status will
     * indicate success. However, in order to complete the evaluation, the engine may require
     * more information. In this case, the status will be data-required, and the response will
     * contain a description of the additional required information. If the evaluation completed
     * successfully, but the engine determines that a potentially more accurate response could
     * be provided if more data was available, the status will be data-requested, and the
     * response will contain a description of the additional requested information.
     */
    status?: FhirGuidanceResponseStatus;
    /**
     * The patient for which the request was processed.
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
/**
 * The status of the response. If the evaluation is completed successfully, the status will
 * indicate success. However, in order to complete the evaluation, the engine may require
 * more information. In this case, the status will be data-required, and the response will
 * contain a description of the additional required information. If the evaluation completed
 * successfully, but the engine determines that a potentially more accurate response could
 * be provided if more data was available, the status will be data-requested, and the
 * response will contain a description of the additional requested information.
 */
export declare enum FhirGuidanceResponseStatus {
    DataRequested = "data-requested",
    DataRequired = "data-required",
    EnteredInError = "entered-in-error",
    Failure = "failure",
    InProgress = "in-progress",
    Success = "success"
}
