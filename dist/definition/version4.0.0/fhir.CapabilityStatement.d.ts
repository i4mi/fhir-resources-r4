import { Element, ContactDetail, Extension, CodeableConcept, Meta, Narrative, UsageContext, Reference, Coding } from "./fhir._";
export interface CapabilityStatement {
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
     * Extensions for fhirVersion
     */
    _fhirVersion?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for format
     */
    _format?: Array<any[] | boolean | Element | number | number | null | string>;
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
     * Extensions for patchFormat
     */
    _patchFormat?: Array<any[] | boolean | Element | number | number | null | string>;
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
    contained?: Array<any[] | boolean | CapabilityStatement | number | null | string>;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the capability
     * statement.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the capability statement was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the capability
     * statement changes.
     */
    date?: string;
    /**
     * A free text natural language description of the capability statement from a consumer's
     * perspective. Typically, this is used when the capability statement describes a desired
     * rather than an actual solution, for example as a formal expression of requirements as
     * part of an RFP.
     */
    description?: string;
    /**
     * A document definition.
     */
    document?: Array<any[] | boolean | CapabilityStatementDocument | number | number | null | string>;
    /**
     * A Boolean value to indicate that this capability statement is authored for testing
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
     * The version of the FHIR specification that this CapabilityStatement describes (which
     * SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no
     * default value.
     */
    fhirVersion?: FhirVersion;
    /**
     * A list of the formats supported by this implementation using their content types.
     */
    format?: string[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifies a specific implementation instance that is described by the capability
     * statement - i.e. a particular installation, rather than the capabilities of a software
     * program.
     */
    implementation?: any[] | boolean | CapabilityStatementImplementation | number | number | null | string;
    /**
     * A list of implementation guides that the server does (or should) support in their
     * entirety.
     */
    implementationGuide?: string[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Reference to a canonical URL of another CapabilityStatement that this software adds to.
     * The capability statement automatically includes everything in the other statement, and it
     * is not duplicated, though the server may repeat the same resources, interactions and
     * operations to add additional details to them.
     */
    imports?: string[];
    /**
     * Reference to a canonical URL of another CapabilityStatement that this software
     * implements. This capability statement is a published API description that corresponds to
     * a business service. The server may actually implement a subset of the capability
     * statement it claims to implement, so the capability statement must specify the full
     * capability details.
     */
    instantiates?: string[];
    /**
     * A legal or geographic region in which the capability statement is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The way that this statement is intended to be used, to describe an actual running
     * instance of software, a particular product (kind, not instance of software) or a  of
     * implementation (e.g. a desired purchase).
     */
    kind?: Kind;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * A description of the messaging capabilities of the solution.
     */
    messaging?: Array<any[] | boolean | CapabilityStatementMessaging | number | number | null | string>;
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
     * A natural language name identifying the capability statement. This name should be usable
     * as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * A list of the patch formats supported by this implementation using their content types.
     */
    patchFormat?: string[];
    /**
     * The name of the organization or individual that published the capability statement.
     */
    publisher?: string;
    /**
     * Explanation of why this capability statement is needed and why it has been designed as it
     * has.
     */
    purpose?: string;
    /**
     * This is a CapabilityStatement resource
     */
    resourceType: any;
    /**
     * A definition of the restful capabilities of the solution, if any.
     */
    rest?: Array<any[] | boolean | CapabilityStatementREST | number | number | null | string>;
    /**
     * Software that is covered by this capability statement.  It is used when the capability
     * statement describes the capabilities of a particular software version, independent of an
     * installation.
     */
    software?: any[] | boolean | CapabilityStatementSoftware | number | number | null | string;
    /**
     * The status of this capability statement. Enables tracking the life-cycle of the content.
     */
    status?: FhirCapabilityStatementStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the capability statement.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this capability statement when it is referenced
     * in a specification, model, design or an instance; also called its canonical identifier.
     * This SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this capability statement is (or will be) published. This URL
     * can be the target of a canonical reference. It SHALL remain the same when the capability
     * statement is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate capability statement instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the capability statement when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the capability statement author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}
export interface CapabilityStatementDocument {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * A description of how the application supports or uses the specified document profile.
     * For example, when documents are created, what action is taken with consumed documents,
     * etc.
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
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode?: CapabilityStatementDocumentMode;
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
     * A profile on the document Bundle that constrains which resources are present, and their
     * contents.
     */
    profile: string;
}
/**
 * Mode of this document declaration - whether an application is a producer or consumer.
 */
export declare enum CapabilityStatementDocumentMode {
    Consumer = "consumer",
    Producer = "producer"
}
/**
 * The version of the FHIR specification that this CapabilityStatement describes (which
 * SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no
 * default value.
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
export interface CapabilityStatementImplementation {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * The organization responsible for the management of the instance and oversight of the data
     * on the server at the specified URL.
     */
    custodian?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Information about the specific installation that this capability statement relates to.
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
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as
     * well as the mailbox and document interfaces.
     */
    url?: string;
}
/**
 * The way that this statement is intended to be used, to describe an actual running
 * instance of software, a particular product (kind, not instance of software) or a  of
 * implementation (e.g. a desired purchase).
 */
export declare enum Kind {
    Capability = "capability",
    Instance = "instance",
    Requirements = "requirements"
}
export interface CapabilityStatementMessaging {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for reliableCache
     */
    _reliableCache?: any[] | boolean | Element | number | number | null | string;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise
     * documented by the capability statement.  For example, the process for becoming an
     * authorized messaging exchange partner.
     */
    documentation?: string;
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: Array<any[] | boolean | CapabilityStatementEndpoint | number | number | null | string>;
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
     * Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long
     * the cache length on the receiver should be (if a sender).
     */
    reliableCache?: number;
    /**
     * References to message definitions for messages this system can send or receive.
     */
    supportedMessage?: Array<any[] | boolean | CapabilityStatementSupportedMessage | number | number | null | string>;
}
export interface CapabilityStatementEndpoint {
    /**
     * Extensions for address
     */
    _address?: any[] | boolean | Element | number | number | null | string;
    /**
     * The network address of the endpoint. For solutions that do not use network addresses for
     * routing, it can be just an identifier.
     */
    address?: string;
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
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: any[] | boolean | Coding | number | number | null | string;
}
export interface CapabilityStatementSupportedMessage {
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Points to a message definition that identifies the messaging event, message structure,
     * allowed responses, etc.
     */
    definition: string;
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
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode?: CapabilityStatementSupportedMessageMode;
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
 * The mode of this event declaration - whether application is sender or receiver.
 */
export declare enum CapabilityStatementSupportedMessageMode {
    Receiver = "receiver",
    Sender = "sender"
}
export interface CapabilityStatementREST {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * An absolute URI which is a reference to the definition of a compartment that the system
     * supports. The reference is to a CompartmentDefinition resource by its canonical URL .
     */
    compartment?: string[];
    /**
     * Information about the system's restful capabilities that apply across all applications,
     * such as security.
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
     * A specification of restful operations supported by the system.
     */
    interaction?: Array<any[] | boolean | CapabilityStatementInteraction1 | number | number | null | string>;
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or
     * receive restful operations.
     */
    mode?: CapabilityStatementRESTMode;
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
     * Definition of an operation or a named query together with its parameters and their
     * meaning and type.
     */
    operation?: Array<any[] | boolean | CapabilityStatementOperation | number | number | null | string>;
    /**
     * A specification of the restful capabilities of the solution for a specific resource type.
     */
    resource?: Array<any[] | boolean | CapabilityStatementResource | number | number | null | string>;
    /**
     * Search parameters that are supported for searching all resources for implementations to
     * support and/or make use of - either references to ones defined in the specification, or
     * additional ones defined for/by the implementation.
     */
    searchParam?: Array<any[] | boolean | CapabilityStatementSearchParam | number | number | null | string>;
    /**
     * Information about security implementation from an interface perspective - what a client
     * needs to know.
     */
    security?: any[] | boolean | CapabilityStatementSecurity | number | number | null | string;
}
export interface CapabilityStatementInteraction1 {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code?: CapabilityStatementInteraction1Code;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the
     * kind of transactions allowed, or information about system wide search is implemented.
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
}
/**
 * A coded identifier of the operation, supported by the system.
 */
export declare enum CapabilityStatementInteraction1Code {
    Batch = "batch",
    HistorySystem = "history-system",
    SearchSystem = "search-system",
    Transaction = "transaction"
}
/**
 * Identifies whether this portion of the statement is describing the ability to initiate or
 * receive restful operations.
 */
export declare enum CapabilityStatementRESTMode {
    Client = "client",
    Server = "server"
}
export interface CapabilityStatementOperation {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Where the formal definition can be found. If a server references the base definition of
     * an Operation (i.e. from the specification itself such as
     * ```http://hl7.org/fhir/OperationDefinition/ValueSet-expand```), that means it supports
     * the full capabilities of the operation - e.g. both GET and POST invocation.  If it only
     * supports a subset, it must define its own custom [[[OperationDefinition]]] with a 'base'
     * of the original OperationDefinition.  The custom definition would describe the specific
     * subset of functionality supported.
     */
    definition: string;
    /**
     * Documentation that describes anything special about the operation behavior, possibly
     * detailing different behavior for system, type and instance-level invocation of the
     * operation.
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
     * The name of the operation or query. For an operation, this is the name  prefixed with $
     * and used in the URL. For a query, this is the name used in the _query parameter when the
     * query is called.
     */
    name?: string;
}
export interface CapabilityStatementResource {
    /**
     * Extensions for conditionalCreate
     */
    _conditionalCreate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for conditionalDelete
     */
    _conditionalDelete?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for conditionalRead
     */
    _conditionalRead?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for conditionalUpdate
     */
    _conditionalUpdate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for readHistory
     */
    _readHistory?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for referencePolicy
     */
    _referencePolicy?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for searchInclude
     */
    _searchInclude?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for searchRevInclude
     */
    _searchRevInclude?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for updateCreate
     */
    _updateCreate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for versioning
     */
    _versioning?: any[] | boolean | Element | number | number | null | string;
    /**
     * A flag that indicates that the server supports conditional create.
     */
    conditionalCreate?: boolean;
    /**
     * A code that indicates how the server supports conditional delete.
     */
    conditionalDelete?: ConditionalDelete;
    /**
     * A code that indicates how the server supports conditional read.
     */
    conditionalRead?: ConditionalRead;
    /**
     * A flag that indicates that the server supports conditional update.
     */
    conditionalUpdate?: boolean;
    /**
     * Additional information about the resource type used by the system.
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
     * Identifies a restful operation supported by the solution.
     */
    interaction?: Array<any[] | boolean | CapabilityStatementInteraction | number | number | null | string>;
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
     * Definition of an operation or a named query together with its parameters and their
     * meaning and type. Consult the definition of the operation for details about how to invoke
     * the operation, and the parameters.
     */
    operation?: Array<any[] | boolean | CapabilityStatementOperation | number | number | null | string>;
    /**
     * A specification of the profile that describes the solution's overall support for the
     * resource, including any constraints on cardinality, bindings, lengths or other
     * limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).
     */
    profile?: string;
    /**
     * A flag for whether the server is able to return past versions as part of the vRead
     * operation.
     */
    readHistory?: boolean;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: ReferencePolicy[];
    /**
     * A list of _include values supported by the server.
     */
    searchInclude?: string[];
    /**
     * Search parameters for implementations to support and/or make use of - either references
     * to ones defined in the specification, or additional ones defined for/by the
     * implementation.
     */
    searchParam?: Array<any[] | boolean | CapabilityStatementSearchParam | number | number | null | string>;
    /**
     * A list of _revinclude (reverse include) values supported by the server.
     */
    searchRevInclude?: string[];
    /**
     * A list of profiles that represent different use cases supported by the system. For a
     * server, "supported by the system" means the system hosts/produces a set of resources that
     * are conformant to a particular profile, and allows clients that use its services to
     * search using this profile and to find appropriate data. For a client, it means the system
     * will search by this profile and process data according to the guidance implicit in the
     * profile. See further discussion in [Using Profiles](profiling.html#profile-uses).
     */
    supportedProfile?: string[];
    /**
     * A type of resource exposed via the restful interface.
     */
    type?: string;
    /**
     * A flag to indicate that the server allows or needs to allow the client to create new
     * identities on the server (that is, the client PUTs to a location where there is no
     * existing resource). Allowing this operation means that the server allows the client to
     * create new identities on the server.
     */
    updateCreate?: boolean;
    /**
     * This field is set to no-version to specify that the system does not support (server) or
     * use (client) versioning for this resource type. If this has some other value, the server
     * must at least correctly track and populate the versionId meta-property on resources. If
     * the value is 'versioned-update', then the server supports all the versioning features,
     * including using e-tags for version integrity in the API.
     */
    versioning?: Versioning;
}
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare enum ConditionalDelete {
    Multiple = "multiple",
    NotSupported = "not-supported",
    Single = "single"
}
/**
 * A code that indicates how the server supports conditional read.
 */
export declare enum ConditionalRead {
    FullSupport = "full-support",
    ModifiedSince = "modified-since",
    NotMatch = "not-match",
    NotSupported = "not-supported"
}
export interface CapabilityStatementInteraction {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code?: CapabilityStatementInteractionCode;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical
     * delete' or 'updates are only allowed with version id' or 'creates permitted from
     * pre-authorized certificates only'.
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
}
/**
 * Coded identifier of the operation, supported by the system resource.
 */
export declare enum CapabilityStatementInteractionCode {
    Create = "create",
    Delete = "delete",
    HistoryInstance = "history-instance",
    HistoryType = "history-type",
    Patch = "patch",
    Read = "read",
    SearchType = "search-type",
    Update = "update",
    Vread = "vread"
}
export declare enum ReferencePolicy {
    Enforced = "enforced",
    Literal = "literal",
    Local = "local",
    Logical = "logical",
    Resolves = "resolves"
}
export interface CapabilityStatementSearchParam {
    /**
     * Extensions for documentation
     */
    _documentation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * An absolute URI that is a formal reference to where this parameter was first defined, so
     * that a client can be confident of the meaning of the search parameter (a reference to
     * [[[SearchParameter.url]]]). This element SHALL be populated if the search parameter
     * refers to a SearchParameter defined by the FHIR core specification or externally defined
     * IGs.
     */
    definition?: string;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is
     * used.  For example, text matching algorithms.
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
     * The name of the search parameter used in the interface.
     */
    name?: string;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type?: CapabilityStatementSearchParamType;
}
/**
 * The type of value a search parameter refers to, and how the content is interpreted.
 */
export declare enum CapabilityStatementSearchParamType {
    Composite = "composite",
    Date = "date",
    Number = "number",
    Quantity = "quantity",
    Reference = "reference",
    Special = "special",
    String = "string",
    Token = "token",
    URI = "uri"
}
/**
 * This field is set to no-version to specify that the system does not support (server) or
 * use (client) versioning for this resource type. If this has some other value, the server
 * must at least correctly track and populate the versionId meta-property on resources. If
 * the value is 'versioned-update', then the server supports all the versioning features,
 * including using e-tags for version integrity in the API.
 */
export declare enum Versioning {
    NoVersion = "no-version",
    Versioned = "versioned",
    VersionedUpdate = "versioned-update"
}
export interface CapabilityStatementSecurity {
    /**
     * Extensions for cors
     */
    _cors?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Server adds CORS headers when responding to requests - this enables Javascript
     * applications to use the server.
     */
    cors?: boolean;
    /**
     * General description of how security works.
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
     * Types of security services that are supported/required by the system.
     */
    service?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
}
export interface CapabilityStatementSoftware {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for releaseDate
     */
    _releaseDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
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
     * Name the software is known by.
     */
    name?: string;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: string;
    /**
     * The version identifier for the software covered by this statement.
     */
    version?: string;
}
/**
 * The status of this capability statement. Enables tracking the life-cycle of the content.
 */
export declare enum FhirCapabilityStatementStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
