define([], function() {

  function ApplicationManager(){
    this.applicationManagerInstance= null;
    this.applicationMode = null;
    this.HashTable= null;
    this.serviceResponseHandler = null;
    this.numberOfAsyncForPreAppInit=3;
  }//end of the ApplicationManager function block body

  ApplicationManager.getApplicationManager = function(){
    if (!this.applicationManagerInstance)
      this.applicationManagerInstance = new ApplicationManager();
    return this.applicationManagerInstance;
  };//end of the getApplicationManager function block body

  ApplicationManager.prototype.getWeatherManager = function() {
    alert("inside application manager");
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("WeatherManager").businessController;
  };//end of the getWeatherManager function block body


  return ApplicationManager;
});//end of the ApplicationManager define function block body
