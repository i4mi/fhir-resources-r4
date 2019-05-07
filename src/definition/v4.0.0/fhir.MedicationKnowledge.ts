import {
    Element,
    Quantity,
    Reference,
    CodeableConcept,
    Extension,
    Meta,
    Narrative,
    Dosage,
    Money,
    Ratio,
    Duration
} from "./fhir._";

export interface MedicationKnowledge {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for preparationInstruction
     */
    _preparationInstruction?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for synonym
     */
    _synonym?: Element[];
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];
    /**
     * Specific amount of the drug in the packaged product.  For example, when specifying a
     * product that has the same strength (For example, Insulin glargine 100 unit per mL
     * solution for injection), this attribute provides additional clarification of the package
     * amount (For example, 3 mL, 10mL, etc.).
     */
    amount?: Quantity;
    /**
     * Associated or related medications.  For example, if the medication is a branded product
     * (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a
     * generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g.
     * Crestor).
     */
    associatedMedication?: Reference[];
    /**
     * A code that specifies this medication, or a textual description if no code is available.
     * Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED
     * CT, IDMP etc. It could also be a national or local formulary code, optionally with
     * translations to other code systems.
     */
    code?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: MedicationKnowledge[];
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug
     * interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: Reference[];
    /**
     * The price of the medication.
     */
    cost?: MedicationKnowledgeCost[];
    /**
     * Describes the form of the item.  Powder; tablets; capsule.
     */
    doseForm?: CodeableConcept;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];
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
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: MedicationKnowledgeIngredient[];
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: CodeableConcept[];
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a
     * medication from the body.
     */
    kinetics?: MedicationKnowledgeKinetics[];
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not
     * intended to represent the distributor of a medication product.
     */
    manufacturer?: Reference;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: MedicationKnowledgeMedicineClassification[];
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
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: MedicationKnowledgeMonitoringProgram[];
    /**
     * Associated documentation about the medication.
     */
    monograph?: MedicationKnowledgeMonograph[];
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: MedicationKnowledgePackaging;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic
     * product, innovator product, etc.).
     */
    productType?: CodeableConcept[];
    /**
     * Regulatory information about a medication.
     */
    regulatory?: MedicationKnowledgeRegulatory[];
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];
    /**
     * This is a MedicationKnowledge resource
     */
    resourceType?: any;
    /**
     * A code to indicate if the medication is in active use.  The status refers to the validity
     * about the information of the medication and not to its medicinal properties.
     */
    status?: string;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in
     * different countries.  For example, acetaminophen and paracetamol or salbutamol and
     * albuterol.
     */
    synonym?: string[];
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
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeAdministrationGuidelines {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: MedicationKnowledgeDosage[];
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
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: CodeableConcept;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: Reference;
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
     * Characteristics of the patient that are relevant to the administration guidelines (for
     * example, height, weight, gender, etc.).
     */
    patientCharacteristics?: MedicationKnowledgePatientCharacteristics[];
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeDosage {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: Dosage[];
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
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgePatientCharacteristics {
    /**
     * Extensions for value
     */
    _value?: Element[];
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height,
     * weight, gender).
     */
    characteristicCodeableConcept?: CodeableConcept;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height,
     * weight, gender).
     */
    characteristicQuantity?: Quantity;
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
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: string[];
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeCost {
    /**
     * Extensions for source
     */
    _source?: Element;
    /**
     * The price of the medication.
     */
    cost?: Money;
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
     * The source or owner that assigns the price to the medication.
     */
    source?: string;
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost,
     * claim reimbursement cost, actual acquisition cost.
     */
    type?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeDrugCharacteristic {
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: Element;
    /**
     * Extensions for valueString
     */
    _valueString?: Element;
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
     * A code specifying which characteristic of the medicine is being described (for example,
     * colour, shape, imprint).
     */
    type?: CodeableConcept;
    /**
     * Description of the characteristic.
     */
    valueBase64Binary?: string;
    /**
     * Description of the characteristic.
     */
    valueCodeableConcept?: CodeableConcept;
    /**
     * Description of the characteristic.
     */
    valueQuantity?: Quantity;
    /**
     * Description of the characteristic.
     */
    valueString?: string;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeIngredient {
    /**
     * Extensions for isActive
     */
    _isActive?: Element;
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
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: CodeableConcept;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: Reference;
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
     * Specifies how many (or how much) of the items there are in this Medication.  For example,
     * 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the
     * denominator is 1 tablet.
     */
    strength?: Ratio;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeKinetics {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: Quantity[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The time required for any specified property (e.g., the concentration of a substance in
     * the body) to decrease by half.
     */
    halfLifePeriod?: Duration;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: Quantity[];
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
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeMedicineClassification {
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive,
     * antibiotic, etc.).
     */
    classification?: CodeableConcept[];
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
     * The type of category for the medication (for example, therapeutic classification,
     * therapeutic sub-classification).
     */
    type?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeMonitoringProgram {
    /**
     * Extensions for name
     */
    _name?: Element;
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
     * Name of the reviewing program.
     */
    name?: string;
    /**
     * Type of program under which the medication is monitored.
     */
    type?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeMonograph {
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
     * Associated documentation about the medication.
     */
    source?: Reference;
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient
     * education monograph).
     */
    type?: CodeableConcept;
}

/**
 * Information that only applies to packages (not products).
 *
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgePackaging {
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
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: Quantity;
    /**
     * A code that defines the specific type of packaging that the medication can be found in
     * (e.g. blister sleeve, tube, bottle).
     */
    type?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeRegulatory {
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
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: MedicationKnowledgeMaxDispense;
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
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority?: Reference;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: MedicationKnowledgeSchedule[];
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory
     * perspective.
     */
    substitution?: MedicationKnowledgeSubstitution[];
}

/**
 * The maximum number of units of the medication that can be dispensed in a period.
 *
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeMaxDispense {
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
     * The period that applies to the maximum number of units.
     */
    period?: Duration;
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity?: Quantity;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeSchedule {
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
     * Specifies the specific drug schedule.
     */
    schedule?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeSubstitution {
    /**
     * Extensions for allowed
     */
    _allowed?: Element;
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed?: boolean;
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
     * Specifies the type of substitution allowed.
     */
    type?: CodeableConcept;
}

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledgeRelatedMedicationKnowledge {
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
     * Associated documentation about the associated medication knowledge.
     */
    reference?: Reference[];
    /**
     * The category of the associated medication knowledge reference.
     */
    type?: CodeableConcept;
}