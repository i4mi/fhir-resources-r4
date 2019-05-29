import {
    Element,
    Reference,
    Extension,
    Identifier,
    Meta,
    Narrative,
    Quantity,
    Annotation,
    CodeableConcept
} from "./fhir._";

export interface VisionPrescription {
    /**
     * Extensions for created
     */
    _created?: Element;
    /**
     * Extensions for dateWritten
     */
    _dateWritten?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: VisionPrescription[];
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
    encounter?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this vision prescription.
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
     * Contain the details of  the individual lens specifications and serves as the
     * authorization for the fullfillment by certified professionals.
     */
    lensSpecification?: VisionPrescriptionLensSpecification[];
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
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient?: Reference;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: Reference;
    /**
     * This is a VisionPrescription resource
     */
    resourceType?: any;
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
    text?: Narrative;
}

/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export interface VisionPrescriptionLensSpecification {
    /**
     * Extensions for add
     */
    _add?: Element;
    /**
     * Extensions for axis
     */
    _axis?: Element;
    /**
     * Extensions for backCurve
     */
    _backCurve?: Element;
    /**
     * Extensions for brand
     */
    _brand?: Element;
    /**
     * Extensions for color
     */
    _color?: Element;
    /**
     * Extensions for cylinder
     */
    _cylinder?: Element;
    /**
     * Extensions for diameter
     */
    _diameter?: Element;
    /**
     * Extensions for eye
     */
    _eye?: Element;
    /**
     * Extensions for power
     */
    _power?: Element;
    /**
     * Extensions for sphere
     */
    _sphere?: Element;
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
    duration?: Quantity;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
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
    modifierExtension?: Extension[];
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: Annotation[];
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: VisionPrescriptionPrism[];
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product?: CodeableConcept;
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

/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export interface VisionPrescriptionPrism {
    /**
     * Extensions for amount
     */
    _amount?: Element;
    /**
     * Extensions for base
     */
    _base?: Element;
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
 * The relative base, or reference lens edge, for the prism.
 */
export enum Base {
    Down = "down",
    In = "in",
    Out = "out",
    Up = "up",
}