import { Element,
         CodeableConcept, 
         Extension,
         Identifier,
         Meta,
         Narrative,
         Duration,
         Quantity,
         Reference,
         Range} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirSpecimenDefinition } from "./file";
//
//   const fhirSpecimenDefinition = Convert.toFhirSpecimenDefinition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SpecimenDefinition {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timeAspect
     */
    _timeAspect?: any[] | boolean | Element | number | number | null | string;
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | SpecimenDefinition | number | null | string>;
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
     * A business identifier associated with the kind of specimen.
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
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * This is a SpecimenDefinition resource
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
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: Array<any[] | boolean | SpecimenDefinitionTypeTested | number | number | null | string>;
}

export interface SpecimenDefinitionTypeTested {
    /**
     * Extensions for isDerived
     */
    _isDerived?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for preference
     */
    _preference?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for requirement
     */
    _requirement?: any[] | boolean | Element | number | number | null | string;
    /**
     * The specimen's container.
     */
    container?: any[] | boolean | SpecimenDefinitionContainer | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature
     * interval, prior the testing process.
     */
    handling?: Array<any[] | boolean | SpecimenDefinitionHandling | number | number | null | string>;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean;
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
     * The preference for this type of conditioned specimen.
     */
    preference?: Preference;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are
     * completed, for the purpose of additional testing.
     */
    retentionTime?: any[] | boolean | Duration | number | number | null | string;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SpecimenDefinitionContainer {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for minimumVolumeString
     */
    _minimumVolumeString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for preparation
     */
    _preparation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the
     * specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: Array<any[] | boolean | SpecimenDefinitionAdditive | number | number | null | string>;
    /**
     * Color of container cap.
     */
    cap?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The textual description of the kind of container.
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
     * The type of material of the container.
     */
    material?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string;
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
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SpecimenDefinitionAdditive {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the
     * specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the
     * specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: any[] | boolean | Reference | number | number | null | string;
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

export interface SpecimenDefinitionHandling {
    /**
     * Extensions for instruction
     */
    _instruction?: any[] | boolean | Element | number | number | null | string;
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
     * Additional textual instructions for the preservation or transport of the specimen. For
     * instance, 'Protect from light exposure'.
     */
    instruction?: string;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: any[] | boolean | Duration | number | number | null | string;
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
     * It qualifies the interval of temperature, which characterizes an occurrence of handling.
     * Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: any[] | boolean | Range | number | number | null | string;
}

/**
 * The preference for this type of conditioned specimen.
 */
export enum Preference {
    Alternate = "alternate",
    Preferred = "preferred",
}