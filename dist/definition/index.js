"use strict";
/**
 * Created by Institute for Medical Informatics (I4MI) - Department of Engineering and Information Technology - Bern University of Applied Science (BFH)
 * https://www.i4mi.ti.bfh.ch

 * File generated on 2023-03-28T13:15:10.633Z
 * Based on https://hl7.org/fhir/R5/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleType = exports.BiologicallyDerivedProductDispenseStatus = exports.AuditEventSeverity = exports.ArtifactAssessmentDisposition = exports.ArtifactAssessmentWorkflowStatus = exports.ArtifactAssessmentInformationType = exports.AppointmentResponseParticipantStatus = exports.AppointmentParticipationStatus = exports.AppointmentStatus = exports.AllergyIntoleranceSeverity = exports.AllergyIntoleranceCriticality = exports.AllergyIntoleranceCategory = exports.AdverseEventActuality = exports.AdverseEventStatus = exports.AdministrableProductDefinitionPublicationStatus = exports.ActorDefinitionExampleScenarioActorType = exports.ActorDefinitionPublicationStatus = exports.ActivityDefinitionActivityParticipantType = exports.ActivityDefinitionRequestPriority = exports.ActivityDefinitionRequestIntent = exports.ActivityDefinitionPublicationStatus = exports.AccountStatus = exports.TriggerDefinitionTriggerType = exports.TimingDayOfWeek = exports.TimingUnitsOfTime = exports.RelatedArtifactPublicationStatus = exports.RelatedArtifactType = exports.QuantityComparator = exports.ParameterDefinitionParameterUse = exports.NarrativeStatus = exports.MonetaryComponentPriceComponentType = exports.IdentifierUse = exports.HumanNameNameUse = exports.ExpressionLanguage = exports.ElementDefinitionAdditionalBindingPurpose = exports.ElementDefinitionBindingStrength = exports.ElementDefinitionConstraintSeverity = exports.ElementDefinitionReferenceVersionRules = exports.ElementDefinitionAggregationMode = exports.ElementDefinitionSlicingRules = exports.ElementDefinitionDiscriminatorType = exports.ElementDefinitionPropertyRepresentation = exports.DataRequirementSortDirection = exports.DataRequirementValueFilterComparator = exports.ContributorType = exports.ContactPointUse = exports.ContactPointSystem = exports.AvailabilityDaysOfWeek = exports.AddressType = exports.AddressUse = void 0;
exports.ConditionDefinitionConditionPreconditionType = exports.ConditionDefinitionPublicationStatus = exports.ConceptMapUnmappedConceptMapRelationship = exports.ConceptMapGroupUnmappedMode = exports.ConceptMapRelationship = exports.ConceptMapmapAttributeType = exports.ConceptMapPropertyType = exports.ConceptMapPublicationStatus = exports.CompositionStatus = exports.CompartmentDefinitionCompartmentType = exports.CompartmentDefinitionPublicationStatus = exports.CommunicationRequestCommunicationPriority = exports.CommunicationRequestIntent = exports.CommunicationRequestStatus = exports.CommunicationPriority = exports.CommunicationStatus = exports.CodeSystemPropertyType = exports.CodeSystemFilterOperator = exports.CodeSystemContentMode = exports.CodeSystemHierarchyMeaning = exports.CodeSystemPublicationStatus = exports.ClinicalUseDefinitionType = exports.ClinicalImpressionStatus = exports.ClaimResponseRemittanceOutcome = exports.ClaimResponseUse = exports.ClaimResponseStatus = exports.ClaimUse = exports.ClaimStatus = exports.CitationRelatedArtifactTypeExpanded = exports.CitationPublicationStatus = exports.ChargeItemDefinitionPublicationStatus = exports.ChargeItemStatus = exports.CareTeamStatus = exports.CarePlanIntent = exports.CarePlanStatus = exports.CapabilityStatementDocumentMode = exports.CapabilityStatementEventCapabilityMode = exports.CapabilityStatementSystemRestfulInteraction = exports.CapabilityStatementSearchParamType = exports.CapabilityStatementReferenceHandlingPolicy = exports.CapabilityStatementConditionalDeleteStatus = exports.CapabilityStatementConditionalReadStatus = exports.CapabilityStatementResourceVersionPolicy = exports.CapabilityStatementTypeRestfulInteraction = exports.CapabilityStatementRestfulCapabilityMode = exports.CapabilityStatementKind = exports.CapabilityStatementPublicationStatus = exports.CanonicalResourcePublicationStatus = exports.BundleHTTPVerb = exports.BundleSearchEntryMode = void 0;
exports.ExplanationOfBenefitStatus = exports.ExampleScenarioActorType = exports.ExampleScenarioPublicationStatus = exports.EvidenceVariableCharacteristicCombination = exports.EvidenceVariablePublicationStatus = exports.EvidenceReportSectionMode = exports.EvidenceReportReportRelationshipType = exports.EvidenceReportPublicationStatus = exports.EvidenceVariableHandling = exports.EvidencePublicationStatus = exports.EventDefinitionPublicationStatus = exports.EpisodeOfCareStatus = exports.EnrollmentResponseEnrollmentOutcome = exports.EnrollmentResponseStatus = exports.EnrollmentRequestStatus = exports.EndpointStatus = exports.EncounterHistoryEncounterStatus = exports.EncounterLocationStatus = exports.EncounterStatus = exports.DocumentReferenceReferredDocumentStatus = exports.DocumentReferenceStatus = exports.DiagnosticReportStatus = exports.DeviceRequestRequestPriority = exports.DeviceRequestRequestIntent = exports.DeviceRequestStatus = exports.DeviceMetricCalibrationState = exports.DeviceMetricCalibrationType = exports.DeviceMetricCategory = exports.DeviceMetricOperationalStatus = exports.DeviceDispenseStatus = exports.DeviceDefinitionDeviceCorrectiveActionScope = exports.DeviceDefinitionDeviceProductionIdentifierInUDI = exports.DeviceDefinitionDeviceNameType = exports.DeviceDefinitionDeviceRegulatoryIdentifierType = exports.DeviceNameType = exports.DeviceFHIRDeviceStatus = exports.DeviceUDIEntryType = exports.DetectedIssueSeverity = exports.DetectedIssueStatus = exports.CoverageEligibilityResponseEligibilityOutcome = exports.CoverageEligibilityResponseEligibilityResponsePurpose = exports.CoverageEligibilityResponseEligibilityResponseStatus = exports.CoverageEligibilityRequestEligibilityRequestPurpose = exports.CoverageEligibilityRequestEligibilityRequestStatus = exports.CoverageKind = exports.CoverageStatus = exports.ConsentDataMeaning = exports.ConsentProvisionType = exports.ConsentState = exports.ConditionDefinitionConditionQuestionnairePurpose = void 0;
exports.MessageDefinitionMessageSignificanceCategory = exports.MessageDefinitionPublicationStatus = exports.MedicationStatementStatus = exports.MedicationRequestPriority = exports.MedicationRequestIntent = exports.MedicationRequestStatus = exports.MedicationKnowledgeStatus = exports.MedicationDispenseStatus = exports.MedicationAdministrationStatus = exports.MedicationStatus = exports.MeasureReportSubmitDataUpdateType = exports.MeasureReportType = exports.MeasureReportStatus = exports.MeasurePublicationStatus = exports.ManufacturedItemDefinitionPublicationStatus = exports.LocationMode = exports.LocationStatus = exports.ListMode = exports.ListStatus = exports.LinkageType = exports.LibraryPublicationStatus = exports.InvoiceStatus = exports.InventoryReportInventoryCountType = exports.InventoryReportStatus = exports.InventoryItemStatus = exports.InsurancePlanPublicationStatus = exports.IngredientManufacturerRole = exports.IngredientPublicationStatus = exports.ImplementationGuideGuidePageGeneration = exports.ImplementationGuidePublicationStatus = exports.ImmunizationEvaluationStatus = exports.ImmunizationStatus = exports.ImagingStudyStatus = exports.ImagingSelection3DGraphicType = exports.ImagingSelection2DGraphicType = exports.ImagingSelectionStatus = exports.GuidanceResponseStatus = exports.GroupMembership = exports.GroupType = exports.GraphDefinitionCompartmentCode = exports.GraphDefinitionGraphCompartmentRule = exports.GraphDefinitionGraphCompartmentUse = exports.GraphDefinitionPublicationStatus = exports.GoalLifecycleStatus = exports.GenomicStudyStatus = exports.FormularyItemStatus = exports.FlagStatus = exports.FamilyMemberHistoryFamilyHistoryStatus = exports.ExplanationOfBenefitClaimOutcome = exports.ExplanationOfBenefitUse = void 0;
exports.ProvenanceEntityRole = exports.ProcedureStatus = exports.PractitionerAdministrativeGender = exports.PlanDefinitionActionCardinalityBehavior = exports.PlanDefinitionActionPrecheckBehavior = exports.PlanDefinitionActionRequiredBehavior = exports.PlanDefinitionActionSelectionBehavior = exports.PlanDefinitionActionGroupingBehavior = exports.PlanDefinitionActionRelationshipType = exports.PlanDefinitionActionConditionKind = exports.PlanDefinitionRequestPriority = exports.PlanDefinitionActivityParticipantType = exports.PlanDefinitionPublicationStatus = exports.PersonIdentityAssuranceLevel = exports.PersonAdministrativeGender = exports.PermissionConsentDataMeaning = exports.PermissionProvisionType = exports.PermissionCombining = exports.PermissionStatus = exports.PaymentReconciliationNoteType = exports.PaymentReconciliationPaymentOutcome = exports.PaymentReconciliationStatus = exports.PaymentNoticeStatus = exports.PatientLinkType = exports.PatientAdministrativeGender = exports.OperationOutcomeIssueSeverity = exports.OperationDefinitionBindingStrength = exports.OperationDefinitionSearchParamType = exports.OperationDefinitionOperationParameterScope = exports.OperationDefinitionOperationParameterUse = exports.OperationDefinitionOperationKind = exports.OperationDefinitionPublicationStatus = exports.ObservationDefinitionObservationRangeCategory = exports.ObservationDefinitionAdministrativeGender = exports.ObservationDefinitionObservationDataType = exports.ObservationDefinitionPublicationStatus = exports.ObservationTriggeredByType = exports.NutritionProductStatus = exports.NutritionOrderPriority = exports.NutritionOrderNutritiionOrderIntent = exports.NutritionOrderStatus = exports.NutritionIntakeStatus = exports.NamingSystemIdentifierType = exports.NamingSystemType = exports.NamingSystemPublicationStatus = exports.MolecularSequencestrandType = exports.MolecularSequenceorientationType = exports.MolecularSequencesequenceType = exports.MessageHeaderResponseType = exports.MessageDefinitionmessageheader_response_request = void 0;
exports.SubscriptionStatusSubscriptionNotificationType = exports.SubscriptionStatusSubscriptionStatus = exports.SubscriptionPayloadContent = exports.SubscriptionSearchModifierCode = exports.SubscriptionSearchComparator = exports.SubscriptionStatusCodes = exports.StructureMapTargetListMode = exports.StructureMapSourceListMode = exports.StructureMapInputMode = exports.StructureMapGroupTypeMode = exports.StructureMapModelMode = exports.StructureMapPublicationStatus = exports.StructureDefinitionTypeDerivationRule = exports.StructureDefinitionExtensionContextType = exports.StructureDefinitionKind = exports.StructureDefinitionPublicationStatus = exports.SpecimenDefinitionSpecimenContainedPreference = exports.SpecimenDefinitionPublicationStatus = exports.SpecimenPublicationStatus = exports.SpecimenStatus = exports.SlotStatus = exports.ServiceRequestPriority = exports.ServiceRequestStatus = exports.SearchParameterSearchModifierCode = exports.SearchParameterSearchComparator = exports.SearchParameterSearchProcessingModeType = exports.SearchParameterSearchParamType = exports.SearchParameterPublicationStatus = exports.ResearchSubjectPublicationStatus = exports.ResearchStudyPublicationStatus = exports.RequirementsStatementConformance = exports.RequirementsPublicationStatus = exports.RequestOrchestrationActionCardinalityBehavior = exports.RequestOrchestrationActionPrecheckBehavior = exports.RequestOrchestrationActionRequiredBehavior = exports.RequestOrchestrationActionSelectionBehavior = exports.RequestOrchestrationActionGroupingBehavior = exports.RequestOrchestrationActivityParticipantType = exports.RequestOrchestrationActionRelationshipType = exports.RequestOrchestrationActionConditionKind = exports.RequestOrchestrationRequestPriority = exports.RequestOrchestrationRequestIntent = exports.RequestOrchestrationRequestStatus = exports.RelatedPersonAdministrativeGender = exports.QuestionnaireResponseStatus = exports.QuestionnaireAnswerConstraint = exports.QuestionnaireDisabledDisplay = exports.QuestionnaireEnableWhenBehavior = exports.QuestionnaireItemOperator = exports.QuestionnairePublicationStatus = void 0;
exports.SupplyRequestStatus = exports.StructureMapTransform = exports.DeviceUsageStatus = exports.ContractStatus = exports.QuestionnaireItemType = exports.TaskStatus = exports.ServiceRequestIntent = exports.RiskAssessmentStatus = exports.ContractPublicationStatus = exports.ObservationStatus = exports.VisionPrescriptionVisionBase = exports.VisionPrescriptionVisionEyes = exports.VisionPrescriptionVisionStatus = exports.VerificationResultstatus = exports.ValueSetFilterOperator = exports.ValueSetPublicationStatus = exports.TransportPriority = exports.TransportIntent = exports.TransportStatus = exports.TestScriptAssertionResponseTypes = exports.TestScriptAssertionOperatorType = exports.TestScriptAssertionManualCompletionType = exports.TestScriptAssertionDirectionType = exports.TestScriptRequestMethodCode = exports.TestScriptPublicationStatus = exports.TestReportActionResult = exports.TestReportParticipantType = exports.TestReportResult = exports.TestReportStatus = exports.TestPlanPublicationStatus = exports.TerminologyCapabilitiesCodeSearchSupport = exports.TerminologyCapabilitiesCodeSystemContentMode = exports.TerminologyCapabilitiesCapabilityStatementKind = exports.TerminologyCapabilitiesPublicationStatus = exports.TaskPriority = exports.TaskIntent = exports.SupplyRequestRequestPriority = exports.SupplyDeliveryStatus = exports.SubstanceFHIRSubstanceStatus = exports.SubscriptionTopicSearchModifierCode = exports.SubscriptionTopicSearchComparator = exports.SubscriptionTopicCriteriaNotExistsBehavior = exports.SubscriptionTopicMethodCode = exports.SubscriptionTopicPublicationStatus = void 0;
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
 * mon | tue | wed | thu | fri | sat | sun
 * mon | tue | wed | thu | fri | sat | sun.
 */
var AvailabilityDaysOfWeek;
(function (AvailabilityDaysOfWeek) {
    AvailabilityDaysOfWeek["MON"] = "mon";
    AvailabilityDaysOfWeek["TUE"] = "tue";
    AvailabilityDaysOfWeek["WED"] = "wed";
    AvailabilityDaysOfWeek["THU"] = "thu";
    AvailabilityDaysOfWeek["FRI"] = "fri";
    AvailabilityDaysOfWeek["SAT"] = "sat";
    AvailabilityDaysOfWeek["SUN"] = "sun";
})(AvailabilityDaysOfWeek = exports.AvailabilityDaysOfWeek || (exports.AvailabilityDaysOfWeek = {}));
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
 * eq | gt | lt | ge | le | sa | eb
 * The comparator to be used to determine whether the value is matching.
 */
var DataRequirementValueFilterComparator;
(function (DataRequirementValueFilterComparator) {
    DataRequirementValueFilterComparator["EQ"] = "eq";
    DataRequirementValueFilterComparator["GT"] = "gt";
    DataRequirementValueFilterComparator["LT"] = "lt";
    DataRequirementValueFilterComparator["GE"] = "ge";
    DataRequirementValueFilterComparator["LE"] = "le";
    DataRequirementValueFilterComparator["SA"] = "sa";
    DataRequirementValueFilterComparator["EB"] = "eb";
})(DataRequirementValueFilterComparator = exports.DataRequirementValueFilterComparator || (exports.DataRequirementValueFilterComparator = {}));
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
 * Codes that define how this element is represented in instances, when the deviation varies from the normal case. No extensions are allowed on elements with a representation of 'xmlAttr', no matter what FHIR serialization format is used.
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
 * value | exists | type | profile | position
 * How the element value is interpreted when discrimination is evaluated.
 * 'pattern' is deprecated - it works exactly the same as 'value'.
 */
