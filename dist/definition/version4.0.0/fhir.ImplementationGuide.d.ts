import { Element, ContactDetail, Extension, CodeableConcept, Meta, Narrative, UsageContext, Reference } from "./fhir._";
export interface ImplementationGuide {
    /**
     * Extensions for copyright
     */
    _copyright?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for date
     */
    _date?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for experimental
     */
    _experimental?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for license
     */
    _license?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for packageId
     */
    _packageId?: any[] | boolean | Element | number | number | null | string;
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
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<any[] | boolean | ContactDetail | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | ImplementationGuide | number | null | string>;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the
     * implementation guide.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the implementation guide was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the implementation
     * guide changes.
     */
    date?: string;
    /**
     * The information needed by an IG publisher tool to publish the whole implementation guide.
     */
    definition?: any[] | boolean | ImplementationGuideDefinition | number | number | null | string;
    /**
     * Another implementation guide that this implementation depends on. Typically, an
     * implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: Array<any[] | boolean | ImplementationGuideDependsOn | number | number | null | string>;
    /**
     * A free text natural language description of the implementation guide from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A Boolean value to indicate that this implementation guide is authored for testing
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
     * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g.
     * describes how to use. The value of this element is the formal version of the
     * specification, without the revision number, e.g. [publication].[major].[minor], which is
     * 4.0.0. for this version.
     */
    fhirVersion?: FhirVersion[];
    /**
     * A set of profiles that all resources covered by this implementation guide must conform to.
     */
    global?: Array<any[] | boolean | ImplementationGuideGlobal | number | number | null | string>;
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
     * A legal or geographic region in which the implementation guide is intended to be used.
     */
    jurisdiction?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or
     * 'not-open-source'.
     */
    license?: License;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: any[] | boolean | ImplementationGuideManifest | number | number | null | string;
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
     * A natural language name identifying the implementation guide. This name should be usable
     * as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * The NPM package name for this Implementation Guide, used in the NPM package distribution,
     * which is the primary mechanism by which FHIR based tooling manages IG dependencies. This
     * value must be globally unique, and should be assigned with care.
     */
    packageId?: string;
    /**
     * The name of the organization or individual that published the implementation guide.
     */
    publisher?: string;
    /**
     * This is a ImplementationGuide resource
     */
    resourceType: any;
    /**
     * The status of this implementation guide. Enables tracking the life-cycle of the content.
     */
    status?: FhirImplementationGuideStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
    /**
     * A short, descriptive, user-friendly title for the implementation guide.
     */
    title?: string;
    /**
     * An absolute URI that is used to identify this implementation guide when it is referenced
     * in a specification, model, design or an instance; also called its canonical identifier.
     * This SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this implementation guide is (or will be) published. This URL
     * can be the target of a canonical reference. It SHALL remain the same when the
     * implementation guide is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate implementation guide instances.
     */
    useContext?: Array<any[] | boolean | UsageContext | number | number | null | string>;
    /**
     * The identifier that is used to identify this version of the implementation guide when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the implementation guide author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}
export interface ImplementationGuideDefinition {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A logical group of resources. Logical groups can be used when building pages.
     */
    grouping?: Array<any[] | boolean | ImplementationGuideGrouping | number | number | null | string>;
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
     * A page / section in the implementation guide. The root page is the implementation guide
     * home page.
     */
    page?: any[] | boolean | ImplementationGuidePage | number | number | null | string;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: Array<any[] | boolean | ImplementationGuideParameter | number | number | null | string>;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set,
     * structure definition, capability statements etc.) are obvious candidates for inclusion,
     * but any kind of resource can be included as an example resource.
     */
    resource: Array<any[] | boolean | ImplementationGuideResource | number | number | null | string>;
    /**
     * A template for building resources.
     */
    template?: Array<any[] | boolean | ImplementationGuideTemplate | number | number | null | string>;
}
export interface ImplementationGuideGrouping {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Human readable text describing the package.
     */
    description?: string;
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
     * The human-readable title to display for the package of resources when rendering the
     * implementation guide.
     */
    name?: string;
}
export interface ImplementationGuidePage {
    /**
     * Extensions for generation
     */
    _generation?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for nameUrl
     */
    _nameUrl?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * A code that indicates how the page is generated.
     */
    generation?: Generation;
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
     * The source address for the page.
     */
    nameReference?: any[] | boolean | Reference | number | number | null | string;
    /**
     * The source address for the page.
     */
    nameUrl?: string;
    /**
     * Nested Pages/Sections under this page.
     */
    page?: Array<any[] | boolean | ImplementationGuidePage | number | number | null | string>;
    /**
     * A short title used to represent this page in navigational structures such as table of
     * contents, bread crumbs, etc.
     */
    title?: string;
}
/**
 * A code that indicates how the page is generated.
 */
