import { Element,
         CodeableConcept, 
         Extension, 
         Identifier, 
         Meta, 
         Reference, 
         Narrative, 
         Quantity,
         Ratio, 
         Attachment } from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirSubstanceSpecification } from "./file";
//
//   const fhirSubstanceSpecification = Convert.toFhirSubstanceSpecification(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SubstanceSpecification {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
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
     * Codes associated with the substance.
     */
    code?: Array<any[] | boolean | SubstanceSpecificationCode | number | number | null | string>;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | SubstanceSpecification | number | null | string>;
    /**
     * Textual description of the substance.
     */
    description?: string;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Identifier by which this substance is known.
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
     * Moiety, for structural modifications.
     */
    moiety?: Array<any[] | boolean | SubstanceSpecificationMoiety | number | number | null | string>;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: Array<any[] | boolean | SubstanceSpecificationMolecularWeight | number | number | null | string>;
    /**
     * Names applicable to this substance.
     */
    name?: Array<any[] | boolean | SubstanceSpecificationName | number | number | null | string>;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Data items specific to polymers.
     */
    polymer?: any[] | boolean | Reference | number | number | null | string;
    /**
     * General specifications for this substance, including how it is related to other
     * substances.
     */
    property?: Array<any[] | boolean | SubstanceSpecificationProperty | number | number | null | string>;
    /**
     * Data items specific to proteins.
     */
    protein?: any[] | boolean | Reference | number | number | null | string;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: Array<any[] | boolean | SubstanceSpecificationRelationship | number | number | null | string>;
    /**
     * This is a SubstanceSpecification resource
     */
    resourceType: any;
    /**
     * Supporting literature.
     */
    source?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Structural information.
     */
    structure?: any[] | boolean | SubstanceSpecificationStructure | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationCode {
    /**
     * Extensions for comment
     */
    _comment?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for statusDate
     */
    _statusDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * The specific code.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Supporting literature.
     */
    source?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Status of the code assignment.
     */
    status?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string;
}

export interface SubstanceSpecificationMoiety {
    /**
     * Extensions for amountString
     */
    _amountString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for molecularFormula
     */
    _molecularFormula?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: any[] | boolean | Quantity | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Identifier by which this moiety substance is known.
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
    opticalActivity?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Role that the moiety is playing.
     */
    role?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationMolecularWeight {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given,
     * the arithmetic mean would be the average. If only a single definite value for a given
     * element is given, it would be captured in this field.
     */
    amount?: any[] | boolean | Quantity | number | number | null | string;
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
     * The method by which the molecular weight was determined.
     */
    method?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Type of molecular weight such as exact, average (also known as. number average), weight
     * average.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationName {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for preferred
     */
    _preferred?: any[] | boolean | Element | number | number | null | string;
    /**
     * The use context of this name for example if there is a different name a drug active
     * ingredient as opposed to a food colour additive.
     */
    domain?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The jurisdiction where this name applies.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Language of the name.
     */
    language?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * The actual name.
     */
    name?: string;
    /**
     * Details of the official nature of this name.
     */
    official?: Array<any[] | boolean | SubstanceSpecificationOfficial | number | number | null | string>;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean;
    /**
     * Supporting literature.
     */
    source?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * The status of the name.
     */
    status?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A synonym of this name.
     */
    synonym?: Array<any[] | boolean | SubstanceSpecificationName | number | number | null | string>;
    /**
     * A translation for this name.
     */
    translation?: Array<any[] | boolean | SubstanceSpecificationName | number | number | null | string>;
    /**
     * Name type.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationOfficial {
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Which authority uses this official name.
     */
    authority?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The status of the official name.
     */
    status?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationProperty {
    /**
     * Extensions for amountString
     */
    _amountString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for parameters
     */
    _parameters?: any[] | boolean | Element | number | number | null | string;
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Quantitative value for this property.
     */
    amountString?: string;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in
     * alcohol).
     */
    definingSubstanceCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in
     * alcohol).
     */
    definingSubstanceReference?: any[] | boolean | Reference | number | number | null | string;
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
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured
     * at 20C with a pH of 7.1).
     */
    parameters?: string;
}

export interface SubstanceSpecificationRelationship {
    /**
     * Extensions for amountString
     */
    _amountString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for isDefining
     */
    _isDefining?: any[] | boolean | Element | number | number | null | string;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a
     * substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: any[] | boolean | CodeableConcept | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Supporting literature.
     */
    source?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: any[] | boolean | Reference | number | number | null | string;
}

export interface SubstanceSpecificationStructure {
    /**
     * Extensions for molecularFormula
     */
    _molecularFormula?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: any[] | boolean | Element | number | number | null | string;
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
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic
     * ratio.
     */
    isotope?: Array<any[] | boolean | SubstanceSpecificationIsotope | number | number | null | string>;
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
    molecularWeight?: any[] | boolean | SubstanceSpecificationMolecularWeight | number | number | null | string;
    /**
     * Optical activity type.
     */
    opticalActivity?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Molecular structural representation.
     */
    representation?: Array<any[] | boolean | SubstanceSpecificationRepresentation | number | number | null | string>;
    /**
     * Supporting literature.
     */
    source?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationIsotope {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Substance identifier for each non-natural or radioisotope.
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
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: any[] | boolean | SubstanceSpecificationMolecularWeight | number | number | null | string;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SubstanceSpecificationRepresentation {
    /**
     * Extensions for representation
     */
    _representation?: any[] | boolean | Element | number | number | null | string;
    /**
     * An attached file with the structural representation.
     */
    attachment?: any[] | boolean | Attachment | number | number | null | string;
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
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}