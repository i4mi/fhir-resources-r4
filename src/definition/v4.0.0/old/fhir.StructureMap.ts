import {
    Element,
    ContactDetail,
    Extension,
    Identifier,
    CodeableConcept,
    Meta,
    Narrative,
    UsageContext,
    Address,
    Age,
    Annotation,
    Attachment,
    Coding,
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
    Period,
    Quantity,
    Ratio,
    Reference,
    RelatedArtifact,
    SampledData,
    Signature,
    Timing,
    TriggerDefinition,
    Range
} from "./fhir._";

export interface StructureMap {
    /**
     * Extensions for copyright
     */
    _copyright?: Element;
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
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
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
    contained?: StructureMap[];
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the structure
     * map.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the structure map was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the structure map changes.
     */
    date?: string;
    /**
     * A free text natural language description of the structure map from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A Boolean value to indicate that this structure map is authored for testing purposes (or
     * education/evaluation/marketing) and is not intended to be used for genuine usage.
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
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group?: StructureMapGroup[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this structure map when it is represented in
     * other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[];
    /**
     * A legal or geographic region in which the structure map is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
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
     * A natural language name identifying the structure map. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the structure map.
     */
    publisher?: string;
    /**
     * Explanation of why this structure map is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * This is a StructureMap resource
     */
    resourceType?: any;
    /**
     * The status of this structure map. Enables tracking the life-cycle of the content.
     */
    status?: StructureMapStatus;
    /**
     * A structure definition used by this map. The structure definition may describe instances
     * that are converted, or the instances that are produced.
     */
    structure?: StructureMapStructure[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the structure map.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this structure map when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this structure map is (or will be) published. This URL can be
     * the target of a canonical reference. It SHALL remain the same when the structure map is
     * stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate structure map instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the structure map when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the structure map author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapGroup {
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for extends
     */
    _extends?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for typeMode
     */
    _typeMode?: Element;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types
     * of mappings within it.
     */
    documentation?: string;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string;
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
     * A name assigned to an instance of data. The instance must be provided when the mapping is
     * invoked.
     */
    input?: StructureMapInput[];
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
     * A unique name for the group for the convenience of human readers.
     */
    name?: string;
    /**
     * Transform Rule from source to target.
     */
    rule?: StructureMapRule[];
    /**
     * If this is the default rule set to apply for the source type or this combination of types.
     */
    typeMode?: TypeMode;
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapInput {
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for mode
     */
    _mode?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string;
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
     * Mode for this instance of data.
     */
    mode?: StructureMapInputMode;
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
     * Name for this instance of data.
     */
    name?: string;
    /**
     * Type for this instance of data.
     */
    type?: string;
}

/**
 * Mode for this instance of data.
 */
export enum StructureMapInputMode {
    Source = "source",
    Target = "target",
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapRule {
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: StructureMapDependent[];
    /**
     * Documentation for this instance of data.
     */
    documentation?: string;
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
     * Name of the rule for internal references.
     */
    name?: string;
    /**
     * Rules contained in this rule.
     */
    rule?: StructureMapRule[];
    /**
     * Source inputs to the mapping.
     */
    source?: StructureMapSource[];
    /**
     * Content to create because of this mapping rule.
     */
    target?: StructureMapTarget[];
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapDependent {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for variable
     */
    _variable?: Element[];
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
     * Name of a rule or group to apply.
     */
    name?: string;
    /**
     * Variable to pass to the rule or group.
     */
    variable?: string[];
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapSource {
    /**
     * Extensions for check
     */
    _check?: Element;
    /**
     * Extensions for condition
     */
    _condition?: Element;
    /**
     * Extensions for context
     */
    _context?: Element;
    /**
     * Extensions for defaultValueBase64Binary
     */
    _defaultValueBase64Binary?: Element;
    /**
     * Extensions for defaultValueBoolean
     */
    _defaultValueBoolean?: Element;
    /**
     * Extensions for defaultValueCanonical
     */
    _defaultValueCanonical?: Element;
    /**
     * Extensions for defaultValueCode
     */
    _defaultValueCode?: Element;
    /**
     * Extensions for defaultValueDate
     */
    _defaultValueDate?: Element;
    /**
     * Extensions for defaultValueDateTime
     */
    _defaultValueDateTime?: Element;
    /**
     * Extensions for defaultValueDecimal
     */
    _defaultValueDecimal?: Element;
    /**
     * Extensions for defaultValueId
     */
    _defaultValueId?: Element;
    /**
     * Extensions for defaultValueInstant
     */
    _defaultValueInstant?: Element;
    /**
     * Extensions for defaultValueInteger
     */
    _defaultValueInteger?: Element;
    /**
     * Extensions for defaultValueMarkdown
     */
    _defaultValueMarkdown?: Element;
    /**
     * Extensions for defaultValueOid
     */
    _defaultValueOid?: Element;
    /**
     * Extensions for defaultValuePositiveInt
     */
    _defaultValuePositiveInt?: Element;
    /**
     * Extensions for defaultValueString
     */
    _defaultValueString?: Element;
    /**
     * Extensions for defaultValueTime
     */
    _defaultValueTime?: Element;
    /**
     * Extensions for defaultValueUnsignedInt
     */
    _defaultValueUnsignedInt?: Element;
    /**
     * Extensions for defaultValueUri
     */
    _defaultValueUri?: Element;
    /**
     * Extensions for defaultValueUrl
     */
    _defaultValueUrl?: Element;
    /**
     * Extensions for defaultValueUuid
     */
    _defaultValueUuid?: Element;
    /**
     * Extensions for element
     */
    _element?: Element;
    /**
     * Extensions for listMode
     */
    _listMode?: Element;
    /**
     * Extensions for logMessage
     */
    _logMessage?: Element;
    /**
     * Extensions for max
     */
    _max?: Element;
    /**
     * Extensions for min
     */
    _min?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for variable
     */
    _variable?: Element;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of
     * completing.
     */
    check?: string;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string;
    /**
     * Type or variable this rule applies to.
     */
    context?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAddress?: Address;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAge?: Age;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAnnotation?: Annotation;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAttachment?: Attachment;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueBase64Binary?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueBoolean?: boolean;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCanonical?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCode?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCodeableConcept?: CodeableConcept;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCoding?: Coding;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContactDetail?: ContactDetail;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContactPoint?: ContactPoint;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContributor?: Contributor;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCount?: Count;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDataRequirement?: DataRequirement;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDate?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDateTime?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDecimal?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDistance?: Distance;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDosage?: Dosage;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDuration?: Duration;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueExpression?: Expression;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueHumanName?: HumanName;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueId?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueIdentifier?: Identifier;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueInstant?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueInteger?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueMarkdown?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueMoney?: Money;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueOid?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueParameterDefinition?: ParameterDefinition;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValuePeriod?: Period;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValuePositiveInt?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueQuantity?: Quantity;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRange?: Range;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRatio?: Ratio;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueReference?: Reference;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRelatedArtifact?: RelatedArtifact;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueSampledData?: SampledData;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueSignature?: Signature;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueString?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTime?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTiming?: Timing;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTriggerDefinition?: TriggerDefinition;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUnsignedInt?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUri?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUrl?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUsageContext?: UsageContext;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueUuid?: string;
    /**
     * Optional field for this source.
     */
    element?: string;
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
     * How to handle the list mode for this element.
     */
    listMode?: StructureMapSourceListMode;
    /**
     * A FHIRPath expression which specifies a message to put in the transform log when content
     * matching the source rule is found.
     */
    logMessage?: string;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if
     * present, it acts an implicit check on the input content (* just serves as documentation;
     * it's the default value).
     */
    max?: string;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an
     * implicit check on the input content.
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
     * Specified type for the element. This works as a condition on the mapping - use for
     * polymorphic elements.
     */
    type?: string;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string;
}

/**
 * How to handle the list mode for this element.
 */
export enum StructureMapSourceListMode {
    First = "first",
    Last = "last",
    NotFirst = "not_first",
    NotLast = "not_last",
    OnlyOne = "only_one",
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapTarget {
    /**
     * Extensions for context
     */
    _context?: Element;
    /**
     * Extensions for contextType
     */
    _contextType?: Element;
    /**
     * Extensions for element
     */
    _element?: Element;
    /**
     * Extensions for listMode
     */
    _listMode?: Element[];
    /**
     * Extensions for listRuleId
     */
    _listRuleId?: Element;
    /**
     * Extensions for transform
     */
    _transform?: Element;
    /**
     * Extensions for variable
     */
    _variable?: Element;
    /**
     * Type or variable this rule applies to.
     */
    context?: string;
    /**
     * How to interpret the context.
     */
    contextType?: ContextType;
    /**
     * Field to create in the context.
     */
    element?: string;
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
     * If field is a list, how to manage the list.
     */
    listMode?: ListModeElement[];
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string;
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
     * Parameters to the transform.
     */
    parameter?: StructureMapParameter[];
    /**
     * How the data is copied / created.
     */
    transform?: Transform;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string;
}

/**
 * How to interpret the context.
 */
export enum ContextType {
    Type = "type",
    Variable = "variable",
}

export enum ListModeElement {
    Collate = "collate",
    First = "first",
    Last = "last",
    Share = "share",
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapParameter {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueId
     */
    _valueId?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
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
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number;
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string;
}

/**
 * How the data is copied / created.
 */
export enum Transform {
    Append = "append",
    C = "c",
    Cast = "cast",
    Cc = "cc",
    Copy = "copy",
    Cp = "cp",
    Create = "create",
    DateOp = "dateOp",
    Escape = "escape",
    Evaluate = "evaluate",
    Id = "id",
    Pointer = "pointer",
    Qty = "qty",
    Reference = "reference",
    Translate = "translate",
    Truncate = "truncate",
    Uuid = "uuid",
}

/**
 * If this is the default rule set to apply for the source type or this combination of types.
 */
export enum TypeMode {
    None = "none",
    TypeAndTypes = "type-and-types",
    Types = "types",
}

/**
 * The status of this structure map. Enables tracking the life-cycle of the content.
 */
export enum StructureMapStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapStructure {
    /**
     * Extensions for alias
     */
    _alias?: Element;
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for mode
     */
    _mode?: Element;
    /**
     * The name used for this type in the map.
     */
    alias?: string;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string;
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
     * How the referenced structure is used in this mapping.
     */
    mode?: StructureMapStructureMode;
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
     * The canonical reference to the structure.
     */
    url?: string;
}

/**
 * How the referenced structure is used in this mapping.
 */
export enum StructureMapStructureMode {
    Produced = "produced",
    Queried = "queried",
    Source = "source",
    Target = "target",
}