import { Element,
         UsageContext, 
         ContactDetail,
         Extension,
         CodeableConcept,
         Meta,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirOperationDefinition } from "./file";
//
//   const fhirOperationDefinition = Convert.toFhirOperationDefinition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface OperationDefinition {
    /**
     * Extensions for affectsState
     */
    _affectsState?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for experimental
     */
    _experimental?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for instance
     */
    _instance?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for kind
     */
    _kind?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publisher
     */
    _publisher?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for purpose
     */
    _purpose?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for resource
     */
    _resource?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for system
     */
    _system?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether the operation affects state. Side effects such as producing audit trail entries
     * do not count as 'affecting  state'.
     */
    affectsState?: boolean;
    /**
     * Indicates that this operation definition is a constraining profile on the base.
     */
    base?: string;
    /**
     * The name used to invoke the operation.
     */
    code?: string;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | OperationDefinition | number | null | string>;
    /**
     * The date  (and optionally time) when the operation definition was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the operation
     * definition changes.
     */
    date?: string;
    /**
     * A free text natural language description of the operation definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A Boolean value to indicate that this operation definition is authored for testing
     * purposes (or education/evaluation/marketing) and is not intended to be used for genuine
     * usage.
     */
    experimental?: boolean;
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
     * Additional validation information for the in parameters - a single profile that covers
     * all the parameters. The profile is a constraint on the parameters resource as a whole.
     */
    inputProfile?: string;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the
     * given types.
     */
    instance?: boolean;
    /**
     * A legal or geographic region in which the operation definition is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Whether this is an operation or a named query.
     */
    kind?: Kind;
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
     * A natural language name identifying the operation definition. This name should be usable
     * as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * Additional validation information for the out parameters - a single profile that covers
     * all the parameters. The profile is a constraint on the parameters resource.
     */
    outputProfile?: string;
    /**
     * Defines an appropriate combination of parameters to use when invoking this operation, to
     * help code generators when generating overloaded parameter sets for this operation.
     */
    overload?: Array<any[] | boolean | OperationDefinitionOverload | number | number | null | string>;
    /**
     * The parameters for the operation/query.
     */
    parameter?: Array<any[] | boolean | OperationDefinitionParameter | number | number | null | string>;
    /**
     * The name of the organization or individual that published the operation definition.
     */
    publisher?: string;
    /**
     * Explanation of why this operation definition is needed and why it has been designed as it
     * has.
     */
    purpose?: string;
    /**
     * The types on which this operation can be executed.
     */
    resource?: string[];
    /**
     * This is a OperationDefinition resource
     */
    resourceType: any;
    /**
     * The status of this operation definition. Enables tracking the life-cycle of the content.
     */
    status?: FhirOperationDefinitionStatus;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g.
     * without needing to choose a resource type for the context).
     */
    system?: boolean;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the operation definition.
     */
    title?: string;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level
     * for any given resource type level (e.g. without needing to choose a specific resource id
     * for the context).
     */
    type?: boolean;
    /**
     * An absolute URI that is used to identify this operation definition when it is referenced
     * in a specification, model, design or an instance; also called its canonical identifier.
     * This SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this operation definition is (or will be) published. This URL
     * can be the target of a canonical reference. It SHALL remain the same when the operation
     * definition is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate operation definition instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the operation definition when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the operation definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * Whether this is an operation or a named query.
 */
export enum Kind {
    Operation = "operation",
    Query = "query",
}

export interface OperationDefinitionOverload {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for parameterName
     */
    _parameterName?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Comments to go on overload.
     */
    comment?: string;
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
     * Name of parameter to include in overload.
     */
    parameterName?: string[];
}

export interface OperationDefinitionParameter {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for max
     */
    _max?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for min
     */
    _min?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for searchType
     */
    _searchType?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for use
     */
    _use?: any[] | boolean | Element | number | number | null | string;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: any[] | boolean | OperationDefinitionBinding | number | number | null | string;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: string;
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
     * The maximum number of times this element is permitted to appear in the request or
     * response.
     */
    max?: string;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number;
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
     * The name of used to identify the parameter.
     */
    name?: string;
    /**
     * The parts of a nested Parameter.
     */
    part?: Array<any[] | boolean | OperationDefinitionParameter | number | number | null | string>;
    /**
     * Identifies other resource parameters within the operation invocation that are expected to
     * resolve to this resource.
     */
    referencedFrom?: Array<any[] | boolean | OperationDefinitionReferencedFrom | number | number | null | string>;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter
     * type is 'string'.
     */
    searchType?: SearchType;
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or
     * implementation Guide that applies to the target of the reference this parameter refers
     * to. If any profiles are specified, then the content must conform to at least one of them.
     * The URL can be a local reference - to a contained StructureDefinition, or a reference to
     * another StructureDefinition or Implementation Guide by a canonical URL. When an
     * implementation guide is specified, the target resource SHALL conform to at least one
     * profile defined in the implementation guide.
     */
    targetProfile?: string[];
    /**
     * The type for this parameter.
     */
    type?: string;
    /**
     * Whether this is an input or an output parameter.
     */
    use?: OperationDefinitionParameterUse;
}

export interface OperationDefinitionBinding {
    /**
     * Extensions for strength
     */
    _strength?: any[] | boolean | Element | number | number | null | string;
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
     * Indicates the degree of conformance expectations associated with this binding - that is,
     * the degree to which the provided value set must be adhered to in the instances.
     */
    strength?: Strength;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies
     * the set of codes to be used.
     */
    valueSet: string;
}

/**
 * Indicates the degree of conformance expectations associated with this binding - that is,
 * the degree to which the provided value set must be adhered to in the instances.
 */
export enum Strength {
    Example = "example",
    Extensible = "extensible",
    Preferred = "preferred",
    Required = "required",
}

export interface OperationDefinitionReferencedFrom {
    /**
     * Extensions for source
     */
    _source?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sourceId
     */
    _sourceId?: any[] | boolean | Element | number | number | null | string;
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
     * The name of the parameter or dot-separated path of parameter names pointing to the
     * resource parameter that is expected to contain a reference to this resource.
     */
    source?: string;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this
     * resource.
     */
    sourceId?: string;
}

/**
 * How the parameter is understood as a search parameter. This is only used if the parameter
 * type is 'string'.
 */
export enum SearchType {
    Composite = "composite",
    Date = "date",
    Number = "number",
    Quantity = "quantity",
    Reference = "reference",
    Special = "special",
    String = "string",
    Token = "token",
    URI = "uri",
}

/**
 * Whether this is an input or an output parameter.
 */
export enum OperationDefinitionParameterUse {
    In = "in",
    Out = "out",
}

/**
 * The status of this operation definition. Enables tracking the life-cycle of the content.
 */
export enum FhirOperationDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}