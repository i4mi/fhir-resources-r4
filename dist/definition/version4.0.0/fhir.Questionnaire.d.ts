import { Element, Coding, ContactDetail, Period, Extension, Identifier, CodeableConcept, Meta, Narrative, UsageContext, Reference, Quantity, Attachment } from "./fhir._";
export interface Questionnaire {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for subjectType
     */
    _subjectType?: Array<any[] | boolean | Element | number | number | null | string>;
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
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * An identifier for this question or group of questions in a particular terminology such as
     * LOINC.
     */
    code?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Questionnaire | number | null | string>;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the
     * questionnaire.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the questionnaire was published. The date must
     * change when the business version changes and it must change if the status code changes.
     * In addition, it should change when the substantive content of the questionnaire changes.
     */
    date?: string;
    /**
     * The URL of a Questionnaire that this Questionnaire is based on.
     */
    derivedFrom?: string[];
    /**
     * A free text natural language description of the questionnaire from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * The period during which the questionnaire content was or is planned to be in active use.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * A Boolean value to indicate that this questionnaire is authored for testing purposes (or
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
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this questionnaire when it is represented in
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
     * A particular question, question grouping or display text that is part of the
     * questionnaire.
     */
    item?: Array<any[] | boolean | QuestionnaireItem | number | number | null | string>;
    /**
     * A legal or geographic region in which the questionnaire is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * A natural language name identifying the questionnaire. This name should be usable as an
     * identifier for the module by machine processing applications such as code generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the questionnaire.
     */
    publisher?: string;
    /**
     * Explanation of why this questionnaire is needed and why it has been designed as it has.
     */
    purpose?: string;
    /**
     * This is a Questionnaire resource
     */
    resourceType: any;
    /**
     * The status of this questionnaire. Enables tracking the life-cycle of the content.
     */
    status?: FhirQ1Status;
    /**
     * The types of subjects that can be the subject of responses created for the questionnaire.
     */
    subjectType?: string[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the questionnaire.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this questionnaire when it is referenced in a
     * specification, model, design or an instance; also called its canonical identifier. This
     * SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this questionnaire is (or will be) published. This URL can be
     * the target of a canonical reference. It SHALL remain the same when the questionnaire is
     * stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate questionnaire instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the questionnaire when it is
     * referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the questionnaire author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}
export interface QuestionnaireItem {
    /**
     * Extensions for definition
     */
    _definition?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for enableBehavior
     */
    _enableBehavior?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for linkId
     */
    _linkId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maxLength
     */
    _maxLength?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for prefix
     */
    _prefix?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for readOnly
     */
    _readOnly?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for repeats
     */
    _repeats?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for required
     */
    _required?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * One of the permitted answers for a "choice" or "open-choice" question.
     */
    answerOption?: Array<any[] | boolean | QuestionnaireAnswerOption | number | number | null | string>;
    /**
     * A reference to a value set containing a list of codes representing permitted answers for
     * a "choice" or "open-choice" question.
     */
    answerValueSet?: string;
    /**
     * A terminology code that corresponds to this group or question (e.g. a code from LOINC,
     * which defines many questions and answers).
     */
    code?: Array<any[] | boolean | Coding | number | number | null | string>;
    /**
     * This element is a URI that refers to an [[[ElementDefinition]]] that provides information
     * about this item, including information that might otherwise be included in the instance
     * of the Questionnaire resource. A detailed description of the construction of the URI is
     * shown in Comments, below. If this element is present then the following element values
     * MAY be derived from the Element Definition if the corresponding elements of this
     * Questionnaire resource instance have no value:
     *
     * * code (ElementDefinition.code)
     * * type (ElementDefinition.type)
     * * required (ElementDefinition.min)
     * * repeats (ElementDefinition.max)
     * * maxLength (ElementDefinition.maxLength)
     * * answerValueSet (ElementDefinition.binding)
     * * options (ElementDefinition.binding).
     */
    definition?: string;
    /**
     * Controls how multiple enableWhen values are interpreted -  whether all or any must be
     * true.
     */
    enableBehavior?: EnableBehavior;
    /**
     * A constraint indicating that this item should only be enabled (displayed/allow answers to
     * be captured) when the specified condition is true.
     */
    enableWhen?: Array<any[] | boolean | QuestionnaireEnableWhen | number | number | null | string>;
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
     * One or more values that should be pre-populated in the answer when initially rendering
     * the questionnaire for user input.
     */
    initial?: Array<any[] | boolean | QuestionnaireInitial | number | number | null | string>;
    /**
     * Text, questions and other groups to be nested beneath a question or group.
     */
    item?: Array<any[] | boolean | QuestionnaireItem | number | number | null | string>;
    /**
     * An identifier that is unique within the Questionnaire allowing linkage to the equivalent
     * item in a QuestionnaireResponse resource.
     */
    linkId?: string;
    /**
     * The maximum number of characters that are permitted in the answer to be considered a
     * "valid" QuestionnaireResponse.
     */
    maxLength?: number;
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
     * A short label for a particular group, question or set of display text within the
     * questionnaire used for reference by the individual completing the questionnaire.
     */
    prefix?: string;
    /**
     * An indication, when true, that the value cannot be changed by a human respondent to the
     * Questionnaire.
     */
    readOnly?: boolean;
    /**
     * An indication, if true, that the item may occur multiple times in the response,
     * collecting multiple answers for questions or multiple sets of answers for groups.
     */
    repeats?: boolean;
    /**
     * An indication, if true, that the item must be present in a "completed"
     * QuestionnaireResponse.  If false, the item may be skipped when answering the
     * questionnaire.
     */
    required?: boolean;
    /**
     * The name of a section, the text of a question or text content for a display item.
     */
    text?: string;
    /**
     * The type of questionnaire item this is - whether text for display, a grouping of other
     * items or a particular type of data to be captured (string, integer, coded choice, etc.).
     */
    type?: QuestionnaireItemType;
}
export interface QuestionnaireAnswerOption {
    /**
     * Extensions for initialSelected
     */
    _initialSelected?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDate
     */
    _valueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
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
     * Indicates whether the answer value is selected when the list of possible answers is
     * initially shown.
     */
    initialSelected?: boolean;
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
     * A potential answer that's allowed as the answer to this question.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * A potential answer that's allowed as the answer to this question.
     */
    valueDate?: string;
    /**
     * A potential answer that's allowed as the answer to this question.
     */
    valueInteger?: number;
    /**
     * A potential answer that's allowed as the answer to this question.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A potential answer that's allowed as the answer to this question.
     */
    valueString?: string;
    /**
     * A potential answer that's allowed as the answer to this question.
     */
    valueTime?: string;
}
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be
 * true.
 */
export declare enum EnableBehavior {
    All = "all",
    Any = "any"
}
export interface QuestionnaireEnableWhen {
    /**
     * Extensions for answerBoolean
     */
    _answerBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for answerDate
     */
    _answerDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for answerDateTime
     */
    _answerDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for answerDecimal
     */
    _answerDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for answerInteger
     */
    _answerInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for answerString
     */
    _answerString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for answerTime
     */
    _answerTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for operator
     */
    _operator?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for question
     */
    _question?: any[] | boolean | Element | number | number | null | string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerBoolean?: boolean;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerDate?: string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerDateTime?: string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerDecimal?: number;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerInteger?: number;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerString?: string;
    /**
     * A value that the referenced question is tested using the specified operator in order for
     * the item to be enabled.
     */
    answerTime?: string;
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
     * Specifies the criteria by which the question is enabled.
     */
    operator?: Operator;
    /**
     * The linkId for the question whose answer (or lack of answer) governs whether this item is
     * enabled.
     */
    question?: string;
}
/**
 * Specifies the criteria by which the question is enabled.
 */
export declare enum Operator {
    Empty = "=",
    Exists = "exists",
    Fluffy = "<",
    Operator = "!=",
    Purple = ">",
    Sticky = "<=",
    Tentacled = ">="
}
export interface QuestionnaireInitial {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUri
     */
    _valueUri?: any[] | boolean | Element | number | number | null | string;
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
     * The actual value to for an initial answer.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * The actual value to for an initial answer.
     */
    valueBoolean?: boolean;
    /**
     * The actual value to for an initial answer.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * The actual value to for an initial answer.
     */
    valueDate?: string;
    /**
     * The actual value to for an initial answer.
     */
    valueDateTime?: string;
    /**
     * The actual value to for an initial answer.
     */
    valueDecimal?: number;
    /**
     * The actual value to for an initial answer.
     */
    valueInteger?: number;
    /**
     * The actual value to for an initial answer.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The actual value to for an initial answer.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The actual value to for an initial answer.
     */
    valueString?: string;
    /**
     * The actual value to for an initial answer.
     */
    valueTime?: string;
    /**
     * The actual value to for an initial answer.
     */
    valueUri?: string;
}
/**
 * The type of questionnaire item this is - whether text for display, a grouping of other
 * items or a particular type of data to be captured (string, integer, coded choice, etc.).
 */
export declare enum QuestionnaireItemType {
    Attachment = "attachment",
    Boolean = "boolean",
    Choice = "choice",
    Date = "date",
    DateTime = "dateTime",
    Decimal = "decimal",
    Display = "display",
    Group = "group",
    Integer = "integer",
    OpenChoice = "open-choice",
    Quantity = "quantity",
    Reference = "reference",
    String = "string",
    Text = "text",
    Time = "time",
    URL = "url"
}
/**
 * The status of this questionnaire. Enables tracking the life-cycle of the content.
 */
export declare enum FhirQ1Status {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
