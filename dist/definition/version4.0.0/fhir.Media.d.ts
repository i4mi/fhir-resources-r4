import { Element, Reference, CodeableConcept, Attachment, Period, Extension, Identifier, Meta, Annotation, Narrative } from "./fhir._";
export interface Media {
    /**
     * Extensions for createdDateTime
     */
    _createdDateTime?: Element;
    /**
     * Extensions for deviceName
     */
    _deviceName?: Element;
    /**
     * Extensions for duration
     */
    _duration?: Element;
    /**
     * Extensions for frames
     */
    _frames?: Element;
    /**
     * Extensions for height
     */
    _height?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for issued
     */
    _issued?: Element;
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * Extensions for width
     */
    _width?: Element;
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: Reference[];
    /**
     * Indicates the site on the subject's body where the observation was made (i.e. the target
     * site).
     */
    bodySite?: CodeableConcept;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Media[];
    /**
     * The actual content of the media - inline or by direct reference to the media source file.
     */
    content?: Attachment;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: Period;
    /**
     * The device used to collect the media.
     */
    device?: Reference;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string;
    /**
     * The duration of the recording in seconds - for audio and video.
     */
    duration?: number;
    /**
     * The encounter that establishes the context for this media.
     */
    encounter?: Reference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The number of frames in a photo. This is used with a multi-page fax, or an imaging
     * acquisition context that takes multiple slices in a single image, or an animated gif. If
     * there is more than one frame, this SHALL have a value in order to alert interface
     * software that a multi-frame capable rendering widget is required.
     */
    frames?: number;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * Identifiers associated with the image - these may include identifiers for the image
     * itself, identifiers for the context of its collection (e.g. series ids) and context ids
     * such as accession numbers or other workflow identifiers.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The date and time this version of the media was made available to providers, typically
     * after having been reviewed.
     */
    issued?: string;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If
     * images sourced from a DICOM system, are wrapped in a Media resource, then this is the
     * modality.
     */
    modality?: CodeableConcept;
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
     * Comments made about the media by the performer, subject or other participants.
     */
    note?: Annotation[];
    /**
     * The person who administered the collection of the image.
     */
    operator?: Reference;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: Reference[];
    /**
     * Describes why the event occurred in coded or textual form.
     */
    reasonCode?: CodeableConcept[];
    /**
     * This is a Media resource
     */
    resourceType?: any;
    /**
     * The current state of the {{title}}.
     */
    status?: string;
    /**
     * Who/What this Media is a record of.
     */
    subject?: Reference;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some
     * other media category.
     */
    type?: CodeableConcept;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: CodeableConcept;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number;
}
