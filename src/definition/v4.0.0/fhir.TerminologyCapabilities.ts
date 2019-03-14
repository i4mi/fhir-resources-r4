import {
    Element,
    ContactDetail,
    Extension,
    CodeableConcept,
    Meta,
    Narrative,
    UsageContext
} from "./fhir._";

export interface TerminologyCapabilities {
    /**
     * Extensions for codeSearch
     */
    _codeSearch?: Element;
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
     * Extensions for kind
     */
    _kind?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lockedDate
     */
    _lockedDate?: Element;
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
     * Whether the $closure operation is supported.
     */
    closure?: TerminologyCapabilitiesClosure;
    /**
     * The degree to which the server supports the code search parameter on ValueSet, if it is
     * supported.
     */
    codeSearch?: CodeSearch;
    /**
     * Identifies a code system that is supported by the server. If there is a no code system
     * URL, then this declares the general assumptions a client can make about support for any
     * CodeSystem resource.
     */
    codeSystem?: TerminologyCapabilitiesCodeSystem[];
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: TerminologyCapabilities[];
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents.
     * Copyright statements are generally legal restrictions on the use and publishing of the
     * terminology capabilities.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the terminology capabilities was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the terminology
     * capabilities changes.
     */
    date?: string;
    /**
     * A free text natural language description of the terminology capabilities from a
     * consumer's perspective. Typically, this is used when the capability statement describes a
     * desired rather than an actual solution, for example as a formal expression of
     * requirements as part of an RFP.
     */
    description?: string;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: TerminologyCapabilitiesExpansion;
    /**
     * A Boolean value to indicate that this terminology capabilities is authored for testing
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
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifies a specific implementation instance that is described by the terminology
     * capability statement - i.e. a particular installation, rather than the capabilities of a
     * software program.
     */
    implementation?: TerminologyCapabilitiesImplementation;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the terminology capabilities is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * The way that this statement is intended to be used, to describe an actual running
     * instance of software, a particular product (kind, not instance of software) or a class of
     * implementation (e.g. a desired purchase).
     */
    kind?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: boolean;
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
     * A natural language name identifying the terminology capabilities. This name should be
     * usable as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the terminology capabilities.
     */
    publisher?: string;
    /**
     * Explanation of why this terminology capabilities is needed and why it has been designed
     * as it has.
     */
    purpose?: string;
    /**
     * This is a TerminologyCapabilities resource
     */
    resourceType?: any;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the
     * statement describes the capabilities of a particular software version, independent of an
     * installation.
     */
    software?: TerminologyCapabilitiesSoftware;
    /**
     * The status of this terminology capabilities. Enables tracking the life-cycle of the
     * content.
     */
    status?: TerminologyCapabilitiesStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the terminology capabilities.
     */
    title?: string;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html)
     * operation.
     */
    translation?: TerminologyCapabilitiesTranslation;
    /**
     * An absolute URI that is used to identify this terminology capabilities when it is
     * referenced in a specification, model, design or an instance; also called its canonical
     * identifier. This SHOULD be globally unique and SHOULD be a literal address at which at
     * which an authoritative instance of this terminology capabilities is (or will be)
     * published. This URL can be the target of a canonical reference. It SHALL remain the same
     * when the terminology capabilities is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate terminology capabilities instances.
     */
    useContext?: UsageContext[];
    /**
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html)
     * operation.
     */
    validateCode?: TerminologyCapabilitiesValidateCode;
    /**
     * The identifier that is used to identify this version of the terminology capabilities when
     * it is referenced in a specification, model, design or instance. This is an arbitrary
     * value managed by the terminology capabilities author and is not expected to be globally
     * unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not
     * available. There is also no expectation that versions can be placed in a lexicographical
     * sequence.
     */
    version?: string;
}

/**
 * Whether the $closure operation is supported.
 *
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesClosure {
    /**
     * Extensions for translation
     */
    _translation?: Element;
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
     * If cross-system closure is supported.
     */
    translation?: boolean;
}

/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is
 * supported.
 */
export enum CodeSearch {
    All = "all",
    Explicit = "explicit",
}

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesCodeSystem {
    /**
     * Extensions for subsumption
     */
    _subsumption?: Element;
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
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean;
    /**
     * URI for the Code System.
     */
    uri?: string;
    /**
     * For the code system, a list of versions that are supported by the server.
     */
    version?: TerminologyCapabilitiesVersion[];
}

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesVersion {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for compositional
     */
    _compositional?: Element;
    /**
     * Extensions for isDefault
     */
    _isDefault?: Element;
    /**
     * Extensions for language
     */
    _language?: Element[];
    /**
     * Extensions for property
     */
    _property?: Element[];
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: string;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Filter Properties supported.
     */
    filter?: TerminologyCapabilitiesFilter[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: boolean;
    /**
     * Language Displays supported.
     */
    language?: string[];
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
     * Properties supported for $lookup.
     */
    property?: string[];
}

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesFilter {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * Extensions for op
     */
    _op?: Element[];
    /**
     * Code of the property supported.
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
     * Operations supported for the property.
     */
    op?: string[];
}

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 *
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesExpansion {
    /**
     * Extensions for hierarchical
     */
    _hierarchical?: Element;
    /**
     * Extensions for incomplete
     */
    _incomplete?: Element;
    /**
     * Extensions for paging
     */
    _paging?: Element;
    /**
     * Extensions for textFilter
     */
    _textFilter?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: boolean;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: boolean;
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
     * Whether the server supports paging on expansion.
     */
    paging?: boolean;
    /**
     * Supported expansion parameter.
     */
    parameter?: TerminologyCapabilitiesParameter[];
    /**
     * Documentation about text searching works.
     */
    textFilter?: string;
}

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesParameter {
    /**
     * Extensions for documentation
     */
    _documentation?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Description of support for parameter.
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
     * Expansion Parameter name.
     */
    name?: string;
}

/**
 * Identifies a specific implementation instance that is described by the terminology
 * capability statement - i.e. a particular installation, rather than the capabilities of a
 * software program.
 *
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesImplementation {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Information about the specific installation that this terminology capability statement
     * relates to.
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
     * An absolute base URL for the implementation.
     */
    url?: string;
}

/**
 * Software that is covered by this terminology capability statement.  It is used when the
 * statement describes the capabilities of a particular software version, independent of an
 * installation.
 *
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesSoftware {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
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
     * Name the software is known by.
     */
    name?: string;
    /**
     * The version identifier for the software covered by this statement.
     */
    version?: string;
}

/**
 * The status of this terminology capabilities. Enables tracking the life-cycle of the
 * content.
 */
export enum TerminologyCapabilitiesStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}

/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html)
 * operation.
 *
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesTranslation {
    /**
     * Extensions for needsMap
     */
    _needsMap?: Element;
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
     * Whether the client must identify the map.
     */
    needsMap?: boolean;
}

/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html)
 * operation.
 *
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 */
export interface TerminologyCapabilitiesValidateCode {
    /**
     * Extensions for translations
     */
    _translations?: Element;
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
     * Whether translations are validated.
     */
    translations?: boolean;
}