import { Element,
         Extension, 
         Identifier,
         Meta,
         Reference,
         CodeableConcept,
         Narrative,
         Period} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirBiologicallyDerivedProduct } from "./file";
//
//   const fhirBiologicallyDerivedProduct = Convert.toFhirBiologicallyDerivedProduct(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface BiologicallyDerivedProduct {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for productCategory
     */
    _productCategory?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for quantity
     */
    _quantity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * How this product was collected.
     */
    collection?: any[] | boolean | BiologicallyDerivedProductCollection | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | BiologicallyDerivedProduct | number | null | string>;
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
     * This records identifiers associated with this biologically derived product instance that
     * are defined by business processes and/or used to refer to it when a direct URL reference
     * to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed
     * documentation).
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
     * Any manipulation of product post-collection that is intended to alter the product.  For
     * example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make
     * it more suitable for infusion.
     */
    manipulation?: any[] | boolean | BiologicallyDerivedProductManipulation | number | number | null | string;
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
     * Parent product (if any).
     */
    parent?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Any processing of the product during collection that does not change the fundamental
     * nature of the product. For example adding anti-coagulants during the collection of
     * Peripheral Blood Stem Cells.
     */
    processing?: Array<any[] | boolean | BiologicallyDerivedProductProcessing | number | number | null | string>;
    /**
     * Broad category of this product.
     */
    productCategory?: ProductCategory;
    /**
     * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
     */
    productCode?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Number of discrete units within this product.
     */
    quantity?: number;
    /**
     * Procedure request to obtain this biologically derived product.
     */
    request?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a BiologicallyDerivedProduct resource
     */
    resourceType: any;
    /**
     * Whether the product is currently available.
     */
    status?: FhirBiologicallyDerivedProductStatus;
    /**
     * Product storage.
     */
    storage?: Array<any[] | boolean | BiologicallyDerivedProductStorage | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface BiologicallyDerivedProductCollection {
    /**
     * Extensions for collectedDateTime
     */
    _collectedDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Time of product collection.
     */
    collectedDateTime?: string;
    /**
     * Time of product collection.
     */
    collectedPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Healthcare professional who is performing the collection.
     */
    collector?: any[] | boolean | Reference | number | number | null | string;
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
     * The patient or entity, such as a hospital or vendor in the case of a
     * processed/manipulated/manufactured product, providing the product.
     */
    source?: any[] | boolean | Reference | number | number | null | string;
}

export interface BiologicallyDerivedProductManipulation {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timeDateTime
     */
    _timeDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Description of manipulation.
     */
    description?: string;
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
     * Time of manipulation.
     */
    timeDateTime?: string;
    /**
     * Time of manipulation.
     */
    timePeriod?: any[] | boolean | Period | number | number | null | string;
}

export interface BiologicallyDerivedProductProcessing {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timeDateTime
     */
    _timeDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Substance added during processing.
     */
    additive?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Description of of processing.
     */
    description?: string;
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
     * Procesing code.
     */
    procedure?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Time of processing.
     */
    timeDateTime?: string;
    /**
     * Time of processing.
     */
    timePeriod?: any[] | boolean | Period | number | number | null | string;
}

/**
 * Broad category of this product.
 */
export enum ProductCategory {
    BiologicalAgent = "biologicalAgent",
    Cells = "cells",
    Fluid = "fluid",
    Organ = "organ",
    Tissue = "tissue",
}

/**
 * Whether the product is currently available.
 */
export enum FhirBiologicallyDerivedProductStatus {
    Available = "available",
    Unavailable = "unavailable",
}

export interface BiologicallyDerivedProductStorage {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for scale
     */
    _scale?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for temperature
     */
    _temperature?: any[] | boolean | Element | number | number | null | string;
    /**
     * Description of storage.
     */
    description?: string;
    /**
     * Storage timeperiod.
     */
    duration?: any[] | boolean | Period | number | number | null | string;
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
     * Temperature scale used.
     */
    scale?: Scale;
    /**
     * Storage temperature.
     */
    temperature?: number;
}

/**
 * Temperature scale used.
 */
export enum Scale {
    Celsius = "celsius",
    Farenheit = "farenheit",
    Kelvin = "kelvin",
}