export declare enum Generation {
    Generated = "generated",
    HTML = "html",
    Markdown = "markdown",
    XML = "xml"
}
export interface ImplementationGuideParameter {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for value
     */
    _value?: any[] | boolean | Element | number | number | null | string;
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter |
     * rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code?: Code;
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
     * Value for named type.
     */
    value?: string;
}
/**
 * apply | path-resource | path-pages | path-tx-cache | expansion-parameter |
 * rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
 */
export declare enum Code {
    Apply = "apply",
    ExpansionParameter = "expansion-parameter",
    GenerateJSON = "generate-json",
    GenerateTurtle = "generate-turtle",
    GenerateXML = "generate-xml",
    HTMLTemplate = "html-template",
    PathPages = "path-pages",
    PathResource = "path-resource",
    PathTxCache = "path-tx-cache",
    RuleBrokenLinks = "rule-broken-links"
}
export interface ImplementationGuideResource {
    /**
     * Extensions for description
     */
    _description?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for exampleBoolean
     */
    _exampleBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for exampleCanonical
     */
    _exampleCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for groupingId
     */
    _groupingId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * A description of the reason that a resource has been included in the implementation guide.
     */
    description?: string;
    /**
     * If true or a reference, indicates the resource is an example instance.  If a reference is
     * present, indicates that the example is an example of the specified profile.
     */
    exampleBoolean?: boolean;
    /**
     * If true or a reference, indicates the resource is an example instance.  If a reference is
     * present, indicates that the example is an example of the specified profile.
     */
    exampleCanonical?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are
     * specified, the resource is assumed to apply to all the versions stated in
     * ImplementationGuide.fhirVersion.
     */
    fhirVersion?: FhirVersion[];
    /**
     * Reference to the id of the grouping this resource appears in.
     */
    groupingId?: string;
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
     * A human assigned name for the resource. All resources SHOULD have a name, but the name
     * may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string;
    /**
     * Where this resource is found.
     */
    reference: any[] | boolean | Reference | number | number | null | string;
}
export declare enum FhirVersion {
    The001 = "0.01",
    The005 = "0.05",
    The006 = "0.06",
    The0080 = "0.0.80",
    The0081 = "0.0.81",
    The0082 = "0.0.82",
    The011 = "0.11",
    The040 = "0.4.0",
    The050 = "0.5.0",
    The100 = "1.0.0",
    The101 = "1.0.1",
    The102 = "1.0.2",
    The110 = "1.1.0",
    The140 = "1.4.0",
    The160 = "1.6.0",
    The180 = "1.8.0",
    The300 = "3.0.0",
    The301 = "3.0.1",
    The330 = "3.3.0",
    The350 = "3.5.0",
    The400 = "4.0.0"
}
export interface ImplementationGuideTemplate {
    /**
     * Extensions for code
     */
    _code?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for scope
     */
    _scope?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for source
     */
    _source?: any[] | boolean | Element | number | number | null | string;
    /**
     * Type of template specified.
     */
    code?: string;
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
     * The scope in which the template applies.
     */
    scope?: string;
    /**
     * The source location for the template.
     */
    source?: string;
}
export interface ImplementationGuideDependsOn {
    /**
     * Extensions for packageId
     */
    _packageId?: any[] | boolean | Element | number | number | null | string;
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
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: string;
    /**
     * A canonical reference to the Implementation guide for the dependency.
     */
    uri: string;
    /**
     * The version of the IG that is depended on, when the correct version is required to
     * understand the IG correctly.
     */
    version?: string;
}
export interface ImplementationGuideGlobal {
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
     * A reference to the profile that all instances must conform to.
     */
    profile: string;
    /**
     * The type of resource that all instances must conform to.
     */
    type?: string;
}
/**
 * The license that applies to this Implementation Guide, using an SPDX license code, or
 * 'not-open-source'.
 */
