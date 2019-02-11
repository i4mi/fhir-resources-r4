import { Element,
         Extension, 
         Identifier,
         Reference,
         Meta,
         CodeableConcept,
         Narrative,
         Ratio} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirMedicinalProductIngredient } from "./file";
//
//   const fhirMedicinalProductIngredient = Convert.toFhirMedicinalProductIngredient(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MedicinalProductIngredient {
    /**
     * Extensions for allergenicIndicator
     */
    _allergenicIndicator?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicinalProductIngredient | number | null | string>;
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
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used
     * to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: any[] | boolean | Identifier | number | number | null | string;
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
     * Manufacturer of this Ingredient.
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
     * This is a MedicinalProductIngredient resource
     */
    resourceType: any;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance?: Array<any[] | boolean | MedicinalProductIngredientSpecifiedSubstance | number | number | null | string>;
    /**
     * The ingredient substance.
     */
    substance?: any[] | boolean | MedicinalProductIngredientSubstance | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface MedicinalProductIngredientSpecifiedSubstance {
    /**
     * The specified substance.
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Quantity of the substance or specified substance present in the manufactured item or
     * pharmaceutical product.
     */
    strength?: Array<any[] | boolean | MedicinalProductIngredientStrength | number | number | null | string>;
}

export interface MedicinalProductIngredientStrength {
    /**
     * Extensions for measurementPoint
     */
    _measurementPoint?: any[] | boolean | Element | number | number | null | string;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range.
     * The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string;
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
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the
     * single pharmaceutical product or manufactured item.
     */
    presentation: any[] | boolean | Ratio | number | number | null | string;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when
     * there is a range of strengths, this is the lower limit, with the presentation attribute
     * becoming the upper limit.
     */
    presentationLowLimit?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: Array<any[] | boolean | MedicinalProductIngredientReferenceStrength | number | number | null | string>;
}

export interface MedicinalProductIngredientReferenceStrength {
    /**
     * Extensions for measurementPoint
     */
    _measurementPoint?: any[] | boolean | Element | number | number | null | string;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string;
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
     * Strength expressed in terms of a reference substance.
     */
    strength: any[] | boolean | Ratio | number | number | null | string;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * Relevant reference substance.
     */
    substance?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface MedicinalProductIngredientSubstance {
    /**
     * The ingredient substance.
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Quantity of the substance or specified substance present in the manufactured item or
     * pharmaceutical product.
     */
    strength?: Array<any[] | boolean | MedicinalProductIngredientStrength | number | number | null | string>;
}