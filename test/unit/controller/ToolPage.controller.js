/*global QUnit*/

sap.ui.define([
	"portfolio/controller/ToolPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ToolPage Controller");

	QUnit.test("I should test the ToolPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
