import {
    Element,
    Reference,
    CodeableConcept,
    Period,
    Extension,
    Identifier,
    Meta,
    Annotation,
    Narrative,
    Address,
    Age,
    Attachment,
    Coding,
    ContactDetail,
    ContactPoint,
    Contributor,
    Count,
    DataRequirement,
    Distance,
    Dosage,
    Duration,
    Expression,
    HumanName,
    Money,
    ParameterDefinition,
    Quantity,
    Ratio,
    RelatedArtifact,
    SampledData,
    Signature,
    Timing,
    TriggerDefinition,
    UsageContext,
    Range
} from "./fhir._";

export interface Task {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element;
    /**
     * Extensions for intent
     */
    _intent?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lastModified
     */
    _lastModified?: Element;
    /**
     * Extensions for priority
     */
    _priority?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * The date and time this task was created.
     */
    authoredOn?: string;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.
     * It references a "request" resource such as a ServiceRequest, MedicationRequest,
     * ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is
     * seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based
     * on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( =
     * FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: Reference[];
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: CodeableConcept;
    /**
     * A name or code (or both) briefly describing what the task involves.
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Task[];
    /**
     * A free-text description of what is to be performed.
     */
    description?: string;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which
     * this task was created.
     */
    encounter?: Reference;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final
     * action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: Period;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The request being actioned or the resource being manipulated by this task.
     */
    focus?: Reference;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g.,
     * the patient).
     */
    for?: Reference;
    /**
     * An identifier that links together multiple tasks and other requests that were created in
     * the same context.
     */
    groupIdentifier?: Identifier;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * The business identifier for this task.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: TaskInput[];
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition
     * that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other
     * definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that
     * may be relevant to the Task.
     */
    insurance?: Reference[];
    /**
     * Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a
     * proposed task, a planned task, an actionable task, etc.
     */
    intent?: Intent;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: Reference;
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
     * Free-text information captured about the task as it progresses.
     */
    note?: Annotation[];
    /**
     * Outputs produced by the Task.
     */
    output?: TaskOutput[];
    /**
     * Individual organization or Device currently responsible for task execution.
     */
    owner?: Reference;
    /**
     * Task that this particular task is part of.
     */
    partOf?: Reference[];
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: CodeableConcept[];
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: string;
    /**
     * A description or code indicating why this task needs to be performed.
     */
    reasonCode?: CodeableConcept;
    /**
     * A resource reference indicating why this task needs to be performed.
     */
    reasonReference?: Reference;
    /**
     * Links to Provenance records for past versions of this Task that identify key state
     * transitions or updates that are likely to be relevant to a user looking at the current
     * version of the task.
     */
    relevantHistory?: Reference[];
    /**
     * The creator of the task.
     */
    requester?: Reference;
    /**
     * This is a Task resource
     */
    resourceType?: any;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is
     * asking for the request to be actioned), this element identifies any limitations on what
     * parts of the referenced request should be actioned.
     */
    restriction?: TaskRestriction;
    /**
     * The current status of the task.
     */
    status?: TaskStatus;
    /**
     * An explanation as to why this task is held, failed, was refused, etc.
     */
    statusReason?: CodeableConcept;
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
 * A task to be performed.
 */
export interface TaskInput {
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: Element;
    /**
     * Extensions for valueCode
     */
    _valueCode?: Element;
    /**
     * Extensions for valueDate
     */
    _valueDate?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueId
     */
    _valueId?: Element;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: Element;
    /**
     * Extensions for valueOid
     */
    _valueOid?: Element;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: Element;
    /**
     * Extensions for valueUri
     */
    _valueUri?: Element;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: Element;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: Element;
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
     * A code or description indicating how the input is intended to be used as part of the task
     * execution.
     */
    type?: CodeableConcept;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: Address;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: Age;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: Annotation;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: Attachment;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: Coding;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactDetail?: ContactDetail;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: ContactPoint;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: Contributor;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: Count;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: DataRequirement;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: Distance;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: Dosage;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: Duration;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: Expression;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: HumanName;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: Identifier;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: Money;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: ParameterDefinition;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: Period;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: Quantity;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: Range;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: Ratio;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: Reference;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: RelatedArtifact;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: SampledData;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: Signature;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: Timing;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: TriggerDefinition;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUsageContext?: UsageContext;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string;
}

/**
 * Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a
 * proposed task, a planned task, an actionable task, etc.
 */
export enum Intent {
    FillerOrder = "filler-order",
    InstanceOrder = "instance-order",
    Option = "option",
    Order = "order",
    OriginalOrder = "original-order",
    Plan = "plan",
    Proposal = "proposal",
    ReflexOrder = "reflex-order",
    Unknown = "unknown",
}

/**
 * A task to be performed.
 */
export interface TaskOutput {
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: Element;
    /**
     * Extensions for valueCode
     */
    _valueCode?: Element;
    /**
     * Extensions for valueDate
     */
    _valueDate?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueId
     */
    _valueId?: Element;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: Element;
    /**
     * Extensions for valueOid
     */
    _valueOid?: Element;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: Element;
    /**
     * Extensions for valueUri
     */
    _valueUri?: Element;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: Element;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: Element;
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
     * The name of the Output parameter.
     */
    type?: CodeableConcept;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: Address;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: Age;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: Annotation;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: Attachment;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: Coding;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactDetail?: ContactDetail;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: ContactPoint;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: Contributor;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: Count;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: DataRequirement;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: Distance;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: Dosage;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: Duration;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: Expression;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: HumanName;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: Identifier;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: Money;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: ParameterDefinition;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: Period;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: Quantity;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: Range;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: Ratio;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: Reference;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: RelatedArtifact;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: SampledData;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: Signature;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: Timing;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: TriggerDefinition;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUsageContext?: UsageContext;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string;
}

/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is
 * asking for the request to be actioned), this element identifies any limitations on what
 * parts of the referenced request should be actioned.
 *
 * A task to be performed.
 */
export interface TaskRestriction {
    /**
     * Extensions for repetitions
     */
    _repetitions?: Element;
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
     * Over what time-period is fulfillment sought.
     */
    period?: Period;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is
     * fulfillment sought?
     */
    recipient?: Reference[];
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number;
}

/**
 * The current status of the task.
 */
export enum TaskStatus {
    Accepted = "accepted",
    Cancelled = "cancelled",
    Completed = "completed",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    Failed = "failed",
    InProgress = "in-progress",
    OnHold = "on-hold",
    Ready = "ready",
    Received = "received",
    Rejected = "rejected",
    Requested = "requested",
}