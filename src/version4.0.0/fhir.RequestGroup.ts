import { Element,
         Reference, 
         CodeableConcept,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative,
         RelatedArtifact,
         Age,
         Duration,
         Period,
         Timing,
         Expression} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirRequestGroup } from "./file";
//
//   const fhirRequestGroup = Convert.toFhirRequestGroup(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface RequestGroup {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instantiatesCanonical
     */
    _instantiatesCanonical?: Array<any[] | boolean | Element | number | number | null | string>;
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
     * Extensions for priority
     */
    _priority?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: Array<any[] | boolean | RequestGroupAction | number | number | null | string>;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A code that identifies what the overall request group is.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | RequestGroup | number | null | string>;
    /**
     * Describes the context of the request group, if any.
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
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other
     * definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[];
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition
     * that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[];
    /**
     * Indicates the level of authority/intentionality associated with the request and where the
     * request fits into the workflow chain.
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
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: string;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Completed or terminated request(s) whose function is taken by this new request.
     */
    replaces?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a RequestGroup resource
     */
    resourceType: any;
    /**
     * The current state of the request. For request groups, the status reflects the status of
     * all the requests in the group.
     */
    status?: string;
    /**
     * The subject for which the request group was created.
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

export interface RequestGroupAction {
    /**
     * Extensions for cardinalityBehavior
     */
    _cardinalityBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for groupingBehavior
     */
    _groupingBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for precheckBehavior
     */
    _precheckBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for prefix
     */
    _prefix?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for priority
     */
    _priority?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for requiredBehavior
     */
    _requiredBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for selectionBehavior
     */
    _selectionBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for textEquivalent
     */
    _textEquivalent?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Sub actions.
     */
    action?: Array<any[] | boolean | RequestGroupAction | number | number | null | string>;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: string;
    /**
     * A code that provides meaning for the action or action group. For example, a section may
     * have a LOINC code for a section of a documentation template.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the
     * action.
     */
    condition?: Array<any[] | boolean | RequestGroupCondition | number | number | null | string>;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string;
    /**
     * Didactic or other informational resources associated with the action that can be provided
     * to the CDS recipient. Information resources can include inline text commentary and links
     * to web resources.
     */
    documentation?: Array<any[] | boolean | RelatedArtifact | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: string;
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
     * The participant that should perform or be responsible for this action.
     */
    participant?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: string;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: string;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: Array<any[] | boolean | RequestGroupRelatedAction | number | number | null | string>;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: string;
    /**
     * The resource that is the target of the action (e.g. CommunicationRequest).
     */
    resource?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: string;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable
     * description of the action when the definition is consumed by a system that might not be
     * capable of interpreting it dynamically.
     */
    textEquivalent?: string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The title of the action displayed to a user.
     */
    title?: string;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface RequestGroupCondition {
    /**
     * Extensions for kind
     */
    _kind?: any[] | boolean | Element | number | number | null | string;
    /**
     * An expression that returns true or false, indicating whether or not the condition is
     * satisfied.
     */
    expression?: any[] | boolean | Expression | number | number | null | string;
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
     * The kind of condition.
     */
    kind?: string;
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

export interface RequestGroupRelatedAction {
    /**
     * Extensions for actionId
     */
    _actionId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for relationship
     */
    _relationship?: any[] | boolean | Element | number | number | null | string;
    /**
     * The element id of the action this is related to.
     */
    actionId?: string;
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
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes
     * before.
     */
    offsetDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes
     * before.
     */
    offsetRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The relationship of this action to the related action.
     */
    relationship?: string;
}