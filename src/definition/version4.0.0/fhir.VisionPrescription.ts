import { Element,
         Reference, 
         Extension, 
         Identifier, 
         Meta, 
         Narrative, 
         Quantity, 
         Annotation, 
         CodeableConcept } from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirVisionPrescription } from "./file";
//
//   const fhirVisionPrescription = Convert.toFhirVisionPrescription(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface VisionPrescription {
    /**
     * Extensions for created
     */
    _created?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for dateWritten
     */
    _dateWritten?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | VisionPrescription | number | null | string>;
    /**
     * The date this resource was created.
     */
    created?: string;
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: string;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between
     * patient and health care provider during which the prescription was issued.
     */
    encounter?: any[] | boolean | Reference | number | number | null | string;
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
     * A unique identifier assigned to this vision prescription.
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
     * Contain the details of  the individual lens specifications and serves as the
     * authorization for the fullfillment by certified professionals.
     */
    lensSpecification: Array<any[] | boolean | VisionPrescriptionLensSpecification | number | number | null | string>;
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
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: any[] | boolean | Reference | number | number | null | string;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: any[] | boolean | Reference | number | number | null | string;
    /**
     * This is a VisionPrescription resource
     */
    resourceType: any;
    /**
     * The status of the resource instance.
     */
    status?: string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface VisionPrescriptionLensSpecification {
    /**
     * Extensions for add
     */
    _add?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for axis
     */
    _axis?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for backCurve
     */
    _backCurve?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for brand
     */
    _brand?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for color
     */
    _color?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for cylinder
     */
    _cylinder?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for diameter
     */
    _diameter?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for eye
     */
    _eye?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for power
     */
    _power?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sphere
     */
    _sphere?: any[] | boolean | Element | number | number | null | string;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number;
    /**
     * Adjustment for astigmatism measured in integer degrees.
     */
    axis?: number;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string;
    /**
     * Special color or pattern.
     */
    color?: string;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The eye for which the lens specification applies.
     */
    eye?: Eye;
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
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: Array<any[] | boolean | VisionPrescriptionPrism | number | number | null | string>;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Lens power measured in dioptres (0.25 units).
     */
    sphere?: number;
}

/**
 * The eye for which the lens specification applies.
 */
export enum Eye {
    Left = "left",
    Right = "right",
}

export interface VisionPrescriptionPrism {
    /**
     * Extensions for amount
     */
    _amount?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for base
     */
    _base?: any[] | boolean | Element | number | number | null | string;
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount?: number;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base?: Base;
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
}

/**
 * The relative base, or reference lens edge, for the prism.
 */
export enum Base {
    Down = "down",
    In = "in",
    Out = "out",
    Up = "up",
}