export declare enum License {
    AAL = "AAL",
    ADSL = "ADSL",
    AGPL10Only = "AGPL-1.0-only",
    AGPL10OrLater = "AGPL-1.0-or-later",
    AGPL30Only = "AGPL-3.0-only",
    AGPL30OrLater = "AGPL-3.0-or-later",
    APL10 = "APL-1.0",
    Abstyles = "Abstyles",
    Adobe2006 = "Adobe-2006",
    AdobeGlyph = "Adobe-Glyph",
    Afl11 = "AFL-1.1",
    Afl12 = "AFL-1.2",
    Afl20 = "AFL-2.0",
    Afl21 = "AFL-2.1",
    Afl30 = "AFL-3.0",
    Afmparse = "Afmparse",
    Aladdin = "Aladdin",
    Amdplpa = "AMDPLPA",
    Aml = "AML",
    Ampas = "AMPAS",
    AntlrPD = "ANTLR-PD",
    Apache10 = "Apache-1.0",
    Apache11 = "Apache-1.1",
    Apache20 = "Apache-2.0",
    Apafml = "APAFML",
    Apsl10 = "APSL-1.0",
    Apsl11 = "APSL-1.1",
    Apsl12 = "APSL-1.2",
    Apsl20 = "APSL-2.0",
    Artistic10 = "Artistic-1.0",
    Artistic10Cl8 = "Artistic-1.0-cl8",
    Artistic10PERL = "Artistic-1.0-Perl",
    Artistic20 = "Artistic-2.0",
    BSD1Clause = "BSD-1-Clause",
    BSD2Clause = "BSD-2-Clause",
    BSD2ClauseFreeBSD = "BSD-2-Clause-FreeBSD",
    BSD2ClauseNetBSD = "BSD-2-Clause-NetBSD",
    BSD2ClausePatent = "BSD-2-Clause-Patent",
    BSD3Clause = "BSD-3-Clause",
    BSD3ClauseAttribution = "BSD-3-Clause-Attribution",
    BSD3ClauseClear = "BSD-3-Clause-Clear",
    BSD3ClauseLBNL = "BSD-3-Clause-LBNL",
    BSD3ClauseNoNuclearLicense = "BSD-3-Clause-No-Nuclear-License",
    BSD3ClauseNoNuclearLicense2014 = "BSD-3-Clause-No-Nuclear-License-2014",
    BSD3ClauseNoNuclearWarranty = "BSD-3-Clause-No-Nuclear-Warranty",
    BSD4Clause = "BSD-4-Clause",
    BSD4ClauseUC = "BSD-4-Clause-UC",
    BSDProtection = "BSD-Protection",
    BSDSourceCode = "BSD-Source-Code",
    Bahyph = "Bahyph",
    Barr = "Barr",
    Beerware = "Beerware",
    BitTorrent10 = "BitTorrent-1.0",
    BitTorrent11 = "BitTorrent-1.1",
    Borceux = "Borceux",
    Bsl10 = "BSL-1.0",
    Bzip2105 = "bzip2-1.0.5",
    Bzip2106 = "bzip2-1.0.6",
    CDLAPermissive10 = "CDLA-Permissive-1.0",
    CDLASharing10 = "CDLA-Sharing-1.0",
    CNRIJython = "CNRI-Jython",
    CNRIPython = "CNRI-Python",
    CNRIPythonGPLCompatible = "CNRI-Python-GPL-Compatible",
    CUAOpl10 = "CUA-OPL-1.0",
    Caldera = "Caldera",
    Catosl11 = "CATOSL-1.1",
    Cc010 = "CC0-1.0",
    CcBy10 = "CC-BY-1.0",
    CcBy20 = "CC-BY-2.0",
    CcBy25 = "CC-BY-2.5",
    CcBy30 = "CC-BY-3.0",
    CcBy40 = "CC-BY-4.0",
    CcByNc10 = "CC-BY-NC-1.0",
    CcByNc20 = "CC-BY-NC-2.0",
    CcByNc25 = "CC-BY-NC-2.5",
    CcByNc30 = "CC-BY-NC-3.0",
    CcByNc40 = "CC-BY-NC-4.0",
    CcByNcNd10 = "CC-BY-NC-ND-1.0",
    CcByNcNd20 = "CC-BY-NC-ND-2.0",
    CcByNcNd25 = "CC-BY-NC-ND-2.5",
    CcByNcNd30 = "CC-BY-NC-ND-3.0",
    CcByNcNd40 = "CC-BY-NC-ND-4.0",
    CcByNcSa10 = "CC-BY-NC-SA-1.0",
    CcByNcSa20 = "CC-BY-NC-SA-2.0",
    CcByNcSa25 = "CC-BY-NC-SA-2.5",
    CcByNcSa30 = "CC-BY-NC-SA-3.0",
    CcByNcSa40 = "CC-BY-NC-SA-4.0",
    CcByNd10 = "CC-BY-ND-1.0",
    CcByNd20 = "CC-BY-ND-2.0",
    CcByNd25 = "CC-BY-ND-2.5",
    CcByNd30 = "CC-BY-ND-3.0",
    CcByNd40 = "CC-BY-ND-4.0",
    CcBySa10 = "CC-BY-SA-1.0",
    CcBySa20 = "CC-BY-SA-2.0",
    CcBySa25 = "CC-BY-SA-2.5",
    CcBySa30 = "CC-BY-SA-3.0",
    CcBySa40 = "CC-BY-SA-4.0",
    Cddl10 = "CDDL-1.0",
    Cddl11 = "CDDL-1.1",
    Cecill10 = "CECILL-1.0",
    Cecill11 = "CECILL-1.1",
    Cecill20 = "CECILL-2.0",
    Cecill21 = "CECILL-2.1",
    CecillB = "CECILL-B",
    CecillC = "CECILL-C",
    ClArtistic = "ClArtistic",
    Condor11 = "Condor-1.1",
    Cpal10 = "CPAL-1.0",
    Cpl10 = "CPL-1.0",
    Cpol102 = "CPOL-1.02",
    Crossword = "Crossword",
    CrystalStacker = "CrystalStacker",
    Cube = "Cube",
    Curl = "curl",
    DFsl10 = "D-FSL-1.0",
    Diffmark = "diffmark",
    Doc = "DOC",
    Dotseqn = "Dotseqn",
    Dsdp = "DSDP",
    Dvipdfm = "dvipdfm",
    EGenix = "eGenix",
    EUDatagrid = "EUDatagrid",
    Ecl10 = "ECL-1.0",
    Ecl20 = "ECL-2.0",
    Efl10 = "EFL-1.0",
    Efl20 = "EFL-2.0",
    Entessa = "Entessa",
    Epl10 = "EPL-1.0",
    Epl20 = "EPL-2.0",
    ErlPL11 = "ErlPL-1.1",
    Eupl10 = "EUPL-1.0",
    Eupl11 = "EUPL-1.1",
    Eupl12 = "EUPL-1.2",
    Eurosym = "Eurosym",
    Fair = "Fair",
    Frameworx10 = "Frameworx-1.0",
    FreeImage = "FreeImage",
    Fsfap = "FSFAP",
    Fsful = "FSFUL",
    Fsfullr = "FSFULLR",
    Ftl = "FTL",
    GFDL11Only = "GFDL-1.1-only",
    GFDL11OrLater = "GFDL-1.1-or-later",
    GFDL12Only = "GFDL-1.2-only",
    GFDL12OrLater = "GFDL-1.2-or-later",
    GFDL13Only = "GFDL-1.3-only",
    GFDL13OrLater = "GFDL-1.3-or-later",
    GPL10Only = "GPL-1.0-only",
    GPL10OrLater = "GPL-1.0-or-later",
    GPL20Only = "GPL-2.0-only",
    GPL20OrLater = "GPL-2.0-or-later",
    GPL30Only = "GPL-3.0-only",
    GPL30OrLater = "GPL-3.0-or-later",
    GSOAP13B = "gSOAP-1.3b",
    Giftware = "Giftware",
    Gl2PS = "GL2PS",
    Glide = "Glide",
    Glulxe = "Glulxe",
    Gnuplot = "gnuplot",
    HaskellReport = "HaskellReport",
    Hpnd = "HPND",
    IBMPibs = "IBM-pibs",
    IMatix = "iMatix",
    IPL10 = "IPL-1.0",
    ISC = "ISC",
    Icu = "ICU",
    Ijg = "IJG",
    ImageMagick = "ImageMagick",
    Imlib2 = "Imlib2",
    InfoZIP = "Info-ZIP",
    Intel = "Intel",
    IntelACPI = "Intel-ACPI",
    Interbase10 = "Interbase-1.0",
    Ipa = "IPA",
    JSON = "JSON",
    JasPer20 = "JasPer-2.0",
    LGPL20Only = "LGPL-2.0-only",
    LGPL20OrLater = "LGPL-2.0-or-later",
    LGPL21Only = "LGPL-2.1-only",
    LGPL21OrLater = "LGPL-2.1-or-later",
    LGPL30Only = "LGPL-3.0-only",
    LGPL30OrLater = "LGPL-3.0-or-later",
    LPPL13A = "LPPL-1.3a",
    LPPL13C = "LPPL-1.3c",
    Lal12 = "LAL-1.2",
    Lal13 = "LAL-1.3",
    Latex2E = "Latex2e",
    Leptonica = "Leptonica",
    Lgpllr = "LGPLLR",
    LiLiQP11 = "LiLiQ-P-1.1",
    LiLiQR11 = "LiLiQ-R-1.1",
    LiLiQRplus11 = "LiLiQ-Rplus-1.1",
    Libpng = "Libpng",
    Libtiff = "libtiff",
    LinuxOpenIB = "Linux-OpenIB",
    Lpl10 = "LPL-1.0",
    Lpl102 = "LPL-1.02",
    Lppl10 = "LPPL-1.0",
    Lppl11 = "LPPL-1.1",
    Lppl12 = "LPPL-1.2",
    MIT = "MIT",
    MIT0 = "MIT-0",
    MITAdvertising = "MIT-advertising",
    MITCmu = "MIT-CMU",
    MITEnna = "MIT-enna",
    MITFeh = "MIT-feh",
    MPL10 = "MPL-1.0",
    MPL11 = "MPL-1.1",
    MPL20 = "MPL-2.0",
    MPL20NoCopyleftException = "MPL-2.0-no-copyleft-exception",
    MSPl = "MS-PL",
    MSRl = "MS-RL",
    MakeIndex = "MakeIndex",
    MirOS = "MirOS",
    Mitnfa = "MITNFA",
    Motosoto = "Motosoto",
    Mpich2 = "mpich2",
    Mtll = "MTLL",
    Multics = "Multics",
    Mup = "Mup",
    NCSA = "NCSA",
    NPL10 = "NPL-1.0",
    NPL11 = "NPL-1.1",
    NTP = "NTP",
    Nasa13 = "NASA-1.3",
    Naumen = "Naumen",
    Nbpl10 = "NBPL-1.0",
    NetCDF = "NetCDF",
    NetSNMP = "Net-SNMP",
    Newsletr = "Newsletr",
    Ngpl = "NGPL",
    Nlod10 = "NLOD-1.0",
    Nlpl = "NLPL",
    Nokia = "Nokia",
    Nosl = "NOSL",
    NotOpenSource = "not-open-source",
    Noweb = "Noweb",
    Nposl30 = "NPOSL-3.0",
    Nrl = "NRL",
    ODBL10 = "ODbL-1.0",
    OcctPl = "OCCT-PL",
    Oclc20 = "OCLC-2.0",
    Ofl10 = "OFL-1.0",
    Ofl11 = "OFL-1.1",
    Ogtsl = "OGTSL",
    Oldap11 = "OLDAP-1.1",
    Oldap12 = "OLDAP-1.2",
    Oldap13 = "OLDAP-1.3",
    Oldap14 = "OLDAP-1.4",
    Oldap20 = "OLDAP-2.0",
    Oldap201 = "OLDAP-2.0.1",
    Oldap21 = "OLDAP-2.1",
    Oldap22 = "OLDAP-2.2",
    Oldap221 = "OLDAP-2.2.1",
    Oldap222 = "OLDAP-2.2.2",
    Oldap23 = "OLDAP-2.3",
    Oldap24 = "OLDAP-2.4",
    Oldap25 = "OLDAP-2.5",
    Oldap26 = "OLDAP-2.6",
    Oldap27 = "OLDAP-2.7",
    Oldap28 = "OLDAP-2.8",
    Oml = "OML",
    OpenSSL = "OpenSSL",
    Opl10 = "OPL-1.0",
    OsetPl21 = "OSET-PL-2.1",
    Osl10 = "OSL-1.0",
    Osl11 = "OSL-1.1",
    Osl20 = "OSL-2.0",
    Osl21 = "OSL-2.1",
    Osl30 = "OSL-3.0",
    PHP30 = "PHP-3.0",
    PHP301 = "PHP-3.01",
    Pddl10 = "PDDL-1.0",
    Plexus = "Plexus",
    PostgreSQL = "PostgreSQL",
    Psfrag = "psfrag",
    Psutils = "psutils",
    Python20 = "Python-2.0",
    Qhull = "Qhull",
    Qpl10 = "QPL-1.0",
    RHeCos11 = "RHeCos-1.1",
    RSAMd = "RSA-MD",
    Rdisc = "Rdisc",
    Rpl11 = "RPL-1.1",
    Rpl15 = "RPL-1.5",
    Rpsl10 = "RPSL-1.0",
    Rscpl = "RSCPL",
    Ruby = "Ruby",
    SAXPD = "SAX-PD",
    SGIB10 = "SGI-B-1.0",
    SGIB11 = "SGI-B-1.1",
    SGIB20 = "SGI-B-2.0",
    Saxpath = "Saxpath",
    Scea = "SCEA",
    Sendmail = "Sendmail",
    SimPL20 = "SimPL-2.0",
    Sissl = "SISSL",
    Sissl12 = "SISSL-1.2",
    Sleepycat = "Sleepycat",
    Smlnj = "SMLNJ",
    Smppl = "SMPPL",
    Snia = "SNIA",
    Spencer86 = "Spencer-86",
    Spencer94 = "Spencer-94",
    Spencer99 = "Spencer-99",
    Spl10 = "SPL-1.0",
    SugarCRM113 = "SugarCRM-1.1.3",
    Swl = "SWL",
    TCPWrappers = "TCP-wrappers",
    TMate = "TMate",
    Tcl = "TCL",
    The0BSD = "0BSD",
    Torque11 = "TORQUE-1.1",
    Tosl = "TOSL",
    UnicodeDFS2015 = "Unicode-DFS-2015",
    UnicodeDFS2016 = "Unicode-DFS-2016",
    UnicodeTOU = "Unicode-TOU",
    Unlicense = "Unlicense",
    Upl10 = "UPL-1.0",
    Vim = "Vim",
    Vostrom = "VOSTROM",
    Vsl10 = "VSL-1.0",
    W3C = "W3C",
    W3C19980720 = "W3C-19980720",
    W3C20150513 = "W3C-20150513",
    Watcom10 = "Watcom-1.0",
    Wsuipa = "Wsuipa",
    Wtfpl = "WTFPL",
    X11 = "X11",
    XFree8611 = "XFree86-1.1",
    XSkat = "XSkat",
    Xerox = "Xerox",
    Xinetd = "xinetd",
    Xnet = "Xnet",
    Xpp = "xpp",
    Ypl10 = "YPL-1.0",
    Ypl11 = "YPL-1.1",
    ZPL11 = "ZPL-1.1",
    ZPL20 = "ZPL-2.0",
    ZPL21 = "ZPL-2.1",
    Zed = "Zed",
    Zend20 = "Zend-2.0",
    Zimbra13 = "Zimbra-1.3",
    Zimbra14 = "Zimbra-1.4",
    Zlib = "Zlib",
    ZlibAcknowledgement = "zlib-acknowledgement"
}
export interface ImplementationGuideManifest {
    /**
     * Extensions for image
     */
    _image?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for other
     */
    _other?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for rendering
     */
    _rendering?: any[] | boolean | Element | number | number | null | string;
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
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: string[];
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
     * Indicates the relative path of an additional non-page, non-image file that is part of the
     * IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived
     * IG.
     */
    other?: string[];
    /**
     * Information about a page within the IG.
     */
    page?: Array<any[] | boolean | ImplementationGuidePage1 | number | number | null | string>;
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: string;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set,
     * structure definition, capability statements etc.) are obvious candidates for inclusion,
     * but any kind of resource can be included as an example resource.
     */
    resource: Array<any[] | boolean | ImplementationGuideResource1 | number | number | null | string>;
}
export interface ImplementationGuidePage1 {
    /**
     * Extensions for anchor
     */
    _anchor?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for name
     */
    _name?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for title
     */
    _title?: any[] | boolean | Element | number | number | null | string;
    /**
     * The name of an anchor available on the page.
     */
    anchor?: string[];
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
     * Relative path to the page.
     */
    name?: string;
    /**
     * Label for the page intended for human display.
     */
    title?: string;
}
export interface ImplementationGuideResource1 {
    /**
     * Extensions for exampleBoolean
     */
    _exampleBoolean?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for exampleCanonical
     */
    _exampleCanonical?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for relativePath
     */
    _relativePath?: any[] | boolean | Element | number | number | null | string;
    /**
     * If true or a reference, indicates the resource is an example instance.  If a reference is
     * present, indicates that the example is an example of the specified profile.
     */
    exampleBoolean?: boolean;
    /**
     * If true or a reference, indicates the resource is an example instance.  If a reference is
     * present, indicates that the example is an example of the specified profile.
     */
    exampleCanonical?: string;
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
     * Where this resource is found.
     */
    reference: any[] | boolean | Reference | number | number | null | string;
    /**
     * The relative path for primary page for this resource within the IG.
     */
    relativePath?: string;
}
/**
 * The status of this implementation guide. Enables tracking the life-cycle of the content.
 */
export declare enum FhirImplementationGuideStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
