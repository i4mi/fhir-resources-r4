import { Element,
         Address, 
         Reference,
         Extension,
         Identifier,
         Meta,
         ContactPoint,
         Narrative,
         CodeableConcept,
         HumanName} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirOrganization } from "./file";
//
//   const fhirOrganization = Convert.toFhirOrganization(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Organization {
    /**
     * Extensions for active
     */
    _active?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for alias
     */
    _alias?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether the organization's record is still in active use.
     */
    active?: boolean;
    /**
     * An address for the organization.
     */
    address?: Array<any[] | boolean | Address | number | number | null | string>;
    /**
     * A list of alternate names that the organization is known as, or was known as in the past.
     */
    alias?: string[];
    /**
     * Contact for the organization for a certain purpose.
     */
    contact?: Array<any[] | boolean | OrganizationContact | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Organization | number | null | string>;
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Identifier for the organization that is used to identify the organization across multiple
     * disparate systems.
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
     * A name associated with the organization.
     */
    name?: string;
    /**
     * The organization of which this organization forms a part.
     */
    partOf?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a Organization resource
     */
    resourceType: any;
    /**
     * A contact detail for the organization.
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
    /**
     * The kind(s) of organization that this is.
     */
    type?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
}

export interface OrganizationContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: any[] | boolean | Address | number | number | null | string;
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
     * A name associated with the contact.
     */
    name?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be
     * contacted.
     */
    telecom?: Array<any[] | boolean | ContactPoint | number | number | null | string>;
}