import { Element, CodeableConcept, Reference, Extension, Identifier, Meta, Annotation, Narrative } from "./fhir._";
export interface List {
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
     * Extensions for mode
     */
    _mode?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for title
     */
    _title?: Element;
    /**
     * This code defines the purpose of the list - why it was created.
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: List[];
    /**
     * The date that the list was prepared.
     */
    date?: string;
    /**
     * If the list is empty, why the list is empty.
     */
    emptyReason?: CodeableConcept;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: Reference;
    /**
     * Entries in this list.
     */
    entry?: ListEntry[];
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
     * Identifier for the List assigned for business purposes outside the context of FHIR.
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
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
    /**
     * How this list was prepared - whether it is a working list that is suitable for being
     * maintained on an ongoing basis, or if it represents a snapshot of a list of items from
     * another source, or whether it is a prepared list where items may be marked as added,
     * modified or deleted.
     */
    mode?: ListMode;
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
     * Comments that apply to the overall list.
     */
    note?: Annotation[];
    /**
     * What order applies to the items in the list.
     */
    orderedBy?: CodeableConcept;
    /**
     * This is a List resource
     */
    resourceType?: any;
    /**
     * The entity responsible for deciding what the contents of the list were. Where the list
     * was created by a human, this is the same as the author of the list.
     */
    source?: Reference;
    /**
     * Indicates the current state of this list.
     */
    status?: ListStatus;
    /**
     * The common subject (or patient) of the resources that are in the list if there is one.
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
     * A label for the list assigned by the author.
     */
    title?: string;
}
/**
 * A list is a curated collection of resources.
 */
export interface ListEntry {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for deleted
     */
    _deleted?: Element;
    /**
     * When this item was added to the list.
     */
    date?: string;
    /**
     * True if this item is marked as deleted in the list.
     */
    deleted?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The flag allows the system constructing the list to indicate the role and significance of
     * the item in the list.
     */
    flag?: CodeableConcept;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item?: Reference;
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
 * How this list was prepared - whether it is a working list that is suitable for being
 * maintained on an ongoing basis, or if it represents a snapshot of a list of items from
 * another source, or whether it is a prepared list where items may be marked as added,
 * modified or deleted.
 */
export declare enum ListMode {
    Changes = "changes",
    Snapshot = "snapshot",
    Working = "working"
}
/**
 * Indicates the current state of this list.
 */
export declare enum ListStatus {
    Current = "current",
    EnteredInError = "entered-in-error",
    Retired = "retired"
}
