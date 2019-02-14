import { Element, ContactPoint, Extension, Identifier, CodeableConcept, Reference, Meta, Annotation, Quantity, Narrative, Attachment } from "./fhir._";
export interface DeviceDefinition {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for manufacturerString
     */
    _manufacturerString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for modelNumber
     */
    _modelNumber?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for onlineInformation
     */
    _onlineInformation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Device capabilities.
     */
    capability?: Array<any[] | boolean | DeviceDefinitionCapability | number | number | null | string>;
    /**
     * Contact details for an organization or a particular human that is responsible for the
     * device.
     */
    contact?: Array<any[] | boolean | ContactPoint | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | DeviceDefinition | number | null | string>;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: Array<any[] | boolean | DeviceDefinitionDeviceName | number | number | null | string>;
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
     * Unique instance identifiers assigned to a device by the software, manufacturers, other
     * organizations or owners. For example: handle ID.
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
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: Array<any[] | boolean | DeviceDefinitionMaterial | number | number | null | string>;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: any[] | boolean | Meta | number | number | null | string;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Descriptive information, usage information or implantation information that is not
     * captured in an existing element.
     */
    note?: Array<any[] | boolean | Annotation | number | number | null | string>;
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: string;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the
     * device.
     */
    owner?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: any[] | boolean | ProdCharacteristic | number | number | null | string;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation
     * status, time properties.
     */
    property?: Array<any[] | boolean | DeviceDefinitionProperty | number | number | null | string>;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present
     * in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * This is a DeviceDefinition resource
     */
    resourceType: any;
    /**
     * Safety characteristics of the device.
     */
    safety?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: Array<any[] | boolean | ProductShelfLife | number | number | null | string>;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a
     * particular purpose, and used for the communication.
     */
    specialization?: Array<any[] | boolean | DeviceDefinitionSpecialization | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * What kind of device or device system this is.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device
     * may include multiple udiCarriers as it either may include just the udiCarrier for the
     * jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: Array<any[] | boolean | DeviceDefinitionUdiDeviceIdentifier | number | number | null | string>;
    /**
     * A network address on which the device may be contacted directly.
     */
    url?: string;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[];
}
export interface DeviceDefinitionCapability {
    /**
     * Description of capability.
     */
    description?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
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
     * Type of capability.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface DeviceDefinitionDeviceName {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
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
export declare enum DeviceDefinitionDeviceNameType {
    ManufacturerName = "manufacturer-name",
    ModelName = "model-name",
    Other = "other",
    PatientReportedName = "patient-reported-name",
    UdiLabelName = "udi-label-name",
    UserFriendlyName = "user-friendly-name"
}
export interface DeviceDefinitionMaterial {
    /**
     * Extensions for allergenicIndicator
     */
    _allergenicIndicator?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for alternate
     */
    _alternate?: any[] | boolean | Element | number | number | null | string;
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
     * The substance.
     */
    substance: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface ProdCharacteristic {
    /**
     * Extensions for color
     */
    _color?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for imprint
     */
    _imprint?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for shape
     */
    _shape?: any[] | boolean | Element | number | number | null | string;
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall
     * be used The term and the term identifier shall be used.
     */
    color?: string[];
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its
     * unit of measurement The unit of measurement shall be specified in accordance with ISO
     * 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be
     * specified by regional implementations.
     */
    image?: Array<any[] | boolean | Attachment | number | number | null | string>;
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: string[];
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
     * Where applicable, the nominal volume can be specified using a numerical value and its
     * unit of measurement The unit of measurement shall be specified in accordance with ISO
     * 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall
     * be used The term and the term identifier shall be used.
     */
    scoring?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall
     * be used The term and the term identifier shall be used.
     */
    shape?: string;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of
     * measurement The unit of measurement shall be specified in accordance with ISO 11240 and
     * the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: any[] | boolean | Quantity | number | number | null | string;
}
export interface DeviceDefinitionProperty {
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
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: Array<any[] | boolean | Quantity | number | number | null | string>;
}
export interface ProductShelfLife {
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
     * Unique identifier for the packaged Medicinal Product.
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
     * The shelf life time period can be specified using a numerical value for the period of
     * time and its unit of time measurement The unit of measurement shall be specified in
     * accordance with ISO 11240 and the resulting terminology The symbol and the symbol
     * identifier shall be used.
     */
    period: any[] | boolean | Quantity | number | number | null | string;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled
     * vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life
     * of the packaged Medicinal Product itself, shelf life after transformation where necessary
     * and shelf life after the first opening of a bottle, etc. The shelf life type shall be
     * specified using an appropriate controlled vocabulary The controlled term and the
     * controlled term identifier shall be specified.
     */
    type: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface DeviceDefinitionSpecialization {
    /**
     * Extensions for systemType
     */
    _systemType?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
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
     * The standard that is used to operate and communicate.
     */
    systemType?: string;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string;
}
export interface DeviceDefinitionUdiDeviceIdentifier {
    /**
     * Extensions for deviceIdentifier
     */
    _deviceIdentifier?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for issuer
     */
    _issuer?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for jurisdiction
     */
    _jurisdiction?: any[] | boolean | Element | number | number | null | string;
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
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
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
    modifierExtension?: Array<any[] | boolean | Extension | number | number | null | string>;
}
