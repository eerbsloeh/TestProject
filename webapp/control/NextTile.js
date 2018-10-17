sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/GenericTile",
	"sap/m/Text",
	"sap/m/TileContent",
	"sap/m/MessageToast"
	], function (Control, GenericTile, Text, TileContent, MessageToast) {
		"use strict";
		
		return Control.extend("TestProject.TestProject.control.NextTile", {
			
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
				
				var tile = new GenericTile({
					press : this._onPress.bind(this)
				});
				tile.setHeader(this.getHeader());
				this.oDescriptionText = new Text();
				tile.addTileContent(new TileContent().setContent(this.oDescriptionText));
				this.setAggregation("_tile", tile);
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
			
			renderer : function(oRn, oControl) {
				oRn.write("<div");
				
				oRn.writeControlData(oControl);
				oRn.writeClasses();
				
				oRn.write(">");
				
				oRn.renderControl(oControl.getAggregation("_text"));
				oRn.renderControl(oControl.getAggregation("_tile"));
				
				oRn.write("</div>");
			}
			
			
		});
		
		
	}
);