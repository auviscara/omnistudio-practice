global class AccountNumberPicklistController implements omnistudio.VlocityOpenInterface {
    public Boolean invokeMethod(String methodName, Map < String, Object > input, Map < String, Object > outMap, Map < String, Object > options) {
        if (methodName.equals('PopulateAccountPicklist')) {
            PopulateAccountPicklist(input, outMap, options);
        }
        return true;
    }
    // Get All Account records when the Omniscript is compiled.
    public void PopulateAccountPicklist(Map < String, Object > input, Map < String, Object > outMap, Map < String, Object > options) {
        List < Map < String, String >> UIoptions = new List < Map < String, String >> ();
        Map < String, List < Map < String, String >>> dependency = new Map <String, List < Map < String, String >>> ();

        for (Account acc: [Select AccountNumber, PrimaryContactId__c FROM Account where Account.RecordType.Name = 'Bank Account']) {
            if(!dependency.containsKey(String.valueOf(acc.PrimaryContactId__c)))
            {
                dependency.put(String.valueOf(acc.PrimaryContactId__c), new List < Map < String, String >> ());
            }
            Map < String, String > tempMap = new Map < String, String > ();
            tempMap.put('name', acc.AccountNumber);
            tempMap.put('value', acc.AccountNumber);
            UIoptions.add(tempMap);
            dependency.get(String.valueOf(acc.PrimaryContactId__c)).add(tempMap);

        }
        outMap.put('options', UIoptions);
        outMap.put('dependency', dependency);
        System.debug(JSON.serialize(outMap));
    }
}