"use strict";
/**
 * Created by Institute for Medical Informatics (I4MI) - Department of Engineering and Information Technology - Bern University of Applied Science (BFH)
 * File generated on 2022-11-01T13:49:11.646Z
 * https://www.i4mi.ti.bfh.ch
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementConditionalDeleteStatus = exports.CapabilityStatementConditionalReadStatus = exports.CapabilityStatementResourceVersionPolicy = exports.CapabilityStatementTypeRestfulInteraction = exports.CapabilityStatementRestfulCapabilityMode = exports.CapabilityStatementKind = exports.CapabilityStatementPublicationStatus = exports.BundleHTTPVerb = exports.BundleSearchEntryMode = exports.BundleType = exports.BiologicallyDerivedProductStorageScale = exports.BiologicallyDerivedProductStatus = exports.BiologicallyDerivedProductCategory = exports.AppointmentResponseParticipantStatus = exports.AppointmentParticipationStatus = exports.AppointmentParticipantRequired = exports.AppointmentStatus = exports.AllergyIntoleranceSeverity = exports.AllergyIntoleranceCriticality = exports.AllergyIntoleranceCategory = exports.AllergyIntoleranceType = exports.AdverseEventActuality = exports.ActivityDefinitionActivityParticipantType = exports.ActivityDefinitionRequestPriority = exports.ActivityDefinitionRequestIntent = exports.ActivityDefinitionPublicationStatus = exports.AccountStatus = exports.TriggerDefinitionTriggerType = exports.TimingDayOfWeek = exports.TimingUnitsOfTime = exports.RelatedArtifactType = exports.QuantityComparator = exports.ParameterDefinitionParameterUse = exports.NarrativeStatus = exports.IdentifierUse = exports.HumanNameNameUse = exports.Expressionundefined = exports.ElementDefinitionBindingStrength = exports.ElementDefinitionConstraintSeverity = exports.ElementDefinitionReferenceVersionRules = exports.ElementDefinitionAggregationMode = exports.ElementDefinitionSlicingRules = exports.ElementDefinitionDiscriminatorType = exports.ElementDefinitionPropertyRepresentation = exports.DataRequirementSortDirection = exports.ContributorType = exports.ContactPointUse = exports.ContactPointSystem = exports.AddressType = exports.AddressUse = void 0;
exports.CoverageEligibilityResponseEligibilityResponsePurpose = exports.CoverageEligibilityResponseEligibilityResponseStatus = exports.CoverageEligibilityRequestEligibilityRequestPurpose = exports.CoverageEligibilityRequestEligibilityRequestStatus = exports.CoverageStatus = exports.ContractPublicationStatus = exports.ContractStatus = exports.ConsentDataMeaning = exports.ConsentProvisionType = exports.ConsentState = exports.ConceptMapGroupUnmappedMode = exports.ConceptMapEquivalence = exports.ConceptMapPublicationStatus = exports.CompositionSectionMode = exports.CompositionDocumentRelationshipType = exports.CompositionAttestationMode = exports.CompositionStatus = exports.CompartmentDefinitionCompartmentType = exports.CompartmentDefinitionPublicationStatus = exports.CommunicationRequestCommunicationPriority = exports.CommunicationRequestStatus = exports.CommunicationPriority = exports.CommunicationStatus = exports.CodeSystemPropertyType = exports.CodeSystemFilterOperator = exports.CodeSystemContentMode = exports.CodeSystemHierarchyMeaning = exports.CodeSystemPublicationStatus = exports.ClinicalImpressionStatus = exports.ClaimResponseNoteType = exports.ClaimResponseRemittanceOutcome = exports.ClaimResponseUse = exports.ClaimResponseStatus = exports.ClaimUse = exports.ClaimStatus = exports.ChargeItemDefinitionPriceComponentType = exports.ChargeItemDefinitionPublicationStatus = exports.ChargeItemStatus = exports.CatalogEntryRelationType = exports.CatalogEntryPublicationStatus = exports.CareTeamStatus = exports.CarePlanActivityStatus = exports.CarePlanActivityKind = exports.CarePlanIntent = exports.CarePlanStatus = exports.CapabilityStatementDocumentMode = exports.CapabilityStatementEventCapabilityMode = exports.CapabilityStatementSystemRestfulInteraction = exports.CapabilityStatementSearchParamType = exports.CapabilityStatementReferenceHandlingPolicy = void 0;
exports.ImplementationGuidePublicationStatus = exports.ImmunizationEvaluationStatus = exports.ImmunizationStatus = exports.ImagingStudyStatus = exports.HealthcareServiceDaysOfWeek = exports.GuidanceResponseStatus = exports.GroupType = exports.GraphDefinitionGraphCompartmentRule = exports.GraphDefinitionCompartmentCode = exports.GraphDefinitionGraphCompartmentUse = exports.GraphDefinitionPublicationStatus = exports.GoalLifecycleStatus = exports.FlagStatus = exports.FamilyMemberHistoryFamilyHistoryStatus = exports.ExplanationOfBenefitNoteType = exports.ExplanationOfBenefitRemittanceOutcome = exports.ExplanationOfBenefitUse = exports.ExplanationOfBenefitStatus = exports.ExampleScenarioActorType = exports.ExampleScenarioPublicationStatus = exports.EvidenceVariableGroupMeasure = exports.EvidenceVariableType = exports.EvidenceVariablePublicationStatus = exports.EvidencePublicationStatus = exports.EventDefinitionPublicationStatus = exports.EpisodeOfCareStatus = exports.EnrollmentResponseRemittanceOutcome = exports.EnrollmentResponseStatus = exports.EnrollmentRequestStatus = exports.EndpointStatus = exports.EncounterLocationStatus = exports.EffectEvidenceSynthesisExposureState = exports.EffectEvidenceSynthesisPublicationStatus = exports.DocumentReferenceDocumentRelationshipType = exports.DocumentReferenceReferredDocumentStatus = exports.DocumentReferenceStatus = exports.DocumentManifestDocumentReferenceStatus = exports.DeviceRequestRequestPriority = exports.DeviceRequestRequestIntent = exports.DeviceRequestStatus = exports.DeviceMetricCalibrationState = exports.DeviceMetricCalibrationType = exports.DeviceMetricCategory = exports.DeviceMetricColor = exports.DeviceMetricOperationalStatus = exports.DeviceDefinitionDeviceNameType = exports.DeviceNameType = exports.DeviceFHIRDeviceStatus = exports.DetectedIssueSeverity = exports.CoverageEligibilityResponseRemittanceOutcome = void 0;
exports.PaymentNoticeStatus = exports.PatientLinkType = exports.PatientAdministrativeGender = exports.OperationOutcomeIssueSeverity = exports.OperationDefinitionBindingStrength = exports.OperationDefinitionSearchParamType = exports.OperationDefinitionOperationParameterUse = exports.OperationDefinitionOperationKind = exports.OperationDefinitionPublicationStatus = exports.ObservationDefinitionAdministrativeGender = exports.ObservationDefinitionObservationRangeCategory = exports.ObservationDefinitionObservationDataType = exports.NutritionOrderNutritiionOrderIntent = exports.NutritionOrderStatus = exports.NamingSystemIdentifierType = exports.NamingSystemType = exports.NamingSystemPublicationStatus = exports.MolecularSequencerepositoryType = exports.MolecularSequencequalityType = exports.MolecularSequencestrandType = exports.MolecularSequenceorientationType = exports.MolecularSequencesequenceType = exports.MessageHeaderResponseType = exports.MessageDefinitionmessageheader_response_request = exports.MessageDefinitionMessageSignificanceCategory = exports.MessageDefinitionPublicationStatus = exports.MedicationStatementStatus = exports.MedicationRequestPriority = exports.MedicationRequestIntent = exports.MedicationRequestStatus = exports.MedicationKnowledgeStatus = exports.MedicationDispenseStatus = exports.MedicationAdministrationStatus = exports.MedicationStatus = exports.MediaStatus = exports.MeasureReportType = exports.MeasureReportStatus = exports.MeasurePublicationStatus = exports.LocationDaysOfWeek = exports.LocationMode = exports.LocationStatus = exports.ListMode = exports.ListStatus = exports.LinkageType = exports.LibraryPublicationStatus = exports.InvoicePriceComponentType = exports.InvoiceStatus = exports.InsurancePlanPublicationStatus = exports.ImplementationGuideGuideParameterCode = exports.ImplementationGuideGuidePageGeneration = void 0;
exports.ServiceRequestPriority = exports.ServiceRequestIntent = exports.ServiceRequestStatus = exports.SearchParameterSearchModifierCode = exports.SearchParameterSearchComparator = exports.SearchParameterXPathUsageType = exports.SearchParameterSearchParamType = exports.SearchParameterPublicationStatus = exports.RiskEvidenceSynthesisPublicationStatus = exports.ResearchSubjectStatus = exports.ResearchStudyStatus = exports.ResearchElementDefinitionGroupMeasure = exports.ResearchElementDefinitionVariableType = exports.ResearchElementDefinitionResearchElementType = exports.ResearchElementDefinitionPublicationStatus = exports.ResearchDefinitionPublicationStatus = exports.RequestGroupActionCardinalityBehavior = exports.RequestGroupActionPrecheckBehavior = exports.RequestGroupActionRequiredBehavior = exports.RequestGroupActionSelectionBehavior = exports.RequestGroupActionGroupingBehavior = exports.RequestGroupActionRelationshipType = exports.RequestGroupActionConditionKind = exports.RequestGroupRequestPriority = exports.RequestGroupRequestIntent = exports.RequestGroupRequestStatus = exports.RelatedPersonAdministrativeGender = exports.QuestionnaireResponseStatus = exports.QuestionnaireEnableWhenBehavior = exports.QuestionnaireItemOperator = exports.QuestionnairePublicationStatus = exports.ProvenanceEntityRole = exports.ProcedureStatus = exports.PractitionerRoleDaysOfWeek = exports.PractitionerAdministrativeGender = exports.PlanDefinitionActionCardinalityBehavior = exports.PlanDefinitionActionPrecheckBehavior = exports.PlanDefinitionActionRequiredBehavior = exports.PlanDefinitionActionSelectionBehavior = exports.PlanDefinitionActionGroupingBehavior = exports.PlanDefinitionActionParticipantType = exports.PlanDefinitionActionRelationshipType = exports.PlanDefinitionActionConditionKind = exports.PlanDefinitionRequestPriority = exports.PlanDefinitionPublicationStatus = exports.PersonIdentityAssuranceLevel = exports.PersonAdministrativeGender = exports.PaymentReconciliationNoteType = exports.PaymentReconciliationRemittanceOutcome = exports.PaymentReconciliationStatus = void 0;
exports.StructureMapTransform = exports.TaskStatus = exports.DeviceUseStatementStatus = exports.SupplyRequestStatus = exports.RiskAssessmentStatus = exports.QuestionnaireItemType = exports.DeviceUDIEntryType = exports.EncounterStatus = exports.DiagnosticReportStatus = exports.ObservationStatus = exports.DetectedIssueStatus = exports.VisionPrescriptionVisionBase = exports.VisionPrescriptionVisionEyes = exports.VisionPrescriptionVisionStatus = exports.VerificationResultstatus = exports.ValueSetFilterOperator = exports.ValueSetPublicationStatus = exports.TestScriptAssertionResponseTypes = exports.TestScriptAssertionOperatorType = exports.TestScriptAssertionDirectionType = exports.TestScriptRequestMethodCode = exports.TestScriptPublicationStatus = exports.TestReportActionResult = exports.TestReportParticipantType = exports.TestReportResult = exports.TestReportStatus = exports.TerminologyCapabilitiesCodeSearchSupport = exports.TerminologyCapabilitiesCapabilityStatementKind = exports.TerminologyCapabilitiesPublicationStatus = exports.TaskPriority = exports.TaskIntent = exports.SupplyRequestRequestPriority = exports.SupplyDeliveryStatus = exports.SubstanceFHIRSubstanceStatus = exports.SubscriptionChannelType = exports.SubscriptionStatus = exports.StructureMapTargetListMode = exports.StructureMapContextType = exports.StructureMapSourceListMode = exports.StructureMapInputMode = exports.StructureMapGroupTypeMode = exports.StructureMapModelMode = exports.StructureMapPublicationStatus = exports.StructureDefinitionTypeDerivationRule = exports.StructureDefinitionExtensionContextType = exports.StructureDefinitionKind = exports.StructureDefinitionPublicationStatus = exports.SpecimenDefinitionSpecimenContainedPreference = exports.SpecimenStatus = exports.SlotStatus = void 0;
/**
 * home | work | temp | old | billing - purpose of this address
 * The purpose of this address.
 * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
 */
var AddressUse;
(function (AddressUse) {
    AddressUse["HOME"] = "home";
    AddressUse["WORK"] = "work";
    AddressUse["TEMP"] = "temp";
    AddressUse["OLD"] = "old";
    AddressUse["BILLING"] = "billing";
})(AddressUse = exports.AddressUse || (exports.AddressUse = {}));
/**
 * postal | physical | both
 * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
 * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
 */
