import {
    Element,
    Address,
    CodeableConcept,
    Extension,
    Identifier,
    Meta,
    HumanName,
    Attachment,
    ContactPoint,
    Narrative,
    Reference,
    Period
} from "./fhir._";

export interface Practitioner {
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
     * Whether this practitioner's record is in active use.
     */
    active?: boolean;
    /**
     * Address(es) of the practitioner that are not role specific (typically home address).
     * Work addresses are not typically entered in this property as they are usually role
     * dependent.
     */
    address?: Address[];
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: string;
    /**
     * A language the practitioner can use in patient communication.
     */
    communication?: CodeableConcept[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Practitioner[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Administrative Gender - the gender that the person is considered to have for
     * administration and record keeping purposes.
     */
    gender?: Gender;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * An identifier that applies to this person in this role.
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
     * The name(s) associated with the practitioner.
     */
    name?: HumanName[];
    /**
     * Image of the person.
     */
    photo?: Attachment[];
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain
     * to the provision of care by the practitioner.  For example, a medical license issued by a
     * medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: PractitionerQualification[];
    /**
     * This is a Practitioner resource
     */
    resourceType?: any;
    /**
     * A contact detail for the practitioner, e.g. a telephone number or an email address.
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
 * Administrative Gender - the gender that the person is considered to have for
 * administration and record keeping purposes.
 */
export enum Gender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown",
}

/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export interface PractitionerQualification {
    /**
     * Coded representation of the qualification.
     */
    code?: CodeableConcept;
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
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: Identifier[];
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: Reference;
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
     * Period during which the qualification is valid.
     */
    period?: Period;
}