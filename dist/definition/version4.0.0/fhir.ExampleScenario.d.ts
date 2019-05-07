import { Element, ContactDetail, Extension, Identifier, CodeableConcept, Meta, Narrative, UsageContext } from "./fhir._";
export interface ExampleScenario {
    /**
     * Extensions for copyright
     */
    _copyright?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
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
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * Actor participating in the resource.
     */
    actor?: ExampleScenarioActor[];
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ExampleScenario[];
    /**
     * A copyright statement relating to the example scenario and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the example
     * scenario.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the example scenario was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the example scenario
     * changes. (e.g. the 'content logical definition').
     */
    date?: string;
    /**
     * A Boolean value to indicate that this example scenario is authored for testing purposes
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
     * A formal identifier that is used to identify this example scenario when it is represented
     * in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: ExampleScenarioInstance[];
    /**
     * A legal or geographic region in which the example scenario is intended to be used.
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
     * A natural language name identifying the example scenario. This name should be usable as
     * an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * Each major process - a group of operations.
     */
    process?: ExampleScenarioProcess[];
    /**
     * The name of the organization or individual that published the example scenario.
     */
    publisher?: string;
    /**
     * What the example scenario resource is created for. This should not be used to show the
     * business purpose of the scenario itself, but the purpose of documenting a scenario.
     */
    purpose?: string;
    /**
     * This is a ExampleScenario resource
     */
    resourceType?: any;
    /**
     * The status of this example scenario. Enables tracking the life-cycle of the content.
     */
    status?: ExampleScenarioStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * An absolute URI that is used to identify this example scenario when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this example scenario is (or will be) published. This URL can
     * be the target of a canonical reference. It SHALL remain the same when the example
     * scenario is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate example scenario instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the example scenario when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the example scenario author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
    /**
     * Another nested workflow.
     */
    workflow?: string[];
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenarioActor {
    /**
     * Extensions for actorId
     */
    _actorId?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * ID or acronym of actor.
     */
    actorId?: string;
    /**
     * The description of the actor.
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
     * The name of the actor as shown in the page.
     */
    name?: string;
    /**
     * The type of actor - person or system.
     */
    type?: ExampleScenarioActorType;
}
/**
 * The type of actor - person or system.
 */
export declare enum ExampleScenarioActorType {
    Entity = "entity",
    Person = "person"
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenarioInstance {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for resourceId
     */
    _resourceId?: Element;
    /**
     * Extensions for resourceType
     */
    _resourceType?: Element;
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: ExampleScenarioContainedInstance[];
    /**
     * Human-friendly description of the resource instance.
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
     * A short name for the resource instance.
     */
    name?: string;
    /**
     * The id of the resource for referencing.
     */
    resourceId?: string;
    /**
     * The type of the resource.
     */
    resourceType?: string;
    /**
     * A specific version of the resource.
     */
    version?: ExampleScenarioVersion[];
}
/**
 * Example of workflow instance.
 *
 * Each resource instance used by the initiator.
 *
 * Each resource instance used by the responder.
 */
export interface ExampleScenarioContainedInstance {
    /**
     * Extensions for resourceId
     */
    _resourceId?: Element;
    /**
     * Extensions for versionId
     */
    _versionId?: Element;
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
     * Each resource contained in the instance.
     */
    resourceId?: string;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string;
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenarioVersion {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for versionId
     */
    _versionId?: Element;
    /**
     * The description of the resource version.
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
     * The identifier of a specific version of a resource.
     */
    versionId?: string;
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenarioAlternative {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * A human-readable description of the alternative explaining when the alternative should
     * occur rather than the base step.
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
     * What happens in each alternative option.
     */
    step?: ExampleScenarioStep[];
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which
     * the alternative should be invoked.
     */
    title?: string;
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenarioStep {
    /**
     * Extensions for pause
     */
    _pause?: Element;
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base
     * step in exceptional/atypical circumstances.
     */
    alternative?: ExampleScenarioAlternative[];
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
     * Each interaction or action.
     */
    operation?: ExampleScenarioOperation;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean;
    /**
     * Nested process.
     */
    process?: ExampleScenarioProcess[];
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenarioProcess {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for postConditions
     */
    _postConditions?: Element;
    /**
     * Extensions for preConditions
     */
    _preConditions?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * A longer description of the group of operations.
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
     * Description of final status after the process ends.
     */
    postConditions?: string;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string;
    /**
     * Each step of the process.
     */
    step?: ExampleScenarioStep[];
    /**
     * The diagram title of the group of operations.
     */
    title?: string;
}
/**
 * Each interaction or action.
 *
 * Example of workflow instance.
 */
export interface ExampleScenarioOperation {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for initiator
     */
    _initiator?: Element;
    /**
     * Extensions for initiatorActive
     */
    _initiatorActive?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for number
     */
    _number?: Element;
    /**
     * Extensions for receiver
     */
    _receiver?: Element;
    /**
     * Extensions for receiverActive
     */
    _receiverActive?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
    /**
     * A comment to be inserted in the diagram.
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
     * Who starts the transaction.
     */
    initiator?: string;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean;
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
     * The human-friendly name of the interaction.
     */
    name?: string;
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number?: string;
    /**
     * Who receives the transaction.
     */
    receiver?: string;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean;
    /**
     * Each resource instance used by the initiator.
     */
    request?: ExampleScenarioContainedInstance;
    /**
     * Each resource instance used by the responder.
     */
    response?: ExampleScenarioContainedInstance;
    /**
     * The type of operation - CRUD.
     */
    type?: string;
}
/**
 * The status of this example scenario. Enables tracking the life-cycle of the content.
 */
export declare enum ExampleScenarioStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
