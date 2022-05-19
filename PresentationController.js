define(['ApplicationManager'], function(ApplicationManager) {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function PresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(PresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    PresentationController.prototype.initializePresentationController = function() {
        
    };
  
  PresentationController.prototype.getWeatherAPI=function(data,controllerSuccessCallback,controllerErrorCallback){
    var self =this;
    try{
      alert("inside presentation controller")
      var accountManager=applicationManager.getWeatherManager();
      
      accountManager.getWeatherAPI(data,self.getWeatherSuccessCallBack.bind(this),self.getWeatherFailureCallBack.bind(this));
    }catch(e){
kony.print(e);
      alert("Error inside PresentationController"+JSON.stringify(e));
    }//end of the body catch


  };
  
  PresentationController.prototype.getWeatherSuccessCallBack = function (response) {
    try{
      alert("getWeatherSuccessCallBack :"+JSON.stringify(response));
    }catch(e){
      kony.print(e);
      alert("Error getWeatherSuccessCallBack"+JSON.stringify(e));
    }//end of the body catch
  };//end of the body getWeatherSuccessCallBack

  PresentationController.prototype.getWeatherFailureCallBack = function (response) {
    try{
      alert("getWeatherFailureCallBack :"+JSON.stringify(response));
    }catch(e){
      kony.print(e);
      alert("Error getWeatherSuccessCallBack"+JSON.stringify(e));
    }//end of the body catch
  };//end of the body getWeatherFailureCallBack


  
  
  

    return PresentationController;
});
