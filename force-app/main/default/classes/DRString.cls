global class DRString implements omnistudio.VlocityOpenInterface 
{
global Boolean invokeMethod(String methodName, Map<String, Object> inputs, Map<String, Object> output, Map<String, Object> options)
    {
        if (methodName == 'replace')
        {
            List<Object> arguments = (List<Object>)inputs.get('arguments');
            output.put('result', replace(arguments));
        }
        return true;
    }
     
    String replace(List<Object> arguments){
        String str = String.valueOf(arguments[0]);
        String target = String.valueOf(arguments[1]);
        String replacement = String.valueOf(arguments[2]);
        return str.replace(target,replacement);
    } 
}