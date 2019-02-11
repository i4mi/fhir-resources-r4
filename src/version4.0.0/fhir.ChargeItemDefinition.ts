import { Element,
         CodeableConcept, 
         ContactDetail,
         Period,
         Extension,
         Identifier,
         Reference,
         Meta,
         Narrative,
         UsageContext,
         Money} from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirChargeItemDefinition } from "./file";
//
//   const fhirChargeItemDefinition = Convert.toFhirChargeItemDefinition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ChargeItemDefinition {
    /**
     * Extensions for approvalDate
     */
    _approvalDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for derivedFromUri
     */
    _derivedFromUri?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for experimental
     */
    _experimental?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for publisher
     */
    _publisher?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for status
     */
    _status?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for url
     */
    _url?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for version
     */
    _version?: any[] | boolean | Element | number | number | null | string;
    /**
     * Expressions that describe applicability criteria for the billing code.
     */
    applicability?: Array<any[] | boolean | ChargeItemDefinitionApplicability | number | number | null | string>;
    /**
     * The date on which the resource content was approved by the publisher. Approval happens
     * once when the content is officially approved for usage.
     */
    approvalDate?: string;
    /**
     * The defined billing details in this resource pertain to the given billing code.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ChargeItemDefinition | number | null | string>;
    /**
     * A copyright statement relating to the charge item definition and/or its contents.
     * Copyright statements are generally legal restrictions on the use and publishing of the
     * charge item definition.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the charge item definition was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the charge item
     * definition changes.
     */
    date?: string;
    /**
     * The URL pointing to an externally-defined charge item definition that is adhered to in
     * whole or in part by this definition.
     */
    derivedFromUri?: string[];
    /**
     * A free text natural language description of the charge item definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * The period during which the charge item definition content was or is planned to be in
     * active use.
     */
    effectivePeriod?: any[] | boolean | Period | number | number | null | string;
    /**
     * A Boolean value to indicate that this charge item definition is authored for testing
     * purposes (or education/evaluation/marketing) and is not intended to be used for genuine
     * usage.
     */
    experimental?: boolean;
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
     * A formal identifier that is used to identify this charge item definition when it is
     * represented in other formats, or referenced in a specification, model, design or an
     * instance.
     */
    identifier?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * The defined billing details in this resource pertain to the given product instance(s).
     */
    instance?: Array<any[] | boolean | Reference | number | number | null | string>;
    /**
     * A legal or geographic region in which the charge item definition is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The date on which the resource content was last reviewed. Review happens periodically
     * after approval but does not change the original approval date.
     */
    lastReviewDate?: string;
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
     * A larger definition of which this particular definition is a component or step.
     */
    partOf?: string[];
    /**
     * Group of properties which are applicable under the same conditions. If no applicability
     * rules are established for the group, then all properties always apply.
     */
    propertyGroup?: Array<any[] | boolean | ChargeItemDefinitionPropertyGroup | number | number | null | string>;
    /**
     * The name of the organization or individual that published the charge item definition.
     */
    publisher?: string;
    /**
     * As new versions of a protocol or guideline are defined, allows identification of what
     * versions are replaced by a new instance.
     */
    replaces?: string[];
    /**
     * This is a ChargeItemDefinition resource
     */
    resourceType: any;
    /**
     * The current state of the ChargeItemDefinition.
     */
    status?: FhirChargeItemDefinitionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the charge item definition.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this charge item definition when it is
     * referenced in a specification, model, design or an instance; also called its canonical
     * identifier. This SHOULD be globally unique and SHOULD be a literal address at which at
     * which an authoritative instance of this charge item definition is (or will be) published.
     * This URL can be the target of a canonical reference. It SHALL remain the same when the
     * charge item definition is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate charge item definition instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the charge item definition when
     * it is referenced in a specification, model, design or instance. This is an arbitrary
     * value managed by the charge item definition author and is not expected to be globally
     * unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not
     * available. There is also no expectation that versions can be placed in a lexicographical
     * sequence. To provide a version consistent with the Decision Support Service
     * specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on
     * versioning knowledge assets, refer to the Decision Support Service specification. Note
     * that a version is required for non-experimental active assets.
     */
    version?: string;
}

export interface ChargeItemDefinitionApplicability {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for expression
     */
    _expression?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * A brief, natural language description of the condition that effectively communicates the
     * intended semantics.
     */
    description?: string;
    /**
     * An expression that returns true or false, indicating whether the condition is satisfied.
     * When using FHIRPath expressions, the %context environment variable must be replaced at
     * runtime with the ChargeItem resource to which this definition is applied.
     */
    expression?: string;
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
     * The media type of the language for the expression, e.g. "text/cql" for Clinical Query
     * Language expressions or "text/fhirpath" for FHIRPath expressions.
     */
    language?: string;
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

export interface ChargeItemDefinitionPropertyGroup {
    /**
     * Expressions that describe applicability criteria for the priceComponent.
     */
    applicability?: Array<any[] | boolean | ChargeItemDefinitionApplicability | number | number | null | string>;
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
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions
     * that apply in certain conditions. A ChargeItemDefinition resource that defines the
     * prices, factors and conditions that apply to a billing code is currently under
     * development. The priceComponent element can be used to offer transparency to the
     * recipient of the Invoice of how the prices have been calculated.
     */
    priceComponent?: Array<any[] | boolean | ChargeItemDefinitionPriceComponent | number | number | null | string>;
}

export interface ChargeItemDefinitionPriceComponent {
    /**
     * Extensions for factor
     */
    _factor?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for type
     */
    _type?: any[] | boolean | Element | number | number | null | string;
    /**
     * The amount calculated for this component.
     */
    amount?: any[] | boolean | Money | number | number | null | string;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of
     * taxes, surcharges, discounts etc.
     */
    code?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The factor that has been applied on the base price for calculating this component.
     */
    factor?: number;
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
     * This code identifies the type of the component.
     */
    type?: string;
}

/**
 * The current state of the ChargeItemDefinition.
 */
export enum FhirChargeItemDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}