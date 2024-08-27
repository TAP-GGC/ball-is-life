async function figureEight(loopAmt) {
	for (var _i0 = 0; _i0 < loopAmt; ++_i0) {
		await spin(360, 4);
		await spin(-360, 4);
		await delay(0.025);
	}
	await speak('all done', true);
}

async function startProgram() {
	setSpeed(35);
	setStabilization(true);
	await figureEight(3);
	exitProgram();
}

