import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Narrative, Period } from "./fhir._";
export interface Composition {
    /**
     * Extensions for confidentiality
     */
    _confidentiality?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
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
     * Extensions for title
     */
    _title?: Element;
    /**
     * A participant who has attested to the accuracy of the composition/document.
     */
    attester?: CompositionAttester[];
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who
     * typed it in.
     */
    author?: Reference[];
    /**
     * A categorization for the type of the composition - helps for indexing and searching. This
     * may be implied by or derived from the code specified in the Composition Type.
     */
    category?: CodeableConcept[];
    /**
     * The code specifying the level of confidentiality of the Composition.
     */
    confidentiality?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Composition[];
    /**
     * Identifies the organization or group who is responsible for ongoing maintenance of and
     * access to the composition/document information.
     */
    custodian?: Reference;
    /**
     * The composition editing time, when the composition was last logically changed by the
     * author.
     */
    date?: string;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: Reference;
    /**
     * The clinical service, such as a colonoscopy or an appendectomy, being documented.
     */
    event?: CompositionEvent[];
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
     * A version-independent identifier for the Composition. This identifier stays constant as
     * the composition is changed over time.
     */
    identifier?: Identifier;
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
     * Relationships that this composition has with other compositions or documents that already
     * exist.
     */
    relatesTo?: CompositionRelatesTo[];
    /**
     * This is a Composition resource
     */
    resourceType?: any;
    /**
     * The root of the sections that make up the composition.
     */
    section?: CompositionSection[];
    /**
     * The workflow/clinical status of this composition. The status is a marker for the clinical
     * standing of the document.
     */
    status?: CompositionStatus;
    /**
     * Who or what the composition is about. The composition can be about a person, (patient or
     * healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as
     * a document about a herd of livestock, or a set of patients that share a common exposure).
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
     * Official human-readable label for the composition.
     */
    title?: string;
    /**
     * Specifies the particular kind of composition (e.g. History and Physical, Discharge
     * Summary, Progress Note). This usually equates to the purpose of making the composition.
     */
    type?: CodeableConcept;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical
 * package that provides a single coherent statement of meaning, establishes its own context
 * and that has clinical attestation with regard to who is making the statement. A
 * Composition defines the structure and narrative content necessary for a document.
 * However, a Composition alone does not constitute a document. Rather, the Composition must
 * be the first entry in a Bundle where Bundle.type=document, and any other resources
 * referenced from Composition must be included as subsequent entries in the Bundle (for
 * example Patient, Practitioner, Encounter, etc.).
 */
export interface CompositionAttester {
    /**
     * Extensions for mode
     */
    _mode?: Element;
    /**
     * Extensions for time
     */
    _time?: Element;
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
     * The type of attestation the authenticator offers.
     */
    mode?: CompositionAttesterMode;
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
     * Who attested the composition in the specified way.
     */
    party?: Reference;
    /**
     * When the composition was attested by the party.
     */
    time?: string;
}
/**
 * The type of attestation the authenticator offers.
 */
export declare enum CompositionAttesterMode {
    Legal = "legal",
    Official = "official",
    Personal = "personal",
    Professional = "professional"
}
/**
 * A set of healthcare-related information that is assembled together into a single logical
 * package that provides a single coherent statement of meaning, establishes its own context
 * and that has clinical attestation with regard to who is making the statement. A
 * Composition defines the structure and narrative content necessary for a document.
 * However, a Composition alone does not constitute a document. Rather, the Composition must
 * be the first entry in a Bundle where Bundle.type=document, and any other resources
 * referenced from Composition must be included as subsequent entries in the Bundle (for
 * example Patient, Practitioner, Encounter, etc.).
 */
export interface CompositionEvent {
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an
     * appendectomy, being documented. In some cases, the event is inherent in the typeCode,
     * such as a "History and Physical Report" in which the procedure being documented is
     * necessarily a "History and Physical" act.
     */
    code?: CodeableConcept[];
    /**
     * The description and/or reference of the event(s) being documented. For example, this
     * could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: Reference[];
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
     * The period of time covered by the documentation. There is no assertion that the
     * documentation is a complete representation for this period, only that it documents events
     * during this time.
     */
    period?: Period;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical
 * package that provides a single coherent statement of meaning, establishes its own context
 * and that has clinical attestation with regard to who is making the statement. A
 * Composition defines the structure and narrative content necessary for a document.
 * However, a Composition alone does not constitute a document. Rather, the Composition must
 * be the first entry in a Bundle where Bundle.type=document, and any other resources
 * referenced from Composition must be included as subsequent entries in the Bundle (for
 * example Patient, Practitioner, Encounter, etc.).
 */
export interface CompositionRelatesTo {
    /**
     * Extensions for code
     */
    _code?: Element;
    /**
     * The type of relationship that this composition has with anther composition or document.
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
     * The target composition/document of this relationship.
     */
    targetIdentifier?: Identifier;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: Reference;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical
 * package that provides a single coherent statement of meaning, establishes its own context
 * and that has clinical attestation with regard to who is making the statement. A
 * Composition defines the structure and narrative content necessary for a document.
 * However, a Composition alone does not constitute a document. Rather, the Composition must
 * be the first entry in a Bundle where Bundle.type=document, and any other resources
 * referenced from Composition must be included as subsequent entries in the Bundle (for
 * example Patient, Practitioner, Encounter, etc.).
 */
export interface CompositionSection {
    /**
     * Extensions for mode
     */
    _mode?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who
     * typed it in.
     */
    author?: Reference[];
    /**
     * A code identifying the kind of content contained within the section. This must be
     * consistent with the section title.
     */
    code?: CodeableConcept;
    /**
     * If the section is empty, why the list is empty. An empty section typically has some text
     * explaining the empty reason.
     */
    emptyReason?: CodeableConcept;
    /**
     * A reference to the actual resource from which the narrative in the section is derived.
     */
    entry?: Reference[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The actual focus of the section when it is not the subject of the composition, but
     * instead represents something or someone associated with the subject such as (for a
     * patient subject) a spouse, parent, fetus, or donor. If not focus is specified, the focus
     * is assumed to be focus of the parent section, or, for a section in the Composition
     * itself, the subject of the composition. Sections with a focus SHALL only include
     * resources where the logical subject (patient, subject, focus, etc.) matches the section
     * focus, or the resources have no logical subject (few resources).
     */
    focus?: Reference;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * How the entry list was prepared - whether it is a working list that is suitable for being
     * maintained on an ongoing basis, or if it represents a snapshot of a list of items from
     * another source, or whether it is a prepared list where items may be marked as added,
     * modified or deleted.
     */
    mode?: string;
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
     * Specifies the order applied to the items in the section entries.
     */
    orderedBy?: CodeableConcept;
    /**
     * A nested sub-section within this section.
     */
    section?: CompositionSection[];
    /**
     * A human-readable narrative that contains the attested content of the section, used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative.
     */
    text?: Narrative;
    /**
     * The label for this particular section.  This will be part of the rendered content for the
     * document, and is often used to build a table of contents.
     */
    title?: string;
}
/**
 * The workflow/clinical status of this composition. The status is a marker for the clinical
 * standing of the document.
 */
export declare enum CompositionStatus {
    Amended = "amended",
    EnteredInError = "entered-in-error",
    Final = "final",
    Preliminary = "preliminary"
}
