const http = require("http");
const url = process.argv[2];

http.get(url, (res) => {
	res.setEncoding('utf-8');
	/*
	res.on('data', (chunk) => {
		console.log(chunk);
	}).on('error', (err) => {
		console.log(err)
	})
	*/
	res.on("data", console.log)
	   .on("error", console.log)
})


