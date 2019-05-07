import { Element, ContactDetail, Extension, CodeableConcept, Meta, Narrative, UsageContext } from "./fhir._";
export interface GraphDefinition {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for experimental
     */
    _experimental?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for publisher
     */
    _publisher?: Element;
    /**
     * Extensions for purpose
     */
    _purpose?: Element;
    /**
     * Extensions for start
     */
    _start?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: GraphDefinition[];
    /**
     * The date  (and optionally time) when the graph definition was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the graph definition
     * changes.
     */
    date?: string;
    /**
     * A free text natural language description of the graph definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A Boolean value to indicate that this graph definition is authored for testing purposes
     * (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;
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
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the graph definition is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Links this graph makes rules about.
     */
    link?: GraphDefinitionLink[];
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
     * A natural language name identifying the graph definition. This name should be usable as
     * an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The profile that describes the use of the base resource.
     */
    profile?: string;
    /**
     * The name of the organization or individual that published the graph definition.
     */
    publisher?: string;
    /**
     * Explanation of why this graph definition is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * This is a GraphDefinition resource
     */
    resourceType?: any;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start?: string;
    /**
     * The status of this graph definition. Enables tracking the life-cycle of the content.
     */
    status?: GraphDefinitionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * An absolute URI that is used to identify this graph definition when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this graph definition is (or will be) published. This URL can
     * be the target of a canonical reference. It SHALL remain the same when the graph
     * definition is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate graph definition instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the graph definition when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the graph definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of
 * resources that form a graph by following references. The Graph Definition resource
 * defines a set and makes rules about the set.
 */
export interface GraphDefinitionTarget {
    /**
     * Extensions for params
     */
    _params?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Compartment Consistency Rules.
     */
    compartment?: GraphDefinitionCompartment[];
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
     * Additional links from target resource.
     */
    link?: GraphDefinitionLink[];
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
     * A set of parameters to look up.
     */
    params?: string;
    /**
     * Profile for the target resource.
     */
    profile?: string;
    /**
     * Type of resource this link refers to.
     */
    type?: string;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of
 * resources that form a graph by following references. The Graph Definition resource
 * defines a set and makes rules about the set.
 */
export interface GraphDefinitionLink {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for max
     */
    _max?: Element;
    /**
     * Extensions for min
     */
    _min?: Element;
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for sliceName
     */
    _sliceName?: Element;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string;
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
     * Maximum occurrences for this link.
     */
    max?: string;
    /**
     * Minimum occurrences for this link.
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
    modifierExtension?: Extension[];
    /**
     * A FHIR expression that identifies one of FHIR References to other resources.
     */
    path?: string;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string;
    /**
     * Potential target for the link.
     */
    target?: GraphDefinitionTarget[];
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of
 * resources that form a graph by following references. The Graph Definition resource
 * defines a set and makes rules about the set.
 */
export interface GraphDefinitionCompartment {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for expression
     */
    _expression?: Element;
    /**
     * Extensions for rule
     */
    _rule?: Element;
    /**
     * Extensions for use
     */
    _use?: Element;
    /**
     * Identifies the compartment.
     */
    code?: string;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string;
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
     * identical | matching | different | no-rule | custom.
     */
    rule?: Rule;
    /**
     * Defines how the compartment rule is used - whether it it is used to test whether
     * resources are subject to the rule, or whether it is a rule that must be followed.
     */
    use?: GraphDefinitionCompartmentUse;
}
/**
 * identical | matching | different | no-rule | custom.
 */
export declare enum Rule {
    Custom = "custom",
    Different = "different",
    Identical = "identical",
    Matching = "matching"
}
/**
 * Defines how the compartment rule is used - whether it it is used to test whether
 * resources are subject to the rule, or whether it is a rule that must be followed.
 */
export declare enum GraphDefinitionCompartmentUse {
    Condition = "condition",
    Requirement = "requirement"
}
/**
 * The status of this graph definition. Enables tracking the life-cycle of the content.
 */
export declare enum GraphDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
