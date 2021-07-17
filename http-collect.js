const http = require("http");
const url = process.argv[2];

let result = "";
http.get(url, (res) => {
    res.setEncoding('utf-8');
    res.on("data", (data) => {
		result += data.toString()
	}).on("end", () => {
		console.log(result.length)
		console.log(result)
		result = "";
	}).on("error", console.log)
})

