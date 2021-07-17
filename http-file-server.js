const fs = require("fs")
const http = require("http")
const [,, port, filePath] = process.argv;

const server = http.createServer((req, res) => {
	const readStream = fs.createReadStream(filePath)
	readStream.pipe(res)
})
server.listen(port)
