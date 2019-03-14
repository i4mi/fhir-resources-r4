import {
    Element,
    Address,
    Extension,
    Identifier,
    Reference,
    Meta,
    HumanName,
    Attachment,
    ContactPoint,
    Narrative
} from "./fhir._";

export interface Person {
    /**
     * Extensions for active
     */
    _active?: Element;
    /**
     * Extensions for birthDate
     */
    _birthDate?: Element;
    /**
     * Extensions for gender
     */
    _gender?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean;
    /**
     * One or more addresses for the person.
     */
    address?: Address[];
    /**
     * The birth date for the person.
     */
    birthDate?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Person[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
     * Link to a resource that concerns the same actual person.
     */
    link?: PersonLink[];
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: Reference;
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
     * A name associated with the person.
     */
    name?: HumanName[];
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification
     * of the individual.
     */
    photo?: Attachment;
    /**
     * This is a Person resource
     */
    resourceType?: any;
    /**
     * A contact detail for the person, e.g. a telephone number or an email address.
     */
    telecom?: ContactPoint[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
}

/**
 * Administrative Gender.
 */
export enum Gender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown",
}

/**
 * Demographics and administrative information about a person independent of a specific
 * health-related context.
 */
export interface PersonLink {
    /**
     * Extensions for assurance
     */
    _assurance?: Element;
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
     * The resource to which this actual person is associated.
     */
    target?: Reference;
}

/**
 * Level of assurance that this link is associated with the target resource.
 */
export enum Assurance {
    Level1 = "level1",
    Level2 = "level2",
    Level3 = "level3",
    Level4 = "level4",
}