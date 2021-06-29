define(["Test Cases/Navigate2Micro_data","Test Cases/MobileTest1_data","Test Cases/MobileTest2_data"], function() {
	describe("MicroApp2/MobileSuite", function() {
		it("MicroApp2/Navigate2Micro", async function() {
			var _data = testcaseData_1624954247968.dataset;
			await kony.automation.playback.waitFor(["BaseApp/Home","Button0jb8aceabbbf546"]);
			kony.automation.button.click(["BaseApp/Home","Button0jb8aceabbbf546"]);
		});
		
		it("MicroApp2/MobileTest1", async function() {
			var _data = testcaseData_1624631894465.dataset;
			await kony.automation.playback.waitFor(["MicroApp2/App2Form","Button0hf7487e849fb44"]);
			kony.automation.button.click(["MicroApp2/App2Form","Button0hf7487e849fb44"]);
			expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Form","lbl1"], "text")).toEqual(_data.assert.Button0hf7487e849fb44);
		});
		
		it("MicroApp2/MobileTest2", async function() {
			var _data = testcaseData_1624631998354.dataset;
			await kony.automation.playback.waitFor(["MicroApp2/App2Form","TextField0d325bf513b3948"]);
			kony.automation.textbox.enterText(["MicroApp2/App2Form","TextField0d325bf513b3948"],_data.input.TextField0d325bf513b3948);
			kony.automation.button.click(["MicroApp2/App2Form","Button0cd0cc6fd9b3046"]);
			expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Form","lbl2"], "text")).toEqual(_data.assert.Button0cd0cc6fd9b3046);
		});
	});
});