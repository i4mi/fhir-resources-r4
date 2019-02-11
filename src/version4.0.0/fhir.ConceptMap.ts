import { Element,
         ContactDetail, 
         Extension,
         Identifier,
         CodeableConcept,
         Meta,
         Narrative,
         UsageContext} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirConceptMap } from "./file";
//
//   const fhirConceptMap = Convert.toFhirConceptMap(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ConceptMap {
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
     * Extensions for sourceCanonical
     */
    _sourceCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sourceUri
     */
    _sourceUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for targetCanonical
     */
    _targetCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for targetUri
     */
    _targetUri?: any[] | boolean | Element | number | number | null | string;
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
    contained?: Array<any[] | boolean | ConceptMap | number | null | string>;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: Array<any[] | boolean | ConceptMapGroup | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this concept map when it is represented in
     * other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the concept map is intended to be used.
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
    resourceType: any;
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
    status?: FhirConceptMapStatus;
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
    text?: any[] | boolean | Narrative | number | number | null | string;
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
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the concept map when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the concept map author and is not expected to be globally unique. For example,
     * it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is
     * also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

export interface ConceptMapGroup {
    /**
     * Extensions for source
     */
    _source?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sourceVersion
     */
    _sourceVersion?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for target
     */
    _target?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for targetVersion
     */
    _targetVersion?: any[] | boolean | Element | number | number | null | string;
    /**
     * Mappings for an individual concept in the source to one or more concepts in the target.
     */
    element: Array<any[] | boolean | ConceptMapElement | number | number | null | string>;
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
    unmapped?: any[] | boolean | ConceptMapUnmapped | number | number | null | string;
}

export interface ConceptMapElement {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for display
     */
    _display?: any[] | boolean | Element | number | number | null | string;
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
     * A concept from the target value set that this concept maps to.
     */
    target?: Array<any[] | boolean | ConceptMapTarget | number | number | null | string>;
}

export interface ConceptMapTarget {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for display
     */
    _display?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for equivalence
     */
    _equivalence?: any[] | boolean | Element | number | number | null | string;
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
    dependsOn?: Array<any[] | boolean | ConceptMapDependsOn | number | number | null | string>;
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
     * A set of additional outcomes from this mapping to other elements. To properly execute
     * this mapping, the specified element must be mapped to some data element or source that is
     * in context. The mapping may still be useful without a place for the additional data
     * elements, but the equivalence cannot be relied on.
     */
    product?: Array<any[] | boolean | ConceptMapDependsOn | number | number | null | string>;
}

export interface ConceptMapDependsOn {
    /**
     * Extensions for display
     */
    _display?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for property
     */
    _property?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
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

export interface ConceptMapUnmapped {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for display
     */
    _display?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    mode?: Mode;
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
export enum Mode {
    Fixed = "fixed",
    OtherMap = "other-map",
    Provided = "provided",
}

/**
 * The status of this concept map. Enables tracking the life-cycle of the content.
 */
export enum FhirConceptMapStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}