import { Element, ContactDetail, Extension, Identifier, CodeableConcept, Coding, Meta, Narrative, UsageContext, Address, Age, Annotation, Attachment, ContactPoint, Contributor, Count, DataRequirement, Distance, Dosage, Duration, Expression, HumanName, Money, ParameterDefinition, Period, Quantity, Ratio, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, Range } from "./fhir._";
export interface StructureDefinition {
    /**
     * Extensions for abstract
     */
    _abstract?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for contextInvariant
     */
    _contextInvariant?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for derivation
     */
    _derivation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for experimental
     */
    _experimental?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
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
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | StructureDefinition | number | null | string>;
    /**
     * Identifies the types of resource or data type elements to which the extension can be
     * applied.
     */
    context?: Array<any[] | boolean | StructureDefinitionContext | number | number | null | string>;
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
    differential?: any[] | boolean | StructureDefinitionDifferential | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the structure definition is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A set of key words or terms from external terminologies that may be used to assist with
     * indexing and searching of templates nby describing the use of this structure definition,
     * or the content it describes.
     */
    keyword?: Array<any[] | boolean | Coding | number | number | null | string>;
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
    mapping?: Array<any[] | boolean | StructureDefinitionMapping | number | number | null | string>;
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
    resourceType: any;
    /**
     * A snapshot view is expressed in a standalone form that can be used and interpreted
     * without considering the base StructureDefinition.
     */
    snapshot?: any[] | boolean | StructureDefinitionSnapshot | number | number | null | string;
    /**
     * The status of this structure definition. Enables tracking the life-cycle of the content.
     */
    status?: FhirStructureDefinitionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
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
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the structure definition when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the structure definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}
export interface StructureDefinitionContext {
    /**
     * Extensions for expression
     */
    _expression?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
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
     * Defines how to interpret the expression that defines what the context of the extension is.
     */
    type?: StructureDefinitionContextType;
}
/**
 * Defines how to interpret the expression that defines what the context of the extension is.
 */
export declare enum StructureDefinitionContextType {
    Element = "element",
    Extension = "extension",
    Fhirpath = "fhirpath"
}
/**
 * How the type relates to the baseDefinition.
 */
