import { Element, ContactPoint, Extension, Meta, Narrative } from "./fhir._";
export interface Subscription {
    /**
     * Extensions for criteria
     */
    _criteria?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for end
     */
    _end?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for error
     */
    _error?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for reason
     */
    _reason?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: any[] | boolean | SubscriptionChannel | number | number | null | string;
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
    contained?: Array<any[] | boolean | Subscription | number | null | string>;
    /**
     * The rules that the server should use to determine when to generate notifications for this
     * subscription.
     */
    criteria?: string;
    /**
     * The time for the server to turn the subscription off.
     */
    end?: string;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string;
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
     * A description of why this subscription is defined.
     */
    reason?: string;
    /**
     * This is a Subscription resource
     */
    resourceType: any;
    /**
     * The status of the subscription, which marks the server state for managing the
     * subscription.
     */
    status?: FhirSubscriptionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface SubscriptionChannel {
    /**
     * Extensions for endpoint
     */
    _endpoint?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for header
     */
    _header?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for payload
     */
    _payload?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * The url that describes the actual end-point to send messages to.
     */
    endpoint?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
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
     * The mime type to send the payload in - either application/fhir+xml, or
     * application/fhir+json. If the payload is not present, then there is no payload in the
     * notification, just a notification. The mime type "text/plain" may also be used for Email
     * and SMS subscriptions.
     */
    payload?: string;
    /**
     * The type of channel to send notifications on.
     */
    type?: SubscriptionChannelType;
}
/**
 * The type of channel to send notifications on.
 */
export declare enum SubscriptionChannelType {
    Email = "email",
    Message = "message",
    RESTHook = "rest-hook",
    SMS = "sms",
    Websocket = "websocket"
}
/**
 * The status of the subscription, which marks the server state for managing the
 * subscription.
 */
export declare enum FhirSubscriptionStatus {
    Active = "active",
    Error = "error",
    Off = "off",
    Requested = "requested"
}
