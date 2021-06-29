it("MicroApp2/Webtest", async function() {
	var _data = testcaseData_1624629729043.dataset;
	await kony.automation.playback.waitFor(["MicroApp2/App2Webform","Button0a013e8a2ea7e4f"]);
	kony.automation.button.click(["MicroApp2/App2Webform","Button0a013e8a2ea7e4f"]);
	expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Webform","lbl1"], "text")).toEqual(_data.assert.Button0a013e8a2ea7e4f);
});