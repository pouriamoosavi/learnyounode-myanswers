const http = require("http")
const [,, port] = process.argv;

const server = http.createServer((req, res) => {
	if(req.method === "POST") {
		req.on("data", chunk => {
			res.write(chunk.toString().toUpperCase(), 'utf-8')
		}).on("end", () => {
			res.end();
		})
	}
})
server.listen(port)
