import {
    Element,
    ContactDetail,
    Extension,
    Identifier,
    CodeableConcept,
    Meta,
    Reference,
    Narrative,
    UsageContext,
    Coding
} from "./fhir._";

export interface TestScript {
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
    contained?: TestScript[];
    /**
     * A copyright statement relating to the test script and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the test script.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the test script was published. The date must change
     * when the business version changes and it must change if the status code changes. In
     * addition, it should change when the substantive content of the test script changes.
     */
    date?: string;
    /**
     * A free text natural language description of the test script from a consumer's perspective.
     */
    description?: string;
    /**
     * An abstract server used in operations within this test script in the destination element.
     */
    destination?: TestScriptDestination[];
    /**
     * A Boolean value to indicate that this test script is authored for testing purposes (or
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
     * Fixture in the test script - by reference (uri). All fixtures are required for the test
     * script to execute.
     */
    fixture?: TestScriptFixture[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this test script when it is represented in
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
     * A legal or geographic region in which the test script is intended to be used.
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
     * The required capability must exist and are assumed to function correctly on the FHIR
     * server being tested.
     */
    metadata?: TestScriptMetadata;
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
     * A natural language name identifying the test script. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * An abstract server used in operations within this test script in the origin element.
     */
    origin?: TestScriptOrigin[];
    /**
     * Reference to the profile to be used for validation.
     */
    profile?: Reference[];
    /**
     * The name of the organization or individual that published the test script.
     */
    publisher?: string;
    /**
     * Explanation of why this test script is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * This is a TestScript resource
     */
    resourceType?: any;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: TestScriptSetup;
    /**
     * The status of this test script. Enables tracking the life-cycle of the content.
     */
    status?: TestScriptStatus;
    /**
     * A series of operations required to clean up after all the tests are executed
     * (successfully or otherwise).
     */
    teardown?: TestScriptTeardown;
    /**
     * A test in this script.
     */
    test?: TestScriptTest[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A short, descriptive, user-friendly title for the test script.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this test script when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this test script is (or will be) published. This URL can be the
     * target of a canonical reference. It SHALL remain the same when the test script is stored
     * on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate test script instances.
     */
    useContext?: UsageContext[];
    /**
     * Variable is set based either on element value in response body or on header field value
     * in the response headers.
     */
    variable?: TestScriptVariable[];
    /**
     * The identifier that is used to identify this version of the test script when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the test script author and is not expected to be globally unique. For example,
     * it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is
     * also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptDestination {
    /**
     * Extensions for index
     */
    _index?: Element;
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
     * Abstract name given to a destination server in this test script.  The name is provided as
     * a number starting at 1.
     */
    index?: number;
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
     * The type of destination profile the test system supports.
     */
    profile?: Coding;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptFixture {
    /**
     * Extensions for autocreate
     */
    _autocreate?: Element;
    /**
     * Extensions for autodelete
     */
    _autodelete?: Element;
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is
     * automatically created on each server being tested during setup, therefore no create
     * operation is required for this fixture in the TestScript.setup section.
     */
    autocreate?: boolean;
    /**
     * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is
     * automatically deleted on each server being tested during teardown, therefore no delete
     * operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete?: boolean;
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
     * Reference to the resource (containing the contents of the resource needed for operations).
     */
    resource?: Reference;
}

/**
 * The required capability must exist and are assumed to function correctly on the FHIR
 * server being tested.
 *
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptMetadata {
    /**
     * Capabilities that must exist and are assumed to function correctly on the FHIR server
     * being tested.
     */
    capability?: TestScriptCapability[];
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
     * A link to the FHIR specification that this test is covering.
     */
    link?: TestScriptLink[];
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
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptCapability {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for destination
     */
    _destination?: Element;
    /**
     * Extensions for link
     */
    _link?: Element[];
    /**
     * Extensions for origin
     */
    _origin?: Element[];
    /**
     * Extensions for required
     */
    _required?: Element;
    /**
     * Extensions for validated
     */
    _validated?: Element;
    /**
     * Minimum capabilities required of server for test script to execute successfully.   If
     * server does not meet at a minimum the referenced capability statement, then all tests in
     * this script are skipped.
     */
    capabilities?: string;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: string;
    /**
     * Which server these requirements apply to.
     */
    destination?: number;
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
     * Links to the FHIR specification that describes this interaction and the resources
     * involved in more detail.
     */
    link?: string[];
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
     * Which origin server these requirements apply to.
     */
    origin?: number[];
    /**
     * Whether or not the test execution will require the given capabilities of the server in
     * order for this test script to execute.
     */
    required?: boolean;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in
     * order for this test script to execute.
     */
    validated?: boolean;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptLink {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Short description of the link.
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
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url?: string;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptOrigin {
    /**
     * Extensions for index
     */
    _index?: Element;
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
     * Abstract name given to an origin server in this test script.  The name is provided as a
     * number starting at 1.
     */
    index?: number;
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
     * The type of origin profile the test system supports.
     */
    profile?: Coding;
}

/**
 * A series of required setup operations before tests are executed.
 *
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptSetup {
    /**
     * Action would contain either an operation or an assertion.
     */
    action?: TestScriptAction[];
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
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptAction {
    /**
     * Evaluates the results of previous operations to determine if the server under test
     * behaves appropriately.
     */
    assert?: TestScriptAssert;
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
     * The operation to perform.
     */
    operation?: TestScriptOperation;
}

/**
 * Evaluates the results of previous operations to determine if the server under test
 * behaves appropriately.
 *
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptAssert {
    /**
     * Extensions for compareToSourceExpression
     */
    _compareToSourceExpression?: Element;
    /**
     * Extensions for compareToSourceId
     */
    _compareToSourceId?: Element;
    /**
     * Extensions for compareToSourcePath
     */
    _compareToSourcePath?: Element;
    /**
     * Extensions for contentType
     */
    _contentType?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for direction
     */
    _direction?: Element;
    /**
     * Extensions for expression
     */
    _expression?: Element;
    /**
     * Extensions for headerField
     */
    _headerField?: Element;
    /**
     * Extensions for label
     */
    _label?: Element;
    /**
     * Extensions for minimumId
     */
    _minimumId?: Element;
    /**
     * Extensions for navigationLinks
     */
    _navigationLinks?: Element;
    /**
     * Extensions for operator
     */
    _operator?: Element;
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for requestMethod
     */
    _requestMethod?: Element;
    /**
     * Extensions for requestURL
     */
    _requestURL?: Element;
    /**
     * Extensions for resource
     */
    _resource?: Element;
    /**
     * Extensions for response
     */
    _response?: Element;
    /**
     * Extensions for responseCode
     */
    _responseCode?: Element;
    /**
     * Extensions for sourceId
     */
    _sourceId?: Element;
    /**
     * Extensions for validateProfileId
     */
    _validateProfileId?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * Extensions for warningOnly
     */
    _warningOnly?: Element;
    /**
     * The FHIRPath expression to evaluate against the source fixture. When compareToSourceId is
     * defined, either compareToSourceExpression or compareToSourcePath must be defined, but not
     * both.
     */
    compareToSourceExpression?: string;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the
     * "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: string;
    /**
     * XPath or JSONPath expression to evaluate against the source fixture. When
     * compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath
     * must be defined, but not both.
     */
    compareToSourcePath?: string;
    /**
     * The mime-type contents to compare against the request or response message 'Content-Type'
     * header.
     */
    contentType?: string;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: string;
    /**
     * The direction to use for the assertion.
     */
    direction?: TestScriptAssertDirection;
    /**
     * The FHIRPath expression to be evaluated against the request or response message contents
     * - HTTP headers and payload.
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
     * The HTTP header field name e.g. 'Location'.
     */
    headerField?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: string;
    /**
     * The ID of a fixture.  Asserts that the response contains at a minimum the fixture
     * specified by minimumId.
     */
    minimumId?: string;
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
     * Whether or not the test execution performs validation on the bundle navigation links.
     */
    navigationLinks?: boolean;
    /**
     * The operator type defines the conditional behavior of the assert. If not defined, the
     * default is equals.
     */
    operator?: Operator;
    /**
     * The XPath or JSONPath expression to be evaluated against the fixture representing the
     * response received from server.
     */
    path?: string;
    /**
     * The request method or HTTP operation code to compare against that used by the client
     * system under test.
     */
    requestMethod?: Method;
    /**
     * The value to use in a comparison against the request URL path string.
     */
    requestURL?: string;
    /**
     * The type of the resource.  See http://build.fhir.org/resourcelist.html.
     */
    resource?: string;
    /**
     * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed
     * | conflict | gone | preconditionFailed | unprocessable.
     */
    response?: Response;
    /**
     * The value of the HTTP response code to be tested.
     */
    responseCode?: string;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */
    sourceId?: string;
    /**
     * The ID of the Profile to validate against.
     */
    validateProfileId?: string;
    /**
     * The value to compare to.
     */
    value?: string;
    /**
     * Whether or not the test execution will produce a warning only on error for this assert.
     */
    warningOnly?: boolean;
}

/**
 * The direction to use for the assertion.
 */
export enum TestScriptAssertDirection {
    Request = "request",
    Response = "response",
}

/**
 * The operator type defines the conditional behavior of the assert. If not defined, the
 * default is equals.
 */
export enum Operator {
    Contains = "contains",
    Empty = "empty",
    Equals = "equals",
    Eval = "eval",
    GreaterThan = "greaterThan",
    In = "in",
    LessThan = "lessThan",
    NotContains = "notContains",
    NotEmpty = "notEmpty",
    NotEquals = "notEquals",
    NotIn = "notIn",
}

/**
 * The request method or HTTP operation code to compare against that used by the client
 * system under test.
 *
 * The HTTP method the test engine MUST use for this operation regardless of any other
 * operation details.
 */
export enum Method {
    Delete = "delete",
    Get = "get",
    Head = "head",
    Options = "options",
    Patch = "patch",
    Post = "post",
    Put = "put",
}

/**
 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed
 * | conflict | gone | preconditionFailed | unprocessable.
 */
export enum Response {
    Bad = "bad",
    Conflict = "conflict",
    Created = "created",
    Forbidden = "forbidden",
    Gone = "gone",
    MethodNotAllowed = "methodNotAllowed",
    NoContent = "noContent",
    NotFound = "notFound",
    NotModified = "notModified",
    Okay = "okay",
    PreconditionFailed = "preconditionFailed",
    Unprocessable = "unprocessable",
}

/**
 * The operation to perform.
 *
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 *
 * An operation would involve a REST request to a server.
 */
export interface TestScriptOperation {
    /**
     * Extensions for accept
     */
    _accept?: Element;
    /**
     * Extensions for contentType
     */
    _contentType?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for destination
     */
    _destination?: Element;
    /**
     * Extensions for encodeRequestUrl
     */
    _encodeRequestUrl?: Element;
    /**
     * Extensions for label
     */
    _label?: Element;
    /**
     * Extensions for method
     */
    _method?: Element;
    /**
     * Extensions for origin
     */
    _origin?: Element;
    /**
     * Extensions for params
     */
    _params?: Element;
    /**
     * Extensions for requestId
     */
    _requestId?: Element;
    /**
     * Extensions for resource
     */
    _resource?: Element;
    /**
     * Extensions for responseId
     */
    _responseId?: Element;
    /**
     * Extensions for sourceId
     */
    _sourceId?: Element;
    /**
     * Extensions for targetId
     */
    _targetId?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * The mime-type to use for RESTful operation in the 'Accept' header.
     */
    accept?: string;
    /**
     * The mime-type to use for RESTful operation in the 'Content-Type' header.
     */
    contentType?: string;
    /**
     * The description would be used by test engines for tracking and reporting purposes.
     */
    description?: string;
    /**
     * The server where the request message is destined for.  Must be one of the server numbers
     * listed in TestScript.destination section.
     */
    destination?: number;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true
     * to match the standard RESTful client behavior. Set to false when communicating with a
     * server that does not support encoded url paths.
     */
    encodeRequestUrl?: boolean;
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
     * The label would be used for tracking/logging purposes by test engines.
     */
    label?: string;
    /**
     * The HTTP method the test engine MUST use for this operation regardless of any other
     * operation details.
     */
    method?: Method;
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
     * The server where the request message originates from.  Must be one of the server numbers
     * listed in TestScript.origin section.
     */
    origin?: number;
    /**
     * Path plus parameters after [type].  Used to set parts of the request URL explicitly.
     */
    params?: string;
    /**
     * Header elements would be used to set HTTP headers.
     */
    requestHeader?: TestScriptRequestHeader[];
    /**
     * The fixture id (maybe new) to map to the request.
     */
    requestId?: string;
    /**
     * The type of the resource.  See http://build.fhir.org/resourcelist.html.
     */
    resource?: string;
    /**
     * The fixture id (maybe new) to map to the response.
     */
    responseId?: string;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: string;
    /**
     * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
     */
    targetId?: string;
    /**
     * Server interaction or operation type.
     */
    type?: Coding;
    /**
     * Complete request URL.
     */
    url?: string;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptRequestHeader {
    /**
     * Extensions for field
     */
    _field?: Element;
    /**
     * Extensions for value
     */
    _value?: Element;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The HTTP header field e.g. "Accept".
     */
    field?: string;
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
     * The value of the header e.g. "application/fhir+xml".
     */
    value?: string;
}

/**
 * The status of this test script. Enables tracking the life-cycle of the content.
 */
export enum TestScriptStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}

/**
 * A series of operations required to clean up after all the tests are executed
 * (successfully or otherwise).
 *
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptTeardown {
    /**
     * The teardown action will only contain an operation.
     */
    action?: TestScriptAction2[];
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
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptAction2 {
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
     * An operation would involve a REST request to a server.
     */
    operation?: TestScriptOperation;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptTest {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Action would contain either an operation or an assertion.
     */
    action?: TestScriptAction1[];
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
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
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptAction1 {
    /**
     * Evaluates the results of previous operations to determine if the server under test
     * behaves appropriately.
     */
    assert?: TestScriptAssert;
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
     * An operation would involve a REST request to a server.
     */
    operation?: TestScriptOperation;
}

/**
 * A structured set of tests against a FHIR server or client implementation to determine
 * compliance against the FHIR specification.
 */
export interface TestScriptVariable {
    /**
     * Extensions for defaultValue
     */
    _defaultValue?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for expression
     */
    _expression?: Element;
    /**
     * Extensions for headerField
     */
    _headerField?: Element;
    /**
     * Extensions for hint
     */
    _hint?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * Extensions for sourceId
     */
    _sourceId?: Element;
    /**
     * A default, hard-coded, or user-defined value for this variable.
     */
    defaultValue?: string;
    /**
     * A free text natural language description of the variable and its purpose.
     */
    description?: string;
    /**
     * The FHIRPath expression to evaluate against the fixture body. When variables are defined,
     * only one of either expression, headerField or path must be specified.
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
     * Will be used to grab the HTTP header field value from the headers that sourceId is
     * pointing to.
     */
    headerField?: string;
    /**
     * Displayable text string with hint help information to the user when entering a default
     * value.
     */
    hint?: string;
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
     * Descriptive name for this variable.
     */
    name?: string;
    /**
     * XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only
     * one of either expression, headerField or path must be specified.
     */
    path?: string;
    /**
     * Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this
     * variable.
     */
    sourceId?: string;
}