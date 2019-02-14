import { Element, Reference, CodeableConcept, Extension, Identifier, Meta, Narrative, Period } from "./fhir._";
export interface Composition {
    /**
     * Extensions for confidentiality
     */
    _confidentiality?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * A participant who has attested to the accuracy of the composition/document.
     */
    attester?: Array<any[] | boolean | CompositionAttester | number | number | null | string>;
    /**
     * Identifies who is responsible for the information in the composition, not necessarily who
     * typed it in.
     */
    author: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A categorization for the type of the composition - helps for indexing and searching. This
     * may be implied by or derived from the code specified in the Composition Type.
     */
    category?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The code specifying the level of confidentiality of the Composition.
     */
    confidentiality?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Composition | number | null | string>;
    /**
     * Identifies the organization or group who is responsible for ongoing maintenance of and
     * access to the composition/document information.
     */
    custodian?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The composition editing time, when the composition was last logically changed by the
     * author.
     */
    date?: string;
    /**
     * Describes the clinical encounter or type of care this documentation is associated with.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The clinical service, such as a colonoscopy or an appendectomy, being documented.
     */
    event?: Array<any[] | boolean | CompositionEvent | number | number | null | string>;
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
     * A version-independent identifier for the Composition. This identifier stays constant as
     * the composition is changed over time.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
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
     * Relationships that this composition has with other compositions or documents that already
     * exist.
     */
    relatesTo?: Array<any[] | boolean | CompositionRelatesTo | number | number | null | string>;
    /**
     * This is a Composition resource
     */
    resourceType: any;
    /**
     * The root of the sections that make up the composition.
     */
    section?: Array<any[] | boolean | CompositionSection | number | number | null | string>;
    /**
     * The workflow/clinical status of this composition. The status is a marker for the clinical
     * standing of the document.
     */
    status?: FhirCompositionStatus;
    /**
     * Who or what the composition is about. The composition can be about a person, (patient or
     * healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as
     * a document about a herd of livestock, or a set of patients that share a common exposure).
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
     * Official human-readable label for the composition.
     */
    title?: string;
    /**
     * Specifies the particular kind of composition (e.g. History and Physical, Discharge
     * Summary, Progress Note). This usually equates to the purpose of making the composition.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface CompositionAttester {
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for time
     */
    _time?: any[] | boolean | Element | number | number | null | string;
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
     * The type of attestation the authenticator offers.
     */
    mode?: Mode;
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
     * Who attested the composition in the specified way.
     */
    party?: any[] | boolean | Reference | number | number | null | string;
    /**
     * When the composition was attested by the party.
     */
    time?: string;
}
/**
 * The type of attestation the authenticator offers.
 */
export declare enum Mode {
    Legal = "legal",
    Official = "official",
    Personal = "personal",
    Professional = "professional"
}
export interface CompositionEvent {
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an
     * appendectomy, being documented. In some cases, the event is inherent in the typeCode,
     * such as a "History and Physical Report" in which the procedure being documented is
     * necessarily a "History and Physical" act.
     */
    code?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The description and/or reference of the event(s) being documented. For example, this
     * could be used to document such a colonoscopy or an appendectomy.
     */
    detail?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * The period of time covered by the documentation. There is no assertion that the
     * documentation is a complete representation for this period, only that it documents events
     * during this time.
     */
    period?: any[] | boolean | Period | number | number | null | string;
}
export interface CompositionRelatesTo {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
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
     * The target composition/document of this relationship.
     */
    targetIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The target composition/document of this relationship.
     */
    targetReference?: any[] | boolean | Reference | number | number | null | string;
}
export interface CompositionSection {
    /**
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who
     * typed it in.
     */
    author?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A code identifying the kind of content contained within the section. This must be
     * consistent with the section title.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * If the section is empty, why the list is empty. An empty section typically has some text
     * explaining the empty reason.
     */
    emptyReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A reference to the actual resource from which the narrative in the section is derived.
     */
    entry?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The actual focus of the section when it is not the subject of the composition, but
     * instead represents something or someone associated with the subject such as (for a
     * patient subject) a spouse, parent, fetus, or donor. If not focus is specified, the focus
     * is assumed to be focus of the parent section, or, for a section in the Composition
     * itself, the subject of the composition. Sections with a focus SHALL only include
     * resources where the logical subject (patient, subject, focus, etc.) matches the section
     * focus, or the resources have no logical subject (few resources).
     */
    focus?: any[] | boolean | Reference | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Specifies the order applied to the items in the section entries.
     */
    orderedBy?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A nested sub-section within this section.
     */
    section?: Array<any[] | boolean | CompositionSection | number | number | null | string>;
    /**
     * A human-readable narrative that contains the attested content of the section, used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
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
export declare enum FhirCompositionStatus {
    Amended = "amended",
    EnteredInError = "entered-in-error",
    Final = "final",
    Preliminary = "preliminary"
}
