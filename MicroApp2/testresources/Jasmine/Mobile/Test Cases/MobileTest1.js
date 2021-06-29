it("MicroApp2/MobileTest1", async function() {
	var _data = testcaseData_1624631894465.dataset;
	await kony.automation.playback.waitFor(["MicroApp2/App2Form","Button0hf7487e849fb44"]);
	kony.automation.button.click(["MicroApp2/App2Form","Button0hf7487e849fb44"]);
	expect(kony.automation.widget.getWidgetProperty(["MicroApp2/App2Form","lbl1"], "text")).toEqual(_data.assert.Button0hf7487e849fb44);
});