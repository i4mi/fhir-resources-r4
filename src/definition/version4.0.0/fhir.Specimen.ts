import { Element,
         Identifier, 
         CodeableConcept,
         Extension,
         Meta,
         Annotation,
         Reference,
         Narrative,
         Period,
         Duration,
         Quantity} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirSpecimen } from "./file";
//
//   const fhirSpecimen = Convert.toFhirSpecimen(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Specimen {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for receivedTime
     */
    _receivedTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily
     * the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * Details concerning the specimen collection.
     */
    collection?: any[] | boolean | SpecimenCollection | number | number | null | string;
    /**
     * A mode or state of being that describes the nature of the specimen.
     */
    condition?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Specimen | number | null | string>;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in
     * tube in tray in rack is not addressed here.
     */
    container?: Array<any[] | boolean | SpecimenContainer | number | number | null | string>;
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
     * Id for specimen.
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
     * To communicate any details or issues about the specimen or during the specimen
     * collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Reference to the parent (source) specimen which is used when the specimen was either
     * derived from or a component of another specimen.
     */
    parent?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: Array<any[] | boolean | SpecimenProcessing | number | number | null | string>;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string;
    /**
     * Details concerning a service request that required a specimen to be collected.
     */
    request?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * This is a Specimen resource
     */
    resourceType: any;
    /**
     * The availability of the specimen.
     */
    status?: FhirSpecimenStatus;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the
     * source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The kind of material that forms the specimen.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SpecimenCollection {
    /**
     * Extensions for collectedDateTime
     */
    _collectedDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Anatomical location from which the specimen was collected (if subject is a patient). This
     * is the target site.  This element is not used for environmental specimens.
     */
    bodySite?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Person who collected the specimen.
     */
    collector?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Abstinence or reduction from some or all food, drink, or both, for a period of time prior
     * to sample collection.
     */
    fastingStatusCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Abstinence or reduction from some or all food, drink, or both, for a period of time prior
     * to sample collection.
     */
    fastingStatusDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
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
     * The quantity of specimen collected; for instance the volume of a blood sample, or the
     * physical measurement of an anatomic pathology sample.
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
}

export interface SpecimenContainer {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin,
     * Citrate, EDTA.
     */
    additiveCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin,
     * Citrate, EDTA.
     */
    additiveReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Textual description of the container.
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
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned
     * identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
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
     * The quantity of specimen in the container; may be volume, dimensions, or other
     * appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
}

export interface SpecimenProcessing {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for timeDateTime
     */
    _timeDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Material used in the processing step.
     */
    additive?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * Textual description of procedure.
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
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the
     * time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the
     * time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: any[] | boolean | Period | number | number | null | string;
}

/**
 * The availability of the specimen.
 */
export enum FhirSpecimenStatus {
    Available = "available",
    EnteredInError = "entered-in-error",
    Unavailable = "unavailable",
    Unsatisfactory = "unsatisfactory",
}