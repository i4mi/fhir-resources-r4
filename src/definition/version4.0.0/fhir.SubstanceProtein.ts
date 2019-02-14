import { Element,
         Extension, 
         Meta, 
         CodeableConcept, 
         Narrative, 
         Identifier, 
         Attachment } from "./fhir._";

// To parse this data:
//
//   import { Convert, FhirSubstanceProtein } from "./file";
//
//   const fhirSubstanceProtein = Convert.toFhirSubstanceProtein(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SubstanceProtein {
    /**
     * Extensions for disulfideLinkage
     */
    _disulfideLinkage?: Array<any[] | boolean | Element | number | number | null | string>;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for language
     */
    _language?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for numberOfSubunits
     */
    _numberOfSubunits?: any[] | boolean | Element | number | number | null | string;
    /**
     * These resources do not have an independent existence apart from the resource that
     * contains them - they cannot be identified independently, and nor can they have their own
     * independent transaction scope.
     */
    contained?: Array<any[] | boolean | SubstanceProtein | number | null | string>;
    /**
     * The disulphide bond between two cysteine residues either on the same subunit or on two
     * different subunits shall be described. The position of the disulfide bonds in the
     * SubstanceProtein shall be listed in increasing order of subunit number and position
     * within subunit followed by the abbreviation of the amino acids involved. The disulfide
     * linkage positions shall actually contain the amino acid Cysteine at the respective
     * positions.
     */
    disulfideLinkage?: string[];
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
     * Number of linear sequences of amino acids linked through peptide bonds. The number of
     * subunits constituting the SubstanceProtein shall be described. It is possible that the
     * number of subunits can be variable.
     */
    numberOfSubunits?: number;
    /**
     * This is a SubstanceProtein resource
     */
    resourceType: any;
    /**
     * The SubstanceProtein descriptive elements will only be used when a complete or partial
     * amino acid sequence is available or derivable from a nucleic acid sequence.
     */
    sequenceType?: any[] | boolean | CodeableConcept | number | number | null | string;
    /**
     * This subclause refers to the description of each subunit constituting the
     * SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide
     * bonds. The Subunit information shall be provided when the finished SubstanceProtein is a
     * complex of multiple sequences; subunits are not used to delineate domains within a single
     * sequence. Subunits are listed in order of decreasing length; sequences of the same length
     * will be ordered by decreasing molecular weight; subunits that have identical sequences
     * will be repeated multiple times.
     */
    subunit?: Array<any[] | boolean | SubstanceProteinSubunit | number | number | null | string>;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: any[] | boolean | Narrative | number | number | null | string;
}

export interface SubstanceProteinSubunit {
    /**
     * Extensions for cTerminalModification
     */
    _cTerminalModification?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for length
     */
    _length?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for nTerminalModification
     */
    _nTerminalModification?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for sequence
     */
    _sequence?: any[] | boolean | Element | number | number | null | string;
    /**
     * Extensions for subunit
     */
    _subunit?: any[] | boolean | Element | number | number | null | string;
    /**
     * The modification at the C-terminal shall be specified.
     */
    cTerminalModification?: string;
    /**
     * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
     */
    cTerminalModificationId?: any[] | boolean | Identifier | number | number | null | string;
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
     * Length of linear sequences of amino acids contained in the subunit.
     */
    length?: number;
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
     * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be
     * specified.
     */
    nTerminalModification?: string;
    /**
     * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
     */
    nTerminalModificationId?: any[] | boolean | Identifier | number | number | null | string;
    /**
     * The sequence information shall be provided enumerating the amino acids from N- to
     * C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for
     * L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always
     * be described using the translated sequence; for synthetic peptide containing amino acids
     * that are not represented with a single letter code an X should be used within the
     * sequence. The modified amino acids will be distinguished by their position in the
     * sequence.
     */
    sequence?: string;
    /**
     * The sequence information shall be provided enumerating the amino acids from N- to
     * C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for
     * L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always
     * be described using the translated sequence; for synthetic peptide containing amino acids
     * that are not represented with a single letter code an X should be used within the
     * sequence. The modified amino acids will be distinguished by their position in the
     * sequence.
     */
    sequenceAttachment?: any[] | boolean | Attachment | number | number | null | string;
    /**
     * Index of primary sequences of amino acids linked through peptide bonds in order of
     * decreasing length. Sequences of the same length will be ordered by molecular weight.
     * Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number;
}