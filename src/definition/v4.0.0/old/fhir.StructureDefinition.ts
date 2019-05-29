import {
    Element,
    ContactDetail,
    Extension,
    Identifier,
    CodeableConcept,
    Coding,
    Meta,
    Narrative,
    UsageContext,
    Address,
    Age,
    Annotation,
    Attachment,
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

export interface StructureDefinition {
    /**
     * Extensions for abstract
     */
    _abstract?: Element;
    /**
     * Extensions for contextInvariant
     */
    _contextInvariant?: Element[];
    /**
     * Extensions for copyright
     */
    _copyright?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for derivation
     */
    _derivation?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for experimental
     */
    _experimental?: Element;
    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for kind
     */
    _kind?: Element;
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
     * Extensions for type
     */
    _type?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * Whether structure this definition describes is abstract or not  - that is, whether the
     * structure is not intended to be instantiated. For Resources and Data types, abstract
     * types will never be exchanged  between systems.
     */
    abstract?: boolean;
    /**
     * An absolute URI that is the base structure from which this type is derived, either by
     * specialization or constraint.
     */
    baseDefinition?: string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: StructureDefinition[];
    /**
     * Identifies the types of resource or data type elements to which the extension can be
     * applied.
     */
    context?: StructureDefinitionContext[];
    /**
     * A set of rules as FHIRPath Invariants about when the extension can be used (e.g.
     * co-occurrence variants for the extension). All the rules must be true.
     */
    contextInvariant?: string[];
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the structure
     * definition.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the structure definition was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the structure
     * definition changes.
     */
    date?: string;
    /**
     * How the type relates to the baseDefinition.
     */
    derivation?: Derivation;
    /**
     * A free text natural language description of the structure definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement
     * of differences that it applies.
     */
    differential?: StructureDefinitionDifferential;
    /**
     * A Boolean value to indicate that this structure definition is authored for testing
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
    extension?: Extension[];
    /**
     * The version of the FHIR specification on which this StructureDefinition is based - this
     * is the formal version of the specification, without the revision number, e.g.
     * [publication].[major].[minor], which is 4.0.0. for this version.
     */
    fhirVersion?: FhirVersion;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this structure definition when it is
     * represented in other formats, or referenced in a specification, model, design or an
     * instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the structure definition is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * A set of key words or terms from external terminologies that may be used to assist with
     * indexing and searching of templates nby describing the use of this structure definition,
     * or the content it describes.
     */
    keyword?: Coding[];
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind?: Kind;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * An external specification that the content is mapped to.
     */
    mapping?: StructureDefinitionMapping[];
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
     * A natural language name identifying the structure definition. This name should be usable
     * as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the structure definition.
     */
    publisher?: string;
    /**
     * Explanation of why this structure definition is needed and why it has been designed as it
     * has.
     */
    purpose?: string;
    /**
     * This is a StructureDefinition resource
     */
    resourceType?: any;
    /**
     * A snapshot view is expressed in a standalone form that can be used and interpreted
     * without considering the base StructureDefinition.
     */
    snapshot?: StructureDefinitionSnapshot;
    /**
     * The status of this structure definition. Enables tracking the life-cycle of the content.
     */
    status?: StructureDefinitionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the structure definition.
     */
    title?: string;
    /**
     * The type this structure describes. If the derivation kind is 'specialization' then this
     * is the master definition for a type, and there is always one of these (a data type, an
     * extension, a resource, including abstract ones). Otherwise the structure definition is a
     * constraint on the stated type (and in this case, the type cannot be an abstract type).
     * References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g.
     * "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs
     * are only allowed in logical models.
     */
    type?: string;
    /**
     * An absolute URI that is used to identify this structure definition when it is referenced
     * in a specification, model, design or an instance; also called its canonical identifier.
     * This SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this structure definition is (or will be) published. This URL
     * can be the target of a canonical reference. It SHALL remain the same when the structure
     * definition is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate structure definition instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the structure definition when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the structure definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface StructureDefinitionContext {
    /**
     * Extensions for expression
     */
    _expression?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * An expression that defines where an extension can be used in resources.
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
     * Defines how to interpret the expression that defines what the context of the extension is.
     */
    type?: StructureDefinitionContextType;
}

/**
 * Defines how to interpret the expression that defines what the context of the extension is.
 */
export enum StructureDefinitionContextType {
    Element = "element",
    Extension = "extension",
    Fhirpath = "fhirpath",
}

/**
 * How the type relates to the baseDefinition.
 */
export enum Derivation {
    Constraint = "constraint",
    Specialization = "specialization",
}

/**
 * A differential view is expressed relative to the base StructureDefinition - a statement
 * of differences that it applies.
 *
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface StructureDefinitionDifferential {
    /**
     * Captures constraints on each element within the resource.
     */
    element?: ElementDefinition[];
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
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinition {
    /**
     * Extensions for alias
     */
    _alias?: Element[];
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for condition
     */
    _condition?: Element[];
    /**
     * Extensions for contentReference
     */
    _contentReference?: Element;
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
     * Extensions for definition
     */
    _definition?: Element;
    /**
     * Extensions for fixedBase64Binary
     */
    _fixedBase64Binary?: Element;
    /**
     * Extensions for fixedBoolean
     */
    _fixedBoolean?: Element;
    /**
     * Extensions for fixedCanonical
     */
    _fixedCanonical?: Element;
    /**
     * Extensions for fixedCode
     */
    _fixedCode?: Element;
    /**
     * Extensions for fixedDate
     */
    _fixedDate?: Element;
    /**
     * Extensions for fixedDateTime
     */
    _fixedDateTime?: Element;
    /**
     * Extensions for fixedDecimal
     */
    _fixedDecimal?: Element;
    /**
     * Extensions for fixedId
     */
    _fixedId?: Element;
    /**
     * Extensions for fixedInstant
     */
    _fixedInstant?: Element;
    /**
     * Extensions for fixedInteger
     */
    _fixedInteger?: Element;
    /**
     * Extensions for fixedMarkdown
     */
    _fixedMarkdown?: Element;
    /**
     * Extensions for fixedOid
     */
    _fixedOid?: Element;
    /**
     * Extensions for fixedPositiveInt
     */
    _fixedPositiveInt?: Element;
    /**
     * Extensions for fixedString
     */
    _fixedString?: Element;
    /**
     * Extensions for fixedTime
     */
    _fixedTime?: Element;
    /**
     * Extensions for fixedUnsignedInt
     */
    _fixedUnsignedInt?: Element;
    /**
     * Extensions for fixedUri
     */
    _fixedUri?: Element;
    /**
     * Extensions for fixedUrl
     */
    _fixedUrl?: Element;
    /**
     * Extensions for fixedUuid
     */
    _fixedUuid?: Element;
    /**
     * Extensions for isModifier
     */
    _isModifier?: Element;
    /**
     * Extensions for isModifierReason
     */
    _isModifierReason?: Element;
    /**
     * Extensions for isSummary
     */
    _isSummary?: Element;
    /**
     * Extensions for label
     */
    _label?: Element;
    /**
     * Extensions for max
     */
    _max?: Element;
    /**
     * Extensions for maxLength
     */
    _maxLength?: Element;
    /**
     * Extensions for maxValueDate
     */
    _maxValueDate?: Element;
    /**
     * Extensions for maxValueDateTime
     */
    _maxValueDateTime?: Element;
    /**
     * Extensions for maxValueDecimal
     */
    _maxValueDecimal?: Element;
    /**
     * Extensions for maxValueInstant
     */
    _maxValueInstant?: Element;
    /**
     * Extensions for maxValueInteger
     */
    _maxValueInteger?: Element;
    /**
     * Extensions for maxValuePositiveInt
     */
    _maxValuePositiveInt?: Element;
    /**
     * Extensions for maxValueTime
     */
    _maxValueTime?: Element;
    /**
     * Extensions for maxValueUnsignedInt
     */
    _maxValueUnsignedInt?: Element;
    /**
     * Extensions for meaningWhenMissing
     */
    _meaningWhenMissing?: Element;
    /**
     * Extensions for min
     */
    _min?: Element;
    /**
     * Extensions for minValueDate
     */
    _minValueDate?: Element;
    /**
     * Extensions for minValueDateTime
     */
    _minValueDateTime?: Element;
    /**
     * Extensions for minValueDecimal
     */
    _minValueDecimal?: Element;
    /**
     * Extensions for minValueInstant
     */
    _minValueInstant?: Element;
    /**
     * Extensions for minValueInteger
     */
    _minValueInteger?: Element;
    /**
     * Extensions for minValuePositiveInt
     */
    _minValuePositiveInt?: Element;
    /**
     * Extensions for minValueTime
     */
    _minValueTime?: Element;
    /**
     * Extensions for minValueUnsignedInt
     */
    _minValueUnsignedInt?: Element;
    /**
     * Extensions for mustSupport
     */
    _mustSupport?: Element;
    /**
     * Extensions for orderMeaning
     */
    _orderMeaning?: Element;
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for patternBase64Binary
     */
    _patternBase64Binary?: Element;
    /**
     * Extensions for patternBoolean
     */
    _patternBoolean?: Element;
    /**
     * Extensions for patternCanonical
     */
    _patternCanonical?: Element;
    /**
     * Extensions for patternCode
     */
    _patternCode?: Element;
    /**
     * Extensions for patternDate
     */
    _patternDate?: Element;
    /**
     * Extensions for patternDateTime
     */
    _patternDateTime?: Element;
    /**
     * Extensions for patternDecimal
     */
    _patternDecimal?: Element;
    /**
     * Extensions for patternId
     */
    _patternId?: Element;
    /**
     * Extensions for patternInstant
     */
    _patternInstant?: Element;
    /**
     * Extensions for patternInteger
     */
    _patternInteger?: Element;
    /**
     * Extensions for patternMarkdown
     */
    _patternMarkdown?: Element;
    /**
     * Extensions for patternOid
     */
    _patternOid?: Element;
    /**
     * Extensions for patternPositiveInt
     */
    _patternPositiveInt?: Element;
    /**
     * Extensions for patternString
     */
    _patternString?: Element;
    /**
     * Extensions for patternTime
     */
    _patternTime?: Element;
    /**
     * Extensions for patternUnsignedInt
     */
    _patternUnsignedInt?: Element;
    /**
     * Extensions for patternUri
     */
    _patternUri?: Element;
    /**
     * Extensions for patternUrl
     */
    _patternUrl?: Element;
    /**
     * Extensions for patternUuid
     */
    _patternUuid?: Element;
    /**
     * Extensions for representation
     */
    _representation?: Element[];
    /**
     * Extensions for requirements
     */
    _requirements?: Element;
    /**
     * Extensions for short
     */
    _short?: Element;
    /**
     * Extensions for sliceIsConstraining
     */
    _sliceIsConstraining?: Element;
    /**
     * Extensions for sliceName
     */
    _sliceName?: Element;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: string[];
    /**
     * Information about the base definition of the element, provided to make it unnecessary for
     * tools to trace the deviation of the element through the derived and related profiles.
     * When the element definition is not the original definition of an element - i.g. either in
     * a constraint on another type, or for elements from a super type in a snap shot - then the
     * information in provided in the element definition may be different to the base
     * definition. On the original definition of the element, it will be same.
     */
    base?: ElementDefinitionBase;
    /**
     * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity),
     * or the data types (string, uri).
     */
    binding?: ElementDefinitionBinding;
    /**
     * A code that has the same meaning as the element in a particular terminology.
     */
    code?: Coding[];
    /**
     * Explanatory notes and implementation guidance about the data element, including notes
     * about how to use the data properly, exceptions to proper use, etc. (Note: The text you
     * are reading is specified in ElementDefinition.comment).
     */
    comment?: string;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or
     * value in the instance.
     */
    condition?: string[];
    /**
     * Formal constraints such as co-occurrence and other constraints that can be
     * computationally evaluated within the context of the instance.
     */
    constraint?: ElementDefinitionConstraint[];
    /**
     * Identifies an element defined elsewhere in the definition whose content rules should be
     * applied to the current element. ContentReferences bring across all the rules that are in
     * the ElementDefinition for the element, including definitions, cardinality constraints,
     * bindings, invariants etc.
     */
    contentReference?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAddress?: Address;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAge?: Age;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAnnotation?: Annotation;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAttachment?: Attachment;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueBase64Binary?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueBoolean?: boolean;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCanonical?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCode?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCodeableConcept?: CodeableConcept;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCoding?: Coding;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContactDetail?: ContactDetail;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContactPoint?: ContactPoint;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContributor?: Contributor;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCount?: Count;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDataRequirement?: DataRequirement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDate?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDateTime?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDecimal?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDistance?: Distance;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDosage?: Dosage;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDuration?: Duration;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueExpression?: Expression;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueHumanName?: HumanName;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueId?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueIdentifier?: Identifier;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueInstant?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueInteger?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueMarkdown?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueMoney?: Money;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueOid?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueParameterDefinition?: ParameterDefinition;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValuePeriod?: Period;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValuePositiveInt?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueQuantity?: Quantity;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRange?: Range;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRatio?: Ratio;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueReference?: Reference;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRelatedArtifact?: RelatedArtifact;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueSampledData?: SampledData;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueSignature?: Signature;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueString?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTime?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTiming?: Timing;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTriggerDefinition?: TriggerDefinition;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUnsignedInt?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUri?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUrl?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUsageContext?: UsageContext;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUuid?: string;
    /**
     * Provides a complete explanation of the meaning of the data element for human
     * readability.  For the case of elements derived from existing elements (e.g. constraints),
     * the definition SHALL be consistent with the base definition, but convey the meaning of
     * the element in the particular context of use of the resource. (Note: The text you are
     * reading is specified in ElementDefinition.definition).
     */
    definition?: string;
    /**
     * A sample value for this element demonstrating the type of information that would
     * typically be found in the element.
     */
    example?: ElementDefinitionExample[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAddress?: Address;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAge?: Age;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAnnotation?: Annotation;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAttachment?: Attachment;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBase64Binary?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBoolean?: boolean;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCanonical?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCode?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCodeableConcept?: CodeableConcept;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCoding?: Coding;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactDetail?: ContactDetail;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactPoint?: ContactPoint;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContributor?: Contributor;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCount?: Count;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDataRequirement?: DataRequirement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDate?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDateTime?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDecimal?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDistance?: Distance;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDosage?: Dosage;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDuration?: Duration;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedExpression?: Expression;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedHumanName?: HumanName;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedId?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedIdentifier?: Identifier;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInstant?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInteger?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMarkdown?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMoney?: Money;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedOid?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedParameterDefinition?: ParameterDefinition;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPeriod?: Period;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPositiveInt?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedQuantity?: Quantity;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRange?: Range;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRatio?: Ratio;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedReference?: Reference;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRelatedArtifact?: RelatedArtifact;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSampledData?: SampledData;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSignature?: Signature;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedString?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTime?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTiming?: Timing;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTriggerDefinition?: TriggerDefinition;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUnsignedInt?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUri?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUrl?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUsageContext?: UsageContext;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUuid?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * If true, the value of this element affects the interpretation of the element or resource
     * that contains it, and the value of the element cannot be ignored. Typically, this is used
     * for status, negation and qualification codes. The effect of this is that the element
     * cannot be ignored by systems: they SHALL either recognize the element and process it,
     * and/or a pre-determination has been made that it is not relevant to their particular
     * system.
     */
    isModifier?: boolean;
    /**
     * Explains how that element affects the interpretation of the resource or element that
     * contains it.
     */
    isModifierReason?: string;
    /**
     * Whether the element should be included if a client requests a search with the parameter
     * _summary=true.
     */
    isSummary?: boolean;
    /**
     * A single preferred label which is the text to display beside the element indicating its
     * meaning or to use to prompt for the element in a user display or form.
     */
    label?: string;
    /**
     * Identifies a concept from an external specification that roughly corresponds to this
     * element.
     */
    mapping?: ElementDefinitionMapping[];
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string;
    /**
     * Indicates the maximum length in characters that is permitted to be present in conformant
     * instances and which is expected to be supported by conformant consumers that support the
     * element.
     */
    maxLength?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDate?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDateTime?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDecimal?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInstant?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInteger?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValuePositiveInt?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueQuantity?: Quantity;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueTime?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueUnsignedInt?: number;
    /**
     * The Implicit meaning that is to be understood when this element is missing (e.g. 'when
     * this element is missing, the period is ongoing').
     */
    meaningWhenMissing?: string;
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDate?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDateTime?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDecimal?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInstant?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInteger?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValuePositiveInt?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueQuantity?: Quantity;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueTime?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueUnsignedInt?: number;
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
     * If true, implementations that produce or consume resources SHALL provide "support" for
     * the element in some meaningful way.  If false, the element may be ignored and not
     * supported. If false, whether to populate or use the data element in any way is at the
     * discretion of the implementation.
     */
    mustSupport?: boolean;
    /**
     * If present, indicates that the order of the repeating element has meaning and describes
     * what that meaning is.  If absent, it means that the order of the element has no meaning.
     */
    orderMeaning?: string;
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor
     * elements, beginning with the name of the resource or extension.
     */
    path?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAddress?: Address;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAge?: Age;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAnnotation?: Annotation;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAttachment?: Attachment;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternBase64Binary?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternBoolean?: boolean;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCanonical?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCode?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCodeableConcept?: CodeableConcept;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCoding?: Coding;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternContactDetail?: ContactDetail;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternContactPoint?: ContactPoint;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternContributor?: Contributor;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCount?: Count;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDataRequirement?: DataRequirement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDate?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDateTime?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDecimal?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDistance?: Distance;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDosage?: Dosage;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDuration?: Duration;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternExpression?: Expression;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternHumanName?: HumanName;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternId?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternIdentifier?: Identifier;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternInstant?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternInteger?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternMarkdown?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternMoney?: Money;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternOid?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternParameterDefinition?: ParameterDefinition;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternPeriod?: Period;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternPositiveInt?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternQuantity?: Quantity;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternRange?: Range;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternRatio?: Ratio;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternReference?: Reference;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternRelatedArtifact?: RelatedArtifact;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternSampledData?: SampledData;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternSignature?: Signature;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternString?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternTime?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternTiming?: Timing;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternTriggerDefinition?: TriggerDefinition;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUnsignedInt?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUri?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUrl?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUsageContext?: UsageContext;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUuid?: string;
    /**
     * Codes that define how this element is represented in instances, when the deviation varies
     * from the normal case.
     */
    representation?: Representation[];
    /**
     * This element is for traceability of why the element was created and why the constraints
     * exist as they do. This may be used to point to source materials or specifications that
     * drove the structure of this element.
     */
    requirements?: string;
    /**
     * A concise description of what this element means (e.g. for use in autogenerated
     * summaries).
     */
    short?: string;
    /**
     * If true, indicates that this slice definition is constraining a slice definition with the
     * same name in an inherited profile. If false, the slice is not overriding any slice in an
     * inherited profile. If missing, the slice might or might not be overriding a slice in an
     * inherited profile, depending on the sliceName.
     */
    sliceIsConstraining?: boolean;
    /**
     * The name of this element definition slice, when slicing is working. The name must be a
     * token with no dots or spaces. This is a unique name referring to a specific set of
     * constraints applied to this element, used to provide a name to different slices of the
     * same element.
     */
    sliceName?: string;
    /**
     * Indicates that the element is sliced into a set of alternative definitions (i.e. in a
     * structure definition, there are multiple different constraints on a single element in the
     * base resource). Slicing can be used in any resource that has cardinality ..* on the base
     * resource, or any resource with a choice of types. The set of slices is any elements that
     * come after this in the element sequence that have the same path, until a shorter path
     * occurs (the shorter path terminates the set).
     */
    slicing?: ElementDefinitionSlicing;
    /**
     * The data type or resource that the value of this element is permitted to be.
     */
    type?: ElementDefinitionType[];
}

/**
 * Information about the base definition of the element, provided to make it unnecessary for
 * tools to trace the deviation of the element through the derived and related profiles.
 * When the element definition is not the original definition of an element - i.g. either in
 * a constraint on another type, or for elements from a super type in a snap shot - then the
 * information in provided in the element definition may be different to the base
 * definition. On the original definition of the element, it will be same.
 *
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionBase {
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
     * Maximum cardinality of the base element identified by the path.
     */
    max?: string;
    /**
     * Minimum cardinality of the base element identified by the path.
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
     * The Path that identifies the base element - this matches the ElementDefinition.path for
     * that element. Across FHIR, there is only one base definition of any element - that is, an
     * element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */
    path?: string;
}

/**
 * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity),
 * or the data types (string, uri).
 *
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionBinding {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for strength
     */
    _strength?: Element;
    /**
     * Describes the intended use of this particular set of codes.
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
     * Indicates the degree of conformance expectations associated with this binding - that is,
     * the degree to which the provided value set must be adhered to in the instances.
     */
    strength?: Strength;
    /**
     * Refers to the value set that identifies the set of codes the binding refers to.
     */
    valueSet?: string;
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

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionConstraint {
    /**
     * Extensions for expression
     */
    _expression?: Element;
    /**
     * Extensions for human
     */
    _human?: Element;
    /**
     * Extensions for key
     */
    _key?: Element;
    /**
     * Extensions for requirements
     */
    _requirements?: Element;
    /**
     * Extensions for severity
     */
    _severity?: Element;
    /**
     * Extensions for xpath
     */
    _xpath?: Element;
    /**
     * A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this
     * constraint is met.
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
     * Text that can be used to describe the constraint in messages identifying that the
     * constraint has been violated.
     */
    human?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Allows identification of which elements have their cardinalities impacted by the
     * constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key?: string;
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
     * Description of why this constraint is necessary or appropriate.
     */
    requirements?: string;
    /**
     * Identifies the impact constraint violation has on the conformance of the instance.
     */
    severity?: Severity;
    /**
     * A reference to the original source of the constraint, for traceability purposes.
     */
    source?: string;
    /**
     * An XPath expression of constraint that can be executed to see if this constraint is met.
     */
    xpath?: string;
}

/**
 * Identifies the impact constraint violation has on the conformance of the instance.
 */
export enum Severity {
    Error = "error",
    Warning = "warning",
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionExample {
    /**
     * Extensions for label
     */
    _label?: Element;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: Element;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: Element;
    /**
     * Extensions for valueCode
     */
    _valueCode?: Element;
    /**
     * Extensions for valueDate
     */
    _valueDate?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueId
     */
    _valueId?: Element;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: Element;
    /**
     * Extensions for valueOid
     */
    _valueOid?: Element;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: Element;
    /**
     * Extensions for valueUri
     */
    _valueUri?: Element;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: Element;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: Element;
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
     * Describes the purpose of this example amoung the set of examples.
     */
    label?: string;
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
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: Address;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: Age;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: Annotation;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: Attachment;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCanonical?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: Coding;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: ContactDetail;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: ContactPoint;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: Contributor;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: Count;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: DataRequirement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: Distance;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: Dosage;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: Duration;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: Expression;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: HumanName;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: Identifier;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: Money;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: ParameterDefinition;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: Period;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: Quantity;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: Range;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: Ratio;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: Reference;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: RelatedArtifact;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: SampledData;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: Signature;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: Timing;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: TriggerDefinition;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUrl?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUsageContext?: UsageContext;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string;
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionMapping {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for identity
     */
    _identity?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for map
     */
    _map?: Element;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string;
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
     * An internal reference to the definition of a mapping.
     */
    identity?: string;
    /**
     * Identifies the computable language in which mapping.map is expressed.
     */
    language?: string;
    /**
     * Expresses what part of the target specification corresponds to this element.
     */
    map?: string;
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
}

export enum Representation {
    CdaText = "cdaText",
    TypeAttr = "typeAttr",
    Xhtml = "xhtml",
    XmlAttr = "xmlAttr",
    XmlText = "xmlText",
}

/**
 * Indicates that the element is sliced into a set of alternative definitions (i.e. in a
 * structure definition, there are multiple different constraints on a single element in the
 * base resource). Slicing can be used in any resource that has cardinality ..* on the base
 * resource, or any resource with a choice of types. The set of slices is any elements that
 * come after this in the element sequence that have the same path, until a shorter path
 * occurs (the shorter path terminates the set).
 *
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionSlicing {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for ordered
     */
    _ordered?: Element;
    /**
     * Extensions for rules
     */
    _rules?: Element;
    /**
     * A human-readable text description of how the slicing works. If there is no discriminator,
     * this is required to be present to provide whatever information is possible about how the
     * slices can be differentiated.
     */
    description?: string;
    /**
     * Designates which child elements are used to discriminate between the slices when
     * processing an instance. If one or more discriminators are provided, the value of the
     * child elements in the instance data SHALL completely distinguish which slice the element
     * in the resource matches based on the allowed values for those elements in each of the
     * slices.
     */
    discriminator?: ElementDefinitionDiscriminator[];
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
     * If the matching elements have to occur in the same order as defined in the profile.
     */
    ordered?: boolean;
    /**
     * Whether additional slices are allowed or not. When the slices are ordered, profile
     * authors can also say that additional slices are only allowed at the end.
     */
    rules?: Rules;
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionDiscriminator {
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
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
     * A FHIRPath expression, using [the simple subset of FHIRPath](fhirpath.html#simple), that
     * is used to identify the element on which discrimination is based.
     */
    path?: string;
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type?: ElementDefinitionDiscriminatorType;
}

/**
 * How the element value is interpreted when discrimination is evaluated.
 */
export enum ElementDefinitionDiscriminatorType {
    Exists = "exists",
    Pattern = "pattern",
    Profile = "profile",
    Type = "type",
    Value = "value",
}

/**
 * Whether additional slices are allowed or not. When the slices are ordered, profile
 * authors can also say that additional slices are only allowed at the end.
 */
export enum Rules {
    Closed = "closed",
    Open = "open",
    OpenAtEnd = "openAtEnd",
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinitionType {
    /**
     * Extensions for aggregation
     */
    _aggregation?: Element[];
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for versioning
     */
    _versioning?: Element;
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated
     * - is it a contained resource, or a reference, and if the context is a bundle, is it
     * included in the bundle.
     */
    aggregation?: Aggregation[];
    /**
     * URL of Data type or Resource that is a(or the) type used for this element. References are
     * URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a
     * reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only
     * allowed in logical models.
     */
    code?: string;
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
     * Identifies a profile structure or implementation Guide that applies to the datatype this
     * element refers to. If any profiles are specified, then the content must conform to at
     * least one of them. The URL can be a local reference - to a contained StructureDefinition,
     * or a reference to another StructureDefinition or Implementation Guide by a canonical URL.
     * When an implementation guide is specified, the type SHALL conform to at least one profile
     * defined in the implementation guide.
     */
    profile?: string[];
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or
     * implementation Guide that applies to the target of the reference this element refers to.
     * If any profiles are specified, then the content must conform to at least one of them. The
     * URL can be a local reference - to a contained StructureDefinition, or a reference to
     * another StructureDefinition or Implementation Guide by a canonical URL. When an
     * implementation guide is specified, the target resource SHALL conform to at least one
     * profile defined in the implementation guide.
     */
    targetProfile?: string[];
    /**
     * Whether this reference needs to be version specific or version independent, or whether
     * either can be used.
     */
    versioning?: Versioning;
}

export enum Aggregation {
    Bundled = "bundled",
    Contained = "contained",
    Referenced = "referenced",
}

/**
 * Whether this reference needs to be version specific or version independent, or whether
 * either can be used.
 */
export enum Versioning {
    Either = "either",
    Independent = "independent",
    Specific = "specific",
}

/**
 * The version of the FHIR specification on which this StructureDefinition is based - this
 * is the formal version of the specification, without the revision number, e.g.
 * [publication].[major].[minor], which is 4.0.0. for this version.
 */
export enum FhirVersion {
    The001 = "0.01",
    The005 = "0.05",
    The006 = "0.06",
    The0080 = "0.0.80",
    The0081 = "0.0.81",
    The0082 = "0.0.82",
    The011 = "0.11",
    The040 = "0.4.0",
    The050 = "0.5.0",
    The100 = "1.0.0",
    The101 = "1.0.1",
    The102 = "1.0.2",
    The110 = "1.1.0",
    The140 = "1.4.0",
    The160 = "1.6.0",
    The180 = "1.8.0",
    The300 = "3.0.0",
    The301 = "3.0.1",
    The330 = "3.3.0",
    The350 = "3.5.0",
    The400 = "4.0.0",
}

/**
 * Defines the kind of structure that this definition is describing.
 */
export enum Kind {
    ComplexType = "complex-type",
    Logical = "logical",
    PrimitiveType = "primitive-type",
    Resource = "resource",
}

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface StructureDefinitionMapping {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for identity
     */
    _identity?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for uri
     */
    _uri?: Element;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and
     * other important notes for usage.
     */
    comment?: string;
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
     * An Internal id that is used to identify this mapping set when specific mappings are made.
     */
    identity?: string;
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
     * A name for the specification that is being mapped to.
     */
    name?: string;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: string;
}

/**
 * A snapshot view is expressed in a standalone form that can be used and interpreted
 * without considering the base StructureDefinition.
 *
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface StructureDefinitionSnapshot {
    /**
     * Captures constraints on each element within the resource.
     */
    element?: ElementDefinition[];
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
}

/**
 * The status of this structure definition. Enables tracking the life-cycle of the content.
 */
export enum StructureDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}