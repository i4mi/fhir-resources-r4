import {
    Element,
    Extension,
    CodeableConcept,
    Timing,
    Meta,
    Reference,
    Narrative,
    Signature
} from "./fhir._";

export interface VerificationResult {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for lastPerformed
     */
    _lastPerformed?: Element;
    /**
     * Extensions for nextScheduled
     */
    _nextScheduled?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for statusDate
     */
    _statusDate?: Element;
    /**
     * Extensions for targetLocation
     */
    _targetLocation?: Element[];
    /**
     * Information about the entity attesting to information.
     */
    attestation?: VerificationResultAttestation;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: VerificationResult[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: CodeableConcept;
    /**
     * Frequency of revalidation.
     */
    frequency?: Timing;
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
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string;
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
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: CodeableConcept;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: VerificationResultPrimarySource[];
    /**
     * This is a VerificationResult resource
     */
    resourceType?: any;
    /**
     * The validation status of the target (attested; validated; in process; requires
     * revalidation; validation failed; revalidation failed).
     */
    status?: string;
    /**
     * When the validation status was updated.
     */
    statusDate?: string;
    /**
     * A resource that was validated.
     */
    target?: Reference[];
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * The primary process by which the target is validated (edit check; value set; primary
     * source; multiple sources; standalone; in context).
     */
    validationProcess?: CodeableConcept[];
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: CodeableConcept;
    /**
     * Information about the entity validating information.
     */
    validator?: VerificationResultValidator[];
}

/**
 * Information about the entity attesting to information.
 *
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface VerificationResultAttestation {
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for proxyIdentityCertificate
     */
    _proxyIdentityCertificate?: Element;
    /**
     * Extensions for sourceIdentityCertificate
     */
    _sourceIdentityCertificate?: Element;
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: CodeableConcept;
    /**
     * The date the information was attested to.
     */
    date?: string;
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
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: Reference;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested
     * information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit
     * attested information on behalf of the attestation source.
     */
    proxySignature?: Signature;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: Signature;
    /**
     * The individual or organization attesting to information.
     */
    who?: Reference;
}

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface VerificationResultPrimarySource {
    /**
     * Extensions for validationDate
     */
    _validationDate?: Element;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: CodeableConcept;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: CodeableConcept[];
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
     * Type of alerts/updates the primary source can send (specific requested changes; any
     * changes; as defined by source).
     */
    pushTypeAvailable?: CodeableConcept[];
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal
     * Service; Relationship owner; Registration Authority; legal source; issuing source;
     * authoritative source).
     */
    type?: CodeableConcept[];
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string;
    /**
     * Status of the validation of the target against the primary source (successful; failed;
     * unknown).
     */
    validationStatus?: CodeableConcept;
    /**
     * Reference to the primary source.
     */
    who?: Reference;
}

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface VerificationResultValidator {
    /**
     * Extensions for identityCertificate
     */
    _identityCertificate?: Element;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: Signature;
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
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string;
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
     * Reference to the organization validating information.
     */
    organization?: Reference;
}