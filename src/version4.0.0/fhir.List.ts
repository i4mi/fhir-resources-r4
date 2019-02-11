import { Element,
         CodeableConcept, 
         Reference,
         Extension,
         Identifier,
         Meta,
         Annotation,
         Narrative}  from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirList } from "./file";
//
//   const fhirList = Convert.toFhirList(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface List {
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
     * Extensions for mode
     */
    _mode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * This code defines the purpose of the list - why it was created.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | List | number | null | string>;
    /**
     * The date that the list was prepared.
     */
    date?: string;
    /**
     * If the list is empty, why the list is empty.
     */
    emptyReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Entries in this list.
     */
    entry?: Array<any[] | boolean | ListEntry | number | number | null | string>;
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
     * Identifier for the List assigned for business purposes outside the context of FHIR.
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
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: any[] | boolean | Meta | number | number | null | string;
    /**
     * How this list was prepared - whether it is a working list that is suitable for being
     * maintained on an ongoing basis, or if it represents a snapshot of a list of items from
     * another source, or whether it is a prepared list where items may be marked as added,
     * modified or deleted.
     */
    mode?: Mode;
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
     * Comments that apply to the overall list.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * What order applies to the items in the list.
     */
    orderedBy?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This is a List resource
     */
    resourceType: any;
    /**
     * The entity responsible for deciding what the contents of the list were. Where the list
     * was created by a human, this is the same as the author of the list.
     */
    source?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates the current state of this list.
     */
    status?: FhirListStatus;
    /**
     * The common subject (or patient) of the resources that are in the list if there is one.
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
     * A label for the list assigned by the author.
     */
    title?: string;
}

export interface ListEntry {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for deleted
     */
    _deleted?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The flag allows the system constructing the list to indicate the role and significance of
     * the item in the list.
     */
    flag?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: any[] | boolean | Reference | number | number | null | string;
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

/**
 * How this list was prepared - whether it is a working list that is suitable for being
 * maintained on an ongoing basis, or if it represents a snapshot of a list of items from
 * another source, or whether it is a prepared list where items may be marked as added,
 * modified or deleted.
 */
export enum Mode {
    Changes = "changes",
    Snapshot = "snapshot",
    Working = "working",
}

/**
 * Indicates the current state of this list.
 */
export enum FhirListStatus {
    Current = "current",
    EnteredInError = "entered-in-error",
    Retired = "retired",
}