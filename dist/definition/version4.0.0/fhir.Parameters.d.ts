import { Element, Extension, Address, Age, Annotation, Attachment, CodeableConcept, Coding, ContactDetail, ContactPoint, Contributor, Count, DataRequirement, Distance, Dosage, Duration, Expression, HumanName, Identifier, Money, ParameterDefinition, Period, Quantity, Ratio, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, UsageContext, Meta, Range } from "./fhir._";
export interface ParametersParameter {
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueCode
     */
    _valueCode?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDate
     */
    _valueDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueId
     */
    _valueId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueOid
     */
    _valueOid?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueString
     */
    _valueString?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueTime
     */
    _valueTime?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUri
     */
    _valueUri?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: any[] | boolean | Element | number | number | null | string;
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
     * The name of the parameter (reference to the operation definition).
     */
    name?: string;
    /**
     * A named part of a multi-part parameter.
     */
    part?: Array<any[] | boolean | ParametersParameter | number | number | null | string>;
    /**
     * If the parameter is a whole resource.
     */
    resource?: any[] | boolean | Parameters | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: any[] | boolean | Address | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueAge?: any[] | boolean | Age | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueAnnotation?: any[] | boolean | Annotation | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueBase64Binary?: string;
    /**
     * If the parameter is a data type.
     */
    valueBoolean?: boolean;
    /**
     * If the parameter is a data type.
     */
    valueCanonical?: string;
    /**
     * If the parameter is a data type.
     */
    valueCode?: string;
    /**
     * If the parameter is a data type.
     */
    valueCodeableConcept?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: any[] | boolean | Coding | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueContactDetail?: any[] | boolean | ContactDetail | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: any[] | boolean | ContactPoint | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueContributor?: any[] | boolean | Contributor | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueCount?: any[] | boolean | Count | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueDataRequirement?: any[] | boolean | DataRequirement | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueDate?: string;
    /**
     * If the parameter is a data type.
     */
    valueDateTime?: string;
    /**
     * If the parameter is a data type.
     */
    valueDecimal?: number;
    /**
     * If the parameter is a data type.
     */
    valueDistance?: any[] | boolean | Distance | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueDosage?: any[] | boolean | Dosage | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueDuration?: any[] | boolean | Duration | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueExpression?: any[] | boolean | Expression | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: any[] | boolean | HumanName | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueId?: string;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueInstant?: string;
    /**
     * If the parameter is a data type.
     */
    valueInteger?: number;
    /**
     * If the parameter is a data type.
     */
    valueMarkdown?: string;
    /**
     * If the parameter is a data type.
     */
    valueMoney?: any[] | boolean | Money | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueOid?: string;
    /**
     * If the parameter is a data type.
     */
    valueParameterDefinition?: any[] | boolean | ParameterDefinition | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valuePositiveInt?: number;
    /**
     * If the parameter is a data type.
     */
    valueQuantity?: any[] | boolean | Quantity | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueRange?: any[] | boolean | Range | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueRatio?: any[] | boolean | Ratio | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueRelatedArtifact?: any[] | boolean | RelatedArtifact | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueSampledData?: any[] | boolean | SampledData | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueSignature?: any[] | boolean | Signature | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueString?: string;
    /**
     * If the parameter is a data type.
     */
    valueTime?: string;
    /**
     * If the parameter is a data type.
     */
    valueTiming?: any[] | boolean | Timing | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueTriggerDefinition?: any[] | boolean | TriggerDefinition | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueUnsignedInt?: number;
    /**
     * If the parameter is a data type.
     */
    valueUri?: string;
    /**
     * If the parameter is a data type.
     */
    valueUrl?: string;
    /**
     * If the parameter is a data type.
     */
    valueUsageContext?: any[] | boolean | UsageContext | number | number | null | string;
    /**
     * If the parameter is a data type.
     */
    valueUuid?: string;
}
export interface Parameters {
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
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
     * A parameter passed to or received from the operation.
     */
    parameter?: Array<any[] | boolean | ParametersParameter | number | number | null | string>;
    /**
     * This is a Parameters resource
     */
    resourceType: any;
}
