import { Element,
         CodeableConcept, 
         Period,
         Extension,
         Reference,
         Identifier,
         Meta,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirMedicinalProductAuthorization } from "./file";
//
//   const fhirMedicinalProductAuthorization = Convert.toFhirMedicinalProductAuthorization(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MedicinalProductAuthorization {
    /**
     * Extensions for dateOfFirstAuthorization
     */
    _dateOfFirstAuthorization?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for internationalBirthDate
     */
    _internationalBirthDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for restoreDate
     */
    _restoreDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for statusDate
     */
    _statusDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicinalProductAuthorization | number | null | string>;
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Marketing Authorization Holder.
     */
    holder?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any
     * country in the World.
     */
    internationalBirthDate?: string;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: Array<any[] | boolean | MedicinalProductAuthorizationJurisdictionalAuthorization | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: any[] | boolean | MedicinalProductAuthorizationProcedure | number | number | null | string;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a MedicinalProductAuthorization resource
     */
    resourceType: any;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is
     * anticipated to be restored.
     */
    restoreDate?: string;
    /**
     * The status of the marketing authorization.
     */
    status?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific
     * status shall be specified A complete date consisting of day, month and year shall be
     * specified using the ISO 8601 date format.
     */
    validityPeriod?: any[] | boolean | Period | number | number | null | string;
}

export interface MedicinalProductAuthorizationJurisdictionalAuthorization {
    /**
     * Country of authorization.
     */
    country?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The assigned number for the marketing authorization.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The start and expected end date of the authorization.
     */
    validityPeriod?: any[] | boolean | Period | number | number | null | string;
}

export interface MedicinalProductAuthorizationProcedure {
    /**
     * Extensions for dateDateTime
     */
    _dateDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: Array<any[] | boolean | MedicinalProductAuthorizationProcedure | number | number | null | string>;
    /**
     * Date of procedure.
     */
    dateDateTime?: string;
    /**
     * Date of procedure.
     */
    datePeriod?: any[] | boolean | Period | number | number | null | string;
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
     * Identifier for this procedure.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
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
     * Type of procedure.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}