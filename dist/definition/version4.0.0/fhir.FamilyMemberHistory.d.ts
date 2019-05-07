import { Element, Age, Range, Period, CodeableConcept, Extension, Identifier, Meta, Annotation, Reference, Narrative } from "./fhir._";
export interface FamilyMemberHistory {
    /**
     * Extensions for ageString
     */
    _ageString?: Element;
    /**
     * Extensions for bornDate
     */
    _bornDate?: Element;
    /**
     * Extensions for bornString
     */
    _bornString?: Element;
    /**
     * Extensions for date
     */
    _date?: Element;
    /**
     * Extensions for deceasedBoolean
     */
    _deceasedBoolean?: Element;
    /**
     * Extensions for deceasedDate
     */
    _deceasedDate?: Element;
    /**
     * Extensions for deceasedString
     */
    _deceasedString?: Element;
    /**
     * Extensions for estimatedAge
     */
    _estimatedAge?: Element;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: Element;
    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: Element[];
    /**
     * Extensions for language
     */
    _language?: Element;
    /**
     * Extensions for name
     */
    _name?: Element;
    /**
     * Extensions for status
     */
    _status?: Element;
    /**
     * The age of the relative at the time the family member history is recorded.
     */
    ageAge?: Age;
    /**
     * The age of the relative at the time the family member history is recorded.
     */
    ageRange?: Range;
    /**
     * The age of the relative at the time the family member history is recorded.
     */
    ageString?: string;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: string;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornPeriod?: Period;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating
     * section to allow a system to represent more than one condition per resource, though there
     * is nothing stopping multiple resources - one per condition.
     */
    condition?: FamilyMemberHistoryCondition[];
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: FamilyMemberHistory[];
    /**
     * Describes why the family member's history is not available.
     */
    dataAbsentReason?: CodeableConcept;
    /**
     * The date (and possibly time) when the family member history was recorded or last updated.
     */
    date?: string;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for
     * the family member history record.
     */
    deceasedAge?: Age;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for
     * the family member history record.
     */
    deceasedBoolean?: boolean;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for
     * the family member history record.
     */
    deceasedDate?: string;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for
     * the family member history record.
     */
    deceasedRange?: Range;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for
     * the family member history record.
     */
    deceasedString?: string;
    /**
     * If true, indicates that the age value specified is an estimated value.
     */
    estimatedAge?: boolean;
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
     * Business identifiers assigned to this family member history by the performer or other
     * systems which remain constant as the resource is updated and propagates from server to
     * server.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that
     * is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesCanonical?: string[];
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other
     * definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesUri?: string[];
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
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red
     * hair".
     */
    name?: string;
    /**
     * This property allows a non condition-specific note to the made about the related person.
     * Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: Annotation[];
    /**
     * The person who this history concerns.
     */
    patient?: Reference;
    /**
     * Describes why the family member history occurred in coded or textual form.
     */
    reasonCode?: CodeableConcept[];
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that
     * justifies this family member history event.
     */
    reasonReference?: Reference[];
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship?: CodeableConcept;
    /**
     * This is a FamilyMemberHistory resource
     */
    resourceType?: any;
    /**
     * The birth sex of the family member.
     */
    sex?: CodeableConcept;
    /**
     * A code specifying the status of the record of the family history of a specific family
     * member.
     */
    status?: FamilyMemberHistoryStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
}
/**
 * Significant health conditions for a person related to the patient relevant in the context
 * of care for the patient.
 */
export interface FamilyMemberHistoryCondition {
    /**
     * Extensions for contributedToDeath
     */
    _contributedToDeath?: Element;
    /**
     * Extensions for onsetString
     */
    _onsetString?: Element;
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a
     * less specific string like 'cancer' depending on how much is known about the condition and
     * the capabilities of the creating system.
     */
    code?: CodeableConcept;
    /**
     * This condition contributed to the cause of death of the related person. If
     * contributedToDeath is not populated, then it is unknown.
     */
    contributedToDeath?: boolean;
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
     * An area where general notes can be placed about this specific condition.
     */
    note?: Annotation[];
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.
     * For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: Age;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.
     * For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: Period;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.
     * For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: Range;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.
     * For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: string;
    /**
     * Indicates what happened following the condition.  If the condition resulted in death,
     * deceased date is captured on the relation.
     */
    outcome?: CodeableConcept;
}
/**
 * A code specifying the status of the record of the family history of a specific family
 * member.
 */
export declare enum FamilyMemberHistoryStatus {
    Completed = "completed",
    EnteredInError = "entered-in-error",
    HealthUnknown = "health-unknown",
    Partial = "partial"
}
