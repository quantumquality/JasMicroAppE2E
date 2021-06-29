define(["Test Cases/Navigate2MicroApp_data","Test Cases/Webtest_data","Test Cases/webtest2_data"], function() {
	describe("MicroApp2/WebSuite", function() {
		it("MicroApp2/Navigate2MicroApp", async function() {
			var _data = testcaseData_1624952295961.dataset;
			await kony.automation.playback.waitFor(["BaseApp/Form2","Button0i3037888b6874a"]);
			kony.automation.button.click(["BaseApp/Form2","Button0i3037888b6874a"]);
		});
		
		it("MicroApp2/Webtest", async function() {
			var _data = testcaseData_1624629729043.dataset;
			await kony.automation.playback.waitFor(["MicroApp2/App2Webform","Button0a013e8a2ea7e4f"]);
			kony.automation.button.click(["MicroApp2/App2Webform","Button0a013e8a2ea7e4f"]);
			expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Webform","lbl1"], "text")).toEqual(_data.assert.Button0a013e8a2ea7e4f);
		});
		
		it("MicroApp2/webtest2", async function() {
			var _data = testcaseData_1624629935286.dataset;
			await kony.automation.playback.waitFor(["MicroApp2/App2Webform","TextField0j5ed27cdf2f340"]);
			kony.automation.textbox.enterText(["MicroApp2/App2Webform","TextField0j5ed27cdf2f340"],_data.input.TextField0j5ed27cdf2f340);
			kony.automation.button.click(["MicroApp2/App2Webform","Button0g3e3fbbc5cd641"]);
			expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Webform","lbl2"], "text")).toEqual(_data.assert.Button0g3e3fbbc5cd641);
		});
	});
});