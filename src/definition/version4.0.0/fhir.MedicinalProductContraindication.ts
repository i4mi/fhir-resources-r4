import { Element,
         CodeableConcept, 
         Extension,
         Meta,
         Reference,
         Narrative,
         Range } from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirMedicinalProductContraindication } from "./file";
//
//   const fhirMedicinalProductContraindication = Convert.toFhirMedicinalProductContraindication(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MedicinalProductContraindication {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | MedicinalProductContraindication | number | null | string>;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * Information about the use of the medicinal product in relation to other therapies
     * described as part of the indication.
     */
    otherTherapy?: Array<any[] | boolean | MedicinalProductContraindicationOtherTherapy | number | number | null | string>;
    /**
     * The population group to which this applies.
     */
    population?: Array<any[] | boolean | Population | number | number | null | string>;
    /**
     * This is a MedicinalProductContraindication resource
     */
    resourceType: any;
    /**
     * The medication for which this is an indication.
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
    /**
     * Information about the use of the medicinal product in relation to other therapies as part
     * of the indication.
     */
    therapeuticIndication?: Array<any[] | boolean | Reference | number | number | null | string>;
}

export interface MedicinalProductContraindicationOtherTherapy {
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
     * Reference to a specific medication (active substance, medicinal product or class of
     * products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of
     * products) as part of an indication or contraindication.
     */
    medicationReference?: any[] | boolean | Reference | number | number | null | string;
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
     * The type of relationship between the medicinal product indication or contraindication and
     * another therapy.
     */
    therapyRelationshipType: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface Population {
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The age of the specific population.
     */
    ageRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The gender of the specific population.
     */
    gender?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Race of the specific population.
     */
    race?: any[] | boolean | CodeableConcept | number | number | null | string;
}