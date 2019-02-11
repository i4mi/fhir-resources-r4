import { Element,
         CodeableConcept, 
         Extension,
         Identifier,
         Reference,
         Meta,
         Narrative,
         Period,
         Quantity,
         Range} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirGroup } from "./file";
//
//   const fhirGroup = Convert.toFhirGroup(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Group {
    /**
     * Extensions for active
     */
    _active?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for actual
     */
    _actual?: any[] | boolean | Element | number | number | null | string;
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
     * Extensions for quantity
     */
    _quantity?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * Indicates whether the record for the group is available for use or is merely being
     * retained for historical purposes.
     */
    active?: boolean;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If
     * false, the group defines a set of intended individuals.
     */
    actual?: boolean;
    /**
     * Identifies traits whose presence r absence is shared by members of the group.
     */
    characteristic?: Array<any[] | boolean | GroupCharacteristic | number | number | null | string>;
    /**
     * Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | Group | number | null | string>;
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
     * A unique business identifier for this group.
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
     * Entity responsible for defining and maintaining Group characteristics and/or registered
     * members.
     */
    managingEntity?: any[] | boolean | Reference | number | number | null | string;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: Array<any[] | boolean | GroupMember | number | number | null | string>;
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
     * A label assigned to the group for human identification and communication.
     */
    name?: string;
    /**
     * A count of the number of resource instances that are part of the group.
     */
    quantity?: number;
    /**
     * This is a Group resource
     */
    resourceType: any;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * Identifies the broad classification of the kind of resources the group includes.
     */
    type?: FhirGroupType;
}

export interface GroupCharacteristic {
    /**
     * Extensions for exclude
     */
    _exclude?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * If true, indicates the characteristic is one that is NOT held by members of the group.
     */
    exclude?: boolean;
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
     * The period over which the characteristic is tested; e.g. the patient had an operation
     * during the month of June.
     */
    period?: any[] | boolean | Period | number | number | null | string;
    /**
     * The value of the trait that holds (or does not hold - see 'exclude') for members of the
     * group.
     */
    valueBoolean?: boolean;
    /**
     * The value of the trait that holds (or does not hold - see 'exclude') for members of the
     * group.
     */
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The value of the trait that holds (or does not hold - see 'exclude') for members of the
     * group.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * The value of the trait that holds (or does not hold - see 'exclude') for members of the
     * group.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * The value of the trait that holds (or does not hold - see 'exclude') for members of the
     * group.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
}

export interface GroupMember {
    /**
     * Extensions for inactive
     */
    _inactive?: any[] | boolean | Element | number | number | null | string;
    /**
     * A reference to the entity that is a member of the group. Must be consistent with
     * Group.type. If the entity is another group, then the type must be the same.
     */
    entity: any[] | boolean | Reference | number | number | null | string;
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
     * A flag to indicate that the member is no longer in the group, but previously may have
     * been a member.
     */
    inactive?: boolean;
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
     * The period that the member was in the group, if known.
     */
    period?: any[] | boolean | Period | number | number | null | string;
}

/**
 * Identifies the broad classification of the kind of resources the group includes.
 */
export enum FhirGroupType {
    Animal = "animal",
    Device = "device",
    Medication = "medication",
    Person = "person",
    Practitioner = "practitioner",
    Substance = "substance",
}