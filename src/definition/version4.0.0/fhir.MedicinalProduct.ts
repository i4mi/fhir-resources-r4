import { Element,
         CodeableConcept, 
         Reference,
         Identifier,
         Coding,
         Extension,
         Meta,
         Narrative,
         Period} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirMedicinalProduct } from "./file";
//
//   const fhirMedicinalProduct = Convert.toFhirMedicinalProduct(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MedicinalProduct {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for specialMeasures
     */
    _specialMeasures?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicinalProduct | number | null | string>;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: any[] | boolean | Coding | number | number | null | string;
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
     * Business identifier for this product. Could be an MPID.
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
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: Array<any[] | boolean | MedicinalProductManufacturingBusinessOperation | number | number | null | string>;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: Array<any[] | boolean | MarketingStatus | number | number | null | string>;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * The product's name, including full name and possibly coded parts.
     */
    name: Array<any[] | boolean | MedicinalProductName | number | number | null | string>;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * This is a MedicinalProduct resource
     */
    resourceType: any;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare
     * disease.
     */
    specialDesignation?: Array<any[] | boolean | MedicinalProductSpecialDesignation | number | number | null | string>;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: string[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface MedicinalProductManufacturingBusinessOperation {
    /**
     * Extensions for effectiveDate
     */
    _effectiveDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Regulatory authorization reference number.
     */
    authorisationReferenceNumber?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * To indicate if this proces is commercially confidential.
     */
    confidentialityIndicator?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Regulatory authorization date.
     */
    effectiveDate?: string;
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
     * The manufacturer or establishment associated with the process.
     */
    manufacturer?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * The type of manufacturing operation.
     */
    operationType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A regulator which oversees the operation.
     */
    regulator?: any[] | boolean | Reference | number | number | null | string;
}

export interface MarketingStatus {
    /**
     * Extensions for restoreDate
     */
    _restoreDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * The country in which the marketing authorisation has been granted shall be specified It
     * should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.
     */
    country: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The date when the Medicinal Product is placed on the market by the Marketing
     * Authorisation Holder (or where applicable, the manufacturer/distributor) in a country
     * and/or jurisdiction shall be provided A complete date consisting of day, month and year
     * shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to
     * the release of the Medicinal Product into the distribution chain.
     */
    dateRange: any[] | boolean | Period | number | number | null | string;
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
     * Where a Medicines Regulatory Agency has granted a marketing authorisation for which
     * specific provisions within a jurisdiction apply, the jurisdiction can be specified using
     * an appropriate controlled terminology The controlled term and the controlled term
     * identifier shall be specified.
     */
    jurisdiction?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The date when the Medicinal Product is placed on the market by the Marketing
     * Authorisation Holder (or where applicable, the manufacturer/distributor) in a country
     * and/or jurisdiction shall be provided A complete date consisting of day, month and year
     * shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to
     * the release of the Medicinal Product into the distribution chain.
     */
    restoreDate?: string;
    /**
     * This attribute provides information on the status of the marketing of the medicinal
     * product See ISO/TS 20443 for more information and examples.
     */
    status: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface MedicinalProductName {
    /**
     * Extensions for productName
     */
    _productName?: any[] | boolean | Element | number | number | null | string;
    /**
     * Country where the name applies.
     */
    countryLanguage?: Array<any[] | boolean | MedicinalProductCountryLanguage | number | number | null | string>;
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
     * Coding words or phrases of the name.
     */
    namePart?: Array<any[] | boolean | MedicinalProductNamePart | number | number | null | string>;
    /**
     * The full product name.
     */
    productName?: string;
}

export interface MedicinalProductCountryLanguage {
    /**
     * Country code for where this name applies.
     */
    country: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Jurisdiction code for where this name applies.
     */
    jurisdiction?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Language code for this name.
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
}

export interface MedicinalProductNamePart {
    /**
     * Extensions for part
     */
    _part?: any[] | boolean | Element | number | number | null | string;
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
     * A fragment of a product name.
     */
    part?: string;
    /**
     * Idenifying type for this part of the name (e.g. strength part).
     */
    type: any[] | boolean | Coding | number | number | null | string;
}

export interface MedicinalProductSpecialDesignation {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Date when the designation was granted.
     */
    date?: string;
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
     * Identifier for the designation, or procedure number.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Condition for which the medicinal use applies.
     */
    indicationReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The intended use of the product, e.g. prevention, treatment.
     */
    intendedUse?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Animal species for which this applies.
     */
    species?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * For example granted, pending, expired or withdrawn.
     */
    status?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The type of special designation, e.g. orphan drug, minor use.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}