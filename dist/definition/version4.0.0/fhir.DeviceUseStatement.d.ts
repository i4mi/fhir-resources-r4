import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Annotation, Narrative, Period, Timing } from "./fhir._";
export interface DeviceUseStatement {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for recordedOn
     */
    _recordedOn?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: Element;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this
     * DeviceUseStatement.
     */
    basedOn?: Reference[];
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e.
     * the target).
     */
    bodySite?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: DeviceUseStatement[];
    /**
     * Allows linking the DeviceUseStatement to the underlying Request, or to other information
     * that supports or is used to derive the DeviceUseStatement.
     */
    derivedFrom?: Reference[];
    /**
     * The details of the device used.
     */
    device?: Reference;
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
     * An external identifier for this statement such as an IRI.
     */
    identifier?: Identifier[];
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
     * Details about the device statement that were not represented at all or sufficiently in
     * one of the attributes provided in a class. These may include for example a comment, an
     * instruction, or a note associated with the statement.
     */
    note?: Annotation[];
    /**
     * Reason or justification for the use of the device.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: Reference[];
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: string;
    /**
     * This is a DeviceUseStatement resource
     */
    resourceType?: any;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: Reference;
    /**
     * A code representing the patient or other source's judgment about the state of the device
     * used that this statement is about.  Generally this will be active or completed.
     */
    status?: DeviceUseStatementStatus;
    /**
     * The patient who used the device.
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
    /**
     * How often the device was used.
     */
    timingDateTime?: string;
    /**
     * How often the device was used.
     */
    timingPeriod?: Period;
    /**
     * How often the device was used.
     */
    timingTiming?: Timing;
}
/**
 * A code representing the patient or other source's judgment about the state of the device
 * used that this statement is about.  Generally this will be active or completed.
 */
export declare enum DeviceUseStatementStatus {
    Active = "active",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    Intended = "intended",
    OnHold = "on-hold",
    Stopped = "stopped"
}
