import { Element,
         CodeableConcept, 
         Reference,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative,
         Quantity,
         Ratio,
         Duration} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirGoal } from "./file";
//
//   const fhirGoal = Convert.toFhirGoal(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Goal {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lifecycleStatus
     */
    _lifecycleStatus?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for startDate
     */
    _startDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for statusDate
     */
    _statusDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for statusReason
     */
    _statusReason?: any[] | boolean | Element | number | number | null | string;
    /**
     * Describes the progression, or lack thereof, towards the goal against the target.
     */
    achievementStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The identified conditions and other health record elements that are intended to be
     * addressed by the goal.
     */
    addresses?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates a category the goal falls within.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Goal | number | null | string>;
    /**
     * Human-readable and/or coded description of a specific desired objective of care, such as
     * "control blood pressure" or "negotiate an obstacle course" or "dance with child at
     * wedding".
     */
    description: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates whose goal this is - patient goal, practitioner goal, etc.
     */
    expressedBy?: any[] | boolean | Reference | number | number | null | string;
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
     * Business identifiers assigned to this goal by the performer or other systems which remain
     * constant as the resource is updated and propagates from server to server.
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
     * The state of the goal throughout its lifecycle.
     */
    lifecycleStatus?: LifecycleStatus;
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
     * Any comments related to the goal.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Identifies the change (or lack of change) at the point when the status of the goal is
     * assessed.
     */
    outcomeCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Details of what's changed (or not changed).
     */
    outcomeReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Identifies the mutually agreed level of importance associated with reaching/sustaining
     * the goal.
     */
    priority?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This is a Goal resource
     */
    resourceType: any;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startDate?: string;
    /**
     * Identifies when the current status.  I.e. When initially created, when achieved, when
     * cancelled, etc.
     */
    statusDate?: string;
    /**
     * Captures the reason for the current status.
     */
    statusReason?: string;
    /**
     * Identifies the patient, group or organization for whom the goal is being established.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates what should be done by when.
     */
    target?: Array<any[] | boolean | GoalTarget | number | number | null | string>;
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
 * The state of the goal throughout its lifecycle.
 */
export enum LifecycleStatus {
    Accepted = "accepted",
    Active = "active",
    Cancelled = "cancelled",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    OnHold = "on-hold",
    Planned = "planned",
    Proposed = "proposed",
    Rejected = "rejected",
}

export interface GoalTarget {
    /**
     * Extensions for detailBoolean
     */
    _detailBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for detailInteger
     */
    _detailInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for detailString
     */
    _detailString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for dueDate
     */
    _dueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailBoolean?: boolean;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailInteger?: number;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g.
     * 150 pounds, 7.0%. Either the high or low or both values of the range can be specified.
     * When a low value is missing, it indicates that the goal is achieved at any focus value at
     * or below the high value. Similarly, if the high value is missing, it indicates that the
     * goal is achieved at any focus value at or above the low value.
     */
    detailString?: string;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDate?: string;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDuration?: any[] | boolean | Duration | number | number | null | string;
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
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or
     * hemoglobin A1c level.
     */
    measure?: any[] | boolean | CodeableConcept | number | number | null | string;
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