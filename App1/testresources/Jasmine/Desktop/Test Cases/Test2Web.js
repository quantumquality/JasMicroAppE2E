it("App1/Test2Web", async function() {
	var _data = testcaseData_1624871913477.dataset;
	await kony.automation.playback.waitFor(["BaseApp/Form2","Button0a9f3af19913d44"]);
	kony.automation.button.click(["BaseApp/Form2","Button0a9f3af19913d44"]);
	await kony.automation.playback.waitFor(["App1/Form1","tb2"]);
	kony.automation.textbox.enterText(["App1/Form1","tb2"],_data.input.tb2);
	kony.automation.button.click(["App1/Form1","Button0a1e90728a82c40"]);
	expect(kony.automation.widget.getWidgetProperty(["App1/Form1","lbl1"], "text")).toEqual(_data.assert.Button0a1e90728a82c40);
});