var ElementDefinitionDiscriminatorType;
(function (ElementDefinitionDiscriminatorType) {
    ElementDefinitionDiscriminatorType["VALUE"] = "value";
    ElementDefinitionDiscriminatorType["EXISTS"] = "exists";
    ElementDefinitionDiscriminatorType["TYPE"] = "type";
    ElementDefinitionDiscriminatorType["PROFILE"] = "profile";
    ElementDefinitionDiscriminatorType["POSITION"] = "position";
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
 * maximum | minimum | required | extensible | candidate | current | preferred | ui | starter | component
 * The use of this additional binding.
 * Conformance bindings are in addition to the base binding, not instead of it.
 */
var ElementDefinitionAdditionalBindingPurpose;
(function (ElementDefinitionAdditionalBindingPurpose) {
    ElementDefinitionAdditionalBindingPurpose["MAXIMUM"] = "maximum";
    ElementDefinitionAdditionalBindingPurpose["MINIMUM"] = "minimum";
    ElementDefinitionAdditionalBindingPurpose["REQUIRED"] = "required";
    ElementDefinitionAdditionalBindingPurpose["EXTENSIBLE"] = "extensible";
    ElementDefinitionAdditionalBindingPurpose["CANDIDATE"] = "candidate";
    ElementDefinitionAdditionalBindingPurpose["CURRENT"] = "current";
    ElementDefinitionAdditionalBindingPurpose["PREFERRED"] = "preferred";
    ElementDefinitionAdditionalBindingPurpose["UI"] = "ui";
    ElementDefinitionAdditionalBindingPurpose["STARTER"] = "starter";
    ElementDefinitionAdditionalBindingPurpose["COMPONENT"] = "component";
})(ElementDefinitionAdditionalBindingPurpose = exports.ElementDefinitionAdditionalBindingPurpose || (exports.ElementDefinitionAdditionalBindingPurpose = {}));
/**
 * text/cql | text/fhirpath | application/x-fhir-query | etc.
 * The media type of the language for the expression.
 */
var ExpressionLanguage;
(function (ExpressionLanguage) {
    ExpressionLanguage["TEXT_CQL"] = "text/cql";
    ExpressionLanguage["TEXT_FHIRPATH"] = "text/fhirpath";
    ExpressionLanguage["APPLICATION_X_FHIR_QUERY"] = "application/x-fhir-query";
    ExpressionLanguage["ETC_"] = "etc.";
})(ExpressionLanguage = exports.ExpressionLanguage || (exports.ExpressionLanguage = {}));
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
 * base | surcharge | deduction | discount | tax | informational
 * base | surcharge | deduction | discount | tax | informational.
 */
var MonetaryComponentPriceComponentType;
(function (MonetaryComponentPriceComponentType) {
    MonetaryComponentPriceComponentType["BASE"] = "base";
    MonetaryComponentPriceComponentType["SURCHARGE"] = "surcharge";
    MonetaryComponentPriceComponentType["DEDUCTION"] = "deduction";
    MonetaryComponentPriceComponentType["DISCOUNT"] = "discount";
    MonetaryComponentPriceComponentType["TAX"] = "tax";
    MonetaryComponentPriceComponentType["INFORMATIONAL"] = "informational";
})(MonetaryComponentPriceComponentType = exports.MonetaryComponentPriceComponentType || (exports.MonetaryComponentPriceComponentType = {}));
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
 * < | <= | >= | > | ad - how to understand the value
 * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
 */
var QuantityComparator;
(function (QuantityComparator) {
    QuantityComparator["LT"] = "<";
    QuantityComparator["LE"] = "<=";
    QuantityComparator["GE"] = ">=";
    QuantityComparator["GT"] = ">";
    QuantityComparator["AD"] = "ad";
})(QuantityComparator = exports.QuantityComparator || (exports.QuantityComparator = {}));
/**
 * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as
 * The type of relationship to the related artifact.
 * The presence of both sides of a relationship type (e.g. successor and predecessor) is required to support use cases where one side of a relationship is not represented in FHIR. However, this feature SHALL NOT be used to create bi-directional resource links in FHIR instances. Specifically, following the methodology of "new points to old" and "many points to one", when using related artifact elements to describe and reference FHIR resources, the type element SHALL be drawn from the fhir-related-artifact-type ValueSet.
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
    RelatedArtifactType["PART_OF"] = "part-of";
    RelatedArtifactType["AMENDS"] = "amends";
    RelatedArtifactType["AMENDED_WITH"] = "amended-with";
    RelatedArtifactType["APPENDS"] = "appends";
    RelatedArtifactType["APPENDED_WITH"] = "appended-with";
    RelatedArtifactType["CITES"] = "cites";
    RelatedArtifactType["CITED_BY"] = "cited-by";
    RelatedArtifactType["COMMENTS_ON"] = "comments-on";
    RelatedArtifactType["COMMENT_IN"] = "comment-in";
    RelatedArtifactType["CONTAINS"] = "contains";
    RelatedArtifactType["CONTAINED_IN"] = "contained-in";
    RelatedArtifactType["CORRECTS"] = "corrects";
    RelatedArtifactType["CORRECTION_IN"] = "correction-in";
    RelatedArtifactType["REPLACES"] = "replaces";
    RelatedArtifactType["REPLACED_WITH"] = "replaced-with";
    RelatedArtifactType["RETRACTS"] = "retracts";
    RelatedArtifactType["RETRACTED_BY"] = "retracted-by";
    RelatedArtifactType["SIGNS"] = "signs";
    RelatedArtifactType["SIMILAR_TO"] = "similar-to";
    RelatedArtifactType["SUPPORTS"] = "supports";
    RelatedArtifactType["SUPPORTED_WITH"] = "supported-with";
    RelatedArtifactType["TRANSFORMS"] = "transforms";
    RelatedArtifactType["TRANSFORMED_INTO"] = "transformed-into";
    RelatedArtifactType["TRANSFORMED_WITH"] = "transformed-with";
    RelatedArtifactType["DOCUMENTS"] = "documents";
    RelatedArtifactType["SPECIFICATION_OF"] = "specification-of";
    RelatedArtifactType["CREATED_WITH"] = "created-with";
    RelatedArtifactType["CITE_AS"] = "cite-as";
})(RelatedArtifactType = exports.RelatedArtifactType || (exports.RelatedArtifactType = {}));
/**
 * draft | active | retired | unknown
 * The publication status of the artifact being referred to.
 */
var RelatedArtifactPublicationStatus;
(function (RelatedArtifactPublicationStatus) {
    RelatedArtifactPublicationStatus["DRAFT"] = "draft";
    RelatedArtifactPublicationStatus["ACTIVE"] = "active";
    RelatedArtifactPublicationStatus["RETIRED"] = "retired";
    RelatedArtifactPublicationStatus["UNKNOWN"] = "unknown";
})(RelatedArtifactPublicationStatus = exports.RelatedArtifactPublicationStatus || (exports.RelatedArtifactPublicationStatus = {}));
/**
 * s | min | h | d | wk | mo | a - unit of time (UCUM)
 * The units of time for the duration, in UCUM units
Normal practice is to use the 'mo' code as a calendar month when calculating the next occurrence.
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
 * If no days are specified, the action is assumed to happen every day as otherwise specified.
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson
 * The type of participant in the action.
 */
var ActivityDefinitionActivityParticipantType;
(function (ActivityDefinitionActivityParticipantType) {
    ActivityDefinitionActivityParticipantType["CARETEAM"] = "careteam";
    ActivityDefinitionActivityParticipantType["DEVICE"] = "device";
    ActivityDefinitionActivityParticipantType["GROUP"] = "group";
    ActivityDefinitionActivityParticipantType["HEALTHCARESERVICE"] = "healthcareservice";
    ActivityDefinitionActivityParticipantType["LOCATION"] = "location";
    ActivityDefinitionActivityParticipantType["ORGANIZATION"] = "organization";
    ActivityDefinitionActivityParticipantType["PATIENT"] = "patient";
    ActivityDefinitionActivityParticipantType["PRACTITIONER"] = "practitioner";
    ActivityDefinitionActivityParticipantType["PRACTITIONERROLE"] = "practitionerrole";
    ActivityDefinitionActivityParticipantType["RELATEDPERSON"] = "relatedperson";
})(ActivityDefinitionActivityParticipantType = exports.ActivityDefinitionActivityParticipantType || (exports.ActivityDefinitionActivityParticipantType = {}));
/**
 * draft | active | retired | unknown
 * The status of this actor definition. Enables tracking the life-cycle of the content.
 * Allows filtering of actor definitions that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ActorDefinitionPublicationStatus;
(function (ActorDefinitionPublicationStatus) {
    ActorDefinitionPublicationStatus["DRAFT"] = "draft";
    ActorDefinitionPublicationStatus["ACTIVE"] = "active";
    ActorDefinitionPublicationStatus["RETIRED"] = "retired";
    ActorDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ActorDefinitionPublicationStatus = exports.ActorDefinitionPublicationStatus || (exports.ActorDefinitionPublicationStatus = {}));
/**
 * person | system
 * Whether the actor represents a human or an appliction.
 */
var ActorDefinitionExampleScenarioActorType;
(function (ActorDefinitionExampleScenarioActorType) {
    ActorDefinitionExampleScenarioActorType["PERSON"] = "person";
    ActorDefinitionExampleScenarioActorType["SYSTEM"] = "system";
})(ActorDefinitionExampleScenarioActorType = exports.ActorDefinitionExampleScenarioActorType || (exports.ActorDefinitionExampleScenarioActorType = {}));
/**
 * draft | active | retired | unknown
 * The status of this administrable product. Enables tracking the life-cycle of the content.
 * Allows filtering of administrable products that are appropriate for use versus not.
 */
var AdministrableProductDefinitionPublicationStatus;
(function (AdministrableProductDefinitionPublicationStatus) {
    AdministrableProductDefinitionPublicationStatus["DRAFT"] = "draft";
    AdministrableProductDefinitionPublicationStatus["ACTIVE"] = "active";
    AdministrableProductDefinitionPublicationStatus["RETIRED"] = "retired";
    AdministrableProductDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(AdministrableProductDefinitionPublicationStatus = exports.AdministrableProductDefinitionPublicationStatus || (exports.AdministrableProductDefinitionPublicationStatus = {}));
/**
 * in-progress | completed | entered-in-error | unknown
 * The current state of the adverse event or potential adverse event.
 * This is not the reporting of the event to any regulatory or quality organization.  This is not the outcome of the patient's condition.
 */
var AdverseEventStatus;
(function (AdverseEventStatus) {
    AdverseEventStatus["IN_PROGRESS"] = "in-progress";
    AdverseEventStatus["COMPLETED"] = "completed";
    AdverseEventStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    AdverseEventStatus["UNKNOWN"] = "unknown";
})(AdverseEventStatus = exports.AdverseEventStatus || (exports.AdverseEventStatus = {}));
/**
 * actual | potential
 * Whether the event actually happened or was a near miss. Note that this is independent of whether anyone was affected or harmed or how severely.
 * AllergyIntolerance should be used for the initial capture or recording of the individual's propensity to an adverse reaction to a substance.  If an AllergyIntolerance does not exist, then an adverse reaction should be recorded as an AllergyIntolerance. If an AllergyIntolerance does exist and the substance was given, then an adverse reaction should be recorded as an AdverseEvent due to the aberrant workflow.
 */
var AdverseEventActuality;
(function (AdverseEventActuality) {
    AdverseEventActuality["ACTUAL"] = "actual";
    AdverseEventActuality["POTENTIAL"] = "potential";
})(AdverseEventActuality = exports.AdverseEventActuality || (exports.AdverseEventActuality = {}));
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
 * accepted | declined | tentative | needs-action | entered-in-error
 * Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
 */
var AppointmentResponseParticipantStatus;
(function (AppointmentResponseParticipantStatus) {
    AppointmentResponseParticipantStatus["ACCEPTED"] = "accepted";
    AppointmentResponseParticipantStatus["DECLINED"] = "declined";
    AppointmentResponseParticipantStatus["TENTATIVE"] = "tentative";
    AppointmentResponseParticipantStatus["NEEDS_ACTION"] = "needs-action";
    AppointmentResponseParticipantStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(AppointmentResponseParticipantStatus = exports.AppointmentResponseParticipantStatus || (exports.AppointmentResponseParticipantStatus = {}));
/**
 * comment | classifier | rating | container | response | change-request
 * The type of information this component of the content represents.
 */
var ArtifactAssessmentInformationType;
(function (ArtifactAssessmentInformationType) {
    ArtifactAssessmentInformationType["COMMENT"] = "comment";
    ArtifactAssessmentInformationType["CLASSIFIER"] = "classifier";
    ArtifactAssessmentInformationType["RATING"] = "rating";
    ArtifactAssessmentInformationType["CONTAINER"] = "container";
    ArtifactAssessmentInformationType["RESPONSE"] = "response";
    ArtifactAssessmentInformationType["CHANGE_REQUEST"] = "change-request";
})(ArtifactAssessmentInformationType = exports.ArtifactAssessmentInformationType || (exports.ArtifactAssessmentInformationType = {}));
/**
 * submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error
 * Indicates the workflow status of the comment or change request.
 */
var ArtifactAssessmentWorkflowStatus;
(function (ArtifactAssessmentWorkflowStatus) {
    ArtifactAssessmentWorkflowStatus["SUBMITTED"] = "submitted";
    ArtifactAssessmentWorkflowStatus["TRIAGED"] = "triaged";
    ArtifactAssessmentWorkflowStatus["WAITING_FOR_INPUT"] = "waiting-for-input";
    ArtifactAssessmentWorkflowStatus["RESOLVED_NO_CHANGE"] = "resolved-no-change";
    ArtifactAssessmentWorkflowStatus["RESOLVED_CHANGE_REQUIRED"] = "resolved-change-required";
    ArtifactAssessmentWorkflowStatus["DEFERRED"] = "deferred";
    ArtifactAssessmentWorkflowStatus["DUPLICATE"] = "duplicate";
    ArtifactAssessmentWorkflowStatus["APPLIED"] = "applied";
    ArtifactAssessmentWorkflowStatus["PUBLISHED"] = "published";
    ArtifactAssessmentWorkflowStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(ArtifactAssessmentWorkflowStatus = exports.ArtifactAssessmentWorkflowStatus || (exports.ArtifactAssessmentWorkflowStatus = {}));
/**
 * unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification
 * Indicates the disposition of the responsible party to the comment or change request.
 */
var ArtifactAssessmentDisposition;
(function (ArtifactAssessmentDisposition) {
    ArtifactAssessmentDisposition["UNRESOLVED"] = "unresolved";
    ArtifactAssessmentDisposition["NOT_PERSUASIVE"] = "not-persuasive";
    ArtifactAssessmentDisposition["PERSUASIVE"] = "persuasive";
    ArtifactAssessmentDisposition["PERSUASIVE_WITH_MODIFICATION"] = "persuasive-with-modification";
    ArtifactAssessmentDisposition["NOT_PERSUASIVE_WITH_MODIFICATION"] = "not-persuasive-with-modification";
})(ArtifactAssessmentDisposition = exports.ArtifactAssessmentDisposition || (exports.ArtifactAssessmentDisposition = {}));
/**
 * emergency | alert | critical | error | warning | notice | informational | debug
 * Indicates and enables segmentation of various severity including debugging from critical.
 * ATNA will map this to the SYSLOG PRI element.
 */
var AuditEventSeverity;
(function (AuditEventSeverity) {
    AuditEventSeverity["EMERGENCY"] = "emergency";
    AuditEventSeverity["ALERT"] = "alert";
    AuditEventSeverity["CRITICAL"] = "critical";
    AuditEventSeverity["ERROR"] = "error";
    AuditEventSeverity["WARNING"] = "warning";
    AuditEventSeverity["NOTICE"] = "notice";
    AuditEventSeverity["INFORMATIONAL"] = "informational";
    AuditEventSeverity["DEBUG"] = "debug";
})(AuditEventSeverity = exports.AuditEventSeverity || (exports.AuditEventSeverity = {}));
/**
 * preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown
 * A code specifying the state of the dispense event.
 */
var BiologicallyDerivedProductDispenseStatus;
(function (BiologicallyDerivedProductDispenseStatus) {
    BiologicallyDerivedProductDispenseStatus["PREPARATION"] = "preparation";
    BiologicallyDerivedProductDispenseStatus["IN_PROGRESS"] = "in-progress";
    BiologicallyDerivedProductDispenseStatus["ALLOCATED"] = "allocated";
    BiologicallyDerivedProductDispenseStatus["ISSUED"] = "issued";
    BiologicallyDerivedProductDispenseStatus["UNFULFILLED"] = "unfulfilled";
    BiologicallyDerivedProductDispenseStatus["RETURNED"] = "returned";
    BiologicallyDerivedProductDispenseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    BiologicallyDerivedProductDispenseStatus["UNKNOWN"] = "unknown";
})(BiologicallyDerivedProductDispenseStatus = exports.BiologicallyDerivedProductDispenseStatus || (exports.BiologicallyDerivedProductDispenseStatus = {}));
/**
 * document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification
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
    BundleType["SUBSCRIPTION_NOTIFICATION"] = "subscription-notification";
})(BundleType = exports.BundleType || (exports.BundleType = {}));
/**
 * match | include - why this is in the result set
 * Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
 */
var BundleSearchEntryMode;
(function (BundleSearchEntryMode) {
    BundleSearchEntryMode["MATCH"] = "match";
    BundleSearchEntryMode["INCLUDE"] = "include";
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
 * The current state of this {{title}}.
 * A nominal state-transition diagram can be found in the [Definition pattern](definition.html#statemachine) documentation.

Unknown does not represent 'other' - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var CanonicalResourcePublicationStatus;
(function (CanonicalResourcePublicationStatus) {
    CanonicalResourcePublicationStatus["DRAFT"] = "draft";
    CanonicalResourcePublicationStatus["ACTIVE"] = "active";
    CanonicalResourcePublicationStatus["RETIRED"] = "retired";
    CanonicalResourcePublicationStatus["UNKNOWN"] = "unknown";
})(CanonicalResourcePublicationStatus = exports.CanonicalResourcePublicationStatus || (exports.CanonicalResourcePublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this capability statement. Enables tracking the life-cycle of the content.
 * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * proposal | plan | order | option | directive
 * Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
 * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
This element is expected to be immutable. E.g. A "proposal" instance should never change to be a "plan" instance or "order" instance. Instead, a new instance 'basedOn' the prior instance should be created with the new 'intent' value.
 */
var CarePlanIntent;
(function (CarePlanIntent) {
    CarePlanIntent["PROPOSAL"] = "proposal";
    CarePlanIntent["PLAN"] = "plan";
    CarePlanIntent["ORDER"] = "order";
    CarePlanIntent["OPTION"] = "option";
    CarePlanIntent["DIRECTIVE"] = "directive";
})(CarePlanIntent = exports.CarePlanIntent || (exports.CarePlanIntent = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ChargeItemDefinitionPublicationStatus;
(function (ChargeItemDefinitionPublicationStatus) {
    ChargeItemDefinitionPublicationStatus["DRAFT"] = "draft";
    ChargeItemDefinitionPublicationStatus["ACTIVE"] = "active";
    ChargeItemDefinitionPublicationStatus["RETIRED"] = "retired";
    ChargeItemDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ChargeItemDefinitionPublicationStatus = exports.ChargeItemDefinitionPublicationStatus || (exports.ChargeItemDefinitionPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this summary. Enables tracking the life-cycle of the content.
 * Allows filtering of summaries that are appropriate for use versus not. Use "active" when the citation record is the version for others to actively use, "draft" while you are developing the content, and "retired" when this record should no longer be used for any purpose.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var CitationPublicationStatus;
(function (CitationPublicationStatus) {
    CitationPublicationStatus["DRAFT"] = "draft";
    CitationPublicationStatus["ACTIVE"] = "active";
    CitationPublicationStatus["RETIRED"] = "retired";
    CitationPublicationStatus["UNKNOWN"] = "unknown";
})(CitationPublicationStatus = exports.CitationPublicationStatus || (exports.CitationPublicationStatus = {}));
/**
 * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as | reprint | reprint-of
 * The type of relationship to the related artifact.
 */
var CitationRelatedArtifactTypeExpanded;
(function (CitationRelatedArtifactTypeExpanded) {
    CitationRelatedArtifactTypeExpanded["DOCUMENTATION"] = "documentation";
    CitationRelatedArtifactTypeExpanded["JUSTIFICATION"] = "justification";
    CitationRelatedArtifactTypeExpanded["CITATION"] = "citation";
    CitationRelatedArtifactTypeExpanded["PREDECESSOR"] = "predecessor";
    CitationRelatedArtifactTypeExpanded["SUCCESSOR"] = "successor";
    CitationRelatedArtifactTypeExpanded["DERIVED_FROM"] = "derived-from";
    CitationRelatedArtifactTypeExpanded["DEPENDS_ON"] = "depends-on";
    CitationRelatedArtifactTypeExpanded["COMPOSED_OF"] = "composed-of";
    CitationRelatedArtifactTypeExpanded["PART_OF"] = "part-of";
    CitationRelatedArtifactTypeExpanded["AMENDS"] = "amends";
    CitationRelatedArtifactTypeExpanded["AMENDED_WITH"] = "amended-with";
    CitationRelatedArtifactTypeExpanded["APPENDS"] = "appends";
    CitationRelatedArtifactTypeExpanded["APPENDED_WITH"] = "appended-with";
    CitationRelatedArtifactTypeExpanded["CITES"] = "cites";
    CitationRelatedArtifactTypeExpanded["CITED_BY"] = "cited-by";
    CitationRelatedArtifactTypeExpanded["COMMENTS_ON"] = "comments-on";
    CitationRelatedArtifactTypeExpanded["COMMENT_IN"] = "comment-in";
    CitationRelatedArtifactTypeExpanded["CONTAINS"] = "contains";
    CitationRelatedArtifactTypeExpanded["CONTAINED_IN"] = "contained-in";
    CitationRelatedArtifactTypeExpanded["CORRECTS"] = "corrects";
    CitationRelatedArtifactTypeExpanded["CORRECTION_IN"] = "correction-in";
    CitationRelatedArtifactTypeExpanded["REPLACES"] = "replaces";
    CitationRelatedArtifactTypeExpanded["REPLACED_WITH"] = "replaced-with";
    CitationRelatedArtifactTypeExpanded["RETRACTS"] = "retracts";
    CitationRelatedArtifactTypeExpanded["RETRACTED_BY"] = "retracted-by";
    CitationRelatedArtifactTypeExpanded["SIGNS"] = "signs";
    CitationRelatedArtifactTypeExpanded["SIMILAR_TO"] = "similar-to";
    CitationRelatedArtifactTypeExpanded["SUPPORTS"] = "supports";
    CitationRelatedArtifactTypeExpanded["SUPPORTED_WITH"] = "supported-with";
    CitationRelatedArtifactTypeExpanded["TRANSFORMS"] = "transforms";
    CitationRelatedArtifactTypeExpanded["TRANSFORMED_INTO"] = "transformed-into";
    CitationRelatedArtifactTypeExpanded["TRANSFORMED_WITH"] = "transformed-with";
    CitationRelatedArtifactTypeExpanded["DOCUMENTS"] = "documents";
    CitationRelatedArtifactTypeExpanded["SPECIFICATION_OF"] = "specification-of";
    CitationRelatedArtifactTypeExpanded["CREATED_WITH"] = "created-with";
    CitationRelatedArtifactTypeExpanded["CITE_AS"] = "cite-as";
    CitationRelatedArtifactTypeExpanded["REPRINT"] = "reprint";
    CitationRelatedArtifactTypeExpanded["REPRINT_OF"] = "reprint-of";
})(CitationRelatedArtifactTypeExpanded = exports.CitationRelatedArtifactTypeExpanded || (exports.CitationRelatedArtifactTypeExpanded = {}));
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
 * A code to indicate whether the nature of the request is: Claim - A request to an Insurer to adjudicate the supplied charges for health care goods and services under the identified policy and to pay the determined Benefit amount, if any; Preauthorization - A request to an Insurer to adjudicate the supplied proposed future charges for health care goods and services under the identified policy and to approve the services and provide the expected benefit amounts and potentially to reserve funds to pay the benefits when Claims for the indicated services are later submitted; or, Pre-determination - A request to an Insurer to adjudicate the supplied 'what if' charges for health care goods and services under the identified policy and report back what the Benefit payable would be had the services actually been provided.
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
 * A code to indicate whether the nature of the request is: Claim - A request to an Insurer to adjudicate the supplied charges for health care goods and services under the identified policy and to pay the determined Benefit amount, if any; Preauthorization - A request to an Insurer to adjudicate the supplied proposed future charges for health care goods and services under the identified policy and to approve the services and provide the expected benefit amounts and potentially to reserve funds to pay the benefits when Claims for the indicated services are later submitted; or, Pre-determination - A request to an Insurer to adjudicate the supplied 'what if' charges for health care goods and services under the identified policy and report back what the Benefit payable would be had the services actually been provided.
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
 * The resource may be used to indicate that the Claim/Preauthorization/Pre-determination has been received but processing has not begun (queued); that it has been processed and one or more errors have been detected (error); no errors were detected and some of the adjudication processing has been performed (partial); or all of the adjudication processing has completed without errors (complete).
 */
var ClaimResponseRemittanceOutcome;
(function (ClaimResponseRemittanceOutcome) {
    ClaimResponseRemittanceOutcome["QUEUED"] = "queued";
    ClaimResponseRemittanceOutcome["COMPLETE"] = "complete";
    ClaimResponseRemittanceOutcome["ERROR"] = "error";
    ClaimResponseRemittanceOutcome["PARTIAL"] = "partial";
})(ClaimResponseRemittanceOutcome = exports.ClaimResponseRemittanceOutcome || (exports.ClaimResponseRemittanceOutcome = {}));
/**
 * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * Identifies the workflow status of the assessment.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
 */
var ClinicalImpressionStatus;
(function (ClinicalImpressionStatus) {
    ClinicalImpressionStatus["PREPARATION"] = "preparation";
    ClinicalImpressionStatus["IN_PROGRESS"] = "in-progress";
    ClinicalImpressionStatus["NOT_DONE"] = "not-done";
    ClinicalImpressionStatus["ON_HOLD"] = "on-hold";
    ClinicalImpressionStatus["STOPPED"] = "stopped";
    ClinicalImpressionStatus["COMPLETED"] = "completed";
    ClinicalImpressionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ClinicalImpressionStatus["UNKNOWN"] = "unknown";
})(ClinicalImpressionStatus = exports.ClinicalImpressionStatus || (exports.ClinicalImpressionStatus = {}));
/**
 * indication | contraindication | interaction | undesirable-effect | warning
 * indication | contraindication | interaction | undesirable-effect | warning.
 */
var ClinicalUseDefinitionType;
(function (ClinicalUseDefinitionType) {
    ClinicalUseDefinitionType["INDICATION"] = "indication";
    ClinicalUseDefinitionType["CONTRAINDICATION"] = "contraindication";
    ClinicalUseDefinitionType["INTERACTION"] = "interaction";
    ClinicalUseDefinitionType["UNDESIRABLE_EFFECT"] = "undesirable-effect";
    ClinicalUseDefinitionType["WARNING"] = "warning";
})(ClinicalUseDefinitionType = exports.ClinicalUseDefinitionType || (exports.ClinicalUseDefinitionType = {}));
/**
 * draft | active | retired | unknown
 * The status of this code system. Enables tracking the life-cycle of the content.
 * Allows filtering of code systems that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists
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
    CodeSystemFilterOperator["CHILD_OF"] = "child-of";
    CodeSystemFilterOperator["DESCENDENT_LEAF"] = "descendent-leaf";
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
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the level of authority/intentionality associated with the CommunicationRequest and where the request fits into the workflow chain.
 * This element is expected to be immutable.  E.g. A "proposal" instance should never change to be a "plan" instance or "order" instance.  Instead, a new instance 'basedOn' the prior instance should be created with the new 'intent' value.

One exception to this is that the granularity of CommunicationRequest.intent is allowed to change.  For example, a Request identified as an "order" might later be clarified to be a "filler-order".  Or, in rarer cases (to meet recipient constraints), the reverse might also occur.
 */
var CommunicationRequestIntent;
(function (CommunicationRequestIntent) {
    CommunicationRequestIntent["PROPOSAL"] = "proposal";
    CommunicationRequestIntent["PLAN"] = "plan";
    CommunicationRequestIntent["DIRECTIVE"] = "directive";
    CommunicationRequestIntent["ORDER"] = "order";
    CommunicationRequestIntent["ORIGINAL_ORDER"] = "original-order";
    CommunicationRequestIntent["REFLEX_ORDER"] = "reflex-order";
    CommunicationRequestIntent["FILLER_ORDER"] = "filler-order";
    CommunicationRequestIntent["INSTANCE_ORDER"] = "instance-order";
    CommunicationRequestIntent["OPTION"] = "option";
})(CommunicationRequestIntent = exports.CommunicationRequestIntent || (exports.CommunicationRequestIntent = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var CompartmentDefinitionPublicationStatus;
(function (CompartmentDefinitionPublicationStatus) {
    CompartmentDefinitionPublicationStatus["DRAFT"] = "draft";
    CompartmentDefinitionPublicationStatus["ACTIVE"] = "active";
    CompartmentDefinitionPublicationStatus["RETIRED"] = "retired";
    CompartmentDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(CompartmentDefinitionPublicationStatus = exports.CompartmentDefinitionPublicationStatus || (exports.CompartmentDefinitionPublicationStatus = {}));
/**
 * Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare
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
    CompartmentDefinitionCompartmentType["EPISODEOFCARE"] = "EpisodeOfCare";
})(CompartmentDefinitionCompartmentType = exports.CompartmentDefinitionCompartmentType || (exports.CompartmentDefinitionCompartmentType = {}));
/**
 * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
 * The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
 * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.

Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
 */
var CompositionStatus;
(function (CompositionStatus) {
    CompositionStatus["REGISTERED"] = "registered";
    CompositionStatus["PARTIAL"] = "partial";
    CompositionStatus["PRELIMINARY"] = "preliminary";
    CompositionStatus["FINAL"] = "final";
    CompositionStatus["AMENDED"] = "amended";
    CompositionStatus["CORRECTED"] = "corrected";
    CompositionStatus["APPENDED"] = "appended";
    CompositionStatus["CANCELLED"] = "cancelled";
    CompositionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    CompositionStatus["DEPRECATED"] = "deprecated";
    CompositionStatus["UNKNOWN"] = "unknown";
})(CompositionStatus = exports.CompositionStatus || (exports.CompositionStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this concept map. Enables tracking the life-cycle of the content.
 * Allows filtering of concept maps that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ConceptMapPublicationStatus;
(function (ConceptMapPublicationStatus) {
    ConceptMapPublicationStatus["DRAFT"] = "draft";
    ConceptMapPublicationStatus["ACTIVE"] = "active";
    ConceptMapPublicationStatus["RETIRED"] = "retired";
    ConceptMapPublicationStatus["UNKNOWN"] = "unknown";
})(ConceptMapPublicationStatus = exports.ConceptMapPublicationStatus || (exports.ConceptMapPublicationStatus = {}));
/**
 * Coding | string | integer | boolean | dateTime | decimal | code
 * The type of the property value.
 */
var ConceptMapPropertyType;
(function (ConceptMapPropertyType) {
    ConceptMapPropertyType["CODING"] = "Coding";
    ConceptMapPropertyType["STRING"] = "string";
    ConceptMapPropertyType["INTEGER"] = "integer";
    ConceptMapPropertyType["BOOLEAN"] = "boolean";
    ConceptMapPropertyType["DATETIME"] = "dateTime";
    ConceptMapPropertyType["DECIMAL"] = "decimal";
    ConceptMapPropertyType["CODE"] = "code";
})(ConceptMapPropertyType = exports.ConceptMapPropertyType || (exports.ConceptMapPropertyType = {}));
/**
 * code | Coding | string | boolean | Quantity
 * The type of the source data contained in this concept map for this data element.
 * When the source or target is not content defined by FHIR, some additional application logic might be required to map from the FHIR Datatype to the externally defined content
 */
var ConceptMapmapAttributeType;
(function (ConceptMapmapAttributeType) {
    ConceptMapmapAttributeType["CODE"] = "code";
    ConceptMapmapAttributeType["CODING"] = "Coding";
    ConceptMapmapAttributeType["STRING"] = "string";
    ConceptMapmapAttributeType["BOOLEAN"] = "boolean";
    ConceptMapmapAttributeType["QUANTITY"] = "Quantity";
})(ConceptMapmapAttributeType = exports.ConceptMapmapAttributeType || (exports.ConceptMapmapAttributeType = {}));
/**
 * related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to
 * The relationship between the source and target concepts. The relationship is read from source to target (e.g. source-is-narrower-than-target).
 * This element is labeled as a modifier because it may indicate that there is no mapping.
 */
var ConceptMapRelationship;
(function (ConceptMapRelationship) {
    ConceptMapRelationship["RELATED_TO"] = "related-to";
    ConceptMapRelationship["EQUIVALENT"] = "equivalent";
    ConceptMapRelationship["SOURCE_IS_NARROWER_THAN_TARGET"] = "source-is-narrower-than-target";
    ConceptMapRelationship["SOURCE_IS_BROADER_THAN_TARGET"] = "source-is-broader-than-target";
    ConceptMapRelationship["NOT_RELATED_TO"] = "not-related-to";
})(ConceptMapRelationship = exports.ConceptMapRelationship || (exports.ConceptMapRelationship = {}));
/**
 * use-source-code | fixed | other-map
 * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped source code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
 */
var ConceptMapGroupUnmappedMode;
(function (ConceptMapGroupUnmappedMode) {
    ConceptMapGroupUnmappedMode["USE_SOURCE_CODE"] = "use-source-code";
    ConceptMapGroupUnmappedMode["FIXED"] = "fixed";
    ConceptMapGroupUnmappedMode["OTHER_MAP"] = "other-map";
})(ConceptMapGroupUnmappedMode = exports.ConceptMapGroupUnmappedMode || (exports.ConceptMapGroupUnmappedMode = {}));
/**
 * related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to
 * The default relationship value to apply between the source and target concepts when the source code is unmapped and the mode is 'fixed' or 'use-source-code'.
 * This element is labeled as a modifier because it may indicate that there is no mapping.
 */
var ConceptMapUnmappedConceptMapRelationship;
(function (ConceptMapUnmappedConceptMapRelationship) {
    ConceptMapUnmappedConceptMapRelationship["RELATED_TO"] = "related-to";
    ConceptMapUnmappedConceptMapRelationship["EQUIVALENT"] = "equivalent";
    ConceptMapUnmappedConceptMapRelationship["SOURCE_IS_NARROWER_THAN_TARGET"] = "source-is-narrower-than-target";
    ConceptMapUnmappedConceptMapRelationship["SOURCE_IS_BROADER_THAN_TARGET"] = "source-is-broader-than-target";
    ConceptMapUnmappedConceptMapRelationship["NOT_RELATED_TO"] = "not-related-to";
})(ConceptMapUnmappedConceptMapRelationship = exports.ConceptMapUnmappedConceptMapRelationship || (exports.ConceptMapUnmappedConceptMapRelationship = {}));
/**
 * draft | active | retired | unknown
 * The status of this condition definition. Enables tracking the life-cycle of the content.
 * Allows filtering of condition definitions that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ConditionDefinitionPublicationStatus;
(function (ConditionDefinitionPublicationStatus) {
    ConditionDefinitionPublicationStatus["DRAFT"] = "draft";
    ConditionDefinitionPublicationStatus["ACTIVE"] = "active";
    ConditionDefinitionPublicationStatus["RETIRED"] = "retired";
    ConditionDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ConditionDefinitionPublicationStatus = exports.ConditionDefinitionPublicationStatus || (exports.ConditionDefinitionPublicationStatus = {}));
/**
 * sensitive | specific
 * Kind of pre-condition.
 */
var ConditionDefinitionConditionPreconditionType;
(function (ConditionDefinitionConditionPreconditionType) {
    ConditionDefinitionConditionPreconditionType["SENSITIVE"] = "sensitive";
    ConditionDefinitionConditionPreconditionType["SPECIFIC"] = "specific";
})(ConditionDefinitionConditionPreconditionType = exports.ConditionDefinitionConditionPreconditionType || (exports.ConditionDefinitionConditionPreconditionType = {}));
/**
 * preadmit | diff-diagnosis | outcome
 * Use of the questionnaire.
 */
var ConditionDefinitionConditionQuestionnairePurpose;
(function (ConditionDefinitionConditionQuestionnairePurpose) {
    ConditionDefinitionConditionQuestionnairePurpose["PREADMIT"] = "preadmit";
    ConditionDefinitionConditionQuestionnairePurpose["DIFF_DIAGNOSIS"] = "diff-diagnosis";
    ConditionDefinitionConditionQuestionnairePurpose["OUTCOME"] = "outcome";
})(ConditionDefinitionConditionQuestionnairePurpose = exports.ConditionDefinitionConditionQuestionnairePurpose || (exports.ConditionDefinitionConditionQuestionnairePurpose = {}));
/**
 * draft | active | inactive | not-done | entered-in-error | unknown
 * Indicates the current state of this Consent resource.
 * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
 */
var ConsentState;
(function (ConsentState) {
    ConsentState["DRAFT"] = "draft";
    ConsentState["ACTIVE"] = "active";
    ConsentState["INACTIVE"] = "inactive";
    ConsentState["NOT_DONE"] = "not-done";
    ConsentState["ENTERED_IN_ERROR"] = "entered-in-error";
    ConsentState["UNKNOWN"] = "unknown";
})(ConsentState = exports.ConsentState || (exports.ConsentState = {}));
/**
 * deny | permit
 * Action to take - permit or deny - as default.
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
 * insurance | self-pay | other
 * The nature of the coverage be it insurance, or cash payment such as self-pay.
 */
var CoverageKind;
(function (CoverageKind) {
    CoverageKind["INSURANCE"] = "insurance";
    CoverageKind["SELF_PAY"] = "self-pay";
    CoverageKind["OTHER"] = "other";
})(CoverageKind = exports.CoverageKind || (exports.CoverageKind = {}));
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
var CoverageEligibilityResponseEligibilityOutcome;
(function (CoverageEligibilityResponseEligibilityOutcome) {
    CoverageEligibilityResponseEligibilityOutcome["QUEUED"] = "queued";
    CoverageEligibilityResponseEligibilityOutcome["COMPLETE"] = "complete";
    CoverageEligibilityResponseEligibilityOutcome["ERROR"] = "error";
    CoverageEligibilityResponseEligibilityOutcome["PARTIAL"] = "partial";
})(CoverageEligibilityResponseEligibilityOutcome = exports.CoverageEligibilityResponseEligibilityOutcome || (exports.CoverageEligibilityResponseEligibilityOutcome = {}));
/**
 * preliminary | final | entered-in-error | mitigated
 * Indicates the status of the detected issue.
 * This element is labeled as a modifier because the status contains the code entered-in-error that marks the issue as not currently valid.
 */
var DetectedIssueStatus;
(function (DetectedIssueStatus) {
    DetectedIssueStatus["PRELIMINARY"] = "preliminary";
    DetectedIssueStatus["FINAL"] = "final";
    DetectedIssueStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DetectedIssueStatus["MITIGATED"] = "mitigated";
})(DetectedIssueStatus = exports.DetectedIssueStatus || (exports.DetectedIssueStatus = {}));
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
 * barcode | rfid | manual | card | self-reported | electronic-transmission | unknown
 * A coded entry to indicate how the data was entered.
 */
var DeviceUDIEntryType;
(function (DeviceUDIEntryType) {
    DeviceUDIEntryType["BARCODE"] = "barcode";
    DeviceUDIEntryType["RFID"] = "rfid";
    DeviceUDIEntryType["MANUAL"] = "manual";
    DeviceUDIEntryType["CARD"] = "card";
    DeviceUDIEntryType["SELF_REPORTED"] = "self-reported";
    DeviceUDIEntryType["ELECTRONIC_TRANSMISSION"] = "electronic-transmission";
    DeviceUDIEntryType["UNKNOWN"] = "unknown";
})(DeviceUDIEntryType = exports.DeviceUDIEntryType || (exports.DeviceUDIEntryType = {}));
/**
 * active | inactive | entered-in-error
 * The Device record status. This is not the status of the device like availability.
 */
var DeviceFHIRDeviceStatus;
(function (DeviceFHIRDeviceStatus) {
    DeviceFHIRDeviceStatus["ACTIVE"] = "active";
    DeviceFHIRDeviceStatus["INACTIVE"] = "inactive";
    DeviceFHIRDeviceStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(DeviceFHIRDeviceStatus = exports.DeviceFHIRDeviceStatus || (exports.DeviceFHIRDeviceStatus = {}));
/**
 * registered-name | user-friendly-name | patient-reported-name
 * Indicates the kind of name. RegisteredName | UserFriendlyName | PatientReportedName.
 */
var DeviceNameType;
(function (DeviceNameType) {
    DeviceNameType["REGISTERED_NAME"] = "registered-name";
    DeviceNameType["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceNameType["PATIENT_REPORTED_NAME"] = "patient-reported-name";
})(DeviceNameType = exports.DeviceNameType || (exports.DeviceNameType = {}));
/**
 * basic | master | license
 * The type of identifier itself.
 */
var DeviceDefinitionDeviceRegulatoryIdentifierType;
(function (DeviceDefinitionDeviceRegulatoryIdentifierType) {
    DeviceDefinitionDeviceRegulatoryIdentifierType["BASIC"] = "basic";
    DeviceDefinitionDeviceRegulatoryIdentifierType["MASTER"] = "master";
    DeviceDefinitionDeviceRegulatoryIdentifierType["LICENSE"] = "license";
})(DeviceDefinitionDeviceRegulatoryIdentifierType = exports.DeviceDefinitionDeviceRegulatoryIdentifierType || (exports.DeviceDefinitionDeviceRegulatoryIdentifierType = {}));
/**
 * registered-name | user-friendly-name | patient-reported-name
 * The type of deviceName.
RegisteredName | UserFriendlyName | PatientReportedName.
 */
var DeviceDefinitionDeviceNameType;
(function (DeviceDefinitionDeviceNameType) {
    DeviceDefinitionDeviceNameType["REGISTERED_NAME"] = "registered-name";
    DeviceDefinitionDeviceNameType["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceDefinitionDeviceNameType["PATIENT_REPORTED_NAME"] = "patient-reported-name";
})(DeviceDefinitionDeviceNameType = exports.DeviceDefinitionDeviceNameType || (exports.DeviceDefinitionDeviceNameType = {}));
/**
 * lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version
 * Indicates the production identifier(s) that are expected to appear in the UDI carrier on the device label.
 */
var DeviceDefinitionDeviceProductionIdentifierInUDI;
(function (DeviceDefinitionDeviceProductionIdentifierInUDI) {
    DeviceDefinitionDeviceProductionIdentifierInUDI["LOT_NUMBER"] = "lot-number";
    DeviceDefinitionDeviceProductionIdentifierInUDI["MANUFACTURED_DATE"] = "manufactured-date";
    DeviceDefinitionDeviceProductionIdentifierInUDI["SERIAL_NUMBER"] = "serial-number";
    DeviceDefinitionDeviceProductionIdentifierInUDI["EXPIRATION_DATE"] = "expiration-date";
    DeviceDefinitionDeviceProductionIdentifierInUDI["BIOLOGICAL_SOURCE"] = "biological-source";
    DeviceDefinitionDeviceProductionIdentifierInUDI["SOFTWARE_VERSION"] = "software-version";
})(DeviceDefinitionDeviceProductionIdentifierInUDI = exports.DeviceDefinitionDeviceProductionIdentifierInUDI || (exports.DeviceDefinitionDeviceProductionIdentifierInUDI = {}));
/**
 * model | lot-numbers | serial-numbers
 * The scope of the corrective action - whether the action targeted all units of a given device model, or only a specific set of batches identified by lot numbers, or individually identified devices identified by the serial name.
 */
var DeviceDefinitionDeviceCorrectiveActionScope;
(function (DeviceDefinitionDeviceCorrectiveActionScope) {
    DeviceDefinitionDeviceCorrectiveActionScope["MODEL"] = "model";
    DeviceDefinitionDeviceCorrectiveActionScope["LOT_NUMBERS"] = "lot-numbers";
    DeviceDefinitionDeviceCorrectiveActionScope["SERIAL_NUMBERS"] = "serial-numbers";
})(DeviceDefinitionDeviceCorrectiveActionScope = exports.DeviceDefinitionDeviceCorrectiveActionScope || (exports.DeviceDefinitionDeviceCorrectiveActionScope = {}));
/**
 * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
 * A code specifying the state of the set of dispense events.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var DeviceDispenseStatus;
(function (DeviceDispenseStatus) {
    DeviceDispenseStatus["PREPARATION"] = "preparation";
    DeviceDispenseStatus["IN_PROGRESS"] = "in-progress";
    DeviceDispenseStatus["CANCELLED"] = "cancelled";
    DeviceDispenseStatus["ON_HOLD"] = "on-hold";
    DeviceDispenseStatus["COMPLETED"] = "completed";
    DeviceDispenseStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceDispenseStatus["STOPPED"] = "stopped";
    DeviceDispenseStatus["DECLINED"] = "declined";
    DeviceDispenseStatus["UNKNOWN"] = "unknown";
})(DeviceDispenseStatus = exports.DeviceDispenseStatus || (exports.DeviceDispenseStatus = {}));
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
 * This element is labeled as a modifier because the status contains the codes revoked and entered-in-error that mark the request as not currently valid.
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
 * Indicates how quickly the request should be addressed with respect to other requests.
 */
var DeviceRequestRequestPriority;
(function (DeviceRequestRequestPriority) {
    DeviceRequestRequestPriority["ROUTINE"] = "routine";
    DeviceRequestRequestPriority["URGENT"] = "urgent";
    DeviceRequestRequestPriority["ASAP"] = "asap";
    DeviceRequestRequestPriority["STAT"] = "stat";
})(DeviceRequestRequestPriority = exports.DeviceRequestRequestPriority || (exports.DeviceRequestRequestPriority = {}));
/**
 * registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown
 * The status of the diagnostic report.
 */
var DiagnosticReportStatus;
(function (DiagnosticReportStatus) {
    DiagnosticReportStatus["REGISTERED"] = "registered";
    DiagnosticReportStatus["PARTIAL"] = "partial";
    DiagnosticReportStatus["PRELIMINARY"] = "preliminary";
    DiagnosticReportStatus["MODIFIED"] = "modified";
    DiagnosticReportStatus["FINAL"] = "final";
    DiagnosticReportStatus["AMENDED"] = "amended";
    DiagnosticReportStatus["CORRECTED"] = "corrected";
    DiagnosticReportStatus["APPENDED"] = "appended";
    DiagnosticReportStatus["CANCELLED"] = "cancelled";
    DiagnosticReportStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DiagnosticReportStatus["UNKNOWN"] = "unknown";
})(DiagnosticReportStatus = exports.DiagnosticReportStatus || (exports.DiagnosticReportStatus = {}));
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
 * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
 * The status of the underlying document.
 * The document that is pointed to might be in various lifecycle states.
 */
var DocumentReferenceReferredDocumentStatus;
(function (DocumentReferenceReferredDocumentStatus) {
    DocumentReferenceReferredDocumentStatus["REGISTERED"] = "registered";
    DocumentReferenceReferredDocumentStatus["PARTIAL"] = "partial";
    DocumentReferenceReferredDocumentStatus["PRELIMINARY"] = "preliminary";
    DocumentReferenceReferredDocumentStatus["FINAL"] = "final";
    DocumentReferenceReferredDocumentStatus["AMENDED"] = "amended";
    DocumentReferenceReferredDocumentStatus["CORRECTED"] = "corrected";
    DocumentReferenceReferredDocumentStatus["APPENDED"] = "appended";
    DocumentReferenceReferredDocumentStatus["CANCELLED"] = "cancelled";
    DocumentReferenceReferredDocumentStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DocumentReferenceReferredDocumentStatus["DEPRECATED"] = "deprecated";
    DocumentReferenceReferredDocumentStatus["UNKNOWN"] = "unknown";
})(DocumentReferenceReferredDocumentStatus = exports.DocumentReferenceReferredDocumentStatus || (exports.DocumentReferenceReferredDocumentStatus = {}));
/**
 * planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
 * The current state of the encounter (not the state of the patient within the encounter - that is subjectState).
 * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
 */
var EncounterStatus;
(function (EncounterStatus) {
    EncounterStatus["PLANNED"] = "planned";
    EncounterStatus["IN_PROGRESS"] = "in-progress";
    EncounterStatus["ON_HOLD"] = "on-hold";
    EncounterStatus["DISCHARGED"] = "discharged";
    EncounterStatus["COMPLETED"] = "completed";
    EncounterStatus["CANCELLED"] = "cancelled";
    EncounterStatus["DISCONTINUED"] = "discontinued";
    EncounterStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterStatus["UNKNOWN"] = "unknown";
})(EncounterStatus = exports.EncounterStatus || (exports.EncounterStatus = {}));
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
 * planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
 * planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown.
 * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
 */
var EncounterHistoryEncounterStatus;
(function (EncounterHistoryEncounterStatus) {
    EncounterHistoryEncounterStatus["PLANNED"] = "planned";
    EncounterHistoryEncounterStatus["IN_PROGRESS"] = "in-progress";
    EncounterHistoryEncounterStatus["ON_HOLD"] = "on-hold";
    EncounterHistoryEncounterStatus["DISCHARGED"] = "discharged";
    EncounterHistoryEncounterStatus["COMPLETED"] = "completed";
    EncounterHistoryEncounterStatus["CANCELLED"] = "cancelled";
    EncounterHistoryEncounterStatus["DISCONTINUED"] = "discontinued";
    EncounterHistoryEncounterStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterHistoryEncounterStatus["UNKNOWN"] = "unknown";
})(EncounterHistoryEncounterStatus = exports.EncounterHistoryEncounterStatus || (exports.EncounterHistoryEncounterStatus = {}));
/**
 * active | suspended | error | off | entered-in-error | test
 * The endpoint status represents the general expected availability of an endpoint.
 * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid. Temporary downtimes or other unexpected short-term changes in availability would not be represented in this property.
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
var EnrollmentResponseEnrollmentOutcome;
(function (EnrollmentResponseEnrollmentOutcome) {
    EnrollmentResponseEnrollmentOutcome["QUEUED"] = "queued";
    EnrollmentResponseEnrollmentOutcome["COMPLETE"] = "complete";
    EnrollmentResponseEnrollmentOutcome["ERROR"] = "error";
    EnrollmentResponseEnrollmentOutcome["PARTIAL"] = "partial";
})(EnrollmentResponseEnrollmentOutcome = exports.EnrollmentResponseEnrollmentOutcome || (exports.EnrollmentResponseEnrollmentOutcome = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * The status of this summary. Enables tracking the life-cycle of the content.
 * Allows filtering of summarys s that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var EvidencePublicationStatus;
(function (EvidencePublicationStatus) {
    EvidencePublicationStatus["DRAFT"] = "draft";
    EvidencePublicationStatus["ACTIVE"] = "active";
    EvidencePublicationStatus["RETIRED"] = "retired";
    EvidencePublicationStatus["UNKNOWN"] = "unknown";
})(EvidencePublicationStatus = exports.EvidencePublicationStatus || (exports.EvidencePublicationStatus = {}));
/**
 * continuous | dichotomous | ordinal | polychotomous
 * How the variable is classified for use in adjusted analysis.
 */
var EvidenceVariableHandling;
(function (EvidenceVariableHandling) {
    EvidenceVariableHandling["CONTINUOUS"] = "continuous";
    EvidenceVariableHandling["DICHOTOMOUS"] = "dichotomous";
    EvidenceVariableHandling["ORDINAL"] = "ordinal";
    EvidenceVariableHandling["POLYCHOTOMOUS"] = "polychotomous";
})(EvidenceVariableHandling = exports.EvidenceVariableHandling || (exports.EvidenceVariableHandling = {}));
/**
 * draft | active | retired | unknown
 * The status of this summary. Enables tracking the life-cycle of the content.
 * Allows filtering of summaries that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var EvidenceReportPublicationStatus;
(function (EvidenceReportPublicationStatus) {
    EvidenceReportPublicationStatus["DRAFT"] = "draft";
    EvidenceReportPublicationStatus["ACTIVE"] = "active";
    EvidenceReportPublicationStatus["RETIRED"] = "retired";
    EvidenceReportPublicationStatus["UNKNOWN"] = "unknown";
})(EvidenceReportPublicationStatus = exports.EvidenceReportPublicationStatus || (exports.EvidenceReportPublicationStatus = {}));
/**
 * replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith
 * The type of relationship that this composition has with anther composition or document.
 * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
 */
var EvidenceReportReportRelationshipType;
(function (EvidenceReportReportRelationshipType) {
    EvidenceReportReportRelationshipType["REPLACES"] = "replaces";
    EvidenceReportReportRelationshipType["AMENDS"] = "amends";
    EvidenceReportReportRelationshipType["APPENDS"] = "appends";
    EvidenceReportReportRelationshipType["TRANSFORMS"] = "transforms";
    EvidenceReportReportRelationshipType["REPLACEDWITH"] = "replacedWith";
    EvidenceReportReportRelationshipType["AMENDEDWITH"] = "amendedWith";
    EvidenceReportReportRelationshipType["APPENDEDWITH"] = "appendedWith";
    EvidenceReportReportRelationshipType["TRANSFORMEDWITH"] = "transformedWith";
})(EvidenceReportReportRelationshipType = exports.EvidenceReportReportRelationshipType || (exports.EvidenceReportReportRelationshipType = {}));
/**
 * working | snapshot | changes
 * How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
 * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
 */
var EvidenceReportSectionMode;
(function (EvidenceReportSectionMode) {
    EvidenceReportSectionMode["WORKING"] = "working";
    EvidenceReportSectionMode["SNAPSHOT"] = "snapshot";
    EvidenceReportSectionMode["CHANGES"] = "changes";
})(EvidenceReportSectionMode = exports.EvidenceReportSectionMode || (exports.EvidenceReportSectionMode = {}));
/**
 * draft | active | retired | unknown
 * The status of this evidence variable. Enables tracking the life-cycle of the content.
 * Allows filtering of evidence variables that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var EvidenceVariablePublicationStatus;
(function (EvidenceVariablePublicationStatus) {
    EvidenceVariablePublicationStatus["DRAFT"] = "draft";
    EvidenceVariablePublicationStatus["ACTIVE"] = "active";
    EvidenceVariablePublicationStatus["RETIRED"] = "retired";
    EvidenceVariablePublicationStatus["UNKNOWN"] = "unknown";
})(EvidenceVariablePublicationStatus = exports.EvidenceVariablePublicationStatus || (exports.EvidenceVariablePublicationStatus = {}));
/**
 * all-of | any-of | at-least | at-most | statistical | net-effect | dataset
 * Used to specify if two or more characteristics are combined with OR or AND.
 */
var EvidenceVariableCharacteristicCombination;
(function (EvidenceVariableCharacteristicCombination) {
    EvidenceVariableCharacteristicCombination["ALL_OF"] = "all-of";
    EvidenceVariableCharacteristicCombination["ANY_OF"] = "any-of";
    EvidenceVariableCharacteristicCombination["AT_LEAST"] = "at-least";
    EvidenceVariableCharacteristicCombination["AT_MOST"] = "at-most";
    EvidenceVariableCharacteristicCombination["STATISTICAL"] = "statistical";
    EvidenceVariableCharacteristicCombination["NET_EFFECT"] = "net-effect";
    EvidenceVariableCharacteristicCombination["DATASET"] = "dataset";
})(EvidenceVariableCharacteristicCombination = exports.EvidenceVariableCharacteristicCombination || (exports.EvidenceVariableCharacteristicCombination = {}));
/**
 * draft | active | retired | unknown
 * The status of this example scenario. Enables tracking the life-cycle of the content.
 * Allows filtering of example scenarios that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ExampleScenarioPublicationStatus;
(function (ExampleScenarioPublicationStatus) {
    ExampleScenarioPublicationStatus["DRAFT"] = "draft";
    ExampleScenarioPublicationStatus["ACTIVE"] = "active";
    ExampleScenarioPublicationStatus["RETIRED"] = "retired";
    ExampleScenarioPublicationStatus["UNKNOWN"] = "unknown";
})(ExampleScenarioPublicationStatus = exports.ExampleScenarioPublicationStatus || (exports.ExampleScenarioPublicationStatus = {}));
/**
 * person | system
 * The category of actor - person or system.
 */
var ExampleScenarioActorType;
(function (ExampleScenarioActorType) {
    ExampleScenarioActorType["PERSON"] = "person";
    ExampleScenarioActorType["SYSTEM"] = "system";
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
 * A code to indicate whether the nature of the request is: Claim - A request to an Insurer to adjudicate the supplied charges for health care goods and services under the identified policy and to pay the determined Benefit amount, if any; Preauthorization - A request to an Insurer to adjudicate the supplied proposed future charges for health care goods and services under the identified policy and to approve the services and provide the expected benefit amounts and potentially to reserve funds to pay the benefits when Claims for the indicated services are later submitted; or, Pre-determination - A request to an Insurer to adjudicate the supplied 'what if' charges for health care goods and services under the identified policy and report back what the Benefit payable would be had the services actually been provided.
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
 * The resource may be used to indicate that the Claim/Preauthorization/Pre-determination has been received but processing has not begun (queued); that it has been processed and one or more errors have been detected (error); no errors were detected and some of the adjudication processing has been performed (partial); or all of the adjudication processing has completed without errors (complete).
 */
var ExplanationOfBenefitClaimOutcome;
(function (ExplanationOfBenefitClaimOutcome) {
    ExplanationOfBenefitClaimOutcome["QUEUED"] = "queued";
    ExplanationOfBenefitClaimOutcome["COMPLETE"] = "complete";
    ExplanationOfBenefitClaimOutcome["ERROR"] = "error";
    ExplanationOfBenefitClaimOutcome["PARTIAL"] = "partial";
})(ExplanationOfBenefitClaimOutcome = exports.ExplanationOfBenefitClaimOutcome || (exports.ExplanationOfBenefitClaimOutcome = {}));
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
 * active | entered-in-error | inactive
 * The validity about the information of the formulary item and not of the underlying product or service itself.
 * This status is intended to identify if the formulary item in a local system is in active use within the formulary.  For example, a formulary might include a medicinal product and the status relates to its inclusion.  At some point in the future, if the status of the formulary item is changed to "inactive" that means that it is no longer valid in the formulary.  But the product itself might still be in active use and might be included in other formularies.
 */
var FormularyItemStatus;
(function (FormularyItemStatus) {
    FormularyItemStatus["ACTIVE"] = "active";
    FormularyItemStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    FormularyItemStatus["INACTIVE"] = "inactive";
})(FormularyItemStatus = exports.FormularyItemStatus || (exports.FormularyItemStatus = {}));
/**
 * registered | available | cancelled | entered-in-error | unknown
 * The status of the genomic study.
 */
var GenomicStudyStatus;
(function (GenomicStudyStatus) {
    GenomicStudyStatus["REGISTERED"] = "registered";
    GenomicStudyStatus["AVAILABLE"] = "available";
    GenomicStudyStatus["CANCELLED"] = "cancelled";
    GenomicStudyStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    GenomicStudyStatus["UNKNOWN"] = "unknown";
})(GenomicStudyStatus = exports.GenomicStudyStatus || (exports.GenomicStudyStatus = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var GraphDefinitionPublicationStatus;
(function (GraphDefinitionPublicationStatus) {
    GraphDefinitionPublicationStatus["DRAFT"] = "draft";
    GraphDefinitionPublicationStatus["ACTIVE"] = "active";
    GraphDefinitionPublicationStatus["RETIRED"] = "retired";
    GraphDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(GraphDefinitionPublicationStatus = exports.GraphDefinitionPublicationStatus || (exports.GraphDefinitionPublicationStatus = {}));
/**
 * where | requires
 * Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed.
 * All conditional rules are evaluated; if they are true, then the rules are evaluated.
 */
var GraphDefinitionGraphCompartmentUse;
(function (GraphDefinitionGraphCompartmentUse) {
    GraphDefinitionGraphCompartmentUse["WHERE"] = "where";
    GraphDefinitionGraphCompartmentUse["REQUIRES"] = "requires";
})(GraphDefinitionGraphCompartmentUse = exports.GraphDefinitionGraphCompartmentUse || (exports.GraphDefinitionGraphCompartmentUse = {}));
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
 * Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare
 * Identifies the compartment.
 */
var GraphDefinitionCompartmentCode;
(function (GraphDefinitionCompartmentCode) {
    GraphDefinitionCompartmentCode["PATIENT"] = "Patient";
    GraphDefinitionCompartmentCode["ENCOUNTER"] = "Encounter";
    GraphDefinitionCompartmentCode["RELATEDPERSON"] = "RelatedPerson";
    GraphDefinitionCompartmentCode["PRACTITIONER"] = "Practitioner";
    GraphDefinitionCompartmentCode["DEVICE"] = "Device";
    GraphDefinitionCompartmentCode["EPISODEOFCARE"] = "EpisodeOfCare";
})(GraphDefinitionCompartmentCode = exports.GraphDefinitionCompartmentCode || (exports.GraphDefinitionCompartmentCode = {}));
/**
 * person | animal | practitioner | device | careteam | healthcareservice | location | organization | relatedperson | specimen
 * Identifies the broad classification of the kind of resources the group includes.
 * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, PractitionerRole, Device, CareTeam, HealthcareService, Location, Organization, RelatedPerson, or Specimen for the other types.), or a Group of the resources of the appropriate type.
 */
var GroupType;
(function (GroupType) {
    GroupType["PERSON"] = "person";
    GroupType["ANIMAL"] = "animal";
    GroupType["PRACTITIONER"] = "practitioner";
    GroupType["DEVICE"] = "device";
    GroupType["CARETEAM"] = "careteam";
    GroupType["HEALTHCARESERVICE"] = "healthcareservice";
    GroupType["LOCATION"] = "location";
    GroupType["ORGANIZATION"] = "organization";
    GroupType["RELATEDPERSON"] = "relatedperson";
    GroupType["SPECIMEN"] = "specimen";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
/**
 * definitional | enumerated
 * Basis for membership in the Group:

* 'definitional': The Group.characteristics specified are both necessary and sufficient to determine membership. All entities that meet the criteria are considered to be members of the group, whether referenced by the group or not. If members are present, they are individuals that happen to be known as meeting the Group.characteristics. The list cannot be presumed to be complete.
* 'enumerated': The Group.characteristics are necessary but not sufficient to determine membership. Membership is determined by being listed as one of the Group.member.
 */
var GroupMembership;
(function (GroupMembership) {
    GroupMembership["DEFINITIONAL"] = "definitional";
    GroupMembership["ENUMERATED"] = "enumerated";
})(GroupMembership = exports.GroupMembership || (exports.GroupMembership = {}));
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
 * available | entered-in-error | unknown
 * The current state of the ImagingSelection resource. This is not the status of any ImagingStudy, ServiceRequest, or Task resources associated with the ImagingSelection.
 * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
 */
var ImagingSelectionStatus;
(function (ImagingSelectionStatus) {
    ImagingSelectionStatus["AVAILABLE"] = "available";
    ImagingSelectionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    ImagingSelectionStatus["UNKNOWN"] = "unknown";
})(ImagingSelectionStatus = exports.ImagingSelectionStatus || (exports.ImagingSelectionStatus = {}));
/**
 * point | polyline | interpolated | circle | ellipse
 * Specifies the type of image region.
 * See [DICOM PS3.3 C.10.5.1.2](https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.10.5.html#sect_C.10.5.1.2).
 */
var ImagingSelection2DGraphicType;
(function (ImagingSelection2DGraphicType) {
    ImagingSelection2DGraphicType["POINT"] = "point";
    ImagingSelection2DGraphicType["POLYLINE"] = "polyline";
    ImagingSelection2DGraphicType["INTERPOLATED"] = "interpolated";
    ImagingSelection2DGraphicType["CIRCLE"] = "circle";
    ImagingSelection2DGraphicType["ELLIPSE"] = "ellipse";
})(ImagingSelection2DGraphicType = exports.ImagingSelection2DGraphicType || (exports.ImagingSelection2DGraphicType = {}));
/**
 * point | multipoint | polyline | polygon | ellipse | ellipsoid
 * Specifies the type of image region.
 * See [DICOM PS3.3 C.18.9.1.2](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.18.9.html#sect_C.18.9.1.2).
 */
var ImagingSelection3DGraphicType;
(function (ImagingSelection3DGraphicType) {
    ImagingSelection3DGraphicType["POINT"] = "point";
    ImagingSelection3DGraphicType["MULTIPOINT"] = "multipoint";
    ImagingSelection3DGraphicType["POLYLINE"] = "polyline";
    ImagingSelection3DGraphicType["POLYGON"] = "polygon";
    ImagingSelection3DGraphicType["ELLIPSE"] = "ellipse";
    ImagingSelection3DGraphicType["ELLIPSOID"] = "ellipsoid";
})(ImagingSelection3DGraphicType = exports.ImagingSelection3DGraphicType || (exports.ImagingSelection3DGraphicType = {}));
/**
 * registered | available | cancelled | entered-in-error | unknown
 * The current state of the ImagingStudy resource. This is not the status of any ServiceRequest or Task resources associated with the ImagingStudy.
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * draft | active | retired | unknown
 * The status of this ingredient. Enables tracking the life-cycle of the content.
 * Allows filtering of ingredient that are appropriate for use versus not.
 */
var IngredientPublicationStatus;
(function (IngredientPublicationStatus) {
    IngredientPublicationStatus["DRAFT"] = "draft";
    IngredientPublicationStatus["ACTIVE"] = "active";
    IngredientPublicationStatus["RETIRED"] = "retired";
    IngredientPublicationStatus["UNKNOWN"] = "unknown";
})(IngredientPublicationStatus = exports.IngredientPublicationStatus || (exports.IngredientPublicationStatus = {}));
/**
 * allowed | possible | actual
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 */
var IngredientManufacturerRole;
(function (IngredientManufacturerRole) {
    IngredientManufacturerRole["ALLOWED"] = "allowed";
    IngredientManufacturerRole["POSSIBLE"] = "possible";
    IngredientManufacturerRole["ACTUAL"] = "actual";
})(IngredientManufacturerRole = exports.IngredientManufacturerRole || (exports.IngredientManufacturerRole = {}));
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
 * active | inactive | entered-in-error | unknown
 * Status of the item entry.
 */
var InventoryItemStatus;
(function (InventoryItemStatus) {
    InventoryItemStatus["ACTIVE"] = "active";
    InventoryItemStatus["INACTIVE"] = "inactive";
    InventoryItemStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    InventoryItemStatus["UNKNOWN"] = "unknown";
})(InventoryItemStatus = exports.InventoryItemStatus || (exports.InventoryItemStatus = {}));
/**
 * draft | requested | active | entered-in-error
 * The status of the inventory check or notification - whether this is draft (e.g. the report is still pending some updates) or active.
 */
var InventoryReportStatus;
(function (InventoryReportStatus) {
    InventoryReportStatus["DRAFT"] = "draft";
    InventoryReportStatus["REQUESTED"] = "requested";
    InventoryReportStatus["ACTIVE"] = "active";
    InventoryReportStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(InventoryReportStatus = exports.InventoryReportStatus || (exports.InventoryReportStatus = {}));
/**
 * snapshot | difference
 * Whether the report is about the current inventory count (snapshot) or a differential change in inventory (change).
 */
var InventoryReportInventoryCountType;
(function (InventoryReportInventoryCountType) {
    InventoryReportInventoryCountType["SNAPSHOT"] = "snapshot";
    InventoryReportInventoryCountType["DIFFERENCE"] = "difference";
})(InventoryReportInventoryCountType = exports.InventoryReportInventoryCountType || (exports.InventoryReportInventoryCountType = {}));
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
 * draft | active | retired | unknown
 * The status of this library. Enables tracking the life-cycle of the content.
 * Allows filtering of libraries that are appropriate for use vs. not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * draft | active | retired | unknown
 * The status of this item. Enables tracking the life-cycle of the content.
 * Allows filtering of manufactured items that are appropriate for use versus not.
 */
var ManufacturedItemDefinitionPublicationStatus;
(function (ManufacturedItemDefinitionPublicationStatus) {
    ManufacturedItemDefinitionPublicationStatus["DRAFT"] = "draft";
    ManufacturedItemDefinitionPublicationStatus["ACTIVE"] = "active";
    ManufacturedItemDefinitionPublicationStatus["RETIRED"] = "retired";
    ManufacturedItemDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ManufacturedItemDefinitionPublicationStatus = exports.ManufacturedItemDefinitionPublicationStatus || (exports.ManufacturedItemDefinitionPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this measure. Enables tracking the life-cycle of the content.
 * Allows filtering of measures that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * individual | subject-list | summary | data-exchange
 * The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
 * Data-exchange reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
 */
var MeasureReportType;
(function (MeasureReportType) {
    MeasureReportType["INDIVIDUAL"] = "individual";
    MeasureReportType["SUBJECT_LIST"] = "subject-list";
    MeasureReportType["SUMMARY"] = "summary";
    MeasureReportType["DATA_EXCHANGE"] = "data-exchange";
})(MeasureReportType = exports.MeasureReportType || (exports.MeasureReportType = {}));
/**
 * incremental | snapshot
 * Indicates whether the data submitted in a data-exchange report represents a snapshot or incremental update. A snapshot update replaces all previously submitted data for the receiver, whereas an incremental update represents only updated and/or changed data and should be applied as a differential update to the existing submitted data for the receiver.
 * This element only applies to Data-collection reports used to communicate the data-of-interest for a measure
 */
var MeasureReportSubmitDataUpdateType;
(function (MeasureReportSubmitDataUpdateType) {
    MeasureReportSubmitDataUpdateType["INCREMENTAL"] = "incremental";
    MeasureReportSubmitDataUpdateType["SNAPSHOT"] = "snapshot";
})(MeasureReportSubmitDataUpdateType = exports.MeasureReportSubmitDataUpdateType || (exports.MeasureReportSubmitDataUpdateType = {}));
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
 * active | entered-in-error | inactive
 * A code to indicate if the medication referred to by this MedicationKnowledge is in active use within the drug database or inventory system. The status refers to the validity about the information of the medication and not to its medicinal properties.
 * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
 */
var MedicationKnowledgeStatus;
(function (MedicationKnowledgeStatus) {
    MedicationKnowledgeStatus["ACTIVE"] = "active";
    MedicationKnowledgeStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationKnowledgeStatus["INACTIVE"] = "inactive";
})(MedicationKnowledgeStatus = exports.MedicationKnowledgeStatus || (exports.MedicationKnowledgeStatus = {}));
/**
 * active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown
 * A code specifying the current state of the order.  Generally, this will be active or completed state.
 * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.

Clinical decision support systems should take the status into account when determining which medications to include in their algorithms.
 */
var MedicationRequestStatus;
(function (MedicationRequestStatus) {
    MedicationRequestStatus["ACTIVE"] = "active";
    MedicationRequestStatus["ON_HOLD"] = "on-hold";
    MedicationRequestStatus["ENDED"] = "ended";
    MedicationRequestStatus["STOPPED"] = "stopped";
    MedicationRequestStatus["COMPLETED"] = "completed";
    MedicationRequestStatus["CANCELLED"] = "cancelled";
    MedicationRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
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
 * recorded | entered-in-error | draft
 * A code representing the status of recording the medication statement.
 * This status concerns just the recording of the medication statement.  MedicationStatement.adherence should be used for indicating a patient's adherence to the information in this resource.  Note, the statuses are different than in previous releases for MedicationStatement or MedicationStatement.

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var MedicationStatementStatus;
(function (MedicationStatementStatus) {
    MedicationStatementStatus["RECORDED"] = "recorded";
    MedicationStatementStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationStatementStatus["DRAFT"] = "draft";
})(MedicationStatementStatus = exports.MedicationStatementStatus || (exports.MedicationStatementStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this message definition. Enables tracking the life-cycle of the content.
 * Allows filtering of message definitions that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * draft | active | retired | unknown
 * The status of this naming system. Enables tracking the life-cycle of the content.
 * Allows filtering of naming systems that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * oid | uuid | uri | iri-stem | v2csmnemonic | other
 * Identifies the unique identifier scheme used for this particular identifier.
 * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc. Preferred identifiers for the same identifier type SHOULD NOT overlap by period.
 */
var NamingSystemIdentifierType;
(function (NamingSystemIdentifierType) {
    NamingSystemIdentifierType["OID"] = "oid";
    NamingSystemIdentifierType["UUID"] = "uuid";
    NamingSystemIdentifierType["URI"] = "uri";
    NamingSystemIdentifierType["IRI_STEM"] = "iri-stem";
    NamingSystemIdentifierType["V2CSMNEMONIC"] = "v2csmnemonic";
    NamingSystemIdentifierType["OTHER"] = "other";
})(NamingSystemIdentifierType = exports.NamingSystemIdentifierType || (exports.NamingSystemIdentifierType = {}));
/**
 * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * A code representing the patient or other source's judgment about the state of the intake that this assertion is about.  Generally, this will be active or completed.
 * NutritionIntake is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for NutritionIntake.status contains codes that assert the status of the consumption of the food or fluid by the patient (for example, stopped or on hold) as well as codes that assert the status of the Nutrition Intake itself (for example, entered in error).

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var NutritionIntakeStatus;
(function (NutritionIntakeStatus) {
    NutritionIntakeStatus["PREPARATION"] = "preparation";
    NutritionIntakeStatus["IN_PROGRESS"] = "in-progress";
    NutritionIntakeStatus["NOT_DONE"] = "not-done";
    NutritionIntakeStatus["ON_HOLD"] = "on-hold";
    NutritionIntakeStatus["STOPPED"] = "stopped";
    NutritionIntakeStatus["COMPLETED"] = "completed";
    NutritionIntakeStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    NutritionIntakeStatus["UNKNOWN"] = "unknown";
})(NutritionIntakeStatus = exports.NutritionIntakeStatus || (exports.NutritionIntakeStatus = {}));
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
 * routine | urgent | asap | stat
 * Indicates how quickly the Nutrition Order should be addressed with respect to other        requests.
 */
var NutritionOrderPriority;
(function (NutritionOrderPriority) {
    NutritionOrderPriority["ROUTINE"] = "routine";
    NutritionOrderPriority["URGENT"] = "urgent";
    NutritionOrderPriority["ASAP"] = "asap";
    NutritionOrderPriority["STAT"] = "stat";
})(NutritionOrderPriority = exports.NutritionOrderPriority || (exports.NutritionOrderPriority = {}));
/**
 * active | inactive | entered-in-error
 * The current state of the product.
 * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
 */
var NutritionProductStatus;
(function (NutritionProductStatus) {
    NutritionProductStatus["ACTIVE"] = "active";
    NutritionProductStatus["INACTIVE"] = "inactive";
    NutritionProductStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(NutritionProductStatus = exports.NutritionProductStatus || (exports.NutritionProductStatus = {}));
/**
 * reflex | repeat | re-run
 * The type of trigger.
Reflex | Repeat | Re-run.
 */
var ObservationTriggeredByType;
(function (ObservationTriggeredByType) {
    ObservationTriggeredByType["REFLEX"] = "reflex";
    ObservationTriggeredByType["REPEAT"] = "repeat";
    ObservationTriggeredByType["RE_RUN"] = "re-run";
})(ObservationTriggeredByType = exports.ObservationTriggeredByType || (exports.ObservationTriggeredByType = {}));
/**
 * draft | active | retired | unknown
 * The current state of the ObservationDefinition.
 * A nominal state-transition diagram can be found in the [Definition pattern](definition.html#statemachine) documentation
Unknown does not represent "other" - one of the defined statuses must apply. Unknown is used when the authoring system is not sure what the current status is.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ObservationDefinitionPublicationStatus;
(function (ObservationDefinitionPublicationStatus) {
    ObservationDefinitionPublicationStatus["DRAFT"] = "draft";
    ObservationDefinitionPublicationStatus["ACTIVE"] = "active";
    ObservationDefinitionPublicationStatus["RETIRED"] = "retired";
    ObservationDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(ObservationDefinitionPublicationStatus = exports.ObservationDefinitionPublicationStatus || (exports.ObservationDefinitionPublicationStatus = {}));
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
 * male | female | other | unknown
 * The gender this  set of qualified values applies to.
 */
var ObservationDefinitionAdministrativeGender;
(function (ObservationDefinitionAdministrativeGender) {
    ObservationDefinitionAdministrativeGender["MALE"] = "male";
    ObservationDefinitionAdministrativeGender["FEMALE"] = "female";
    ObservationDefinitionAdministrativeGender["OTHER"] = "other";
    ObservationDefinitionAdministrativeGender["UNKNOWN"] = "unknown";
})(ObservationDefinitionAdministrativeGender = exports.ObservationDefinitionAdministrativeGender || (exports.ObservationDefinitionAdministrativeGender = {}));
/**
 * reference | critical | absolute
 * The category of range of values for continuous or ordinal observations that match the criteria of this set of qualified values.
 */
var ObservationDefinitionObservationRangeCategory;
(function (ObservationDefinitionObservationRangeCategory) {
    ObservationDefinitionObservationRangeCategory["REFERENCE"] = "reference";
    ObservationDefinitionObservationRangeCategory["CRITICAL"] = "critical";
    ObservationDefinitionObservationRangeCategory["ABSOLUTE"] = "absolute";
})(ObservationDefinitionObservationRangeCategory = exports.ObservationDefinitionObservationRangeCategory || (exports.ObservationDefinitionObservationRangeCategory = {}));
/**
 * draft | active | retired | unknown
 * The current state of this operation definition.
 * A nominal state-transition diagram can be found in the] documentation

Unknown does not represent 'other' - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
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
 * instance | type | system
 * If present, indicates that the parameter applies when the operation is being invoked at the specified level.
 */
var OperationDefinitionOperationParameterScope;
(function (OperationDefinitionOperationParameterScope) {
    OperationDefinitionOperationParameterScope["INSTANCE"] = "instance";
    OperationDefinitionOperationParameterScope["TYPE"] = "type";
    OperationDefinitionOperationParameterScope["SYSTEM"] = "system";
})(OperationDefinitionOperationParameterScope = exports.OperationDefinitionOperationParameterScope || (exports.OperationDefinitionOperationParameterScope = {}));
/**
 * number | date | string | token | reference | composite | quantity | uri | special
 * How the parameter is understood if/when it used as search parameter. This is only used if the parameter is a string.
 * Parameters that are search parameter usually - but not always - are also defined for use with general searches, and function in the operation to filter the set of resources in scope for the operation just like the do when searching. The searchType describes how the server processes the value. For an example, see the [Evaluate Measure Operation](measure-operation-evaluate-measure.html)
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
 * fatal | error | warning | information | success
 * Indicates whether the issue indicates a variation from successful processing.
 */
var OperationOutcomeIssueSeverity;
(function (OperationOutcomeIssueSeverity) {
    OperationOutcomeIssueSeverity["FATAL"] = "fatal";
    OperationOutcomeIssueSeverity["ERROR"] = "error";
    OperationOutcomeIssueSeverity["WARNING"] = "warning";
    OperationOutcomeIssueSeverity["INFORMATION"] = "information";
    OperationOutcomeIssueSeverity["SUCCESS"] = "success";
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
var PaymentReconciliationPaymentOutcome;
(function (PaymentReconciliationPaymentOutcome) {
    PaymentReconciliationPaymentOutcome["QUEUED"] = "queued";
    PaymentReconciliationPaymentOutcome["COMPLETE"] = "complete";
    PaymentReconciliationPaymentOutcome["ERROR"] = "error";
    PaymentReconciliationPaymentOutcome["PARTIAL"] = "partial";
})(PaymentReconciliationPaymentOutcome = exports.PaymentReconciliationPaymentOutcome || (exports.PaymentReconciliationPaymentOutcome = {}));
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
 * active | entered-in-error | draft | rejected
 * Status.
 */
var PermissionStatus;
(function (PermissionStatus) {
    PermissionStatus["ACTIVE"] = "active";
    PermissionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    PermissionStatus["DRAFT"] = "draft";
    PermissionStatus["REJECTED"] = "rejected";
})(PermissionStatus = exports.PermissionStatus || (exports.PermissionStatus = {}));
/**
 * deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny
 * Defines a procedure for arriving at an access decision given the set of rules.
 * see [XACML Combining Rules](http://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-cos01-en.html#_Toc325047267)
 */
var PermissionCombining;
(function (PermissionCombining) {
    PermissionCombining["DENY_OVERRIDES"] = "deny-overrides";
    PermissionCombining["PERMIT_OVERRIDES"] = "permit-overrides";
    PermissionCombining["ORDERED_DENY_OVERRIDES"] = "ordered-deny-overrides";
    PermissionCombining["ORDERED_PERMIT_OVERRIDES"] = "ordered-permit-overrides";
    PermissionCombining["DENY_UNLESS_PERMIT"] = "deny-unless-permit";
    PermissionCombining["PERMIT_UNLESS_DENY"] = "permit-unless-deny";
})(PermissionCombining = exports.PermissionCombining || (exports.PermissionCombining = {}));
/**
 * deny | permit
 * deny | permit.
 */
var PermissionProvisionType;
(function (PermissionProvisionType) {
    PermissionProvisionType["DENY"] = "deny";
    PermissionProvisionType["PERMIT"] = "permit";
})(PermissionProvisionType = exports.PermissionProvisionType || (exports.PermissionProvisionType = {}));
/**
 * instance | related | dependents | authoredby
 * How the resource reference is interpreted when testing consent restrictions.
 */
var PermissionConsentDataMeaning;
(function (PermissionConsentDataMeaning) {
    PermissionConsentDataMeaning["INSTANCE"] = "instance";
    PermissionConsentDataMeaning["RELATED"] = "related";
    PermissionConsentDataMeaning["DEPENDENTS"] = "dependents";
    PermissionConsentDataMeaning["AUTHOREDBY"] = "authoredby";
})(PermissionConsentDataMeaning = exports.PermissionConsentDataMeaning || (exports.PermissionConsentDataMeaning = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var PlanDefinitionPublicationStatus;
(function (PlanDefinitionPublicationStatus) {
    PlanDefinitionPublicationStatus["DRAFT"] = "draft";
    PlanDefinitionPublicationStatus["ACTIVE"] = "active";
    PlanDefinitionPublicationStatus["RETIRED"] = "retired";
    PlanDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(PlanDefinitionPublicationStatus = exports.PlanDefinitionPublicationStatus || (exports.PlanDefinitionPublicationStatus = {}));
/**
 * careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson
 * The type of participant in the action.
 */
var PlanDefinitionActivityParticipantType;
(function (PlanDefinitionActivityParticipantType) {
    PlanDefinitionActivityParticipantType["CARETEAM"] = "careteam";
    PlanDefinitionActivityParticipantType["DEVICE"] = "device";
    PlanDefinitionActivityParticipantType["GROUP"] = "group";
    PlanDefinitionActivityParticipantType["HEALTHCARESERVICE"] = "healthcareservice";
    PlanDefinitionActivityParticipantType["LOCATION"] = "location";
    PlanDefinitionActivityParticipantType["ORGANIZATION"] = "organization";
    PlanDefinitionActivityParticipantType["PATIENT"] = "patient";
    PlanDefinitionActivityParticipantType["PRACTITIONER"] = "practitioner";
    PlanDefinitionActivityParticipantType["PRACTITIONERROLE"] = "practitionerrole";
    PlanDefinitionActivityParticipantType["RELATEDPERSON"] = "relatedperson";
})(PlanDefinitionActivityParticipantType = exports.PlanDefinitionActivityParticipantType || (exports.PlanDefinitionActivityParticipantType = {}));
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
 * before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
 * The relationship of the start of this action to the related action.
 */
var PlanDefinitionActionRelationshipType;
(function (PlanDefinitionActionRelationshipType) {
    PlanDefinitionActionRelationshipType["BEFORE"] = "before";
    PlanDefinitionActionRelationshipType["BEFORE_START"] = "before-start";
    PlanDefinitionActionRelationshipType["BEFORE_END"] = "before-end";
    PlanDefinitionActionRelationshipType["CONCURRENT"] = "concurrent";
    PlanDefinitionActionRelationshipType["CONCURRENT_WITH_START"] = "concurrent-with-start";
    PlanDefinitionActionRelationshipType["CONCURRENT_WITH_END"] = "concurrent-with-end";
    PlanDefinitionActionRelationshipType["AFTER"] = "after";
    PlanDefinitionActionRelationshipType["AFTER_START"] = "after-start";
    PlanDefinitionActionRelationshipType["AFTER_END"] = "after-end";
})(PlanDefinitionActionRelationshipType = exports.PlanDefinitionActionRelationshipType || (exports.PlanDefinitionActionRelationshipType = {}));
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
 * revision | quotation | source | instantiates | removal
 * How the entity was used during the activity.
 */
var ProvenanceEntityRole;
(function (ProvenanceEntityRole) {
    ProvenanceEntityRole["REVISION"] = "revision";
    ProvenanceEntityRole["QUOTATION"] = "quotation";
    ProvenanceEntityRole["SOURCE"] = "source";
    ProvenanceEntityRole["INSTANTIATES"] = "instantiates";
    ProvenanceEntityRole["REMOVAL"] = "removal";
})(ProvenanceEntityRole = exports.ProvenanceEntityRole || (exports.ProvenanceEntityRole = {}));
/**
 * draft | active | retired | unknown
 * The current state of this questionnaire.
 * A nominal state-transition diagram can be found in the] documentation

Unknown does not represent 'other' - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * hidden | protected
 * Indicates if and how items that are disabled (because enableWhen evaluates to 'false') should be displayed.
 * If not specified, rendering behavior is up to the client.  This element is only meaningful if enableWhen or an equivalent extension is present
 */
var QuestionnaireDisabledDisplay;
(function (QuestionnaireDisabledDisplay) {
    QuestionnaireDisabledDisplay["HIDDEN"] = "hidden";
    QuestionnaireDisabledDisplay["PROTECTED"] = "protected";
})(QuestionnaireDisabledDisplay = exports.QuestionnaireDisabledDisplay || (exports.QuestionnaireDisabledDisplay = {}));
/**
 * optionsOnly | optionsOrType | optionsOrString
 * For items that have a defined set of allowed answers (via answerOption or answerValueSet), indicates whether values *other* than those specified can be selected.
 */
var QuestionnaireAnswerConstraint;
(function (QuestionnaireAnswerConstraint) {
    QuestionnaireAnswerConstraint["OPTIONSONLY"] = "optionsOnly";
    QuestionnaireAnswerConstraint["OPTIONSORTYPE"] = "optionsOrType";
    QuestionnaireAnswerConstraint["OPTIONSORSTRING"] = "optionsOrString";
})(QuestionnaireAnswerConstraint = exports.QuestionnaireAnswerConstraint || (exports.QuestionnaireAnswerConstraint = {}));
/**
 * in-progress | completed | amended | entered-in-error | stopped
 * The current state of the questionnaire response.
 * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
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
 * The current state of the request. For request orchestrations, the status reflects the status of all the requests in the orchestration.
 */
var RequestOrchestrationRequestStatus;
(function (RequestOrchestrationRequestStatus) {
    RequestOrchestrationRequestStatus["DRAFT"] = "draft";
    RequestOrchestrationRequestStatus["ACTIVE"] = "active";
    RequestOrchestrationRequestStatus["ON_HOLD"] = "on-hold";
    RequestOrchestrationRequestStatus["REVOKED"] = "revoked";
    RequestOrchestrationRequestStatus["COMPLETED"] = "completed";
    RequestOrchestrationRequestStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    RequestOrchestrationRequestStatus["UNKNOWN"] = "unknown";
})(RequestOrchestrationRequestStatus = exports.RequestOrchestrationRequestStatus || (exports.RequestOrchestrationRequestStatus = {}));
/**
 * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
 */
var RequestOrchestrationRequestIntent;
(function (RequestOrchestrationRequestIntent) {
    RequestOrchestrationRequestIntent["PROPOSAL"] = "proposal";
    RequestOrchestrationRequestIntent["PLAN"] = "plan";
    RequestOrchestrationRequestIntent["DIRECTIVE"] = "directive";
    RequestOrchestrationRequestIntent["ORDER"] = "order";
    RequestOrchestrationRequestIntent["ORIGINAL_ORDER"] = "original-order";
    RequestOrchestrationRequestIntent["REFLEX_ORDER"] = "reflex-order";
    RequestOrchestrationRequestIntent["FILLER_ORDER"] = "filler-order";
    RequestOrchestrationRequestIntent["INSTANCE_ORDER"] = "instance-order";
    RequestOrchestrationRequestIntent["OPTION"] = "option";
})(RequestOrchestrationRequestIntent = exports.RequestOrchestrationRequestIntent || (exports.RequestOrchestrationRequestIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the request should be addressed with respect to other requests.
 */
var RequestOrchestrationRequestPriority;
(function (RequestOrchestrationRequestPriority) {
    RequestOrchestrationRequestPriority["ROUTINE"] = "routine";
    RequestOrchestrationRequestPriority["URGENT"] = "urgent";
    RequestOrchestrationRequestPriority["ASAP"] = "asap";
    RequestOrchestrationRequestPriority["STAT"] = "stat";
})(RequestOrchestrationRequestPriority = exports.RequestOrchestrationRequestPriority || (exports.RequestOrchestrationRequestPriority = {}));
/**
 * applicability | start | stop
 * The kind of condition.
 * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
 */
var RequestOrchestrationActionConditionKind;
(function (RequestOrchestrationActionConditionKind) {
    RequestOrchestrationActionConditionKind["APPLICABILITY"] = "applicability";
    RequestOrchestrationActionConditionKind["START"] = "start";
    RequestOrchestrationActionConditionKind["STOP"] = "stop";
})(RequestOrchestrationActionConditionKind = exports.RequestOrchestrationActionConditionKind || (exports.RequestOrchestrationActionConditionKind = {}));
/**
 * before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end
 * The relationship of this action to the related action.
 */
var RequestOrchestrationActionRelationshipType;
(function (RequestOrchestrationActionRelationshipType) {
    RequestOrchestrationActionRelationshipType["BEFORE"] = "before";
    RequestOrchestrationActionRelationshipType["BEFORE_START"] = "before-start";
    RequestOrchestrationActionRelationshipType["BEFORE_END"] = "before-end";
    RequestOrchestrationActionRelationshipType["CONCURRENT"] = "concurrent";
    RequestOrchestrationActionRelationshipType["CONCURRENT_WITH_START"] = "concurrent-with-start";
    RequestOrchestrationActionRelationshipType["CONCURRENT_WITH_END"] = "concurrent-with-end";
    RequestOrchestrationActionRelationshipType["AFTER"] = "after";
    RequestOrchestrationActionRelationshipType["AFTER_START"] = "after-start";
    RequestOrchestrationActionRelationshipType["AFTER_END"] = "after-end";
})(RequestOrchestrationActionRelationshipType = exports.RequestOrchestrationActionRelationshipType || (exports.RequestOrchestrationActionRelationshipType = {}));
/**
 * careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson
 * The type of participant in the action.
 */
var RequestOrchestrationActivityParticipantType;
(function (RequestOrchestrationActivityParticipantType) {
    RequestOrchestrationActivityParticipantType["CARETEAM"] = "careteam";
    RequestOrchestrationActivityParticipantType["DEVICE"] = "device";
    RequestOrchestrationActivityParticipantType["GROUP"] = "group";
    RequestOrchestrationActivityParticipantType["HEALTHCARESERVICE"] = "healthcareservice";
    RequestOrchestrationActivityParticipantType["LOCATION"] = "location";
    RequestOrchestrationActivityParticipantType["ORGANIZATION"] = "organization";
    RequestOrchestrationActivityParticipantType["PATIENT"] = "patient";
    RequestOrchestrationActivityParticipantType["PRACTITIONER"] = "practitioner";
    RequestOrchestrationActivityParticipantType["PRACTITIONERROLE"] = "practitionerrole";
    RequestOrchestrationActivityParticipantType["RELATEDPERSON"] = "relatedperson";
})(RequestOrchestrationActivityParticipantType = exports.RequestOrchestrationActivityParticipantType || (exports.RequestOrchestrationActivityParticipantType = {}));
/**
 * visual-group | logical-group | sentence-group
 * Defines the grouping behavior for the action and its children.
 */
var RequestOrchestrationActionGroupingBehavior;
(function (RequestOrchestrationActionGroupingBehavior) {
    RequestOrchestrationActionGroupingBehavior["VISUAL_GROUP"] = "visual-group";
    RequestOrchestrationActionGroupingBehavior["LOGICAL_GROUP"] = "logical-group";
    RequestOrchestrationActionGroupingBehavior["SENTENCE_GROUP"] = "sentence-group";
})(RequestOrchestrationActionGroupingBehavior = exports.RequestOrchestrationActionGroupingBehavior || (exports.RequestOrchestrationActionGroupingBehavior = {}));
/**
 * any | all | all-or-none | exactly-one | at-most-one | one-or-more
 * Defines the selection behavior for the action and its children.
 */
var RequestOrchestrationActionSelectionBehavior;
(function (RequestOrchestrationActionSelectionBehavior) {
    RequestOrchestrationActionSelectionBehavior["ANY"] = "any";
    RequestOrchestrationActionSelectionBehavior["ALL"] = "all";
    RequestOrchestrationActionSelectionBehavior["ALL_OR_NONE"] = "all-or-none";
    RequestOrchestrationActionSelectionBehavior["EXACTLY_ONE"] = "exactly-one";
    RequestOrchestrationActionSelectionBehavior["AT_MOST_ONE"] = "at-most-one";
    RequestOrchestrationActionSelectionBehavior["ONE_OR_MORE"] = "one-or-more";
})(RequestOrchestrationActionSelectionBehavior = exports.RequestOrchestrationActionSelectionBehavior || (exports.RequestOrchestrationActionSelectionBehavior = {}));
/**
 * must | could | must-unless-documented
 * Defines expectations around whether an action is required.
 */
var RequestOrchestrationActionRequiredBehavior;
(function (RequestOrchestrationActionRequiredBehavior) {
    RequestOrchestrationActionRequiredBehavior["MUST"] = "must";
    RequestOrchestrationActionRequiredBehavior["COULD"] = "could";
    RequestOrchestrationActionRequiredBehavior["MUST_UNLESS_DOCUMENTED"] = "must-unless-documented";
})(RequestOrchestrationActionRequiredBehavior = exports.RequestOrchestrationActionRequiredBehavior || (exports.RequestOrchestrationActionRequiredBehavior = {}));
/**
 * yes | no
 * Defines whether the action should usually be preselected.
 */
var RequestOrchestrationActionPrecheckBehavior;
(function (RequestOrchestrationActionPrecheckBehavior) {
    RequestOrchestrationActionPrecheckBehavior["YES"] = "yes";
    RequestOrchestrationActionPrecheckBehavior["NO"] = "no";
})(RequestOrchestrationActionPrecheckBehavior = exports.RequestOrchestrationActionPrecheckBehavior || (exports.RequestOrchestrationActionPrecheckBehavior = {}));
/**
 * single | multiple
 * Defines whether the action can be selected multiple times.
 */
var RequestOrchestrationActionCardinalityBehavior;
(function (RequestOrchestrationActionCardinalityBehavior) {
    RequestOrchestrationActionCardinalityBehavior["SINGLE"] = "single";
    RequestOrchestrationActionCardinalityBehavior["MULTIPLE"] = "multiple";
})(RequestOrchestrationActionCardinalityBehavior = exports.RequestOrchestrationActionCardinalityBehavior || (exports.RequestOrchestrationActionCardinalityBehavior = {}));
/**
 * draft | active | retired | unknown
 * The status of this Requirements. Enables tracking the life-cycle of the content.
 * Allows filtering of Requirements that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var RequirementsPublicationStatus;
(function (RequirementsPublicationStatus) {
    RequirementsPublicationStatus["DRAFT"] = "draft";
    RequirementsPublicationStatus["ACTIVE"] = "active";
    RequirementsPublicationStatus["RETIRED"] = "retired";
    RequirementsPublicationStatus["UNKNOWN"] = "unknown";
})(RequirementsPublicationStatus = exports.RequirementsPublicationStatus || (exports.RequirementsPublicationStatus = {}));
/**
 * SHALL | SHOULD | MAY | SHOULD-NOT
 * A short human usable label for this statement.
 * The conformance code is extracted from the requirement to make indexing and display easier. The requirement needs to express the conformance verbs directly in the markdown content. It's not unusual to mix verbs in a single sentence (e.g. System SHALL do X and SHOULD do Y)
 */
var RequirementsStatementConformance;
(function (RequirementsStatementConformance) {
    RequirementsStatementConformance["SHALL"] = "SHALL";
    RequirementsStatementConformance["SHOULD"] = "SHOULD";
    RequirementsStatementConformance["MAY"] = "MAY";
    RequirementsStatementConformance["SHOULD_NOT"] = "SHOULD-NOT";
})(RequirementsStatementConformance = exports.RequirementsStatementConformance || (exports.RequirementsStatementConformance = {}));
/**
 * draft | active | retired | unknown
 * The publication state of the resource (not of the study).
 */
var ResearchStudyPublicationStatus;
(function (ResearchStudyPublicationStatus) {
    ResearchStudyPublicationStatus["DRAFT"] = "draft";
    ResearchStudyPublicationStatus["ACTIVE"] = "active";
    ResearchStudyPublicationStatus["RETIRED"] = "retired";
    ResearchStudyPublicationStatus["UNKNOWN"] = "unknown";
})(ResearchStudyPublicationStatus = exports.ResearchStudyPublicationStatus || (exports.ResearchStudyPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The publication state of the resource (not of the subject).
 */
var ResearchSubjectPublicationStatus;
(function (ResearchSubjectPublicationStatus) {
    ResearchSubjectPublicationStatus["DRAFT"] = "draft";
    ResearchSubjectPublicationStatus["ACTIVE"] = "active";
    ResearchSubjectPublicationStatus["RETIRED"] = "retired";
    ResearchSubjectPublicationStatus["UNKNOWN"] = "unknown";
})(ResearchSubjectPublicationStatus = exports.ResearchSubjectPublicationStatus || (exports.ResearchSubjectPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The status of this search parameter. Enables tracking the life-cycle of the content.
 * Allows filtering of search parameters that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * normal | phonetic | other
 * How the search parameter relates to the set of elements returned by evaluating the expression query.
 */
var SearchParameterSearchProcessingModeType;
(function (SearchParameterSearchProcessingModeType) {
    SearchParameterSearchProcessingModeType["NORMAL"] = "normal";
    SearchParameterSearchProcessingModeType["PHONETIC"] = "phonetic";
    SearchParameterSearchProcessingModeType["OTHER"] = "other";
})(SearchParameterSearchProcessingModeType = exports.SearchParameterSearchProcessingModeType || (exports.SearchParameterSearchProcessingModeType = {}));
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
 * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
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
    SearchParameterSearchModifierCode["OF_TYPE"] = "of-type";
    SearchParameterSearchModifierCode["CODE_TEXT"] = "code-text";
    SearchParameterSearchModifierCode["TEXT_ADVANCED"] = "text-advanced";
    SearchParameterSearchModifierCode["ITERATE"] = "iterate";
})(SearchParameterSearchModifierCode = exports.SearchParameterSearchModifierCode || (exports.SearchParameterSearchModifierCode = {}));
/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * The status of the order.
 * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, revoked or placed on-hold. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
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
 * grouped | pooled
 * This element signifies if the specimen is part of a group or pooled.
 */
var SpecimenPublicationStatus;
(function (SpecimenPublicationStatus) {
    SpecimenPublicationStatus["GROUPED"] = "grouped";
    SpecimenPublicationStatus["POOLED"] = "pooled";
})(SpecimenPublicationStatus = exports.SpecimenPublicationStatus || (exports.SpecimenPublicationStatus = {}));
/**
 * draft | active | retired | unknown
 * The current state of theSpecimenDefinition.
 * A nominal state-transition diagram can be found in the [Definition pattern](definition.html#statemachine) documentation
Unknown does not represent "other" - one of the defined statuses must apply. Unknown is used when the authoring system is not sure what the current status is.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var SpecimenDefinitionPublicationStatus;
(function (SpecimenDefinitionPublicationStatus) {
    SpecimenDefinitionPublicationStatus["DRAFT"] = "draft";
    SpecimenDefinitionPublicationStatus["ACTIVE"] = "active";
    SpecimenDefinitionPublicationStatus["RETIRED"] = "retired";
    SpecimenDefinitionPublicationStatus["UNKNOWN"] = "unknown";
})(SpecimenDefinitionPublicationStatus = exports.SpecimenDefinitionPublicationStatus || (exports.SpecimenDefinitionPublicationStatus = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * If the definition is a specialization, then it adds to the differential new elements and optionally additional rules to an existing concrete type, and the snapshot includes the inherited elements and rules.  If the definition is a constraint, then it cannot define new elements, it can only make new rules about existing content (see [Profiling Resources](profiling.html#resources)).
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * types | type-and-types
 * If this is the default rule set to apply for the source type or this combination of types.
 * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
 */
var StructureMapGroupTypeMode;
(function (StructureMapGroupTypeMode) {
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
 * first | share | last | single
 * If field is a list, how to manage the list.
 */
var StructureMapTargetListMode;
(function (StructureMapTargetListMode) {
    StructureMapTargetListMode["FIRST"] = "first";
    StructureMapTargetListMode["SHARE"] = "share";
    StructureMapTargetListMode["LAST"] = "last";
    StructureMapTargetListMode["SINGLE"] = "single";
})(StructureMapTargetListMode = exports.StructureMapTargetListMode || (exports.StructureMapTargetListMode = {}));
/**
 * requested | active | error | off | entered-in-error
 * The status of the subscription, which marks the server state for managing the subscription.
 * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.

This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
 */
var SubscriptionStatusCodes;
(function (SubscriptionStatusCodes) {
    SubscriptionStatusCodes["REQUESTED"] = "requested";
    SubscriptionStatusCodes["ACTIVE"] = "active";
    SubscriptionStatusCodes["ERROR"] = "error";
    SubscriptionStatusCodes["OFF"] = "off";
    SubscriptionStatusCodes["ENTERED_IN_ERROR"] = "entered-in-error";
})(SubscriptionStatusCodes = exports.SubscriptionStatusCodes || (exports.SubscriptionStatusCodes = {}));
/**
 * eq | ne | gt | lt | ge | le | sa | eb | ap
 * Comparator applied to this filter parameter.
 * Must be a comparator allowed by the SubscriptionTopic relevant to this Subscription filter.
 */
var SubscriptionSearchComparator;
(function (SubscriptionSearchComparator) {
    SubscriptionSearchComparator["EQ"] = "eq";
    SubscriptionSearchComparator["NE"] = "ne";
    SubscriptionSearchComparator["GT"] = "gt";
    SubscriptionSearchComparator["LT"] = "lt";
    SubscriptionSearchComparator["GE"] = "ge";
    SubscriptionSearchComparator["LE"] = "le";
    SubscriptionSearchComparator["SA"] = "sa";
    SubscriptionSearchComparator["EB"] = "eb";
    SubscriptionSearchComparator["AP"] = "ap";
})(SubscriptionSearchComparator = exports.SubscriptionSearchComparator || (exports.SubscriptionSearchComparator = {}));
/**
 * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
 * Modifier applied to this filter parameter.
 * Must be a modifier allowed by the SubscriptionTopic relevant to this Subscription filter.
 */
var SubscriptionSearchModifierCode;
(function (SubscriptionSearchModifierCode) {
    SubscriptionSearchModifierCode["MISSING"] = "missing";
    SubscriptionSearchModifierCode["EXACT"] = "exact";
    SubscriptionSearchModifierCode["CONTAINS"] = "contains";
    SubscriptionSearchModifierCode["NOT"] = "not";
    SubscriptionSearchModifierCode["TEXT"] = "text";
    SubscriptionSearchModifierCode["IN"] = "in";
    SubscriptionSearchModifierCode["NOT_IN"] = "not-in";
    SubscriptionSearchModifierCode["BELOW"] = "below";
    SubscriptionSearchModifierCode["ABOVE"] = "above";
    SubscriptionSearchModifierCode["TYPE"] = "type";
    SubscriptionSearchModifierCode["IDENTIFIER"] = "identifier";
    SubscriptionSearchModifierCode["OF_TYPE"] = "of-type";
    SubscriptionSearchModifierCode["CODE_TEXT"] = "code-text";
    SubscriptionSearchModifierCode["TEXT_ADVANCED"] = "text-advanced";
    SubscriptionSearchModifierCode["ITERATE"] = "iterate";
})(SubscriptionSearchModifierCode = exports.SubscriptionSearchModifierCode || (exports.SubscriptionSearchModifierCode = {}));
/**
 * empty | id-only | full-resource
 * How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content.
 * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
 */
var SubscriptionPayloadContent;
(function (SubscriptionPayloadContent) {
    SubscriptionPayloadContent["EMPTY"] = "empty";
    SubscriptionPayloadContent["ID_ONLY"] = "id-only";
    SubscriptionPayloadContent["FULL_RESOURCE"] = "full-resource";
})(SubscriptionPayloadContent = exports.SubscriptionPayloadContent || (exports.SubscriptionPayloadContent = {}));
/**
 * requested | active | error | off | entered-in-error
 * The status of the subscription, which marks the server state for managing the subscription.
 */
var SubscriptionStatusSubscriptionStatus;
(function (SubscriptionStatusSubscriptionStatus) {
    SubscriptionStatusSubscriptionStatus["REQUESTED"] = "requested";
    SubscriptionStatusSubscriptionStatus["ACTIVE"] = "active";
    SubscriptionStatusSubscriptionStatus["ERROR"] = "error";
    SubscriptionStatusSubscriptionStatus["OFF"] = "off";
    SubscriptionStatusSubscriptionStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(SubscriptionStatusSubscriptionStatus = exports.SubscriptionStatusSubscriptionStatus || (exports.SubscriptionStatusSubscriptionStatus = {}));
/**
 * handshake | heartbeat | event-notification | query-status | query-event
 * The type of event being conveyed with this notification.
 */
var SubscriptionStatusSubscriptionNotificationType;
(function (SubscriptionStatusSubscriptionNotificationType) {
    SubscriptionStatusSubscriptionNotificationType["HANDSHAKE"] = "handshake";
    SubscriptionStatusSubscriptionNotificationType["HEARTBEAT"] = "heartbeat";
    SubscriptionStatusSubscriptionNotificationType["EVENT_NOTIFICATION"] = "event-notification";
    SubscriptionStatusSubscriptionNotificationType["QUERY_STATUS"] = "query-status";
    SubscriptionStatusSubscriptionNotificationType["QUERY_EVENT"] = "query-event";
})(SubscriptionStatusSubscriptionNotificationType = exports.SubscriptionStatusSubscriptionNotificationType || (exports.SubscriptionStatusSubscriptionNotificationType = {}));
/**
 * draft | active | retired | unknown
 * The current state of the SubscriptionTopic.
 * A nominal state-transition diagram can be found in the [Definition pattern](definition.html#statemachine) documentation

Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var SubscriptionTopicPublicationStatus;
(function (SubscriptionTopicPublicationStatus) {
    SubscriptionTopicPublicationStatus["DRAFT"] = "draft";
    SubscriptionTopicPublicationStatus["ACTIVE"] = "active";
    SubscriptionTopicPublicationStatus["RETIRED"] = "retired";
    SubscriptionTopicPublicationStatus["UNKNOWN"] = "unknown";
})(SubscriptionTopicPublicationStatus = exports.SubscriptionTopicPublicationStatus || (exports.SubscriptionTopicPublicationStatus = {}));
/**
 * create | update | delete
 * The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE). If not present, all supported interactions are assumed.
 */
var SubscriptionTopicMethodCode;
(function (SubscriptionTopicMethodCode) {
    SubscriptionTopicMethodCode["CREATE"] = "create";
    SubscriptionTopicMethodCode["UPDATE"] = "update";
    SubscriptionTopicMethodCode["DELETE"] = "delete";
})(SubscriptionTopicMethodCode = exports.SubscriptionTopicMethodCode || (exports.SubscriptionTopicMethodCode = {}));
/**
 * test-passes | test-fails
 * For `create` interactions, should the `previous` criteria count as an automatic pass or an automatic fail. If not present, the testing behavior during `create` interactions is unspecified (server discretion).
 */
var SubscriptionTopicCriteriaNotExistsBehavior;
(function (SubscriptionTopicCriteriaNotExistsBehavior) {
    SubscriptionTopicCriteriaNotExistsBehavior["TEST_PASSES"] = "test-passes";
    SubscriptionTopicCriteriaNotExistsBehavior["TEST_FAILS"] = "test-fails";
})(SubscriptionTopicCriteriaNotExistsBehavior = exports.SubscriptionTopicCriteriaNotExistsBehavior || (exports.SubscriptionTopicCriteriaNotExistsBehavior = {}));
/**
 * eq | ne | gt | lt | ge | le | sa | eb | ap
 * Comparators allowed for the filter parameter.
 * If no comparators are listed, clients should not expect servers to support any comparators.
 */
var SubscriptionTopicSearchComparator;
(function (SubscriptionTopicSearchComparator) {
    SubscriptionTopicSearchComparator["EQ"] = "eq";
    SubscriptionTopicSearchComparator["NE"] = "ne";
    SubscriptionTopicSearchComparator["GT"] = "gt";
    SubscriptionTopicSearchComparator["LT"] = "lt";
    SubscriptionTopicSearchComparator["GE"] = "ge";
    SubscriptionTopicSearchComparator["LE"] = "le";
    SubscriptionTopicSearchComparator["SA"] = "sa";
    SubscriptionTopicSearchComparator["EB"] = "eb";
    SubscriptionTopicSearchComparator["AP"] = "ap";
})(SubscriptionTopicSearchComparator = exports.SubscriptionTopicSearchComparator || (exports.SubscriptionTopicSearchComparator = {}));
/**
 * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
 * Modifiers allowed for the filter parameter.
 * If no modifiers are listed, clients should not expect servers to support any modifiers.
 */
var SubscriptionTopicSearchModifierCode;
(function (SubscriptionTopicSearchModifierCode) {
    SubscriptionTopicSearchModifierCode["MISSING"] = "missing";
    SubscriptionTopicSearchModifierCode["EXACT"] = "exact";
    SubscriptionTopicSearchModifierCode["CONTAINS"] = "contains";
    SubscriptionTopicSearchModifierCode["NOT"] = "not";
    SubscriptionTopicSearchModifierCode["TEXT"] = "text";
    SubscriptionTopicSearchModifierCode["IN"] = "in";
    SubscriptionTopicSearchModifierCode["NOT_IN"] = "not-in";
    SubscriptionTopicSearchModifierCode["BELOW"] = "below";
    SubscriptionTopicSearchModifierCode["ABOVE"] = "above";
    SubscriptionTopicSearchModifierCode["TYPE"] = "type";
    SubscriptionTopicSearchModifierCode["IDENTIFIER"] = "identifier";
    SubscriptionTopicSearchModifierCode["OF_TYPE"] = "of-type";
    SubscriptionTopicSearchModifierCode["CODE_TEXT"] = "code-text";
    SubscriptionTopicSearchModifierCode["TEXT_ADVANCED"] = "text-advanced";
    SubscriptionTopicSearchModifierCode["ITERATE"] = "iterate";
})(SubscriptionTopicSearchModifierCode = exports.SubscriptionTopicSearchModifierCode || (exports.SubscriptionTopicSearchModifierCode = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * not-present | example | fragment | complete | supplement
 * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
 */
var TerminologyCapabilitiesCodeSystemContentMode;
(function (TerminologyCapabilitiesCodeSystemContentMode) {
    TerminologyCapabilitiesCodeSystemContentMode["NOT_PRESENT"] = "not-present";
    TerminologyCapabilitiesCodeSystemContentMode["EXAMPLE"] = "example";
    TerminologyCapabilitiesCodeSystemContentMode["FRAGMENT"] = "fragment";
    TerminologyCapabilitiesCodeSystemContentMode["COMPLETE"] = "complete";
    TerminologyCapabilitiesCodeSystemContentMode["SUPPLEMENT"] = "supplement";
})(TerminologyCapabilitiesCodeSystemContentMode = exports.TerminologyCapabilitiesCodeSystemContentMode || (exports.TerminologyCapabilitiesCodeSystemContentMode = {}));
/**
 * in-compose | in-expansion | in-compose-or-expansion
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 * See notes on the [ValueSet](valueset.html#) resource.
 */
var TerminologyCapabilitiesCodeSearchSupport;
(function (TerminologyCapabilitiesCodeSearchSupport) {
    TerminologyCapabilitiesCodeSearchSupport["IN_COMPOSE"] = "in-compose";
    TerminologyCapabilitiesCodeSearchSupport["IN_EXPANSION"] = "in-expansion";
    TerminologyCapabilitiesCodeSearchSupport["IN_COMPOSE_OR_EXPANSION"] = "in-compose-or-expansion";
})(TerminologyCapabilitiesCodeSearchSupport = exports.TerminologyCapabilitiesCodeSearchSupport || (exports.TerminologyCapabilitiesCodeSearchSupport = {}));
/**
 * draft | active | retired | unknown
 * The status of this test plan. Enables tracking the life-cycle of the content.
 * Allows filtering of test plans that are appropriate for use versus not.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var TestPlanPublicationStatus;
(function (TestPlanPublicationStatus) {
    TestPlanPublicationStatus["DRAFT"] = "draft";
    TestPlanPublicationStatus["ACTIVE"] = "active";
    TestPlanPublicationStatus["RETIRED"] = "retired";
    TestPlanPublicationStatus["UNKNOWN"] = "unknown";
})(TestPlanPublicationStatus = exports.TestPlanPublicationStatus || (exports.TestPlanPublicationStatus = {}));
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

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
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
 * fail | pass | skip | stop
 * The default manual completion outcome applied to this assertion.
 * Manual completion is used to pause the test engine execution and evaluation allowing an external review of the defined assert condition. The defaultManualCompletion defines the default manual completion outcome applied if one of the enumerated values is not applied.
 */
var TestScriptAssertionManualCompletionType;
(function (TestScriptAssertionManualCompletionType) {
    TestScriptAssertionManualCompletionType["FAIL"] = "fail";
    TestScriptAssertionManualCompletionType["PASS"] = "pass";
    TestScriptAssertionManualCompletionType["SKIP"] = "skip";
    TestScriptAssertionManualCompletionType["STOP"] = "stop";
})(TestScriptAssertionManualCompletionType = exports.TestScriptAssertionManualCompletionType || (exports.TestScriptAssertionManualCompletionType = {}));
/**
 * equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval | manualEval
 * The operator type defines the conditional behavior of the assert.
 * Operators are useful for both positive and negative testing. If operator is not specified, then the default conditional behavior is implemented as defined in [Testing FHIR Assertions](testing.html#assertion-table).
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
    TestScriptAssertionOperatorType["MANUALEVAL"] = "manualEval";
})(TestScriptAssertionOperatorType = exports.TestScriptAssertionOperatorType || (exports.TestScriptAssertionOperatorType = {}));
/**
 * continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported
 * continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported.
 * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. <assert>  <contentType value="json" />  <response value="okay"/> </assert>.
 */
var TestScriptAssertionResponseTypes;
(function (TestScriptAssertionResponseTypes) {
    TestScriptAssertionResponseTypes["CONTINUE"] = "continue";
    TestScriptAssertionResponseTypes["SWITCHINGPROTOCOLS"] = "switchingProtocols";
    TestScriptAssertionResponseTypes["OKAY"] = "okay";
    TestScriptAssertionResponseTypes["CREATED"] = "created";
    TestScriptAssertionResponseTypes["ACCEPTED"] = "accepted";
    TestScriptAssertionResponseTypes["NONAUTHORITATIVEINFORMATION"] = "nonAuthoritativeInformation";
    TestScriptAssertionResponseTypes["NOCONTENT"] = "noContent";
    TestScriptAssertionResponseTypes["RESETCONTENT"] = "resetContent";
    TestScriptAssertionResponseTypes["PARTIALCONTENT"] = "partialContent";
    TestScriptAssertionResponseTypes["MULTIPLECHOICES"] = "multipleChoices";
    TestScriptAssertionResponseTypes["MOVEDPERMANENTLY"] = "movedPermanently";
    TestScriptAssertionResponseTypes["FOUND"] = "found";
    TestScriptAssertionResponseTypes["SEEOTHER"] = "seeOther";
    TestScriptAssertionResponseTypes["NOTMODIFIED"] = "notModified";
    TestScriptAssertionResponseTypes["USEPROXY"] = "useProxy";
    TestScriptAssertionResponseTypes["TEMPORARYREDIRECT"] = "temporaryRedirect";
    TestScriptAssertionResponseTypes["PERMANENTREDIRECT"] = "permanentRedirect";
    TestScriptAssertionResponseTypes["BADREQUEST"] = "badRequest";
    TestScriptAssertionResponseTypes["UNAUTHORIZED"] = "unauthorized";
    TestScriptAssertionResponseTypes["PAYMENTREQUIRED"] = "paymentRequired";
    TestScriptAssertionResponseTypes["FORBIDDEN"] = "forbidden";
    TestScriptAssertionResponseTypes["NOTFOUND"] = "notFound";
    TestScriptAssertionResponseTypes["METHODNOTALLOWED"] = "methodNotAllowed";
    TestScriptAssertionResponseTypes["NOTACCEPTABLE"] = "notAcceptable";
    TestScriptAssertionResponseTypes["PROXYAUTHENTICATIONREQUIRED"] = "proxyAuthenticationRequired";
    TestScriptAssertionResponseTypes["REQUESTTIMEOUT"] = "requestTimeout";
    TestScriptAssertionResponseTypes["CONFLICT"] = "conflict";
    TestScriptAssertionResponseTypes["GONE"] = "gone";
    TestScriptAssertionResponseTypes["LENGTHREQUIRED"] = "lengthRequired";
    TestScriptAssertionResponseTypes["PRECONDITIONFAILED"] = "preconditionFailed";
    TestScriptAssertionResponseTypes["CONTENTTOOLARGE"] = "contentTooLarge";
    TestScriptAssertionResponseTypes["URITOOLONG"] = "uriTooLong";
    TestScriptAssertionResponseTypes["UNSUPPORTEDMEDIATYPE"] = "unsupportedMediaType";
    TestScriptAssertionResponseTypes["RANGENOTSATISFIABLE"] = "rangeNotSatisfiable";
    TestScriptAssertionResponseTypes["EXPECTATIONFAILED"] = "expectationFailed";
    TestScriptAssertionResponseTypes["MISDIRECTEDREQUEST"] = "misdirectedRequest";
    TestScriptAssertionResponseTypes["UNPROCESSABLECONTENT"] = "unprocessableContent";
    TestScriptAssertionResponseTypes["UPGRADEREQUIRED"] = "upgradeRequired";
    TestScriptAssertionResponseTypes["INTERNALSERVERERROR"] = "internalServerError";
    TestScriptAssertionResponseTypes["NOTIMPLEMENTED"] = "notImplemented";
    TestScriptAssertionResponseTypes["BADGATEWAY"] = "badGateway";
    TestScriptAssertionResponseTypes["SERVICEUNAVAILABLE"] = "serviceUnavailable";
    TestScriptAssertionResponseTypes["GATEWAYTIMEOUT"] = "gatewayTimeout";
    TestScriptAssertionResponseTypes["HTTPVERSIONNOTSUPPORTED"] = "httpVersionNotSupported";
})(TestScriptAssertionResponseTypes = exports.TestScriptAssertionResponseTypes || (exports.TestScriptAssertionResponseTypes = {}));
/**
 * in-progress | completed | abandoned | cancelled | planned | entered-in-error
 * A code specifying the state of the transport event.
 */
var TransportStatus;
(function (TransportStatus) {
    TransportStatus["IN_PROGRESS"] = "in-progress";
    TransportStatus["COMPLETED"] = "completed";
    TransportStatus["ABANDONED"] = "abandoned";
    TransportStatus["CANCELLED"] = "cancelled";
    TransportStatus["PLANNED"] = "planned";
    TransportStatus["ENTERED_IN_ERROR"] = "entered-in-error";
})(TransportStatus = exports.TransportStatus || (exports.TransportStatus = {}));
/**
 * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
 * Indicates the "level" of actionability associated with the Transport, i.e. i+R[9]Cs this a proposed transport, a planned transport, an actionable transport, etc.
 * This element is immutable.  Proposed transports, planned transports, etc. must be distinct instances.

In most cases, Transports will have an intent of "order".
 */
var TransportIntent;
(function (TransportIntent) {
    TransportIntent["UNKNOWN"] = "unknown";
    TransportIntent["PROPOSAL"] = "proposal";
    TransportIntent["PLAN"] = "plan";
    TransportIntent["ORDER"] = "order";
    TransportIntent["ORIGINAL_ORDER"] = "original-order";
    TransportIntent["REFLEX_ORDER"] = "reflex-order";
    TransportIntent["FILLER_ORDER"] = "filler-order";
    TransportIntent["INSTANCE_ORDER"] = "instance-order";
    TransportIntent["OPTION"] = "option";
})(TransportIntent = exports.TransportIntent || (exports.TransportIntent = {}));
/**
 * routine | urgent | asap | stat
 * Indicates how quickly the Transport should be addressed with respect to other requests.
 */
var TransportPriority;
(function (TransportPriority) {
    TransportPriority["ROUTINE"] = "routine";
    TransportPriority["URGENT"] = "urgent";
    TransportPriority["ASAP"] = "asap";
    TransportPriority["STAT"] = "stat";
})(TransportPriority = exports.TransportPriority || (exports.TransportPriority = {}));
/**
 * draft | active | retired | unknown
 * The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state.
 * Allows filtering of value sets that are appropriate for use versus not.See also the [http://hl7.org/fhir/StructureDefinition/valueset-workflowStatusDescription](http://hl7.org/fhir/extensions/StructureDefinition-valueset-workflowStatusDescription.html) extension for additional status information related to the editorial process.

See guidance around (not) making local changes to elements [here](canonicalresource.html#localization).
 */
var ValueSetPublicationStatus;
(function (ValueSetPublicationStatus) {
    ValueSetPublicationStatus["DRAFT"] = "draft";
    ValueSetPublicationStatus["ACTIVE"] = "active";
    ValueSetPublicationStatus["RETIRED"] = "retired";
    ValueSetPublicationStatus["UNKNOWN"] = "unknown";
})(ValueSetPublicationStatus = exports.ValueSetPublicationStatus || (exports.ValueSetPublicationStatus = {}));
/**
 * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists
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
    ValueSetFilterOperator["CHILD_OF"] = "child-of";
    ValueSetFilterOperator["DESCENDENT_LEAF"] = "descendent-leaf";
    ValueSetFilterOperator["EXISTS"] = "exists";
})(ValueSetFilterOperator = exports.ValueSetFilterOperator || (exports.ValueSetFilterOperator = {}));
/**
 * attested | validated | in-process | req-revalid | val-fail | reval-fail | entered-in-error
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
    VerificationResultstatus["ENTERED_IN_ERROR"] = "entered-in-error";
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
 * May also appear on the paper claim form or in the Medical Records as as OD (oculus dexter) for the right eye and OS (oculus sinister) for the left eye.
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
 * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
 * amended | appended | cancelled | disputed | entered-in-error | executable +.
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
 * group | display | question | boolean | decimal | integer | date | dateTime | time | string | text | url | coding | attachment | reference | quantity
 * The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, Coding, etc.).
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
    QuestionnaireItemType["CODING"] = "coding";
    QuestionnaireItemType["ATTACHMENT"] = "attachment";
    QuestionnaireItemType["REFERENCE"] = "reference";
    QuestionnaireItemType["QUANTITY"] = "quantity";
})(QuestionnaireItemType = exports.QuestionnaireItemType || (exports.QuestionnaireItemType = {}));
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
 * active | completed | not-done | entered-in-error | intended | stopped | on-hold
 * A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
 * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).

This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
 */
var DeviceUsageStatus;
(function (DeviceUsageStatus) {
    DeviceUsageStatus["ACTIVE"] = "active";
    DeviceUsageStatus["COMPLETED"] = "completed";
    DeviceUsageStatus["NOT_DONE"] = "not-done";
    DeviceUsageStatus["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceUsageStatus["INTENDED"] = "intended";
    DeviceUsageStatus["STOPPED"] = "stopped";
    DeviceUsageStatus["ON_HOLD"] = "on-hold";
})(DeviceUsageStatus = exports.DeviceUsageStatus || (exports.DeviceUsageStatus = {}));
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