var AddressType;
(function (AddressType) {
    AddressType["POSTAL"] = "postal";
    AddressType["PHYSICAL"] = "physical";
    AddressType["BOTH"] = "both";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
/**
 * phone | fax | email | pager | url | sms | other
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
var ContactPointSystem;
(function (ContactPointSystem) {
    ContactPointSystem["PHONE"] = "phone";
    ContactPointSystem["FAX"] = "fax";
    ContactPointSystem["EMAIL"] = "email";
    ContactPointSystem["PAGER"] = "pager";
    ContactPointSystem["URL"] = "url";
    ContactPointSystem["SMS"] = "sms";
    ContactPointSystem["OTHER"] = "other";
})(ContactPointSystem = exports.ContactPointSystem || (exports.ContactPointSystem = {}));
/**
 * home | work | temp | old | mobile - purpose of this contact point
 * Identifies the purpose for the contact point.
 * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
 */
var ContactPointUse;
(function (ContactPointUse) {
    ContactPointUse["HOME"] = "home";
    ContactPointUse["WORK"] = "work";
    ContactPointUse["TEMP"] = "temp";
    ContactPointUse["OLD"] = "old";
    ContactPointUse["MOBILE"] = "mobile";
})(ContactPointUse = exports.ContactPointUse || (exports.ContactPointUse = {}));
/**
 * author | editor | reviewer | endorser
 * The type of contributor.
 */
var ContributorType;
(function (ContributorType) {
    ContributorType["AUTHOR"] = "author";
    ContributorType["EDITOR"] = "editor";
    ContributorType["REVIEWER"] = "reviewer";
    ContributorType["ENDORSER"] = "endorser";
})(ContributorType = exports.ContributorType || (exports.ContributorType = {}));
/**
 * ascending | descending
 * The direction of the sort, ascending or descending.
 */
var DataRequirementSortDirection;
(function (DataRequirementSortDirection) {
    DataRequirementSortDirection["ASCENDING"] = "ascending";
    DataRequirementSortDirection["DESCENDING"] = "descending";
})(DataRequirementSortDirection = exports.DataRequirementSortDirection || (exports.DataRequirementSortDirection = {}));
/**
 * xmlAttr | xmlText | typeAttr | cdaText | xhtml
 * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
 * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc.).
 */
var ElementDefinitionPropertyRepresentation;
(function (ElementDefinitionPropertyRepresentation) {
    ElementDefinitionPropertyRepresentation["XMLATTR"] = "xmlAttr";
    ElementDefinitionPropertyRepresentation["XMLTEXT"] = "xmlText";
    ElementDefinitionPropertyRepresentation["TYPEATTR"] = "typeAttr";
    ElementDefinitionPropertyRepresentation["CDATEXT"] = "cdaText";
    ElementDefinitionPropertyRepresentation["XHTML"] = "xhtml";
})(ElementDefinitionPropertyRepresentation = exports.ElementDefinitionPropertyRepresentation || (exports.ElementDefinitionPropertyRepresentation = {}));
/**
 * value | exists | pattern | type | profile
 * How the element value is interpreted when discrimination is evaluated.
 */
var ElementDefinitionDiscriminatorType;
(function (ElementDefinitionDiscriminatorType) {
    ElementDefinitionDiscriminatorType["VALUE"] = "value";
    ElementDefinitionDiscriminatorType["EXISTS"] = "exists";
    ElementDefinitionDiscriminatorType["PATTERN"] = "pattern";
    ElementDefinitionDiscriminatorType["TYPE"] = "type";
    ElementDefinitionDiscriminatorType["PROFILE"] = "profile";
})(ElementDefinitionDiscriminatorType = exports.ElementDefinitionDiscriminatorType || (exports.ElementDefinitionDiscriminatorType = {}));
/**
 * closed | open | openAtEnd
 * Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
 * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
 */
var ElementDefinitionSlicingRules;
(function (ElementDefinitionSlicingRules) {
    ElementDefinitionSlicingRules["CLOSED"] = "closed";
    ElementDefinitionSlicingRules["OPEN"] = "open";
    ElementDefinitionSlicingRules["OPENATEND"] = "openAtEnd";
})(ElementDefinitionSlicingRules = exports.ElementDefinitionSlicingRules || (exports.ElementDefinitionSlicingRules = {}));
/**
 * contained | referenced | bundled - how aggregated
 * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
 * See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
 */
var ElementDefinitionAggregationMode;
(function (ElementDefinitionAggregationMode) {
    ElementDefinitionAggregationMode["CONTAINED"] = "contained";
    ElementDefinitionAggregationMode["REFERENCED"] = "referenced";
    ElementDefinitionAggregationMode["BUNDLED"] = "bundled";
})(ElementDefinitionAggregationMode = exports.ElementDefinitionAggregationMode || (exports.ElementDefinitionAggregationMode = {}));
/**
 * either | independent | specific
 * Whether this reference needs to be version specific or version independent, or whether either can be used.
 * The base specification never makes a rule as to which form is allowed, but implementation guides may do this. See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
 */
var ElementDefinitionReferenceVersionRules;
(function (ElementDefinitionReferenceVersionRules) {
    ElementDefinitionReferenceVersionRules["EITHER"] = "either";
    ElementDefinitionReferenceVersionRules["INDEPENDENT"] = "independent";
    ElementDefinitionReferenceVersionRules["SPECIFIC"] = "specific";
})(ElementDefinitionReferenceVersionRules = exports.ElementDefinitionReferenceVersionRules || (exports.ElementDefinitionReferenceVersionRules = {}));
/**
 * error | warning
 * Identifies the impact constraint violation has on the conformance of the instance.
 * This allows constraints to be asserted as "shall" (error) and "should" (warning).
 */
var ElementDefinitionConstraintSeverity;
(function (ElementDefinitionConstraintSeverity) {
    ElementDefinitionConstraintSeverity["ERROR"] = "error";
    ElementDefinitionConstraintSeverity["WARNING"] = "warning";
})(ElementDefinitionConstraintSeverity = exports.ElementDefinitionConstraintSeverity || (exports.ElementDefinitionConstraintSeverity = {}));
/**
 * required | extensible | preferred | example
 * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
 * For further discussion, see [Using Terminologies](terminologies.html).
 */
var ElementDefinitionBindingStrength;
(function (ElementDefinitionBindingStrength) {
    ElementDefinitionBindingStrength["REQUIRED"] = "required";
    ElementDefinitionBindingStrength["EXTENSIBLE"] = "extensible";
    ElementDefinitionBindingStrength["PREFERRED"] = "preferred";
    ElementDefinitionBindingStrength["EXAMPLE"] = "example";
})(ElementDefinitionBindingStrength = exports.ElementDefinitionBindingStrength || (exports.ElementDefinitionBindingStrength = {}));
/**
 * text/cql | text/fhirpath | application/x-fhir-query | etc.
 * The media type of the language for the expression.
 */
var Expressionundefined;
(function (Expressionundefined) {
    Expressionundefined["TEXT_CQL"] = "text/cql";
    Expressionundefined["TEXT_FHIRPATH"] = "text/fhirpath";
    Expressionundefined["APPLICATION_X_FHIR_QUERY"] = "application/x-fhir-query";
    Expressionundefined["ETC_"] = "etc.";
})(Expressionundefined = exports.Expressionundefined || (exports.Expressionundefined = {}));
/**
 * usual | official | temp | nickname | anonymous | old | maiden
 * Identifies the purpose for this name.
 * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
 */
var HumanNameNameUse;
(function (HumanNameNameUse) {
    HumanNameNameUse["USUAL"] = "usual";
    HumanNameNameUse["OFFICIAL"] = "official";
    HumanNameNameUse["TEMP"] = "temp";
    HumanNameNameUse["NICKNAME"] = "nickname";
    HumanNameNameUse["ANONYMOUS"] = "anonymous";
    HumanNameNameUse["OLD"] = "old";
    HumanNameNameUse["MAIDEN"] = "maiden";
})(HumanNameNameUse = exports.HumanNameNameUse || (exports.HumanNameNameUse = {}));
/**
 * usual | official | temp | secondary | old (If known)
 * The purpose of this identifier.
 * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
 */
var IdentifierUse;
(function (IdentifierUse) {
    IdentifierUse["USUAL"] = "usual";
    IdentifierUse["OFFICIAL"] = "official";
    IdentifierUse["TEMP"] = "temp";
    IdentifierUse["SECONDARY"] = "secondary";
    IdentifierUse["OLD"] = "old";
})(IdentifierUse = exports.IdentifierUse || (exports.IdentifierUse = {}));
/**
 * generated | extensions | additional | empty
 * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
 */
var NarrativeStatus;
(function (NarrativeStatus) {
    NarrativeStatus["GENERATED"] = "generated";
    NarrativeStatus["EXTENSIONS"] = "extensions";
    NarrativeStatus["ADDITIONAL"] = "additional";
    NarrativeStatus["EMPTY"] = "empty";
})(NarrativeStatus = exports.NarrativeStatus || (exports.NarrativeStatus = {}));
/**
 * in | out
 * Whether the parameter is input or output for the module.
 */
var ParameterDefinitionParameterUse;
(function (ParameterDefinitionParameterUse) {
    ParameterDefinitionParameterUse["IN"] = "in";
    ParameterDefinitionParameterUse["OUT"] = "out";
})(ParameterDefinitionParameterUse = exports.ParameterDefinitionParameterUse || (exports.ParameterDefinitionParameterUse = {}));
/**
 * < | <= | >= | > - how to understand the value
 * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
 */
var QuantityComparator;
(function (QuantityComparator) {
    QuantityComparator["LT"] = "<";
    QuantityComparator["LE"] = "<=";
    QuantityComparator["GE"] = ">=";
    QuantityComparator["GT"] = ">";
})(QuantityComparator = exports.QuantityComparator || (exports.QuantityComparator = {}));
/**
 * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
 * The type of relationship to the related artifact.
 */
var RelatedArtifactType;
(function (RelatedArtifactType) {
    RelatedArtifactType["DOCUMENTATION"] = "documentation";
    RelatedArtifactType["JUSTIFICATION"] = "justification";
    RelatedArtifactType["CITATION"] = "citation";
    RelatedArtifactType["PREDECESSOR"] = "predecessor";
    RelatedArtifactType["SUCCESSOR"] = "successor";
    RelatedArtifactType["DERIVED_FROM"] = "derived-from";
    RelatedArtifactType["DEPENDS_ON"] = "depends-on";
    RelatedArtifactType["COMPOSED_OF"] = "composed-of";
})(RelatedArtifactType = exports.RelatedArtifactType || (exports.RelatedArtifactType = {}));
/**
 * s | min | h | d | wk | mo | a - unit of time (UCUM)
 * The units of time for the duration, in UCUM units.
 */
var TimingUnitsOfTime;
(function (TimingUnitsOfTime) {
    TimingUnitsOfTime["S"] = "s";
    TimingUnitsOfTime["MIN"] = "min";
    TimingUnitsOfTime["H"] = "h";
    TimingUnitsOfTime["D"] = "d";
    TimingUnitsOfTime["WK"] = "wk";
    TimingUnitsOfTime["MO"] = "mo";
    TimingUnitsOfTime["A"] = "a";
})(TimingUnitsOfTime = exports.TimingUnitsOfTime || (exports.TimingUnitsOfTime = {}));
/**
 * mon | tue | wed | thu | fri | sat | sun
 * If one or more days of week is provided, then the action happens only on the specified day(s).
 * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
 */
var TimingDayOfWeek;
(function (TimingDayOfWeek) {
    TimingDayOfWeek["MON"] = "mon";
    TimingDayOfWeek["TUE"] = "tue";
    TimingDayOfWeek["WED"] = "wed";
    TimingDayOfWeek["THU"] = "thu";
    TimingDayOfWeek["FRI"] = "fri";
    TimingDayOfWeek["SAT"] = "sat";
    TimingDayOfWeek["SUN"] = "sun";
})(TimingDayOfWeek = exports.TimingDayOfWeek || (exports.TimingDayOfWeek = {}));
/**
 * named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended
 * The type of triggering event.
 */
var TriggerDefinitionTriggerType;
(function (TriggerDefinitionTriggerType) {
    TriggerDefinitionTriggerType["NAMED_EVENT"] = "named-event";
    TriggerDefinitionTriggerType["PERIODIC"] = "periodic";
    TriggerDefinitionTriggerType["DATA_CHANGED"] = "data-changed";
    TriggerDefinitionTriggerType["DATA_ADDED"] = "data-added";
    TriggerDefinitionTriggerType["DATA_MODIFIED"] = "data-modified";
    TriggerDefinitionTriggerType["DATA_REMOVED"] = "data-removed";
    TriggerDefinitionTriggerType["DATA_ACCESSED"] = "data-accessed";
    TriggerDefinitionTriggerType["DATA_ACCESS_ENDED"] = "data-access-ended";
})(TriggerDefinitionTriggerType = exports.TriggerDefinitionTriggerType || (exports.TriggerDefinitionTriggerType = {}));
/**
 * active | inactive | entered-in-error | on-hold | unknown
 * Indicates whether the account is presently used/usable or not.
 * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
 */
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "active";
    AccountStatus["INACTIVE"] = "inactive";
    AccountStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    AccountStatus["ON_HOLD"] = "on-hold";
    AccountStatus["UNKNOWN"] = "unknown";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this activity definition. Enables tracking the life-cycle of the content.
 * Allows filtering of activity definitions that are appropriate for use versus not.
 */
var ActivityDefinitionPublicationStatus;
(function (ActivityDefinitionPublicationStatus) {
    ActivityDefinitionPublicationStatus["DRAFT"] = "draft";
    ActivityDefinitionPublicationStatus["ACTIVE"] = "active";
    ActivityDefinitionPublicationStatus["RETIRED"] = "retired";
    ActivityDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ActivityDefinitionPublicationStatus = exports.ActivityDefinitionPublicationStatus || (exports.ActivityDefinitionPublicationStatus = {}));
/**
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
 */
var ActivityDefinitionRequestIntent;
(function (ActivityDefinitionRequestIntent) {
    ActivityDefinitionRequestIntent["PROPOSAL"] = "proposal";
    ActivityDefinitionRequestIntent["PLAN"] = "plan";
    ActivityDefinitionRequestIntent["DIRECTIVE"] = "directive";
    ActivityDefinitionRequestIntent["ORDER"] = "order";
    ActivityDefinitionRequestIntent["ORIGINAL_ORDER"] = "original-order";
    ActivityDefinitionRequestIntent["REFLEX_ORDER"] = "reflex-order";
    ActivityDefinitionRequestIntent["FILLER_ORDER"] = "filler-order";
    ActivityDefinitionRequestIntent["INSTANCE_ORDER"] = "instance-order";
    ActivityDefinitionRequestIntent["OPTION"] = "option";
})(ActivityDefinitionRequestIntent = exports.ActivityDefinitionRequestIntent || (exports.ActivityDefinitionRequestIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the activity  should be addressed with respect to other requests.
 */
var ActivityDefinitionRequestPriority;
(function (ActivityDefinitionRequestPriority) {
    ActivityDefinitionRequestPriority["ROUTINE"] = "routine";
    ActivityDefinitionRequestPriority["URGENT"] = "urgent";
    ActivityDefinitionRequestPriority["ASAP"] = "asap";
    ActivityDefinitionRequestPriority["STAT"] = "stat";
})(ActivityDefinitionRequestPriority = exports.ActivityDefinitionRequestPriority || (exports.ActivityDefinitionRequestPriority = {}));
/**
 * patient | practitioner | related-person | device
 * The type of participant in the action.
 */
var ActivityDefinitionActivityParticipantType;
(function (ActivityDefinitionActivityParticipantType) {
    ActivityDefinitionActivityParticipantType["PATIENT"] = "patient";
    ActivityDefinitionActivityParticipantType["PRACTITIONER"] = "practitioner";
    ActivityDefinitionActivityParticipantType["RELATED_PERSON"] = "related-person";
    ActivityDefinitionActivityParticipantType["DEVICE"] = "device";
})(ActivityDefinitionActivityParticipantType = exports.ActivityDefinitionActivityParticipantType || (exports.ActivityDefinitionActivityParticipantType = {}));
/**
 * actual | potential
 * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
 */
var AdverseEventActuality;
(function (AdverseEventActuality) {
    AdverseEventActuality["ACTUAL"] = "actual";
    AdverseEventActuality["POTENTIAL"] = "potential";
})(AdverseEventActuality = exports.AdverseEventActuality || (exports.AdverseEventActuality = {}));
/**
 * allergy | intolerance - Underlying mechanism (if known)
 * Identification of the underlying physiological mechanism for the reaction risk.
 * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
 */
var AllergyIntoleranceType;
(function (AllergyIntoleranceType) {
    AllergyIntoleranceType["ALLERGY"] = "allergy";
    AllergyIntoleranceType["INTOLERANCE"] = "intolerance";
})(AllergyIntoleranceType = exports.AllergyIntoleranceType || (exports.AllergyIntoleranceType = {}));
/**
 * food | medication | environment | biologic
 * Category of the identified substance.
 * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
 */
var AllergyIntoleranceCategory;
(function (AllergyIntoleranceCategory) {
    AllergyIntoleranceCategory["FOOD"] = "food";
    AllergyIntoleranceCategory["MEDICATION"] = "medication";
    AllergyIntoleranceCategory["ENVIRONMENT"] = "environment";
    AllergyIntoleranceCategory["BIOLOGIC"] = "biologic";
})(AllergyIntoleranceCategory = exports.AllergyIntoleranceCategory || (exports.AllergyIntoleranceCategory = {}));
/**
 * low | high | unable-to-assess
 * Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
 * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
 */
var AllergyIntoleranceCriticality;
(function (AllergyIntoleranceCriticality) {
    AllergyIntoleranceCriticality["LOW"] = "low";
    AllergyIntoleranceCriticality["HIGH"] = "high";
    AllergyIntoleranceCriticality["UNABLE_TO_ASSESS"] = "unable-to-assess";
})(AllergyIntoleranceCriticality = exports.AllergyIntoleranceCriticality || (exports.AllergyIntoleranceCriticality = {}));
/**
 * mild | moderate | severe (of event as a whole)
 * Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
 * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
 */
var AllergyIntoleranceSeverity;
(function (AllergyIntoleranceSeverity) {
    AllergyIntoleranceSeverity["MILD"] = "mild";
    AllergyIntoleranceSeverity["MODERATE"] = "moderate";
    AllergyIntoleranceSeverity["SEVERE"] = "severe";
})(AllergyIntoleranceSeverity = exports.AllergyIntoleranceSeverity || (exports.AllergyIntoleranceSeverity = {}));
/**
 * proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
 * The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
 * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.

This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
 */
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PROPOSED"] = "proposed";
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["BOOKED"] = "booked";
    AppointmentStatus["ARRIVED"] = "arrived";
    AppointmentStatus["FULFILLED"] = "fulfilled";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["NOSHOW"] = "noshow";
    AppointmentStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    AppointmentStatus["CHECKED_IN"] = "checked-in";
    AppointmentStatus["WAITLIST"] = "waitlist";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));
/**
 * required | optional | information-only
 * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
 */
var AppointmentParticipantRequired;
(function (AppointmentParticipantRequired) {
    AppointmentParticipantRequired["REQUIRED"] = "required";
    AppointmentParticipantRequired["OPTIONAL"] = "optional";
    AppointmentParticipantRequired["INFORMATION_ONLY"] = "information-only";
})(AppointmentParticipantRequired = exports.AppointmentParticipantRequired || (exports.AppointmentParticipantRequired = {}));
/**
 * accepted | declined | tentative | needs-action
 * Participation status of the actor.
 */
var AppointmentParticipationStatus;
(function (AppointmentParticipationStatus) {
    AppointmentParticipationStatus["ACCEPTED"] = "accepted";
    AppointmentParticipationStatus["DECLINED"] = "declined";
    AppointmentParticipationStatus["TENTATIVE"] = "tentative";
    AppointmentParticipationStatus["NEEDS_ACTION"] = "needs-action";
})(AppointmentParticipationStatus = exports.AppointmentParticipationStatus || (exports.AppointmentParticipationStatus = {}));
/**
 * accepted | declined | tentative | needs-action
 * Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
 */
var AppointmentResponseParticipantStatus;
(function (AppointmentResponseParticipantStatus) {
    AppointmentResponseParticipantStatus["ACCEPTED"] = "accepted";
    AppointmentResponseParticipantStatus["DECLINED"] = "declined";
    AppointmentResponseParticipantStatus["TENTATIVE"] = "tentative";
    AppointmentResponseParticipantStatus["NEEDS_ACTION"] = "needs-action";
})(AppointmentResponseParticipantStatus = exports.AppointmentResponseParticipantStatus || (exports.AppointmentResponseParticipantStatus = {}));
/**
 * organ | tissue | fluid | cells | biologicalAgent
 * Broad category of this product.
 */
var BiologicallyDerivedProductCategory;
(function (BiologicallyDerivedProductCategory) {
    BiologicallyDerivedProductCategory["ORGAN"] = "organ";
    BiologicallyDerivedProductCategory["TISSUE"] = "tissue";
    BiologicallyDerivedProductCategory["FLUID"] = "fluid";
    BiologicallyDerivedProductCategory["CELLS"] = "cells";
    BiologicallyDerivedProductCategory["BIOLOGICALAGENT"] = "biologicalAgent";
})(BiologicallyDerivedProductCategory = exports.BiologicallyDerivedProductCategory || (exports.BiologicallyDerivedProductCategory = {}));
/**
 * available | unavailable
 * Whether the product is currently available.
 */
var BiologicallyDerivedProductStatus;
(function (BiologicallyDerivedProductStatus) {
    BiologicallyDerivedProductStatus["AVAILABLE"] = "available";
    BiologicallyDerivedProductStatus["UNAVAILABLE"] = "unavailable";
})(BiologicallyDerivedProductStatus = exports.BiologicallyDerivedProductStatus || (exports.BiologicallyDerivedProductStatus = {}));
/**
 * farenheit | celsius | kelvin
 * Temperature scale used.
 */
var BiologicallyDerivedProductStorageScale;
(function (BiologicallyDerivedProductStorageScale) {
    BiologicallyDerivedProductStorageScale["FARENHEIT"] = "farenheit";
    BiologicallyDerivedProductStorageScale["CELSIUS"] = "celsius";
    BiologicallyDerivedProductStorageScale["KELVIN"] = "kelvin";
})(BiologicallyDerivedProductStorageScale = exports.BiologicallyDerivedProductStorageScale || (exports.BiologicallyDerivedProductStorageScale = {}));
/**
 * document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
 * Indicates the purpose of this bundle - how it is intended to be used.
 * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
 */
var BundleType;
(function (BundleType) {
    BundleType["DOCUMENT"] = "document";
    BundleType["MESSAGE"] = "message";
    BundleType["TRANSACTION"] = "transaction";
    BundleType["TRANSACTION_RESPONSE"] = "transaction-response";
    BundleType["BATCH"] = "batch";
    BundleType["BATCH_RESPONSE"] = "batch-response";
    BundleType["HISTORY"] = "history";
    BundleType["SEARCHSET"] = "searchset";
    BundleType["COLLECTION"] = "collection";
})(BundleType = exports.BundleType || (exports.BundleType = {}));
/**
 * match | include | outcome - why this is in the result set
 * Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
 */
var BundleSearchEntryMode;
(function (BundleSearchEntryMode) {
    BundleSearchEntryMode["MATCH"] = "match";
    BundleSearchEntryMode["INCLUDE"] = "include";
    BundleSearchEntryMode["OUTCOME"] = "outcome";
})(BundleSearchEntryMode = exports.BundleSearchEntryMode || (exports.BundleSearchEntryMode = {}));
/**
 * GET | HEAD | POST | PUT | DELETE | PATCH
 * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
 */
var BundleHTTPVerb;
(function (BundleHTTPVerb) {
    BundleHTTPVerb["GET"] = "GET";
    BundleHTTPVerb["HEAD"] = "HEAD";
    BundleHTTPVerb["POST"] = "POST";
    BundleHTTPVerb["PUT"] = "PUT";
    BundleHTTPVerb["DELETE"] = "DELETE";
    BundleHTTPVerb["PATCH"] = "PATCH";
})(BundleHTTPVerb = exports.BundleHTTPVerb || (exports.BundleHTTPVerb = {}));
/**
 * draft | active | retired | unknown
 * The status of this capability statement. Enables tracking the life-cycle of the content.
 * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
 */
var CapabilityStatementPublicationStatus;
(function (CapabilityStatementPublicationStatus) {
    CapabilityStatementPublicationStatus["DRAFT"] = "draft";
    CapabilityStatementPublicationStatus["ACTIVE"] = "active";
    CapabilityStatementPublicationStatus["RETIRED"] = "retired";
    CapabilityStatementPublicationStatus["UNKNOWN"] = "unknown";
})(CapabilityStatementPublicationStatus = exports.CapabilityStatementPublicationStatus || (exports.CapabilityStatementPublicationStatus = {}));
/**
 * instance | capability | requirements
 * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
 */
var CapabilityStatementKind;
(function (CapabilityStatementKind) {
    CapabilityStatementKind["INSTANCE"] = "instance";
    CapabilityStatementKind["CAPABILITY"] = "capability";
    CapabilityStatementKind["REQUIREMENTS"] = "requirements";
})(CapabilityStatementKind = exports.CapabilityStatementKind || (exports.CapabilityStatementKind = {}));
/**
 * client | server
 * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
 */
var CapabilityStatementRestfulCapabilityMode;
(function (CapabilityStatementRestfulCapabilityMode) {
    CapabilityStatementRestfulCapabilityMode["CLIENT"] = "client";
    CapabilityStatementRestfulCapabilityMode["SERVER"] = "server";
})(CapabilityStatementRestfulCapabilityMode = exports.CapabilityStatementRestfulCapabilityMode || (exports.CapabilityStatementRestfulCapabilityMode = {}));
/**
 * read | vread | update | patch | delete | history-instance | history-type | create | search-type
 * Coded identifier of the operation, supported by the system resource.
 */
var CapabilityStatementTypeRestfulInteraction;
(function (CapabilityStatementTypeRestfulInteraction) {
    CapabilityStatementTypeRestfulInteraction["READ"] = "read";
    CapabilityStatementTypeRestfulInteraction["VREAD"] = "vread";
    CapabilityStatementTypeRestfulInteraction["UPDATE"] = "update";
    CapabilityStatementTypeRestfulInteraction["PATCH"] = "patch";
    CapabilityStatementTypeRestfulInteraction["DELETE"] = "delete";
    CapabilityStatementTypeRestfulInteraction["HISTORY_INSTANCE"] = "history-instance";
    CapabilityStatementTypeRestfulInteraction["HISTORY_TYPE"] = "history-type";
    CapabilityStatementTypeRestfulInteraction["CREATE"] = "create";
    CapabilityStatementTypeRestfulInteraction["SEARCH_TYPE"] = "search-type";
})(CapabilityStatementTypeRestfulInteraction = exports.CapabilityStatementTypeRestfulInteraction || (exports.CapabilityStatementTypeRestfulInteraction = {}));
/**
 * no-version | versioned | versioned-update
 * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
 * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
 */
var CapabilityStatementResourceVersionPolicy;
(function (CapabilityStatementResourceVersionPolicy) {
    CapabilityStatementResourceVersionPolicy["NO_VERSION"] = "no-version";
    CapabilityStatementResourceVersionPolicy["VERSIONED"] = "versioned";
    CapabilityStatementResourceVersionPolicy["VERSIONED_UPDATE"] = "versioned-update";
})(CapabilityStatementResourceVersionPolicy = exports.CapabilityStatementResourceVersionPolicy || (exports.CapabilityStatementResourceVersionPolicy = {}));
/**
 * not-supported | modified-since | not-match | full-support
 * A code that indicates how the server supports conditional read.
 * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
 */
var CapabilityStatementConditionalReadStatus;
(function (CapabilityStatementConditionalReadStatus) {
    CapabilityStatementConditionalReadStatus["NOT_SUPPORTED"] = "not-supported";
    CapabilityStatementConditionalReadStatus["MODIFIED_SINCE"] = "modified-since";
    CapabilityStatementConditionalReadStatus["NOT_MATCH"] = "not-match";
    CapabilityStatementConditionalReadStatus["FULL_SUPPORT"] = "full-support";
})(CapabilityStatementConditionalReadStatus = exports.CapabilityStatementConditionalReadStatus || (exports.CapabilityStatementConditionalReadStatus = {}));
/**
 * not-supported | single | multiple - how conditional delete is supported
 * A code that indicates how the server supports conditional delete.
 * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
 */
var CapabilityStatementConditionalDeleteStatus;
(function (CapabilityStatementConditionalDeleteStatus) {
    CapabilityStatementConditionalDeleteStatus["NOT_SUPPORTED"] = "not-supported";
    CapabilityStatementConditionalDeleteStatus["SINGLE"] = "single";
    CapabilityStatementConditionalDeleteStatus["MULTIPLE"] = "multiple";
})(CapabilityStatementConditionalDeleteStatus = exports.CapabilityStatementConditionalDeleteStatus || (exports.CapabilityStatementConditionalDeleteStatus = {}));
/**
 * literal | logical | resolves | enforced | local
 * A set of flags that defines how references are supported.
 */
var CapabilityStatementReferenceHandlingPolicy;
(function (CapabilityStatementReferenceHandlingPolicy) {
    CapabilityStatementReferenceHandlingPolicy["LITERAL"] = "literal";
    CapabilityStatementReferenceHandlingPolicy["LOGICAL"] = "logical";
    CapabilityStatementReferenceHandlingPolicy["RESOLVES"] = "resolves";
    CapabilityStatementReferenceHandlingPolicy["ENFORCED"] = "enforced";
    CapabilityStatementReferenceHandlingPolicy["LOCAL"] = "local";
})(CapabilityStatementReferenceHandlingPolicy = exports.CapabilityStatementReferenceHandlingPolicy || (exports.CapabilityStatementReferenceHandlingPolicy = {}));
/**
 * number | date | string | token | reference | composite | quantity | uri | special
 * The type of value a search parameter refers to, and how the content is interpreted.
 * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
 */
var CapabilityStatementSearchParamType;
(function (CapabilityStatementSearchParamType) {
    CapabilityStatementSearchParamType["NUMBER"] = "number";
    CapabilityStatementSearchParamType["DATE"] = "date";
    CapabilityStatementSearchParamType["STRING"] = "string";
    CapabilityStatementSearchParamType["TOKEN"] = "token";
    CapabilityStatementSearchParamType["REFERENCE"] = "reference";
    CapabilityStatementSearchParamType["COMPOSITE"] = "composite";
    CapabilityStatementSearchParamType["QUANTITY"] = "quantity";
    CapabilityStatementSearchParamType["URI"] = "uri";
    CapabilityStatementSearchParamType["SPECIAL"] = "special";
})(CapabilityStatementSearchParamType = exports.CapabilityStatementSearchParamType || (exports.CapabilityStatementSearchParamType = {}));
/**
 * transaction | batch | search-system | history-system
 * A coded identifier of the operation, supported by the system.
 */
var CapabilityStatementSystemRestfulInteraction;
(function (CapabilityStatementSystemRestfulInteraction) {
    CapabilityStatementSystemRestfulInteraction["TRANSACTION"] = "transaction";
    CapabilityStatementSystemRestfulInteraction["BATCH"] = "batch";
    CapabilityStatementSystemRestfulInteraction["SEARCH_SYSTEM"] = "search-system";
    CapabilityStatementSystemRestfulInteraction["HISTORY_SYSTEM"] = "history-system";
})(CapabilityStatementSystemRestfulInteraction = exports.CapabilityStatementSystemRestfulInteraction || (exports.CapabilityStatementSystemRestfulInteraction = {}));
/**
 * sender | receiver
 * The mode of this event declaration - whether application is sender or receiver.
 */
var CapabilityStatementEventCapabilityMode;
(function (CapabilityStatementEventCapabilityMode) {
    CapabilityStatementEventCapabilityMode["SENDER"] = "sender";
    CapabilityStatementEventCapabilityMode["RECEIVER"] = "receiver";
})(CapabilityStatementEventCapabilityMode = exports.CapabilityStatementEventCapabilityMode || (exports.CapabilityStatementEventCapabilityMode = {}));
/**
 * producer | consumer
 * Mode of this document declaration - whether an application is a producer or consumer.
 */
var CapabilityStatementDocumentMode;
(function (CapabilityStatementDocumentMode) {
    CapabilityStatementDocumentMode["PRODUCER"] = "producer";
    CapabilityStatementDocumentMode["CONSUMER"] = "consumer";
})(CapabilityStatementDocumentMode = exports.CapabilityStatementDocumentMode || (exports.CapabilityStatementDocumentMode = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.

This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
 */
var CarePlanStatus;
(function (CarePlanStatus) {
    CarePlanStatus["DRAFT"] = "draft";
    CarePlanStatus["ACTIVE"] = "active";
    CarePlanStatus["ON_HOLD"] = "on-hold";
    CarePlanStatus["REVOKED"] = "revoked";
    CarePlanStatus["COMPLETED"] = "completed";
    CarePlanStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    CarePlanStatus["UNKNOWN"] = "unknown";
})(CarePlanStatus = exports.CarePlanStatus || (exports.CarePlanStatus = {}));
/**
 * proposal | plan | order | option
 * Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
 * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
 */
var CarePlanIntent;
(function (CarePlanIntent) {
    CarePlanIntent["PROPOSAL"] = "proposal";
    CarePlanIntent["PLAN"] = "plan";
    CarePlanIntent["ORDER"] = "order";
    CarePlanIntent["OPTION"] = "option";
})(CarePlanIntent = exports.CarePlanIntent || (exports.CarePlanIntent = {}));
/**
 * Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
 * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
 */
var CarePlanActivityKind;
(function (CarePlanActivityKind) {
    CarePlanActivityKind["APPOINTMENT"] = "Appointment";
    CarePlanActivityKind["COMMUNICATIONREQUEST"] = "CommunicationRequest";
    CarePlanActivityKind["DEVICEREQUEST"] = "DeviceRequest";
    CarePlanActivityKind["MEDICATIONREQUEST"] = "MedicationRequest";
    CarePlanActivityKind["NUTRITIONORDER"] = "NutritionOrder";
    CarePlanActivityKind["TASK"] = "Task";
    CarePlanActivityKind["SERVICEREQUEST"] = "ServiceRequest";
    CarePlanActivityKind["VISIONPRESCRIPTION"] = "VisionPrescription";
})(CarePlanActivityKind = exports.CarePlanActivityKind || (exports.CarePlanActivityKind = {}));
/**
 * not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
 * Identifies what progress is being made for the specific activity.
 * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
 */
var CarePlanActivityStatus;
(function (CarePlanActivityStatus) {
    CarePlanActivityStatus["NOT_STARTED"] = "not-started";
    CarePlanActivityStatus["SCHEDULED"] = "scheduled";
    CarePlanActivityStatus["IN_PROGRESS"] = "in-progress";
    CarePlanActivityStatus["ON_HOLD"] = "on-hold";
    CarePlanActivityStatus["COMPLETED"] = "completed";
    CarePlanActivityStatus["CANCELLED"] = "cancelled";
    CarePlanActivityStatus["STOPPED"] = "stopped";
    CarePlanActivityStatus["UNKNOWN"] = "unknown";
    CarePlanActivityStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(CarePlanActivityStatus = exports.CarePlanActivityStatus || (exports.CarePlanActivityStatus = {}));
/**
 * proposed | active | suspended | inactive | entered-in-error
 * Indicates the current state of the care team.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
 */
var CareTeamStatus;
(function (CareTeamStatus) {
    CareTeamStatus["PROPOSED"] = "proposed";
    CareTeamStatus["ACTIVE"] = "active";
    CareTeamStatus["SUSPENDED"] = "suspended";
    CareTeamStatus["INACTIVE"] = "inactive";
    CareTeamStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(CareTeamStatus = exports.CareTeamStatus || (exports.CareTeamStatus = {}));
/**
 * draft | active | retired | unknown
 * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
 */
var CatalogEntryPublicationStatus;
(function (CatalogEntryPublicationStatus) {
    CatalogEntryPublicationStatus["DRAFT"] = "draft";
    CatalogEntryPublicationStatus["ACTIVE"] = "active";
    CatalogEntryPublicationStatus["RETIRED"] = "retired";
    CatalogEntryPublicationStatus["UNKNOWN"] = "unknown";
})(CatalogEntryPublicationStatus = exports.CatalogEntryPublicationStatus || (exports.CatalogEntryPublicationStatus = {}));
/**
 * triggers | is-replaced-by
 * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
 */
var CatalogEntryRelationType;
(function (CatalogEntryRelationType) {
    CatalogEntryRelationType["TRIGGERS"] = "triggers";
    CatalogEntryRelationType["IS_REPLACED_BY"] = "is-replaced-by";
})(CatalogEntryRelationType = exports.CatalogEntryRelationType || (exports.CatalogEntryRelationType = {}));
/**
 * planned | billable | not-billable | aborted | billed | entered-in-error | unknown
 * The current state of the ChargeItem.
 * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.

This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
 */
var ChargeItemStatus;
(function (ChargeItemStatus) {
    ChargeItemStatus["PLANNED"] = "planned";
    ChargeItemStatus["BILLABLE"] = "billable";
    ChargeItemStatus["NOT_BILLABLE"] = "not-billable";
    ChargeItemStatus["ABORTED"] = "aborted";
    ChargeItemStatus["BILLED"] = "billed";
    ChargeItemStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ChargeItemStatus["UNKNOWN"] = "unknown";
})(ChargeItemStatus = exports.ChargeItemStatus || (exports.ChargeItemStatus = {}));
/**
 * draft | active | retired | unknown
 * The current state of the ChargeItemDefinition.
 * Allows filtering of charge item definitions that are appropriate for use versus not.
 */
var ChargeItemDefinitionPublicationStatus;
(function (ChargeItemDefinitionPublicationStatus) {
    ChargeItemDefinitionPublicationStatus["DRAFT"] = "draft";
    ChargeItemDefinitionPublicationStatus["ACTIVE"] = "active";
    ChargeItemDefinitionPublicationStatus["RETIRED"] = "retired";
    ChargeItemDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ChargeItemDefinitionPublicationStatus = exports.ChargeItemDefinitionPublicationStatus || (exports.ChargeItemDefinitionPublicationStatus = {}));
/**
 * base | surcharge | deduction | discount | tax | informational
 * This code identifies the type of the component.
 */
var ChargeItemDefinitionPriceComponentType;
(function (ChargeItemDefinitionPriceComponentType) {
    ChargeItemDefinitionPriceComponentType["BASE"] = "base";
    ChargeItemDefinitionPriceComponentType["SURCHARGE"] = "surcharge";
    ChargeItemDefinitionPriceComponentType["DEDUCTION"] = "deduction";
    ChargeItemDefinitionPriceComponentType["DISCOUNT"] = "discount";
    ChargeItemDefinitionPriceComponentType["TAX"] = "tax";
    ChargeItemDefinitionPriceComponentType["INFORMATIONAL"] = "informational";
})(ChargeItemDefinitionPriceComponentType = exports.ChargeItemDefinitionPriceComponentType || (exports.ChargeItemDefinitionPriceComponentType = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ClaimStatus;
(function (ClaimStatus) {
    ClaimStatus["ACTIVE"] = "active";
    ClaimStatus["CANCELLED"] = "cancelled";
    ClaimStatus["DRAFT"] = "draft";
    ClaimStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ClaimStatus = exports.ClaimStatus || (exports.ClaimStatus = {}));
/**
 * claim | preauthorization | predetermination
 * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
 */
var ClaimUse;
(function (ClaimUse) {
    ClaimUse["CLAIM"] = "claim";
    ClaimUse["PREAUTHORIZATION"] = "preauthorization";
    ClaimUse["PREDETERMINATION"] = "predetermination";
})(ClaimUse = exports.ClaimUse || (exports.ClaimUse = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ClaimResponseStatus;
(function (ClaimResponseStatus) {
    ClaimResponseStatus["ACTIVE"] = "active";
    ClaimResponseStatus["CANCELLED"] = "cancelled";
    ClaimResponseStatus["DRAFT"] = "draft";
    ClaimResponseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ClaimResponseStatus = exports.ClaimResponseStatus || (exports.ClaimResponseStatus = {}));
/**
 * claim | preauthorization | predetermination
 * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
 */
var ClaimResponseUse;
(function (ClaimResponseUse) {
    ClaimResponseUse["CLAIM"] = "claim";
    ClaimResponseUse["PREAUTHORIZATION"] = "preauthorization";
    ClaimResponseUse["PREDETERMINATION"] = "predetermination";
})(ClaimResponseUse = exports.ClaimResponseUse || (exports.ClaimResponseUse = {}));
/**
 * queued | complete | error | partial
 * The outcome of the claim, predetermination, or preauthorization processing.
 * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
 */
var ClaimResponseRemittanceOutcome;
(function (ClaimResponseRemittanceOutcome) {
    ClaimResponseRemittanceOutcome["QUEUED"] = "queued";
    ClaimResponseRemittanceOutcome["COMPLETE"] = "complete";
    ClaimResponseRemittanceOutcome["ERROR"] = "error";
    ClaimResponseRemittanceOutcome["PARTIAL"] = "partial";
})(ClaimResponseRemittanceOutcome = exports.ClaimResponseRemittanceOutcome || (exports.ClaimResponseRemittanceOutcome = {}));
/**
 * display | print | printoper
 * The business purpose of the note text.
 */
var ClaimResponseNoteType;
(function (ClaimResponseNoteType) {
    ClaimResponseNoteType["DISPLAY"] = "display";
    ClaimResponseNoteType["PRINT"] = "print";
    ClaimResponseNoteType["PRINTOPER"] = "printoper";
})(ClaimResponseNoteType = exports.ClaimResponseNoteType || (exports.ClaimResponseNoteType = {}));
/**
 * in-progress | completed | entered-in-error
 * Identifies the workflow status of the assessment.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
 */
var ClinicalImpressionStatus;
(function (ClinicalImpressionStatus) {
    ClinicalImpressionStatus["IN_PROGRESS"] = "in-progress";
    ClinicalImpressionStatus["COMPLETED"] = "completed";
    ClinicalImpressionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ClinicalImpressionStatus = exports.ClinicalImpressionStatus || (exports.ClinicalImpressionStatus = {}));
/**
 * draft | active | retired | unknown
 * The date (and optionally time) when the code system resource was created or revised.
 * Allows filtering of code systems that are appropriate for use versus not.
 */
var CodeSystemPublicationStatus;
(function (CodeSystemPublicationStatus) {
    CodeSystemPublicationStatus["DRAFT"] = "draft";
    CodeSystemPublicationStatus["ACTIVE"] = "active";
    CodeSystemPublicationStatus["RETIRED"] = "retired";
    CodeSystemPublicationStatus["UNKNOWN"] = "unknown";
})(CodeSystemPublicationStatus = exports.CodeSystemPublicationStatus || (exports.CodeSystemPublicationStatus = {}));
/**
 * grouped-by | is-a | part-of | classified-with
 * The meaning of the hierarchy of concepts as represented in this resource.
 * Note that other representations might have a different hierarchy or none at all, and represent the information using properties.
 */
var CodeSystemHierarchyMeaning;
(function (CodeSystemHierarchyMeaning) {
    CodeSystemHierarchyMeaning["GROUPED_BY"] = "grouped-by";
    CodeSystemHierarchyMeaning["IS_A"] = "is-a";
    CodeSystemHierarchyMeaning["PART_OF"] = "part-of";
    CodeSystemHierarchyMeaning["CLASSIFIED_WITH"] = "classified-with";
})(CodeSystemHierarchyMeaning = exports.CodeSystemHierarchyMeaning || (exports.CodeSystemHierarchyMeaning = {}));
/**
 * not-present | example | fragment | complete | supplement
 * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
 */
var CodeSystemContentMode;
(function (CodeSystemContentMode) {
    CodeSystemContentMode["NOT_PRESENT"] = "not-present";
    CodeSystemContentMode["EXAMPLE"] = "example";
    CodeSystemContentMode["FRAGMENT"] = "fragment";
    CodeSystemContentMode["COMPLETE"] = "complete";
    CodeSystemContentMode["SUPPLEMENT"] = "supplement";
})(CodeSystemContentMode = exports.CodeSystemContentMode || (exports.CodeSystemContentMode = {}));
/**
 * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
 * A list of operators that can be used with the filter.
 */
var CodeSystemFilterOperator;
(function (CodeSystemFilterOperator) {
    CodeSystemFilterOperator["E"] = "=";
    CodeSystemFilterOperator["IS_A"] = "is-a";
    CodeSystemFilterOperator["DESCENDENT_OF"] = "descendent-of";
    CodeSystemFilterOperator["IS_NOT_A"] = "is-not-a";
    CodeSystemFilterOperator["REGEX"] = "regex";
    CodeSystemFilterOperator["IN"] = "in";
    CodeSystemFilterOperator["NOT_IN"] = "not-in";
    CodeSystemFilterOperator["GENERALIZES"] = "generalizes";
    CodeSystemFilterOperator["EXISTS"] = "exists";
})(CodeSystemFilterOperator = exports.CodeSystemFilterOperator || (exports.CodeSystemFilterOperator = {}));
/**
 * code | Coding | string | integer | boolean | dateTime | decimal
 * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
 */
var CodeSystemPropertyType;
(function (CodeSystemPropertyType) {
    CodeSystemPropertyType["CODE"] = "code";
    CodeSystemPropertyType["CODING"] = "Coding";
    CodeSystemPropertyType["STRING"] = "string";
    CodeSystemPropertyType["INTEGER"] = "integer";
    CodeSystemPropertyType["BOOLEAN"] = "boolean";
    CodeSystemPropertyType["DATETIME"] = "dateTime";
    CodeSystemPropertyType["DECIMAL"] = "decimal";
})(CodeSystemPropertyType = exports.CodeSystemPropertyType || (exports.CodeSystemPropertyType = {}));
/**
 * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * The status of the transmission.
 * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
 */
var CommunicationStatus;
(function (CommunicationStatus) {
    CommunicationStatus["PREPARATION"] = "preparation";
    CommunicationStatus["IN_PROGRESS"] = "in-progress";
    CommunicationStatus["NOT_DONE"] = "not-done";
    CommunicationStatus["ON_HOLD"] = "on-hold";
    CommunicationStatus["STOPPED"] = "stopped";
    CommunicationStatus["COMPLETED"] = "completed";
    CommunicationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    CommunicationStatus["UNKNOWN"] = "unknown";
})(CommunicationStatus = exports.CommunicationStatus || (exports.CommunicationStatus = {}));
/**
 * routine | urgent | asap | stat
 * Characterizes how quickly the planned or in progress communication must be addressed. Includes concepts such as stat, urgent, routine.
 * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
 */
var CommunicationPriority;
(function (CommunicationPriority) {
    CommunicationPriority["ROUTINE"] = "routine";
    CommunicationPriority["URGENT"] = "urgent";
    CommunicationPriority["ASAP"] = "asap";
    CommunicationPriority["STAT"] = "stat";
})(CommunicationPriority = exports.CommunicationPriority || (exports.CommunicationPriority = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * The status of the proposal or order.
 */
var CommunicationRequestStatus;
(function (CommunicationRequestStatus) {
    CommunicationRequestStatus["DRAFT"] = "draft";
    CommunicationRequestStatus["ACTIVE"] = "active";
    CommunicationRequestStatus["ON_HOLD"] = "on-hold";
    CommunicationRequestStatus["REVOKED"] = "revoked";
    CommunicationRequestStatus["COMPLETED"] = "completed";
    CommunicationRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    CommunicationRequestStatus["UNKNOWN"] = "unknown";
})(CommunicationRequestStatus = exports.CommunicationRequestStatus || (exports.CommunicationRequestStatus = {}));
/**
 * routine | urgent | asap | stat
 * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
 */
var CommunicationRequestCommunicationPriority;
(function (CommunicationRequestCommunicationPriority) {
    CommunicationRequestCommunicationPriority["ROUTINE"] = "routine";
    CommunicationRequestCommunicationPriority["URGENT"] = "urgent";
    CommunicationRequestCommunicationPriority["ASAP"] = "asap";
    CommunicationRequestCommunicationPriority["STAT"] = "stat";
})(CommunicationRequestCommunicationPriority = exports.CommunicationRequestCommunicationPriority || (exports.CommunicationRequestCommunicationPriority = {}));
/**
 * draft | active | retired | unknown
 * The status of this compartment definition. Enables tracking the life-cycle of the content.
 * Allows filtering of compartment definitions that are appropriate for use versus not.
 */
var CompartmentDefinitionPublicationStatus;
(function (CompartmentDefinitionPublicationStatus) {
    CompartmentDefinitionPublicationStatus["DRAFT"] = "draft";
    CompartmentDefinitionPublicationStatus["ACTIVE"] = "active";
    CompartmentDefinitionPublicationStatus["RETIRED"] = "retired";
    CompartmentDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(CompartmentDefinitionPublicationStatus = exports.CompartmentDefinitionPublicationStatus || (exports.CompartmentDefinitionPublicationStatus = {}));
/**
 * Patient | Encounter | RelatedPerson | Practitioner | Device
 * Which compartment this definition describes.
 * Only the specification can define the compartments that can exist. Servers can choose to support them.
 */
var CompartmentDefinitionCompartmentType;
(function (CompartmentDefinitionCompartmentType) {
    CompartmentDefinitionCompartmentType["PATIENT"] = "Patient";
    CompartmentDefinitionCompartmentType["ENCOUNTER"] = "Encounter";
    CompartmentDefinitionCompartmentType["RELATEDPERSON"] = "RelatedPerson";
    CompartmentDefinitionCompartmentType["PRACTITIONER"] = "Practitioner";
    CompartmentDefinitionCompartmentType["DEVICE"] = "Device";
})(CompartmentDefinitionCompartmentType = exports.CompartmentDefinitionCompartmentType || (exports.CompartmentDefinitionCompartmentType = {}));
/**
 * preliminary | final | amended | entered-in-error
 * The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
 * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.

Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
 */
var CompositionStatus;
(function (CompositionStatus) {
    CompositionStatus["PRELIMINARY"] = "preliminary";
    CompositionStatus["FINAL"] = "final";
    CompositionStatus["AMENDED"] = "amended";
    CompositionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(CompositionStatus = exports.CompositionStatus || (exports.CompositionStatus = {}));
/**
 * personal | professional | legal | official
 * The type of attestation the authenticator offers.
 */
var CompositionAttestationMode;
(function (CompositionAttestationMode) {
    CompositionAttestationMode["PERSONAL"] = "personal";
    CompositionAttestationMode["PROFESSIONAL"] = "professional";
    CompositionAttestationMode["LEGAL"] = "legal";
    CompositionAttestationMode["OFFICIAL"] = "official";
})(CompositionAttestationMode = exports.CompositionAttestationMode || (exports.CompositionAttestationMode = {}));
/**
 * replaces | transforms | signs | appends
 * The type of relationship that this composition has with anther composition or document.
 * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
 */
var CompositionDocumentRelationshipType;
(function (CompositionDocumentRelationshipType) {
    CompositionDocumentRelationshipType["REPLACES"] = "replaces";
    CompositionDocumentRelationshipType["TRANSFORMS"] = "transforms";
    CompositionDocumentRelationshipType["SIGNS"] = "signs";
    CompositionDocumentRelationshipType["APPENDS"] = "appends";
})(CompositionDocumentRelationshipType = exports.CompositionDocumentRelationshipType || (exports.CompositionDocumentRelationshipType = {}));
/**
 * working | snapshot | changes
 * How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
 * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
 */
var CompositionSectionMode;
(function (CompositionSectionMode) {
    CompositionSectionMode["WORKING"] = "working";
    CompositionSectionMode["SNAPSHOT"] = "snapshot";
    CompositionSectionMode["CHANGES"] = "changes";
})(CompositionSectionMode = exports.CompositionSectionMode || (exports.CompositionSectionMode = {}));
/**
 * draft | active | retired | unknown
 * The status of this concept map. Enables tracking the life-cycle of the content.
 * Allows filtering of concept maps that are appropriate for use versus not.
 */
var ConceptMapPublicationStatus;
(function (ConceptMapPublicationStatus) {
    ConceptMapPublicationStatus["DRAFT"] = "draft";
    ConceptMapPublicationStatus["ACTIVE"] = "active";
    ConceptMapPublicationStatus["RETIRED"] = "retired";
    ConceptMapPublicationStatus["UNKNOWN"] = "unknown";
})(ConceptMapPublicationStatus = exports.ConceptMapPublicationStatus || (exports.ConceptMapPublicationStatus = {}));
/**
 * relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
 * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
 * This element is labeled as a modifier because it may indicate that a target does not apply.
 */
var ConceptMapEquivalence;
(function (ConceptMapEquivalence) {
    ConceptMapEquivalence["RELATEDTO"] = "relatedto";
    ConceptMapEquivalence["EQUIVALENT"] = "equivalent";
    ConceptMapEquivalence["EQUAL"] = "equal";
    ConceptMapEquivalence["WIDER"] = "wider";
    ConceptMapEquivalence["SUBSUMES"] = "subsumes";
    ConceptMapEquivalence["NARROWER"] = "narrower";
    ConceptMapEquivalence["SPECIALIZES"] = "specializes";
    ConceptMapEquivalence["INEXACT"] = "inexact";
    ConceptMapEquivalence["UNMATCHED"] = "unmatched";
    ConceptMapEquivalence["DISJOINT"] = "disjoint";
})(ConceptMapEquivalence = exports.ConceptMapEquivalence || (exports.ConceptMapEquivalence = {}));
/**
 * provided | fixed | other-map
 * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
 */
var ConceptMapGroupUnmappedMode;
(function (ConceptMapGroupUnmappedMode) {
    ConceptMapGroupUnmappedMode["PROVIDED"] = "provided";
    ConceptMapGroupUnmappedMode["FIXED"] = "fixed";
    ConceptMapGroupUnmappedMode["OTHER_MAP"] = "other-map";
})(ConceptMapGroupUnmappedMode = exports.ConceptMapGroupUnmappedMode || (exports.ConceptMapGroupUnmappedMode = {}));
/**
 * draft | proposed | active | rejected | inactive | entered-in-error
 * Indicates the current state of this consent.
 * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
 */
var ConsentState;
(function (ConsentState) {
    ConsentState["DRAFT"] = "draft";
    ConsentState["PROPOSED"] = "proposed";
    ConsentState["ACTIVE"] = "active";
    ConsentState["REJECTED"] = "rejected";
    ConsentState["INACTIVE"] = "inactive";
    ConsentState["ENTERED_IN_ERROR"] = "entered-in-error";
})(ConsentState = exports.ConsentState || (exports.ConsentState = {}));
/**
 * deny | permit
 * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
 */
var ConsentProvisionType;
(function (ConsentProvisionType) {
    ConsentProvisionType["DENY"] = "deny";
    ConsentProvisionType["PERMIT"] = "permit";
})(ConsentProvisionType = exports.ConsentProvisionType || (exports.ConsentProvisionType = {}));
/**
 * instance | related | dependents | authoredby
 * How the resource reference is interpreted when testing consent restrictions.
 */
var ConsentDataMeaning;
(function (ConsentDataMeaning) {
    ConsentDataMeaning["INSTANCE"] = "instance";
    ConsentDataMeaning["RELATED"] = "related";
    ConsentDataMeaning["DEPENDENTS"] = "dependents";
    ConsentDataMeaning["AUTHOREDBY"] = "authoredby";
})(ConsentDataMeaning = exports.ConsentDataMeaning || (exports.ConsentDataMeaning = {}));
/**
 * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
 */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus["AMENDED"] = "amended";
    ContractStatus["APPENDED"] = "appended";
    ContractStatus["CANCELLED"] = "cancelled";
    ContractStatus["DISPUTED"] = "disputed";
    ContractStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ContractStatus["EXECUTABLE"] = "executable";
    ContractStatus["EXECUTED"] = "executed";
    ContractStatus["NEGOTIABLE"] = "negotiable";
    ContractStatus["OFFERED"] = "offered";
    ContractStatus["POLICY"] = "policy";
    ContractStatus["REJECTED"] = "rejected";
    ContractStatus["RENEWED"] = "renewed";
    ContractStatus["REVOKED"] = "revoked";
    ContractStatus["RESOLVED"] = "resolved";
    ContractStatus["TERMINATED"] = "terminated";
})(ContractStatus = exports.ContractStatus || (exports.ContractStatus = {}));
/**
 * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
 * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
 */
var ContractPublicationStatus;
(function (ContractPublicationStatus) {
    ContractPublicationStatus["AMENDED"] = "amended";
    ContractPublicationStatus["APPENDED"] = "appended";
    ContractPublicationStatus["CANCELLED"] = "cancelled";
    ContractPublicationStatus["DISPUTED"] = "disputed";
    ContractPublicationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ContractPublicationStatus["EXECUTABLE"] = "executable";
    ContractPublicationStatus["EXECUTED"] = "executed";
    ContractPublicationStatus["NEGOTIABLE"] = "negotiable";
    ContractPublicationStatus["OFFERED"] = "offered";
    ContractPublicationStatus["POLICY"] = "policy";
    ContractPublicationStatus["REJECTED"] = "rejected";
    ContractPublicationStatus["RENEWED"] = "renewed";
    ContractPublicationStatus["REVOKED"] = "revoked";
    ContractPublicationStatus["RESOLVED"] = "resolved";
    ContractPublicationStatus["TERMINATED"] = "terminated";
})(ContractPublicationStatus = exports.ContractPublicationStatus || (exports.ContractPublicationStatus = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
 */
var CoverageStatus;
(function (CoverageStatus) {
    CoverageStatus["ACTIVE"] = "active";
    CoverageStatus["CANCELLED"] = "cancelled";
    CoverageStatus["DRAFT"] = "draft";
    CoverageStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageStatus = exports.CoverageStatus || (exports.CoverageStatus = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var CoverageEligibilityRequestEligibilityRequestStatus;
(function (CoverageEligibilityRequestEligibilityRequestStatus) {
    CoverageEligibilityRequestEligibilityRequestStatus["ACTIVE"] = "active";
    CoverageEligibilityRequestEligibilityRequestStatus["CANCELLED"] = "cancelled";
    CoverageEligibilityRequestEligibilityRequestStatus["DRAFT"] = "draft";
    CoverageEligibilityRequestEligibilityRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageEligibilityRequestEligibilityRequestStatus = exports.CoverageEligibilityRequestEligibilityRequestStatus || (exports.CoverageEligibilityRequestEligibilityRequestStatus = {}));
/**
 * auth-requirements | benefits | discovery | validation
 * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
 */
var CoverageEligibilityRequestEligibilityRequestPurpose;
(function (CoverageEligibilityRequestEligibilityRequestPurpose) {
    CoverageEligibilityRequestEligibilityRequestPurpose["AUTH_REQUIREMENTS"] = "auth-requirements";
    CoverageEligibilityRequestEligibilityRequestPurpose["BENEFITS"] = "benefits";
    CoverageEligibilityRequestEligibilityRequestPurpose["DISCOVERY"] = "discovery";
    CoverageEligibilityRequestEligibilityRequestPurpose["VALIDATION"] = "validation";
})(CoverageEligibilityRequestEligibilityRequestPurpose = exports.CoverageEligibilityRequestEligibilityRequestPurpose || (exports.CoverageEligibilityRequestEligibilityRequestPurpose = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var CoverageEligibilityResponseEligibilityResponseStatus;
(function (CoverageEligibilityResponseEligibilityResponseStatus) {
    CoverageEligibilityResponseEligibilityResponseStatus["ACTIVE"] = "active";
    CoverageEligibilityResponseEligibilityResponseStatus["CANCELLED"] = "cancelled";
    CoverageEligibilityResponseEligibilityResponseStatus["DRAFT"] = "draft";
    CoverageEligibilityResponseEligibilityResponseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageEligibilityResponseEligibilityResponseStatus = exports.CoverageEligibilityResponseEligibilityResponseStatus || (exports.CoverageEligibilityResponseEligibilityResponseStatus = {}));
/**
 * auth-requirements | benefits | discovery | validation
 * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
 */
var CoverageEligibilityResponseEligibilityResponsePurpose;
(function (CoverageEligibilityResponseEligibilityResponsePurpose) {
    CoverageEligibilityResponseEligibilityResponsePurpose["AUTH_REQUIREMENTS"] = "auth-requirements";
    CoverageEligibilityResponseEligibilityResponsePurpose["BENEFITS"] = "benefits";
    CoverageEligibilityResponseEligibilityResponsePurpose["DISCOVERY"] = "discovery";
    CoverageEligibilityResponseEligibilityResponsePurpose["VALIDATION"] = "validation";
})(CoverageEligibilityResponseEligibilityResponsePurpose = exports.CoverageEligibilityResponseEligibilityResponsePurpose || (exports.CoverageEligibilityResponseEligibilityResponsePurpose = {}));
/**
 * queued | complete | error | partial
 * The outcome of the request processing.
 * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
 */
var CoverageEligibilityResponseRemittanceOutcome;
(function (CoverageEligibilityResponseRemittanceOutcome) {
    CoverageEligibilityResponseRemittanceOutcome["QUEUED"] = "queued";
    CoverageEligibilityResponseRemittanceOutcome["COMPLETE"] = "complete";
    CoverageEligibilityResponseRemittanceOutcome["ERROR"] = "error";
    CoverageEligibilityResponseRemittanceOutcome["PARTIAL"] = "partial";
})(CoverageEligibilityResponseRemittanceOutcome = exports.CoverageEligibilityResponseRemittanceOutcome || (exports.CoverageEligibilityResponseRemittanceOutcome = {}));
/**
 * high | moderate | low
 * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
 */
var DetectedIssueSeverity;
(function (DetectedIssueSeverity) {
    DetectedIssueSeverity["HIGH"] = "high";
    DetectedIssueSeverity["MODERATE"] = "moderate";
    DetectedIssueSeverity["LOW"] = "low";
})(DetectedIssueSeverity = exports.DetectedIssueSeverity || (exports.DetectedIssueSeverity = {}));
/**
 * active | inactive | entered-in-error | unknown
 * Status of the Device availability.
 * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
 */
var DeviceFHIRDeviceStatus;
(function (DeviceFHIRDeviceStatus) {
    DeviceFHIRDeviceStatus["ACTIVE"] = "active";
    DeviceFHIRDeviceStatus["INACTIVE"] = "inactive";
    DeviceFHIRDeviceStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceFHIRDeviceStatus["UNKNOWN"] = "unknown";
})(DeviceFHIRDeviceStatus = exports.DeviceFHIRDeviceStatus || (exports.DeviceFHIRDeviceStatus = {}));
/**
 * udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
 * The type of deviceName.
UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
var DeviceNameType;
(function (DeviceNameType) {
    DeviceNameType["UDI_LABEL_NAME"] = "udi-label-name";
    DeviceNameType["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceNameType["PATIENT_REPORTED_NAME"] = "patient-reported-name";
    DeviceNameType["MANUFACTURER_NAME"] = "manufacturer-name";
    DeviceNameType["MODEL_NAME"] = "model-name";
    DeviceNameType["OTHER"] = "other";
})(DeviceNameType = exports.DeviceNameType || (exports.DeviceNameType = {}));
/**
 * udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
 * The type of deviceName.
UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
var DeviceDefinitionDeviceNameType;
(function (DeviceDefinitionDeviceNameType) {
    DeviceDefinitionDeviceNameType["UDI_LABEL_NAME"] = "udi-label-name";
    DeviceDefinitionDeviceNameType["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceDefinitionDeviceNameType["PATIENT_REPORTED_NAME"] = "patient-reported-name";
    DeviceDefinitionDeviceNameType["MANUFACTURER_NAME"] = "manufacturer-name";
    DeviceDefinitionDeviceNameType["MODEL_NAME"] = "model-name";
    DeviceDefinitionDeviceNameType["OTHER"] = "other";
})(DeviceDefinitionDeviceNameType = exports.DeviceDefinitionDeviceNameType || (exports.DeviceDefinitionDeviceNameType = {}));
/**
 * on | off | standby | entered-in-error
 * Indicates current operational state of the device. For example: On, Off, Standby, etc.
 */
var DeviceMetricOperationalStatus;
(function (DeviceMetricOperationalStatus) {
    DeviceMetricOperationalStatus["ON"] = "on";
    DeviceMetricOperationalStatus["OFF"] = "off";
    DeviceMetricOperationalStatus["STANDBY"] = "standby";
    DeviceMetricOperationalStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(DeviceMetricOperationalStatus = exports.DeviceMetricOperationalStatus || (exports.DeviceMetricOperationalStatus = {}));
/**
 * black | red | green | yellow | blue | magenta | cyan | white
 * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
 */
var DeviceMetricColor;
(function (DeviceMetricColor) {
    DeviceMetricColor["BLACK"] = "black";
    DeviceMetricColor["RED"] = "red";
    DeviceMetricColor["GREEN"] = "green";
    DeviceMetricColor["YELLOW"] = "yellow";
    DeviceMetricColor["BLUE"] = "blue";
    DeviceMetricColor["MAGENTA"] = "magenta";
    DeviceMetricColor["CYAN"] = "cyan";
    DeviceMetricColor["WHITE"] = "white";
})(DeviceMetricColor = exports.DeviceMetricColor || (exports.DeviceMetricColor = {}));
/**
 * measurement | setting | calculation | unspecified
 * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
 */
var DeviceMetricCategory;
(function (DeviceMetricCategory) {
    DeviceMetricCategory["MEASUREMENT"] = "measurement";
    DeviceMetricCategory["SETTING"] = "setting";
    DeviceMetricCategory["CALCULATION"] = "calculation";
    DeviceMetricCategory["UNSPECIFIED"] = "unspecified";
})(DeviceMetricCategory = exports.DeviceMetricCategory || (exports.DeviceMetricCategory = {}));
/**
 * unspecified | offset | gain | two-point
 * Describes the type of the calibration method.
 */
var DeviceMetricCalibrationType;
(function (DeviceMetricCalibrationType) {
    DeviceMetricCalibrationType["UNSPECIFIED"] = "unspecified";
    DeviceMetricCalibrationType["OFFSET"] = "offset";
    DeviceMetricCalibrationType["GAIN"] = "gain";
    DeviceMetricCalibrationType["TWO_POINT"] = "two-point";
})(DeviceMetricCalibrationType = exports.DeviceMetricCalibrationType || (exports.DeviceMetricCalibrationType = {}));
/**
 * not-calibrated | calibration-required | calibrated | unspecified
 * Describes the state of the calibration.
 */
var DeviceMetricCalibrationState;
(function (DeviceMetricCalibrationState) {
    DeviceMetricCalibrationState["NOT_CALIBRATED"] = "not-calibrated";
    DeviceMetricCalibrationState["CALIBRATION_REQUIRED"] = "calibration-required";
    DeviceMetricCalibrationState["CALIBRATED"] = "calibrated";
    DeviceMetricCalibrationState["UNSPECIFIED"] = "unspecified";
})(DeviceMetricCalibrationState = exports.DeviceMetricCalibrationState || (exports.DeviceMetricCalibrationState = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * The status of the request.
 * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
 */
var DeviceRequestStatus;
(function (DeviceRequestStatus) {
    DeviceRequestStatus["DRAFT"] = "draft";
    DeviceRequestStatus["ACTIVE"] = "active";
    DeviceRequestStatus["ON_HOLD"] = "on-hold";
    DeviceRequestStatus["REVOKED"] = "revoked";
    DeviceRequestStatus["COMPLETED"] = "completed";
    DeviceRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceRequestStatus["UNKNOWN"] = "unknown";
})(DeviceRequestStatus = exports.DeviceRequestStatus || (exports.DeviceRequestStatus = {}));
/**
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Whether the request is a proposal, plan, an original order or a reflex order.
 */
var DeviceRequestRequestIntent;
(function (DeviceRequestRequestIntent) {
    DeviceRequestRequestIntent["PROPOSAL"] = "proposal";
    DeviceRequestRequestIntent["PLAN"] = "plan";
    DeviceRequestRequestIntent["DIRECTIVE"] = "directive";
    DeviceRequestRequestIntent["ORDER"] = "order";
    DeviceRequestRequestIntent["ORIGINAL_ORDER"] = "original-order";
    DeviceRequestRequestIntent["REFLEX_ORDER"] = "reflex-order";
    DeviceRequestRequestIntent["FILLER_ORDER"] = "filler-order";
    DeviceRequestRequestIntent["INSTANCE_ORDER"] = "instance-order";
    DeviceRequestRequestIntent["OPTION"] = "option";
})(DeviceRequestRequestIntent = exports.DeviceRequestRequestIntent || (exports.DeviceRequestRequestIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the {{title}} should be addressed with respect to other requests.
 */
var DeviceRequestRequestPriority;
(function (DeviceRequestRequestPriority) {
    DeviceRequestRequestPriority["ROUTINE"] = "routine";
    DeviceRequestRequestPriority["URGENT"] = "urgent";
    DeviceRequestRequestPriority["ASAP"] = "asap";
    DeviceRequestRequestPriority["STAT"] = "stat";
})(DeviceRequestRequestPriority = exports.DeviceRequestRequestPriority || (exports.DeviceRequestRequestPriority = {}));
/**
 * current | superseded | entered-in-error
 * The status of this document manifest.
 * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
 */
var DocumentManifestDocumentReferenceStatus;
(function (DocumentManifestDocumentReferenceStatus) {
    DocumentManifestDocumentReferenceStatus["CURRENT"] = "current";
    DocumentManifestDocumentReferenceStatus["SUPERSEDED"] = "superseded";
    DocumentManifestDocumentReferenceStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentManifestDocumentReferenceStatus = exports.DocumentManifestDocumentReferenceStatus || (exports.DocumentManifestDocumentReferenceStatus = {}));
/**
 * current | superseded | entered-in-error
 * The status of this document reference.
 * This is the status of the DocumentReference object, which might be independent from the docStatus element.

This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
 */
var DocumentReferenceStatus;
(function (DocumentReferenceStatus) {
    DocumentReferenceStatus["CURRENT"] = "current";
    DocumentReferenceStatus["SUPERSEDED"] = "superseded";
    DocumentReferenceStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentReferenceStatus = exports.DocumentReferenceStatus || (exports.DocumentReferenceStatus = {}));
/**
 * preliminary | final | amended | entered-in-error
 * The status of the underlying document.
 * The document that is pointed to might be in various lifecycle states.
 */
var DocumentReferenceReferredDocumentStatus;
(function (DocumentReferenceReferredDocumentStatus) {
    DocumentReferenceReferredDocumentStatus["PRELIMINARY"] = "preliminary";
    DocumentReferenceReferredDocumentStatus["FINAL"] = "final";
    DocumentReferenceReferredDocumentStatus["AMENDED"] = "amended";
    DocumentReferenceReferredDocumentStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentReferenceReferredDocumentStatus = exports.DocumentReferenceReferredDocumentStatus || (exports.DocumentReferenceReferredDocumentStatus = {}));
/**
 * replaces | transforms | signs | appends
 * The type of relationship that this document has with anther document.
 * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
 */
var DocumentReferenceDocumentRelationshipType;
(function (DocumentReferenceDocumentRelationshipType) {
    DocumentReferenceDocumentRelationshipType["REPLACES"] = "replaces";
    DocumentReferenceDocumentRelationshipType["TRANSFORMS"] = "transforms";
    DocumentReferenceDocumentRelationshipType["SIGNS"] = "signs";
    DocumentReferenceDocumentRelationshipType["APPENDS"] = "appends";
})(DocumentReferenceDocumentRelationshipType = exports.DocumentReferenceDocumentRelationshipType || (exports.DocumentReferenceDocumentRelationshipType = {}));
/**
 * draft | active | retired | unknown
 * The status of this effect evidence synthesis. Enables tracking the life-cycle of the content.
 * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
 */
var EffectEvidenceSynthesisPublicationStatus;
(function (EffectEvidenceSynthesisPublicationStatus) {
    EffectEvidenceSynthesisPublicationStatus["DRAFT"] = "draft";
    EffectEvidenceSynthesisPublicationStatus["ACTIVE"] = "active";
    EffectEvidenceSynthesisPublicationStatus["RETIRED"] = "retired";
    EffectEvidenceSynthesisPublicationStatus["UNKNOWN"] = "unknown";
})(EffectEvidenceSynthesisPublicationStatus = exports.EffectEvidenceSynthesisPublicationStatus || (exports.EffectEvidenceSynthesisPublicationStatus = {}));
/**
 * exposure | exposure-alternative
 * Whether these results are for the exposure state or alternative exposure state.
 */
var EffectEvidenceSynthesisExposureState;
(function (EffectEvidenceSynthesisExposureState) {
    EffectEvidenceSynthesisExposureState["EXPOSURE"] = "exposure";
    EffectEvidenceSynthesisExposureState["EXPOSURE_ALTERNATIVE"] = "exposure-alternative";
})(EffectEvidenceSynthesisExposureState = exports.EffectEvidenceSynthesisExposureState || (exports.EffectEvidenceSynthesisExposureState = {}));
/**
 * planned | active | reserved | completed
 * The status of the participants' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.
 * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
 */
var EncounterLocationStatus;
(function (EncounterLocationStatus) {
    EncounterLocationStatus["PLANNED"] = "planned";
    EncounterLocationStatus["ACTIVE"] = "active";
    EncounterLocationStatus["RESERVED"] = "reserved";
    EncounterLocationStatus["COMPLETED"] = "completed";
})(EncounterLocationStatus = exports.EncounterLocationStatus || (exports.EncounterLocationStatus = {}));
/**
 * active | suspended | error | off | entered-in-error | test
 * active | suspended | error | off | test.
 * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
 */
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["ACTIVE"] = "active";
    EndpointStatus["SUSPENDED"] = "suspended";
    EndpointStatus["ERROR"] = "error";
    EndpointStatus["OFF"] = "off";
    EndpointStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    EndpointStatus["TEST"] = "test";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
 */
var EnrollmentRequestStatus;
(function (EnrollmentRequestStatus) {
    EnrollmentRequestStatus["ACTIVE"] = "active";
    EnrollmentRequestStatus["CANCELLED"] = "cancelled";
    EnrollmentRequestStatus["DRAFT"] = "draft";
    EnrollmentRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(EnrollmentRequestStatus = exports.EnrollmentRequestStatus || (exports.EnrollmentRequestStatus = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
 */
var EnrollmentResponseStatus;
(function (EnrollmentResponseStatus) {
    EnrollmentResponseStatus["ACTIVE"] = "active";
    EnrollmentResponseStatus["CANCELLED"] = "cancelled";
    EnrollmentResponseStatus["DRAFT"] = "draft";
    EnrollmentResponseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(EnrollmentResponseStatus = exports.EnrollmentResponseStatus || (exports.EnrollmentResponseStatus = {}));
/**
 * queued | complete | error | partial
 * Processing status: error, complete.
 */
var EnrollmentResponseRemittanceOutcome;
(function (EnrollmentResponseRemittanceOutcome) {
    EnrollmentResponseRemittanceOutcome["QUEUED"] = "queued";
    EnrollmentResponseRemittanceOutcome["COMPLETE"] = "complete";
    EnrollmentResponseRemittanceOutcome["ERROR"] = "error";
    EnrollmentResponseRemittanceOutcome["PARTIAL"] = "partial";
})(EnrollmentResponseRemittanceOutcome = exports.EnrollmentResponseRemittanceOutcome || (exports.EnrollmentResponseRemittanceOutcome = {}));
/**
 * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
 * planned | waitlist | active | onhold | finished | cancelled.
 * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
 */
var EpisodeOfCareStatus;
(function (EpisodeOfCareStatus) {
    EpisodeOfCareStatus["PLANNED"] = "planned";
    EpisodeOfCareStatus["WAITLIST"] = "waitlist";
    EpisodeOfCareStatus["ACTIVE"] = "active";
    EpisodeOfCareStatus["ONHOLD"] = "onhold";
    EpisodeOfCareStatus["FINISHED"] = "finished";
    EpisodeOfCareStatus["CANCELLED"] = "cancelled";
    EpisodeOfCareStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(EpisodeOfCareStatus = exports.EpisodeOfCareStatus || (exports.EpisodeOfCareStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this event definition. Enables tracking the life-cycle of the content.
 * Allows filtering of event definitions that are appropriate for use versus not.
 */
var EventDefinitionPublicationStatus;
(function (EventDefinitionPublicationStatus) {
    EventDefinitionPublicationStatus["DRAFT"] = "draft";
    EventDefinitionPublicationStatus["ACTIVE"] = "active";
    EventDefinitionPublicationStatus["RETIRED"] = "retired";
    EventDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(EventDefinitionPublicationStatus = exports.EventDefinitionPublicationStatus || (exports.EventDefinitionPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this evidence. Enables tracking the life-cycle of the content.
 * Allows filtering of evidences that are appropriate for use versus not.
 */
var EvidencePublicationStatus;
(function (EvidencePublicationStatus) {
    EvidencePublicationStatus["DRAFT"] = "draft";
    EvidencePublicationStatus["ACTIVE"] = "active";
    EvidencePublicationStatus["RETIRED"] = "retired";
    EvidencePublicationStatus["UNKNOWN"] = "unknown";
})(EvidencePublicationStatus = exports.EvidencePublicationStatus || (exports.EvidencePublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this evidence variable. Enables tracking the life-cycle of the content.
 * Allows filtering of evidence variables that are appropriate for use versus not.
 */
var EvidenceVariablePublicationStatus;
(function (EvidenceVariablePublicationStatus) {
    EvidenceVariablePublicationStatus["DRAFT"] = "draft";
    EvidenceVariablePublicationStatus["ACTIVE"] = "active";
    EvidenceVariablePublicationStatus["RETIRED"] = "retired";
    EvidenceVariablePublicationStatus["UNKNOWN"] = "unknown";
})(EvidenceVariablePublicationStatus = exports.EvidenceVariablePublicationStatus || (exports.EvidenceVariablePublicationStatus = {}));
/**
 * dichotomous | continuous | descriptive
 * The type of evidence element, a population, an exposure, or an outcome.
 */
var EvidenceVariableType;
(function (EvidenceVariableType) {
    EvidenceVariableType["DICHOTOMOUS"] = "dichotomous";
    EvidenceVariableType["CONTINUOUS"] = "continuous";
    EvidenceVariableType["DESCRIPTIVE"] = "descriptive";
})(EvidenceVariableType = exports.EvidenceVariableType || (exports.EvidenceVariableType = {}));
/**
 * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
 * Indicates how elements are aggregated within the study effective period.
 */
var EvidenceVariableGroupMeasure;
(function (EvidenceVariableGroupMeasure) {
    EvidenceVariableGroupMeasure["MEAN"] = "mean";
    EvidenceVariableGroupMeasure["MEDIAN"] = "median";
    EvidenceVariableGroupMeasure["MEAN_OF_MEAN"] = "mean-of-mean";
    EvidenceVariableGroupMeasure["MEAN_OF_MEDIAN"] = "mean-of-median";
    EvidenceVariableGroupMeasure["MEDIAN_OF_MEAN"] = "median-of-mean";
    EvidenceVariableGroupMeasure["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(EvidenceVariableGroupMeasure = exports.EvidenceVariableGroupMeasure || (exports.EvidenceVariableGroupMeasure = {}));
/**
 * draft | active | retired | unknown
 * The status of this example scenario. Enables tracking the life-cycle of the content.
 * Allows filtering of example scenarios that are appropriate for use versus not.
 */
var ExampleScenarioPublicationStatus;
(function (ExampleScenarioPublicationStatus) {
    ExampleScenarioPublicationStatus["DRAFT"] = "draft";
    ExampleScenarioPublicationStatus["ACTIVE"] = "active";
    ExampleScenarioPublicationStatus["RETIRED"] = "retired";
    ExampleScenarioPublicationStatus["UNKNOWN"] = "unknown";
})(ExampleScenarioPublicationStatus = exports.ExampleScenarioPublicationStatus || (exports.ExampleScenarioPublicationStatus = {}));
/**
 * person | entity
 * The type of actor - person or system.
 */
var ExampleScenarioActorType;
(function (ExampleScenarioActorType) {
    ExampleScenarioActorType["PERSON"] = "person";
    ExampleScenarioActorType["ENTITY"] = "entity";
})(ExampleScenarioActorType = exports.ExampleScenarioActorType || (exports.ExampleScenarioActorType = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ExplanationOfBenefitStatus;
(function (ExplanationOfBenefitStatus) {
    ExplanationOfBenefitStatus["ACTIVE"] = "active";
    ExplanationOfBenefitStatus["CANCELLED"] = "cancelled";
    ExplanationOfBenefitStatus["DRAFT"] = "draft";
    ExplanationOfBenefitStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ExplanationOfBenefitStatus = exports.ExplanationOfBenefitStatus || (exports.ExplanationOfBenefitStatus = {}));
/**
 * claim | preauthorization | predetermination
 * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
 */
var ExplanationOfBenefitUse;
(function (ExplanationOfBenefitUse) {
    ExplanationOfBenefitUse["CLAIM"] = "claim";
    ExplanationOfBenefitUse["PREAUTHORIZATION"] = "preauthorization";
    ExplanationOfBenefitUse["PREDETERMINATION"] = "predetermination";
})(ExplanationOfBenefitUse = exports.ExplanationOfBenefitUse || (exports.ExplanationOfBenefitUse = {}));
/**
 * queued | complete | error | partial
 * The outcome of the claim, predetermination, or preauthorization processing.
 * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
 */
var ExplanationOfBenefitRemittanceOutcome;
(function (ExplanationOfBenefitRemittanceOutcome) {
    ExplanationOfBenefitRemittanceOutcome["QUEUED"] = "queued";
    ExplanationOfBenefitRemittanceOutcome["COMPLETE"] = "complete";
    ExplanationOfBenefitRemittanceOutcome["ERROR"] = "error";
    ExplanationOfBenefitRemittanceOutcome["PARTIAL"] = "partial";
})(ExplanationOfBenefitRemittanceOutcome = exports.ExplanationOfBenefitRemittanceOutcome || (exports.ExplanationOfBenefitRemittanceOutcome = {}));
/**
 * display | print | printoper
 * The business purpose of the note text.
 */
var ExplanationOfBenefitNoteType;
(function (ExplanationOfBenefitNoteType) {
    ExplanationOfBenefitNoteType["DISPLAY"] = "display";
    ExplanationOfBenefitNoteType["PRINT"] = "print";
    ExplanationOfBenefitNoteType["PRINTOPER"] = "printoper";
})(ExplanationOfBenefitNoteType = exports.ExplanationOfBenefitNoteType || (exports.ExplanationOfBenefitNoteType = {}));
/**
 * partial | completed | entered-in-error | health-unknown
 * A code specifying the status of the record of the family history of a specific family member.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var FamilyMemberHistoryFamilyHistoryStatus;
(function (FamilyMemberHistoryFamilyHistoryStatus) {
    FamilyMemberHistoryFamilyHistoryStatus["PARTIAL"] = "partial";
    FamilyMemberHistoryFamilyHistoryStatus["COMPLETED"] = "completed";
    FamilyMemberHistoryFamilyHistoryStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    FamilyMemberHistoryFamilyHistoryStatus["HEALTH_UNKNOWN"] = "health-unknown";
})(FamilyMemberHistoryFamilyHistoryStatus = exports.FamilyMemberHistoryFamilyHistoryStatus || (exports.FamilyMemberHistoryFamilyHistoryStatus = {}));
/**
 * active | inactive | entered-in-error
 * Supports basic workflow.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var FlagStatus;
(function (FlagStatus) {
    FlagStatus["ACTIVE"] = "active";
    FlagStatus["INACTIVE"] = "inactive";
    FlagStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(FlagStatus = exports.FlagStatus || (exports.FlagStatus = {}));
/**
 * proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
 * The state of the goal throughout its lifecycle.
 * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
 */
var GoalLifecycleStatus;
(function (GoalLifecycleStatus) {
    GoalLifecycleStatus["PROPOSED"] = "proposed";
    GoalLifecycleStatus["PLANNED"] = "planned";
    GoalLifecycleStatus["ACCEPTED"] = "accepted";
    GoalLifecycleStatus["ACTIVE"] = "active";
    GoalLifecycleStatus["ON_HOLD"] = "on-hold";
    GoalLifecycleStatus["COMPLETED"] = "completed";
    GoalLifecycleStatus["CANCELLED"] = "cancelled";
    GoalLifecycleStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    GoalLifecycleStatus["REJECTED"] = "rejected";
})(GoalLifecycleStatus = exports.GoalLifecycleStatus || (exports.GoalLifecycleStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this graph definition. Enables tracking the life-cycle of the content.
 * Allows filtering of graph definitions that are appropriate for use versus not.
 */
var GraphDefinitionPublicationStatus;
(function (GraphDefinitionPublicationStatus) {
    GraphDefinitionPublicationStatus["DRAFT"] = "draft";
    GraphDefinitionPublicationStatus["ACTIVE"] = "active";
    GraphDefinitionPublicationStatus["RETIRED"] = "retired";
    GraphDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(GraphDefinitionPublicationStatus = exports.GraphDefinitionPublicationStatus || (exports.GraphDefinitionPublicationStatus = {}));
/**
 * condition | requirement
 * Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed.
 * All conditional rules are evaluated; if they are true, then the rules are evaluated.
 */
var GraphDefinitionGraphCompartmentUse;
(function (GraphDefinitionGraphCompartmentUse) {
    GraphDefinitionGraphCompartmentUse["CONDITION"] = "condition";
    GraphDefinitionGraphCompartmentUse["REQUIREMENT"] = "requirement";
})(GraphDefinitionGraphCompartmentUse = exports.GraphDefinitionGraphCompartmentUse || (exports.GraphDefinitionGraphCompartmentUse = {}));
/**
 * Patient | Encounter | RelatedPerson | Practitioner | Device
 * Identifies the compartment.
 */
var GraphDefinitionCompartmentCode;
(function (GraphDefinitionCompartmentCode) {
    GraphDefinitionCompartmentCode["PATIENT"] = "Patient";
    GraphDefinitionCompartmentCode["ENCOUNTER"] = "Encounter";
    GraphDefinitionCompartmentCode["RELATEDPERSON"] = "RelatedPerson";
    GraphDefinitionCompartmentCode["PRACTITIONER"] = "Practitioner";
    GraphDefinitionCompartmentCode["DEVICE"] = "Device";
})(GraphDefinitionCompartmentCode = exports.GraphDefinitionCompartmentCode || (exports.GraphDefinitionCompartmentCode = {}));
/**
 * identical | matching | different | custom
 * identical | matching | different | no-rule | custom.
 */
var GraphDefinitionGraphCompartmentRule;
(function (GraphDefinitionGraphCompartmentRule) {
    GraphDefinitionGraphCompartmentRule["IDENTICAL"] = "identical";
    GraphDefinitionGraphCompartmentRule["MATCHING"] = "matching";
    GraphDefinitionGraphCompartmentRule["DIFFERENT"] = "different";
    GraphDefinitionGraphCompartmentRule["CUSTOM"] = "custom";
})(GraphDefinitionGraphCompartmentRule = exports.GraphDefinitionGraphCompartmentRule || (exports.GraphDefinitionGraphCompartmentRule = {}));
/**
 * person | animal | practitioner | device | medication | substance
 * Identifies the broad classification of the kind of resources the group includes.
 * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
 */
var GroupType;
(function (GroupType) {
    GroupType["PERSON"] = "person";
    GroupType["ANIMAL"] = "animal";
    GroupType["PRACTITIONER"] = "practitioner";
    GroupType["DEVICE"] = "device";
    GroupType["MEDICATION"] = "medication";
    GroupType["SUBSTANCE"] = "substance";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
/**
 * success | data-requested | data-required | in-progress | failure | entered-in-error
 * The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var GuidanceResponseStatus;
(function (GuidanceResponseStatus) {
    GuidanceResponseStatus["SUCCESS"] = "success";
    GuidanceResponseStatus["DATA_REQUESTED"] = "data-requested";
    GuidanceResponseStatus["DATA_REQUIRED"] = "data-required";
    GuidanceResponseStatus["IN_PROGRESS"] = "in-progress";
    GuidanceResponseStatus["FAILURE"] = "failure";
    GuidanceResponseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(GuidanceResponseStatus = exports.GuidanceResponseStatus || (exports.GuidanceResponseStatus = {}));
/**
 * mon | tue | wed | thu | fri | sat | sun
 * Indicates which days of the week are available between the start and end Times.
 */
var HealthcareServiceDaysOfWeek;
(function (HealthcareServiceDaysOfWeek) {
    HealthcareServiceDaysOfWeek["MON"] = "mon";
    HealthcareServiceDaysOfWeek["TUE"] = "tue";
    HealthcareServiceDaysOfWeek["WED"] = "wed";
    HealthcareServiceDaysOfWeek["THU"] = "thu";
    HealthcareServiceDaysOfWeek["FRI"] = "fri";
    HealthcareServiceDaysOfWeek["SAT"] = "sat";
    HealthcareServiceDaysOfWeek["SUN"] = "sun";
})(HealthcareServiceDaysOfWeek = exports.HealthcareServiceDaysOfWeek || (exports.HealthcareServiceDaysOfWeek = {}));
/**
 * registered | available | cancelled | entered-in-error | unknown
 * The current state of the ImagingStudy.
 * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
 */
var ImagingStudyStatus;
(function (ImagingStudyStatus) {
    ImagingStudyStatus["REGISTERED"] = "registered";
    ImagingStudyStatus["AVAILABLE"] = "available";
    ImagingStudyStatus["CANCELLED"] = "cancelled";
    ImagingStudyStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ImagingStudyStatus["UNKNOWN"] = "unknown";
})(ImagingStudyStatus = exports.ImagingStudyStatus || (exports.ImagingStudyStatus = {}));
/**
 * completed | entered-in-error | not-done
 * Indicates the current status of the immunization event.
 * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ImmunizationStatus;
(function (ImmunizationStatus) {
    ImmunizationStatus["COMPLETED"] = "completed";
    ImmunizationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ImmunizationStatus["NOT_DONE"] = "not-done";
})(ImmunizationStatus = exports.ImmunizationStatus || (exports.ImmunizationStatus = {}));
/**
 * completed | entered-in-error
 * Indicates the current status of the evaluation of the vaccination administration event.
 */
var ImmunizationEvaluationStatus;
(function (ImmunizationEvaluationStatus) {
    ImmunizationEvaluationStatus["COMPLETED"] = "completed";
    ImmunizationEvaluationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ImmunizationEvaluationStatus = exports.ImmunizationEvaluationStatus || (exports.ImmunizationEvaluationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this implementation guide. Enables tracking the life-cycle of the content.
 * Allows filtering of implementation guides that are appropriate for use versus not.
 */
var ImplementationGuidePublicationStatus;
(function (ImplementationGuidePublicationStatus) {
    ImplementationGuidePublicationStatus["DRAFT"] = "draft";
    ImplementationGuidePublicationStatus["ACTIVE"] = "active";
    ImplementationGuidePublicationStatus["RETIRED"] = "retired";
    ImplementationGuidePublicationStatus["UNKNOWN"] = "unknown";
})(ImplementationGuidePublicationStatus = exports.ImplementationGuidePublicationStatus || (exports.ImplementationGuidePublicationStatus = {}));
/**
 * html | markdown | xml | generated
 * A code that indicates how the page is generated.
 */
var ImplementationGuideGuidePageGeneration;
(function (ImplementationGuideGuidePageGeneration) {
    ImplementationGuideGuidePageGeneration["HTML"] = "html";
    ImplementationGuideGuidePageGeneration["MARKDOWN"] = "markdown";
    ImplementationGuideGuidePageGeneration["XML"] = "xml";
    ImplementationGuideGuidePageGeneration["GENERATED"] = "generated";
})(ImplementationGuideGuidePageGeneration = exports.ImplementationGuideGuidePageGeneration || (exports.ImplementationGuideGuidePageGeneration = {}));
/**
 * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template
 * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
 */
var ImplementationGuideGuideParameterCode;
(function (ImplementationGuideGuideParameterCode) {
    ImplementationGuideGuideParameterCode["APPLY"] = "apply";
    ImplementationGuideGuideParameterCode["PATH_RESOURCE"] = "path-resource";
    ImplementationGuideGuideParameterCode["PATH_PAGES"] = "path-pages";
    ImplementationGuideGuideParameterCode["PATH_TX_CACHE"] = "path-tx-cache";
    ImplementationGuideGuideParameterCode["EXPANSION_PARAMETER"] = "expansion-parameter";
    ImplementationGuideGuideParameterCode["RULE_BROKEN_LINKS"] = "rule-broken-links";
    ImplementationGuideGuideParameterCode["GENERATE_XML"] = "generate-xml";
    ImplementationGuideGuideParameterCode["GENERATE_JSON"] = "generate-json";
    ImplementationGuideGuideParameterCode["GENERATE_TURTLE"] = "generate-turtle";
    ImplementationGuideGuideParameterCode["HTML_TEMPLATE"] = "html-template";
})(ImplementationGuideGuideParameterCode = exports.ImplementationGuideGuideParameterCode || (exports.ImplementationGuideGuideParameterCode = {}));
/**
 * draft | active | retired | unknown
 * The current state of the health insurance product.
 */
var InsurancePlanPublicationStatus;
(function (InsurancePlanPublicationStatus) {
    InsurancePlanPublicationStatus["DRAFT"] = "draft";
    InsurancePlanPublicationStatus["ACTIVE"] = "active";
    InsurancePlanPublicationStatus["RETIRED"] = "retired";
    InsurancePlanPublicationStatus["UNKNOWN"] = "unknown";
})(InsurancePlanPublicationStatus = exports.InsurancePlanPublicationStatus || (exports.InsurancePlanPublicationStatus = {}));
/**
 * draft | issued | balanced | cancelled | entered-in-error
 * The current state of the Invoice.
 */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["DRAFT"] = "draft";
    InvoiceStatus["ISSUED"] = "issued";
    InvoiceStatus["BALANCED"] = "balanced";
    InvoiceStatus["CANCELLED"] = "cancelled";
    InvoiceStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
/**
 * base | surcharge | deduction | discount | tax | informational
 * This code identifies the type of the component.
 */
var InvoicePriceComponentType;
(function (InvoicePriceComponentType) {
    InvoicePriceComponentType["BASE"] = "base";
    InvoicePriceComponentType["SURCHARGE"] = "surcharge";
    InvoicePriceComponentType["DEDUCTION"] = "deduction";
    InvoicePriceComponentType["DISCOUNT"] = "discount";
    InvoicePriceComponentType["TAX"] = "tax";
    InvoicePriceComponentType["INFORMATIONAL"] = "informational";
})(InvoicePriceComponentType = exports.InvoicePriceComponentType || (exports.InvoicePriceComponentType = {}));
/**
 * draft | active | retired | unknown
 * The status of this library. Enables tracking the life-cycle of the content.
 * Allows filtering of libraries that are appropriate for use vs. not.
 */
var LibraryPublicationStatus;
(function (LibraryPublicationStatus) {
    LibraryPublicationStatus["DRAFT"] = "draft";
    LibraryPublicationStatus["ACTIVE"] = "active";
    LibraryPublicationStatus["RETIRED"] = "retired";
    LibraryPublicationStatus["UNKNOWN"] = "unknown";
})(LibraryPublicationStatus = exports.LibraryPublicationStatus || (exports.LibraryPublicationStatus = {}));
/**
 * source | alternate | historical
 * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
 */
var LinkageType;
(function (LinkageType) {
    LinkageType["SOURCE"] = "source";
    LinkageType["ALTERNATE"] = "alternate";
    LinkageType["HISTORICAL"] = "historical";
})(LinkageType = exports.LinkageType || (exports.LinkageType = {}));
/**
 * current | retired | entered-in-error
 * Indicates the current state of this list.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ListStatus;
(function (ListStatus) {
    ListStatus["CURRENT"] = "current";
    ListStatus["RETIRED"] = "retired";
    ListStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ListStatus = exports.ListStatus || (exports.ListStatus = {}));
/**
 * working | snapshot | changes
 * How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
 * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
 */
var ListMode;
(function (ListMode) {
    ListMode["WORKING"] = "working";
    ListMode["SNAPSHOT"] = "snapshot";
    ListMode["CHANGES"] = "changes";
})(ListMode = exports.ListMode || (exports.ListMode = {}));
/**
 * active | suspended | inactive
 * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
 */
var LocationStatus;
(function (LocationStatus) {
    LocationStatus["ACTIVE"] = "active";
    LocationStatus["SUSPENDED"] = "suspended";
    LocationStatus["INACTIVE"] = "inactive";
})(LocationStatus = exports.LocationStatus || (exports.LocationStatus = {}));
/**
 * instance | kind
 * Indicates whether a resource instance represents a specific location or a class of locations.
 * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
 */
var LocationMode;
(function (LocationMode) {
    LocationMode["INSTANCE"] = "instance";
    LocationMode["KIND"] = "kind";
})(LocationMode = exports.LocationMode || (exports.LocationMode = {}));
/**
 * mon | tue | wed | thu | fri | sat | sun
 * Indicates which days of the week are available between the start and end Times.
 */
var LocationDaysOfWeek;
(function (LocationDaysOfWeek) {
    LocationDaysOfWeek["MON"] = "mon";
    LocationDaysOfWeek["TUE"] = "tue";
    LocationDaysOfWeek["WED"] = "wed";
    LocationDaysOfWeek["THU"] = "thu";
    LocationDaysOfWeek["FRI"] = "fri";
    LocationDaysOfWeek["SAT"] = "sat";
    LocationDaysOfWeek["SUN"] = "sun";
})(LocationDaysOfWeek = exports.LocationDaysOfWeek || (exports.LocationDaysOfWeek = {}));
/**
 * draft | active | retired | unknown
 * The status of this measure. Enables tracking the life-cycle of the content.
 * Allows filtering of measures that are appropriate for use versus not.
 */
var MeasurePublicationStatus;
(function (MeasurePublicationStatus) {
    MeasurePublicationStatus["DRAFT"] = "draft";
    MeasurePublicationStatus["ACTIVE"] = "active";
    MeasurePublicationStatus["RETIRED"] = "retired";
    MeasurePublicationStatus["UNKNOWN"] = "unknown";
})(MeasurePublicationStatus = exports.MeasurePublicationStatus || (exports.MeasurePublicationStatus = {}));
/**
 * complete | pending | error
 * The MeasureReport status. No data will be available until the MeasureReport status is complete.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var MeasureReportStatus;
(function (MeasureReportStatus) {
    MeasureReportStatus["COMPLETE"] = "complete";
    MeasureReportStatus["PENDING"] = "pending";
    MeasureReportStatus["ERROR"] = "error";
})(MeasureReportStatus = exports.MeasureReportStatus || (exports.MeasureReportStatus = {}));
/**
 * individual | subject-list | summary | data-collection
 * The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
 * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
 */
var MeasureReportType;
(function (MeasureReportType) {
    MeasureReportType["INDIVIDUAL"] = "individual";
    MeasureReportType["SUBJECT_LIST"] = "subject-list";
    MeasureReportType["SUMMARY"] = "summary";
    MeasureReportType["DATA_COLLECTION"] = "data-collection";
})(MeasureReportType = exports.MeasureReportType || (exports.MeasureReportType = {}));
/**
 * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * The current state of the {{title}}.
 * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation

Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
 */
var MediaStatus;
(function (MediaStatus) {
    MediaStatus["PREPARATION"] = "preparation";
    MediaStatus["IN_PROGRESS"] = "in-progress";
    MediaStatus["NOT_DONE"] = "not-done";
    MediaStatus["ON_HOLD"] = "on-hold";
    MediaStatus["STOPPED"] = "stopped";
    MediaStatus["COMPLETED"] = "completed";
    MediaStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MediaStatus["UNKNOWN"] = "unknown";
})(MediaStatus = exports.MediaStatus || (exports.MediaStatus = {}));
/**
 * active | inactive | entered-in-error
 * A code to indicate if the medication is in active use.
 * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
 */
var MedicationStatus;
(function (MedicationStatus) {
    MedicationStatus["ACTIVE"] = "active";
    MedicationStatus["INACTIVE"] = "inactive";
    MedicationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(MedicationStatus = exports.MedicationStatus || (exports.MedicationStatus = {}));
/**
 * in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
 * Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var MedicationAdministrationStatus;
(function (MedicationAdministrationStatus) {
    MedicationAdministrationStatus["IN_PROGRESS"] = "in-progress";
    MedicationAdministrationStatus["NOT_DONE"] = "not-done";
    MedicationAdministrationStatus["ON_HOLD"] = "on-hold";
    MedicationAdministrationStatus["COMPLETED"] = "completed";
    MedicationAdministrationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationAdministrationStatus["STOPPED"] = "stopped";
    MedicationAdministrationStatus["UNKNOWN"] = "unknown";
})(MedicationAdministrationStatus = exports.MedicationAdministrationStatus || (exports.MedicationAdministrationStatus = {}));
/**
 * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
 * A code specifying the state of the set of dispense events.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var MedicationDispenseStatus;
(function (MedicationDispenseStatus) {
    MedicationDispenseStatus["PREPARATION"] = "preparation";
    MedicationDispenseStatus["IN_PROGRESS"] = "in-progress";
    MedicationDispenseStatus["CANCELLED"] = "cancelled";
    MedicationDispenseStatus["ON_HOLD"] = "on-hold";
    MedicationDispenseStatus["COMPLETED"] = "completed";
    MedicationDispenseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationDispenseStatus["STOPPED"] = "stopped";
    MedicationDispenseStatus["DECLINED"] = "declined";
    MedicationDispenseStatus["UNKNOWN"] = "unknown";
})(MedicationDispenseStatus = exports.MedicationDispenseStatus || (exports.MedicationDispenseStatus = {}));
/**
 * active | inactive | entered-in-error
 * A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.
 * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
 */
var MedicationKnowledgeStatus;
(function (MedicationKnowledgeStatus) {
    MedicationKnowledgeStatus["ACTIVE"] = "active";
    MedicationKnowledgeStatus["INACTIVE"] = "inactive";
    MedicationKnowledgeStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(MedicationKnowledgeStatus = exports.MedicationKnowledgeStatus || (exports.MedicationKnowledgeStatus = {}));
/**
 * active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
 * A code specifying the current state of the order.  Generally, this will be active or completed state.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var MedicationRequestStatus;
(function (MedicationRequestStatus) {
    MedicationRequestStatus["ACTIVE"] = "active";
    MedicationRequestStatus["ON_HOLD"] = "on-hold";
    MedicationRequestStatus["CANCELLED"] = "cancelled";
    MedicationRequestStatus["COMPLETED"] = "completed";
    MedicationRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationRequestStatus["STOPPED"] = "stopped";
    MedicationRequestStatus["DRAFT"] = "draft";
    MedicationRequestStatus["UNKNOWN"] = "unknown";
})(MedicationRequestStatus = exports.MedicationRequestStatus || (exports.MedicationRequestStatus = {}));
/**
 * proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
 * Whether the request is a proposal, plan, or an original order.
 * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.

An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.

This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
 */
var MedicationRequestIntent;
(function (MedicationRequestIntent) {
    MedicationRequestIntent["PROPOSAL"] = "proposal";
    MedicationRequestIntent["PLAN"] = "plan";
    MedicationRequestIntent["ORDER"] = "order";
    MedicationRequestIntent["ORIGINAL_ORDER"] = "original-order";
    MedicationRequestIntent["REFLEX_ORDER"] = "reflex-order";
    MedicationRequestIntent["FILLER_ORDER"] = "filler-order";
    MedicationRequestIntent["INSTANCE_ORDER"] = "instance-order";
    MedicationRequestIntent["OPTION"] = "option";
})(MedicationRequestIntent = exports.MedicationRequestIntent || (exports.MedicationRequestIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the Medication Request should be addressed with respect to other requests.
 */
var MedicationRequestPriority;
(function (MedicationRequestPriority) {
    MedicationRequestPriority["ROUTINE"] = "routine";
    MedicationRequestPriority["URGENT"] = "urgent";
    MedicationRequestPriority["ASAP"] = "asap";
    MedicationRequestPriority["STAT"] = "stat";
})(MedicationRequestPriority = exports.MedicationRequestPriority || (exports.MedicationRequestPriority = {}));
/**
 * active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
 * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed.
 * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var MedicationStatementStatus;
(function (MedicationStatementStatus) {
    MedicationStatementStatus["ACTIVE"] = "active";
    MedicationStatementStatus["COMPLETED"] = "completed";
    MedicationStatementStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationStatementStatus["INTENDED"] = "intended";
    MedicationStatementStatus["STOPPED"] = "stopped";
    MedicationStatementStatus["ON_HOLD"] = "on-hold";
    MedicationStatementStatus["UNKNOWN"] = "unknown";
    MedicationStatementStatus["NOT_TAKEN"] = "not-taken";
})(MedicationStatementStatus = exports.MedicationStatementStatus || (exports.MedicationStatementStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this message definition. Enables tracking the life-cycle of the content.
 * Allows filtering of message definitions that are appropriate for use versus not.
 */
var MessageDefinitionPublicationStatus;
(function (MessageDefinitionPublicationStatus) {
    MessageDefinitionPublicationStatus["DRAFT"] = "draft";
    MessageDefinitionPublicationStatus["ACTIVE"] = "active";
    MessageDefinitionPublicationStatus["RETIRED"] = "retired";
    MessageDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(MessageDefinitionPublicationStatus = exports.MessageDefinitionPublicationStatus || (exports.MessageDefinitionPublicationStatus = {}));
/**
 * consequence | currency | notification
 * The impact of the content of the message.
 */
var MessageDefinitionMessageSignificanceCategory;
(function (MessageDefinitionMessageSignificanceCategory) {
    MessageDefinitionMessageSignificanceCategory["CONSEQUENCE"] = "consequence";
    MessageDefinitionMessageSignificanceCategory["CURRENCY"] = "currency";
    MessageDefinitionMessageSignificanceCategory["NOTIFICATION"] = "notification";
})(MessageDefinitionMessageSignificanceCategory = exports.MessageDefinitionMessageSignificanceCategory || (exports.MessageDefinitionMessageSignificanceCategory = {}));
/**
 * always | on-error | never | on-success
 * Declare at a message definition level whether a response is required or only upon error or success, or never.
 * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
 */
var MessageDefinitionmessageheader_response_request;
(function (MessageDefinitionmessageheader_response_request) {
    MessageDefinitionmessageheader_response_request["ALWAYS"] = "always";
    MessageDefinitionmessageheader_response_request["ON_ERROR"] = "on-error";
    MessageDefinitionmessageheader_response_request["NEVER"] = "never";
    MessageDefinitionmessageheader_response_request["ON_SUCCESS"] = "on-success";
})(MessageDefinitionmessageheader_response_request = exports.MessageDefinitionmessageheader_response_request || (exports.MessageDefinitionmessageheader_response_request = {}));
/**
 * ok | transient-error | fatal-error
 * Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
 * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
 */
var MessageHeaderResponseType;
(function (MessageHeaderResponseType) {
    MessageHeaderResponseType["OK"] = "ok";
    MessageHeaderResponseType["TRANSIENT_ERROR"] = "transient-error";
    MessageHeaderResponseType["FATAL_ERROR"] = "fatal-error";
})(MessageHeaderResponseType = exports.MessageHeaderResponseType || (exports.MessageHeaderResponseType = {}));
/**
 * aa | dna | rna
 * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
 */
var MolecularSequencesequenceType;
(function (MolecularSequencesequenceType) {
    MolecularSequencesequenceType["AA"] = "aa";
    MolecularSequencesequenceType["DNA"] = "dna";
    MolecularSequencesequenceType["RNA"] = "rna";
})(MolecularSequencesequenceType = exports.MolecularSequencesequenceType || (exports.MolecularSequencesequenceType = {}));
/**
 * sense | antisense
 * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
 */
var MolecularSequenceorientationType;
(function (MolecularSequenceorientationType) {
    MolecularSequenceorientationType["SENSE"] = "sense";
    MolecularSequenceorientationType["ANTISENSE"] = "antisense";
})(MolecularSequenceorientationType = exports.MolecularSequenceorientationType || (exports.MolecularSequenceorientationType = {}));
/**
 * watson | crick
 * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
 */
var MolecularSequencestrandType;
(function (MolecularSequencestrandType) {
    MolecularSequencestrandType["WATSON"] = "watson";
    MolecularSequencestrandType["CRICK"] = "crick";
})(MolecularSequencestrandType = exports.MolecularSequencestrandType || (exports.MolecularSequencestrandType = {}));
/**
 * indel | snp | unknown
 * INDEL / SNP / Undefined variant.
 */
var MolecularSequencequalityType;
(function (MolecularSequencequalityType) {
    MolecularSequencequalityType["INDEL"] = "indel";
    MolecularSequencequalityType["SNP"] = "snp";
    MolecularSequencequalityType["UNKNOWN"] = "unknown";
})(MolecularSequencequalityType = exports.MolecularSequencequalityType || (exports.MolecularSequencequalityType = {}));
/**
 * directlink | openapi | login | oauth | other
 * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
 */
var MolecularSequencerepositoryType;
(function (MolecularSequencerepositoryType) {
    MolecularSequencerepositoryType["DIRECTLINK"] = "directlink";
    MolecularSequencerepositoryType["OPENAPI"] = "openapi";
    MolecularSequencerepositoryType["LOGIN"] = "login";
    MolecularSequencerepositoryType["OAUTH"] = "oauth";
    MolecularSequencerepositoryType["OTHER"] = "other";
})(MolecularSequencerepositoryType = exports.MolecularSequencerepositoryType || (exports.MolecularSequencerepositoryType = {}));
/**
 * draft | active | retired | unknown
 * The status of this naming system. Enables tracking the life-cycle of the content.
 * Allows filtering of naming systems that are appropriate for use versus not.
 */
var NamingSystemPublicationStatus;
(function (NamingSystemPublicationStatus) {
    NamingSystemPublicationStatus["DRAFT"] = "draft";
    NamingSystemPublicationStatus["ACTIVE"] = "active";
    NamingSystemPublicationStatus["RETIRED"] = "retired";
    NamingSystemPublicationStatus["UNKNOWN"] = "unknown";
})(NamingSystemPublicationStatus = exports.NamingSystemPublicationStatus || (exports.NamingSystemPublicationStatus = {}));
/**
 * codesystem | identifier | root
 * Indicates the purpose for the naming system - what kinds of things does it make unique?
 */
var NamingSystemType;
(function (NamingSystemType) {
    NamingSystemType["CODESYSTEM"] = "codesystem";
    NamingSystemType["IDENTIFIER"] = "identifier";
    NamingSystemType["ROOT"] = "root";
})(NamingSystemType = exports.NamingSystemType || (exports.NamingSystemType = {}));
/**
 * oid | uuid | uri | other
 * Identifies the unique identifier scheme used for this particular identifier.
 * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
 */
var NamingSystemIdentifierType;
(function (NamingSystemIdentifierType) {
    NamingSystemIdentifierType["OID"] = "oid";
    NamingSystemIdentifierType["UUID"] = "uuid";
    NamingSystemIdentifierType["URI"] = "uri";
    NamingSystemIdentifierType["OTHER"] = "other";
})(NamingSystemIdentifierType = exports.NamingSystemIdentifierType || (exports.NamingSystemIdentifierType = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * The workflow status of the nutrition order/request.
 * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var NutritionOrderStatus;
(function (NutritionOrderStatus) {
    NutritionOrderStatus["DRAFT"] = "draft";
    NutritionOrderStatus["ACTIVE"] = "active";
    NutritionOrderStatus["ON_HOLD"] = "on-hold";
    NutritionOrderStatus["REVOKED"] = "revoked";
    NutritionOrderStatus["COMPLETED"] = "completed";
    NutritionOrderStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    NutritionOrderStatus["UNKNOWN"] = "unknown";
})(NutritionOrderStatus = exports.NutritionOrderStatus || (exports.NutritionOrderStatus = {}));
/**
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain.
 * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
 */
var NutritionOrderNutritiionOrderIntent;
(function (NutritionOrderNutritiionOrderIntent) {
    NutritionOrderNutritiionOrderIntent["PROPOSAL"] = "proposal";
    NutritionOrderNutritiionOrderIntent["PLAN"] = "plan";
    NutritionOrderNutritiionOrderIntent["DIRECTIVE"] = "directive";
    NutritionOrderNutritiionOrderIntent["ORDER"] = "order";
    NutritionOrderNutritiionOrderIntent["ORIGINAL_ORDER"] = "original-order";
    NutritionOrderNutritiionOrderIntent["REFLEX_ORDER"] = "reflex-order";
    NutritionOrderNutritiionOrderIntent["FILLER_ORDER"] = "filler-order";
    NutritionOrderNutritiionOrderIntent["INSTANCE_ORDER"] = "instance-order";
    NutritionOrderNutritiionOrderIntent["OPTION"] = "option";
})(NutritionOrderNutritiionOrderIntent = exports.NutritionOrderNutritiionOrderIntent || (exports.NutritionOrderNutritiionOrderIntent = {}));
/**
 * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
 * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
 */
var ObservationDefinitionObservationDataType;
(function (ObservationDefinitionObservationDataType) {
    ObservationDefinitionObservationDataType["QUANTITY"] = "Quantity";
    ObservationDefinitionObservationDataType["CODEABLECONCEPT"] = "CodeableConcept";
    ObservationDefinitionObservationDataType["STRING"] = "string";
    ObservationDefinitionObservationDataType["BOOLEAN"] = "boolean";
    ObservationDefinitionObservationDataType["INTEGER"] = "integer";
    ObservationDefinitionObservationDataType["RANGE"] = "Range";
    ObservationDefinitionObservationDataType["RATIO"] = "Ratio";
    ObservationDefinitionObservationDataType["SAMPLEDDATA"] = "SampledData";
    ObservationDefinitionObservationDataType["TIME"] = "time";
    ObservationDefinitionObservationDataType["DATETIME"] = "dateTime";
    ObservationDefinitionObservationDataType["PERIOD"] = "Period";
})(ObservationDefinitionObservationDataType = exports.ObservationDefinitionObservationDataType || (exports.ObservationDefinitionObservationDataType = {}));
/**
 * reference | critical | absolute
 * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
 */
var ObservationDefinitionObservationRangeCategory;
(function (ObservationDefinitionObservationRangeCategory) {
    ObservationDefinitionObservationRangeCategory["REFERENCE"] = "reference";
    ObservationDefinitionObservationRangeCategory["CRITICAL"] = "critical";
    ObservationDefinitionObservationRangeCategory["ABSOLUTE"] = "absolute";
})(ObservationDefinitionObservationRangeCategory = exports.ObservationDefinitionObservationRangeCategory || (exports.ObservationDefinitionObservationRangeCategory = {}));
/**
 * male | female | other | unknown
 * Sex of the population the range applies to.
 */
var ObservationDefinitionAdministrativeGender;
(function (ObservationDefinitionAdministrativeGender) {
    ObservationDefinitionAdministrativeGender["MALE"] = "male";
    ObservationDefinitionAdministrativeGender["FEMALE"] = "female";
    ObservationDefinitionAdministrativeGender["OTHER"] = "other";
    ObservationDefinitionAdministrativeGender["UNKNOWN"] = "unknown";
})(ObservationDefinitionAdministrativeGender = exports.ObservationDefinitionAdministrativeGender || (exports.ObservationDefinitionAdministrativeGender = {}));
/**
 * draft | active | retired | unknown
 * The status of this operation definition. Enables tracking the life-cycle of the content.
 * Allows filtering of operation definitions that are appropriate for use versus not.
 */
var OperationDefinitionPublicationStatus;
(function (OperationDefinitionPublicationStatus) {
    OperationDefinitionPublicationStatus["DRAFT"] = "draft";
    OperationDefinitionPublicationStatus["ACTIVE"] = "active";
    OperationDefinitionPublicationStatus["RETIRED"] = "retired";
    OperationDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(OperationDefinitionPublicationStatus = exports.OperationDefinitionPublicationStatus || (exports.OperationDefinitionPublicationStatus = {}));
/**
 * operation | query
 * Whether this is an operation or a named query.
 * Named queries are invoked differently, and have different capabilities.
 */
var OperationDefinitionOperationKind;
(function (OperationDefinitionOperationKind) {
    OperationDefinitionOperationKind["OPERATION"] = "operation";
    OperationDefinitionOperationKind["QUERY"] = "query";
})(OperationDefinitionOperationKind = exports.OperationDefinitionOperationKind || (exports.OperationDefinitionOperationKind = {}));
/**
 * in | out
 * Whether this is an input or an output parameter.
 * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
 */
var OperationDefinitionOperationParameterUse;
(function (OperationDefinitionOperationParameterUse) {
    OperationDefinitionOperationParameterUse["IN"] = "in";
    OperationDefinitionOperationParameterUse["OUT"] = "out";
})(OperationDefinitionOperationParameterUse = exports.OperationDefinitionOperationParameterUse || (exports.OperationDefinitionOperationParameterUse = {}));
/**
 * number | date | string | token | reference | composite | quantity | uri | special
 * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
 */
var OperationDefinitionSearchParamType;
(function (OperationDefinitionSearchParamType) {
    OperationDefinitionSearchParamType["NUMBER"] = "number";
    OperationDefinitionSearchParamType["DATE"] = "date";
    OperationDefinitionSearchParamType["STRING"] = "string";
    OperationDefinitionSearchParamType["TOKEN"] = "token";
    OperationDefinitionSearchParamType["REFERENCE"] = "reference";
    OperationDefinitionSearchParamType["COMPOSITE"] = "composite";
    OperationDefinitionSearchParamType["QUANTITY"] = "quantity";
    OperationDefinitionSearchParamType["URI"] = "uri";
    OperationDefinitionSearchParamType["SPECIAL"] = "special";
})(OperationDefinitionSearchParamType = exports.OperationDefinitionSearchParamType || (exports.OperationDefinitionSearchParamType = {}));
/**
 * required | extensible | preferred | example
 * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
 * For further discussion, see [Using Terminologies](terminologies.html).
 */
var OperationDefinitionBindingStrength;
(function (OperationDefinitionBindingStrength) {
    OperationDefinitionBindingStrength["REQUIRED"] = "required";
    OperationDefinitionBindingStrength["EXTENSIBLE"] = "extensible";
    OperationDefinitionBindingStrength["PREFERRED"] = "preferred";
    OperationDefinitionBindingStrength["EXAMPLE"] = "example";
})(OperationDefinitionBindingStrength = exports.OperationDefinitionBindingStrength || (exports.OperationDefinitionBindingStrength = {}));
/**
 * fatal | error | warning | information
 * Indicates whether the issue indicates a variation from successful processing.
 * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
 */
var OperationOutcomeIssueSeverity;
(function (OperationOutcomeIssueSeverity) {
    OperationOutcomeIssueSeverity["FATAL"] = "fatal";
    OperationOutcomeIssueSeverity["ERROR"] = "error";
    OperationOutcomeIssueSeverity["WARNING"] = "warning";
    OperationOutcomeIssueSeverity["INFORMATION"] = "information";
})(OperationOutcomeIssueSeverity = exports.OperationOutcomeIssueSeverity || (exports.OperationOutcomeIssueSeverity = {}));
/**
 * male | female | other | unknown
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
 */
var PatientAdministrativeGender;
(function (PatientAdministrativeGender) {
    PatientAdministrativeGender["MALE"] = "male";
    PatientAdministrativeGender["FEMALE"] = "female";
    PatientAdministrativeGender["OTHER"] = "other";
    PatientAdministrativeGender["UNKNOWN"] = "unknown";
})(PatientAdministrativeGender = exports.PatientAdministrativeGender || (exports.PatientAdministrativeGender = {}));
/**
 * replaced-by | replaces | refer | seealso
 * The type of link between this patient resource and another patient resource.
 */
var PatientLinkType;
(function (PatientLinkType) {
    PatientLinkType["REPLACED_BY"] = "replaced-by";
    PatientLinkType["REPLACES"] = "replaces";
    PatientLinkType["REFER"] = "refer";
    PatientLinkType["SEEALSO"] = "seealso";
})(PatientLinkType = exports.PatientLinkType || (exports.PatientLinkType = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var PaymentNoticeStatus;
(function (PaymentNoticeStatus) {
    PaymentNoticeStatus["ACTIVE"] = "active";
    PaymentNoticeStatus["CANCELLED"] = "cancelled";
    PaymentNoticeStatus["DRAFT"] = "draft";
    PaymentNoticeStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(PaymentNoticeStatus = exports.PaymentNoticeStatus || (exports.PaymentNoticeStatus = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var PaymentReconciliationStatus;
(function (PaymentReconciliationStatus) {
    PaymentReconciliationStatus["ACTIVE"] = "active";
    PaymentReconciliationStatus["CANCELLED"] = "cancelled";
    PaymentReconciliationStatus["DRAFT"] = "draft";
    PaymentReconciliationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(PaymentReconciliationStatus = exports.PaymentReconciliationStatus || (exports.PaymentReconciliationStatus = {}));
/**
 * queued | complete | error | partial
 * The outcome of a request for a reconciliation.
 * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
 */
var PaymentReconciliationRemittanceOutcome;
(function (PaymentReconciliationRemittanceOutcome) {
    PaymentReconciliationRemittanceOutcome["QUEUED"] = "queued";
    PaymentReconciliationRemittanceOutcome["COMPLETE"] = "complete";
    PaymentReconciliationRemittanceOutcome["ERROR"] = "error";
    PaymentReconciliationRemittanceOutcome["PARTIAL"] = "partial";
})(PaymentReconciliationRemittanceOutcome = exports.PaymentReconciliationRemittanceOutcome || (exports.PaymentReconciliationRemittanceOutcome = {}));
/**
 * display | print | printoper
 * The business purpose of the note text.
 */
var PaymentReconciliationNoteType;
(function (PaymentReconciliationNoteType) {
    PaymentReconciliationNoteType["DISPLAY"] = "display";
    PaymentReconciliationNoteType["PRINT"] = "print";
    PaymentReconciliationNoteType["PRINTOPER"] = "printoper";
})(PaymentReconciliationNoteType = exports.PaymentReconciliationNoteType || (exports.PaymentReconciliationNoteType = {}));
/**
 * male | female | other | unknown
 * Administrative Gender.
 * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
 */
var PersonAdministrativeGender;
(function (PersonAdministrativeGender) {
    PersonAdministrativeGender["MALE"] = "male";
    PersonAdministrativeGender["FEMALE"] = "female";
    PersonAdministrativeGender["OTHER"] = "other";
    PersonAdministrativeGender["UNKNOWN"] = "unknown";
})(PersonAdministrativeGender = exports.PersonAdministrativeGender || (exports.PersonAdministrativeGender = {}));
/**
 * level1 | level2 | level3 | level4
 * Level of assurance that this link is associated with the target resource.
 */
var PersonIdentityAssuranceLevel;
(function (PersonIdentityAssuranceLevel) {
    PersonIdentityAssuranceLevel["LEVEL1"] = "level1";
    PersonIdentityAssuranceLevel["LEVEL2"] = "level2";
    PersonIdentityAssuranceLevel["LEVEL3"] = "level3";
    PersonIdentityAssuranceLevel["LEVEL4"] = "level4";
})(PersonIdentityAssuranceLevel = exports.PersonIdentityAssuranceLevel || (exports.PersonIdentityAssuranceLevel = {}));
/**
 * draft | active | retired | unknown
 * The status of this plan definition. Enables tracking the life-cycle of the content.
 * Allows filtering of plan definitions that are appropriate for use versus not.
 */
var PlanDefinitionPublicationStatus;
(function (PlanDefinitionPublicationStatus) {
    PlanDefinitionPublicationStatus["DRAFT"] = "draft";
    PlanDefinitionPublicationStatus["ACTIVE"] = "active";
    PlanDefinitionPublicationStatus["RETIRED"] = "retired";
    PlanDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(PlanDefinitionPublicationStatus = exports.PlanDefinitionPublicationStatus || (exports.PlanDefinitionPublicationStatus = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the action should be addressed with respect to other actions.
 */
var PlanDefinitionRequestPriority;
(function (PlanDefinitionRequestPriority) {
    PlanDefinitionRequestPriority["ROUTINE"] = "routine";
    PlanDefinitionRequestPriority["URGENT"] = "urgent";
    PlanDefinitionRequestPriority["ASAP"] = "asap";
    PlanDefinitionRequestPriority["STAT"] = "stat";
})(PlanDefinitionRequestPriority = exports.PlanDefinitionRequestPriority || (exports.PlanDefinitionRequestPriority = {}));
/**
 * applicability | start | stop
 * The kind of condition.
 * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
 */
var PlanDefinitionActionConditionKind;
(function (PlanDefinitionActionConditionKind) {
    PlanDefinitionActionConditionKind["APPLICABILITY"] = "applicability";
    PlanDefinitionActionConditionKind["START"] = "start";
    PlanDefinitionActionConditionKind["STOP"] = "stop";
})(PlanDefinitionActionConditionKind = exports.PlanDefinitionActionConditionKind || (exports.PlanDefinitionActionConditionKind = {}));
/**
 * before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
 * The relationship of this action to the related action.
 */
var PlanDefinitionActionRelationshipType;
(function (PlanDefinitionActionRelationshipType) {
    PlanDefinitionActionRelationshipType["BEFORE_START"] = "before-start";
    PlanDefinitionActionRelationshipType["BEFORE"] = "before";
    PlanDefinitionActionRelationshipType["BEFORE_END"] = "before-end";
    PlanDefinitionActionRelationshipType["CONCURRENT_WITH_START"] = "concurrent-with-start";
    PlanDefinitionActionRelationshipType["CONCURRENT"] = "concurrent";
    PlanDefinitionActionRelationshipType["CONCURRENT_WITH_END"] = "concurrent-with-end";
    PlanDefinitionActionRelationshipType["AFTER_START"] = "after-start";
    PlanDefinitionActionRelationshipType["AFTER"] = "after";
    PlanDefinitionActionRelationshipType["AFTER_END"] = "after-end";
})(PlanDefinitionActionRelationshipType = exports.PlanDefinitionActionRelationshipType || (exports.PlanDefinitionActionRelationshipType = {}));
/**
 * patient | practitioner | related-person | device
 * The type of participant in the action.
 */
var PlanDefinitionActionParticipantType;
(function (PlanDefinitionActionParticipantType) {
    PlanDefinitionActionParticipantType["PATIENT"] = "patient";
    PlanDefinitionActionParticipantType["PRACTITIONER"] = "practitioner";
    PlanDefinitionActionParticipantType["RELATED_PERSON"] = "related-person";
    PlanDefinitionActionParticipantType["DEVICE"] = "device";
})(PlanDefinitionActionParticipantType = exports.PlanDefinitionActionParticipantType || (exports.PlanDefinitionActionParticipantType = {}));
/**
 * visual-group | logical-group | sentence-group
 * Defines the grouping behavior for the action and its children.
 */
var PlanDefinitionActionGroupingBehavior;
(function (PlanDefinitionActionGroupingBehavior) {
    PlanDefinitionActionGroupingBehavior["VISUAL_GROUP"] = "visual-group";
    PlanDefinitionActionGroupingBehavior["LOGICAL_GROUP"] = "logical-group";
    PlanDefinitionActionGroupingBehavior["SENTENCE_GROUP"] = "sentence-group";
})(PlanDefinitionActionGroupingBehavior = exports.PlanDefinitionActionGroupingBehavior || (exports.PlanDefinitionActionGroupingBehavior = {}));
/**
 * any | all | all-or-none | exactly-one | at-most-one | one-or-more
 * Defines the selection behavior for the action and its children.
 */
var PlanDefinitionActionSelectionBehavior;
(function (PlanDefinitionActionSelectionBehavior) {
    PlanDefinitionActionSelectionBehavior["ANY"] = "any";
    PlanDefinitionActionSelectionBehavior["ALL"] = "all";
    PlanDefinitionActionSelectionBehavior["ALL_OR_NONE"] = "all-or-none";
    PlanDefinitionActionSelectionBehavior["EXACTLY_ONE"] = "exactly-one";
    PlanDefinitionActionSelectionBehavior["AT_MOST_ONE"] = "at-most-one";
    PlanDefinitionActionSelectionBehavior["ONE_OR_MORE"] = "one-or-more";
})(PlanDefinitionActionSelectionBehavior = exports.PlanDefinitionActionSelectionBehavior || (exports.PlanDefinitionActionSelectionBehavior = {}));
/**
 * must | could | must-unless-documented
 * Defines the required behavior for the action.
 */
var PlanDefinitionActionRequiredBehavior;
(function (PlanDefinitionActionRequiredBehavior) {
    PlanDefinitionActionRequiredBehavior["MUST"] = "must";
    PlanDefinitionActionRequiredBehavior["COULD"] = "could";
    PlanDefinitionActionRequiredBehavior["MUST_UNLESS_DOCUMENTED"] = "must-unless-documented";
})(PlanDefinitionActionRequiredBehavior = exports.PlanDefinitionActionRequiredBehavior || (exports.PlanDefinitionActionRequiredBehavior = {}));
/**
 * yes | no
 * Defines whether the action should usually be preselected.
 */
var PlanDefinitionActionPrecheckBehavior;
(function (PlanDefinitionActionPrecheckBehavior) {
    PlanDefinitionActionPrecheckBehavior["YES"] = "yes";
    PlanDefinitionActionPrecheckBehavior["NO"] = "no";
})(PlanDefinitionActionPrecheckBehavior = exports.PlanDefinitionActionPrecheckBehavior || (exports.PlanDefinitionActionPrecheckBehavior = {}));
/**
 * single | multiple
 * Defines whether the action can be selected multiple times.
 */
var PlanDefinitionActionCardinalityBehavior;
(function (PlanDefinitionActionCardinalityBehavior) {
    PlanDefinitionActionCardinalityBehavior["SINGLE"] = "single";
    PlanDefinitionActionCardinalityBehavior["MULTIPLE"] = "multiple";
})(PlanDefinitionActionCardinalityBehavior = exports.PlanDefinitionActionCardinalityBehavior || (exports.PlanDefinitionActionCardinalityBehavior = {}));
/**
 * male | female | other | unknown
 * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
 */
var PractitionerAdministrativeGender;
(function (PractitionerAdministrativeGender) {
    PractitionerAdministrativeGender["MALE"] = "male";
    PractitionerAdministrativeGender["FEMALE"] = "female";
    PractitionerAdministrativeGender["OTHER"] = "other";
    PractitionerAdministrativeGender["UNKNOWN"] = "unknown";
})(PractitionerAdministrativeGender = exports.PractitionerAdministrativeGender || (exports.PractitionerAdministrativeGender = {}));
/**
 * mon | tue | wed | thu | fri | sat | sun
 * Indicates which days of the week are available between the start and end Times.
 */
var PractitionerRoleDaysOfWeek;
(function (PractitionerRoleDaysOfWeek) {
    PractitionerRoleDaysOfWeek["MON"] = "mon";
    PractitionerRoleDaysOfWeek["TUE"] = "tue";
    PractitionerRoleDaysOfWeek["WED"] = "wed";
    PractitionerRoleDaysOfWeek["THU"] = "thu";
    PractitionerRoleDaysOfWeek["FRI"] = "fri";
    PractitionerRoleDaysOfWeek["SAT"] = "sat";
    PractitionerRoleDaysOfWeek["SUN"] = "sun";
})(PractitionerRoleDaysOfWeek = exports.PractitionerRoleDaysOfWeek || (exports.PractitionerRoleDaysOfWeek = {}));
/**
 * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
 * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ProcedureStatus;
(function (ProcedureStatus) {
    ProcedureStatus["PREPARATION"] = "preparation";
    ProcedureStatus["IN_PROGRESS"] = "in-progress";
    ProcedureStatus["NOT_DONE"] = "not-done";
    ProcedureStatus["ON_HOLD"] = "on-hold";
    ProcedureStatus["STOPPED"] = "stopped";
    ProcedureStatus["COMPLETED"] = "completed";
    ProcedureStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ProcedureStatus["UNKNOWN"] = "unknown";
})(ProcedureStatus = exports.ProcedureStatus || (exports.ProcedureStatus = {}));
/**
 * derivation | revision | quotation | source | removal
 * How the entity was used during the activity.
 */
var ProvenanceEntityRole;
(function (ProvenanceEntityRole) {
    ProvenanceEntityRole["DERIVATION"] = "derivation";
    ProvenanceEntityRole["REVISION"] = "revision";
    ProvenanceEntityRole["QUOTATION"] = "quotation";
    ProvenanceEntityRole["SOURCE"] = "source";
    ProvenanceEntityRole["REMOVAL"] = "removal";
})(ProvenanceEntityRole = exports.ProvenanceEntityRole || (exports.ProvenanceEntityRole = {}));
/**
 * draft | active | retired | unknown
 * The status of this questionnaire. Enables tracking the life-cycle of the content.
 * Allows filtering of questionnaires that are appropriate for use versus not.
 */
var QuestionnairePublicationStatus;
(function (QuestionnairePublicationStatus) {
    QuestionnairePublicationStatus["DRAFT"] = "draft";
    QuestionnairePublicationStatus["ACTIVE"] = "active";
    QuestionnairePublicationStatus["RETIRED"] = "retired";
    QuestionnairePublicationStatus["UNKNOWN"] = "unknown";
})(QuestionnairePublicationStatus = exports.QuestionnairePublicationStatus || (exports.QuestionnairePublicationStatus = {}));
/**
 * exists | = | != | > | < | >= | <=
 * Specifies the criteria by which the question is enabled.
 */
var QuestionnaireItemOperator;
(function (QuestionnaireItemOperator) {
    QuestionnaireItemOperator["EXISTS"] = "exists";
    QuestionnaireItemOperator["E"] = "=";
    QuestionnaireItemOperator["NE"] = "!=";
    QuestionnaireItemOperator["GT"] = ">";
    QuestionnaireItemOperator["LT"] = "<";
    QuestionnaireItemOperator["GE"] = ">=";
    QuestionnaireItemOperator["LE"] = "<=";
})(QuestionnaireItemOperator = exports.QuestionnaireItemOperator || (exports.QuestionnaireItemOperator = {}));
/**
 * all | any
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 * This element must be specified if more than one enableWhen value is provided.
 */
var QuestionnaireEnableWhenBehavior;
(function (QuestionnaireEnableWhenBehavior) {
    QuestionnaireEnableWhenBehavior["ALL"] = "all";
    QuestionnaireEnableWhenBehavior["ANY"] = "any";
})(QuestionnaireEnableWhenBehavior = exports.QuestionnaireEnableWhenBehavior || (exports.QuestionnaireEnableWhenBehavior = {}));
/**
 * in-progress | completed | amended | entered-in-error | stopped
 * The position of the questionnaire response within its overall lifecycle.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var QuestionnaireResponseStatus;
(function (QuestionnaireResponseStatus) {
    QuestionnaireResponseStatus["IN_PROGRESS"] = "in-progress";
    QuestionnaireResponseStatus["COMPLETED"] = "completed";
    QuestionnaireResponseStatus["AMENDED"] = "amended";
    QuestionnaireResponseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    QuestionnaireResponseStatus["STOPPED"] = "stopped";
})(QuestionnaireResponseStatus = exports.QuestionnaireResponseStatus || (exports.QuestionnaireResponseStatus = {}));
/**
 * male | female | other | unknown
 * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
 */
var RelatedPersonAdministrativeGender;
(function (RelatedPersonAdministrativeGender) {
    RelatedPersonAdministrativeGender["MALE"] = "male";
    RelatedPersonAdministrativeGender["FEMALE"] = "female";
    RelatedPersonAdministrativeGender["OTHER"] = "other";
    RelatedPersonAdministrativeGender["UNKNOWN"] = "unknown";
})(RelatedPersonAdministrativeGender = exports.RelatedPersonAdministrativeGender || (exports.RelatedPersonAdministrativeGender = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
 */
var RequestGroupRequestStatus;
(function (RequestGroupRequestStatus) {
    RequestGroupRequestStatus["DRAFT"] = "draft";
    RequestGroupRequestStatus["ACTIVE"] = "active";
    RequestGroupRequestStatus["ON_HOLD"] = "on-hold";
    RequestGroupRequestStatus["REVOKED"] = "revoked";
    RequestGroupRequestStatus["COMPLETED"] = "completed";
    RequestGroupRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    RequestGroupRequestStatus["UNKNOWN"] = "unknown";
})(RequestGroupRequestStatus = exports.RequestGroupRequestStatus || (exports.RequestGroupRequestStatus = {}));
/**
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
 */
var RequestGroupRequestIntent;
(function (RequestGroupRequestIntent) {
    RequestGroupRequestIntent["PROPOSAL"] = "proposal";
    RequestGroupRequestIntent["PLAN"] = "plan";
    RequestGroupRequestIntent["DIRECTIVE"] = "directive";
    RequestGroupRequestIntent["ORDER"] = "order";
    RequestGroupRequestIntent["ORIGINAL_ORDER"] = "original-order";
    RequestGroupRequestIntent["REFLEX_ORDER"] = "reflex-order";
    RequestGroupRequestIntent["FILLER_ORDER"] = "filler-order";
    RequestGroupRequestIntent["INSTANCE_ORDER"] = "instance-order";
    RequestGroupRequestIntent["OPTION"] = "option";
})(RequestGroupRequestIntent = exports.RequestGroupRequestIntent || (exports.RequestGroupRequestIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the request should be addressed with respect to other requests.
 */
var RequestGroupRequestPriority;
(function (RequestGroupRequestPriority) {
    RequestGroupRequestPriority["ROUTINE"] = "routine";
    RequestGroupRequestPriority["URGENT"] = "urgent";
    RequestGroupRequestPriority["ASAP"] = "asap";
    RequestGroupRequestPriority["STAT"] = "stat";
})(RequestGroupRequestPriority = exports.RequestGroupRequestPriority || (exports.RequestGroupRequestPriority = {}));
/**
 * applicability | start | stop
 * The kind of condition.
 * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
 */
var RequestGroupActionConditionKind;
(function (RequestGroupActionConditionKind) {
    RequestGroupActionConditionKind["APPLICABILITY"] = "applicability";
    RequestGroupActionConditionKind["START"] = "start";
    RequestGroupActionConditionKind["STOP"] = "stop";
})(RequestGroupActionConditionKind = exports.RequestGroupActionConditionKind || (exports.RequestGroupActionConditionKind = {}));
/**
 * before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
 * The relationship of this action to the related action.
 */
var RequestGroupActionRelationshipType;
(function (RequestGroupActionRelationshipType) {
    RequestGroupActionRelationshipType["BEFORE_START"] = "before-start";
    RequestGroupActionRelationshipType["BEFORE"] = "before";
    RequestGroupActionRelationshipType["BEFORE_END"] = "before-end";
    RequestGroupActionRelationshipType["CONCURRENT_WITH_START"] = "concurrent-with-start";
    RequestGroupActionRelationshipType["CONCURRENT"] = "concurrent";
    RequestGroupActionRelationshipType["CONCURRENT_WITH_END"] = "concurrent-with-end";
    RequestGroupActionRelationshipType["AFTER_START"] = "after-start";
    RequestGroupActionRelationshipType["AFTER"] = "after";
    RequestGroupActionRelationshipType["AFTER_END"] = "after-end";
})(RequestGroupActionRelationshipType = exports.RequestGroupActionRelationshipType || (exports.RequestGroupActionRelationshipType = {}));
/**
 * visual-group | logical-group | sentence-group
 * Defines the grouping behavior for the action and its children.
 */
var RequestGroupActionGroupingBehavior;
(function (RequestGroupActionGroupingBehavior) {
    RequestGroupActionGroupingBehavior["VISUAL_GROUP"] = "visual-group";
    RequestGroupActionGroupingBehavior["LOGICAL_GROUP"] = "logical-group";
    RequestGroupActionGroupingBehavior["SENTENCE_GROUP"] = "sentence-group";
})(RequestGroupActionGroupingBehavior = exports.RequestGroupActionGroupingBehavior || (exports.RequestGroupActionGroupingBehavior = {}));
/**
 * any | all | all-or-none | exactly-one | at-most-one | one-or-more
 * Defines the selection behavior for the action and its children.
 */
var RequestGroupActionSelectionBehavior;
(function (RequestGroupActionSelectionBehavior) {
    RequestGroupActionSelectionBehavior["ANY"] = "any";
    RequestGroupActionSelectionBehavior["ALL"] = "all";
    RequestGroupActionSelectionBehavior["ALL_OR_NONE"] = "all-or-none";
    RequestGroupActionSelectionBehavior["EXACTLY_ONE"] = "exactly-one";
    RequestGroupActionSelectionBehavior["AT_MOST_ONE"] = "at-most-one";
    RequestGroupActionSelectionBehavior["ONE_OR_MORE"] = "one-or-more";
})(RequestGroupActionSelectionBehavior = exports.RequestGroupActionSelectionBehavior || (exports.RequestGroupActionSelectionBehavior = {}));
/**
 * must | could | must-unless-documented
 * Defines expectations around whether an action is required.
 */
var RequestGroupActionRequiredBehavior;
(function (RequestGroupActionRequiredBehavior) {
    RequestGroupActionRequiredBehavior["MUST"] = "must";
    RequestGroupActionRequiredBehavior["COULD"] = "could";
    RequestGroupActionRequiredBehavior["MUST_UNLESS_DOCUMENTED"] = "must-unless-documented";
})(RequestGroupActionRequiredBehavior = exports.RequestGroupActionRequiredBehavior || (exports.RequestGroupActionRequiredBehavior = {}));
/**
 * yes | no
 * Defines whether the action should usually be preselected.
 */
var RequestGroupActionPrecheckBehavior;
(function (RequestGroupActionPrecheckBehavior) {
    RequestGroupActionPrecheckBehavior["YES"] = "yes";
    RequestGroupActionPrecheckBehavior["NO"] = "no";
})(RequestGroupActionPrecheckBehavior = exports.RequestGroupActionPrecheckBehavior || (exports.RequestGroupActionPrecheckBehavior = {}));
/**
 * single | multiple
 * Defines whether the action can be selected multiple times.
 */
var RequestGroupActionCardinalityBehavior;
(function (RequestGroupActionCardinalityBehavior) {
    RequestGroupActionCardinalityBehavior["SINGLE"] = "single";
    RequestGroupActionCardinalityBehavior["MULTIPLE"] = "multiple";
})(RequestGroupActionCardinalityBehavior = exports.RequestGroupActionCardinalityBehavior || (exports.RequestGroupActionCardinalityBehavior = {}));
/**
 * draft | active | retired | unknown
 * The status of this research definition. Enables tracking the life-cycle of the content.
 * Allows filtering of research definitions that are appropriate for use versus not.
 */
var ResearchDefinitionPublicationStatus;
(function (ResearchDefinitionPublicationStatus) {
    ResearchDefinitionPublicationStatus["DRAFT"] = "draft";
    ResearchDefinitionPublicationStatus["ACTIVE"] = "active";
    ResearchDefinitionPublicationStatus["RETIRED"] = "retired";
    ResearchDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ResearchDefinitionPublicationStatus = exports.ResearchDefinitionPublicationStatus || (exports.ResearchDefinitionPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this research element definition. Enables tracking the life-cycle of the content.
 * Allows filtering of research element definitions that are appropriate for use versus not.
 */
var ResearchElementDefinitionPublicationStatus;
(function (ResearchElementDefinitionPublicationStatus) {
    ResearchElementDefinitionPublicationStatus["DRAFT"] = "draft";
    ResearchElementDefinitionPublicationStatus["ACTIVE"] = "active";
    ResearchElementDefinitionPublicationStatus["RETIRED"] = "retired";
    ResearchElementDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ResearchElementDefinitionPublicationStatus = exports.ResearchElementDefinitionPublicationStatus || (exports.ResearchElementDefinitionPublicationStatus = {}));
/**
 * population | exposure | outcome
 * The type of research element, a population, an exposure, or an outcome.
 */
var ResearchElementDefinitionResearchElementType;
(function (ResearchElementDefinitionResearchElementType) {
    ResearchElementDefinitionResearchElementType["POPULATION"] = "population";
    ResearchElementDefinitionResearchElementType["EXPOSURE"] = "exposure";
    ResearchElementDefinitionResearchElementType["OUTCOME"] = "outcome";
})(ResearchElementDefinitionResearchElementType = exports.ResearchElementDefinitionResearchElementType || (exports.ResearchElementDefinitionResearchElementType = {}));
/**
 * dichotomous | continuous | descriptive
 * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
 */
var ResearchElementDefinitionVariableType;
(function (ResearchElementDefinitionVariableType) {
    ResearchElementDefinitionVariableType["DICHOTOMOUS"] = "dichotomous";
    ResearchElementDefinitionVariableType["CONTINUOUS"] = "continuous";
    ResearchElementDefinitionVariableType["DESCRIPTIVE"] = "descriptive";
})(ResearchElementDefinitionVariableType = exports.ResearchElementDefinitionVariableType || (exports.ResearchElementDefinitionVariableType = {}));
/**
 * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
 * Indicates how elements are aggregated within the study effective period.
 */
var ResearchElementDefinitionGroupMeasure;
(function (ResearchElementDefinitionGroupMeasure) {
    ResearchElementDefinitionGroupMeasure["MEAN"] = "mean";
    ResearchElementDefinitionGroupMeasure["MEDIAN"] = "median";
    ResearchElementDefinitionGroupMeasure["MEAN_OF_MEAN"] = "mean-of-mean";
    ResearchElementDefinitionGroupMeasure["MEAN_OF_MEDIAN"] = "mean-of-median";
    ResearchElementDefinitionGroupMeasure["MEDIAN_OF_MEAN"] = "median-of-mean";
    ResearchElementDefinitionGroupMeasure["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(ResearchElementDefinitionGroupMeasure = exports.ResearchElementDefinitionGroupMeasure || (exports.ResearchElementDefinitionGroupMeasure = {}));
/**
 * active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn
 * The current state of the study.
 */
var ResearchStudyStatus;
(function (ResearchStudyStatus) {
    ResearchStudyStatus["ACTIVE"] = "active";
    ResearchStudyStatus["ADMINISTRATIVELY_COMPLETED"] = "administratively-completed";
    ResearchStudyStatus["APPROVED"] = "approved";
    ResearchStudyStatus["CLOSED_TO_ACCRUAL"] = "closed-to-accrual";
    ResearchStudyStatus["CLOSED_TO_ACCRUAL_AND_INTERVENTION"] = "closed-to-accrual-and-intervention";
    ResearchStudyStatus["COMPLETED"] = "completed";
    ResearchStudyStatus["DISAPPROVED"] = "disapproved";
    ResearchStudyStatus["IN_REVIEW"] = "in-review";
    ResearchStudyStatus["TEMPORARILY_CLOSED_TO_ACCRUAL"] = "temporarily-closed-to-accrual";
    ResearchStudyStatus["TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION"] = "temporarily-closed-to-accrual-and-intervention";
    ResearchStudyStatus["WITHDRAWN"] = "withdrawn";
})(ResearchStudyStatus = exports.ResearchStudyStatus || (exports.ResearchStudyStatus = {}));
/**
 * candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
 * The current state of the subject.
 */
var ResearchSubjectStatus;
(function (ResearchSubjectStatus) {
    ResearchSubjectStatus["CANDIDATE"] = "candidate";
    ResearchSubjectStatus["ELIGIBLE"] = "eligible";
    ResearchSubjectStatus["FOLLOW_UP"] = "follow-up";
    ResearchSubjectStatus["INELIGIBLE"] = "ineligible";
    ResearchSubjectStatus["NOT_REGISTERED"] = "not-registered";
    ResearchSubjectStatus["OFF_STUDY"] = "off-study";
    ResearchSubjectStatus["ON_STUDY"] = "on-study";
    ResearchSubjectStatus["ON_STUDY_INTERVENTION"] = "on-study-intervention";
    ResearchSubjectStatus["ON_STUDY_OBSERVATION"] = "on-study-observation";
    ResearchSubjectStatus["PENDING_ON_STUDY"] = "pending-on-study";
    ResearchSubjectStatus["POTENTIAL_CANDIDATE"] = "potential-candidate";
    ResearchSubjectStatus["SCREENING"] = "screening";
    ResearchSubjectStatus["WITHDRAWN"] = "withdrawn";
})(ResearchSubjectStatus = exports.ResearchSubjectStatus || (exports.ResearchSubjectStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this risk evidence synthesis. Enables tracking the life-cycle of the content.
 * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
 */
var RiskEvidenceSynthesisPublicationStatus;
(function (RiskEvidenceSynthesisPublicationStatus) {
    RiskEvidenceSynthesisPublicationStatus["DRAFT"] = "draft";
    RiskEvidenceSynthesisPublicationStatus["ACTIVE"] = "active";
    RiskEvidenceSynthesisPublicationStatus["RETIRED"] = "retired";
    RiskEvidenceSynthesisPublicationStatus["UNKNOWN"] = "unknown";
})(RiskEvidenceSynthesisPublicationStatus = exports.RiskEvidenceSynthesisPublicationStatus || (exports.RiskEvidenceSynthesisPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this search parameter. Enables tracking the life-cycle of the content.
 * Allows filtering of search parameters that are appropriate for use versus not.
 */
var SearchParameterPublicationStatus;
(function (SearchParameterPublicationStatus) {
    SearchParameterPublicationStatus["DRAFT"] = "draft";
    SearchParameterPublicationStatus["ACTIVE"] = "active";
    SearchParameterPublicationStatus["RETIRED"] = "retired";
    SearchParameterPublicationStatus["UNKNOWN"] = "unknown";
})(SearchParameterPublicationStatus = exports.SearchParameterPublicationStatus || (exports.SearchParameterPublicationStatus = {}));
/**
 * number | date | string | token | reference | composite | quantity | uri | special
 * The type of value that a search parameter may contain, and how the content is interpreted.
 */
var SearchParameterSearchParamType;
(function (SearchParameterSearchParamType) {
    SearchParameterSearchParamType["NUMBER"] = "number";
    SearchParameterSearchParamType["DATE"] = "date";
    SearchParameterSearchParamType["STRING"] = "string";
    SearchParameterSearchParamType["TOKEN"] = "token";
    SearchParameterSearchParamType["REFERENCE"] = "reference";
    SearchParameterSearchParamType["COMPOSITE"] = "composite";
    SearchParameterSearchParamType["QUANTITY"] = "quantity";
    SearchParameterSearchParamType["URI"] = "uri";
    SearchParameterSearchParamType["SPECIAL"] = "special";
})(SearchParameterSearchParamType = exports.SearchParameterSearchParamType || (exports.SearchParameterSearchParamType = {}));
/**
 * normal | phonetic | nearby | distance | other
 * How the search parameter relates to the set of elements returned by evaluating the xpath query.
 */
var SearchParameterXPathUsageType;
(function (SearchParameterXPathUsageType) {
    SearchParameterXPathUsageType["NORMAL"] = "normal";
    SearchParameterXPathUsageType["PHONETIC"] = "phonetic";
    SearchParameterXPathUsageType["NEARBY"] = "nearby";
    SearchParameterXPathUsageType["DISTANCE"] = "distance";
    SearchParameterXPathUsageType["OTHER"] = "other";
})(SearchParameterXPathUsageType = exports.SearchParameterXPathUsageType || (exports.SearchParameterXPathUsageType = {}));
/**
 * eq | ne | gt | lt | ge | le | sa | eb | ap
 * Comparators supported for the search parameter.
 * If no comparators are listed, clients should not expect servers to support any comparators.
 */
var SearchParameterSearchComparator;
(function (SearchParameterSearchComparator) {
    SearchParameterSearchComparator["EQ"] = "eq";
    SearchParameterSearchComparator["NE"] = "ne";
    SearchParameterSearchComparator["GT"] = "gt";
    SearchParameterSearchComparator["LT"] = "lt";
    SearchParameterSearchComparator["GE"] = "ge";
    SearchParameterSearchComparator["LE"] = "le";
    SearchParameterSearchComparator["SA"] = "sa";
    SearchParameterSearchComparator["EB"] = "eb";
    SearchParameterSearchComparator["AP"] = "ap";
})(SearchParameterSearchComparator = exports.SearchParameterSearchComparator || (exports.SearchParameterSearchComparator = {}));
/**
 * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType
 * A modifier supported for the search parameter.
 */
var SearchParameterSearchModifierCode;
(function (SearchParameterSearchModifierCode) {
    SearchParameterSearchModifierCode["MISSING"] = "missing";
    SearchParameterSearchModifierCode["EXACT"] = "exact";
    SearchParameterSearchModifierCode["CONTAINS"] = "contains";
    SearchParameterSearchModifierCode["NOT"] = "not";
    SearchParameterSearchModifierCode["TEXT"] = "text";
    SearchParameterSearchModifierCode["IN"] = "in";
    SearchParameterSearchModifierCode["NOT_IN"] = "not-in";
    SearchParameterSearchModifierCode["BELOW"] = "below";
    SearchParameterSearchModifierCode["ABOVE"] = "above";
    SearchParameterSearchModifierCode["TYPE"] = "type";
    SearchParameterSearchModifierCode["IDENTIFIER"] = "identifier";
    SearchParameterSearchModifierCode["OFTYPE"] = "ofType";
})(SearchParameterSearchModifierCode = exports.SearchParameterSearchModifierCode || (exports.SearchParameterSearchModifierCode = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * The status of the order.
 * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, cancelled or suspended. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
 */
var ServiceRequestStatus;
(function (ServiceRequestStatus) {
    ServiceRequestStatus["DRAFT"] = "draft";
    ServiceRequestStatus["ACTIVE"] = "active";
    ServiceRequestStatus["ON_HOLD"] = "on-hold";
    ServiceRequestStatus["REVOKED"] = "revoked";
    ServiceRequestStatus["COMPLETED"] = "completed";
    ServiceRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ServiceRequestStatus["UNKNOWN"] = "unknown";
})(ServiceRequestStatus = exports.ServiceRequestStatus || (exports.ServiceRequestStatus = {}));
/**
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Whether the request is a proposal, plan, an original order or a reflex order.
 * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
 */
var ServiceRequestIntent;
(function (ServiceRequestIntent) {
    ServiceRequestIntent["PROPOSAL"] = "proposal";
    ServiceRequestIntent["PLAN"] = "plan";
    ServiceRequestIntent["DIRECTIVE"] = "directive";
    ServiceRequestIntent["ORDER"] = "order";
    ServiceRequestIntent["ORIGINAL_ORDER"] = "original-order";
    ServiceRequestIntent["REFLEX_ORDER"] = "reflex-order";
    ServiceRequestIntent["FILLER_ORDER"] = "filler-order";
    ServiceRequestIntent["INSTANCE_ORDER"] = "instance-order";
    ServiceRequestIntent["OPTION"] = "option";
})(ServiceRequestIntent = exports.ServiceRequestIntent || (exports.ServiceRequestIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
 */
var ServiceRequestPriority;
(function (ServiceRequestPriority) {
    ServiceRequestPriority["ROUTINE"] = "routine";
    ServiceRequestPriority["URGENT"] = "urgent";
    ServiceRequestPriority["ASAP"] = "asap";
    ServiceRequestPriority["STAT"] = "stat";
})(ServiceRequestPriority = exports.ServiceRequestPriority || (exports.ServiceRequestPriority = {}));
/**
 * busy | free | busy-unavailable | busy-tentative | entered-in-error
 * busy | free | busy-unavailable | busy-tentative | entered-in-error.
 */
var SlotStatus;
(function (SlotStatus) {
    SlotStatus["BUSY"] = "busy";
    SlotStatus["FREE"] = "free";
    SlotStatus["BUSY_UNAVAILABLE"] = "busy-unavailable";
    SlotStatus["BUSY_TENTATIVE"] = "busy-tentative";
    SlotStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(SlotStatus = exports.SlotStatus || (exports.SlotStatus = {}));
/**
 * available | unavailable | unsatisfactory | entered-in-error
 * The availability of the specimen.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var SpecimenStatus;
(function (SpecimenStatus) {
    SpecimenStatus["AVAILABLE"] = "available";
    SpecimenStatus["UNAVAILABLE"] = "unavailable";
    SpecimenStatus["UNSATISFACTORY"] = "unsatisfactory";
    SpecimenStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(SpecimenStatus = exports.SpecimenStatus || (exports.SpecimenStatus = {}));
/**
 * preferred | alternate
 * The preference for this type of conditioned specimen.
 */
var SpecimenDefinitionSpecimenContainedPreference;
(function (SpecimenDefinitionSpecimenContainedPreference) {
    SpecimenDefinitionSpecimenContainedPreference["PREFERRED"] = "preferred";
    SpecimenDefinitionSpecimenContainedPreference["ALTERNATE"] = "alternate";
})(SpecimenDefinitionSpecimenContainedPreference = exports.SpecimenDefinitionSpecimenContainedPreference || (exports.SpecimenDefinitionSpecimenContainedPreference = {}));
/**
 * draft | active | retired | unknown
 * The status of this structure definition. Enables tracking the life-cycle of the content.
 * Allows filtering of structure definitions that are appropriate for use versus not.
 */
var StructureDefinitionPublicationStatus;
(function (StructureDefinitionPublicationStatus) {
    StructureDefinitionPublicationStatus["DRAFT"] = "draft";
    StructureDefinitionPublicationStatus["ACTIVE"] = "active";
    StructureDefinitionPublicationStatus["RETIRED"] = "retired";
    StructureDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(StructureDefinitionPublicationStatus = exports.StructureDefinitionPublicationStatus || (exports.StructureDefinitionPublicationStatus = {}));
/**
 * primitive-type | complex-type | resource | logical
 * Defines the kind of structure that this definition is describing.
 */
var StructureDefinitionKind;
(function (StructureDefinitionKind) {
    StructureDefinitionKind["PRIMITIVE_TYPE"] = "primitive-type";
    StructureDefinitionKind["COMPLEX_TYPE"] = "complex-type";
    StructureDefinitionKind["RESOURCE"] = "resource";
    StructureDefinitionKind["LOGICAL"] = "logical";
})(StructureDefinitionKind = exports.StructureDefinitionKind || (exports.StructureDefinitionKind = {}));
/**
 * fhirpath | element | extension
 * Defines how to interpret the expression that defines what the context of the extension is.
 */
var StructureDefinitionExtensionContextType;
(function (StructureDefinitionExtensionContextType) {
    StructureDefinitionExtensionContextType["FHIRPATH"] = "fhirpath";
    StructureDefinitionExtensionContextType["ELEMENT"] = "element";
    StructureDefinitionExtensionContextType["EXTENSION"] = "extension";
})(StructureDefinitionExtensionContextType = exports.StructureDefinitionExtensionContextType || (exports.StructureDefinitionExtensionContextType = {}));
/**
 * specialization | constraint - How relates to base definition
 * How the type relates to the baseDefinition.
 * If the definition is a specialization, then it adds new elements in the differential, and the snapshot includes the inherited elements.  If the definition is a constraint, then it cannot define new elements, it can only make new rules about existing content (see [Profiling Resources](profiling.html#resources)).
 */
var StructureDefinitionTypeDerivationRule;
(function (StructureDefinitionTypeDerivationRule) {
    StructureDefinitionTypeDerivationRule["SPECIALIZATION"] = "specialization";
    StructureDefinitionTypeDerivationRule["CONSTRAINT"] = "constraint";
})(StructureDefinitionTypeDerivationRule = exports.StructureDefinitionTypeDerivationRule || (exports.StructureDefinitionTypeDerivationRule = {}));
/**
 * draft | active | retired | unknown
 * The status of this structure map. Enables tracking the life-cycle of the content.
 * Allows filtering of structure maps that are appropriate for use versus not.
 */
var StructureMapPublicationStatus;
(function (StructureMapPublicationStatus) {
    StructureMapPublicationStatus["DRAFT"] = "draft";
    StructureMapPublicationStatus["ACTIVE"] = "active";
    StructureMapPublicationStatus["RETIRED"] = "retired";
    StructureMapPublicationStatus["UNKNOWN"] = "unknown";
})(StructureMapPublicationStatus = exports.StructureMapPublicationStatus || (exports.StructureMapPublicationStatus = {}));
/**
 * source | queried | target | produced
 * How the referenced structure is used in this mapping.
 */
var StructureMapModelMode;
(function (StructureMapModelMode) {
    StructureMapModelMode["SOURCE"] = "source";
    StructureMapModelMode["QUERIED"] = "queried";
    StructureMapModelMode["TARGET"] = "target";
    StructureMapModelMode["PRODUCED"] = "produced";
})(StructureMapModelMode = exports.StructureMapModelMode || (exports.StructureMapModelMode = {}));
/**
 * none | types | type-and-types
 * If this is the default rule set to apply for the source type or this combination of types.
 * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
 */
var StructureMapGroupTypeMode;
(function (StructureMapGroupTypeMode) {
    StructureMapGroupTypeMode["NONE"] = "none";
    StructureMapGroupTypeMode["TYPES"] = "types";
    StructureMapGroupTypeMode["TYPE_AND_TYPES"] = "type-and-types";
})(StructureMapGroupTypeMode = exports.StructureMapGroupTypeMode || (exports.StructureMapGroupTypeMode = {}));
/**
 * source | target
 * Mode for this instance of data.
 */
var StructureMapInputMode;
(function (StructureMapInputMode) {
    StructureMapInputMode["SOURCE"] = "source";
    StructureMapInputMode["TARGET"] = "target";
})(StructureMapInputMode = exports.StructureMapInputMode || (exports.StructureMapInputMode = {}));
/**
 * first | not_first | last | not_last | only_one
 * How to handle the list mode for this element.
 */
var StructureMapSourceListMode;
(function (StructureMapSourceListMode) {
    StructureMapSourceListMode["FIRST"] = "first";
    StructureMapSourceListMode["NOT_FIRST"] = "not_first";
    StructureMapSourceListMode["LAST"] = "last";
    StructureMapSourceListMode["NOT_LAST"] = "not_last";
    StructureMapSourceListMode["ONLY_ONE"] = "only_one";
})(StructureMapSourceListMode = exports.StructureMapSourceListMode || (exports.StructureMapSourceListMode = {}));
/**
 * type | variable
 * How to interpret the context.
 */
var StructureMapContextType;
(function (StructureMapContextType) {
    StructureMapContextType["TYPE"] = "type";
    StructureMapContextType["VARIABLE"] = "variable";
})(StructureMapContextType = exports.StructureMapContextType || (exports.StructureMapContextType = {}));
/**
 * first | share | last | collate
 * If field is a list, how to manage the list.
 */
var StructureMapTargetListMode;
(function (StructureMapTargetListMode) {
    StructureMapTargetListMode["FIRST"] = "first";
    StructureMapTargetListMode["SHARE"] = "share";
    StructureMapTargetListMode["LAST"] = "last";
    StructureMapTargetListMode["COLLATE"] = "collate";
})(StructureMapTargetListMode = exports.StructureMapTargetListMode || (exports.StructureMapTargetListMode = {}));
/**
 * requested | active | error | off
 * The status of the subscription, which marks the server state for managing the subscription.
 * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["REQUESTED"] = "requested";
    SubscriptionStatus["ACTIVE"] = "active";
    SubscriptionStatus["ERROR"] = "error";
    SubscriptionStatus["OFF"] = "off";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
/**
 * rest-hook | websocket | email | sms | message
 * The type of channel to send notifications on.
 */
var SubscriptionChannelType;
(function (SubscriptionChannelType) {
    SubscriptionChannelType["REST_HOOK"] = "rest-hook";
    SubscriptionChannelType["WEBSOCKET"] = "websocket";
    SubscriptionChannelType["EMAIL"] = "email";
    SubscriptionChannelType["SMS"] = "sms";
    SubscriptionChannelType["MESSAGE"] = "message";
})(SubscriptionChannelType = exports.SubscriptionChannelType || (exports.SubscriptionChannelType = {}));
/**
 * active | inactive | entered-in-error
 * A code to indicate if the substance is actively used.
 */
var SubstanceFHIRSubstanceStatus;
(function (SubstanceFHIRSubstanceStatus) {
    SubstanceFHIRSubstanceStatus["ACTIVE"] = "active";
    SubstanceFHIRSubstanceStatus["INACTIVE"] = "inactive";
    SubstanceFHIRSubstanceStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(SubstanceFHIRSubstanceStatus = exports.SubstanceFHIRSubstanceStatus || (exports.SubstanceFHIRSubstanceStatus = {}));
/**
 * in-progress | completed | abandoned | entered-in-error
 * A code specifying the state of the dispense event.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var SupplyDeliveryStatus;
(function (SupplyDeliveryStatus) {
    SupplyDeliveryStatus["IN_PROGRESS"] = "in-progress";
    SupplyDeliveryStatus["COMPLETED"] = "completed";
    SupplyDeliveryStatus["ABANDONED"] = "abandoned";
    SupplyDeliveryStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(SupplyDeliveryStatus = exports.SupplyDeliveryStatus || (exports.SupplyDeliveryStatus = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
 */
var SupplyRequestRequestPriority;
(function (SupplyRequestRequestPriority) {
    SupplyRequestRequestPriority["ROUTINE"] = "routine";
    SupplyRequestRequestPriority["URGENT"] = "urgent";
    SupplyRequestRequestPriority["ASAP"] = "asap";
    SupplyRequestRequestPriority["STAT"] = "stat";
})(SupplyRequestRequestPriority = exports.SupplyRequestRequestPriority || (exports.SupplyRequestRequestPriority = {}));
/**
 * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
 * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.

In most cases, Tasks will have an intent of "order".
 */
var TaskIntent;
(function (TaskIntent) {
    TaskIntent["UNKNOWN"] = "unknown";
    TaskIntent["PROPOSAL"] = "proposal";
    TaskIntent["PLAN"] = "plan";
    TaskIntent["ORDER"] = "order";
    TaskIntent["ORIGINAL_ORDER"] = "original-order";
    TaskIntent["REFLEX_ORDER"] = "reflex-order";
    TaskIntent["FILLER_ORDER"] = "filler-order";
    TaskIntent["INSTANCE_ORDER"] = "instance-order";
    TaskIntent["OPTION"] = "option";
})(TaskIntent = exports.TaskIntent || (exports.TaskIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the Task should be addressed with respect to other requests.
 */
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["ROUTINE"] = "routine";
    TaskPriority["URGENT"] = "urgent";
    TaskPriority["ASAP"] = "asap";
    TaskPriority["STAT"] = "stat";
})(TaskPriority = exports.TaskPriority || (exports.TaskPriority = {}));
/**
 * draft | active | retired | unknown
 * The status of this terminology capabilities. Enables tracking the life-cycle of the content.
 * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
 */
var TerminologyCapabilitiesPublicationStatus;
(function (TerminologyCapabilitiesPublicationStatus) {
    TerminologyCapabilitiesPublicationStatus["DRAFT"] = "draft";
    TerminologyCapabilitiesPublicationStatus["ACTIVE"] = "active";
    TerminologyCapabilitiesPublicationStatus["RETIRED"] = "retired";
    TerminologyCapabilitiesPublicationStatus["UNKNOWN"] = "unknown";
})(TerminologyCapabilitiesPublicationStatus = exports.TerminologyCapabilitiesPublicationStatus || (exports.TerminologyCapabilitiesPublicationStatus = {}));
/**
 * instance | capability | requirements
 * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
 */
var TerminologyCapabilitiesCapabilityStatementKind;
(function (TerminologyCapabilitiesCapabilityStatementKind) {
    TerminologyCapabilitiesCapabilityStatementKind["INSTANCE"] = "instance";
    TerminologyCapabilitiesCapabilityStatementKind["CAPABILITY"] = "capability";
    TerminologyCapabilitiesCapabilityStatementKind["REQUIREMENTS"] = "requirements";
})(TerminologyCapabilitiesCapabilityStatementKind = exports.TerminologyCapabilitiesCapabilityStatementKind || (exports.TerminologyCapabilitiesCapabilityStatementKind = {}));
/**
 * explicit | all
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 * See notes on the [ValueSet](valueset.html#) resource.
 */
var TerminologyCapabilitiesCodeSearchSupport;
(function (TerminologyCapabilitiesCodeSearchSupport) {
    TerminologyCapabilitiesCodeSearchSupport["EXPLICIT"] = "explicit";
    TerminologyCapabilitiesCodeSearchSupport["ALL"] = "all";
})(TerminologyCapabilitiesCodeSearchSupport = exports.TerminologyCapabilitiesCodeSearchSupport || (exports.TerminologyCapabilitiesCodeSearchSupport = {}));
/**
 * completed | in-progress | waiting | stopped | entered-in-error
 * The current state of this test report.
 * The status represents where the execution is currently within the test script execution life cycle.

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var TestReportStatus;
(function (TestReportStatus) {
    TestReportStatus["COMPLETED"] = "completed";
    TestReportStatus["IN_PROGRESS"] = "in-progress";
    TestReportStatus["WAITING"] = "waiting";
    TestReportStatus["STOPPED"] = "stopped";
    TestReportStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(TestReportStatus = exports.TestReportStatus || (exports.TestReportStatus = {}));
/**
 * pass | fail | pending
 * The overall result from the execution of the TestScript.
 * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
 */
var TestReportResult;
(function (TestReportResult) {
    TestReportResult["PASS"] = "pass";
    TestReportResult["FAIL"] = "fail";
    TestReportResult["PENDING"] = "pending";
})(TestReportResult = exports.TestReportResult || (exports.TestReportResult = {}));
/**
 * test-engine | client | server
 * The type of participant.
 */
var TestReportParticipantType;
(function (TestReportParticipantType) {
    TestReportParticipantType["TEST_ENGINE"] = "test-engine";
    TestReportParticipantType["CLIENT"] = "client";
    TestReportParticipantType["SERVER"] = "server";
})(TestReportParticipantType = exports.TestReportParticipantType || (exports.TestReportParticipantType = {}));
/**
 * pass | skip | fail | warning | error
 * The result of this operation.
 */
var TestReportActionResult;
(function (TestReportActionResult) {
    TestReportActionResult["PASS"] = "pass";
    TestReportActionResult["SKIP"] = "skip";
    TestReportActionResult["FAIL"] = "fail";
    TestReportActionResult["WARNING"] = "warning";
    TestReportActionResult["ERROR"] = "error";
})(TestReportActionResult = exports.TestReportActionResult || (exports.TestReportActionResult = {}));
/**
 * draft | active | retired | unknown
 * The status of this test script. Enables tracking the life-cycle of the content.
 * Allows filtering of test scripts that are appropriate for use versus not.
 */
var TestScriptPublicationStatus;
(function (TestScriptPublicationStatus) {
    TestScriptPublicationStatus["DRAFT"] = "draft";
    TestScriptPublicationStatus["ACTIVE"] = "active";
    TestScriptPublicationStatus["RETIRED"] = "retired";
    TestScriptPublicationStatus["UNKNOWN"] = "unknown";
})(TestScriptPublicationStatus = exports.TestScriptPublicationStatus || (exports.TestScriptPublicationStatus = {}));
/**
 * delete | get | options | patch | post | put | head
 * The HTTP method the test engine MUST use for this operation regardless of any other operation details.
 * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
 */
var TestScriptRequestMethodCode;
(function (TestScriptRequestMethodCode) {
    TestScriptRequestMethodCode["DELETE"] = "delete";
    TestScriptRequestMethodCode["GET"] = "get";
    TestScriptRequestMethodCode["OPTIONS"] = "options";
    TestScriptRequestMethodCode["PATCH"] = "patch";
    TestScriptRequestMethodCode["POST"] = "post";
    TestScriptRequestMethodCode["PUT"] = "put";
    TestScriptRequestMethodCode["HEAD"] = "head";
})(TestScriptRequestMethodCode = exports.TestScriptRequestMethodCode || (exports.TestScriptRequestMethodCode = {}));
/**
 * response | request
 * The direction to use for the assertion.
 * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
 */
var TestScriptAssertionDirectionType;
(function (TestScriptAssertionDirectionType) {
    TestScriptAssertionDirectionType["RESPONSE"] = "response";
    TestScriptAssertionDirectionType["REQUEST"] = "request";
})(TestScriptAssertionDirectionType = exports.TestScriptAssertionDirectionType || (exports.TestScriptAssertionDirectionType = {}));
/**
 * equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval
 * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
 * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```<code>   <assert>  <operator value="in" />  <responseCode value="200,201,204" />    </assert>    <assert>  <operator value="notEquals" />  <response value="okay"/>   </assert>    <assert>  <operator value="greaterThan" />    <responseHeader>     <field value="Content-Length" />     <value value="0" />    </responseHeader/>   </assert> </code> ```.
 */
var TestScriptAssertionOperatorType;
(function (TestScriptAssertionOperatorType) {
    TestScriptAssertionOperatorType["EQUALS"] = "equals";
    TestScriptAssertionOperatorType["NOTEQUALS"] = "notEquals";
    TestScriptAssertionOperatorType["IN"] = "in";
    TestScriptAssertionOperatorType["NOTIN"] = "notIn";
    TestScriptAssertionOperatorType["GREATERTHAN"] = "greaterThan";
    TestScriptAssertionOperatorType["LESSTHAN"] = "lessThan";
    TestScriptAssertionOperatorType["EMPTY"] = "empty";
    TestScriptAssertionOperatorType["NOTEMPTY"] = "notEmpty";
    TestScriptAssertionOperatorType["CONTAINS"] = "contains";
    TestScriptAssertionOperatorType["NOTCONTAINS"] = "notContains";
    TestScriptAssertionOperatorType["EVAL"] = "eval";
})(TestScriptAssertionOperatorType = exports.TestScriptAssertionOperatorType || (exports.TestScriptAssertionOperatorType = {}));
/**
 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable
 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
 * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. <assert>  <contentType value="json" />  <response value="okay"/> </assert>.
 */
var TestScriptAssertionResponseTypes;
(function (TestScriptAssertionResponseTypes) {
    TestScriptAssertionResponseTypes["OKAY"] = "okay";
    TestScriptAssertionResponseTypes["CREATED"] = "created";
    TestScriptAssertionResponseTypes["NOCONTENT"] = "noContent";
    TestScriptAssertionResponseTypes["NOTMODIFIED"] = "notModified";
    TestScriptAssertionResponseTypes["BAD"] = "bad";
    TestScriptAssertionResponseTypes["FORBIDDEN"] = "forbidden";
    TestScriptAssertionResponseTypes["NOTFOUND"] = "notFound";
    TestScriptAssertionResponseTypes["METHODNOTALLOWED"] = "methodNotAllowed";
    TestScriptAssertionResponseTypes["CONFLICT"] = "conflict";
    TestScriptAssertionResponseTypes["GONE"] = "gone";
    TestScriptAssertionResponseTypes["PRECONDITIONFAILED"] = "preconditionFailed";
    TestScriptAssertionResponseTypes["UNPROCESSABLE"] = "unprocessable";
})(TestScriptAssertionResponseTypes = exports.TestScriptAssertionResponseTypes || (exports.TestScriptAssertionResponseTypes = {}));
/**
 * draft | active | retired | unknown
 * The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state.
 * Allows filtering of value sets that are appropriate for use versus not.See also the [valueset-workflowStatus](extension-valueset-workflowstatus.html) extension for additional status information related to the editorial process.
 */
var ValueSetPublicationStatus;
(function (ValueSetPublicationStatus) {
    ValueSetPublicationStatus["DRAFT"] = "draft";
    ValueSetPublicationStatus["ACTIVE"] = "active";
    ValueSetPublicationStatus["RETIRED"] = "retired";
    ValueSetPublicationStatus["UNKNOWN"] = "unknown";
})(ValueSetPublicationStatus = exports.ValueSetPublicationStatus || (exports.ValueSetPublicationStatus = {}));
/**
 * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
 * The kind of operation to perform as a part of the filter criteria.
 * In case filter.property represents a property of the system, the operation applies to the selected property. In case filter.property represents a filter of the system, the operation SHALL match one of the CodeSystem.filter.operator values.
 */
var ValueSetFilterOperator;
(function (ValueSetFilterOperator) {
    ValueSetFilterOperator["E"] = "=";
    ValueSetFilterOperator["IS_A"] = "is-a";
    ValueSetFilterOperator["DESCENDENT_OF"] = "descendent-of";
    ValueSetFilterOperator["IS_NOT_A"] = "is-not-a";
    ValueSetFilterOperator["REGEX"] = "regex";
    ValueSetFilterOperator["IN"] = "in";
    ValueSetFilterOperator["NOT_IN"] = "not-in";
    ValueSetFilterOperator["GENERALIZES"] = "generalizes";
    ValueSetFilterOperator["EXISTS"] = "exists";
})(ValueSetFilterOperator = exports.ValueSetFilterOperator || (exports.ValueSetFilterOperator = {}));
/**
 * attested | validated | in-process | req-revalid | val-fail | reval-fail
 * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
 */
var VerificationResultstatus;
(function (VerificationResultstatus) {
    VerificationResultstatus["ATTESTED"] = "attested";
    VerificationResultstatus["VALIDATED"] = "validated";
    VerificationResultstatus["IN_PROCESS"] = "in-process";
    VerificationResultstatus["REQ_REVALID"] = "req-revalid";
    VerificationResultstatus["VAL_FAIL"] = "val-fail";
    VerificationResultstatus["REVAL_FAIL"] = "reval-fail";
})(VerificationResultstatus = exports.VerificationResultstatus || (exports.VerificationResultstatus = {}));
/**
 * active | cancelled | draft | entered-in-error
 * The status of the resource instance.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var VisionPrescriptionVisionStatus;
(function (VisionPrescriptionVisionStatus) {
    VisionPrescriptionVisionStatus["ACTIVE"] = "active";
    VisionPrescriptionVisionStatus["CANCELLED"] = "cancelled";
    VisionPrescriptionVisionStatus["DRAFT"] = "draft";
    VisionPrescriptionVisionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(VisionPrescriptionVisionStatus = exports.VisionPrescriptionVisionStatus || (exports.VisionPrescriptionVisionStatus = {}));
/**
 * right | left
 * The eye for which the lens specification applies.
 * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
 */
var VisionPrescriptionVisionEyes;
(function (VisionPrescriptionVisionEyes) {
    VisionPrescriptionVisionEyes["RIGHT"] = "right";
    VisionPrescriptionVisionEyes["LEFT"] = "left";
})(VisionPrescriptionVisionEyes = exports.VisionPrescriptionVisionEyes || (exports.VisionPrescriptionVisionEyes = {}));
/**
 * up | down | in | out
 * The relative base, or reference lens edge, for the prism.
 */
var VisionPrescriptionVisionBase;
(function (VisionPrescriptionVisionBase) {
    VisionPrescriptionVisionBase["UP"] = "up";
    VisionPrescriptionVisionBase["DOWN"] = "down";
    VisionPrescriptionVisionBase["IN"] = "in";
    VisionPrescriptionVisionBase["OUT"] = "out";
})(VisionPrescriptionVisionBase = exports.VisionPrescriptionVisionBase || (exports.VisionPrescriptionVisionBase = {}));
/**
 * registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
 * Indicates the status of the detected issue.
 * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
 */
var DetectedIssueStatus;
(function (DetectedIssueStatus) {
    DetectedIssueStatus["REGISTERED"] = "registered";
    DetectedIssueStatus["PRELIMINARY"] = "preliminary";
    DetectedIssueStatus["FINAL"] = "final";
    DetectedIssueStatus["AMENDED"] = "amended";
    DetectedIssueStatus["CORRECTED"] = "corrected";
    DetectedIssueStatus["CANCELLED"] = "cancelled";
    DetectedIssueStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DetectedIssueStatus["UNKNOWN"] = "unknown";
})(DetectedIssueStatus = exports.DetectedIssueStatus || (exports.DetectedIssueStatus = {}));
/**
 * registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
 * The status of the result value.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var ObservationStatus;
(function (ObservationStatus) {
    ObservationStatus["REGISTERED"] = "registered";
    ObservationStatus["PRELIMINARY"] = "preliminary";
    ObservationStatus["FINAL"] = "final";
    ObservationStatus["AMENDED"] = "amended";
    ObservationStatus["CORRECTED"] = "corrected";
    ObservationStatus["CANCELLED"] = "cancelled";
    ObservationStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ObservationStatus["UNKNOWN"] = "unknown";
})(ObservationStatus = exports.ObservationStatus || (exports.ObservationStatus = {}));
/**
 * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | unknown
 * The status of the diagnostic report.
 */
var DiagnosticReportStatus;
(function (DiagnosticReportStatus) {
    DiagnosticReportStatus["REGISTERED"] = "registered";
    DiagnosticReportStatus["PARTIAL"] = "partial";
    DiagnosticReportStatus["PRELIMINARY"] = "preliminary";
    DiagnosticReportStatus["FINAL"] = "final";
    DiagnosticReportStatus["AMENDED"] = "amended";
    DiagnosticReportStatus["CORRECTED"] = "corrected";
    DiagnosticReportStatus["APPENDED"] = "appended";
    DiagnosticReportStatus["CANCELLED"] = "cancelled";
    DiagnosticReportStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DiagnosticReportStatus["UNKNOWN"] = "unknown";
})(DiagnosticReportStatus = exports.DiagnosticReportStatus || (exports.DiagnosticReportStatus = {}));
/**
 * planned | arrived | triaged | in-progress | onleave | finished | cancelled | entered-in-error | unknown
 * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
 */
var EncounterStatus;
(function (EncounterStatus) {
    EncounterStatus["PLANNED"] = "planned";
    EncounterStatus["ARRIVED"] = "arrived";
    EncounterStatus["TRIAGED"] = "triaged";
    EncounterStatus["IN_PROGRESS"] = "in-progress";
    EncounterStatus["ONLEAVE"] = "onleave";
    EncounterStatus["FINISHED"] = "finished";
    EncounterStatus["CANCELLED"] = "cancelled";
    EncounterStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterStatus["UNKNOWN"] = "unknown";
})(EncounterStatus = exports.EncounterStatus || (exports.EncounterStatus = {}));
/**
 * barcode | rfid | manual | card | self-reported | unknown
 * A coded entry to indicate how the data was entered.
 */
var DeviceUDIEntryType;
(function (DeviceUDIEntryType) {
    DeviceUDIEntryType["BARCODE"] = "barcode";
    DeviceUDIEntryType["RFID"] = "rfid";
    DeviceUDIEntryType["MANUAL"] = "manual";
    DeviceUDIEntryType["CARD"] = "card";
    DeviceUDIEntryType["SELF_REPORTED"] = "self-reported";
    DeviceUDIEntryType["UNKNOWN"] = "unknown";
})(DeviceUDIEntryType = exports.DeviceUDIEntryType || (exports.DeviceUDIEntryType = {}));
/**
 * group | display | question | boolean | decimal | integer | date | dateTime | time | string | text | url | choice | open-choice | attachment | reference | quantity
 * The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
 * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
 */
var QuestionnaireItemType;
(function (QuestionnaireItemType) {
    QuestionnaireItemType["GROUP"] = "group";
    QuestionnaireItemType["DISPLAY"] = "display";
    QuestionnaireItemType["QUESTION"] = "question";
    QuestionnaireItemType["BOOLEAN"] = "boolean";
    QuestionnaireItemType["DECIMAL"] = "decimal";
    QuestionnaireItemType["INTEGER"] = "integer";
    QuestionnaireItemType["DATE"] = "date";
    QuestionnaireItemType["DATETIME"] = "dateTime";
    QuestionnaireItemType["TIME"] = "time";
    QuestionnaireItemType["STRING"] = "string";
    QuestionnaireItemType["TEXT"] = "text";
    QuestionnaireItemType["URL"] = "url";
    QuestionnaireItemType["CHOICE"] = "choice";
    QuestionnaireItemType["OPEN_CHOICE"] = "open-choice";
    QuestionnaireItemType["ATTACHMENT"] = "attachment";
    QuestionnaireItemType["REFERENCE"] = "reference";
    QuestionnaireItemType["QUANTITY"] = "quantity";
})(QuestionnaireItemType = exports.QuestionnaireItemType || (exports.QuestionnaireItemType = {}));
/**
 * registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
 * The status of the RiskAssessment, using the same statuses as an Observation.
 */
var RiskAssessmentStatus;
(function (RiskAssessmentStatus) {
    RiskAssessmentStatus["REGISTERED"] = "registered";
    RiskAssessmentStatus["PRELIMINARY"] = "preliminary";
    RiskAssessmentStatus["FINAL"] = "final";
    RiskAssessmentStatus["AMENDED"] = "amended";
    RiskAssessmentStatus["CORRECTED"] = "corrected";
    RiskAssessmentStatus["CANCELLED"] = "cancelled";
    RiskAssessmentStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    RiskAssessmentStatus["UNKNOWN"] = "unknown";
})(RiskAssessmentStatus = exports.RiskAssessmentStatus || (exports.RiskAssessmentStatus = {}));
/**
 * draft | active | suspended | cancelled | completed | entered-in-error | unknown
 * Status of the supply request.
 */
var SupplyRequestStatus;
(function (SupplyRequestStatus) {
    SupplyRequestStatus["DRAFT"] = "draft";
    SupplyRequestStatus["ACTIVE"] = "active";
    SupplyRequestStatus["SUSPENDED"] = "suspended";
    SupplyRequestStatus["CANCELLED"] = "cancelled";
    SupplyRequestStatus["COMPLETED"] = "completed";
    SupplyRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    SupplyRequestStatus["UNKNOWN"] = "unknown";
})(SupplyRequestStatus = exports.SupplyRequestStatus || (exports.SupplyRequestStatus = {}));
/**
 * active | completed | entered-in-error | intended | stopped | on-hold
 * A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
 * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).

This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
 */
var DeviceUseStatementStatus;
(function (DeviceUseStatementStatus) {
    DeviceUseStatementStatus["ACTIVE"] = "active";
    DeviceUseStatementStatus["COMPLETED"] = "completed";
    DeviceUseStatementStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceUseStatementStatus["INTENDED"] = "intended";
    DeviceUseStatementStatus["STOPPED"] = "stopped";
    DeviceUseStatementStatus["ON_HOLD"] = "on-hold";
})(DeviceUseStatementStatus = exports.DeviceUseStatementStatus || (exports.DeviceUseStatementStatus = {}));
/**
 * draft | requested | received | accepted | rejected | ready | cancelled | in-progress | on-hold | failed | completed | entered-in-error
 * The current status of the task.
 */
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["DRAFT"] = "draft";
    TaskStatus["REQUESTED"] = "requested";
    TaskStatus["RECEIVED"] = "received";
    TaskStatus["ACCEPTED"] = "accepted";
    TaskStatus["REJECTED"] = "rejected";
    TaskStatus["READY"] = "ready";
    TaskStatus["CANCELLED"] = "cancelled";
    TaskStatus["IN_PROGRESS"] = "in-progress";
    TaskStatus["ON_HOLD"] = "on-hold";
    TaskStatus["FAILED"] = "failed";
    TaskStatus["COMPLETED"] = "completed";
    TaskStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
/**
 * create | copy | truncate | escape | cast | append | translate | reference | dateOp | uuid | pointer | evaluate | cc | c | qty | id | cp
 * How the data is copied / created.
 */
var StructureMapTransform;
(function (StructureMapTransform) {
    StructureMapTransform["CREATE"] = "create";
    StructureMapTransform["COPY"] = "copy";
    StructureMapTransform["TRUNCATE"] = "truncate";
    StructureMapTransform["ESCAPE"] = "escape";
    StructureMapTransform["CAST"] = "cast";
    StructureMapTransform["APPEND"] = "append";
    StructureMapTransform["TRANSLATE"] = "translate";
    StructureMapTransform["REFERENCE"] = "reference";
    StructureMapTransform["DATEOP"] = "dateOp";
    StructureMapTransform["UUID"] = "uuid";
    StructureMapTransform["POINTER"] = "pointer";
    StructureMapTransform["EVALUATE"] = "evaluate";
    StructureMapTransform["CC"] = "cc";
    StructureMapTransform["C"] = "c";
    StructureMapTransform["QTY"] = "qty";
    StructureMapTransform["ID"] = "id";
    StructureMapTransform["CP"] = "cp";
})(StructureMapTransform = exports.StructureMapTransform || (exports.StructureMapTransform = {}));
