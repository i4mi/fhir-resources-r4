import { Element, CodeableConcept, Extension, Meta, Identifier, Narrative } from "./fhir._";
export interface SubstanceSourceMaterial {
    /**
     * Extensions for geographicalLocation
     */
    _geographicalLocation?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for organismName
     */
    _organismName?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for parentSubstanceName
     */
    _parentSubstanceName?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | SubstanceSourceMaterial | number | null | string>;
    /**
     * The country where the plant material is harvested or the countries where the plasma is
     * sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived
     * substances” the attribute country of origin provides information about the countries used
     * for the manufacturing of the Cryopoor plama or Crioprecipitate.
     */
    countryOfOrigin?: Array<any[] | boolean | CodeableConcept | number | number | null | string>;
    /**
     * Stage of life for animals, plants, insects and microorganisms. This information shall be
     * provided only when the substance is significantly different in these stages (e.g. foetal
     * bovine serum).
     */
    developmentStage?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction
     * elements are often necessary to define both Substances and Specified Group 1 Substances.
     * For substances derived from Plants, fraction information will be captured at the
     * Substance information level ( . Oils, Juices and Exudates). Additional information for
     * Extracts, such as extraction solvent composition, will be captured at the Specified
     * Substance Group 1 information level. For plasma-derived products fraction information
     * will be captured at the Substance and the Specified Substance Group 1 levels.
     */
    fractionDescription?: Array<any[] | boolean | SubstanceSourceMaterialFractionDescription | number | number | null | string>;
    /**
     * The place/region where the plant is harvested or the places/regions where the animal
     * source material has its habitat.
     */
    geographicalLocation?: string[];
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
     * This subclause describes the organism which the substance is derived from. For vaccines,
     * the parent organism shall be specified based on these subclause elements. As an example,
     * full taxonomy will be described for the Substance Name: ., Leaf.
     */
    organism?: any[] | boolean | SubstanceSourceMaterialOrganism | number | number | null | string;
    /**
     * The unique identifier associated with the source material parent organism shall be
     * specified.
     */
    organismId?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The organism accepted Scientific name shall be provided based on the organism taxonomy.
     */
    organismName?: string;
    /**
     * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance
     * (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
     */
    parentSubstanceId?: Array<any[] | boolean | Identifier | number | number | null | string>;
    /**
     * The parent substance of the Herbal Drug, or Herbal preparation.
     */
    parentSubstanceName?: string[];
    /**
     * To do.
     */
    partDescription?: Array<any[] | boolean | SubstanceSourceMaterialPartDescription | number | number | null | string>;
    /**
     * This is a SubstanceSourceMaterial resource
     */
    resourceType: any;
    /**
     * General high level classification of the source material specific to the origin of the
     * material.
     */
    sourceMaterialClass?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The state of the source material when extracted.
     */
    sourceMaterialState?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The type of the source material shall be specified based on a controlled vocabulary. For
     * vaccines, this subclause refers to the class of infectious agent.
     */
    sourceMaterialType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}
export interface SubstanceSourceMaterialFractionDescription {
    /**
     * Extensions for fraction
     */
    _fraction?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * This element is capturing information about the fraction of a plant part, or human plasma
     * for fractionation.
     */
    fraction?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The specific type of the material constituting the component. For Herbal preparations the
     * particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
     */
    materialType?: any[] | boolean | CodeableConcept | number | number | null | string;
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
export interface SubstanceSourceMaterialOrganism {
    /**
     * Extensions for intraspecificDescription
     */
    _intraspecificDescription?: any[] | boolean | Element | number | number | null | string;
    /**
     * 4.9.13.6.1 Author type (Conditional).
     */
    author?: Array<any[] | boolean | SubstanceSourceMaterialAuthor | number | number | null | string>;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The family of an organism shall be specified.
     */
    family?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The genus of an organism shall be specified; refers to the Latin epithet of the genus
     * element of the plant/animal scientific name; it is present in names for genera, species
     * and infraspecies.
     */
    genus?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
     */
    hybrid?: any[] | boolean | SubstanceSourceMaterialHybrid | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The intraspecific description of an organism shall be specified based on a controlled
     * vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax
     * of the antigen in line with the WHO convention.
     */
    intraspecificDescription?: string;
    /**
     * The Intraspecific type of an organism shall be specified.
     */
    intraspecificType?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * 4.9.13.7.1 Kingdom (Conditional).
     */
    organismGeneral?: any[] | boolean | SubstanceSourceMaterialOrganismGeneral | number | number | null | string;
    /**
     * The species of an organism shall be specified; refers to the Latin epithet of the species
     * of the plant/animal; it is present in names for species and infraspecies.
     */
    species?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface SubstanceSourceMaterialAuthor {
    /**
     * Extensions for authorDescription
     */
    _authorDescription?: any[] | boolean | Element | number | number | null | string;
    /**
     * The author of an organism species shall be specified. The author year of an organism
     * shall also be specified when applicable; refers to the year in which the first author(s)
     * published the infraspecific plant/animal name (of any rank).
     */
    authorDescription?: string;
    /**
     * The type of author of an organism species shall be specified. The parenthetical author of
     * an organism species refers to the first author who published the plant/animal name (of
     * any rank). The primary author of an organism species refers to the first author(s), who
     * validly published the plant/animal name.
     */
    authorType?: any[] | boolean | CodeableConcept | number | number | null | string;
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
}
export interface SubstanceSourceMaterialHybrid {
    /**
     * Extensions for maternalOrganismId
     */
    _maternalOrganismId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for maternalOrganismName
     */
    _maternalOrganismName?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for paternalOrganismId
     */
    _paternalOrganismId?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for paternalOrganismName
     */
    _paternalOrganismName?: any[] | boolean | Element | number | number | null | string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Array<any[] | boolean | Extension | number | number | null | string>;
    /**
     * The hybrid type of an organism shall be specified.
     */
    hybridType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identifier of the maternal species constituting the hybrid organism shall be
     * specified based on a controlled vocabulary. For plants, the parents aren’t always known,
     * and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismId?: string;
    /**
     * The name of the maternal species constituting the hybrid organism shall be specified. For
     * plants, the parents aren’t always known, and it is unlikely that it will be known which
     * is maternal and which is paternal.
     */
    maternalOrganismName?: string;
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
     * The identifier of the paternal species constituting the hybrid organism shall be
     * specified based on a controlled vocabulary.
     */
    paternalOrganismId?: string;
    /**
     * The name of the paternal species constituting the hybrid organism shall be specified.
     */
    paternalOrganismName?: string;
}
export interface SubstanceSourceMaterialOrganismGeneral {
    /**
     * The class of an organism shall be specified.
     */
    class?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The kingdom of an organism shall be specified.
     */
    kingdom?: any[] | boolean | CodeableConcept | number | number | null | string;
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
     * The order of an organism shall be specified,.
     */
    order?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The phylum of an organism shall be specified.
     */
    phylum?: any[] | boolean | CodeableConcept | number | number | null | string;
}
export interface SubstanceSourceMaterialPartDescription {
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
     * Entity of anatomical origin of source material within an organism.
     */
    part?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * The detailed anatomic location when the part can be extracted from different anatomical
     * locations of the organism. Multiple alternative locations may apply.
     */
    partLocation?: any[] | boolean | CodeableConcept | number | number | null | string;
}