export declare enum Derivation {
    Constraint = "constraint",
    Specialization = "specialization"
}
export interface StructureDefinitionDifferential {
    /**
     * Captures constraints on each element within the resource.
     */
    element: Array<any[] | boolean | ElementDefinition | number | number | null | string>;
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
export interface ElementDefinition {
    /**
     * Extensions for alias
     */
    _alias?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for condition
     */
    _condition?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for contentReference
     */
    _contentReference?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueBase64Binary
     */
    _defaultValueBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueBoolean
     */
    _defaultValueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueCanonical
     */
    _defaultValueCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueCode
     */
    _defaultValueCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueDate
     */
    _defaultValueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueDateTime
     */
    _defaultValueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueDecimal
     */
    _defaultValueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueId
     */
    _defaultValueId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueInstant
     */
    _defaultValueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueInteger
     */
    _defaultValueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueMarkdown
     */
    _defaultValueMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueOid
     */
    _defaultValueOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValuePositiveInt
     */
    _defaultValuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueString
     */
    _defaultValueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueTime
     */
    _defaultValueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueUnsignedInt
     */
    _defaultValueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueUri
     */
    _defaultValueUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueUrl
     */
    _defaultValueUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for defaultValueUuid
     */
    _defaultValueUuid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for definition
     */
    _definition?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedBase64Binary
     */
    _fixedBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedBoolean
     */
    _fixedBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedCanonical
     */
    _fixedCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedCode
     */
    _fixedCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedDate
     */
    _fixedDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedDateTime
     */
    _fixedDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedDecimal
     */
    _fixedDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedId
     */
    _fixedId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedInstant
     */
    _fixedInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedInteger
     */
    _fixedInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedMarkdown
     */
    _fixedMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedOid
     */
    _fixedOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedPositiveInt
     */
    _fixedPositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedString
     */
    _fixedString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedTime
     */
    _fixedTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedUnsignedInt
     */
    _fixedUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedUri
     */
    _fixedUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedUrl
     */
    _fixedUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fixedUuid
     */
    _fixedUuid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for isModifier
     */
    _isModifier?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for isModifierReason
     */
    _isModifierReason?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for isSummary
     */
    _isSummary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for label
     */
    _label?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for max
     */
    _max?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxLength
     */
    _maxLength?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueDate
     */
    _maxValueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueDateTime
     */
    _maxValueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueDecimal
     */
    _maxValueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueInstant
     */
    _maxValueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueInteger
     */
    _maxValueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValuePositiveInt
     */
    _maxValuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueTime
     */
    _maxValueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxValueUnsignedInt
     */
    _maxValueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for meaningWhenMissing
     */
    _meaningWhenMissing?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for min
     */
    _min?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueDate
     */
    _minValueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueDateTime
     */
    _minValueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueDecimal
     */
    _minValueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueInstant
     */
    _minValueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueInteger
     */
    _minValueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValuePositiveInt
     */
    _minValuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueTime
     */
    _minValueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minValueUnsignedInt
     */
    _minValueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mustSupport
     */
    _mustSupport?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for orderMeaning
     */
    _orderMeaning?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for path
     */
    _path?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternBase64Binary
     */
    _patternBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternBoolean
     */
    _patternBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternCanonical
     */
    _patternCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternCode
     */
    _patternCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternDate
     */
    _patternDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternDateTime
     */
    _patternDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternDecimal
     */
    _patternDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternId
     */
    _patternId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternInstant
     */
    _patternInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternInteger
     */
    _patternInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternMarkdown
     */
    _patternMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternOid
     */
    _patternOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternPositiveInt
     */
    _patternPositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternString
     */
    _patternString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternTime
     */
    _patternTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternUnsignedInt
     */
    _patternUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternUri
     */
    _patternUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternUrl
     */
    _patternUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for patternUuid
     */
    _patternUuid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for representation
     */
    _representation?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for requirements
     */
    _requirements?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for short
     */
    _short?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sliceIsConstraining
     */
    _sliceIsConstraining?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sliceName
     */
    _sliceName?: any[] | boolean | Element | number | number | null | string;
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
    base?: any[] | boolean | ElementDefinitionBase | number | number | null | string;
    /**
     * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity),
     * or the data types (string, uri).
     */
    binding?: any[] | boolean | ElementDefinitionBinding | number | number | null | string;
    /**
     * A code that has the same meaning as the element in a particular terminology.
     */
    code?: Array<any[] | boolean | Coding | number | number | null | string>;
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
    constraint?: Array<any[] | boolean | ElementDefinitionConstraint | number | number | null | string>;
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
    defaultValueAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    defaultValueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    defaultValueDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueHumanName?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueId?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    defaultValueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueOid?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValuePositiveInt?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueSignature?: any[] | boolean | Signature | number | number | null | string;
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
    defaultValueTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    defaultValueUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
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
    example?: Array<any[] | boolean | ElementDefinitionExample | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    fixedCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    fixedDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedHumanName?: any[] | boolean | HumanName | number | number | null | string;
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
    fixedIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    fixedMoney?: any[] | boolean | Money | number | number | null | string;
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
    fixedParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPeriod?: any[] | boolean | Period | number | number | null | string;
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
    fixedQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSignature?: any[] | boolean | Signature | number | number | null | string;
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
    fixedTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    fixedUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
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
    mapping?: Array<any[] | boolean | ElementDefinitionMapping | number | number | null | string>;
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
    maxValueQuantity?: any[] | boolean | Quantity | number | number | null | string;
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
    minValueQuantity?: any[] | boolean | Quantity | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    patternAddress?: any[] | boolean | Address | number | number | null | string;
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
    patternAge?: any[] | boolean | Age | number | number | null | string;
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
    patternAnnotation?: any[] | boolean | Annotation | number | number | null | string;
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
    patternAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    patternCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
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
    patternCoding?: any[] | boolean | Coding | number | number | null | string;
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
    patternContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
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
    patternContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
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
    patternContributor?: any[] | boolean | Contributor | number | number | null | string;
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
    patternCount?: any[] | boolean | Count | number | number | null | string;
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
    patternDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    patternDistance?: any[] | boolean | Distance | number | number | null | string;
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
    patternDosage?: any[] | boolean | Dosage | number | number | null | string;
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
    patternDuration?: any[] | boolean | Duration | number | number | null | string;
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
    patternExpression?: any[] | boolean | Expression | number | number | null | string;
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
    patternHumanName?: any[] | boolean | HumanName | number | number | null | string;
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
    patternIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    patternMoney?: any[] | boolean | Money | number | number | null | string;
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
    patternParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
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
    patternPeriod?: any[] | boolean | Period | number | number | null | string;
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
    patternQuantity?: any[] | boolean | Quantity | number | number | null | string;
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
    patternRange?: any[] | boolean | Range | number | number | null | string;
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
    patternRatio?: any[] | boolean | Ratio | number | number | null | string;
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
    patternReference?: any[] | boolean | Reference | number | number | null | string;
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
    patternRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
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
    patternSampledData?: any[] | boolean | SampledData | number | number | null | string;
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
    patternSignature?: any[] | boolean | Signature | number | number | null | string;
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
    patternTiming?: any[] | boolean | Timing | number | number | null | string;
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
    patternTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    patternUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
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
    slicing?: any[] | boolean | ElementDefinitionSlicing | number | number | null | string;
    /**
     * The data type or resource that the value of this element is permitted to be.
     */
    type?: Array<any[] | boolean | ElementDefinitionType | number | number | null | string>;
}
export interface ElementDefinitionBase {
    /**
     * Extensions for max
     */
    _max?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for min
     */
    _min?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for path
     */
    _path?: any[] | boolean | Element | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for
     * that element. Across FHIR, there is only one base definition of any element - that is, an
     * element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */
    path?: string;
}
export interface ElementDefinitionBinding {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for strength
     */
    _strength?: any[] | boolean | Element | number | number | null | string;
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
     * Refers to the value set that identifies the set of codes the binding refers to.
     */
    valueSet?: string;
}
/**
 * Indicates the degree of conformance expectations associated with this binding - that is,
 * the degree to which the provided value set must be adhered to in the instances.
 */
export declare enum Strength {
    Example = "example",
    Extensible = "extensible",
    Preferred = "preferred",
    Required = "required"
}
export interface ElementDefinitionConstraint {
    /**
     * Extensions for expression
     */
    _expression?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for human
     */
    _human?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for key
     */
    _key?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for requirements
     */
    _requirements?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for severity
     */
    _severity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for xpath
     */
    _xpath?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
export declare enum Severity {
    Error = "error",
    Warning = "warning"
}
export interface ElementDefinitionExample {
    /**
     * Extensions for label
     */
    _label?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCode
     */
    _valueCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDate
     */
    _valueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueId
     */
    _valueId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueOid
     */
    _valueOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUri
     */
    _valueUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: any[] | boolean | Element | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    valueDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    valueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: any[] | boolean | Signature | number | number | null | string;
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
    valueTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    valueUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string;
}
export interface ElementDefinitionMapping {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for identity
     */
    _identity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for map
     */
    _map?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
}
export declare enum Representation {
    CdaText = "cdaText",
    TypeAttr = "typeAttr",
    XHTML = "xhtml",
    XMLAttr = "xmlAttr",
    XMLText = "xmlText"
}
export interface ElementDefinitionSlicing {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for ordered
     */
    _ordered?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for rules
     */
    _rules?: any[] | boolean | Element | number | number | null | string;
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
    discriminator?: Array<any[] | boolean | ElementDefinitionDiscriminator | number | number | null | string>;
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
     * If the matching elements have to occur in the same order as defined in the profile.
     */
    ordered?: boolean;
    /**
     * Whether additional slices are allowed or not. When the slices are ordered, profile
     * authors can also say that additional slices are only allowed at the end.
     */
    rules?: Rules;
}
export interface ElementDefinitionDiscriminator {
    /**
     * Extensions for path
     */
    _path?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
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
export declare enum ElementDefinitionDiscriminatorType {
    Exists = "exists",
    Pattern = "pattern",
    Profile = "profile",
    Type = "type",
    Value = "value"
}
/**
 * Whether additional slices are allowed or not. When the slices are ordered, profile
 * authors can also say that additional slices are only allowed at the end.
 */
export declare enum Rules {
    Closed = "closed",
    Open = "open",
    OpenAtEnd = "openAtEnd"
}
export interface ElementDefinitionType {
    /**
     * Extensions for aggregation
     */
    _aggregation?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for versioning
     */
    _versioning?: any[] | boolean | Element | number | number | null | string;
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
export declare enum Aggregation {
    Bundled = "bundled",
    Contained = "contained",
    Referenced = "referenced"
}
/**
 * Whether this reference needs to be version specific or version independent, or whether
 * either can be used.
 */
export declare enum Versioning {
    Either = "either",
    Independent = "independent",
    Specific = "specific"
}
/**
 * The version of the FHIR specification on which this StructureDefinition is based - this
 * is the formal version of the specification, without the revision number, e.g.
 * [publication].[major].[minor], which is 4.0.0. for this version.
 */
export declare enum FhirVersion {
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
    The400 = "4.0.0"
}
/**
 * Defines the kind of structure that this definition is describing.
 */
export declare enum Kind {
    ComplexType = "complex-type",
    Logical = "logical",
    PrimitiveType = "primitive-type",
    Resource = "resource"
}
export interface StructureDefinitionMapping {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for identity
     */
    _identity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for uri
     */
    _uri?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: string;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: string;
}
export interface StructureDefinitionSnapshot {
    /**
     * Captures constraints on each element within the resource.
     */
    element: Array<any[] | boolean | ElementDefinition | number | number | null | string>;
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
 * The status of this structure definition. Enables tracking the life-cycle of the content.
 */
export declare enum FhirStructureDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
