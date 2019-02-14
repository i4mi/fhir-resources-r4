import { Element, ContactPoint, Reference, Extension, Identifier, Meta, Annotation, CodeableConcept, Narrative, Quantity } from "./fhir._";
export interface Device {
    /**
     * Extensions for distinctIdentifier
     */
    _distinctIdentifier?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for expirationDate
     */
    _expirationDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lotNumber
     */
    _lotNumber?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for manufactureDate
     */
    _manufactureDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for manufacturer
     */
    _manufacturer?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for modelNumber
     */
    _modelNumber?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for partNumber
     */
    _partNumber?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for serialNumber
     */
    _serialNumber?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
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
    contained?: Array<any[] | boolean | Device | number | null | string>;
    /**
     * The reference to the definition for the device.
     */
    definition?: any[] | boolean | Reference | number | number | null | string;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a
     * UDI label, or by a person describing the Device.  This typically would be used when a
     * person provides the name(s) or when the device represents one of the names available from
     * DeviceDefinition.
     */
    deviceName?: Array<any[] | boolean | DeviceDeviceName | number | number | null | string>;
    /**
     * The distinct identification string as required by regulation for a human cell, tissue, or
     * cellular and tissue-based product.
     */
    distinctIdentifier?: string;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if
     * applicable).
     */
    expirationDate?: string;
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
     * Unique instance identifiers assigned to a device by manufacturers other organizations or
     * owners.
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
     * The place where the device can be found.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string;
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
     * An organization that is responsible for the provision and ongoing maintenance of the
     * device.
     */
    owner?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The parent device.
     */
    parent?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The part number of the device.
     */
    partNumber?: string;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation
     * status, time properties.
     */
    property?: Array<any[] | boolean | DeviceProperty | number | number | null | string>;
    /**
     * This is a Device resource
     */
    resourceType: any;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices
     * containing latex.
     */
    safety?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The serial number assigned by the organization when the device was manufactured.
     */
    serialNumber?: string;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a
     * particular purpose, and used for the communication.
     */
    specialization?: Array<any[] | boolean | DeviceSpecialization | number | number | null | string>;
    /**
     * Status of the Device availability.
     */
    status?: FhirDeviceStatus;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * The kind or type of device.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device
     * may include multiple udiCarriers as it either may include just the udiCarrier for the
     * jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiCarrier?: Array<any[] | boolean | DeviceUdiCarrier | number | number | null | string>;
    /**
     * A network address on which the device may be contacted directly.
     */
    url?: string;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: Array<any[] | boolean | DeviceVersion | number | number | null | string>;
}
export interface DeviceDeviceName {
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
    type?: DeviceDeviceNameType;
}
/**
 * The type of deviceName.
 * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
export declare enum DeviceDeviceNameType {
    ManufacturerName = "manufacturer-name",
    ModelName = "model-name",
    Other = "other",
    PatientReportedName = "patient-reported-name",
    UdiLabelName = "udi-label-name",
    UserFriendlyName = "user-friendly-name"
}
export interface DeviceProperty {
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
export interface DeviceSpecialization {
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
    systemType: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string;
}
/**
 * Status of the Device availability.
 */
export declare enum FhirDeviceStatus {
    Active = "active",
    EnteredInError = "entered-in-error",
    Inactive = "inactive",
    Unknown = "unknown"
}
export interface DeviceUdiCarrier {
    /**
     * Extensions for carrierAIDC
     */
    _carrierAIDC?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for carrierHRF
     */
    _carrierHRF?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for deviceIdentifier
     */
    _deviceIdentifier?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for entryType
     */
    _entryType?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for issuer
     */
    _issuer?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for jurisdiction
     */
    _jurisdiction?: any[] | boolean | Element | number | number | null | string;
    /**
     * The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology
     * representation of the barcode string as printed on the packaging of the device - e.g., a
     * barcode or RFID.   Because of limitations on character sets in XML and the need to
     * round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
     */
    carrierAIDC?: string;
    /**
     * The full UDI carrier as the human readable form (HRF) representation of the barcode
     * string as printed on the packaging of the device.
     */
    carrierHRF?: string;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the
     * labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: EntryType;
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
     * Organization that is charged with issuing UDIs for devices.  For example, the US FDA
     * issuers include :
     * 1) GS1:
     * http://hl7.org/fhir/NamingSystem/gs1-di,
     * 2) HIBCC:
     * http://hl7.org/fhir/NamingSystem/hibcc-dI,
     * 3) ICCBBA for blood containers:
     * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
     * 4) ICCBA for other devices:
     * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
     */
    issuer?: string;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All
     * UDIs are globally unique within a single namespace with the appropriate repository uri as
     * the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is
     * http://hl7.org/fhir/NamingSystem/fda-udi.
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
/**
 * A coded entry to indicate how the data was entered.
 */
export declare enum EntryType {
    Barcode = "barcode",
    Card = "card",
    Manual = "manual",
    RFID = "rfid",
    SelfReported = "self-reported",
    Unknown = "unknown"
}
export interface DeviceVersion {
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
    /**
     * A single component of the device version.
     */
    component?: any[] | boolean | Identifier | number | number | null | string;
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
     * The type of the device version.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The version text.
     */
    value?: string;
}
