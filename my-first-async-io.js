const fs = require("fs")
const fileName = process.argv[2];

let count = 0;
fs.createReadStream(fileName).on('data', (chunk) => {
	for(let char of chunk.toString()){
		count += char === '\n'
	}
}).on('end', () => {
	console.log(count);
})
