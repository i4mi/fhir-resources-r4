import {
    Element,
    Reference,
    Extension,
    Identifier,
    Meta,
    Narrative,
    Attachment,
    Coding,
    Quantity
} from "./fhir._";

export interface QuestionnaireResponse {
    /**
     * Extensions for authored
     */
    _authored?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Person who received the answers to the questions in the QuestionnaireResponse and
     * recorded them in the system.
     */
    author?: Reference;
    /**
     * The date and/or time that this set of answers were last changed.
     */
    authored?: string;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this
     * QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a
     * decision support recommendation to assess for post-partum depression.
     */
    basedOn?: Reference[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: QuestionnaireResponse[];
    /**
     * The Encounter during which this questionnaire response was created or to which the
     * creation of this record is tightly associated.
     */
    encounter?: Reference;
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
     * A business identifier assigned to a particular completed (or partially completed)
     * questionnaire.
     */
    identifier?: Identifier;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A group or question item from the original questionnaire for which answers are provided.
     */
    item?: QuestionnaireResponseItem[];
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
     * A procedure or observation that this questionnaire was performed as part of the execution
     * of.  For example, the surgery a checklist was executed as part of.
     */
    partOf?: Reference[];
    /**
     * The Questionnaire that defines and organizes the questions for which answers are being
     * provided.
     */
    questionnaire?: string;
    /**
     * This is a QuestionnaireResponse resource
     */
    resourceType?: any;
    /**
     * The person who answered the questions about the subject.
     */
    source?: Reference;
    /**
     * The position of the questionnaire response within its overall lifecycle.
     */
    status?: QuestionnaireResponseStatus;
    /**
     * The subject of the questionnaire response.  This could be a patient, organization,
     * practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily
     * the source of information.
     */
    subject?: Reference;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
}

/**
 * A structured set of questions and their answers. The questions are ordered and grouped
 * into coherent subsets, corresponding to the structure of the grouping of the
 * questionnaire being responded to.
 */
export interface QuestionnaireResponseAnswer {
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: Element;
    /**
     * Extensions for valueDate
     */
    _valueDate?: Element;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: Element;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: Element;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
    /**
     * Extensions for valueTime
     */
    _valueTime?: Element;
    /**
     * Extensions for valueUri
     */
    _valueUri?: Element;
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
     * Nested groups and/or questions found within this particular answer.
     */
    item?: QuestionnaireResponseItem[];
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
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueAttachment?: Attachment;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueBoolean?: boolean;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueCoding?: Coding;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueDate?: string;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueDateTime?: string;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueDecimal?: number;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueInteger?: number;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueQuantity?: Quantity;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueReference?: Reference;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueString?: string;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueTime?: string;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueUri?: string;
}

/**
 * A structured set of questions and their answers. The questions are ordered and grouped
 * into coherent subsets, corresponding to the structure of the grouping of the
 * questionnaire being responded to.
 */
export interface QuestionnaireResponseItem {
    /**
     * Extensions for definition
     */
    _definition?: Element;
    /**
     * Extensions for linkId
     */
    _linkId?: Element;
    /**
     * Extensions for text
     */
    _text?: Element;
    /**
     * The respondent's answer(s) to the question.
     */
    answer?: QuestionnaireResponseAnswer[];
    /**
     * A reference to an [[[ElementDefinition]]] that provides the details for the item.
     */
    definition?: string;
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
     * Questions or sub-groups nested beneath a question or group.
     */
    item?: QuestionnaireResponseItem[];
    /**
     * The item from the Questionnaire that corresponds to this item in the
     * QuestionnaireResponse resource.
     */
    linkId?: string;
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
     * Text that is displayed above the contents of the group or as the text of the question
     * being answered.
     */
    text?: string;
}

/**
 * The position of the questionnaire response within its overall lifecycle.
 */
export enum QuestionnaireResponseStatus {
    Amended = "amended",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    InProgress = "in-progress",
    Stopped = "stopped",
}