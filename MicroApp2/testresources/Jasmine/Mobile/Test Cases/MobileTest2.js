it("MicroApp2/MobileTest2", async function() {
	var _data = testcaseData_1624631998354.dataset;
	await kony.automation.playback.waitFor(["MicroApp2/App2Form","TextField0d325bf513b3948"]);
	kony.automation.textbox.enterText(["MicroApp2/App2Form","TextField0d325bf513b3948"],_data.input.TextField0d325bf513b3948);
	kony.automation.button.click(["MicroApp2/App2Form","Button0cd0cc6fd9b3046"]);
	expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Form","lbl2"], "text")).toEqual(_data.assert.Button0cd0cc6fd9b3046);
});