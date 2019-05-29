import {
    Element,
    Address,
    Reference,
    Extension,
    Identifier,
    Meta,
    ContactPoint,
    Narrative,
    CodeableConcept,
    HumanName
} from "./fhir._";

export interface Organization {
    /**
     * Extensions for active
     */
    _active?: Element;
    /**
     * Extensions for alias
     */
    _alias?: Element[];
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Whether the organization's record is still in active use.
     */
    active?: boolean;
    /**
     * An address for the organization.
     */
    address?: Address[];
    /**
     * A list of alternate names that the organization is known as, or was known as in the past.
     */
    alias?: string[];
    /**
     * Contact for the organization for a certain purpose.
     */
    contact?: OrganizationContact[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Organization[];
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint?: Reference[];
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
     * Identifier for the organization that is used to identify the organization across multiple
     * disparate systems.
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
     * A name associated with the organization.
     */
    name?: string;
    /**
     * The organization of which this organization forms a part.
     */
    partOf?: Reference;
    /**
     * This is a Organization resource
     */
    resourceType?: any;
    /**
     * A contact detail for the organization.
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
    /**
     * The kind(s) of organization that this is.
     */
    type?: CodeableConcept[];
}

/**
 * A formally or informally recognized grouping of people or organizations formed for the
 * purpose of achieving some form of collective action.  Includes companies, institutions,
 * corporations, departments, community groups, healthcare practice groups, payer/insurer,
 * etc.
 */
export interface OrganizationContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: Address;
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
     * A name associated with the contact.
     */
    name?: HumanName;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: CodeableConcept;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be
     * contacted.
     */
    telecom?: ContactPoint[];
}