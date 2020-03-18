/*
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Assume the screen produces 60 frames every second.
*/
function frames(minutes, fps) {
	return minutes * 60 * fps;
}