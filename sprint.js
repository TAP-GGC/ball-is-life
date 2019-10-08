
async function startProgram() {
	setStabilization(true);
	await roll(0, 40, 1);
	await delay(1);
	await roll(180, 40, 1.2);
	await delay(1);
	await roll(0, 40, 2);
	await delay(1);
}
