import { Element,
         Reference, 
         CodeableConcept,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative,
         Period,
         Timing} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirDeviceUseStatement } from "./file";
//
//   const fhirDeviceUseStatement = Convert.toFhirDeviceUseStatement(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface DeviceUseStatement {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for recordedOn
     */
    _recordedOn?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this
     * DeviceUseStatement.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e.
     * the target).
     */
    bodySite?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | DeviceUseStatement | number | null | string>;
    /**
     * Allows linking the DeviceUseStatement to the underlying Request, or to other information
     * that supports or is used to derive the DeviceUseStatement.
     */
    derivedFrom?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The details of the device used.
     */
    device: any[] | boolean | Reference | number | number | null | string;
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
     * An external identifier for this statement such as an IRI.
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
     * Details about the device statement that were not represented at all or sufficiently in
     * one of the attributes provided in a class. These may include for example a comment, an
     * instruction, or a note associated with the statement.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Reason or justification for the use of the device.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: string;
    /**
     * This is a DeviceUseStatement resource
     */
    resourceType: any;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A code representing the patient or other source's judgment about the state of the device
     * used that this statement is about.  Generally this will be active or completed.
     */
    status?: FhirDeviceUseStatementStatus;
    /**
     * The patient who used the device.
     */
    subject: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * How often the device was used.
     */
    timingDateTime?: string;
    /**
     * How often the device was used.
     */
    timingPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * How often the device was used.
     */
    timingTiming?: any[] | boolean | Timing | number | number | null | string;
}

/**
 * A code representing the patient or other source's judgment about the state of the device
 * used that this statement is about.  Generally this will be active or completed.
 */
export enum FhirDeviceUseStatementStatus {
    Active = "active",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    Intended = "intended",
    OnHold = "on-hold",
    Stopped = "stopped",
}