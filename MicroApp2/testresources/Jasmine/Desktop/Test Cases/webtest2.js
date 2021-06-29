it("MicroApp2/webtest2", async function() {
	var _data = testcaseData_1624629935286.dataset;
	await kony.automation.playback.waitFor(["MicroApp2/App2Webform","TextField0j5ed27cdf2f340"]);
	kony.automation.textbox.enterText(["MicroApp2/App2Webform","TextField0j5ed27cdf2f340"],_data.input.TextField0j5ed27cdf2f340);
	kony.automation.button.click(["MicroApp2/App2Webform","Button0g3e3fbbc5cd641"]);
	expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Webform","lbl2"], "text")).toEqual(_data.assert.Button0g3e3fbbc5cd641);
});