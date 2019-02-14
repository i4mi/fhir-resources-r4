import { Element,
         Coding, 
         ContactPoint,
         Extension,
         Identifier,
         Reference,
         Meta,
         CodeableConcept,
         Period,
         Narrative} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirEndpoint } from "./file";
//
//   const fhirEndpoint = Convert.toFhirEndpoint(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Endpoint {
    /**
     * Extensions for address
     */
    _address?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for header
     */
    _header?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for payloadMimeType
     */
    _payloadMimeType?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * The uri that describes the actual end-point to connect to.
     */
    address?: string;
    /**
     * A coded value that represents the technical details of the usage of this endpoint, such
     * as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).
     */
    connectionType: any[] | boolean | Coding | number | number | null | string;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this
     * for system administrator troubleshooting.
     */
    contact?: Array<any[] | boolean | ContactPoint | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Endpoint | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Additional headers / information to send as part of the notification.
     */
    header?: string[];
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifier for the organization that is used to identify the endpoint across multiple
     * disparate systems.
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
     * The organization that manages this endpoint (even if technically another organization is
     * hosting this in the cloud, it is the organization associated with the data).
     */
    managingOrganization?: any[] | boolean | Reference | number | number | null | string;
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
     * A friendly name that this endpoint can be referred to with.
     */
    name?: string;
    /**
     * The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json.
     * If the mime type is not specified, then the sender could send any content (including no
     * content depending on the connectionType).
     */
    payloadMimeType?: string[];
    /**
     * The payload type describes the acceptable content that can be communicated on the
     * endpoint.
     */
    payloadType: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The interval during which the endpoint is expected to be operational.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * This is a Endpoint resource
     */
    resourceType: any;
    /**
     * active | suspended | error | off | test.
     */
    status?: FhirEndpointStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

/**
 * active | suspended | error | off | test.
 */
export enum FhirEndpointStatus {
    Active = "active",
    EnteredInError = "entered-in-error",
    Error = "error",
    Off = "off",
    Suspended = "suspended",
    Test = "test",
}