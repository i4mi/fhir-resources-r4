import { Element,
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
         UsageContext } from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirTask } from "./file";
//
//   const fhirTask = Convert.toFhirTask(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Task {
    /**
     * Extensions for authoredOn
     */
    _authoredOn?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for intent
     */
    _intent?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastModified
     */
    _lastModified?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for priority
     */
    _priority?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
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
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A name or code (or both) briefly describing what the task involves.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Task | number | null | string>;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which
     * this task was created.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final
     * action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The request being actioned or the resource being manipulated by this task.
     */
    focus?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g.,
     * the patient).
     */
    for?: any[] | boolean | Reference | number | number | null | string;
    /**
     * An identifier that links together multiple tasks and other requests that were created in
     * the same context.
     */
    groupIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * The business identifier for this task.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: Array<any[] | boolean | TaskInput | number | number | null | string>;
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
    insurance?: Array<any[] | boolean | Reference | number | number | null | string>;
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
    location?: any[] | boolean | Reference | number | number | null | string;
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
     * Free-text information captured about the task as it progresses.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Outputs produced by the Task.
     */
    output?: Array<any[] | boolean | TaskOutput | number | number | null | string>;
    /**
     * Individual organization or Device currently responsible for task execution.
     */
    owner?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Task that this particular task is part of.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: string;
    /**
     * A description or code indicating why this task needs to be performed.
     */
    reasonCode?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A resource reference indicating why this task needs to be performed.
     */
    reasonReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Links to Provenance records for past versions of this Task that identify key state
     * transitions or updates that are likely to be relevant to a user looking at the current
     * version of the task.
     */
    relevantHistory?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The creator of the task.
     */
    requester?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a Task resource
     */
    resourceType: any;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is
     * asking for the request to be actioned), this element identifies any limitations on what
     * parts of the referenced request should be actioned.
     */
    restriction?: any[] | boolean | TaskRestriction | number | number | null | string;
    /**
     * The current status of the task.
     */
    status?: FhirTaskStatus;
    /**
     * An explanation as to why this task is held, failed, was refused, etc.
     */
    statusReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface TaskInput {
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCode
     */
    _valueCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDate
     */
    _valueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueId
     */
    _valueId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueOid
     */
    _valueOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUri
     */
    _valueUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: any[] | boolean | Element | number | number | null | string;
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
     * A code or description indicating how the input is intended to be used as part of the task
     * execution.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    valueDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    valueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: any[] | boolean | Signature | number | number | null | string;
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
    valueTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    valueUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
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

export interface TaskOutput {
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCode
     */
    _valueCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDate
     */
    _valueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueId
     */
    _valueId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueOid
     */
    _valueOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUri
     */
    _valueUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: any[] | boolean | Element | number | number | null | string;
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
     * The name of the Output parameter.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    valueDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    valueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: any[] | boolean | Signature | number | number | null | string;
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
    valueTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    valueUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string;
}

export interface TaskRestriction {
    /**
     * Extensions for repetitions
     */
    _repetitions?: any[] | boolean | Element | number | number | null | string;
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
     * Over what time-period is fulfillment sought.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is
     * fulfillment sought?
     */
    recipient?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number;
}

/**
 * The current status of the task.
 */
export enum FhirTaskStatus {
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