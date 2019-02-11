import { Element, Address, Extension, Reference, Identifier, CodeableConcept, Meta, HumanName, Attachment, ContactPoint, Narrative, Period } from "./fhir._";
export interface Patient {
    /**
     * Extensions for active
     */
    _active?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for birthDate
     */
    _birthDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for deceasedBoolean
     */
    _deceasedBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for deceasedDateTime
     */
    _deceasedDateTime?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for multipleBirthBoolean
     */
    _multipleBirthBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for multipleBirthInteger
     */
    _multipleBirthInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Whether this patient record is in active use.
     * Many systems use this property to mark as non-current patients, such as those that have
     * not been seen for a period of time based on an organization's business rules.
     *
     * It is often used to filter patient lists to exclude inactive patients
     *
     * Deceased patients may also be marked as inactive for the same reasons, but may be active
     * for some time after death.
     */
    active?: boolean;
    /**
     * An address for the individual.
     */
    address?: Array<any[] | boolean | Address | number | number | null | string>;
    /**
     * The date of birth for the individual.
     */
    birthDate?: string;
    /**
     * A language which may be used to communicate with the patient about his or her health.
     */
    communication?: Array<any[] | boolean | PatientCommunication | number | number | null | string>;
    /**
     * A contact party (e.g. guardian, partner, friend) for the patient.
     */
    contact?: Array<any[] | boolean | PatientContact | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Patient | number | null | string>;
    /**
     * Indicates if the individual is deceased or not.
     */
    deceasedBoolean?: boolean;
    /**
     * Indicates if the individual is deceased or not.
     */
    deceasedDateTime?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Administrative Gender - the gender that the patient is considered to have for
     * administration and record keeping purposes.
     */
    gender?: Gender;
    /**
     * Patient's nominated care provider.
     */
    generalPractitioner?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * An identifier for this patient.
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
     * Link to another patient resource that concerns the same actual patient.
     */
    link?: Array<any[] | boolean | PatientLink | number | number | null | string>;
    /**
     * Organization that is the custodian of the patient record.
     */
    managingOrganization?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This field contains a patient's most recent marital (civil) status.
     */
    maritalStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Indicates whether the patient is part of a multiple (boolean) or indicates the actual
     * birth order (integer).
     */
    multipleBirthBoolean?: boolean;
    /**
     * Indicates whether the patient is part of a multiple (boolean) or indicates the actual
     * birth order (integer).
     */
    multipleBirthInteger?: number;
    /**
     * A name associated with the individual.
     */
    name?: Array<any[] | boolean | HumanName | number | number | null | string>;
    /**
     * Image of the patient.
     */
    photo?: Array<any[] | boolean | Attachment | number | number | null | string>;
    /**
     * This is a Patient resource
     */
    resourceType: any;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the individual
     * may be contacted.
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
export interface PatientCommunication {
    /**
     * Extensions for preferred
     */
    _preferred?: any[] | boolean | Element | number | number | null | string;
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
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a
     * hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for
     * English, or "en-US" for American English versus "en-EN" for England English.
     */
    language: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Indicates whether or not the patient prefers this language (over other languages he
     * masters up a certain level).
     */
    preferred?: boolean;
}
export interface PatientContact {
    /**
     * Extensions for gender
     */
    _gender?: any[] | boolean | Element | number | number | null | string;
    /**
     * Address for the contact person.
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
     * Administrative Gender - the gender that the contact person is considered to have for
     * administration and record keeping purposes.
     */
    gender?: Gender;
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
     * A name associated with the contact person.
     */
    name?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * Organization on behalf of which the contact is acting or for which the contact is working.
     */
    organization?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The period during which this contact person or organization is valid to be contacted
     * relating to this patient.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * The nature of the relationship between the patient and the contact person.
     */
    relationship?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A contact detail for the person, e.g. a telephone number or an email address.
     */
    telecom?: Array<any[] | boolean | ContactPoint | number | number | null | string>;
}
/**
 * Administrative Gender - the gender that the contact person is considered to have for
 * administration and record keeping purposes.
 *
 * Administrative Gender - the gender that the patient is considered to have for
 * administration and record keeping purposes.
 */
export declare enum Gender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown"
}
export interface PatientLink {
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
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
     * The other patient resource that the link refers to.
     */
    other: any[] | boolean | Reference | number | number | null | string;
    /**
     * The type of link between this patient resource and another patient resource.
     */
    type?: PatientLinkType;
}
/**
 * The type of link between this patient resource and another patient resource.
 */
export declare enum PatientLinkType {
    Refer = "refer",
    ReplacedBy = "replaced-by",
    Replaces = "replaces",
    Seealso = "seealso"
}
