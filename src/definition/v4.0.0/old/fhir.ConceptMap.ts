import {
    Element,
    ContactDetail,
    Extension,
    Identifier,
    CodeableConcept,
    Meta,
    Narrative,
    UsageContext
} from "./fhir._";

export interface ConceptMap {
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
     * Extensions for sourceCanonical
     */
    _sourceCanonical?: Element;
    /**
     * Extensions for sourceUri
     */
    _sourceUri?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for targetCanonical
     */
    _targetCanonical?: Element;
    /**
     * Extensions for targetUri
     */
    _targetUri?: Element;
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
    contained?: ConceptMap[];
    /**
     * A copyright statement relating to the concept map and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the concept map.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the concept map was published. The date must change
     * when the business version changes and it must change if the status code changes. In
     * addition, it should change when the substantive content of the concept map changes.
     */
    date?: string;
    /**
     * A free text natural language description of the concept map from a consumer's perspective.
     */
    description?: string;
    /**
     * A Boolean value to indicate that this concept map is authored for testing purposes (or
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
     * A group of mappings that all have the same source and target system.
     */
    group?: ConceptMapGroup[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this concept map when it is represented in
     * other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the concept map is intended to be used.
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
     * A natural language name identifying the concept map. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the concept map.
     */
    publisher?: string;
    /**
     * Explanation of why this concept map is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * This is a ConceptMap resource
     */
    resourceType?: any;
    /**
     * Identifier for the source value set that contains the concepts that are being mapped and
     * provides context for the mappings.
     */
    sourceCanonical?: string;
    /**
     * Identifier for the source value set that contains the concepts that are being mapped and
     * provides context for the mappings.
     */
    sourceUri?: string;
    /**
     * The status of this concept map. Enables tracking the life-cycle of the content.
     */
    status?: ConceptMapStatus;
    /**
     * The target value set provides context for the mappings. Note that the mapping is made
     * between concepts, not between value sets, but the value set provides important context
     * about how the concept mapping choices are made.
     */
    targetCanonical?: string;
    /**
     * The target value set provides context for the mappings. Note that the mapping is made
     * between concepts, not between value sets, but the value set provides important context
     * about how the concept mapping choices are made.
     */
    targetUri?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the concept map.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this concept map when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this concept map is (or will be) published. This URL can be the
     * target of a canonical reference. It SHALL remain the same when the concept map is stored
     * on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate concept map instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the concept map when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the concept map author and is not expected to be globally unique. For example,
     * it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is
     * also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * A statement of relationships from one set of concepts to one or more other concepts -
 * either concepts in code systems, or data element/data element concepts, or classes in
 * class models.
 */
export interface ConceptMapGroup {
    /**
     * Extensions for source
     */
    _source?: Element;
    /**
     * Extensions for sourceVersion
     */
    _sourceVersion?: Element;
    /**
     * Extensions for target
     */
    _target?: Element;
    /**
     * Extensions for targetVersion
     */
    _targetVersion?: Element;
    /**
     * Mappings for an individual concept in the source to one or more concepts in the target.
     */
    element?: ConceptMapElement[];
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
     * An absolute URI that identifies the source system where the concepts to be mapped are
     * defined.
     */
    source?: string;
    /**
     * The specific version of the code system, as determined by the code system authority.
     */
    sourceVersion?: string;
    /**
     * An absolute URI that identifies the target system that the concepts will be mapped to.
     */
    target?: string;
    /**
     * The specific version of the code system, as determined by the code system authority.
     */
    targetVersion?: string;
    /**
     * What to do when there is no mapping for the source concept. "Unmapped" does not include
     * codes that are unmatched, and the unmapped element is ignored in a code is specified to
     * have equivalence = unmatched.
     */
    unmapped?: ConceptMapUnmapped;
}

/**
 * A statement of relationships from one set of concepts to one or more other concepts -
 * either concepts in code systems, or data element/data element concepts, or classes in
 * class models.
 */
export interface ConceptMapElement {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: string;
    /**
     * The display for the code. The display is only provided to help editors when editing the
     * concept map.
     */
    display?: string;
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
     * A concept from the target value set that this concept maps to.
     */
    target?: ConceptMapTarget[];
}

/**
 * A statement of relationships from one set of concepts to one or more other concepts -
 * either concepts in code systems, or data element/data element concepts, or classes in
 * class models.
 */
export interface ConceptMapTarget {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for equivalence
     */
    _equivalence?: Element;
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string;
    /**
     * A description of status/issues in mapping that conveys additional information not
     * represented in  the structured data.
     */
    comment?: string;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only
     * applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: ConceptMapDependsOn[];
    /**
     * The display for the code. The display is only provided to help editors when editing the
     * concept map.
     */
    display?: string;
    /**
     * The equivalence between the source and target concepts (counting for the dependencies and
     * products). The equivalence is read from target to source (e.g. the target is 'wider' than
     * the source).
     */
    equivalence?: Equivalence;
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
     * A set of additional outcomes from this mapping to other elements. To properly execute
     * this mapping, the specified element must be mapped to some data element or source that is
     * in context. The mapping may still be useful without a place for the additional data
     * elements, but the equivalence cannot be relied on.
     */
    product?: ConceptMapDependsOn[];
}

/**
 * A statement of relationships from one set of concepts to one or more other concepts -
 * either concepts in code systems, or data element/data element concepts, or classes in
 * class models.
 */
export interface ConceptMapDependsOn {
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for property
     */
    _property?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * The display for the code. The display is only provided to help editors when editing the
     * concept map.
     */
    display?: string;
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
     * A reference to an element that holds a coded value that corresponds to a code system
     * property. The idea is that the information model carries an element somewhere that is
     * labeled to correspond with a code system property.
     */
    property?: string;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the
     * source/dependency is a value set that crosses code systems).
     */
    system?: string;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on /
     * refers to.
     */
    value?: string;
}

/**
 * The equivalence between the source and target concepts (counting for the dependencies and
 * products). The equivalence is read from target to source (e.g. the target is 'wider' than
 * the source).
 */
export enum Equivalence {
    Disjoint = "disjoint",
    Equal = "equal",
    Equivalent = "equivalent",
    Inexact = "inexact",
    Narrower = "narrower",
    Relatedto = "relatedto",
    Specializes = "specializes",
    Subsumes = "subsumes",
    Unmatched = "unmatched",
    Wider = "wider",
}

/**
 * What to do when there is no mapping for the source concept. "Unmapped" does not include
 * codes that are unmatched, and the unmapped element is ignored in a code is specified to
 * have equivalence = unmatched.
 *
 * A statement of relationships from one set of concepts to one or more other concepts -
 * either concepts in code systems, or data element/data element concepts, or classes in
 * class models.
 */
export interface ConceptMapUnmapped {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for display
     */
    _display?: Element;
    /**
     * Extensions for mode
     */
    _mode?: Element;
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a
     * single fixed code.
     */
    code?: string;
    /**
     * The display for the code. The display is only provided to help editors when editing the
     * concept map.
     */
    display?: string;
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
     * Defines which action to take if there is no match for the source concept in the target
     * system designated for the group. One of 3 actions are possible: use the unmapped code
     * (this is useful when doing a mapping between versions, and only a few codes have
     * changed), use a fixed code (a default code), or alternatively, a reference to a different
     * concept map can be provided (by canonical URL).
     */
    mode?: ConceptMapUnmappedMode;
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
     * The canonical reference to an additional ConceptMap resource instance to use for mapping
     * if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: string;
}

/**
 * Defines which action to take if there is no match for the source concept in the target
 * system designated for the group. One of 3 actions are possible: use the unmapped code
 * (this is useful when doing a mapping between versions, and only a few codes have
 * changed), use a fixed code (a default code), or alternatively, a reference to a different
 * concept map can be provided (by canonical URL).
 */
export enum ConceptMapUnmappedMode {
    Fixed = "fixed",
    OtherMap = "other-map",
    Provided = "provided",
}

/**
 * The status of this concept map. Enables tracking the life-cycle of the content.
 */
export enum ConceptMapStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}