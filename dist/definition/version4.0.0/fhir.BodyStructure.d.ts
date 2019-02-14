import { Element, Extension, Identifier, Attachment, CodeableConcept, Meta, Reference, Narrative } from "./fhir._";
export interface BodyStructure {
    /**
     * Extensions for active
     */
    _active?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether this body site is in active use.
     */
    active?: boolean;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | BodyStructure | number | null | string>;
    /**
     * A summary, characterization or explanation of the body structure.
     */
    description?: string;
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
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * Image or images used to identify a location.
     */
    image?: Array<any[] | boolean | Attachment | number | number | null | string>;
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
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality,
     * relative location, directionality, number, and plane.
     */
    locationQualifier?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The kind of structure being represented by the body structure at
     * `BodyStructure.location`.  This can define both normal and abnormal morphologies.
     */
    morphology?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The person to which the body site belongs.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a BodyStructure resource
     */
    resourceType: any;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
