import { Element, Address, Extension, Identifier, Reference, Meta, HumanName, Attachment, ContactPoint, Narrative } from "./fhir._";
export interface Person {
    /**
     * Extensions for active
     */
    _active?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for birthDate
     */
    _birthDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for gender
     */
    _gender?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean;
    /**
     * One or more addresses for the person.
     */
    address?: Array<any[] | boolean | Address | number | number | null | string>;
    /**
     * The birth date for the person.
     */
    birthDate?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Person | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Administrative Gender.
     */
    gender?: Gender;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifier for a person within a particular scope.
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
     * Link to a resource that concerns the same actual person.
     */
    link?: Array<any[] | boolean | PersonLink | number | number | null | string>;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: any[] | boolean | Reference | number | number | null | string;
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
     * A name associated with the person.
     */
    name?: Array<any[] | boolean | HumanName | number | number | null | string>;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification
     * of the individual.
     */
    photo?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * This is a Person resource
     */
    resourceType: any;
    /**
     * A contact detail for the person, e.g. a telephone number or an email address.
     */
    telecom?: Array<any[] | boolean | ContactPoint | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
/**
 * Administrative Gender.
 */
export declare enum Gender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown"
}
export interface PersonLink {
    /**
     * Extensions for assurance
     */
    _assurance?: any[] | boolean | Element | number | number | null | string;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: Assurance;
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
     * The resource to which this actual person is associated.
     */
    target: any[] | boolean | Reference | number | number | null | string;
}
/**
 * Level of assurance that this link is associated with the target resource.
 */
export declare enum Assurance {
    Level1 = "level1",
    Level2 = "level2",
    Level3 = "level3",
    Level4 = "level4"
}
