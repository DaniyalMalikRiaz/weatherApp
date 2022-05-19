define([], function(){

  function BusinessController() {
        try{
			kony.mvc.Business.Delegator.call(this);
        }catch(e){
             alert("Error Generated module name WeatherManager businessController:: "+JSON.stringify(e));
             kony.print("Error Generated module name WeatherManager businessController:: "+JSON.stringify(e));
        }//end of the catch block body
    }//end of the BusinessController block body

 inheritsFrom(BusinessController, kony.mvc.Business.Delegator);

 BusinessController.prototype.getWeatherAPI=function(data,presentationSuccessCallback,presentationErrorCallback){
      try{
        alert("call BusinessController");
        //alert(data);
      let KNYMobileFabric=kony.sdk.getCurrentInstance();
      let serviceName = "Weather";
      let operationName =  "getWeather";
      let headers= {};
      let integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
	
      integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure);
      }catch(e){
      alert("Error getWeatherAPI"+JSON.stringify(e));
      }//end of the catch body
      function operationSuccess(res){
        alert("success");
      presentationSuccessCallback(res);
      }//end of the body operationSuccess

       function operationFailure(res){
      alert("operationFailure :"+JSON.stringify(res));
      presentationErrorCallback(res);
      }//end of the body operationFailure

      };//end of the getHelloWorld block body
return BusinessController;

});//end of the define function block body
