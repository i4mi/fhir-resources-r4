import { Element,
         Extension, 
         Meta,
         Narrative,
         CodeableConcept} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirOperationOutcome } from "./file";
//
//   const fhirOperationOutcome = Convert.toFhirOperationOutcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface OperationOutcome {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | OperationOutcome | number | null | string>;
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
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: Array<any[] | boolean | OperationOutcomeIssue | number | number | null | string>;
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
     * This is a OperationOutcome resource
     */
    resourceType: any;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface OperationOutcomeIssue {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for diagnostics
     */
    _diagnostics?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for expression
     */
    _expression?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for location
     */
    _location?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for severity
     */
    _severity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose
     * the most applicable code from the IssueType value set, and may additional provide its own
     * code for the error in the details element.
     */
    code?: Code;
    /**
     * Additional details about the error. This may be a text description of the error or a
     * system code that identifies the error.
     */
    details?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Additional diagnostic information about the issue.
     */
    diagnostics?: string;
    /**
     * A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition
     * indicators and the default child accessor that identifies one of the elements in the
     * resource that caused this issue to be raised.
     */
    expression?: string[];
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
     * This element is deprecated because it is XML specific. It is replaced by
     * issue.expression, which is format independent, and simpler to parse.
     *
     * For resource issues, this will be a simple XPath limited to element names, repetition
     * indicators and the default child accessor that identifies one of the elements in the
     * resource that caused this issue to be raised.  For HTTP errors, will be "http." + the
     * parameter name.
     */
    location?: string[];
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
     * Indicates whether the issue indicates a variation from successful processing.
     */
    severity?: Severity;
}

/**
 * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose
 * the most applicable code from the IssueType value set, and may additional provide its own
 * code for the error in the details element.
 */
export enum Code {
    BusinessRule = "business-rule",
    CodeInvalid = "code-invalid",
    Conflict = "conflict",
    Deleted = "deleted",
    Duplicate = "duplicate",
    Exception = "exception",
    Expired = "expired",
    Extension = "extension",
    Forbidden = "forbidden",
    Incomplete = "incomplete",
    Informational = "informational",
    Invalid = "invalid",
    Invariant = "invariant",
    LockError = "lock-error",
    Login = "login",
    MultipleMatches = "multiple-matches",
    NoStore = "no-store",
    NotFound = "not-found",
    NotSupported = "not-supported",
    Processing = "processing",
    Required = "required",
    Security = "security",
    Structure = "structure",
    Suppressed = "suppressed",
    Throttled = "throttled",
    Timeout = "timeout",
    TooCostly = "too-costly",
    TooLong = "too-long",
    Transient = "transient",
    Unknown = "unknown",
    Value = "value",
}

/**
 * Indicates whether the issue indicates a variation from successful processing.
 */
export enum Severity {
    Error = "error",
    Fatal = "fatal",
    Information = "information",
    Warning = "warning",
}