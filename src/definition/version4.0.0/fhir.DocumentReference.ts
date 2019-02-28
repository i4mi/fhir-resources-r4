import {
    Element,
    Reference,
    CodeableConcept,
    Extension,
    Identifier,
    Meta,
    Narrative,
    Attachment,
    Coding,
    Period
} from "./fhir._";

export interface DocumentReference {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for docStatus
     */
    _docStatus?: Element;
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
     * Which person or organization authenticates that this document is valid.
     */
    authenticator?: Reference;
    /**
     * Identifies who is responsible for adding the information to the document.
     */
    author?: Reference[];
    /**
     * A categorization for the type of document referenced - helps for indexing and searching.
     * This may be implied by or derived from the code specified in the DocumentReference.type.
     */
    category?: CodeableConcept[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: DocumentReference[];
    /**
     * The document and format referenced. There may be multiple content element repetitions,
     * each with a different format.
     */
    content?: DocumentReferenceContent[];
    /**
     * The clinical context in which the document was prepared.
     */
    context?: DocumentReferenceContext;
    /**
     * Identifies the organization or group who is responsible for ongoing maintenance of and
     * access to the document.
     */
    custodian?: Reference;
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
    extension?: Extension[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: Identifier[];
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
    masterIdentifier?: Identifier;
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
     * Relationships that this document has with other document references that already exist.
     */
    relatesTo?: DocumentReferenceRelatesTo[];
    /**
     * This is a DocumentReference resource
     */
    resourceType?: any;
    /**
     * A set of Security-Tag codes specifying the level of privacy/security of the Document.
     * Note that DocumentReference.meta.security contains the security labels of the "reference"
     * to the document, while DocumentReference.securityLabel contains a snapshot of the
     * security labels on the document the reference refers to.
     */
    securityLabel?: CodeableConcept[];
    /**
     * The status of this document reference.
     */
    status?: DocumentReferenceStatus;
    /**
     * Who or what the document is about. The document can be about a person, (patient or
     * healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as
     * a document about a herd of farm animals, or a set of patients that share a common
     * exposure).
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
    /**
     * Specifies the particular kind of document referenced  (e.g. History and Physical,
     * Discharge Summary, Progress Note). This usually equates to the purpose of making the
     * document referenced.
     */
    type?: CodeableConcept;
}

/**
 * A reference to a document of any kind for any purpose. Provides metadata about the
 * document so that the document can be discovered and managed. The scope of a document is
 * any seralized object with a mime-type, so includes formal patient centric documents
 * (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export interface DocumentReferenceContent {
    /**
     * The document or URL of the document along with critical metadata to prove content has
     * integrity.
     */
    attachment?: Attachment;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * An identifier of the document encoding, structure, and template that the document
     * conforms to beyond the base format indicated in the mimeType.
     */
    format?: Coding;
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
 * The clinical context in which the document was prepared.
 *
 * A reference to a document of any kind for any purpose. Provides metadata about the
 * document so that the document can be discovered and managed. The scope of a document is
 * any seralized object with a mime-type, so includes formal patient centric documents
 * (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export interface DocumentReferenceContext {
    /**
     * Describes the clinical encounter or type of care that the document content is associated
     * with.
     */
    encounter?: Reference[];
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an
     * appendectomy, being documented. In some cases, the event is inherent in the type Code,
     * such as a "History and Physical Report" in which the procedure being documented is
     * necessarily a "History and Physical" act.
     */
    event?: CodeableConcept[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: CodeableConcept;
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
     * The time period over which the service that is described by the document was provided.
     */
    period?: Period;
    /**
     * This property may convey specifics about the practice setting where the content was
     * created, often reflecting the clinical specialty.
     */
    practiceSetting?: CodeableConcept;
    /**
     * Related identifiers or resources associated with the DocumentReference.
     */
    related?: Reference[];
    /**
     * The Patient Information as known when the document was published. May be a reference to a
     * version specific, or contained.
     */
    sourcePatientInfo?: Reference;
}

/**
 * A reference to a document of any kind for any purpose. Provides metadata about the
 * document so that the document can be discovered and managed. The scope of a document is
 * any seralized object with a mime-type, so includes formal patient centric documents
 * (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export interface DocumentReferenceRelatesTo {
    /**
     * Extensions for code
     */
    _code?: Element;
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
     * The target document of this relationship.
     */
    target?: Reference;
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
export enum DocumentReferenceStatus {
    Current = "current",
    EnteredInError = "entered-in-error",
    Superseded = "superseded",
}