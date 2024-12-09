sap.ui.define([
    "sap/ui/core/UIComponent",
    "capcv/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },
      
        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        },
        // getComputedStyle() { return window.getComputedStyle(this.getComputedStyle())},
        // getRouter() { return this.getRouter()},
        // getModel(name) { return this.getModel(name); },
        // getSelection() { return this.getModel("selection"); },
        // getView() { return this.getView()},
        // UIComponent.prototype.getMetadata = function() { return this.metadata;}

    });
});