sap.ui.define(
	["sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"], 
	function(Controller, JSONModel,MessageToast) {
	"use strict";
	return Controller.extend("controller.App", {
		onInit:function  () {

		

			var oData = {
				ProductCollection : [{
				cat:"Name",
				info:"found this on bed at \n 2015:1:25 11:08",
				ProductPicUrl:"1.png"
				}]
			};

			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("http://users.aalto.fi/~hassanm1/mock.json");
			

			this.getView().setModel(oModel);

			
		}
		
	});
});