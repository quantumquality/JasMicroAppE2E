it("BaseApp/Mobilebasetest", async function() {
	var _data = testcaseData_1624872310067.dataset;
	await kony.automation.playback.waitFor(["BaseApp/Home","Button0deae6ed2d64e48"]);
	kony.automation.button.click(["BaseApp/Home","Button0deae6ed2d64e48"]);
	await kony.automation.device.deviceBack();
});