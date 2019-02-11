import { Element, ContactDetail, Extension, Identifier, CodeableConcept, Meta, Narrative, UsageContext, Address, Age, Annotation, Attachment, Coding, ContactPoint, Contributor, Count, DataRequirement, Distance, Dosage, Duration, Expression, HumanName, Money, ParameterDefinition, Period, Quantity, Ratio, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, Range } from "./fhir._";
export interface StructureMap {
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | StructureMap | number | null | string>;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: Array<any[] | boolean | StructureMapGroup | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this structure map when it is represented in
     * other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
    resourceType: any;
    /**
     * The status of this structure map. Enables tracking the life-cycle of the content.
     */
    status?: FhirStructureMapStatus;
    /**
     * A structure definition used by this map. The structure definition may describe instances
     * that are converted, or the instances that are produced.
     */
    structure?: Array<any[] | boolean | StructureMapStructure | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
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
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the structure map when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the structure map author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}
export interface StructureMapGroup {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for extends
     */
    _extends?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for typeMode
     */
    _typeMode?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A name assigned to an instance of data. The instance must be provided when the mapping is
     * invoked.
     */
    input: Array<any[] | boolean | StructureMapInput | number | number | null | string>;
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
     * A unique name for the group for the convenience of human readers.
     */
    name?: string;
    /**
     * Transform Rule from source to target.
     */
    rule: Array<any[] | boolean | StructureMapRule | number | number | null | string>;
    /**
     * If this is the default rule set to apply for the source type or this combination of types.
     */
    typeMode?: TypeMode;
}
export interface StructureMapInput {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
export declare enum StructureMapInputMode {
    Source = "source",
    Target = "target"
}
export interface StructureMapRule {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: Array<any[] | boolean | StructureMapDependent | number | number | null | string>;
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
     * Name of the rule for internal references.
     */
    name?: string;
    /**
     * Rules contained in this rule.
     */
    rule?: Array<any[] | boolean | StructureMapRule | number | number | null | string>;
    /**
     * Source inputs to the mapping.
     */
    source: Array<any[] | boolean | StructureMapSource | number | number | null | string>;
    /**
     * Content to create because of this mapping rule.
     */
    target?: Array<any[] | boolean | StructureMapTarget | number | number | null | string>;
}
export interface StructureMapDependent {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for variable
     */
    _variable?: Array<any[] | boolean | Element | number | number | null | string>;
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
     * Name of a rule or group to apply.
     */
    name?: string;
    /**
     * Variable to pass to the rule or group.
     */
    variable?: string[];
}
export interface StructureMapSource {
    /**
     * Extensions for check
     */
    _check?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for condition
     */
    _condition?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for context
     */
    _context?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for element
     */
    _element?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for listMode
     */
    _listMode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for logMessage
     */
    _logMessage?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for max
     */
    _max?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for min
     */
    _min?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for variable
     */
    _variable?: any[] | boolean | Element | number | number | null | string;
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
    defaultValueAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueAttachment?: any[] | boolean | Attachment | number | number | null | string;
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
    defaultValueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
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
    defaultValueDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueHumanName?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueId?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
    defaultValueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueOid?: string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValuePositiveInt?: number;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueSignature?: any[] | boolean | Signature | number | number | null | string;
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
    defaultValueTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * A value to use if there is no existing value in the source object.
     */
    defaultValueTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
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
    defaultValueUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
export declare enum StructureMapSourceListMode {
    First = "first",
    Last = "last",
    NotFirst = "not_first",
    NotLast = "not_last",
    OnlyOne = "only_one"
}
export interface StructureMapTarget {
    /**
     * Extensions for context
     */
    _context?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for contextType
     */
    _contextType?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for element
     */
    _element?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for listMode
     */
    _listMode?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for listRuleId
     */
    _listRuleId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for transform
     */
    _transform?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for variable
     */
    _variable?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Parameters to the transform.
     */
    parameter?: Array<any[] | boolean | StructureMapParameter | number | number | null | string>;
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
export declare enum ContextType {
    Type = "type",
    Variable = "variable"
}
export declare enum ListModeElement {
    Collate = "collate",
    First = "first",
    Last = "last",
    Share = "share"
}
export interface StructureMapParameter {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueId
     */
    _valueId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
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
export declare enum Transform {
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
    ID = "id",
    Pointer = "pointer",
    Qty = "qty",
    Reference = "reference",
    Translate = "translate",
    Truncate = "truncate",
    UUID = "uuid"
}
/**
 * If this is the default rule set to apply for the source type or this combination of types.
 */
export declare enum TypeMode {
    None = "none",
    TypeAndTypes = "type-and-types",
    Types = "types"
}
/**
 * The status of this structure map. Enables tracking the life-cycle of the content.
 */
export declare enum FhirStructureMapStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
export interface StructureMapStructure {
    /**
     * Extensions for alias
     */
    _alias?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The canonical reference to the structure.
     */
    url: string;
}
/**
 * How the referenced structure is used in this mapping.
 */
export declare enum StructureMapStructureMode {
    Produced = "produced",
    Queried = "queried",
    Source = "source",
    Target = "target"
}
