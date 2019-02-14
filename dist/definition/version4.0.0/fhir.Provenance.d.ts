import { Element, CodeableConcept, Extension, Reference, Meta, Period, Signature, Narrative } from "./fhir._";
export interface Provenance {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for occurredDateTime
     */
    _occurredDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for policy
     */
    _policy?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for recorded
     */
    _recorded?: any[] | boolean | Element | number | number | null | string;
    /**
     * An activity is something that occurs over a period of time and acts upon or with
     * entities; it may include consuming, processing, transforming, modifying, relocating,
     * using, or generating entities.
     */
    activity?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * An actor taking a role in an activity  for which it can be assigned some degree of
     * responsibility for the activity taking place.
     */
    agent: Array<any[] | boolean | ProvenanceAgent | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Provenance | number | null | string>;
    /**
     * An entity used in this activity.
     */
    entity?: Array<any[] | boolean | ProvenanceEntity | number | number | null | string>;
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
     * Where the activity occurred, if relevant.
     */
    location?: any[] | boolean | Reference | number | number | null | string;
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
     * The period during which the activity occurred.
     */
    occurredDateTime?: string;
    /**
     * The period during which the activity occurred.
     */
    occurredPeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * Policy or plan the activity was defined by. Typically, a single activity may have
     * multiple applicable policy documents, such as patient consent, guarantor funding, etc.
     */
    policy?: string[];
    /**
     * The reason that the activity was taking place.
     */
    reason?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The instant of time at which the activity was recorded.
     */
    recorded?: string;
    /**
     * This is a Provenance resource
     */
    resourceType: any;
    /**
     * A digital signature on the target Reference(s). The signer should match a
     * Provenance.agent. The purpose of the signature is indicated.
     */
    signature?: Array<any[] | boolean | Signature | number | number | null | string>;
    /**
     * The Reference(s) that were generated or updated by  the activity described in this
     * resource. A provenance can point to more than one target if multiple resources were
     * created/updated by the same activity.
     */
    target: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface ProvenanceAgent {
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
     * The individual, device, or organization for whom the change was made.
     */
    onBehalfOf?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The function of the agent with respect to the activity. The security role enabling the
     * agent with respect to the activity.
     */
    role?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The participation the agent had with respect to the activity.
     */
    type?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The individual, device or organization that participated in the event.
     */
    who: any[] | boolean | Reference | number | number | null | string;
}
export interface ProvenanceEntity {
    /**
     * Extensions for role
     */
    _role?: any[] | boolean | Element | number | number | null | string;
    /**
     * The entity is attributed to an agent to express the agent's responsibility for that
     * entity, possibly along with other agents. This description can be understood as shorthand
     * for saying that the agent was responsible for the activity which generated the entity.
     */
    agent?: Array<any[] | boolean | ProvenanceAgent | number | number | null | string>;
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
     * How the entity was used during the activity.
     */
    role?: Role;
    /**
     * Identity of the  Entity used. May be a logical or physical uri and maybe absolute or
     * relative.
     */
    what: any[] | boolean | Reference | number | number | null | string;
}
/**
 * How the entity was used during the activity.
 */
export declare enum Role {
    Derivation = "derivation",
    Quotation = "quotation",
    Removal = "removal",
    Revision = "revision",
    Source = "source"
}
