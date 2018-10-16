sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/GenericTile",
	"sap/m/Text",
	"sap/m/TileContent",
	"sap/m/MessageToast"
	], function (Control, GenericTile, Text, TileContent, MessageToast) {
		"use strict";
		
		return Control.extend("TestProject.TestProject.control.ItemTile", {
			
			metadata : {
				properties : {
					header : {type : "string", defaultValue : ""},
					description : {type : "string", defaultValue : ""},
					icon : {type : "icon"}
				},
				aggregations : {
					_tile : {type : "sap.m.GenericTile", multiple : false, visibility : "hidden"}
				},
				events : {
					press : {
						
					}
				}
			},
			
			init : function() {
				
				var oTile = new GenericTile({
					press : this._onPress.bind(this)
				});
				oTile.setHeader(this.getHeader());
				this.oDescriptionText = new Text();
				oTile.addTileContent(new TileContent().setContent(this.oDescriptionText));
				this.setAggregation("_tile", oTile);
				
				//this.getAggregation("_tile").addTileContent(new TileContent().setContent(this.getAggregation("_text")));
				//this.getAggregation("_tile").getAggregation("TileContent").setAggregation("content", this.getAggregation("_text"));
			},
			
			onBeforeRendering : function() {
				this.getAggregation("_tile").setHeader(this.getHeader());
				this.oDescriptionText.setText(this.getDescription());
			},
			
			_onPress : function() {
				this.fireEvent("press");
			},
			
			renderer : function(oRm, oControl) {
				oRm.write("<div");
				
				oRm.writeControlData(oControl);
				oRm.writeClasses();
				
				oRm.write(">");
				
				oRm.renderControl(oControl.getAggregation("_tile"));
				oRm.renderControl(oControl.getAggregation("_text"));
				
				oRm.write("</div>");
			},
			
			onTest : function(oTest) {
				
				var i = 0;
				
				i = 1;
				MessageToast.show("Dies ist ein eindeutiger Test");
				
				var s = "ich will jetzt wirklich wissen, wie viel" + 
					"das hier kann";
					
				var ss = "bisher hat es micht nämlich nicht " +
					"sonderlich überzeugt";
					
				var sss = "die analyse mag zwar automatisch triggern...";
				
				i = 1;
				
				var b = "aber die projektseite musste ich " +
					"bisher immer wieder selbst " +
					"aktualisieren";
					
				
				i = 1;
				
				var bb = "zusätlich hat codebeat nicht eine der duplikationen erkannt, " +
					"obwohl es eigentlich einen sehr harten fokus darauf legen sollte";
					
				
				var bbb = "deshalb versuche ich nun eine funktion zu erstellen, " +
					"die sooooooo lang und komplex ist, " +
					"dass sie einen megamäßigen einfluss auf die gesamtbewertung haben muss";
					
				var bbbb = "dazu jetzt ein paar kontrollstrukturen";
				
				
				
				
				if (true) {
					
					for (var c = 0; c < 17; c--) {
						
						if (c > 20) {
							c = 0;
						}
						else if (c < 0) {
							i = 1;
						}
						
						for (var t = 0; true; t++) {
							if (t == 4) {
								break;
							}
							else {
								MessageToast.show("Doing nothing");
								if (ss === sss) {
									var baum = "baum";
								}
								else if (ss === s) {
									var baum = "baum";
								}
								else {
									var baum = "baum";
								}
							}
						}
						
					}
					
				}
				else {
					
					for (var r = 0; r < 17; r--) {
						
						if (r > 20) {
							r = 0;
						}
						else if (r < 0) {
							i = 1;
						}
						
						for (var x = 0; true; x++) {
							if (x == 4) {
								break;
							}
							else {
								MessageToast.show("Doing nothing");
							}
						}
						
					}
					
				}
				
				
			}
			
			
		});
		
		
	}
);