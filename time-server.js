const net = require("net")

const port = process.argv[2];

const server = net.createServer((socket) => {
	const date = new Date();
	
	let month = sureTwoDigit(date.getMonth()+1);
    let day = sureTwoDigit(date.getDate())
	let hour = sureTwoDigit(date.getHours())
	let minute = sureTwoDigit(date.getMinutes())

	socket.end(`${date.getFullYear()}-${month}-${day} ${hour}:${minute}\n`)
})
server.listen(port)

function sureTwoDigit(number) {
    //if(parseInt(number/10) === 0) {
	if(number < 10){
        return "0"+number;
    }
	return number;
}
