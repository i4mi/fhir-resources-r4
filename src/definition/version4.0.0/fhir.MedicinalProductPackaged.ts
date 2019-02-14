import { Element,
         Extension, 
         Identifier,
         CodeableConcept,
         Reference,
         Meta,
         Narrative,
         Period,
         Quantity,
         Attachment} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirMedicinalProductPackaged } from "./file";
//
//   const fhirMedicinalProductPackaged = Convert.toFhirMedicinalProductPackaged(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MedicinalProductPackaged {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Batch numbering.
     */
    batchIdentifier?: Array<any[] | boolean | MedicinalProductPackagedBatchIdentifier | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicinalProductPackaged | number | null | string>;
    /**
     * Textual description.
     */
    description?: string;
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
     * Unique identifier.
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
     * Manufacturer of this Package Item.
     */
    manufacturer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Marketing information.
     */
    marketingStatus?: Array<any[] | boolean | MarketingStatus | number | number | null | string>;
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
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: Array<any[] | boolean | MedicinalProductPackagedPackageItem | number | number | null | string>;
    /**
     * This is a MedicinalProductPackaged resource
     */
    resourceType: any;
    /**
     * The product with this is a pack for.
     */
    subject?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface MedicinalProductPackagedBatchIdentifier {
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
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: any[] | boolean | Identifier | number | number | null | string;
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
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: any[] | boolean | Identifier | number | number | null | string;
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

export interface MedicinalProductPackagedPackageItem {
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A device accompanying a medicinal product.
     */
    device?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Including possibly Data Carrier Identifier.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Material type of the package item.
     */
    material?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Other codeable characteristics.
     */
    otherCharacteristics?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Allows containers within containers.
     */
    packageItem?: Array<any[] | boolean | MedicinalProductPackagedPackageItem | number | number | null | string>;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: any[] | boolean | ProdCharacteristic | number | number | null | string;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging.
     * The outermost is always 1.
     */
    quantity: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: Array<any[] | boolean | ProductShelfLife | number | number | null | string>;
    /**
     * The physical type of the container of the medicine.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface ProdCharacteristic {
    /**
     * Extensions for color
     */
    _color?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for imprint
     */
    _imprint?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for shape
     */
    _shape?: any[] | boolean | Element | number | number | null | string;
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall
     * be used The term and the term identifier shall be used.
     */
    color?: string[];
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its
     * unit of measurement The unit of measurement shall be specified in accordance with ISO
     * 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be
     * specified by regional implementations.
     */
    image?: Array<any[] | boolean | Attachment | number | number | null | string>;
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: string[];
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
     * Where applicable, the nominal volume can be specified using a numerical value and its
     * unit of measurement The unit of measurement shall be specified in accordance with ISO
     * 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall
     * be used The term and the term identifier shall be used.
     */
    scoring?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall
     * be used The term and the term identifier shall be used.
     */
    shape?: string;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: any[] | boolean | Quantity | number | number | null | string;
}

export interface ProductShelfLife {
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
     * Unique identifier for the packaged Medicinal Product.
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
     * The shelf life time period can be specified using a numerical value for the period of
     * time and its unit of time measurement The unit of measurement shall be specified in
     * accordance with ISO 11240 and the resulting terminology The symbol and the symbol
     * identifier shall be used.
     */
    period: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled
     * vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life
     * of the packaged Medicinal Product itself, shelf life after transformation where necessary
     * and shelf life after the first opening of a bottle, etc. The shelf life type shall be
     * specified using an appropriate controlled vocabulary The controlled term and the
     * controlled term identifier shall be specified.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}