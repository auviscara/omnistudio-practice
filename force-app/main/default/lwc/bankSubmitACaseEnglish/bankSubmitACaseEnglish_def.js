export const OMNIDEF = {"userTimeZone":480,"userProfile":"System Administrator","userName":"aviscara.omni@mail-test.xena.dev","userId":"0055i000004OYI8AAO","userCurrencyCode":"PHP","timeStamp":"2022-09-13T04:13:21.947Z","sOmniScriptId":"0jN5i000000gm0mEAA","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"currentLanguage":"en_US","scrollBehavior":"auto","disableUnloadWarn":true,"stepChartPlacement":"top","stylesheet":{"lightningRtl":"","newportRtl":"","lightning":"","newport":""},"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"mergeSavedData":false,"hideStepChart":false,"timeTracking":false,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":false,"persistentComponent":[{"modalConfigurationSetting":{"modalSize":"lg","modalController":"ModalProductCtrl","modalHTMLTemplateId":"vlcProductConfig.html"},"itemsKey":"cartItems","id":"vlcCart","responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false},{"modalConfigurationSetting":{"modalSize":"lg","modalController":"","modalHTMLTemplateId":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","dispOutsideOmni":false,"render":false}]},"prefillJSON":"{}","lwcId":"1596f4ac-8dac-eaf8-cb92-c975bcb0a15b","labelMap":{"LineBreak3":"Confirmation:LineBreak3","LineBreak5":"Confirmation:LineBreak5","LineBreak4":"Confirmation:LineBreak4","LineBreak2":"Confirmation:LineBreak2","InitialAccountId":"FilloutRequiredDetails:InitialAccountId","InitialDescription":"FilloutRequiredDetails:InitialDescription","InitialSummary":"FilloutRequiredDetails:InitialSummary","AccountNumber":"FilloutRequiredDetails:AccountNumber","LineBreak1":"FilloutRequiredDetails:LineBreak1","Phone":"FilloutRequiredDetails:Phone","Email":"FilloutRequiredDetails:Email","Name":"FilloutRequiredDetails:Name","SubmitAnotherIssue":"SubmitAnotherIssue","Confirmation":"Confirmation","CreateACase":"CreateACase","FormatAccountId":"FormatAccountId","GetBankAccountId":"GetBankAccountId","FormatSummaryAndDescription":"FormatSummaryAndDescription","FormatAccountNumber":"FormatAccountNumber","FilloutRequiredDetails":"FilloutRequiredDetails","SetPrimaryContactAndAccount":"SetPrimaryContactAndAccount","RetrieveUserDetails":"RetrieveUserDetails"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","responseJSONNode":"","responseJSONPath":"","remoteTimeout":30000,"dataRaptor Input Parameters":[{"inputParam":"UserId","element":"ContextId"}],"ignoreCache":false,"bundle":"bankRetrieveUserDetails","label":"RetrieveUserDetails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"RetrieveUserDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"RetrieveUserDetails","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"elementValueMap":{"InitialAccountId":"=%AccountId%"},"label":"SetPrimaryContactAndAccount","controlWidth":12,"aggElements":{}},"offSet":0,"name":"SetPrimaryContactAndAccount","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetPrimaryContactAndAccount","lwcId":"lwc1"},{"type":"Step","propSetMap":{"businessEvent":"","businessCategory":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"chartLabel":"Contact us","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[true,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"label":"Issues? Please fill out the form below","uiElements":{"FilloutRequiredDetails":"","Name":"","Email":"","Phone":"","AccountNumber":"","InitialSummary":"","InitialDescription":"","InitialAccountId":""},"aggElements":{}},"offSet":0,"name":"FilloutRequiredDetails","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"label":"Name","controlWidth":12},"name":"Name","level":1,"JSONPath":"FilloutRequiredDetails:Name","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Email","rootIndex":2,"response":null,"propSetMap":{"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","ptrnErrText":"","pattern":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Email","controlWidth":6},"name":"Email","level":1,"JSONPath":"FilloutRequiredDetails:Email","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Telephone","rootIndex":2,"response":null,"propSetMap":{"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"(999) 999-9999","helpTextPos":"","helpText":"","help":false,"defaultValue":"","readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Phone","controlWidth":6},"name":"Phone","level":1,"JSONPath":"FilloutRequiredDetails:Phone","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bTelephone":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"HTMLTemplateId":"","show":null,"padding":0,"label":"LineBreak1"},"name":"LineBreak1","level":1,"JSONPath":"FilloutRequiredDetails:LineBreak1","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc23-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Select","rootIndex":2,"response":null,"propSetMap":{"dependency":{"0035i00000D0BGeAAN":[{"value":"A000000000003","name":"A000000000003"}],"0035i00000D0ChTAAV":[{"value":"A000000000005","name":"A000000000005"}],"0035i00000D0IpiAAF":[{"value":"A000000000009","name":"A000000000009"}],"0035i00000D0AcPAAV":[{"value":"C0000000003","name":"C0000000003"},{"value":"A000000000001","name":"A000000000001"}]},"disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"source":"AccountNumberPicklistController.PopulateAccountPicklist","type":"Custom","element":"PrimaryContact"},"optionSource":{"source":"AccountNumberPicklistController.PopulateAccountPicklist","type":"Custom"},"options":[],"helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"label":"Account Number (Select if account-related)","controlWidth":12},"name":"AccountNumber","level":1,"JSONPath":"FilloutRequiredDetails:AccountNumber","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc24-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"Tell us about the issue","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Summary","controlWidth":12},"name":"InitialSummary","level":1,"JSONPath":"FilloutRequiredDetails:InitialSummary","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc25-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Text Area","rootIndex":2,"response":null,"propSetMap":{"autocomplete":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"Include additional details here such as date and","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","helpTextPos":"","helpText":"","help":false,"defaultValue":"","readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"label":"Description","controlWidth":12},"name":"InitialDescription","level":1,"JSONPath":"FilloutRequiredDetails:InitialDescription","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bTextarea":true,"lwcId":"lwc26-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"autocomplete":null,"disOnTplt":false,"hide":true,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"placeholder":"","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpTextPos":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"label":"","controlWidth":12},"name":"InitialAccountId","level":1,"JSONPath":"FilloutRequiredDetails:InitialAccountId","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc27-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"FilloutRequiredDetails","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"elementValueMap":{"FormattedAcctNumber":"=IF(%AccountNumber% <> NULL,CONCATENATE(CONCATENATE(\"(Account number : \", %AccountNumber%),\")\"), \"\")"},"label":"FormatAccountNumber","controlWidth":12,"aggElements":{}},"offSet":0,"name":"FormatAccountNumber","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"FormatAccountNumber","lwcId":"lwc3"},{"type":"Set Values","propSetMap":{"controlWidth":12,"label":"FormatSummaryAndDescription","elementValueMap":{"Summary":"=CONCATENATE(CONCATENATE(%InitialSummary%, \" \"),%FormattedAcctNumber%)"},"showPersistentComponent":[true,false],"show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"aggElements":{}},"offSet":0,"name":"FormatSummaryAndDescription","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"FormatSummaryAndDescription","lwcId":"lwc4"},{"type":"DataRaptor Turbo Action","propSetMap":{"businessEvent":"","businessCategory":"","enableActionMessage":false,"errorMessage":{"default":null,"custom":[]},"pubsub":false,"message":{},"ssm":false,"wpm":false,"show":null,"showPersistentComponent":[true,false],"validationRequired":"Step","failureGoBackLabel":"Go Back","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","responseJSONNode":"BankAccountId","responseJSONPath":"Account:Id|1","dataRaptor Input Parameters":[{"inputParam":"AccountNumber","element":"AccountNumber"}],"ignoreCache":true,"bundle":"bankGetIdByAccountNumber","label":"GetBankAccountId","controlWidth":12,"aggElements":{}},"offSet":0,"name":"GetBankAccountId","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bDataRaptorTurboAction":true,"JSONPath":"GetBankAccountId","lwcId":"lwc5"},{"type":"Set Values","propSetMap":{"controlWidth":12,"label":"FormatAccountId","elementValueMap":{"AccountId":"=IF(%FormattedAcctNumber%<>NULL, %BankAccountId|1%, %InitialAccountId%)"},"showPersistentComponent":[true,false],"show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"aggElements":{}},"offSet":0,"name":"FormatAccountId","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"FormatAccountId","lwcId":"lwc6"},{"type":"DataRaptor Post Action","propSetMap":{"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Submit","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","remoteTimeout":30000,"bundle":"bankCreateACase","label":"CreateACase","controlWidth":12,"aggElements":{}},"offSet":0,"name":"CreateACase","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"CreateACase","lwcId":"lwc7"},{"type":"Step","propSetMap":{"businessEvent":"","businessCategory":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"chartLabel":"Done","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[true,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":"0","previousLabel":"Previous","validationRequired":true,"label":"Got it! We will be reaching out soon.","uiElements":{"Confirmation":""},"aggElements":{}},"offSet":0,"name":"Confirmation","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Line Break","rootIndex":8,"response":null,"propSetMap":{"HTMLTemplateId":"","show":null,"padding":0,"label":"LineBreak2"},"name":"LineBreak2","level":1,"JSONPath":"Confirmation:LineBreak2","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc80-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":8,"response":null,"propSetMap":{"label":"LineBreak2","padding":0,"show":null,"HTMLTemplateId":""},"name":"LineBreak4","level":1,"JSONPath":"Confirmation:LineBreak4","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc81-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Line Break","rootIndex":8,"response":null,"propSetMap":{"HTMLTemplateId":"","show":null,"padding":0,"label":"LineBreak2"},"name":"LineBreak5","level":1,"JSONPath":"Confirmation:LineBreak5","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc82-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":8,"response":null,"propSetMap":{"label":"LineBreak2","padding":0,"show":null,"HTMLTemplateId":""},"name":"LineBreak3","level":1,"JSONPath":"Confirmation:LineBreak3","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc83-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Confirmation","lwcId":"lwc8"},{"type":"Navigate Action","propSetMap":{"businessEvent":"","businessCategory":"","targetLWCLayout":"lightning","replace":false,"iconPosition":"left","iconVariant":"","iconName":"","variant":"brand","targetId":"%ContextId%","targetFilter":"Recent","loginAction":"login","recordAction":"view","objectAction":"home","targetType":"Restart OmniScript","message":{},"pubsub":false,"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"validationRequired":"Submit","label":"","controlWidth":2,"aggElements":{}},"offSet":0,"name":"SubmitAnotherIssue","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"SubmitAnotherIssue","lwcId":"lwc9"}],"bReusable":false,"bpVersion":1,"bpType":"Bank","bpSubType":"SubmitACase","bpLang":"English","bHasAttachment":false,"hasRestartAction":true,"lwcVarMap":{}};