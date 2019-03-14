import {
    Element,
    CodeableConcept,
    Extension,
    Meta,
    Narrative,
    Quantity,
    Attachment,
    Range
} from "./fhir._";

export interface SubstancePolymer {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for modification
     */
    _modification?: Element[];
    /**
     * Todo.
     */
    class?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: SubstancePolymer[];
    /**
     * Todo.
     */
    copolymerConnectivity?: CodeableConcept[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Todo.
     */
    geometry?: CodeableConcept;
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
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
    /**
     * Todo.
     */
    modification?: string[];
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
     * Todo.
     */
    monomerSet?: SubstancePolymerMonomerSet[];
    /**
     * Todo.
     */
    repeat?: SubstancePolymerRepeat[];
    /**
     * This is a SubstancePolymer resource
     */
    resourceType?: any;
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
 * Todo.
 */
export interface SubstancePolymerMonomerSet {
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
    /**
     * Todo.
     */
    ratioType?: CodeableConcept;
    /**
     * Todo.
     */
    startingMaterial?: SubstancePolymerStartingMaterial[];
}

/**
 * Todo.
 */
export interface SubstancePolymerStartingMaterial {
    /**
     * Extensions for isDefining
     */
    _isDefining?: Element;
    /**
     * Todo.
     */
    amount?: SubstanceAmount;
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
     * Todo.
     */
    isDefining?: boolean;
    /**
     * Todo.
     */
    material?: CodeableConcept;
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
     * Todo.
     */
    type?: CodeableConcept;
}

/**
 * Todo.
 *
 * Chemical substances are a single substance type whose primary defining element is the
 * molecular structure. Chemical substances shall be defined on the basis of their complete
 * covalent molecular structure; the presence of a salt (counter-ion) and/or solvates
 * (water, alcohols) is also captured. Purity, grade, physical form or particle size are not
 * taken into account in the definition of a chemical substance or in the assignment of a
 * Substance ID.
 */
export interface SubstanceAmount {
    /**
     * Extensions for amountString
     */
    _amountString?: Element;
    /**
     * Extensions for amountText
     */
    _amountText?: Element;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given,
     * the arithmetic mean would be the average. If only a single definite value for a given
     * element is given, it would be captured in this field.
     */
    amountQuantity?: Quantity;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given,
     * the arithmetic mean would be the average. If only a single definite value for a given
     * element is given, it would be captured in this field.
     */
    amountRange?: Range;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given,
     * the arithmetic mean would be the average. If only a single definite value for a given
     * element is given, it would be captured in this field.
     */
    amountString?: string;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: string;
    /**
     * Most elements that require a quantitative value will also have a field called amount
     * type. Amount type should always be specified because the actual value of the amount is
     * often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or
     * molecular fragments it is essential to indicate whether the amount refers to a mole ratio
     * or weight ratio. For any given element an effort should be made to use same the amount
     * type for all related definitional elements.
     */
    amountType?: CodeableConcept;
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
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: SubstanceAmountReferenceRange;
}

/**
 * Reference range of possible or expected values.
 *
 * Chemical substances are a single substance type whose primary defining element is the
 * molecular structure. Chemical substances shall be defined on the basis of their complete
 * covalent molecular structure; the presence of a salt (counter-ion) and/or solvates
 * (water, alcohols) is also captured. Purity, grade, physical form or particle size are not
 * taken into account in the definition of a chemical substance or in the assignment of a
 * Substance ID.
 */
export interface SubstanceAmountReferenceRange {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Upper limit possible or expected.
     */
    highLimit?: Quantity;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: Quantity;
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
 * Todo.
 */
export interface SubstancePolymerRepeat {
    /**
     * Extensions for averageMolecularFormula
     */
    _averageMolecularFormula?: Element;
    /**
     * Extensions for numberOfUnits
     */
    _numberOfUnits?: Element;
    /**
     * Todo.
     */
    averageMolecularFormula?: string;
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
    /**
     * Todo.
     */
    numberOfUnits?: number;
    /**
     * Todo.
     */
    repeatUnit?: SubstancePolymerRepeatUnit[];
    /**
     * Todo.
     */
    repeatUnitAmountType?: CodeableConcept;
}

/**
 * Todo.
 */
export interface SubstancePolymerRepeatUnit {
    /**
     * Extensions for repeatUnit
     */
    _repeatUnit?: Element;
    /**
     * Todo.
     */
    amount?: SubstanceAmount;
    /**
     * Todo.
     */
    degreeOfPolymerisation?: SubstancePolymerDegreeOfPolymerisation[];
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
    /**
     * Todo.
     */
    orientationOfPolymerisation?: CodeableConcept;
    /**
     * Todo.
     */
    repeatUnit?: string;
    /**
     * Todo.
     */
    structuralRepresentation?: SubstancePolymerStructuralRepresentation[];
}

/**
 * Todo.
 */
export interface SubstancePolymerDegreeOfPolymerisation {
    /**
     * Todo.
     */
    amount?: SubstanceAmount;
    /**
     * Todo.
     */
    degree?: CodeableConcept;
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
 * Todo.
 */
export interface SubstancePolymerStructuralRepresentation {
    /**
     * Extensions for representation
     */
    _representation?: Element;
    /**
     * Todo.
     */
    attachment?: Attachment;
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
    /**
     * Todo.
     */
    representation?: string;
    /**
     * Todo.
     */
    type?: CodeableConcept;
}