var currentTime = 0;
var waitingInterval = 100;
var waitTime = 4000;
var percentage = 0;
function writeWaitingPercentage(p){

	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting.... ${p}%`);
}

var interval = setInterval(function(){
	currentTime += waitingInterval;
	percentWaited = Math.floor(currentTime/waitTime * 100);
	writeWaitingPercentage(percentWaited);


},waitingInterval);


setTimeout(function(){
	clearInterval(interval);
	writeWaitingPercentage(100);
	process.stdout.write("\n\n\n\n");
	process.stdout.write("Done!");	

} ,waitTime)


writeWaitingPercentage(percentage);
