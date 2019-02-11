import { Element, Quantity, Reference, Extension, CodeableConcept, Identifier, Meta, Annotation, Narrative } from "./fhir._";
export interface Immunization {
    /**
     * Extensions for expirationDate
     */
    _expirationDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for isSubpotent
     */
    _isSubpotent?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lotNumber
     */
    _lotNumber?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurrenceString
     */
    _occurrenceString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for primarySource
     */
    _primarySource?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for recorded
     */
    _recorded?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Immunization | number | null | string>;
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine
     * administration.
     */
    education?: Array<any[] | boolean | ImmunizationEducation | number | number | null | string>;
    /**
     * The visit or admission or other contact between patient and health care provider the
     * immunization was performed as part of.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the
     * patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine
     * but due to inventory issues, vaccine purchased with private funds was actually
     * administered).
     */
    fundingSource?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
    location?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: any[] | boolean | Reference | number | number | null | string;
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
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
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
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: Array<any[] | boolean | ImmunizationPerformer | number | number | null | string>;
    /**
     * An indication that the content of the record is based on information from the person who
     * administered the vaccine. This reflects the context under which the data was originally
     * recorded.
     */
    primarySource?: boolean;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the
     * dose.
     */
    protocolApplied?: Array<any[] | boolean | ImmunizationProtocolApplied | number | number | null | string>;
    /**
     * Categorical data indicating that an adverse event is associated in time to an
     * immunization.
     */
    reaction?: Array<any[] | boolean | ImmunizationReaction | number | number | null | string>;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was
     * administered.
     */
    reasonReference?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The date the occurrence of the immunization was first captured in the record -
     * potentially significantly after the occurrence of the event.
     */
    recorded?: string;
    /**
     * The source of the data when the report of the immunization event is not based on
     * information from the person who administered the vaccine.
     */
    reportOrigin?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This is a Immunization resource
     */
    resourceType: any;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Body site where vaccine was administered.
     */
    site?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Indicates the current status of the immunization event.
     */
    status?: string;
    /**
     * Indicates the reason the immunization event was not performed.
     */
    statusReason?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ImmunizationEducation {
    /**
     * Extensions for documentType
     */
    _documentType?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for presentationDate
     */
    _presentationDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publicationDate
     */
    _publicationDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for reference
     */
    _reference?: any[] | boolean | Element | number | number | null | string;
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
export interface ImmunizationPerformer {
    /**
     * The practitioner or organization who performed the action.
     */
    actor: any[] | boolean | Reference | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: any[] | boolean | CodeableConcept | number | number | null | string;
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
}
export interface ImmunizationProtocolApplied {
    /**
     * Extensions for doseNumberPositiveInt
     */
    _doseNumberPositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for doseNumberString
     */
    _doseNumberString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for series
     */
    _series?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for seriesDosesPositiveInt
     */
    _seriesDosesPositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for seriesDosesString
     */
    _seriesDosesString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: any[] | boolean | Reference | number | number | null | string;
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
    targetDisease?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
}
export interface ImmunizationReaction {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for reported
     */
    _reported?: any[] | boolean | Element | number | number | null | string;
    /**
     * Date of reaction to the immunization.
     */
    date?: string;
    /**
     * Details of the reaction.
     */
    detail?: any[] | boolean | Reference | number | number | null | string;
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
     * Self-reported indicator.
     */
    reported?: boolean;
}
