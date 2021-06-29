it("App1/App1Mobiletest2", async function() {
	var _data = testcaseData_1624868914715.dataset;
	await kony.automation.playback.waitFor(["BaseApp/Home","Button0deae6ed2d64e48"]);
	kony.automation.button.click(["BaseApp/Home","Button0deae6ed2d64e48"]);
	await kony.automation.playback.waitFor(["App1/Form1","tb2"]);
	kony.automation.textbox.enterText(["App1/Form1","tb2"],_data.input.tb2);
	kony.automation.button.click(["App1/Form1","Button0bc4c036f772b4c"]);
	expect(kony.automation.widget.getWidgetProperty(["App1/Form1","lbl1"], "text")).toEqual(_data.assert.Button0bc4c036f772b4c);
});