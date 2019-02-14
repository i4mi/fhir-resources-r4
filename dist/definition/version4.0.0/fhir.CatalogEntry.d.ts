import { Element, CodeableConcept, Identifier, Extension, Meta, Reference, Narrative, Period } from "./fhir._";
export interface CatalogEntry {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastUpdated
     */
    _lastUpdated?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for orderable
     */
    _orderable?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for validTo
     */
    _validTo?: any[] | boolean | Element | number | number | null | string;
    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | CatalogEntry | number | null | string>;
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
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and
     * retailer code.
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
     * Typically date of issue is different from the beginning of the validity. This can be used
     * to see when an item was last updated.
     */
    lastUpdated?: string;
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
     * Whether the entry represents an orderable item.
     */
    orderable?: boolean;
    /**
     * The item in a catalog or definition.
     */
    referencedItem: any[] | boolean | Reference | number | number | null | string;
    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: Array<any[] | boolean | CatalogEntryRelatedEntry | number | number | null | string>;
    /**
     * This is a CatalogEntry resource
     */
    resourceType: any;
    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of
     * medications even if not prescribable.
     */
    status?: FhirCatalogEntryStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string;
}
export interface CatalogEntryRelatedEntry {
    /**
     * Extensions for relationtype
     */
    _relationtype?: any[] | boolean | Element | number | number | null | string;
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
     * The reference to the related item.
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
    /**
     * The type of relation to the related item: child, parent, packageContent,
     * containerPackage, usedIn, uses, requires, etc.
     */
    relationtype?: Relationtype;
}
/**
 * The type of relation to the related item: child, parent, packageContent,
 * containerPackage, usedIn, uses, requires, etc.
 */
export declare enum Relationtype {
    IsReplacedBy = "is-replaced-by",
    Triggers = "triggers"
}
/**
 * Used to support catalog exchange even for unsupported products, e.g. getting list of
 * medications even if not prescribable.
 */
export declare enum FhirCatalogEntryStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
