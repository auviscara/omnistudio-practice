export const OMNIDEF = {"userTimeZone":-480,"userProfile":"System Administrator","userName":"oms435tso@salesforce.com","userId":"0055i000004OYI8AAW","userCurrencyCode":"USD","timeStamp":"2022-01-26T17:07:06.897Z","sOmniScriptId":"0jN5i000000gXt3EAE","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"currentLanguage":"en_US","wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":true,"stylesheet":{"newport":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"16abd64e-3c01-48ad-ccaf-cbaacd7afead","labelMap":{"ChangeContactId":"StepContacts:BlkChangePriContact:TAChangeContact-Block:ChangeContactId","ChangeContactLastName":"StepContacts:BlkChangePriContact:TAChangeContact-Block:ChangeContactLastName","ChangeContactFirstName":"StepContacts:BlkChangePriContact:TAChangeContact-Block:ChangeContactFirstName","ChangeContactEmail":"StepContacts:BlkChangePriContact:TAChangeContact-Block:ChangeContactEmail","DRChangeContactTA":"DRChangeContactTA","UpdateContactId":"StepContacts:BlkUpdatePriContact:UpdateContactId","UpdateEmail":"StepContacts:BlkUpdatePriContact:UpdateEmail","UpdateLastName":"StepContacts:BlkUpdatePriContact:UpdateLastName","UpdateFirstName":"StepContacts:BlkUpdatePriContact:UpdateFirstName","CreateEmail":"StepContacts:BlkCreatePriContact:CreateEmail","CreateLastName":"StepContacts:BlkCreatePriContact:CreateLastName","CreateFirstName":"StepContacts:BlkCreatePriContact:CreateFirstName","TAChangeContact-Block":"StepContacts:BlkChangePriContact:TAChangeContact-Block","RadioPriContact":"StepRadio:RadioPriContact","WeatherCard":"StepRadio:WeatherCard","MsgWeatherAlert":"StepRadio:MsgWeatherAlert","BlkCreatePriContact":"StepContacts:BlkCreatePriContact","BlkChangePriContact":"StepContacts:BlkChangePriContact","BlkUpdatePriContact":"StepContacts:BlkUpdatePriContact","NavigateAction1":"NavigateAction1","IPSavePriContactDetails":"IPSavePriContactDetails","SetErrors":"SetErrors","SVErrorCheck":"SVErrorCheck","StepContacts":"StepContacts","StepRadio":"StepRadio","IPGetWeatherForecast":"IPGetWeatherForecast","IPGetAccountPriContactDetails":"IPGetAccountPriContactDetails","TAChangeContact":"StepContacts:BlkChangePriContact:TAChangeContact-Block:TAChangeContact"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"sendOnlyExtraPayload":true,"wpm":false,"validationRequired":"None","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"IPGetAccountPriContactDetails","integrationProcedureKey":"sample_getPrimaryContactDetails","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"AccountId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"IPGetAccountPriContactDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPGetAccountPriContactDetails","lwcId":"lwc0"},{"type":"Integration Procedure Action","propSetMap":{"sendOnlyExtraPayload":true,"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"AccountId":"%ContextId%","Days":5},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"sample_getWeatherForecast","label":"IPGetWeatherForecast","controlWidth":12,"aggElements":{}},"offSet":0,"name":"IPGetWeatherForecast","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPGetWeatherForecast","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[null,null],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":"0","nextLabel":"Next","message":{},"label":"Update Account Primary Contact","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"<p><span style=\"font-weight: 400;\">Update the contact information for the existing Primary Contact, change the Primary Contact and update their contact information, or create a new contact and make them the Primary Contact of <strong>%AccountName%</strong>. </span></p>","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"Select Option","cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"StepRadio":"","RadioPriContact":""},"aggElements":{"WeatherCard":""}},"offSet":0,"name":"StepRadio","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Validation","rootIndex":2,"response":null,"propSetMap":{"HTMLTemplateId":"","show":{"group":{"rules":[{"field":"Current:Condition","condition":"=","data":"Heavy Snow"}],"operator":"AND"}},"hideLabel":true,"messages":[{"active":true,"text":"Weather Alert: %Current:Condition%","type":"Warning","value":true},{"active":false,"text":"","type":"Requirement","value":false}],"validateExpression":null,"label":"Messaging1","controlWidth":12},"name":"MsgWeatherAlert","level":1,"JSONPath":"StepRadio:MsgWeatherAlert","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"customAttributes":[{"source":"%ContextId%","name":"record-id"}],"bStandalone":false,"lwcName":"cfSampleWeather","hide":false,"conditionType":"Hide if False","show":null,"label":"CustomLWC1","controlWidth":12},"name":"WeatherCard","level":1,"JSONPath":"StepRadio:WeatherCard","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Radio","rootIndex":2,"response":null,"propSetMap":{"disOnTplt":false,"enableCaption":true,"imageCountInRow":3,"optionHeight":100,"optionWidth":100,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"source":"","type":"","element":""},"optionSource":{"source":"","type":""},"options":[{"autoAdv":"next","value":"Update primary contact","developerName":null,"name":"Update"},{"autoAdv":"next","value":"Change primary contact","developerName":null,"name":"Change"},{"autoAdv":"next","value":"Create a new primary contact","developerName":null,"name":"Create"}],"helpTextPos":"","helpText":"Select the radio button that reflects what you wish to do: Update, Change, or Create new.","help":true,"defaultValue":null,"horizontalMode":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"label":"What do you want to do?","controlWidth":12},"name":"RadioPriContact","level":1,"JSONPath":"StepRadio:RadioPriContact","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc22-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"StepRadio","lwcId":"lwc2"},{"type":"Step","propSetMap":{"businessEvent":"","businessCategory":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"chartLabel":"Make Changes","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[true,false],"instruction":"<p><span style=\"font-weight: 400;\">Update the contact information for the existing Primary Contact, change the Primary Contact and update their contact information, or create a new contact and make them the Primary Contact of <strong>%AccountName%</strong>.</span></p>","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"label":"Update Account Primary Contact","uiElements":{"StepContacts":"","UpdateFirstName":"","UpdateLastName":"","UpdateEmail":"","UpdateContactId":"","BlkUpdatePriContact":"","TAChangeContact":"","ChangeContactEmail":"","ChangeContactFirstName":"","ChangeContactLastName":"","ChangeContactId":"","TAChangeContact-Block":"","BlkChangePriContact":"","CreateFirstName":"","CreateLastName":"","CreateEmail":"","BlkCreatePriContact":""},"aggElements":{}},"offSet":0,"name":"StepContacts","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":3,"response":null,"propSetMap":{"bus":true,"show":{"group":{"rules":[{"field":"RadioPriContact","condition":"=","data":"Update"}],"operator":"AND"}},"repeatLimit":null,"repeatClone":false,"repeat":false,"label":null,"hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"BlkUpdatePriContact","level":1,"JSONPath":"StepContacts:BlkUpdatePriContact","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Primary Contact First Name","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":5,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"UpdateFirstName","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateFirstName","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc3000-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","controlWidth":7,"debounceValue":0,"disOnTplt":false,"help":false,"helpText":"","hide":false,"inputWidth":12,"label":"Primary Contact Last Name","mask":"","maxLength":255,"minLength":0,"pattern":"","ptrnErrText":"","readOnly":false,"repeat":false,"repeatClone":false,"required":false,"show":null,"showInputWidth":false},"name":"UpdateLastName","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateLastName","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc3001-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Email","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":{"group":{"rules":[{"field":"UpdateFirstName","condition":"<>","data":null},{"data":null,"condition":"<>","field":"UpdateLastName"}],"operator":"AND"}},"required":true,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","label":"Primary Contact Email","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"UpdateEmail","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateEmail","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc3002-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":3,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Text2","inputWidth":12,"hide":true,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"UpdateContactId","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateContactId","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc3003-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc30-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Block","rootIndex":3,"response":null,"propSetMap":{"bus":true,"show":{"group":{"rules":[{"field":"RadioPriContact","condition":"=","data":"Change"}],"operator":"AND"}},"repeatLimit":null,"repeatClone":false,"repeat":false,"label":null,"hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"BlkChangePriContact","level":1,"JSONPath":"StepContacts:BlkChangePriContact","indexInParent":1,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Type Ahead Block","rootIndex":3,"response":null,"propSetMap":{"HTMLTemplateId":"","dataJsonPath":"","useDataJson":false,"googleAddressCountry":"all","hideMap":true,"googleMapsAPIKey":"","disableDataFilter":false,"enableLookup":false,"enableGoogleMapsAutocomplete":false,"hideEditButton":true,"newItemLabel":"","editMode":true,"callFrequency":300,"dataProcessorFunction":"","typeAheadKey":"ChangeContactNameKey","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"helpTextPos":"","helpText":"","help":false,"readOnly":false,"required":true,"googleTransformation":{"postal_code":"","country":"","administrative_area_level_2":"","administrative_area_level_1":"","locality":"","street":""},"inputWidth":12,"showInputWidth":false,"label":"Start typing a contact name","controlWidth":12},"name":"TAChangeContact-Block","level":2,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block","indexInParent":0,"index":0,"children":[{"response":null,"level":3,"indexInParent":0,"eleArray":[{"type":"Type Ahead","rootIndex":0,"response":null,"propSetMap":{"taAction":{"type":"DataRaptor Extract Action","rootIndex":3,"response":null,"propSetMap":{"_di":1,"repeat":false,"readOnly":false,"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","responseJSONNode":"","responseJSONPath":"","remoteTimeout":30000,"dataRaptor Input Parameters":[{"inputParam":"AccountId","element":"ContextId"},{"inputParam":"LookupKey","element":"TAChangeContact"}],"ignoreCache":false,"bundle":"teamChangePriContactTAData","label":"DRChangeContactTA","controlWidth":12},"name":"DRChangeContactTA","level":3,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block:TAChangeContact","indexInParent":0,"index":0,"children":[],"bHasAttachment":false},"HTMLTemplateId":"","dataJsonPath":"","useDataJson":false,"googleAddressCountry":"all","hideMap":true,"googleMapsAPIKey":"","disableDataFilter":false,"enableLookup":false,"enableGoogleMapsAutocomplete":false,"hideEditButton":true,"newItemLabel":"","editMode":true,"callFrequency":300,"dataProcessorFunction":"","typeAheadKey":"ChangeContactNameKey","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"helpTextPos":"","helpText":"","help":false,"readOnly":false,"required":true,"googleTransformation":{"postal_code":"","country":"","administrative_area_level_2":"","administrative_area_level_1":"","locality":"","street":""},"inputWidth":12,"showInputWidth":false,"label":"Start typing a contact name","controlWidth":12},"name":"TAChangeContact","level":3,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block:TAChangeContact","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTypeahead":true,"lwcId":"lwc310000-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":1,"eleArray":[{"type":"Email","rootIndex":3,"response":null,"propSetMap":{"_di":2,"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","ptrnErrText":"","pattern":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Contact Email","controlWidth":12},"name":"ChangeContactEmail","level":3,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block|1:ChangeContactEmail","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc310001-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"_di":3,"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Contact First Name","controlWidth":6},"name":"ChangeContactFirstName","level":3,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block|1:ChangeContactFirstName","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc310002-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":3,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"_di":4,"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Contact Last Name","controlWidth":6},"name":"ChangeContactLastName","level":3,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block|1:ChangeContactLastName","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc310003-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":4,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"_di":5,"autocomplete":null,"disOnTplt":false,"hide":true,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"label":"Text3","controlWidth":12},"name":"ChangeContactId","level":3,"JSONPath":"StepContacts:BlkChangePriContact|1:TAChangeContact-Block|1:ChangeContactId","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc310004-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bTypeaheadBlock":true,"lwcId":"lwc3100-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc31-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Block","rootIndex":3,"response":null,"propSetMap":{"bus":true,"show":{"group":{"rules":[{"field":"RadioPriContact","condition":"=","data":"Create"}],"operator":"AND"}},"repeatLimit":null,"repeatClone":false,"repeat":false,"label":null,"hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"BlkCreatePriContact","level":1,"JSONPath":"StepContacts:BlkCreatePriContact","indexInParent":2,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"New Contact First Name","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"CreateFirstName","level":2,"JSONPath":"StepContacts:BlkCreatePriContact|1:CreateFirstName","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc3200-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"New Contact Last Name","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"CreateLastName","level":2,"JSONPath":"StepContacts:BlkCreatePriContact|1:CreateLastName","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc3201-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Email","rootIndex":3,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","label":"New Contact Email","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"CreateEmail","level":2,"JSONPath":"StepContacts:BlkCreatePriContact|1:CreateEmail","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc3202-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc32-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"StepContacts","lwcId":"lwc3"},{"type":"Set Values","propSetMap":{"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"elementValueMap":{"SVErrorCheck":"=IF(%UpdateLastName%=null&&%TAChangeContact%=null&&%CreateLastName%=null, \"NotOK\", \"OK\")"},"label":"SetValues1","controlWidth":12,"aggElements":{}},"offSet":0,"name":"SVErrorCheck","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVErrorCheck","lwcId":"lwc4"},{"type":"Set Errors","propSetMap":{"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":{"group":{"rules":[{"field":"SVErrorCheck","condition":"=","data":"NotOK"}],"operator":"AND"}},"showPersistentComponent":[true,false],"elementErrorMap":{"RadioPriContact":"Please change or create a new primary contact!"},"validationRequired":"Step","label":"SetErrors1","controlWidth":12,"aggElements":{}},"offSet":0,"name":"SetErrors","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bSetErrors":true,"JSONPath":"SetErrors","lwcId":"lwc5"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"None","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"StepContacts","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"IPSavePriContactDetails","integrationProcedureKey":"sample_savePrimaryContactDetails","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"RadioPriContact":"%RadioPriContact%","AccountId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"IPSavePriContactDetails","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPSavePriContactDetails","lwcId":"lwc6"},{"type":"Navigate Action","propSetMap":{"variantOptions":["brand","outline-brand","neutral","success","destructive","text-destructive","inverse","link"],"variant":"brand","validationRequired":null,"targetTypeOptions":["Component","Current Page","Knowledge Article","Named Page","Navigation Item","Object","Record","Record Relationship","Web Page","Vlocity OmniScript"],"targetType":"Record","targetName":"Account","targetLWCLayoutOptions":["lightning","newport"],"targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","show":null,"replaceOptions":[{"value":false,"label":"No"},{"value":true,"label":"Yes"}],"replace":true,"recordActionOptions":["clone","edit","view"],"recordAction":"view","pubsub":true,"objectActionOptions":["home","list","new"],"objectAction":"home","message":{},"label":"NavigateAction1","iconVariant":"","iconPositionOptions":["left","right"],"iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateAction1","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateAction1","lwcId":"lwc7"}],"bReusable":false,"bpVersion":2,"bpType":"sample","bpSubType":"updateAccountPrimaryContact","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"ContextId":null}};