import {
    Element,
    CodeableConcept,
    Extension,
    Identifier,
    Meta,
    Reference,
    Narrative,
    Quantity,
    Ratio,
    Attachment,
    Range
} from "./fhir._";

export interface SubstanceSpecification {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for description
     */
    _description?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Codes associated with the substance.
     */
    code?: SubstanceSpecificationCode[];
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: SubstanceSpecification[];
    /**
     * Textual description of the substance.
     */
    description?: string;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: CodeableConcept;
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
     * Identifier by which this substance is known.
     */
    identifier?: Identifier;
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
     * Moiety, for structural modifications.
     */
    moiety?: SubstanceSpecificationMoiety[];
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: SubstanceSpecificationMolecularWeight[];
    /**
     * Names applicable to this substance.
     */
    name?: SubstanceSpecificationName[];
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: Reference;
    /**
     * Data items specific to polymers.
     */
    polymer?: Reference;
    /**
     * General specifications for this substance, including how it is related to other
     * substances.
     */
    property?: SubstanceSpecificationProperty[];
    /**
     * Data items specific to proteins.
     */
    protein?: Reference;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: Reference;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: SubstanceSpecificationRelationship[];
    /**
     * This is a SubstanceSpecification resource
     */
    resourceType?: any;
    /**
     * Supporting literature.
     */
    source?: Reference[];
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: Reference;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: CodeableConcept;
    /**
     * Structural information.
     */
    structure?: SubstanceSpecificationStructure;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationCode {
    /**
     * Extensions for comment
     */
    _comment?: Element;
    /**
     * Extensions for statusDate
     */
    _statusDate?: Element;
    /**
     * The specific code.
     */
    code?: CodeableConcept;
    /**
     * Any comment can be provided in this field, if necessary.
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
    /**
     * Supporting literature.
     */
    source?: Reference[];
    /**
     * Status of the code assignment.
     */
    status?: CodeableConcept;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationMoiety {
    /**
     * Extensions for amountString
     */
    _amountString?: Element;
    /**
     * Extensions for molecularFormula
     */
    _molecularFormula?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: Quantity;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string;
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
     * Identifier by which this moiety substance is known.
     */
    identifier?: Identifier;
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
     * Molecular formula.
     */
    molecularFormula?: string;
    /**
     * Textual name for this moiety substance.
     */
    name?: string;
    /**
     * Optical activity type.
     */
    opticalActivity?: CodeableConcept;
    /**
     * Role that the moiety is playing.
     */
    role?: CodeableConcept;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 *
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export interface SubstanceSpecificationMolecularWeight {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given,
     * the arithmetic mean would be the average. If only a single definite value for a given
     * element is given, it would be captured in this field.
     */
    amount?: Quantity;
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
     * The method by which the molecular weight was determined.
     */
    method?: CodeableConcept;
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
     * Type of molecular weight such as exact, average (also known as. number average), weight
     * average.
     */
    type?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationName {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for preferred
     */
    _preferred?: Element;
    /**
     * The use context of this name for example if there is a different name a drug active
     * ingredient as opposed to a food colour additive.
     */
    domain?: CodeableConcept[];
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
     * The jurisdiction where this name applies.
     */
    jurisdiction?: CodeableConcept[];
    /**
     * Language of the name.
     */
    language?: CodeableConcept[];
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
     * The actual name.
     */
    name?: string;
    /**
     * Details of the official nature of this name.
     */
    official?: SubstanceSpecificationOfficial[];
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean;
    /**
     * Supporting literature.
     */
    source?: Reference[];
    /**
     * The status of the name.
     */
    status?: CodeableConcept;
    /**
     * A synonym of this name.
     */
    synonym?: SubstanceSpecificationName[];
    /**
     * A translation for this name.
     */
    translation?: SubstanceSpecificationName[];
    /**
     * Name type.
     */
    type?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationOfficial {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Which authority uses this official name.
     */
    authority?: CodeableConcept;
    /**
     * Date of official name change.
     */
    date?: string;
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
     * The status of the official name.
     */
    status?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationProperty {
    /**
     * Extensions for amountString
     */
    _amountString?: Element;
    /**
     * Extensions for parameters
     */
    _parameters?: Element;
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: Quantity;
    /**
     * Quantitative value for this property.
     */
    amountString?: string;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: CodeableConcept;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: CodeableConcept;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in
     * alcohol).
     */
    definingSubstanceCodeableConcept?: CodeableConcept;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in
     * alcohol).
     */
    definingSubstanceReference?: Reference;
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
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured
     * at 20C with a pH of 7.1).
     */
    parameters?: string;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationRelationship {
    /**
     * Extensions for amountString
     */
    _amountString?: Element;
    /**
     * Extensions for isDefining
     */
    _isDefining?: Element;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: Quantity;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: Range;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: Ratio;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: Ratio;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
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
     * For example where an enzyme strongly bonds with a particular substance, this is a
     * defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean;
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
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: CodeableConcept;
    /**
     * Supporting literature.
     */
    source?: Reference[];
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: CodeableConcept;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: Reference;
}

/**
 * Structural information.
 *
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationStructure {
    /**
     * Extensions for molecularFormula
     */
    _molecularFormula?: Element;
    /**
     * Extensions for molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: Element;
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
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic
     * ratio.
     */
    isotope?: SubstanceSpecificationIsotope[];
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
     * Molecular formula.
     */
    molecularFormula?: string;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then
     * alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: SubstanceSpecificationMolecularWeight;
    /**
     * Optical activity type.
     */
    opticalActivity?: CodeableConcept;
    /**
     * Molecular structural representation.
     */
    representation?: SubstanceSpecificationRepresentation[];
    /**
     * Supporting literature.
     */
    source?: Reference[];
    /**
     * Stereochemistry type.
     */
    stereochemistry?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationIsotope {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: Quantity;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: Identifier;
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
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: SubstanceSpecificationMolecularWeight;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: CodeableConcept;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: CodeableConcept;
}

/**
 * The detailed description of a substance, typically at a level beyond what is used for
 * prescribing.
 */
export interface SubstanceSpecificationRepresentation {
    /**
     * Extensions for representation
     */
    _representation?: Element;
    /**
     * An attached file with the structural representation.
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
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: CodeableConcept;
}