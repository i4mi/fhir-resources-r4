import {
    Element,
    CodeableConcept,
    Reference,
    Extension,
    Identifier,
    Meta,
    Attachment,
    ContactPoint,
    Narrative,
    Period
} from "./fhir._";

export interface HealthcareService {
    /**
     * Extensions for active
     */
    _active?: Element;
    /**
     * Extensions for appointmentRequired
     */
    _appointmentRequired?: Element;
    /**
     * Extensions for availabilityExceptions
     */
    _availabilityExceptions?: Element;
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for extraDetails
     */
    _extraDetails?: Element;
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
     * This flag is used to mark the record to not be used. This is not used when a center is
     * closed for maintenance, or for holidays, the notAvailable period is to be used for this.
     */
    active?: boolean;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a
     * particular service at a site to be provided by the Organization. Indicates if an
     * appointment is required for access to this service.
     */
    appointmentRequired?: boolean;
    /**
     * A description of site availability exceptions, e.g. public holiday availability.
     * Succinctly describing all possible exceptions to normal site availability as details in
     * the available Times and not available Times.
     */
    availabilityExceptions?: string;
    /**
     * A collection of times that the Service Site is available.
     */
    availableTime?: HealthcareServiceAvailableTime[];
    /**
     * Identifies the broad category of service being performed or delivered.
     */
    category?: CodeableConcept[];
    /**
     * Collection of characteristics (attributes).
     */
    characteristic?: CodeableConcept[];
    /**
     * Any additional description of the service and/or any specific issues not covered by the
     * other attributes, which can be displayed as further detail under the serviceName.
     */
    comment?: string;
    /**
     * Some services are specifically made available in multiple languages, this property
     * permits a directory to declare the languages this is offered in. Typically this is only
     * provided where a service operates in communities with mixed languages used.
     */
    communication?: CodeableConcept[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: HealthcareService[];
    /**
     * The location(s) that this service is available to (not where the service is provided).
     */
    coverageArea?: Reference[];
    /**
     * Does this service have specific eligibility requirements that need to be met in order to
     * use the service?
     */
    eligibility?: HealthcareServiceEligibility[];
    /**
     * Technical endpoints providing access to services operated for the specific healthcare
     * services defined at this resource.
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
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * External identifiers for this item.
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
     * The location(s) where this healthcare service may be provided.
     */
    location?: Reference[];
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
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string;
    /**
     * The HealthcareService is not available during this period of time due to the provided
     * reason.
     */
    notAvailable?: HealthcareServiceNotAvailable[];
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included
     * here to facilitate quick identification of the service in a list.
     */
    photo?: Attachment;
    /**
     * Programs that this service is applicable to.
     */
    program?: CodeableConcept[];
    /**
     * The organization that provides this healthcare service.
     */
    providedBy?: Reference;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that
     * no referral is required.
     */
    referralMethod?: CodeableConcept[];
    /**
     * This is a HealthcareService resource
     */
    resourceType?: any;
    /**
     * The code(s) that detail the conditions under which the healthcare service is
     * available/offered.
     */
    serviceProvisionCode?: CodeableConcept[];
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: CodeableConcept[];
    /**
     * List of contacts related to this specific healthcare service.
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
     * The specific type of service that may be delivered or performed.
     */
    type?: CodeableConcept[];
}

/**
 * The details of a healthcare service available at a location.
 */
export interface HealthcareServiceAvailableTime {
    /**
     * Extensions for allDay
     */
    _allDay?: Element;
    /**
     * Extensions for availableEndTime
     */
    _availableEndTime?: Element;
    /**
     * Extensions for availableStartTime
     */
    _availableStartTime?: Element;
    /**
     * Extensions for daysOfWeek
     */
    _daysOfWeek?: Element[];
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean;
    /**
     * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableEndTime?: string;
    /**
     * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
     */
    availableStartTime?: string;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeek[];
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
}

export enum DaysOfWeek {
    Fri = "fri",
    Mon = "mon",
    Sat = "sat",
    Sun = "sun",
    Thu = "thu",
    Tue = "tue",
    Wed = "wed",
}

/**
 * The details of a healthcare service available at a location.
 */
export interface HealthcareServiceEligibility {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Coded value for the eligibility.
     */
    code?: CodeableConcept;
    /**
     * Describes the eligibility conditions for the service.
     */
    comment?: string;
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
}

/**
 * The details of a healthcare service available at a location.
 */
export interface HealthcareServiceNotAvailable {
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description?: string;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: Period;
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
}