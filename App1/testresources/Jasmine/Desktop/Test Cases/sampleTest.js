it("App1/sampleTest", async function() {
	var _data = testcaseData_1624623659499.dataset;
	await kony.automation.playback.waitFor(["App1/Form1","TextField0b067357c074749"]);
	kony.automation.textbox.enterText(["App1/Form1","TextField0b067357c074749"],_data.input.TextField0b067357c074749);
	kony.automation.button.click(["App1/Form1","Button0a1e90728a82c40"]);
	expect(kony.automation.widget.getWidgetProperty(["App1/Form1","lbl1"], "text")).toEqual(_data.assert.Button0a1e90728a82c40);
});