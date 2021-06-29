it("App1/sampleTest", async function() {
	var _data = testcaseData_1624619874850.dataset;
	await kony.automation.playback.waitFor(["App1/Form1","TextField0h4d607637bd74f"]);
	kony.automation.textbox.enterText(["App1/Form1","TextField0h4d607637bd74f"],_data.input.TextField0h4d607637bd74f);
	kony.automation.button.click(["App1/Form1","Button0bc4c036f772b4c"]);
	expect(kony.automation.widget.getWidgetProperty(["App1/Form1","lbl1"], "text")).toEqual(_data.assert.Button0bc4c036f772b4c);
	kony.automation.textbox.enterText(["App1/Form1","TextField0h4d607637bd74f"],_data.input.TextField0h4d607637bd74f1624619930425);
	kony.automation.button.click(["App1/Form1","Button0bc4c036f772b4c"]);
	expect(kony.automation.widget.getWidgetProperty(["App1/Form1","lbl1"], "text")).toEqual(_data.assert.Button0bc4c036f772b4c1624620102010);
});