import { Element,
         Reference, 
         Extension,
         Identifier,
         Meta,
         Narrative,
         Attachment,
         Coding,
         Quantity} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirQ2 } from "./file";
//
//   const fhirQ2 = Convert.toFhirQ2(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface QuestionnaireResponse {
    /**
     * Extensions for authored
     */
    _authored?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Person who received the answers to the questions in the QuestionnaireResponse and
     * recorded them in the system.
     */
    author?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The date and/or time that this set of answers were last changed.
     */
    authored?: string;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this
     * QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a
     * decision support recommendation to assess for post-partum depression.
     */
    basedOn?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | QuestionnaireResponse | number | null | string>;
    /**
     * The Encounter during which this questionnaire response was created or to which the
     * creation of this record is tightly associated.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
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
     * A business identifier assigned to a particular completed (or partially completed)
     * questionnaire.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A group or question item from the original questionnaire for which answers are provided.
     */
    item?: Array<any[] | boolean | QuestionnaireResponseItem | number | number | null | string>;
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
     * A procedure or observation that this questionnaire was performed as part of the execution
     * of.  For example, the surgery a checklist was executed as part of.
     */
    partOf?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The Questionnaire that defines and organizes the questions for which answers are being
     * provided.
     */
    questionnaire?: string;
    /**
     * This is a QuestionnaireResponse resource
     */
    resourceType: any;
    /**
     * The person who answered the questions about the subject.
     */
    source?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The position of the questionnaire response within its overall lifecycle.
     */
    status?: FhirQ2Status;
    /**
     * The subject of the questionnaire response.  This could be a patient, organization,
     * practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily
     * the source of information.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface QuestionnaireResponseAnswer {
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
     * Nested groups and/or questions found within this particular answer.
     */
    item?: Array<any[] | boolean | QuestionnaireResponseItem | number | number | null | string>;
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
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueBoolean?: boolean;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
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
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The answer (or one of the answers) provided by the respondent to the question.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
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

export interface QuestionnaireResponseItem {
    /**
     * Extensions for definition
     */
    _definition?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for linkId
     */
    _linkId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for text
     */
    _text?: any[] | boolean | Element | number | number | null | string;
    /**
     * The respondent's answer(s) to the question.
     */
    answer?: Array<any[] | boolean | QuestionnaireResponseAnswer | number | number | null | string>;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Questions or sub-groups nested beneath a question or group.
     */
    item?: Array<any[] | boolean | QuestionnaireResponseItem | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Text that is displayed above the contents of the group or as the text of the question
     * being answered.
     */
    text?: string;
}

/**
 * The position of the questionnaire response within its overall lifecycle.
 */
export enum FhirQ2Status {
    Amended = "amended",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    InProgress = "in-progress",
    Stopped = "stopped",
}