import {
    Element,
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
    Expression,
    Range
} from "./fhir._";

export interface RequestGroup {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for instantiatesCanonical
     */
    _instantiatesCanonical?: Element[];
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element[];
    /**
     * Extensions for intent
     */
    _intent?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for priority
     */
    _priority?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: RequestGroupAction[];
    /**
     * Provides a reference to the author of the request group.
     */
    author?: Reference;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: Reference[];
    /**
     * A code that identifies what the overall request group is.
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: RequestGroup[];
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A shared identifier common to all requests that were authorized more or less
     * simultaneously by a single author, representing the identifier of the requisition,
     * prescription or similar form.
     */
    groupIdentifier?: Identifier;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: Identifier[];
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
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: Annotation[];
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: string;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: Reference[];
    /**
     * Completed or terminated request(s) whose function is taken by this new request.
     */
    replaces?: Reference[];
    /**
     * This is a RequestGroup resource
     */
    resourceType?: any;
    /**
     * The current state of the request. For request groups, the status reflects the status of
     * all the requests in the group.
     */
    status?: string;
    /**
     * The subject for which the request group was created.
     */
    subject?: Reference;
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
 * A group of related requests that can be used to capture intended activities that have
 * inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroupAction {
    /**
     * Extensions for cardinalityBehavior
     */
    _cardinalityBehavior?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for groupingBehavior
     */
    _groupingBehavior?: Element;
    /**
     * Extensions for precheckBehavior
     */
    _precheckBehavior?: Element;
    /**
     * Extensions for prefix
     */
    _prefix?: Element;
    /**
     * Extensions for priority
     */
    _priority?: Element;
    /**
     * Extensions for requiredBehavior
     */
    _requiredBehavior?: Element;
    /**
     * Extensions for selectionBehavior
     */
    _selectionBehavior?: Element;
    /**
     * Extensions for textEquivalent
     */
    _textEquivalent?: Element;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Sub actions.
     */
    action?: RequestGroupAction[];
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: string;
    /**
     * A code that provides meaning for the action or action group. For example, a section may
     * have a LOINC code for a section of a documentation template.
     */
    code?: CodeableConcept[];
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the
     * action.
     */
    condition?: RequestGroupCondition[];
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string;
    /**
     * Didactic or other informational resources associated with the action that can be provided
     * to the CDS recipient. Information resources can include inline text commentary and links
     * to web resources.
     */
    documentation?: RelatedArtifact[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
    modifierExtension?: Extension[];
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: Reference[];
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
    relatedAction?: RequestGroupRelatedAction[];
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: string;
    /**
     * The resource that is the target of the action (e.g. CommunicationRequest).
     */
    resource?: Reference;
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
    timingAge?: Age;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: Duration;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: Period;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: Range;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: Timing;
    /**
     * The title of the action displayed to a user.
     */
    title?: string;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: CodeableConcept;
}

/**
 * A group of related requests that can be used to capture intended activities that have
 * inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroupCondition {
    /**
     * Extensions for kind
     */
    _kind?: Element;
    /**
     * An expression that returns true or false, indicating whether or not the condition is
     * satisfied.
     */
    expression?: Expression;
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
    modifierExtension?: Extension[];
}

/**
 * A group of related requests that can be used to capture intended activities that have
 * inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroupRelatedAction {
    /**
     * Extensions for actionId
     */
    _actionId?: Element;
    /**
     * Extensions for relationship
     */
    _relationship?: Element;
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
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes
     * before.
     */
    offsetDuration?: Duration;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes
     * before.
     */
    offsetRange?: Range;
    /**
     * The relationship of this action to the related action.
     */
    relationship?: string;
}