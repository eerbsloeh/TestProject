sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/GenericTile",
	"sap/m/Text",
	"sap/m/TileContent"
	], function (Control, GenericTile, Text, TileContent) {
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
			}
			
			
		});
		
		
	}
);