import {
    Element,
    Quantity,
    Reference,
    Extension,
    CodeableConcept,
    Identifier,
    Meta,
    Annotation,
    Narrative
} from "./fhir._";

export interface Immunization {
    /**
     * Extensions for expirationDate
     */
    _expirationDate?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for isSubpotent
     */
    _isSubpotent?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lotNumber
     */
    _lotNumber?: Element;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: Element;
    /**
     * Extensions for occurrenceString
     */
    _occurrenceString?: Element;
    /**
     * Extensions for primarySource
     */
    _primarySource?: Element;
    /**
     * Extensions for recorded
     */
    _recorded?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Immunization[];
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: Quantity;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine
     * administration.
     */
    education?: ImmunizationEducation[];
    /**
     * The visit or admission or other contact between patient and health care provider the
     * immunization was performed as part of.
     */
    encounter?: Reference;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the
     * patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine
     * but due to inventory issues, vaccine purchased with private funds was actually
     * administered).
     */
    fundingSource?: CodeableConcept;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Indication if a dose is considered to be subpotent. By default, a dose should be
     * considered to be potent.
     */
    isSubpotent?: boolean;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: Reference;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: Reference;
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
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: Annotation[];
    /**
     * Date vaccine administered or was to be administered.
     */
    occurrenceDateTime?: string;
    /**
     * Date vaccine administered or was to be administered.
     */
    occurrenceString?: string;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient?: Reference;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: ImmunizationPerformer[];
    /**
     * An indication that the content of the record is based on information from the person who
     * administered the vaccine. This reflects the context under which the data was originally
     * recorded.
     */
    primarySource?: boolean;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: CodeableConcept[];
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the
     * dose.
     */
    protocolApplied?: ImmunizationProtocolApplied[];
    /**
     * Categorical data indicating that an adverse event is associated in time to an
     * immunization.
     */
    reaction?: ImmunizationReaction[];
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was
     * administered.
     */
    reasonReference?: Reference[];
    /**
     * The date the occurrence of the immunization was first captured in the record -
     * potentially significantly after the occurrence of the event.
     */
    recorded?: string;
    /**
     * The source of the data when the report of the immunization event is not based on
     * information from the person who administered the vaccine.
     */
    reportOrigin?: CodeableConcept;
    /**
     * This is a Immunization resource
     */
    resourceType?: any;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: CodeableConcept;
    /**
     * Body site where vaccine was administered.
     */
    site?: CodeableConcept;
    /**
     * Indicates the current status of the immunization event.
     */
    status?: string;
    /**
     * Indicates the reason the immunization event was not performed.
     */
    statusReason?: CodeableConcept;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: CodeableConcept[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode?: CodeableConcept;
}

/**
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface ImmunizationEducation {
    /**
     * Extensions for documentType
     */
    _documentType?: Element;
    /**
     * Extensions for presentationDate
     */
    _presentationDate?: Element;
    /**
     * Extensions for publicationDate
     */
    _publicationDate?: Element;
    /**
     * Extensions for reference
     */
    _reference?: Element;
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string;
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
     * Date the educational material was given to the patient.
     */
    presentationDate?: string;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string;
    /**
     * Reference pointer to the educational material given to the patient if the information was
     * on line.
     */
    reference?: string;
}

/**
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface ImmunizationPerformer {
    /**
     * The practitioner or organization who performed the action.
     */
    actor?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: CodeableConcept;
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
}

/**
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface ImmunizationProtocolApplied {
    /**
     * Extensions for doseNumberPositiveInt
     */
    _doseNumberPositiveInt?: Element;
    /**
     * Extensions for doseNumberString
     */
    _doseNumberString?: Element;
    /**
     * Extensions for series
     */
    _series?: Element;
    /**
     * Extensions for seriesDosesPositiveInt
     */
    _seriesDosesPositiveInt?: Element;
    /**
     * Extensions for seriesDosesString
     */
    _seriesDosesString?: Element;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: Reference;
    /**
     * Nominal position in a series.
     */
    doseNumberPositiveInt?: number;
    /**
     * Nominal position in a series.
     */
    doseNumberString?: string;
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
     * One possible path to achieve presumed immunity against a disease - within the context of
     * an authority.
     */
    series?: string;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDosesPositiveInt?: number;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDosesString?: string;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: CodeableConcept[];
}

/**
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface ImmunizationReaction {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for reported
     */
    _reported?: Element;
    /**
     * Date of reaction to the immunization.
     */
    date?: string;
    /**
     * Details of the reaction.
     */
    detail?: Reference;
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
     * Self-reported indicator.
     */
    reported?: boolean;
}