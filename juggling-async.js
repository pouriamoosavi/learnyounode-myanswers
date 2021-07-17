const http = require("http");

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let result1 = "";
let result2 = "";
let result3 = "";

http.get(url1, (res) => {
    res.setEncoding('utf-8');
    res.on("data", (data) => {
		result1 += data.toString()
	}).on("end", () => {
		checkAndPrint();
	}).on("error", console.log)
})

http.get(url2, (res) => {
    res.setEncoding('utf-8');
    res.on("data", (data) => {
        result2 += data.toString()
    }).on("end", () => {
        checkAndPrint();
    }).on("error", console.log)
})

http.get(url3, (res) => {
    res.setEncoding('utf-8');
    res.on("data", (data) => {
        result3 += data.toString()
    }).on("end", () => {
        checkAndPrint();
    }).on("error", console.log)
})

function checkAndPrint() {
	if(result1 && result2 && result3) {
		console.log(result1)
		console.log(result2)
		console.log(result3)
	}
}

