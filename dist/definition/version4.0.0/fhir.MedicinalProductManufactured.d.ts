import { Element, Extension, Reference, CodeableConcept, Meta, Quantity, Narrative, Attachment } from "./fhir._";
export interface MedicinalProductManufactured {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicinalProductManufactured | number | null | string>;
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
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Ingredient.
     */
    ingredient?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently
     * causes technical issues).
     */
    manufacturer?: Array<any[] | boolean | Reference | number | number | null | string>;
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
     * Other codeable characteristics.
     */
    otherCharacteristics?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: any[] | boolean | ProdCharacteristic | number | number | null | string;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: any[] | boolean | Quantity | number | number | null | string;
    /**
     * This is a MedicinalProductManufactured resource
     */
    resourceType: any;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: any[] | boolean | CodeableConcept | number | number | null | string;
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
