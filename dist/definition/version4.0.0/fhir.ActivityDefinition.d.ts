import { Element, ContactDetail, CodeableConcept, Dosage, Period, Extension, Reference, Meta, Identifier, Quantity, RelatedArtifact, Narrative, Age, Duration, Range, Timing, UsageContext, Expression } from './fhir._';
export interface ActivityDefinition {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: Element;
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
     * Extensions for doNotPerform
     */
    _doNotPerform?: Element;
    /**
     * Extensions for experimental
     */
    _experimental?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for intent
     */
    _intent?: Element;
    /**
     * Extensions for kind
     */
    _kind?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for priority
     */
    _priority?: Element;
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
     * Extensions for subtitle
     */
    _subtitle?: Element;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for usage
     */
    _usage?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
    /**
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the
     * content.
     */
    author?: ContactDetail[];
    /**
     * Indicates the sites on the subject's body where the procedure should be performed (I.e.
     * the target sites).
     */
    bodySite?: CodeableConcept[];
    /**
     * Detailed description of the type of activity; e.g. What lab test, what procedure, what
     * kind of encounter.
     */
    code?: CodeableConcept;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ContactDetail[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: ActivityDefinition[];
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the activity
     * definition.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the activity definition was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the activity definition
     * changes.
     */
    date?: string;
    /**
     * A free text natural language description of the activity definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * Set this to true if the definition is to indicate that a particular activity should NOT
     * be performed. If true, this element should be interpreted to reinforce a negative coding.
     * For example NPO as a code with a doNotPerform of true would still indicate to NOT perform
     * the action.
     */
    doNotPerform?: boolean;
    /**
     * Provides detailed dosage instructions in the same way that they are described for
     * MedicationRequest resources.
     */
    dosage?: Dosage[];
    /**
     * Dynamic values that will be evaluated to produce values for elements of the resulting
     * resource. For example, if the dosage of a medication must be computed based on the
     * patient's weight, a dynamic value would be used to specify an expression that calculated
     * the weight, and the path on the request resource that would contain the result.
     */
    dynamicValue?: ActivityDefinitionDynamicValue[];
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: ContactDetail[];
    /**
     * The period during which the activity definition content was or is planned to be in active
     * use.
     */
    effectivePeriod?: Period;
    /**
     * An individual or organization responsible for officially endorsing the content for use in
     * some setting.
     */
    endorser?: ContactDetail[];
    /**
     * A Boolean value to indicate that this activity definition is authored for testing
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
     * A formal identifier that is used to identify this activity definition when it is
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
     * Indicates the level of authority/intentionality associated with the activity and where
     * the request should fit into the workflow chain.
     */
    intent?: string;
    /**
     * A legal or geographic region in which the activity definition is intended to be used.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * A description of the kind of resource the activity definition is representing. For
     * example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but
     * not always, this is a Request resource.
     */
    kind?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The date on which the resource content was last reviewed. Review happens periodically
     * after approval but does not change the original approval date.
     */
    lastReviewDate?: string;
    /**
     * A reference to a Library resource containing any formal logic used by the activity
     * definition.
     */
    library?: string[];
    /**
     * Identifies the facility where the activity will occur; e.g. home, hospital, specific
     * clinic, etc.
     */
    location?: Reference;
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
     * A natural language name identifying the activity definition. This name should be usable
     * as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or
     * surface area.
     */
    observationRequirement?: Reference[];
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: Reference[];
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: ActivityDefinitionParticipant[];
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: string;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: CodeableConcept;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: Reference;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: string;
    /**
     * The name of the organization or individual that published the activity definition.
     */
    publisher?: string;
    /**
     * Explanation of why this activity definition is needed and why it has been designed as it
     * has.
     */
    purpose?: string;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: Quantity;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic
     * references.
     */
    relatedArtifact?: RelatedArtifact[];
    /**
     * This is a ActivityDefinition resource
     */
    resourceType?: any;
    /**
     * An individual or organization primarily responsible for review of some aspect of the
     * content.
     */
    reviewer?: ContactDetail[];
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens
     * for a lab test.
     */
    specimenRequirement?: Reference[];
    /**
     * The status of this activity definition. Enables tracking the life-cycle of the content.
     */
    status?: ActivityDefinitionStatus;
    /**
     * A code or group definition that describes the intended subject of the activity being
     * defined.
     */
    subjectCodeableConcept?: CodeableConcept;
    /**
     * A code or group definition that describes the intended subject of the activity being
     * defined.
     */
    subjectReference?: Reference;
    /**
     * An explanatory or alternate title for the activity definition giving additional
     * information about its content.
     */
    subtitle?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingAge?: Age;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDuration?: Duration;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingPeriod?: Period;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: Range;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: Timing;
    /**
     * A short, descriptive, user-friendly title for the activity definition.
     */
    title?: string;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level
     * categorization of the activity that can be useful for filtering and searching.
     */
    topic?: CodeableConcept[];
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to
     * produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: string;
    /**
     * An absolute URI that is used to identify this activity definition when it is referenced
     * in a specification, model, design or an instance; also called its canonical identifier.
     * This SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this activity definition is (or will be) published. This URL
     * can be the target of a canonical reference. It SHALL remain the same when the activity
     * definition is stored on different servers.
     */
    url?: string;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate activity definition instances.
     */
    useContext?: UsageContext[];
    /**
     * The identifier that is used to identify this version of the activity definition when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the activity definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     * To provide a version consistent with the Decision Support Service specification, use the
     * format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge
     * assets, refer to the Decision Support Service specification. Note that a version is
     * required for non-experimental active assets.
     */
    version?: string;
}
/**
 * This resource allows for the definition of some activity to be performed, independent of
 * a particular patient, practitioner, or other performance context.
 */
export interface ActivityDefinitionDynamicValue {
    /**
     * Extensions for path
     */
    _path?: Element;
    /**
     * An expression specifying the value of the customized element.
     */
    expression?: Expression;
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
     * The path to the element to be customized. This is the path on the resource that will hold
     * the result of the calculation defined by the expression. The specified path SHALL be a
     * FHIRPath resolveable on the specified target type of the ActivityDefinition, and SHALL
     * consist only of identifiers, constant indexers, and a restricted subset of functions. The
     * path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers
     * ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath
     * Profile](fhirpath.html#simple) for full details).
     */
    path?: string;
}
/**
 * This resource allows for the definition of some activity to be performed, independent of
 * a particular patient, practitioner, or other performance context.
 */
export interface ActivityDefinitionParticipant {
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
     * The role the participant should play in performing the described action.
     */
    role?: CodeableConcept;
    /**
     * The type of participant in the action.
     */
    type?: string;
}
/**
 * The status of this activity definition. Enables tracking the life-cycle of the content.
 */
export declare enum ActivityDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
