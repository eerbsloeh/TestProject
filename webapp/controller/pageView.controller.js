sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/routing/Router",
	"sap/m/MessageToast"
], function (Controller, Router, MessageToast) {
	"use strict";

	return Controller.extend("TestProject.TestProject.controller.pageView", {

		onInit : function() {
			
		},

		onImagePress : function(oEvent) {
			MessageToast.show("Baum");
			this.byId("treeCarousel").next();
		},
		
		onNoImagePress : function(oEvent) {
			MessageToast.show("Kein Baum");
			this.byId("treeCarousel").next();
		},
		
		onOrderPress : function(oEvent) {
			var oCarousel = this.byId("treeCarousel");
			var sPage = oCarousel.getActivePage();
			var iPage = parseInt(sPage.substring(5, 6), 10);
			
			var oImage = this.byId("page" + iPage + "_image");
			var oList = this.byId("page" + iPage + "_list");
			
			MessageToast.show(oImage.getSrc());
			
		},
		
		onTilePress : function() {
			MessageToast.show("Klick");
		}

	});
});