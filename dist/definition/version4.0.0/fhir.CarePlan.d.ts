import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Annotation, Period, Narrative, Quantity, Timing } from "./fhir._";
export interface CarePlan {
    /**
     * Extensions for created
     */
    _created?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to
     * be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: Array<any[] | boolean | CarePlanActivity | number | number | null | string>;
    /**
     * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or
     * mitigation are handled by this plan.
     */
    addresses?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * When populated, the author is responsible for the care plan.  The care plan is attributed
     * to the author.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Identifies all people and organizations who are expected to be involved in the care
     * envisioned by this plan.
     */
    careTeam?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Identifies what "kind" of plan this is to support differentiation between multiple
     * co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management",
     * "wellness plan", etc.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | CarePlan | number | null | string>;
    /**
     * Identifies the individual(s) or organization who provided the contents of the care plan.
     */
    contributor?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Represents when this particular CarePlan record was created in the system, which is often
     * a system-generated date.
     */
    created?: string;
    /**
     * A description of the scope and nature of the plan.
     */
    description?: string;
    /**
     * The Encounter during which this CarePlan was created or to which the creation of this
     * record is tightly associated.
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
     * Describes the intended objective(s) of carrying out the care plan.
     */
    goal?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifiers assigned to this care plan by the performer or other systems which
     * remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition
     * that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesCanonical?: string[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, questionnaire or other
     * definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesUri?: string[];
    /**
     * Indicates the level of authority/intentionality associated with the care plan and where
     * the care plan fits into the workflow chain.
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
     * General notes about the care plan not covered elsewhere.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * A larger care plan of which this particular care plan is a component or step.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates when the plan did (or is intended to) come into effect and end.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * Completed or terminated care plan whose function is taken by this new care plan.
     */
    replaces?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a CarePlan resource
     */
    resourceType: any;
    /**
     * Indicates whether the plan is currently being acted upon, represents future intentions or
     * is now a historical record.
     */
    status?: string;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies portions of the patient's record that specifically influenced the formation of
     * the plan.  These might include comorbidities, recent procedures, limitations, recent
     * assessments, etc.
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
    /**
     * Human-friendly name for the care plan.
     */
    title?: string;
}
export interface CarePlanActivity {
    /**
     * A simple summary of a planned activity suitable for a general care plan system (e.g. form
     * driven) that doesn't know about specific resources such as procedure etc.
     */
    detail?: any[] | boolean | CarePlanDetail | number | number | null | string;
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
     * Identifies the outcome at the point when the status of the activity is assessed.  For
     * example, the outcome of an education activity could be patient understands (or not).
     */
    outcomeCodeableConcept?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Details of the outcome or action resulting from the activity.  The reference to an
     * "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of
     * the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR
     * using the CarePlan.activity.reference (a reference to a “request” resource).
     */
    outcomeReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Notes about the adherence/status/progress of the activity.
     */
    progress?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * The details of the proposed activity represented in a specific resource.
     */
    reference?: any[] | boolean | Reference | number | number | null | string;
}
export interface CarePlanDetail {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for doNotPerform
     */
    _doNotPerform?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for kind
     */
    _kind?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for scheduledString
     */
    _scheduledString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Detailed description of the type of planned activity; e.g. what lab test, what procedure,
     * what kind of encounter.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * This provides a textual description of constraints on the intended activity occurrence,
     * including relation to other activities.  It may also include objectives, pre-conditions
     * and end-conditions.  Finally, it may convey specifics about the activity such as body
     * site, method, route, etc.
     */
    description?: string;
    /**
     * If true, indicates that the described activity is one that must NOT be engaged in when
     * following the plan.  If false, or missing, indicates that the described activity is one
     * that should be engaged in when following the plan.
     */
    doNotPerform?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Internal reference that identifies the goals that this activity is intended to contribute
     * towards meeting.
     */
    goal?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition
     * that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesCanonical?: string[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, questionnaire or other
     * definition that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesUri?: string[];
    /**
     * A description of the kind of resource the in-line definition of a care plan activity is
     * representing.  The CarePlan.activity.detail is an in-line definition when a resource is
     * not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a
     * ServiceRequest, or a CommunicationRequest.
     */
    kind?: string;
    /**
     * Identifies the facility where the activity will occur; e.g. home, hospital, specific
     * clinic, etc.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
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
     * Identifies who's expected to be involved in the activity.
     */
    performer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Provides the rationale that drove the inclusion of this particular activity as part of
     * the plan or the reason why the activity was prohibited.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates another resource, such as the health condition(s), whose existence justifies
     * this request and drove the inclusion of this particular activity as part of the plan.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledString?: string;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * Identifies what progress is being made for the specific activity.
     */
    status?: CarePlanDetailStatus;
    /**
     * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
     */
    statusReason?: any[] | boolean | CodeableConcept | number | number | null | string;
}
/**
 * Identifies what progress is being made for the specific activity.
 */
export declare enum CarePlanDetailStatus {
    Cancelled = "cancelled",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    InProgress = "in-progress",
    NotStarted = "not-started",
    OnHold = "on-hold",
    Scheduled = "scheduled",
    Stopped = "stopped",
    Unknown = "unknown"
}
