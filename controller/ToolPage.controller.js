sap.ui.define([
    "sap/ui/Device",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Popover",
	"sap/m/Button",
	"sap/m/library",
    "sap/ui/core/Messaging",
    'sap/ui/core/message/Message',
    'sap/ui/core/library',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Device, Controller, JSONModel, Popover, Button, library,  ODataModel, MessageToast, Fragment) {
        "use strict";
        
        var ButtonType = library.ButtonType,
		PlacementType = library.PlacementType;

        return Controller.extend("portfolio.controller.ToolPage", {
            onInit: function () {
                let oModel = new JSONModel(sap.ui.require.toUrl("portfolio/model/data.json"));
                this.getView().setModel(oModel);
                this._setToggleButtonTooltip(!Device.system.desktop);

    
        
            },


            onItemSelect: function (oEvent) {
                var oItem = oEvent.getParameter("item");
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
            },
            
            handleUserNamePress: function (event) {
                var oPopover = new Popover({
                    showHeader: false,
                    placement: PlacementType.Bottom,
                    content: [
                        new Button({
                            text: 'Feedback',
                            type: ButtonType.Transparent
                        }),
                        new Button({
                            text: 'Help',
                            type: ButtonType.Transparent
                        }),
                        new Button({
                            text: 'Logout',
                            type: ButtonType.Transparent
                        })
                    ]
                }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
    
                oPopover.openBy(event.getSource());
            },

            onSideNavButtonPress: function () {
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
    
                this._setToggleButtonTooltip(bSideExpanded);
    
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },
    
            _setToggleButtonTooltip: function (bLarge) {
                var oToggleButton = this.byId('sideNavigationToggleButton');
                if (bLarge) {
                    oToggleButton.setTooltip('Large Size Navigation');
                } else {
                    oToggleButton.setTooltip('Small Size Navigation');
                }
        },
            onOpenDialog : function () {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "pedagio.view.Registro"
                    });
                } 
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },
            onCloseDialog: function(){
                this.byId("helloDialog").close();
            }
        
    });
    });
