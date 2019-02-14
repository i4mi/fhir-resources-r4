import { Element, Reference, CodeableConcept, Extension, Period, Identifier, Meta, Narrative } from "./fhir._";
export interface DetectedIssue {
    /**
     * Extensions for detail
     */
    _detail?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for identifiedDateTime
     */
    _identifiedDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for reference
     */
    _reference?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for severity
     */
    _severity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision
     * support application or a pharmacist conducting a medication review.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the general type of issue identified.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | DetectedIssue | number | null | string>;
    /**
     * A textual explanation of the detected issue.
     */
    detail?: string;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected
     * issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: Array<any[] | boolean | DetectedIssueEvidence | number | number | null | string>;
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
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: string;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Business identifier associated with the detected issue record.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * Indicates the resource representing the current activity or proposed activity that is
     * potentially problematic.
     */
    implicated?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Indicates an action that has been taken or is committed to reduce or eliminate the
     * likelihood of the risk identified by the detected issue from manifesting.  Can also
     * reflect an observation of known mitigating factors that may reduce/eliminate the need for
     * any action.
     */
    mitigation?: Array<any[] | boolean | DetectedIssueMitigation | number | number | null | string>;
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
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the
     * detected issue identified.
     */
    reference?: string;
    /**
     * This is a DetectedIssue resource
     */
    resourceType: any;
    /**
     * Indicates the degree of importance associated with the identified issue based on the
     * potential impact on the patient.
     */
    severity?: Severity;
    /**
     * Indicates the status of the detected issue.
     */
    status?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface DetectedIssueEvidence {
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Links to resources that constitute evidence for the detected issue such as a
     * GuidanceResponse or MeasureReport.
     */
    detail?: Array<any[] | boolean | Reference | number | number | null | string>;
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
export interface DetectedIssueMitigation {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Describes the action that was taken or the observation that was made that
     * reduces/eliminates the risk associated with the identified issue.
     */
    action: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for
     * the mitigation step occurring.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates when the mitigating action was documented.
     */
    date?: string;
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
/**
 * Indicates the degree of importance associated with the identified issue based on the
 * potential impact on the patient.
 */
export declare enum Severity {
    High = "high",
    Low = "low",
    Moderate = "moderate"
}
