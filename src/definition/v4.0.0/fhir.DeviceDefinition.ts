import {
    Element,
    ContactPoint,
    Extension,
    Identifier,
    CodeableConcept,
    Reference,
    Meta,
    Annotation,
    Quantity,
    Narrative,
    ProdCharacteristic,
    ProductShelfLife
} from "./fhir._";

export interface DeviceDefinition {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for manufacturerString
     */
    _manufacturerString?: Element;
    /**
     * Extensions for modelNumber
     */
    _modelNumber?: Element;
    /**
     * Extensions for onlineInformation
     */
    _onlineInformation?: Element;
    /**
     * Extensions for url
     */
    _url?: Element;
    /**
     * Extensions for version
     */
    _version?: Element[];
    /**
     * Device capabilities.
     */
    capability?: DeviceDefinitionCapability[];
    /**
     * Contact details for an organization or a particular human that is responsible for the
     * device.
     */
    contact?: ContactPoint[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: DeviceDefinition[];
    /**
     * A name given to the device to identify it.
     */
    deviceName?: DeviceDefinitionDeviceName[];
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
     * Unique instance identifiers assigned to a device by the software, manufacturers, other
     * organizations or owners. For example: handle ID.
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
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: CodeableConcept[];
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: Reference;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: DeviceDefinitionMaterial[];
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
    /**
     * The model number for the device.
     */
    modelNumber?: string;
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
     * Descriptive information, usage information or implantation information that is not
     * captured in an existing element.
     */
    note?: Annotation[];
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: string;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the
     * device.
     */
    owner?: Reference;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: Reference;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: ProdCharacteristic;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation
     * status, time properties.
     */
    property?: DeviceDefinitionProperty[];
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present
     * in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: Quantity;
    /**
     * This is a DeviceDefinition resource
     */
    resourceType?: any;
    /**
     * Safety characteristics of the device.
     */
    safety?: CodeableConcept[];
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: ProductShelfLife[];
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a
     * particular purpose, and used for the communication.
     */
    specialization?: DeviceDefinitionSpecialization[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * What kind of device or device system this is.
     */
    type?: CodeableConcept;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device
     * may include multiple udiCarriers as it either may include just the udiCarrier for the
     * jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];
    /**
     * A network address on which the device may be contacted directly.
     */
    url?: string;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[];
}

/**
 * The characteristics, operational status and capabilities of a medical-related component
 * of a medical device.
 */
export interface DeviceDefinitionCapability {
    /**
     * Description of capability.
     */
    description?: CodeableConcept[];
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
     * Type of capability.
     */
    type?: CodeableConcept;
}

/**
 * The characteristics, operational status and capabilities of a medical-related component
 * of a medical device.
 */
export interface DeviceDefinitionDeviceName {
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for type
     */
    _type?: Element;
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
     * The name of the device.
     */
    name?: string;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type?: DeviceDefinitionDeviceNameType;
}

/**
 * The type of deviceName.
 * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
export enum DeviceDefinitionDeviceNameType {
    ManufacturerName = "manufacturer-name",
    ModelName = "model-name",
    Other = "other",
    PatientReportedName = "patient-reported-name",
    UdiLabelName = "udi-label-name",
    UserFriendlyName = "user-friendly-name",
}

/**
 * The characteristics, operational status and capabilities of a medical-related component
 * of a medical device.
 */
export interface DeviceDefinitionMaterial {
    /**
     * Extensions for allergenicIndicator
     */
    _allergenicIndicator?: Element;
    /**
     * Extensions for alternate
     */
    _alternate?: Element;
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean;
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
     * The substance.
     */
    substance?: CodeableConcept;
}

/**
 * The characteristics, operational status and capabilities of a medical-related component
 * of a medical device.
 */
export interface DeviceDefinitionProperty {
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
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type?: CodeableConcept;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: CodeableConcept[];
    /**
     * Property value as a quantity.
     */
    valueQuantity?: Quantity[];
}

/**
 * The characteristics, operational status and capabilities of a medical-related component
 * of a medical device.
 */
export interface DeviceDefinitionSpecialization {
    /**
     * Extensions for systemType
     */
    _systemType?: Element;
    /**
     * Extensions for version
     */
    _version?: Element;
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
     * The standard that is used to operate and communicate.
     */
    systemType?: string;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string;
}

/**
 * The characteristics, operational status and capabilities of a medical-related component
 * of a medical device.
 */
export interface DeviceDefinitionUdiDeviceIdentifier {
    /**
     * Extensions for deviceIdentifier
     */
    _deviceIdentifier?: Element;
    /**
     * Extensions for issuer
     */
    _issuer?: Element;
    /**
     * Extensions for jurisdiction
     */
    _jurisdiction?: Element;
    /**
     * The identifier that is to be associated with every Device that references this
     * DeviceDefintiion for the issuer and jurisdication porvided in the
     * DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier?: string;
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
     * The organization that assigns the identifier algorithm.
     */
    issuer?: string;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction?: string;
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
