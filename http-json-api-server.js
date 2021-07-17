const http = require("http")
const [,, port] = process.argv;

const server = http.createServer((req, res) => {
	if(req.method === "GET") {
		const parsedUrl = new URL(req.url, "http://localhost");
		const queryIsoDate = parsedUrl.searchParams.get("iso")
		if(parsedUrl.pathname === "/api/parsetime") {
			if(!queryIsoDate) return res.writeHead(400).end()

			const date = new Date(queryIsoDate);
			const resultJson = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}
			return resJson(res, resultJson);
		} else if (parsedUrl.pathname === "/api/unixtime") {
			if(!queryIsoDate) return res.writeHead(400).end()

			const date = new Date(queryIsoDate)
			const resultJson = {
				unixtime: date.getTime()
			}
			return resJson(res, resultJson);
		} else {
			return res.writeHead(404).end()
		}
	}
})
server.listen(port)

function resJson(res, data) {
	res.writeHead(200, {"Content-Type": "application/json"}).write(JSON.stringify(data))
	return res.end()
}
