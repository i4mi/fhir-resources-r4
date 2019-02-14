import { Element,
         Reference, 
         CodeableConcept,
         Extension,
         Identifier,
         Meta,
         Narrative,
         Attachment,
         Coding,
         Period} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirDocumentReference } from "./file";
//
//   const fhirDocumentReference = Convert.toFhirDocumentReference(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface DocumentReference {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for docStatus
     */
    _docStatus?: any[] | boolean | Element | number | number | null | string;
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
     * Which person or organization authenticates that this document is valid.
     */
    authenticator?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies who is responsible for adding the information to the document.
     */
    author?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A categorization for the type of document referenced - helps for indexing and searching.
     * This may be implied by or derived from the code specified in the DocumentReference.type.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | DocumentReference | number | null | string>;
    /**
     * The document and format referenced. There may be multiple content element repetitions,
     * each with a different format.
     */
    content: Array<any[] | boolean | DocumentReferenceContent | number | number | null | string>;
    /**
     * The clinical context in which the document was prepared.
     */
    context?: any[] | boolean | DocumentReferenceContext | number | number | null | string;
    /**
     * Identifies the organization or group who is responsible for ongoing maintenance of and
     * access to the document.
     */
    custodian?: any[] | boolean | Reference | number | number | null | string;
    /**
     * When the document reference was created.
     */
    date?: string;
    /**
     * Human-readable description of the source document.
     */
    description?: string;
    /**
     * The status of the underlying document.
     */
    docStatus?: string;
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
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Document identifier as assigned by the source of the document. This identifier is
     * specific to this version of the document. This unique identifier may be used elsewhere to
     * identify this version of the document.
     */
    masterIdentifier?: any[] | boolean | Identifier | number | number | null | string;
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
     * Relationships that this document has with other document references that already exist.
     */
    relatesTo?: Array<any[] | boolean | DocumentReferenceRelatesTo | number | number | null | string>;
    /**
     * This is a DocumentReference resource
     */
    resourceType: any;
    /**
     * A set of Security-Tag codes specifying the level of privacy/security of the Document.
     * Note that DocumentReference.meta.security contains the security labels of the "reference"
     * to the document, while DocumentReference.securityLabel contains a snapshot of the
     * security labels on the document the reference refers to.
     */
    securityLabel?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The status of this document reference.
     */
    status?: FhirDocumentReferenceStatus;
    /**
     * Who or what the document is about. The document can be about a person, (patient or
     * healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as
     * a document about a herd of farm animals, or a set of patients that share a common
     * exposure).
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
    /**
     * Specifies the particular kind of document referenced  (e.g. History and Physical,
     * Discharge Summary, Progress Note). This usually equates to the purpose of making the
     * document referenced.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface DocumentReferenceContent {
    /**
     * The document or URL of the document along with critical metadata to prove content has
     * integrity.
     */
    attachment: any[] | boolean | Attachment | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * An identifier of the document encoding, structure, and template that the document
     * conforms to beyond the base format indicated in the mimeType.
     */
    format?: any[] | boolean | Coding | number | number | null | string;
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

export interface DocumentReferenceContext {
    /**
     * Describes the clinical encounter or type of care that the document content is associated
     * with.
     */
    encounter?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an
     * appendectomy, being documented. In some cases, the event is inherent in the type Code,
     * such as a "History and Physical Report" in which the procedure being documented is
     * necessarily a "History and Physical" act.
     */
    event?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The time period over which the service that is described by the document was provided.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * This property may convey specifics about the practice setting where the content was
     * created, often reflecting the clinical specialty.
     */
    practiceSetting?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Related identifiers or resources associated with the DocumentReference.
     */
    related?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The Patient Information as known when the document was published. May be a reference to a
     * version specific, or contained.
     */
    sourcePatientInfo?: any[] | boolean | Reference | number | number | null | string;
}

export interface DocumentReferenceRelatesTo {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * The type of relationship that this document has with anther document.
     */
    code?: Code;
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
     * The target document of this relationship.
     */
    target: any[] | boolean | Reference | number | number | null | string;
}

/**
 * The type of relationship that this document has with anther document.
 */
export enum Code {
    Appends = "appends",
    Replaces = "replaces",
    Signs = "signs",
    Transforms = "transforms",
}

/**
 * The status of this document reference.
 */
export enum FhirDocumentReferenceStatus {
    Current = "current",
    EnteredInError = "entered-in-error",
    Superseded = "superseded",
}